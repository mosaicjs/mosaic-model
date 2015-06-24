(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mosaic-dataset"), require("mosaic-adapters"));
	else if(typeof define === 'function' && define.amd)
		define(["mosaic-dataset", "mosaic-adapters"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mosaic-dataset"), require("mosaic-adapters")) : factory(root["mosaic-dataset"], root["mosaic-adapters"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libModelEntity = __webpack_require__(1);

	var _libModelEntity2 = _interopRequireDefault(_libModelEntity);

	var _libRole = __webpack_require__(5);

	var _libRole2 = _interopRequireDefault(_libRole);

	var _libSession = __webpack_require__(2);

	var _libSession2 = _interopRequireDefault(_libSession);

	var _libWorkspace = __webpack_require__(6);

	var _libWorkspace2 = _interopRequireDefault(_libWorkspace);

	var _libProject = __webpack_require__(7);

	var _libProject2 = _interopRequireDefault(_libProject);

	var _libFolder = __webpack_require__(8);

	var _libFolder2 = _interopRequireDefault(_libFolder);

	var _libResource = __webpack_require__(9);

	var _libResource2 = _interopRequireDefault(_libResource);

	exports['default'] = {
	    ModelEntity: _libModelEntity2['default'],
	    // -----------------
	    Role: _libRole2['default'],
	    Session: _libSession2['default'],
	    Workspace: _libWorkspace2['default'],
	    Project: _libProject2['default'],
	    Folder: _libFolder2['default'],
	    Resource: _libResource2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Session = __webpack_require__(2);

	var _Session2 = _interopRequireDefault(_Session);

	var ModelEntity = (function () {
	    function ModelEntity() {
	        _classCallCheck(this, ModelEntity);
	    }

	    _createClass(ModelEntity, null, [{
	        key: 'init',
	        value: function init(obj, options) {
	            options = options || {};
	            obj.session = checkValue(options.session instanceof _Session2['default'], options.session, 'Session is not defined or has a bad type.');
	        }
	    }, {
	        key: 'addTo',
	        value: function addTo(Type) {
	            defineTypeProperty(Type, 'session', true);
	        }
	    }]);

	    return ModelEntity;
	})();

	exports['default'] = ModelEntity;

	function defineTypeProperty(Type, key, immutable) {
	    var _key = Symbol['for'](key);
	    var options = {
	        get: function get() {
	            return this[_key];
	        },
	        enumerable: false, // It is not visible for "key in ..." iterators
	        configurable: false // Can not be deleted
	    };
	    if (immutable) {
	        options.set = function (value) {
	            if (!!this[_key]) throw new Error('The "' + key + '" property can not be changed.');
	            this[_key] = value;
	        };
	    } else {
	        options.set = function (value) {
	            this[_key] = value;
	        };
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
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(3);

	var _mosaicAdapters = __webpack_require__(4);

	var _Role = __webpack_require__(5);

	var _Role2 = _interopRequireDefault(_Role);

	var Session = (function (_Data) {
	    function Session(options) {
	        var _get2;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        _classCallCheck(this, Session);

	        options = options || {};
	        if (!options.adapters) {
	            options.adapters = new _mosaicAdapters.AdapterManager();
	        }
	        (_get2 = _get(Object.getPrototypeOf(Session.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        this.options = options;
	        this.roles = {};
	        this._registerRoles();
	    }

	    _inherits(Session, _Data);

	    _createClass(Session, [{
	        key: 'getRole',

	        /**
	         * Returns a Role object corresponding to the specified key.
	         * Could be overloaded in subclasses to re-define possible roles.
	         */
	        value: function getRole(roleKey) {
	            return this.roles[roleKey];
	        }
	    }, {
	        key: 'registerRole',

	        /** Registers a new user role in this session */
	        value: function registerRole(role) {
	            this.roles[role.key] = role;
	        }
	    }, {
	        key: 'unregisterRole',

	        /** Removes the specified role from this session */
	        value: function unregisterRole(role) {
	            delete this.roles[role.key];
	        }
	    }, {
	        key: '_registerRoles',
	        value: function _registerRoles() {
	            [_Role2['default'].Nobody, _Role2['default'].Reader, _Role2['default'].Editor, _Role2['default'].Admin].forEach(this.registerRole.bind(this));
	        }
	    }, {
	        key: 'userId',
	        get: function () {
	            return this.options.userId;
	        }
	    }]);

	    return Session;
	})(_mosaicDataset.Data);

	exports['default'] = Session;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Role = (function () {
	    function Role() {
	        _classCallCheck(this, Role);
	    }

	    _createClass(Role, [{
	        key: 'key',
	        get: function () {
	            return getRoleKey(this);
	        }
	    }, {
	        key: 'hierarchy',
	        get: function () {
	            return getRoleHierarchy(this);
	        }
	    }], [{
	        key: 'key',
	        get: function () {
	            return getRoleKey(this);
	        }
	    }, {
	        key: 'hierarchy',
	        get: function () {
	            return getRoleHierarchy(this);
	        }
	    }]);

	    return Role;
	})();

	exports['default'] = Role;

	var Nobody = (function (_Role) {
	    function Nobody() {
	        _classCallCheck(this, Nobody);

	        if (_Role != null) {
	            _Role.apply(this, arguments);
	        }
	    }

	    _inherits(Nobody, _Role);

	    return Nobody;
	})(Role);

	var Reader = (function (_Nobody) {
	    function Reader() {
	        _classCallCheck(this, Reader);

	        if (_Nobody != null) {
	            _Nobody.apply(this, arguments);
	        }
	    }

	    _inherits(Reader, _Nobody);

	    return Reader;
	})(Nobody);

	var Editor = (function (_Reader) {
	    function Editor() {
	        _classCallCheck(this, Editor);

	        if (_Reader != null) {
	            _Reader.apply(this, arguments);
	        }
	    }

	    _inherits(Editor, _Reader);

	    return Editor;
	})(Reader);

	var Admin = (function (_Editor) {
	    function Admin() {
	        _classCallCheck(this, Admin);

	        if (_Editor != null) {
	            _Editor.apply(this, arguments);
	        }
	    }

	    _inherits(Admin, _Editor);

	    return Admin;
	})(Editor);

	Role.Nobody = Nobody;
	Role.Reader = Reader;
	Role.Editor = Editor;
	Role.Admin = Admin;

	function getRoleKey(role) {
	    var result = undefined;
	    if (typeof role === 'string') {
	        result = role;
	    } else {
	        if (typeof role === 'function') {
	            result = role.name;
	        } else {
	            var proto = Object.getPrototypeOf(role);
	            result = proto.constructor.name;
	        }
	    }
	    return !!result ? result.toLowerCase() : 'none';
	}
	function getRoleHierarchy(role) {
	    var proto = undefined;
	    if (typeof role === 'function') {
	        proto = role.prototype;
	    } else {
	        proto = Object.getPrototypeOf(role);
	    }
	    var array = [];
	    while (proto && proto.constructor !== Role) {
	        var classKey = getRoleKey(proto.constructor);
	        array.push(classKey);
	        proto = Object.getPrototypeOf(proto);
	    }
	    array.reverse();
	    return array;
	}
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(3);

	var _Project = __webpack_require__(7);

	var _Project2 = _interopRequireDefault(_Project);

	var _ModelEntity = __webpack_require__(1);

	var _ModelEntity2 = _interopRequireDefault(_ModelEntity);

	var Workspace = (function (_DataSet) {
	    function Workspace(options) {
	        var _get2;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        _classCallCheck(this, Workspace);

	        (_get2 = _get(Object.getPrototypeOf(Workspace.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        _ModelEntity2['default'].init(this, options);
	    }

	    _inherits(Workspace, _DataSet);

	    _createClass(Workspace, [{
	        key: 'DataType',
	        get: function () {
	            return _Project2['default'];
	        }
	    }]);

	    return Workspace;
	})(_mosaicDataset.DataSet);

	exports['default'] = Workspace;

	_ModelEntity2['default'].addTo(Workspace);
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _bind = Function.prototype.bind;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Folder2 = __webpack_require__(8);

	var _Folder3 = _interopRequireDefault(_Folder2);

	var _mosaicDataset = __webpack_require__(3);

	var _ModelEntity = __webpack_require__(1);

	var _ModelEntity2 = _interopRequireDefault(_ModelEntity);

	var Command = function Command() {
	    _classCallCheck(this, Command);
	};

	// Operations on project roles

	var CreateProjectRole = (function (_Command) {
	    function CreateProjectRole() {
	        _classCallCheck(this, CreateProjectRole);

	        if (_Command != null) {
	            _Command.apply(this, arguments);
	        }
	    }

	    _inherits(CreateProjectRole, _Command);

	    return CreateProjectRole;
	})(Command);

	var DefineProjectRoleRights = (function (_Command2) {
	    function DefineProjectRoleRights() {
	        _classCallCheck(this, DefineProjectRoleRights);

	        if (_Command2 != null) {
	            _Command2.apply(this, arguments);
	        }
	    }

	    _inherits(DefineProjectRoleRights, _Command2);

	    return DefineProjectRoleRights;
	})(Command);

	// Project members

	var SetProjectMemberRole = (function (_Command3) {
	    function SetProjectMemberRole() {
	        _classCallCheck(this, SetProjectMemberRole);

	        if (_Command3 != null) {
	            _Command3.apply(this, arguments);
	        }
	    }

	    _inherits(SetProjectMemberRole, _Command3);

	    return SetProjectMemberRole;
	})(Command);

	var AddProjectMember = (function (_Command4) {
	    function AddProjectMember() {
	        _classCallCheck(this, AddProjectMember);

	        if (_Command4 != null) {
	            _Command4.apply(this, arguments);
	        }
	    }

	    _inherits(AddProjectMember, _Command4);

	    return AddProjectMember;
	})(Command);

	var RemoveProjectMember = (function (_Command5) {
	    function RemoveProjectMember() {
	        _classCallCheck(this, RemoveProjectMember);

	        if (_Command5 != null) {
	            _Command5.apply(this, arguments);
	        }
	    }

	    _inherits(RemoveProjectMember, _Command5);

	    return RemoveProjectMember;
	})(Command);

	var InviteProjectMember = (function (_Command6) {
	    function InviteProjectMember() {
	        _classCallCheck(this, InviteProjectMember);

	        if (_Command6 != null) {
	            _Command6.apply(this, arguments);
	        }
	    }

	    _inherits(InviteProjectMember, _Command6);

	    return InviteProjectMember;
	})(Command);

	var AcceptProject = (function (_Command7) {
	    function AcceptProject() {
	        _classCallCheck(this, AcceptProject);

	        if (_Command7 != null) {
	            _Command7.apply(this, arguments);
	        }
	    }

	    _inherits(AcceptProject, _Command7);

	    return AcceptProject;
	})(Command);

	// Operations on the project

	var CreateProject = (function (_Command8) {
	    function CreateProject() {
	        _classCallCheck(this, CreateProject);

	        if (_Command8 != null) {
	            _Command8.apply(this, arguments);
	        }
	    }

	    _inherits(CreateProject, _Command8);

	    return CreateProject;
	})(Command);

	var UpdateProject = (function (_Command9) {
	    function UpdateProject() {
	        _classCallCheck(this, UpdateProject);

	        if (_Command9 != null) {
	            _Command9.apply(this, arguments);
	        }
	    }

	    _inherits(UpdateProject, _Command9);

	    return UpdateProject;
	})(Command);

	var RemoveProject = (function (_UpdateProject) {
	    function RemoveProject() {
	        _classCallCheck(this, RemoveProject);

	        if (_UpdateProject != null) {
	            _UpdateProject.apply(this, arguments);
	        }
	    }

	    _inherits(RemoveProject, _UpdateProject);

	    return RemoveProject;
	})(UpdateProject);

	var RenameProject = (function (_UpdateProject2) {
	    function RenameProject() {
	        _classCallCheck(this, RenameProject);

	        if (_UpdateProject2 != null) {
	            _UpdateProject2.apply(this, arguments);
	        }
	    }

	    _inherits(RenameProject, _UpdateProject2);

	    return RenameProject;
	})(UpdateProject);

	// Resource operations

	var CreateResource = (function (_Command10) {
	    function CreateResource() {
	        _classCallCheck(this, CreateResource);

	        if (_Command10 != null) {
	            _Command10.apply(this, arguments);
	        }
	    }

	    _inherits(CreateResource, _Command10);

	    return CreateResource;
	})(Command);

	var UpdateResource = (function (_Command11) {
	    function UpdateResource() {
	        _classCallCheck(this, UpdateResource);

	        if (_Command11 != null) {
	            _Command11.apply(this, arguments);
	        }
	    }

	    _inherits(UpdateResource, _Command11);

	    return UpdateResource;
	})(Command);

	var DeleteResource = (function (_UpdateResource) {
	    function DeleteResource() {
	        _classCallCheck(this, DeleteResource);

	        if (_UpdateResource != null) {
	            _UpdateResource.apply(this, arguments);
	        }
	    }

	    _inherits(DeleteResource, _UpdateResource);

	    return DeleteResource;
	})(UpdateResource);

	var RenameResource = (function (_UpdateResource2) {
	    function RenameResource() {
	        _classCallCheck(this, RenameResource);

	        if (_UpdateResource2 != null) {
	            _UpdateResource2.apply(this, arguments);
	        }
	    }

	    _inherits(RenameResource, _UpdateResource2);

	    return RenameResource;
	})(UpdateResource);

	var MoveResource = (function (_UpdateResource3) {
	    function MoveResource() {
	        _classCallCheck(this, MoveResource);

	        if (_UpdateResource3 != null) {
	            _UpdateResource3.apply(this, arguments);
	        }
	    }

	    _inherits(MoveResource, _UpdateResource3);

	    return MoveResource;
	})(UpdateResource);

	var EditResource = (function (_UpdateResource4) {
	    function EditResource() {
	        _classCallCheck(this, EditResource);

	        if (_UpdateResource4 != null) {
	            _UpdateResource4.apply(this, arguments);
	        }
	    }

	    _inherits(EditResource, _UpdateResource4);

	    return EditResource;
	})(UpdateResource);

	// Action: object(ws/project/folder/resource) + action(edit/delete/addSmth/...) + user role => true/false
	// Workspace is an adapter for the session => it depends on the currently logged user

	// Distribution of roles by type
	// non-logged -> Nobody
	// logged user -> Nobody / Reader / Commentator / Contributor ...
	// owner ->  Admin

	// class LoggedUser extends Nobody {}  // Automatic role

	var User = function User() {
	    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	    }

	    _classCallCheck(this, User);
	};

	/**
	 * Each project member has the same identifiers as users. 
	 */

	var ProjectMember = (function (_Data) {
	    function ProjectMember(options) {
	        var _get2;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        _classCallCheck(this, ProjectMember);

	        (_get2 = _get(Object.getPrototypeOf(ProjectMember.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        _ModelEntity2['default'].init(this, options);

	        var roleKey = (this.data || {}).role;
	        this.role = this.session.getRole(roleKey);
	    }

	    _inherits(ProjectMember, _Data);

	    return ProjectMember;
	})(_mosaicDataset.Data);

	_ModelEntity2['default'].addTo(ProjectMember);

	var ProjectMembers = (function (_DataSet) {
	    function ProjectMembers(options) {
	        var _get3;

	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	        }

	        _classCallCheck(this, ProjectMembers);

	        (_get3 = _get(Object.getPrototypeOf(ProjectMembers.prototype), 'constructor', this)).call.apply(_get3, [this, options].concat(args));
	        _ModelEntity2['default'].init(this, options);
	    }

	    _inherits(ProjectMembers, _DataSet);

	    _createClass(ProjectMembers, [{
	        key: 'DataType',
	        get: function () {
	            return ProjectMember;
	        }
	    }]);

	    return ProjectMembers;
	})(_mosaicDataset.DataSet);

	_ModelEntity2['default'].addTo(ProjectMembers);

	var Project = (function (_Folder) {
	    function Project(options) {
	        var _get4;

	        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	            args[_key3 - 1] = arguments[_key3];
	        }

	        _classCallCheck(this, Project);

	        (_get4 = _get(Object.getPrototypeOf(Project.prototype), 'constructor', this)).call.apply(_get4, [this, options].concat(args));
	        this.members = new ProjectMembers();
	        this.members.items = this.data.members;
	    }

	    _inherits(Project, _Folder);

	    _createClass(Project, [{
	        key: 'execute',
	        value: function execute(CommandType) {
	            for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                args[_key4 - 1] = arguments[_key4];
	            }

	            var role = this.getUserRole();
	            var command = new (_bind.apply(CommandType, [null].concat([this], args)))();
	            return role.execute(command);
	        }
	    }, {
	        key: 'getUserRole',

	        /**
	         * Returns the role of the current user in this project.
	         */
	        value: function getUserRole() {
	            var user = this.getCurrentUser();
	            var userId = user;
	            return;
	        }
	    }, {
	        key: 'members',
	        get: function () {}
	    }, {
	        key: 'roles',
	        get: function () {}
	    }]);

	    return Project;
	})(_Folder3['default']);

	exports['default'] = Project;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(3);

	var _Resource = __webpack_require__(9);

	var _Resource2 = _interopRequireDefault(_Resource);

	var _ModelEntity = __webpack_require__(1);

	var _ModelEntity2 = _interopRequireDefault(_ModelEntity);

	var Folder = (function (_DataSet) {
	    function Folder(options) {
	        var _get2;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        _classCallCheck(this, Folder);

	        (_get2 = _get(Object.getPrototypeOf(Folder.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        _ModelEntity2['default'].init(this, options);
	    }

	    _inherits(Folder, _DataSet);

	    _createClass(Folder, [{
	        key: 'DataType',
	        get: function () {
	            return _Resource2['default'];
	        }
	    }]);

	    return Folder;
	})(_mosaicDataset.DataSet);

	exports['default'] = Folder;

	_ModelEntity2['default'].addTo(Folder);
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(3);

	var Resource = (function (_Data) {
	  function Resource() {
	    _classCallCheck(this, Resource);

	    if (_Data != null) {
	      _Data.apply(this, arguments);
	    }
	  }

	  _inherits(Resource, _Data);

	  return Resource;
	})(_mosaicDataset.Data);

	exports['default'] = Resource;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;