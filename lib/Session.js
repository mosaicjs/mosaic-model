import { Data } from 'mosaic-dataset';
import { AdapterManager } from 'mosaic-adapters';
import Role from './Role';

export default class Session extends Data {
    
    constructor(options, ...args){
        options = options || {};
        if (!options.adapters) {
            options.adapters = new AdapterManager();
        }
        super(options, ...args);
        this.options = options;
        this.roles = {};
        this._registerRoles();
    }
    get userId() { return this.options.userId; }
    
    /**
     * Returns a Role object corresponding to the specified key.
     * Could be overloaded in subclasses to re-define possible roles.
     */
    getRole(roleKey) {
        return this.roles[roleKey];
    }
    
    /** Registers a new user role in this session */
    registerRole(role) { this.roles[role.key] = role; }
    /** Removes the specified role from this session */
    unregisterRole(role) { delete this.roles[role.key]; }
    
    _registerRoles(){
        [Role.Nobody, Role.Reader, Role.Editor, Role.Admin]
        .forEach(this.registerRole.bind(this));
    }
    
}
