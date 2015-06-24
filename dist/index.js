(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mosaic-dataset"), require("mosaic-intents"), require("mosaic-adapters"));
	else if(typeof define === 'function' && define.amd)
		define(["mosaic-dataset", "mosaic-intents", "mosaic-adapters"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mosaic-dataset"), require("mosaic-intents"), require("mosaic-adapters")) : factory(root["mosaic-dataset"], root["mosaic-intents"], root["mosaic-adapters"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	var _libModelEntity = __webpack_require__(6);

	var _libModelEntity2 = _interopRequireDefault(_libModelEntity);

	var _libRole = __webpack_require__(10);

	var _libRole2 = _interopRequireDefault(_libRole);

	var _libCommand = __webpack_require__(12);

	var _libCommand2 = _interopRequireDefault(_libCommand);

	var _libSession = __webpack_require__(7);

	var _libSession2 = _interopRequireDefault(_libSession);

	var _libWorkspace = __webpack_require__(1);

	var _libWorkspace2 = _interopRequireDefault(_libWorkspace);

	var _libProject = __webpack_require__(3);

	var _libProject2 = _interopRequireDefault(_libProject);

	var _libFolder = __webpack_require__(4);

	var _libFolder2 = _interopRequireDefault(_libFolder);

	var _libResource = __webpack_require__(5);

	var _libResource2 = _interopRequireDefault(_libResource);

	exports['default'] = {
	    ModelEntity: _libModelEntity2['default'],
	    // -----------------
	    Role: _libRole2['default'],
	    Command: _libCommand2['default'],
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

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(2);

	var _Project = __webpack_require__(3);

	var _Project2 = _interopRequireDefault(_Project);

	var _ModelEntity = __webpack_require__(6);

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
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var _bind = Function.prototype.bind;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _Folder2 = __webpack_require__(4);

	var _Folder3 = _interopRequireDefault(_Folder2);

	var _mosaicIntents = __webpack_require__(8);

	var _mosaicDataset = __webpack_require__(2);

	var _ModelEntity = __webpack_require__(6);

	var _ModelEntity2 = _interopRequireDefault(_ModelEntity);

	var Command = (function (_Intent) {
	    function Command() {
	        _classCallCheck(this, Command);

	        if (_Intent != null) {
	            _Intent.apply(this, arguments);
	        }
	    }

	    _inherits(Command, _Intent);

	    return Command;
	})(_mosaicIntents.Intent);

	var Read = (function (_Command) {
	    function Read() {
	        _classCallCheck(this, Read);

	        if (_Command != null) {
	            _Command.apply(this, arguments);
	        }
	    }

	    _inherits(Read, _Command);

	    return Read;
	})(Command);

	var Update = (function (_Command2) {
	    function Update() {
	        _classCallCheck(this, Update);

	        if (_Command2 != null) {
	            _Command2.apply(this, arguments);
	        }
	    }

	    _inherits(Update, _Command2);

	    return Update;
	})(Command);

	var Create = (function (_Update) {
	    function Create() {
	        _classCallCheck(this, Create);

	        if (_Update != null) {
	            _Update.apply(this, arguments);
	        }
	    }

	    _inherits(Create, _Update);

	    return Create;
	})(Update);

	var Delete = (function (_Command3) {
	    function Delete() {
	        _classCallCheck(this, Delete);

	        if (_Command3 != null) {
	            _Command3.apply(this, arguments);
	        }
	    }

	    _inherits(Delete, _Command3);

	    return Delete;
	})(Command);

	// Operations on project roles

	var ReadSecurityInfo = (function (_Read) {
	    function ReadSecurityInfo() {
	        _classCallCheck(this, ReadSecurityInfo);

	        if (_Read != null) {
	            _Read.apply(this, arguments);
	        }
	    }

	    _inherits(ReadSecurityInfo, _Read);

	    return ReadSecurityInfo;
	})(Read);

	var UpdateSecurityInfo = (function (_Update2) {
	    function UpdateSecurityInfo() {
	        _classCallCheck(this, UpdateSecurityInfo);

	        if (_Update2 != null) {
	            _Update2.apply(this, arguments);
	        }
	    }

	    _inherits(UpdateSecurityInfo, _Update2);

	    return UpdateSecurityInfo;
	})(Update);

	var CreateSecurityInfo = (function (_Create) {
	    function CreateSecurityInfo() {
	        _classCallCheck(this, CreateSecurityInfo);

	        if (_Create != null) {
	            _Create.apply(this, arguments);
	        }
	    }

	    _inherits(CreateSecurityInfo, _Create);

	    return CreateSecurityInfo;
	})(Create);

	var DeleteSecurityInfo = (function (_Delete) {
	    function DeleteSecurityInfo() {
	        _classCallCheck(this, DeleteSecurityInfo);

	        if (_Delete != null) {
	            _Delete.apply(this, arguments);
	        }
	    }

	    _inherits(DeleteSecurityInfo, _Delete);

	    return DeleteSecurityInfo;
	})(Delete);

	var UpdateProjectAccess = (function (_UpdateSecurityInfo) {
	    function UpdateProjectAccess() {
	        _classCallCheck(this, UpdateProjectAccess);

	        if (_UpdateSecurityInfo != null) {
	            _UpdateSecurityInfo.apply(this, arguments);
	        }
	    }

	    _inherits(UpdateProjectAccess, _UpdateSecurityInfo);

	    return UpdateProjectAccess;
	})(UpdateSecurityInfo);

	var CreateProjectRole = (function (_CreateSecurityInfo) {
	    function CreateProjectRole() {
	        _classCallCheck(this, CreateProjectRole);

	        if (_CreateSecurityInfo != null) {
	            _CreateSecurityInfo.apply(this, arguments);
	        }
	    }

	    _inherits(CreateProjectRole, _CreateSecurityInfo);

	    return CreateProjectRole;
	})(CreateSecurityInfo);

	var DefineProjectRoleRights = (function (_UpdateSecurityInfo2) {
	    function DefineProjectRoleRights() {
	        _classCallCheck(this, DefineProjectRoleRights);

	        if (_UpdateSecurityInfo2 != null) {
	            _UpdateSecurityInfo2.apply(this, arguments);
	        }
	    }

	    _inherits(DefineProjectRoleRights, _UpdateSecurityInfo2);

	    return DefineProjectRoleRights;
	})(UpdateSecurityInfo);

	// Project members

	var SetProjectMemberRole = (function (_UpdateSecurityInfo3) {
	    function SetProjectMemberRole() {
	        _classCallCheck(this, SetProjectMemberRole);

	        if (_UpdateSecurityInfo3 != null) {
	            _UpdateSecurityInfo3.apply(this, arguments);
	        }
	    }

	    _inherits(SetProjectMemberRole, _UpdateSecurityInfo3);

	    return SetProjectMemberRole;
	})(UpdateSecurityInfo);

	var AddProjectMember = (function (_UpdateSecurityInfo4) {
	    function AddProjectMember() {
	        _classCallCheck(this, AddProjectMember);

	        if (_UpdateSecurityInfo4 != null) {
	            _UpdateSecurityInfo4.apply(this, arguments);
	        }
	    }

	    _inherits(AddProjectMember, _UpdateSecurityInfo4);

	    return AddProjectMember;
	})(UpdateSecurityInfo);

	var RemoveProjectMember = (function (_DeleteSecurityInfo) {
	    function RemoveProjectMember() {
	        _classCallCheck(this, RemoveProjectMember);

	        if (_DeleteSecurityInfo != null) {
	            _DeleteSecurityInfo.apply(this, arguments);
	        }
	    }

	    _inherits(RemoveProjectMember, _DeleteSecurityInfo);

	    return RemoveProjectMember;
	})(DeleteSecurityInfo);

	var InviteProjectMember = (function (_UpdateSecurityInfo5) {
	    function InviteProjectMember() {
	        _classCallCheck(this, InviteProjectMember);

	        if (_UpdateSecurityInfo5 != null) {
	            _UpdateSecurityInfo5.apply(this, arguments);
	        }
	    }

	    _inherits(InviteProjectMember, _UpdateSecurityInfo5);

	    return InviteProjectMember;
	})(UpdateSecurityInfo);

	var AcceptProject = (function (_UpdateSecurityInfo6) {
	    function AcceptProject() {
	        _classCallCheck(this, AcceptProject);

	        if (_UpdateSecurityInfo6 != null) {
	            _UpdateSecurityInfo6.apply(this, arguments);
	        }
	    }

	    _inherits(AcceptProject, _UpdateSecurityInfo6);

	    return AcceptProject;
	})(UpdateSecurityInfo);

	// Operations on the project

	var CreateProject = (function (_Command4) {
	    function CreateProject() {
	        _classCallCheck(this, CreateProject);

	        if (_Command4 != null) {
	            _Command4.apply(this, arguments);
	        }
	    }

	    _inherits(CreateProject, _Command4);

	    return CreateProject;
	})(Command);

	var UpdateProject = (function (_Command5) {
	    function UpdateProject() {
	        _classCallCheck(this, UpdateProject);

	        if (_Command5 != null) {
	            _Command5.apply(this, arguments);
	        }
	    }

	    _inherits(UpdateProject, _Command5);

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

	var CreateResource = (function (_Command6) {
	    function CreateResource() {
	        _classCallCheck(this, CreateResource);

	        if (_Command6 != null) {
	            _Command6.apply(this, arguments);
	        }
	    }

	    _inherits(CreateResource, _Command6);

	    return CreateResource;
	})(Command);

	var UpdateResource = (function (_Command7) {
	    function UpdateResource() {
	        _classCallCheck(this, UpdateResource);

	        if (_Command7 != null) {
	            _Command7.apply(this, arguments);
	        }
	    }

	    _inherits(UpdateResource, _Command7);

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
/* 4 */
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

	var _mosaicDataset = __webpack_require__(2);

	var _Resource = __webpack_require__(5);

	var _Resource2 = _interopRequireDefault(_Resource);

	var _ModelEntity = __webpack_require__(6);

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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _mosaicDataset = __webpack_require__(2);

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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Session = __webpack_require__(7);

	var _Session2 = _interopRequireDefault(_Session);

	var _TypeUtils = __webpack_require__(11);

	var _TypeUtils2 = _interopRequireDefault(_TypeUtils);

	/**
	 * This mix-in adds to types the mandatory 'session' field as well as a
	 * 'command()' method allowing to execute 
	 */

	var ModelEntity = (function () {
	    function ModelEntity() {
	        _classCallCheck(this, ModelEntity);
	    }

	    _createClass(ModelEntity, null, [{
	        key: 'init',
	        value: function init(obj, options) {
	            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	                args[_key - 2] = arguments[_key];
	            }

	            options = options || {};
	            obj.session = _TypeUtils2['default'].checkValue(options.session instanceof _Session2['default'], options.session, 'Session is not defined or has a bad type.');
	        }
	    }, {
	        key: 'addTo',
	        value: function addTo(Type) {
	            _TypeUtils2['default'].defineTypeProperty(Type, 'session', true);
	            Type.prototype.execute = function (CommandType, options) {
	                var command = this.newAdapter(CommandType, options);
	                return this.session.execute(command);
	            };
	        }
	    }]);

	    return ModelEntity;
	})();

	exports['default'] = ModelEntity;
	module.exports = exports['default'];

/***/ },
/* 7 */
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

	var _mosaicDataset = __webpack_require__(2);

	var _mosaicIntents = __webpack_require__(8);

	var _mosaicAdapters = __webpack_require__(9);

	var _Role = __webpack_require__(10);

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
	        (0, _mosaicIntents.Intents)(this);
	        this.options = options;
	        this.roles = {};
	        this._registerRoles();
	    }

	    _inherits(Session, _Data);

	    _createClass(Session, [{
	        key: 'getRole',

	        /**
	         * Returns a Role object corresponding to the specified key. Could be
	         * overloaded in subclasses to re-define possible roles.
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
	        key: 'getRole',

	        /**
	         * Returns user's role by the specified role key. If there is no such a role
	         * registered then this method returns the Role.Nobody.
	         */
	        value: function getRole(roleKey) {
	            return this.roles[roleKey] || _Role2['default'].Nobody;
	        }
	    }, {
	        key: '_registerRoles',
	        value: function _registerRoles() {
	            [_Role2['default'].Nobody, _Role2['default'].Reader, _Role2['default'].Editor, _Role2['default'].Admin].forEach(this.registerRole.bind(this));
	        }
	    }, {
	        key: 'execute',
	        value: function execute(command) {
	            return this.runAction(command.key, command, (function () {
	                this.checkCommandAccess(command);
	                return command.execute();
	            }).bind(this));
	        }
	    }, {
	        key: 'checkCommandAccess',

	        /**
	         * Checks if the specified command has required rights level to be executed.
	         */
	        value: function checkCommandAccess(command) {
	            var target = command.target;
	            function check(condition, msg) {
	                if (!condition) {
	                    // TODO: add messages i18n
	                    throw new Error(msg || 'Access denied.');
	                }
	            }
	            function containedIn(list, value) {
	                var result = false;
	                for (var i = 0, len = list ? list.length : 0; !result && i < len; i++) {
	                    result = list[i] == value;
	                }
	                return result;
	            }
	            var allow = false;
	            var deny = false;

	            if (target) {
	                var roles = target['.roles'] || {};
	                var access = target['.access'] || {};
	                var role = this.getRole(roles[this.userId]);

	                var commandKeys = command.hierarchy;
	                while (!allow && !deny && commandKeys.length) {
	                    var commandKey = commandKeys.pop();

	                    var roleKeys = role.hierarchy;
	                    while (!allow && !deny && roleKeys.length) {
	                        var roleKey = roleKeys.pop();

	                        var accessRules = access[roleKey];
	                        if (!accessRules) continue;
	                        allow = containedIn(accessRules.allow, commandKey);
	                        deny = containedIn(accessRules.deny, commandKey);
	                    }
	                }

	                // TODO: add messages i18n
	                check(!deny, '[' + command.key + ']' + ' Access denied for the user "' + this.userId + '".');

	                // TODO: add messages i18n
	                check(!!allow, '[' + command.key + ']' + ' Access rules are not defined for the user "' + this.userId + '".');
	            }
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

	_mosaicIntents.Intents.addTo(Session);
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _TypeUtils = __webpack_require__(11);

	var _TypeUtils2 = _interopRequireDefault(_TypeUtils);

	var Role = (function () {
	    function Role() {
	        _classCallCheck(this, Role);
	    }

	    _createClass(Role, [{
	        key: 'key',
	        get: function () {
	            return _TypeUtils2['default'].getTypeKey(this);
	        }
	    }, {
	        key: 'hierarchy',
	        get: function () {
	            return _TypeUtils2['default'].getTypeHierarchyKeys(this, Role);
	        }
	    }], [{
	        key: 'key',
	        get: function () {
	            return _TypeUtils2['default'].getTypeKey(this);
	        }
	    }, {
	        key: 'hierarchy',
	        get: function () {
	            return _TypeUtils2['default'].getTypeHierarchyKeys(this, Role);
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
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = {
	    getTypeKey: getTypeKey,
	    getTypeHierarchy: getTypeHierarchy,
	    getTypeHierarchyKeys: getTypeHierarchyKeys,
	    defineTypeProperty: defineTypeProperty,

	    notEmpty: notEmpty,
	    checkValue: checkValue
	};

	var typeCounter = 0;
	function convertTypeNameToKey(name) {
	    var result = undefined;
	    if (!!name) {
	        result = name.replace(/([A-Z])/gm, function (match, str, pos) {
	            str = str.toLowerCase();
	            if (pos > 0) {
	                str = '-' + str;
	            }
	            return str;
	        });
	    } else {
	        result = 'type-' + typeCounter++;
	    }
	    return result;
	}

	var typeKey = Symbol['for']('typeKey');
	function getFunctionTypeKey(type) {
	    var key = undefined;
	    if (type.hasOwnProperty(typeKey)) {
	        key = type[typeKey];
	    } else {
	        key = convertTypeNameToKey(type.name);
	        type[typeKey] = key;
	    }
	    return key;
	}

	function getTypeKey(role) {
	    var result = undefined;
	    if (typeof role === 'string') {
	        result = role;
	    } else {
	        if (typeof role === 'function') {
	            result = getFunctionTypeKey(role);
	        } else {
	            var proto = Object.getPrototypeOf(role);
	            result = getFunctionTypeKey(proto.constructor);
	        }
	    }
	    return result;
	}

	function getTypeHierarchyKeys(role, top) {
	    return getTypeHierarchy(role, top).map(getTypeKey);
	}

	function getTypeHierarchy(role, top) {
	    top = top || Object;
	    var proto = undefined;
	    if (typeof role === 'function') {
	        proto = role.prototype;
	    } else {
	        proto = Object.getPrototypeOf(role);
	    }
	    var array = [];
	    while (proto && proto.constructor !== top) {
	        array.push(proto.constructor);
	        proto = Object.getPrototypeOf(proto);
	    }
	    array.reverse();
	    return array;
	}

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
/* 12 */
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

	var _mosaicIntents = __webpack_require__(8);

	var _TypeUtils = __webpack_require__(11);

	var _TypeUtils2 = _interopRequireDefault(_TypeUtils);

	/**
	 * Commands are used to perform specific actions on objects. They are used as
	 * adapters for other objects. It allows to re-define the default command
	 * behaviour.
	 */

	var Command = (function (_Intent) {
	  function Command(options, target, type) {
	    _classCallCheck(this, Command);

	    _get(Object.getPrototypeOf(Command.prototype), 'constructor', this).call(this, options);
	    this.target = target;
	    this.commandType = type;
	  }

	  _inherits(Command, _Intent);

	  _createClass(Command, [{
	    key: 'execute',

	    /**
	     * This method should be overloaded in subclasses to perform real operations
	     * on the target object.
	     */
	    value: function execute() {
	      return true;
	    }
	  }, {
	    key: 'key',
	    get: function () {
	      return _TypeUtils2['default'].getTypeKey(this);
	    }
	  }, {
	    key: 'hierarchy',
	    get: function () {
	      return _TypeUtils2['default'].getTypeHierarchyKeys(this, Command);
	    }
	  }], [{
	    key: 'key',
	    get: function () {
	      return _TypeUtils2['default'].getTypeKey(this);
	    }
	  }, {
	    key: 'hierarchy',
	    get: function () {
	      return _TypeUtils2['default'].getTypeHierarchyKeys(this, Command);
	    }
	  }]);

	  return Command;
	})(_mosaicIntents.Intent);

	exports['default'] = Command;

	var Create = (function (_Command) {
	  function Create() {
	    _classCallCheck(this, Create);

	    if (_Command != null) {
	      _Command.apply(this, arguments);
	    }
	  }

	  _inherits(Create, _Command);

	  return Create;
	})(Command);

	var Read = (function (_Command2) {
	  function Read() {
	    _classCallCheck(this, Read);

	    if (_Command2 != null) {
	      _Command2.apply(this, arguments);
	    }
	  }

	  _inherits(Read, _Command2);

	  return Read;
	})(Command);

	var Update = (function (_Command3) {
	  function Update() {
	    _classCallCheck(this, Update);

	    if (_Command3 != null) {
	      _Command3.apply(this, arguments);
	    }
	  }

	  _inherits(Update, _Command3);

	  return Update;
	})(Command);

	var Delete = (function (_Command4) {
	  function Delete() {
	    _classCallCheck(this, Delete);

	    if (_Command4 != null) {
	      _Command4.apply(this, arguments);
	    }
	  }

	  _inherits(Delete, _Command4);

	  return Delete;
	})(Command);

	Command.Create = Create;
	Command.Read = Read;
	Command.Update = Update;
	Command.Delete = Delete;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;