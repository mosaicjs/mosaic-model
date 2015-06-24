export default {
    getTypeKey,
    getTypeHierarchy,
    getTypeHierarchyKeys,
    defineTypeProperty,
    
    notEmpty,
    checkValue
}

let typeCounter = 0;
function convertTypeNameToKey(name){
    let result;
    if (!!name) {
        result = name.replace(/([A-Z])/gm, function(match, str, pos){
            str = str.toLowerCase();
            if (pos > 0) {
                str = '-' + str;
            }
            return str;
        });
    } else {
        result = 'type-' + (typeCounter++);
    }
    return result;

}

const typeKey = Symbol.for('typeKey');
function getFunctionTypeKey(type){
    let key;
    if (type.hasOwnProperty(typeKey)) {
        key = type[typeKey];
    } else {
        key = convertTypeNameToKey(type.name);
        type[typeKey] = key;
    }
    return key;
}

function getTypeKey(role){
    let result;
    if (typeof role === 'string') {
        result = role;
    } else {
        if (typeof role === 'function') {
            result = getFunctionTypeKey(role);
        } else  {
            let proto = Object.getPrototypeOf(role)
            result = getFunctionTypeKey(proto.constructor);
        }
    }
    return result;
}

function getTypeHierarchyKeys(role, top) {
    return getTypeHierarchy(role, top).map(getTypeKey);
}

function getTypeHierarchy(role, top){
    top = top || Object; 
    let proto;
    if (typeof role === 'function') {
        proto = role.prototype; 
    } else  {
        proto = Object.getPrototypeOf(role)
    }
    let array = [];
    while (proto && proto.constructor !== top) {
        array.push(proto.constructor);
        proto = Object.getPrototypeOf(proto);
    }
    array.reverse();
    return array;
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

