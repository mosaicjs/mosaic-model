import expect from 'expect.js';
import Model from '../';

describe('ModelEntity', function(){
    class MyClass {
        constructor(options){
            options = options || {};
            Model.ModelEntity.init(this, options);
        }
    }
    Model.ModelEntity.addTo(MyClass);

    it('should rise an error if a session is not defined in constructor parameters', function() {
        try {
            let obj = new MyClass();
            expect().fail();
        } catch (err){
            expect(!!err).to.be(true);
            expect(err.message).to.eql('Session is not defined or has a bad type.');
        }
    });
    it('should set a defined session', function() {
        let session = new Model.Session({ msg : 'Hello!' });
        let obj = new MyClass({ session: session });
        expect('session' in obj).to.be(true);
        expect(obj.session).to.be(session);
    });
    it('should not allow to change an already defined session', function() {
        let session = new Model.Session({ msg : 'Hello!' });
        let obj = new MyClass({ session: session });
        expect(obj.session).to.be(session);
        try {
            obj.session = new Model.Session({ msg: 'Olleh!' });
            expect().fail();
        } catch (err) {
            expect(err.message).to.eql('The "session" property can not be changed.');
        }
    });
    it('should not allow to delete an already defined session', function() {
        let session = new Model.Session({ msg : 'Hello!' });
        let obj = new MyClass({ session: session });
        expect(obj.session).to.be(session);
        delete obj.session; // This operation should not change the session value
        expect(obj.session).to.be(session);
    });
});
