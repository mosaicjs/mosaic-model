import expect from 'expect.js';
import Model from '../';

describe('Model.Resource', function(){
    it('should be able to wrap simple data and give access to its fields', function() {
        let addr = {
            country : 'France',
            city : 'Paris',
            street : 'rue de Rivoli'
        };
        let obj = {
            msg : 'Hello!',
            addr : addr
        }; 
        let resource = new Model.Resource({
            data : obj
        });
        expect(resource.data).to.be(obj);
        expect(resource.get('msg')).to.be('Hello!');
        expect(resource.get('addr')).to.be(addr);
        expect(resource.get('addr.country')).to.eql('France');
        expect(resource.get('addr.city')).to.eql('Paris');
        expect(resource.get('addr.street')).to.eql('rue de Rivoli');
        resource.set('addr.street', 'rue du Louvre');
        expect(resource.get('addr.street')).to.eql('rue du Louvre');
        expect(addr.street).to.eql('rue du Louvre');
    });
});
