import Session from './Session';
import TypeUtils from './TypeUtils';

/**
 * This mix-in adds to types the mandatory 'session' field as well as a
 * 'command()' method allowing to execute 
 */
export default class ModelEntity {
    static init(obj, options, ...args){
        options = options || {};
        obj.session = TypeUtils.checkValue(
                options.session instanceof Session,
                options.session,
                'Session is not defined or has a bad type.');
    }
    static addTo(Type) {
        TypeUtils.defineTypeProperty(Type, 'session', true);
        Type.prototype.execute = function(CommandType, options) {
            let command = this.newAdapter(CommandType, options);
            return this.session.execute(command);
        };
    }
}

