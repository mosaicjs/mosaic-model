import { Data } from 'mosaic-dataset';
import ModelEntity from './ModelEntity';

/**
 * Each project member has the same identifiers as users.
 */
export default class ProjectMember extends Data {
    constructor(options, ...args){
        super(options, ...args);
        ModelEntity.init(this, options);

        let roleKey = (this.data || {}).role;
        this.role = this.session.getRole(roleKey);
    }
    get project(){
        return this.dataSet/* ProjectMembers */.project;
    }
}
ModelEntity.addTo(ProjectMember);
