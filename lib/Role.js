export default class Role {
    static get key(){ return getRoleKey(this); }
    get key() { return getRoleKey(this); }
    static get hierarchy() { return getRoleHierarchy(this); }
    get hierarchy() { return getRoleHierarchy(this); }
}
class Nobody extends Role { 
}
class Reader extends Nobody {
}
class Editor extends Reader {
}
class Admin extends Editor {
}

Role.Nobody = Nobody;
Role.Reader = Reader;
Role.Editor = Editor;
Role.Admin = Admin;


function getRoleKey(role){
    let result;
    if (typeof role === 'string') {
        result = role;
    } else {
        if (typeof role === 'function') {
            result = role.name;
        } else  {
            let proto = Object.getPrototypeOf(role)
            result = proto.constructor.name;
        }
    }
    return !!result ? result.toLowerCase() : 'none';
}
function getRoleHierarchy(role){
    let proto;
    if (typeof role === 'function') {
        proto = role.prototype; 
    } else  {
        proto = Object.getPrototypeOf(role)
    }
    let array = [];
    while (proto && proto.constructor !== Role) {
        let classKey = getRoleKey(proto.constructor);
        array.push(classKey);
        proto = Object.getPrototypeOf(proto);
    }
    array.reverse();
    return array;
} 
