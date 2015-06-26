import Folder from './Folder';
import { Intent } from 'mosaic-intents';
import { Data, DataSet } from 'mosaic-dataset';
import Command from './Command';
import ModelEntity from './ModelEntity';
import ProjectMembers from './ProjectMembers';

// Operations on project roles
class ReadSecurityInfo extends Command.Read {}
class UpdateSecurityInfo extends Command.Update {}
class CreateSecurityInfo extends Command.Create {}
class DeleteSecurityInfo extends Command.Delete {}

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
class CreateProject extends Command.Create {}
class UpdateProject extends Command.Update {}
class RemoveProject extends UpdateProject {}
class RenameProject extends UpdateProject {}

// Resource operations
class CreateResource extends Command.Create {}
class UpdateResource extends Command.Update {}
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

export default class Project extends Folder {
    constructor(options, ...args){
        super(options, ...args);
        this.members = this.getAdapter(ProjectMembers, options);
        this.members.items = this.data.members;
    }
}
