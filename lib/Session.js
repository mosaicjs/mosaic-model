import { Data } from 'mosaic-dataset';
import { Intents } from 'mosaic-intents';
import { AdapterManager } from 'mosaic-adapters';
import Role from './Role';

export default class Session extends Data {
    
    constructor(options, ...args){
        options = options || {};
        if (!options.adapters) {
            options.adapters = new AdapterManager();
        }
        super(options, ...args);
        Intents(this);
        this.options = options;
        this.roles = {};
        this._registerRoles();
    }
    get userId() { return this.options.userId; }
    
    /**
     * Returns a Role object corresponding to the specified key. Could be
     * overloaded in subclasses to re-define possible roles.
     */
    getRole(roleKey) {
        return this.roles[roleKey];
    }
    
    /** Registers a new user role in this session */
    registerRole(role) { this.roles[role.key] = role; }
    /** Removes the specified role from this session */
    unregisterRole(role) { delete this.roles[role.key]; }
    /**
     * Returns user's role by the specified role key. If there is no such a role
     * registered then this method returns the Role.Nobody.
     */
    getRole(roleKey) { 
        return this.roles[roleKey] || Role.Nobody;
    }
    
    _registerRoles(){
        [Role.Nobody, Role.Reader, Role.Editor, Role.Admin]
        .forEach(this.registerRole.bind(this));
    }
    
    execute(command, action){
        return this.runAction(command.key, command, function(){
            this.checkCommandAccess(command);
            if (!command.handled){
                return action(command);
            }
        }.bind(this));
    }
    
    /**
     * Checks if the specified command has required rights level to be executed.
     */
    checkCommandAccess(command){
        let target = command.target;
        if (!target)
            return ;
        
        function check(condition, msg){
            if (!condition) {
                // TODO: add messages i18n
                throw new Error(msg || 'Access denied.');
            }
        }
        function containedIn(list, value){
            let result = false;
            for (let i = 0, len = list ? list.length : 0; !result && i < len; i++) {
                result = (list[i] == value);
            }
            return result;
        }
        let allow = false;
        let deny = false;
        
        let roles = target['.roles'] || {};
        let access = target['.access'] || {};
        let role = this.getRole(roles[this.userId]);

        let commandKeys = command.hierarchy;
        while (!allow && !deny && commandKeys.length){
            let commandKey = commandKeys.pop();

            let roleKeys = role.hierarchy;
            while (!allow && !deny && roleKeys.length){
                let roleKey = roleKeys.pop();

                let accessRules = access[roleKey];
                if (!accessRules)
                    continue;
                allow = containedIn(accessRules.allow, commandKey);
                deny = containedIn(accessRules.deny, commandKey);
            }
        }

        // TODO: add messages i18n
        check(!deny, '[' + command.key + ']' + 
            ' Access denied for the user "' + this.userId + '".');

        // TODO: add messages i18n
        check(!!allow, '[' + command.key + ']' + 
            ' Access rules are not defined for the user "' + this.userId + '".');
    }
    
}
Intents.addTo(Session);
