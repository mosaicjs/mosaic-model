import expect from 'expect.js';
import { Role, Session } from '../';

describe('Model.Session', function(){
    it('should map role keys to real roles', function() {
        let session = new Session();
        expect(Role.Nobody).to.be(session.getRole('nobody'));
        expect(Role.Reader).to.be(session.getRole('reader'));
        expect(Role.Editor).to.be(session.getRole('editor'));
        expect(Role.Admin).to.be(session.getRole('admin'));
    });
    it('should return a user identifier defined in parameters', function() {
        let session = new Session();
        expect(session.userId).to.be(undefined);
        session = new Session({ userId : 'john.smith' });
        expect(session.userId).to.be('john.smith');
    });
});
