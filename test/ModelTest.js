import expect from 'expect.js';
import Model from '../';

describe('Model', function(){
    it('should define all entities', function() {
        expect(!!Model.Workspace).to.be(true);
        expect(!!Model.Project).to.be(true);
        expect(!!Model.Folder).to.be(true);
        expect(!!Model.Resource).to.be(true);
    });
});
