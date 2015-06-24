import Folder from './Folder';
import { Intent } from 'mosaic-intents';
import { Data, DataSet } from 'mosaic-dataset';
import ModelEntity from './ModelEntity';

class Command extends Intent { }

class Read extends Command {}
class Update extends Command {}
class Create extends Update {}
class Delete extends Command {}

// Operations on project roles
class ReadSecurityInfo extends Read {}
class UpdateSecurityInfo extends Update {}
class CreateSecurityInfo extends Create {}
class DeleteSecurityInfo extends Delete {}

class UpdateProjectAccess extends UpdateSecurityInfo {}
class CreateProjectRole extends CreateSecurityInfo {} 
class DefineProjectRoleRights extends UpdateSecurityInfo {} 

// Project members
class SetProjectMemberRole extends UpdateSecurityInfo {}
class AddProjectMember extends UpdateSecurityInfo {}
class RemoveProjectMember extends DeleteSecurityInfo {}
class InviteProjectMember extends UpdateSecurityInfo {}
class AcceptProject extends UpdateSecurityInfo {}

// Operations on the project
class CreateProject extends Command {}
class UpdateProject extends Command {}
class RemoveProject extends UpdateProject {}
class RenameProject extends UpdateProject {}

// Resource operations
class CreateResource extends Command {}
class UpdateResource extends Command {}
class DeleteResource extends UpdateResource {}
class RenameResource extends UpdateResource {}
class MoveResource extends UpdateResource {}
class EditResource extends UpdateResource {}

// Action: object(ws/project/folder/resource) + action(edit/delete/addSmth/...) + user role => true/false
// Workspace is an adapter for the session => it depends on the currently logged user

// Distribution of roles by type
// non-logged -> Nobody 
// logged user -> Nobody / Reader / Commentator / Contributor ...
// owner ->  Admin

// class LoggedUser extends Nobody {}  // Automatic role



class User {
    constructor(...args){
    }
}


/**
 * Each project member has the same identifiers as users. 
 */
class ProjectMember extends Data {
    constructor(options, ...args){
        super(options, ...args);
        ModelEntity.init(this, options);

        let roleKey = (this.data || {}).role;
        this.role = this.session.getRole(roleKey);
    }
}
ModelEntity.addTo(ProjectMember);

class ProjectMembers extends DataSet {
    constructor(options, ...args){
        super(options, ...args);
        ModelEntity.init(this, options);
    }
    get DataType(){ return ProjectMember; }
}
ModelEntity.addTo(ProjectMembers);

export default class Project extends Folder {
    constructor(options, ...args){
        super(options, ...args);
        this.members = new ProjectMembers();
        this.members.items = this.data.members;
    }
    execute(CommandType, ...args){
        let role = this.getUserRole();
        let command = new CommandType(this, ...args);
        return role.execute(command);
    }
    /**
     * Returns the role of the current user in this project.
     */
    getUserRole() {
        let user = this.getCurrentUser();
        let userId = user
        return ;
    }
    get members() {}
    get roles() {}
}
