import expect from 'expect.js';
import { AccessRules } from '../';

describe('AccessRules', function(){
    // Actions
    class Read {}
    class Edit {}
    class Create extends Edit {}
    class ReadContent extends Read {}
    class CreateContent extends Create {}
    class EditContent extends Edit {}
    class DeleteContent extends Edit {}
    
    // Roles
    class Nobody {}
    class Admin {}
    class User {}
    class Editor extends User {}
    class Contributor extends Editor {}
    
    let rules;
    beforeEach(function(){
        rules = new AccessRules({
            'admin' : { allow: ['create', 'read', 'edit', 'delete'] },
            'user' : { allow: [ 'read' ] },
            'editor' : { allow: ['create', 'edit'] },
            'contributor' : { deny: ['create'] },
        });        
    })
    
    it('should deny all access for unknown role-action combinations', function() {
        expect(rules.checkAccess(Nobody, Edit)).to.be(false);
        expect(rules.checkAccess(Nobody, Read)).to.be(false);
        expect(rules.checkAccess(Nobody, ReadContent)).to.be(false);
        expect(rules.checkAccess(Nobody, CreateContent)).to.be(false);
        expect(rules.checkAccess(Nobody, EditContent)).to.be(false);
        expect(rules.checkAccess(Nobody, DeleteContent)).to.be(false);
    });
    
    it('should allow explicitly allowed actions', function() {
        expect(rules.checkAccess(Admin, Read)).to.be(true);
        expect(rules.checkAccess(Admin, Edit)).to.be(true);
        expect(rules.checkAccess(User, Read)).to.be(true);
    });
    it('should allow inherited actions', function() {
        expect(rules.checkAccess(Editor, CreateContent)).to.be(true);
        expect(rules.checkAccess(Editor, EditContent)).to.be(true);
        expect(rules.checkAccess(Editor, DeleteContent)).to.be(true);
        expect(rules.checkAccess(Editor, ReadContent)).to.be(true);
    });
    it('should take into account explicitly denied actions', function() {
        expect(rules.checkAccess(Editor, Create)).to.be(true);
        expect(rules.checkAccess(Editor, CreateContent)).to.be(true);
        expect(rules.checkAccess(Contributor, Create)).to.be(false);
        expect(rules.checkAccess(Contributor, CreateContent)).to.be(false);
    });
    
});
