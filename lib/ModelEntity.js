import Session from './Session';
export default class ModelEntity {
    static init(obj, options){
        options = options || {};
        obj.session = checkValue(
                options.session instanceof Session,
                options.session,
                'Session is not defined or has a bad type.');
    }
    static addTo(Type) {
        defineTypeProperty(Type, 'session', true);
    }
}

function defineTypeProperty(Type, key, immutable) {
    let _key = Symbol.for(key);
    let options = {
        get :  function() { return this[_key]; },
        enumerable : false, // It is not visible for "key in ..." iterators
        configurable : false // Can not be deleted
    };
    if (immutable) {
        options.set = function(value) {
            if (!!this[_key])
                throw new Error('The "' + key + '" property can not be changed.');
            this[_key] = value;
        }; 
    } else {
        options.set = function(value) { this[_key] = value; }
    }
    Object.defineProperty(Type.prototype, key, options);
}

function notEmpty(value, msg) {
    return checkValue(!!value, value, msg);
}
function checkValue(test, value, msg) {
    if (!test) throw new Error(msg);
    return value;
}
