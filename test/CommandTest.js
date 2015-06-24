import expect from 'expect.js';
import { Command } from '../';

describe('Model.Command', function(){
    it('should contain some pre-defined commands', function() {
        expect(!!Command).to.be(true);
        expect(!!Command.Create).to.be(true);
        expect(!!Command.Read).to.be(true);
        expect(!!Command.Update).to.be(true);
        expect(!!Command.Delete).to.be(true);
    });

    it('should return right Command keys for command classes', function() {
        expect(Command.key).to.eql('command');
        expect(Command.Create.key).to.eql('create');
        expect(Command.Read.key).to.eql('read');
        expect(Command.Update.key).to.eql('update');
        expect(Command.Delete.key).to.eql('delete');
    });
    
    it('should return right command keys for command instances', function() {
        expect(new Command().key).to.eql('command');
        expect(new Command.Create().key).to.eql('create');
        expect(new Command.Read().key).to.eql('read');
        expect(new Command.Update().key).to.eql('update');
        expect(new Command.Delete().key).to.eql('delete');
    });

    it('should return right Command hierarchy for command classes', function() {
        expect(Command.hierarchy).to.eql([]);
        expect(Command.Create.hierarchy).to.eql(['create']);
        expect(Command.Read.hierarchy).to.eql(['read']);
        expect(Command.Update.hierarchy).to.eql(['update']);
        expect(Command.Delete.hierarchy).to.eql(['delete']);
    });
    
    it('should return right command hierarchy for command instances', function() {
        expect(new Command().hierarchy).to.eql([]);
        expect(new Command.Create().hierarchy).to.eql(['create']);
        expect(new Command.Read().hierarchy).to.eql(['read']);
        expect(new Command.Update().hierarchy).to.eql(['update']);
        expect(new Command.Delete().hierarchy).to.eql(['delete']);
    });
    
    it('should provide right keys and hierarchies for user-defined commands', function() {
        class MyCommand extends Command.Update {}
        expect(MyCommand.key).to.eql('my-command');
        expect(new MyCommand().key).to.eql('my-command');
        expect(MyCommand.hierarchy).to.eql(['update', 'my-command']);
        expect(new MyCommand().hierarchy).to.eql(['update', 'my-command']);
    });
    
});
