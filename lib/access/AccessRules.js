import TypeUtils from '../TypeUtils';

export default class AccessRules {
    /**
     * <pre>
     * {
     *     // Default access policy for all unknown role / command combinations
     *     defaultAccessPolicy : 'deny', // possible values: allow/deny or true/false
     * 
     *     // Default access rules
     *     '*' : {
     *         allow : [ 'read' ],
     *         deny : []
     *     },
     *     admin : {
     *         allow : [ 'create', 'read', 'update', 'delete' ],
     *         deny : []
     *     },
     *     editor : {
     *         allow : [ 'create', 'read', 'update' ],
     *         deny : [],
     *     },
     *     // Everything is forbidden for non-logged users
     *     nobody : {
     *         deny : [ 'create', 'read', 'update', 'delete' ]
     *     }
     * }
     * </pre>
     */
    constructor(options){
        this.access = options;
        this._rebuildIndex();
    }
    
    /**
     * Adds the specified actions to the list of allowed operations for this
     * role.
     */
    allowActions(role, actions) {
        let list = this.access[role] || [];
        list = list.concat(actions || []);
        let index = {};
        list.forEach(function(action){
            index[action] = true;
        });
        this.access[role] = Object.keys(index);
        this._rebuildIndex();
    }
    
    /**
     * Checks if the a user with the specified identifier can execute an action
     * characterized by the specified command hierarchy.
     */
    checkAccess(role, command){
        let commandsHierarchy = TypeUtils.getTypeHierarchyKeys(command);
        while (commandsHierarchy.length){
            let commandKey = commandsHierarchy.pop();
            let roleHierarchy = TypeUtils.getTypeHierarchyKeys(role);
            roleHierarchy.unshift('*');
            while (roleHierarchy.length){
                let roleKey = roleHierarchy.pop();
                let indexKey = this._getIndexKey(roleKey, commandKey);
                let access = this._index[indexKey];
                if (access === true || access === false)
                    return access;
            }
        }
        return this._getDefaultAccessPolicy();
    }

    /**
     * Rebuilds an internal index allowing fast lookup for role-action
     * combinations.
     */
    _rebuildIndex() {
        this._index = {};
        for (let role in this.access) {
            let rules = this.access[role] || {};
            (rules.allow || []).forEach(function(action){
                let key = this._getIndexKey(role, action);
                this._index[key] = true;
            }, this);
            (rules.deny || []).forEach(function(action){
                let key = this._getIndexKey(role, action);
                this._index[key] = false;
            }, this);
        }
    }
    
    /** Returns a unique index key for the role-action pair. */
    _getIndexKey(role, action){
        return role + '-' + action;
    }

    /**
     * Returns the default access policy applied when there is no other rules
     * for roles/commands combinations.
     */
    _getDefaultAccessPolicy() {
        let p = this.access.defaultAccessPolicy;
        switch (p) {
            case 'deny': return false;
            case 'allow': return true;
            case true: return true;
            case false: return false;
        }
        return false;
    }
    
}