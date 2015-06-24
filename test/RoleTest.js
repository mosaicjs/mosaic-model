import expect from 'expect.js';
import { Role } from '../';

describe('Model.Role', function(){
    it('should contain some pre-defined roles', function() {
        expect(!!Role).to.be(true);
        expect(!!Role.Nobody).to.be(true);
        expect(!!Role.Reader).to.be(true);
        expect(!!Role.Editor).to.be(true);
        expect(!!Role.Admin).to.be(true);
    });

    it('should return right role keys for role classes', function() {
        expect(Role.key).to.eql('role');
        expect(Role.Nobody.key).to.eql('nobody');
        expect(Role.Reader.key).to.eql('reader');
        expect(Role.Editor.key).to.eql('editor');
        expect(Role.Admin.key).to.eql('admin');
    });
    
    it('should return right role keys for role instances', function() {
        expect(new Role().key).to.eql('role');
        expect(new Role.Nobody().key).to.eql('nobody');
        expect(new Role.Reader().key).to.eql('reader');
        expect(new Role.Editor().key).to.eql('editor');
        expect(new Role.Admin().key).to.eql('admin');
    });
    
    it('should return right role hierarchy for role classes', function() {
        expect(Role.hierarchy).to.eql([]);
        expect(Role.Nobody.hierarchy).to.eql(['nobody']);
        expect(Role.Reader.hierarchy).to.eql(['nobody', 'reader']);
        expect(Role.Editor.hierarchy).to.eql(['nobody', 'reader', 'editor']);
        expect(Role.Admin.hierarchy).to.eql(['nobody', 'reader', 'editor', 'admin']);
    });
    
    it('should return right role hierarchy for role instances', function() {
        expect(new Role().hierarchy).to.eql([]);
        expect(new Role.Nobody().hierarchy).to.eql(['nobody']);
        expect(new Role.Reader().hierarchy).to.eql(['nobody', 'reader']);
        expect(new Role.Editor().hierarchy).to.eql(['nobody', 'reader', 'editor']);
        expect(new Role.Admin().hierarchy).to.eql(['nobody', 'reader', 'editor', 'admin']);
    });
    
    it('should provide right keys and hierarchies for user-defined roles', function() {
        class MyRole extends Role.Editor {}
        expect(MyRole.key).to.eql('my-role');
        expect(new MyRole().key).to.eql('my-role');
        expect(MyRole.hierarchy).to.eql(['nobody', 'reader', 'editor', 'my-role']);
        expect(new MyRole().hierarchy).to.eql(['nobody', 'reader', 'editor', 'my-role']);
    });

    
    
});
