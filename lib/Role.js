import TypeUtils from './TypeUtils';

export default class Role {
    static get key(){ return TypeUtils.getTypeKey(this); }
    get key() { return TypeUtils.getTypeKey(this); }
    static get hierarchy() { return TypeUtils.getTypeHierarchyKeys(this, Role); }
    get hierarchy() { return TypeUtils.getTypeHierarchyKeys(this, Role); }
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