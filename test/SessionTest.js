import Promise from 'promise';
import { Adaptable, AdapterManager } from 'mosaic-adapters';
import expect from 'expect.js';
import Model from '../';

describe('Model.Session', function(){
    it('should map role keys to real roles', function() {
        let session = new Model.Session();
        expect(Model.Role.Nobody).to.be(session.getRole('nobody'));
        expect(Model.Role.Reader).to.be(session.getRole('reader'));
        expect(Model.Role.Editor).to.be(session.getRole('editor'));
        expect(Model.Role.Admin).to.be(session.getRole('admin'));
    });
    it('should return a user identifier defined in parameters', function() {
        let session = new Model.Session();
        expect(session.userId).to.be(undefined);
        session = new Model.Session({ userId : 'john.smith' });
        expect(session.userId).to.be('john.smith');
    });
    it('should execute commands', function(done) {
        class MyCommand extends Model.Command.Update {
            execute(){ return 'Hello, ' + this.params.msg + '!'; }
        }
        let session = new Model.Session({ userId : 'john.smith' });
        let command = new MyCommand({ msg: 'World' });
        session.execute(command).then(function(result){
            expect(result).to.eql('Hello, World!');
        }).then(done, done);
    });
    
    it('should check if the current user has rights to execute commands', function(done) {
        // Define a new role
        class SpecialRole extends Model.Role { }
        // A new command updating the 'message' field of the target object and 
        // returning this value.
        class MyCommand extends Model.Command.Update {
            execute(){
                this.target.message = 'Hello, ' + this.params.msg + '!';
                return this.target.message;
            }
        }
        
        // Create a new session and register this role in the session.
        // Now it become available for the session by its key.
        let session = new Model.Session({ userId : 'john.smith' });
        session.registerRole(SpecialRole);

        // The target object defines '.roles' and '.access' fields
        // defining member roles and role access
        let obj = {
            '.roles' : { 'john.smith' : 'special-role' },
            '.access' : {
                // Rules for our new SpecialRole
                'special-role' : {
                    // It allows 'update' operations. 
                    // And our test commands will inherit from the 'update'.
                    // So it should work.
                    allow: ['update']
                }
            }
        };
        Promise.resolve().then(function(){
            let command = new MyCommand({ msg: 'World' }, obj);
            expect(obj.message).to.be(undefined);
            return session.execute(command).then(function(result){
                expect(result).to.eql('Hello, World!');
                expect(obj.message).to.eql('Hello, World!');
            })            
        }).then(function(){
            // Explicitly deny access to the 'my-command' for this role
            obj['.access']['special-role'].deny = ['my-command'];
            // Now the same operation should fail
            let command = new MyCommand({ msg: 'World' }, obj);
            delete obj.message;
            expect(obj.message).to.be(undefined);
            return session.execute(command).then(function(result){
                expect().fail();
            }, function(err){
                expect(err.message).to.eql('[my-command] Access denied for the user "john.smith".')
            });
        }).then(done, done);

    });
});
