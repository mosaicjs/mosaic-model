(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mosaic-dataset"));
	else if(typeof define === 'function' && define.amd)
		define(["mosaic-dataset"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("mosaic-dataset")) : factory(root["mosaic-dataset"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	var _libRole = __webpack_require__(9);

	var _libRole2 = _interopRequireDefault(_libRole);

	var _libSession = __webpack_require__(2);

	var _libSession2 = _interopRequireDefault(_libSession);

	var _libWorkspace = __webpack_require__(10);

	var _libWorkspace2 = _interopRequireDefault(_libWorkspace);

	var _libProject = __webpack_require__(11);

	var _libProject2 = _interopRequireDefault(_libProject);

	var _libFolder = __webpack_require__(12);

	var _libFolder2 = _interopRequireDefault(_libFolder);

	var _libResource = __webpack_require__(13);

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

	var _Role = __webpack_require__(9);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libTypeKey = __webpack_require__(5);

	var _libTypeKey2 = _interopRequireDefault(_libTypeKey);

	var _libAdapterManager = __webpack_require__(6);

	var _libAdapterManager2 = _interopRequireDefault(_libAdapterManager);

	var _libAdapter = __webpack_require__(7);

	var _libAdapter2 = _interopRequireDefault(_libAdapter);

	var _libAdaptable = __webpack_require__(8);

	var _libAdaptable2 = _interopRequireDefault(_libAdaptable);

	exports['default'] = {
	    TypeKey: _libTypeKey2['default'],
	    AdapterManager: _libAdapterManager2['default'],
	    Adapter: _libAdapter2['default'],
	    Adaptable: _libAdaptable2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * This object contains utility mix-in methods returning object types as a
	 * TypeKey instance. The main method in the mixin is "getTypeKey" which returns
	 * type keys for classes, objects and strings. To build a type key for a class
	 * this method uses class names of the specified class and all their parents.
	 * For objects (class instances) this method uses the "getTypeKey" method if it
	 * is defined on the object. If there is no such a method then the object type
	 * (class) is used to get the key. The "getTypeKey" method can be used to
	 * transform strings to type keys. Type keys form hierarchies using the "/"
	 * symbol as a separator between individual type keys (Example:
	 * "Art/AbstractArt/Cubism" is a child of "Art/AbstractArt"). The
	 * TypeKey.getTypeParentKey method can be used to get parent type key.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var typeCounter = 0;
	var keyCounter = 0;
	var keyIndex = {};
	var typeIndex = {};

	var TypeKey = (function () {
	    function TypeKey(str) {
	        _classCallCheck(this, TypeKey);

	        this.id = typeCounter++;
	        this.key = str ? str + '' : '';
	    }

	    _createClass(TypeKey, [{
	        key: 'getParentKey',
	        value: function getParentKey() {
	            var segments = this.segments;
	            segments.pop();
	            var key = getKeyFromSegments(segments);
	            return key;
	        }
	    }, {
	        key: 'getChildKey',

	        /**
	         * Returns a type key for a child type.
	         */
	        value: function getChildKey(segments) {
	            var array = getKeySegmentsFromString(segments);
	            if (!array.length) return null;
	            array = this.segments.concat(array);
	            var key = getKeyFromSegments(array);
	            return key;
	        }
	    }, {
	        key: 'forEach',

	        /**
	         * Calls the specified function starting from the given to the top. If the
	         * specified action returns the "false" value then this method interrupt
	         * iterations.
	         * 
	         * @param return
	         *            the result of the last call to the action
	         */
	        value: function forEach(action, context) {
	            var i = 0;
	            var array = this.segments;
	            var result = undefined;
	            while (array.length) {
	                var k = i === 0 ? this : getKeyFromSegments(array);
	                result = action.call(context, k, i++);
	                if (result === false) break;
	                array.pop();
	            }
	            return result;
	        }
	    }, {
	        key: 'segments',

	        /**
	         * Returns an array of string segments of this key
	         */
	        get: function () {
	            return getKeySegmentsFromString(this.key);
	        }
	    }, {
	        key: 'parent',

	        /**
	         * Returns a key for the parent type.
	         */
	        get: function () {
	            return this.getParentKey();
	        }
	    }], [{
	        key: 'fromString',

	        // ---------------------------------------------------------------------
	        // Public static methods and fields
	        // ---------------------------------------------------------------------

	        value: function fromString(str) {
	            if (!str) return null;
	            var key = keyIndex[str];
	            if (!key) {
	                key = keyIndex[str] = new TypeKey(str);
	            }
	            return key;
	        }
	    }, {
	        key: 'for',

	        /**
	         * Returns the type for the specified object. If the object is not defined
	         * then this method uses 'this' instead. If the specified parameter is a
	         * function then the key type is defined for the hierarchy of classes. If
	         * the given object contains a 'getTypeKey' method then it is used instead.
	         */
	        value: function _for(obj) {
	            return TypeKey.getTypeKey(obj);
	        }
	    }, {
	        key: 'getTypeKey',
	        value: function getTypeKey(obj) {
	            if (!obj) {
	                obj = this;
	            } else if (typeof obj.getTypeKey === 'function') {
	                return obj.getTypeKey();
	            }
	            var key = undefined;
	            if (obj instanceof TypeKey) {
	                key = obj.key;
	            } else if (typeof obj === 'string') {
	                key = obj;
	            } else {
	                var proto = undefined;
	                if (typeof obj === 'function') {
	                    proto = obj.prototype;
	                } else {
	                    proto = Object.getPrototypeOf(obj);
	                }
	                var array = [];
	                while (proto) {
	                    var classKey = TypeKey.getClassKey(proto.constructor);
	                    array.push(classKey);
	                    proto = Object.getPrototypeOf(proto);
	                }
	                array.reverse();
	                key = array.join('/');
	            }
	            return TypeKey.fromString(key);
	        }
	    }, {
	        key: 'getClassId',

	        /**
	         * Returns a unique identifier of this class.
	         */
	        value: function getClassId(cls, create) {
	            var typeId = cls.__type_id;
	            if (!typeId && create !== false) {
	                typeId = cls.__type_id = ++typeCounter;
	            }
	            return typeId;
	        }
	    }, {
	        key: 'getClassKey',

	        /**
	         * Returns a unique string key for the specified type (JS function).
	         */
	        value: function getClassKey(cls) {
	            var typeId = TypeKey.getClassId(cls);
	            var key = cls.name;
	            if (!key) {
	                // If the specified function do not have a name then we generate
	                // a unique type key using the type identifier.
	                key = 'Type-' + typeId;
	            } else {
	                // The specified function has a name.
	                // We have to check that this name is unique and there is no
	                // collision with an another function. Another function has
	                // a different type identifier.
	                var ids = typeIndex[key] = typeIndex[key] || [];
	                // Use a binary search to find our type ID in the list of existing.
	                // We can use a binary search because the ids array is ordered.
	                var pos = binarySearch(ids, typeId);
	                if (pos < 0) {
	                    pos = ids.length;
	                    ids.push(typeId);
	                }
	                if (pos !== 0) {
	                    key = key + '-' + pos;
	                }
	            }
	            return key;
	        }
	    }, {
	        key: 'reset',

	        /**
	         * This method resets the internal index of types. It is used only for
	         * debugging and test purposes.
	         */
	        value: function reset() {
	            typeIndex = {};
	        }
	    }]);

	    return TypeKey;
	})();

	exports['default'] = TypeKey;

	function binarySearch(array, value) {
	    var min = 0;
	    var max = array.length - 1;
	    var idx = undefined;
	    var val = undefined;
	    while (min <= max) {
	        idx = min + max >> 1;
	        val = array[idx];
	        if (val < value) {
	            min = idx + 1;
	        } else if (val > value) {
	            max = idx - 1;
	        } else {
	            return idx;
	        }
	    }
	    return -1;
	}

	/**
	 * Returns a new type key by joining all segments from the specified array.
	 */
	function getKeyFromSegments(array) {
	    var str = array.join('/');
	    return str ? TypeKey.fromString(str) : null;
	}

	/**
	 * Returns an array of key segments
	 */
	function getKeySegmentsFromString(key) {
	    if (!key) return [];
	    return (key + '').split('/');
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _TypeKey = __webpack_require__(5);

	var _TypeKey2 = _interopRequireDefault(_TypeKey);

	/**
	 * An adapter manager used to register/retrieve objects corresponding to the
	 * types of adaptable object and the types of the target object.
	 */

	var AdapterManager = (function () {

	    /**
	     * Constructor of this class. Initializes index of adapters and an internal
	     * cache.
	     */

	    function AdapterManager() {
	        _classCallCheck(this, AdapterManager);

	        this._adapters = {};
	        this._cache = {};
	    }

	    _createClass(AdapterManager, [{
	        key: 'registerAdapter',

	        /**
	         * Registers a new adapter from one type to another.
	         * 
	         * @param from
	         *            the type of the adaptable object
	         * @param to
	         *            type of the target object
	         * @param adapter
	         *            the adapter type
	         */
	        value: function registerAdapter(from, to, adapter) {
	            if (adapter === undefined) {
	                adapter = to;
	            }
	            var fromType = _TypeKey2['default']['for'](from);
	            var toType = _TypeKey2['default']['for'](to);
	            toType.forEach(function (t) {
	                var key = this._getAdapterKey(fromType, t);
	                var slot = this._adapters[key];
	                if (slot && slot.direct) return false;
	                this._adapters[key] = {
	                    adapter: adapter,
	                    direct: t === toType
	                };
	            }, this);
	            this._cache = {};
	        }
	    }, {
	        key: 'removeAdapter',

	        /** Removes an adapter from one type to another. */
	        value: function removeAdapter(from, to) {
	            var fromType = _TypeKey2['default'].getTypeKey(from);
	            var toType = _TypeKey2['default'].getTypeKey(to);
	            var result = undefined;
	            toType.forEach(function (t) {
	                var key = this._getAdapterKey(fromType, t);
	                var slot = this._adapters[key];
	                if (slot) {
	                    var remove = undefined;
	                    if (t === toType) {
	                        result = slot.adapter;
	                        remove = true;
	                    } else {
	                        if (slot.direct) return false;
	                        remove = slot.adapter === result;
	                    }
	                    if (remove) {
	                        delete this._adapters[key];
	                    }
	                }
	            }, this);
	            this._cache = {};
	            return result;
	        }
	    }, {
	        key: 'getAdapter',

	        /**
	         * Returns an adapter of one type to another type. This method caches
	         * adapter for each unique combination of keys.
	         * 
	         * @param from
	         *            the type of the adaptable object
	         * @param to
	         *            type of the adapter
	         * @return
	         */
	        value: function getAdapter(from, to) {
	            var fromType = _TypeKey2['default'].getTypeKey(from);
	            var toType = _TypeKey2['default'].getTypeKey(to);
	            var cacheKey = this._getAdapterKey(fromType, toType);
	            var result = this._cache[cacheKey];
	            if (!result && !(cacheKey in this._cache)) {
	                fromType.forEach(function (f) {
	                    var key = this._getAdapterKey(f, toType);
	                    var slot = this._adapters[key];
	                    result = slot ? slot.adapter : undefined;
	                    if (result) return false;
	                }, this);
	                this._cache[cacheKey] = result;
	            }
	            return result;
	        }
	    }, {
	        key: 'newAdapter',

	        /**
	         * Creates and returns a new adapter from one type to another. If the
	         * registered adapter is a function then it is used as constructor to create
	         * a new object.
	         * 
	         * @param from
	         *            key of the type of the object for which we want to find an
	         *            adapter
	         * @param to
	         *            the key of the adapter
	         * @param a
	         *            new adapter instance
	         */
	        value: function newAdapter(from, to, options) {
	            var result = null;
	            var adapter = this.getAdapter(from, to);
	            var AdapterType = adapter || to;
	            if (typeof AdapterType === 'function') {
	                options = options || {};
	                result = new AdapterType(options, from, to);
	            } else {
	                result = adapter;
	            }
	            return result;
	        }
	    }, {
	        key: '_getAdapterKey',

	        /**
	         * Returns a key used to find adapters from one type to another.
	         * 
	         * @param from
	         *            the type of the adaptable object
	         * @param to
	         *            type of the target object
	         * @return a new adapter key
	         */
	        value: function _getAdapterKey(from, to) {
	            var key = from.id + ':' + to.id;
	            return key;
	        }
	    }]);

	    return AdapterManager;
	})();

	exports['default'] = AdapterManager;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * A super-class for adapters.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var KEY_FROM = Symbol['for']('_from');
	var KEY_TO = Symbol['for']('_to');

	var Adapter = (function () {

	    /**
	     * Constructor of this class.
	     * 
	     * @param options
	     * @param from
	     *            the adapter object
	     * @param to
	     *            the type of the adapter; this instance is used as an adapter
	     *            for the specified type
	     */

	    function Adapter(options, from, to) {
	        _classCallCheck(this, Adapter);

	        this.adaptable = from;
	        this.adapterType = to;
	    }

	    _createClass(Adapter, [{
	        key: 'adaptable',

	        /**
	         * Returns reference to the main adapted object.
	         */
	        get: function () {
	            return this[KEY_FROM];
	        },

	        /**
	         * Sets a new adaptable object
	         */
	        set: function (adaptable) {
	            if (adaptable !== undefined) {
	                this[KEY_FROM] = adaptable;
	            } else {
	                delete this[KEY_FROM];
	            }
	        }
	    }, {
	        key: 'adapterType',

	        /**
	         * Returns the adaptable type.
	         */
	        get: function () {
	            return this[KEY_TO];
	        },

	        /**
	         * Sets a new adaptable object
	         */
	        set: function (type) {
	            if (!!type) {
	                this[KEY_TO] = type;
	            } else {
	                delete this[KEY_TO];
	            }
	        }
	    }]);

	    return Adapter;
	})();

	exports['default'] = Adapter;
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

	var _TypeKey = __webpack_require__(5);

	var _TypeKey2 = _interopRequireDefault(_TypeKey);

	var _Adapter2 = __webpack_require__(7);

	var _Adapter3 = _interopRequireDefault(_Adapter2);

	/**
	 * A super-class for all adaptable object. Objects of this type use an internal
	 * adapter manager to instantiate adapters and store them in an internal cache.
	 */
	var ADAPTERS = Symbol['for']('adapters');

	var Adaptable = (function (_Adapter) {

	    /**
	     * Constructor of this class.
	     * 
	     * @param options.adapters
	     *            a mandatory instance of the "AdapterManager" class
	     * @param from
	     *            optional parent adaptable object; this parameter is defined
	     *            only if this instance is used as an adapter itself for another
	     *            object
	     * @param to
	     *            optional adapter type for the parent object; this parameter is
	     *            defined only if this instance is used as an adapter itself for
	     *            another object
	     */

	    function Adaptable(options) {
	        var _get2;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        _classCallCheck(this, Adaptable);

	        (_get2 = _get(Object.getPrototypeOf(Adaptable.prototype), 'constructor', this)).call.apply(_get2, [this, options].concat(args));
	        var adapters = undefined;
	        if (options) {
	            adapters = options.adapters;
	        }
	        if (!adapters) {
	            // This object is used as an adapter itself.
	            // So try to get the adapters from this parent object.
	            var adaptable = this.adaptable;
	            adapters = adaptable ? adaptable.adapters : undefined;
	        }
	        this.adapters = adapters;
	    }

	    _inherits(Adaptable, _Adapter);

	    _createClass(Adaptable, [{
	        key: 'setAdapter',

	        /**
	         * Sets a new object adapter. This adapter is stored in an internal object
	         * cache.
	         * 
	         * @param adapterType
	         *            the type of the adapter to set
	         * @param adapter
	         *            a new adapter to set
	         * @return this object
	         */
	        value: function setAdapter(adapterType, adapter) {
	            if (adapter) {
	                var cache = this._getAdaptersCache();
	                var key = _TypeKey2['default'].getTypeKey(adapterType);
	                cache[key.id] = adapter;
	            }
	            return this;
	        }
	    }, {
	        key: 'getAdapter',

	        /**
	         * Returns an adapter for this object corresponding to the specified adapter
	         * type. The resulting adapter is stored in an internal object-specific
	         * adapter cache. To clear adapter cache use the "clearAdapters" method.
	         * 
	         * @param adapterType
	         *            the type of the adapter to return
	         * @param options
	         *            options used to create a new adapter; if an adapter already
	         *            exists then this parameter is ignored
	         * @return an adapter instance (if any)
	         */
	        value: function getAdapter(adapterType, options) {
	            var cache = this._getAdaptersCache();
	            var key = _TypeKey2['default'].getTypeKey(adapterType);
	            var result = cache[key.id];
	            if (!result && !(key.id in cache)) {
	                result = this.newAdapter(adapterType, options);
	                cache[key.id] = result;
	            }
	            return result;
	        }
	    }, {
	        key: 'newAdapter',

	        /**
	         * Creates and returns a new adapter for this object.
	         * 
	         * @param adapterType
	         *            the type of the adapter to create
	         * @param options
	         *            options used to create a new adapter; if an adapter already
	         *            exists then it does not take into account
	         * @return a newly created adapter instance
	         */
	        value: function newAdapter(adapterType, options) {
	            var result = this.adapters.newAdapter(this, adapterType, options);
	            return result;
	        }
	    }, {
	        key: 'clearAdapters',

	        /**
	         * This method removes object adapters of the specified types. If types are
	         * not defined then all cached adapters are removed.
	         * 
	         * @param adapterTypes
	         *            a list of adapter types to remove from the cache
	         */
	        value: function clearAdapters(adapterTypes) {
	            if (!this.__adapters) return;
	            if (!adapterTypes || !adapterTypes.length) {
	                delete this.__adapters;
	            } else {
	                for (var i = 0; i < adapterTypes.length; i++) {
	                    var adapterType = adapterTypes[i];
	                    var key = _TypeKey2['default'].getTypeKey(adapterType);
	                    delete this.__adapters[key.id];
	                }
	                if (!Object.keys(this.__adapters).length) {
	                    delete this.__adapters;
	                }
	            }
	            return this;
	        }
	    }, {
	        key: '_getAdaptersCache',

	        /** Returns an internal object-specific adapters cache. */
	        value: function _getAdaptersCache() {
	            if (!this.__adapters) {
	                this.__adapters = {};
	            }
	            return this.__adapters;
	        }
	    }, {
	        key: 'adapters',

	        /**
	         * Returns reference to the internal adapters manager.
	         */
	        get: function () {
	            return this[ADAPTERS];
	        },

	        /**
	         * Sets a new adapter manager.
	         */
	        set: function (adapters) {
	            this[ADAPTERS] = adapters;
	        }
	    }]);

	    return Adaptable;
	})(_Adapter3['default']);

	exports['default'] = Adaptable;

	Adaptable.prototype.getTypeKey = _TypeKey2['default'].getTypeKey;
	module.exports = exports['default'];

/***/ },
/* 9 */
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
/* 10 */
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

	var _Project = __webpack_require__(11);

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
/* 11 */
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

	var _Folder2 = __webpack_require__(12);

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

	var _mosaicDataset = __webpack_require__(3);

	var _Resource = __webpack_require__(13);

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
/* 13 */
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