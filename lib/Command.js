import { Intent } from 'mosaic-intents';
import TypeUtils from './TypeUtils';

/**
 * Commands are used to perform specific actions on objects. They are used as
 * adapters for other objects. It allows to re-define the default command
 * behaviour.
 */
export default class Command extends Intent {
    constructor(params, target, type){
        super(params);
        if (this.params && this.params.fields) {
            for (let field in this.params.fields) {
                if (this.params.fields.hasOwnProperty(field)) {
                    this[field] = this.params.fields[field]; 
                }
            }
        }
        this.target = target;
        this.commandType = type;
    }
    static get key(){ return TypeUtils.getTypeKey(this); }
    get key() { return TypeUtils.getTypeKey(this); }
    static get hierarchy() { return TypeUtils.getTypeHierarchyKeys(this, Command); }
    get hierarchy() { return TypeUtils.getTypeHierarchyKeys(this, Command); }
    
    /**
     * This method should be overloaded in subclasses to perform real operations
     * on the target object.
     */
    execute(){ return true; }
}

class Create extends Command {}
class Read extends Command {}
class Update extends Command {}
class Delete extends Command {}

Command.Create = Create;
Command.Read = Read;
Command.Update = Update;
Command.Delete = Delete;