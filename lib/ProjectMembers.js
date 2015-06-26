import { DataSet } from 'mosaic-dataset';
import ModelEntity from './ModelEntity';
import ProjectMember from './ProjectMember';

export default class ProjectMembers extends DataSet {
    constructor(options, ...args){
        super(options, ...args);
        ModelEntity.init(this, options);
    }
    get DataType(){ return ProjectMember; }
    /**
     * Returns a list of all members corresponding to the specified role.
     */
    getMembersByRole(role) {
        let result = [];
        this.items.forEach(function(member){
            if (member.role === role){
                result.push(member);
            }
        });
        return result;
    }
}
ModelEntity.addTo(ProjectMembers);

