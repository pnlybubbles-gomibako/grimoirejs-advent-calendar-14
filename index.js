(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('regenerator-runtime/runtime');
require('grimoirejs/register');
require('grimoirejs-math/register');
require('grimoirejs-fundamental/register');
require('./src/gui');
require('./src/main');

},{"./src/gui":10,"./src/main":11,"grimoirejs-fundamental/register":3,"grimoirejs-math/register":5,"grimoirejs/register":7,"regenerator-runtime/runtime":9}],2:[function(require,module,exports){
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.fundamental;
},{}],3:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AssetLoader = __webpack_require__(1);

	var _AssetLoader2 = _interopRequireDefault(_AssetLoader);

	var _CacheResolver = __webpack_require__(3);

	var _CacheResolver2 = _interopRequireDefault(_CacheResolver);

	var _ExternalResourceResolver = __webpack_require__(4);

	var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);

	var _ImageResolver = __webpack_require__(5);

	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

	var _TextFileResolver = __webpack_require__(6);

	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

	var _AssetLoadingManagerComponent = __webpack_require__(7);

	var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);

	var _CameraComponent = __webpack_require__(11);

	var _CameraComponent2 = _interopRequireDefault(_CameraComponent);

	var _CanvasInitializerComponent = __webpack_require__(21);

	var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);

	var _FullscreenComponent = __webpack_require__(26);

	var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);

	var _GeometryComponent = __webpack_require__(27);

	var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);

	var _GeometryRegistoryComponent = __webpack_require__(29);

	var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);

	var _HTMLBinderComponent = __webpack_require__(30);

	var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);

	var _LoopManagerComponent = __webpack_require__(31);

	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

	var _MaterialComponent = __webpack_require__(32);

	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

	var _MaterialContainerComponent = __webpack_require__(33);

	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

	var _MaterialImporterComponent = __webpack_require__(35);

	var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);

	var _MaterialManagerComponent = __webpack_require__(60);

	var _MaterialManagerComponent2 = _interopRequireDefault(_MaterialManagerComponent);

	var _MeshRendererComponent = __webpack_require__(61);

	var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

	var _MouseCameraControlComponent = __webpack_require__(62);

	var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);

	var _RenderBufferComponent = __webpack_require__(63);

	var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);

	var _RendererComponent = __webpack_require__(66);

	var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

	var _RendererManagerComponent = __webpack_require__(67);

	var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);

	var _RenderQuadComponent = __webpack_require__(69);

	var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);

	var _RenderSceneComponent = __webpack_require__(71);

	var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

	var _SceneComponent = __webpack_require__(19);

	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

	var _TextureBufferComponent = __webpack_require__(72);

	var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);

	var _TextureComponent = __webpack_require__(73);

	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);

	var _TransformComponent = __webpack_require__(17);

	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

	var _CanvasSizeConverter = __webpack_require__(74);

	var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);

	var _ComponentConverter = __webpack_require__(75);

	var _ComponentConverter2 = _interopRequireDefault(_ComponentConverter);

	var _EnumConverter = __webpack_require__(77);

	var _EnumConverter2 = _interopRequireDefault(_EnumConverter);

	var _GeometryConverter = __webpack_require__(78);

	var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);

	var _MaterialConverter = __webpack_require__(79);

	var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);

	var _NumberArrayConverter = __webpack_require__(80);

	var _NumberArrayConverter2 = _interopRequireDefault(_NumberArrayConverter);

	var _NumberConverter = __webpack_require__(81);

	var _NumberConverter2 = _interopRequireDefault(_NumberConverter);

	var _ObjectConverter = __webpack_require__(82);

	var _ObjectConverter2 = _interopRequireDefault(_ObjectConverter);

	var _TextureConverter = __webpack_require__(83);

	var _TextureConverter2 = _interopRequireDefault(_TextureConverter);

	var _ViewportConverter = __webpack_require__(85);

	var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);

	var _DefaultPrimitives = __webpack_require__(87);

	var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);

	var _Geometry = __webpack_require__(55);

	var _Geometry2 = _interopRequireDefault(_Geometry);

	var _GeometryFactory = __webpack_require__(28);

	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

	var _GeometryUtility = __webpack_require__(88);

	var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);

	var _DefaultMacro = __webpack_require__(45);

	var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);

	var _DefaultMaterial = __webpack_require__(89);

	var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);

	var _MacroRegistory = __webpack_require__(44);

	var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);

	var _Material = __webpack_require__(46);

	var _Material2 = _interopRequireDefault(_Material);

	var _MaterialFactory = __webpack_require__(36);

	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

	var _Pass = __webpack_require__(48);

	var _Pass2 = _interopRequireDefault(_Pass);

	var _Technique = __webpack_require__(47);

	var _Technique2 = _interopRequireDefault(_Technique);

	var _TextureReference = __webpack_require__(84);

	var _TextureReference2 = _interopRequireDefault(_TextureReference);

	var _UniformResolverRegistry = __webpack_require__(58);

	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

	var _MatricesRegister = __webpack_require__(91);

	var _MatricesRegister2 = _interopRequireDefault(_MatricesRegister);

	var _MiscRegister = __webpack_require__(92);

	var _MiscRegister2 = _interopRequireDefault(_MiscRegister);

	var _UserValueRegister = __webpack_require__(94);

	var _UserValueRegister2 = _interopRequireDefault(_UserValueRegister);

	var _Buffer = __webpack_require__(57);

	var _Buffer2 = _interopRequireDefault(_Buffer);

	var _FrameBuffer = __webpack_require__(70);

	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

	var _GLExtRequestor = __webpack_require__(25);

	var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

	var _ManagedProgram = __webpack_require__(49);

	var _ManagedProgram2 = _interopRequireDefault(_ManagedProgram);

	var _ManagedShader = __webpack_require__(53);

	var _ManagedShader2 = _interopRequireDefault(_ManagedShader);

	var _Program = __webpack_require__(50);

	var _Program2 = _interopRequireDefault(_Program);

	var _RenderBuffer = __webpack_require__(64);

	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

	var _ResourceBase = __webpack_require__(24);

	var _ResourceBase2 = _interopRequireDefault(_ResourceBase);

	var _ResourceCache = __webpack_require__(51);

	var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

	var _Shader = __webpack_require__(54);

	var _Shader2 = _interopRequireDefault(_Shader);

	var _Texture2D = __webpack_require__(23);

	var _Texture2D2 = _interopRequireDefault(_Texture2D);

	var _UniformProxy = __webpack_require__(52);

	var _UniformProxy2 = _interopRequireDefault(_UniformProxy);

	var _DrawPriorty = __webpack_require__(34);

	var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);

	var _RenderQueue = __webpack_require__(16);

	var _RenderQueue2 = _interopRequireDefault(_RenderQueue);

	var _RenderQueueRegistry = __webpack_require__(20);

	var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);

	var _ImportResolver = __webpack_require__(43);

	var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

	var _NameSemanticsPair = __webpack_require__(42);

	var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);

	var _Parser = __webpack_require__(37);

	var _Parser2 = _interopRequireDefault(_Parser);

	var _Preferences = __webpack_require__(40);

	var _Preferences2 = _interopRequireDefault(_Preferences);

	var _SortTransformUtility = __webpack_require__(39);

	var _SortTransformUtility2 = _interopRequireDefault(_SortTransformUtility);

	var _TypeToConstant = __webpack_require__(41);

	var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);

	var _HashCalculator = __webpack_require__(38);

	var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

	var _TextureSizeCalculator = __webpack_require__(65);

	var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

	var _main = __webpack_require__(95);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var __VERSION__ = "0.11.0-beta4";
	var __NAME__ = "grimoirejs-fundamental";

	var __EXPOSE__ = {
	    "Asset": {
	        "AssetLoader": _AssetLoader2.default,
	        "CacheResolver": _CacheResolver2.default,
	        "ExternalResourceResolver": _ExternalResourceResolver2.default,
	        "ImageResolver": _ImageResolver2.default,
	        "TextFileResolver": _TextFileResolver2.default
	    },
	    "Components": {
	        "AssetLoadingManagerComponent": _AssetLoadingManagerComponent2.default,
	        "CameraComponent": _CameraComponent2.default,
	        "CanvasInitializerComponent": _CanvasInitializerComponent2.default,
	        "FullscreenComponent": _FullscreenComponent2.default,
	        "GeometryComponent": _GeometryComponent2.default,
	        "GeometryRegistoryComponent": _GeometryRegistoryComponent2.default,
	        "HTMLBinderComponent": _HTMLBinderComponent2.default,
	        "LoopManagerComponent": _LoopManagerComponent2.default,
	        "MaterialComponent": _MaterialComponent2.default,
	        "MaterialContainerComponent": _MaterialContainerComponent2.default,
	        "MaterialImporterComponent": _MaterialImporterComponent2.default,
	        "MaterialManagerComponent": _MaterialManagerComponent2.default,
	        "MeshRendererComponent": _MeshRendererComponent2.default,
	        "MouseCameraControlComponent": _MouseCameraControlComponent2.default,
	        "RenderBufferComponent": _RenderBufferComponent2.default,
	        "RendererComponent": _RendererComponent2.default,
	        "RendererManagerComponent": _RendererManagerComponent2.default,
	        "RenderQuadComponent": _RenderQuadComponent2.default,
	        "RenderSceneComponent": _RenderSceneComponent2.default,
	        "SceneComponent": _SceneComponent2.default,
	        "TextureBufferComponent": _TextureBufferComponent2.default,
	        "TextureComponent": _TextureComponent2.default,
	        "TransformComponent": _TransformComponent2.default
	    },
	    "Converters": {
	        "CanvasSizeConverter": _CanvasSizeConverter2.default,
	        "ComponentConverter": _ComponentConverter2.default,
	        "EnumConverter": _EnumConverter2.default,
	        "GeometryConverter": _GeometryConverter2.default,
	        "MaterialConverter": _MaterialConverter2.default,
	        "NumberArrayConverter": _NumberArrayConverter2.default,
	        "NumberConverter": _NumberConverter2.default,
	        "ObjectConverter": _ObjectConverter2.default,
	        "TextureConverter": _TextureConverter2.default,
	        "ViewportConverter": _ViewportConverter2.default
	    },
	    "Geometry": {
	        "DefaultPrimitives": _DefaultPrimitives2.default,
	        "Geometry": _Geometry2.default,
	        "GeometryFactory": _GeometryFactory2.default,
	        "GeometryUtility": _GeometryUtility2.default
	    },
	    "Material": {
	        "DefaultMacro": _DefaultMacro2.default,
	        "DefaultMaterial": _DefaultMaterial2.default,
	        "MacroRegistory": _MacroRegistory2.default,
	        "Material": _Material2.default,
	        "MaterialFactory": _MaterialFactory2.default,
	        "Pass": _Pass2.default,
	        "Technique": _Technique2.default,
	        "TextureReference": _TextureReference2.default,
	        "UniformResolverRegistry": _UniformResolverRegistry2.default,
	        "Uniforms": {
	            "MatricesRegister": _MatricesRegister2.default,
	            "MiscRegister": _MiscRegister2.default,
	            "UserValueRegister": _UserValueRegister2.default
	        }
	    },
	    "Resource": {
	        "Buffer": _Buffer2.default,
	        "FrameBuffer": _FrameBuffer2.default,
	        "GLExtRequestor": _GLExtRequestor2.default,
	        "ManagedProgram": _ManagedProgram2.default,
	        "ManagedShader": _ManagedShader2.default,
	        "Program": _Program2.default,
	        "RenderBuffer": _RenderBuffer2.default,
	        "ResourceBase": _ResourceBase2.default,
	        "ResourceCache": _ResourceCache2.default,
	        "Shader": _Shader2.default,
	        "Texture2D": _Texture2D2.default,
	        "UniformProxy": _UniformProxy2.default
	    },
	    "SceneRenderer": {
	        "DrawPriorty": _DrawPriorty2.default,
	        "RenderQueue": _RenderQueue2.default,
	        "RenderQueueRegistry": _RenderQueueRegistry2.default
	    },
	    "Sort": {
	        "ImportResolver": _ImportResolver2.default,
	        "NameSemanticsPair": _NameSemanticsPair2.default,
	        "Parser": _Parser2.default,
	        "Preferences": _Preferences2.default,
	        "SortTransformUtility": _SortTransformUtility2.default,
	        "TypeToConstant": _TypeToConstant2.default
	    },
	    "Util": {
	        "HashCalculator": _HashCalculator2.default,
	        "TextureSizeCalculator": _TextureSizeCalculator2.default
	    }
	};
	var __BASE__ = (0, _main2.default)();
	Object.assign(__EXPOSE__, {
	    __VERSION__: __VERSION__,
	    __NAME__: __NAME__
	});
	Object.assign(__BASE__ || {}, __EXPOSE__);
	window["GrimoireJS"].lib.fundamental = __EXPOSE__;
	exports.default = __BASE__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EEObject2 = __webpack_require__(2);

	var _EEObject3 = _interopRequireDefault(_EEObject2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	/**
	 * Provides managing all promise on initializing resources.
	 */
	var AssetLoader = function (_EEObject) {
	    _inherits(AssetLoader, _EEObject);

	    function AssetLoader() {
	        _classCallCheck(this, AssetLoader);

	        /**
	         * Promise count registered.
	         * @type {number}
	         */
	        var _this = _possibleConstructorReturn(this, (AssetLoader.__proto__ || Object.getPrototypeOf(AssetLoader)).apply(this, arguments));

	        _this.registerCount = 0;
	        /**
	         * Promise count finished successfully.
	         * @type {number}
	         */
	        _this.loadCount = 0;
	        /**
	         * Promise count completed(success and errored)
	         * @type {number}
	         */
	        _this.completeCount = 0;
	        /**
	         * Promise count errored
	         * @type {number}
	         */
	        _this.errorCount = 0;
	        /**
	         * Main promise to provide tasks for waiting for all resource loading.
	         * @type {Promise<void>}
	         */
	        _this.promise = new Promise(function (resolve) {
	            _this._resolve = resolve;
	        });
	        return _this;
	    }
	    /**
	     * Register an promise to be waited until finished.
	     */


	    _createClass(AssetLoader, [{
	        key: "register",
	        value: function register(promise) {
	            var _this2 = this;

	            this.registerCount++;
	            return new Promise(function (resolve, reject) {
	                (function () {
	                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                        return regeneratorRuntime.wrap(function _callee$(_context) {
	                            while (1) {
	                                switch (_context.prev = _context.next) {
	                                    case 0:
	                                        _context.prev = 0;
	                                        _context.t0 = resolve;
	                                        _context.next = 4;
	                                        return promise;

	                                    case 4:
	                                        _context.t1 = _context.sent;
	                                        (0, _context.t0)(_context.t1);

	                                        this.loadCount++;
	                                        _context.next = 13;
	                                        break;

	                                    case 9:
	                                        _context.prev = 9;
	                                        _context.t2 = _context["catch"](0);

	                                        reject(_context.t2);
	                                        this.errorCount++;

	                                    case 13:
	                                        this.completeCount++;
	                                        this._checkLoadCompleted();

	                                    case 15:
	                                    case "end":
	                                        return _context.stop();
	                                }
	                            }
	                        }, _callee, this, [[0, 9]]);
	                    }));
	                }).bind(_this2)();
	            });
	        }
	        /**
	         * Verify all promises are completed.
	         */

	    }, {
	        key: "_checkLoadCompleted",
	        value: function _checkLoadCompleted() {
	            this.emit("progress", this);
	            if (this.registerCount === this.completeCount) {
	                this._resolve();
	            }
	        }
	    }]);

	    return AssetLoader;
	}(_EEObject3.default);

	exports.default = AssetLoader;

/***/ },
/* 2 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Base.EEObject;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	/**
	 * Resolve resources with caching.
	 */
	/**
	 * Resolve resources with caching.
	 */
	var CacheResolver = function () {
	    function CacheResolver(toAbsolute) {
	        _classCallCheck(this, CacheResolver);

	        this.toAbsolute = toAbsolute;
	        this.cache = {};
	        this.resolvers = {};
	    }

	    _createClass(CacheResolver, [{
	        key: "resolve",
	        value: function resolve(src, resolver) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var abs, result;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                abs = this.toAbsolute(src);

	                                if (!this._cached(abs)) {
	                                    _context.next = 5;
	                                    break;
	                                }

	                                return _context.abrupt("return", this.cache[abs]);

	                            case 5:
	                                if (!this._resolving(abs)) {
	                                    _context.next = 11;
	                                    break;
	                                }

	                                _context.next = 8;
	                                return this.resolvers[abs];

	                            case 8:
	                                return _context.abrupt("return", _context.sent);

	                            case 11:
	                                this.resolvers[abs] = resolver(abs);
	                                _context.next = 14;
	                                return this.resolvers[abs];

	                            case 14:
	                                result = _context.sent;

	                                this._resolved(abs, result);
	                                return _context.abrupt("return", result);

	                            case 17:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_cached",
	        value: function _cached(abs) {
	            return typeof this.cache[abs] !== "undefined";
	        }
	    }, {
	        key: "_resolving",
	        value: function _resolving(abs) {
	            return typeof this.resolvers[abs] !== "undefined";
	        }
	    }, {
	        key: "_resolved",
	        value: function _resolved(abs, result) {
	            delete this.resolvers[abs];
	            this.cache[abs] = result;
	        }
	    }]);

	    return CacheResolver;
	}();

	exports.default = CacheResolver;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CacheResolver2 = __webpack_require__(3);

	var _CacheResolver3 = _interopRequireDefault(_CacheResolver2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExternalResourceResolver = function (_CacheResolver) {
	    _inherits(ExternalResourceResolver, _CacheResolver);

	    function ExternalResourceResolver() {
	        _classCallCheck(this, ExternalResourceResolver);

	        return _possibleConstructorReturn(this, (ExternalResourceResolver.__proto__ || Object.getPrototypeOf(ExternalResourceResolver)).call(this, ExternalResourceResolver._toAbsolute));
	    }

	    _createClass(ExternalResourceResolver, null, [{
	        key: "_toAbsolute",
	        value: function _toAbsolute(href) {
	            var link = document.createElement("a");
	            link.href = href;
	            return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
	        }
	    }]);

	    return ExternalResourceResolver;
	}(_CacheResolver3.default);

	exports.default = ExternalResourceResolver;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ImageResolver = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ExternalResourceResolver = __webpack_require__(4);

	var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageResolver = exports.ImageResolver = function (_ExternalResourceReso) {
	    _inherits(ImageResolver, _ExternalResourceReso);

	    function ImageResolver() {
	        _classCallCheck(this, ImageResolver);

	        return _possibleConstructorReturn(this, (ImageResolver.__proto__ || Object.getPrototypeOf(ImageResolver)).apply(this, arguments));
	    }

	    _createClass(ImageResolver, [{
	        key: "resolve",
	        value: function resolve(path) {
	            return _get(ImageResolver.prototype.__proto__ || Object.getPrototypeOf(ImageResolver.prototype), "resolve", this).call(this, path, function (abs) {
	                return new Promise(function (resolve, reject) {
	                    var imgTag = new Image();
	                    imgTag.onload = function () {
	                        resolve(imgTag);
	                    };
	                    imgTag.onerror = function (e) {
	                        reject(e);
	                    };
	                    imgTag.src = abs;
	                });
	            });
	        }
	    }]);

	    return ImageResolver;
	}(_ExternalResourceResolver2.default);

	exports.default = new ImageResolver();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TextFileResolver = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ExternalResourceResolver = __webpack_require__(4);

	var _ExternalResourceResolver2 = _interopRequireDefault(_ExternalResourceResolver);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextFileResolver = exports.TextFileResolver = function (_ExternalResourceReso) {
	    _inherits(TextFileResolver, _ExternalResourceReso);

	    function TextFileResolver() {
	        _classCallCheck(this, TextFileResolver);

	        return _possibleConstructorReturn(this, (TextFileResolver.__proto__ || Object.getPrototypeOf(TextFileResolver)).apply(this, arguments));
	    }

	    _createClass(TextFileResolver, [{
	        key: "resolve",
	        value: function resolve(path) {
	            return _get(TextFileResolver.prototype.__proto__ || Object.getPrototypeOf(TextFileResolver.prototype), "resolve", this).call(this, path, function (abs) {
	                return new Promise(function (resolve, reject) {
	                    var xhr = new XMLHttpRequest();
	                    xhr.open("GET", abs);
	                    xhr.onload = function (v) {
	                        resolve(xhr.responseText);
	                    };
	                    xhr.onerror = function (e) {
	                        reject(e);
	                    };
	                    xhr.send();
	                });
	            });
	        }
	    }]);

	    return TextFileResolver;
	}(_ExternalResourceResolver2.default);

	exports.default = new TextFileResolver();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grimoirejs = __webpack_require__(8);

	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

	var _AssetLoader = __webpack_require__(1);

	var _AssetLoader2 = _interopRequireDefault(_AssetLoader);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _defaultLoader = __webpack_require__(10);

	var _defaultLoader2 = _interopRequireDefault(_defaultLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	var AssetLoadingManagerComponent = function (_Component) {
	    _inherits(AssetLoadingManagerComponent, _Component);

	    function AssetLoadingManagerComponent() {
	        _classCallCheck(this, AssetLoadingManagerComponent);

	        var _this = _possibleConstructorReturn(this, (AssetLoadingManagerComponent.__proto__ || Object.getPrototypeOf(AssetLoadingManagerComponent)).apply(this, arguments));

	        _this.loader = new _AssetLoader2.default();
	        return _this;
	    }

	    _createClass(AssetLoadingManagerComponent, [{
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            if (this.getAttribute("autoStart")) {
	                this._autoStart();
	            }
	            this._documentResolver();
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;

	            this.companion.set(_grimoirejs2.default.ns(this.name.ns)("loader"), this.loader);
	            this.loader.register(new Promise(function (resolve) {
	                _this2._documentResolver = resolve;
	            }));
	            var canvasContainer = this.companion.get("canvasContainer");
	            if (!this.getAttribute("enableLoader")) {
	                return;
	            }
	            var loaderContainer = document.createElement("div");
	            loaderContainer.innerHTML = _defaultLoader2.default;
	            loaderContainer.style.width = loaderContainer.style.height = "100%";
	            canvasContainer.appendChild(loaderContainer);
	            this._loaderElement = loaderContainer;
	        }
	    }, {
	        key: "_autoStart",
	        value: function _autoStart() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return this.loader.promise;

	                            case 2:
	                                if (this._loaderElement) {
	                                    this._loaderElement.remove();
	                                }
	                                this.node.emit("asset-load-completed");
	                                this.tree("goml").setAttribute("loopEnabled", true);

	                            case 5:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);

	    return AssetLoadingManagerComponent;
	}(_Component3.default);

	exports.default = AssetLoadingManagerComponent;

	AssetLoadingManagerComponent.attributes = {
	    loadingProgress: {
	        default: 0,
	        converter: "Number"
	    },
	    autoStart: {
	        default: true,
	        converter: "Boolean"
	    },
	    enableLoader: {
	        default: true,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ },
/* 9 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.Component;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div style=\"width:100%;height:100%;position: relative;\">\n    <div style=\"width: 55px;height: 55px;border-radius: 100%;border: 5px solid #381794;border-right-color: #FC659D;animation: rotate 1s linear infinite;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;\"></div>\n</div>\n<style type=\"text/css\">\n    @keyframes rotate {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n</style>\n"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GLM = __webpack_require__(12);

	var _GLM2 = _interopRequireDefault(_GLM);

	var _Vector = __webpack_require__(13);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Vector3 = __webpack_require__(14);

	var _Vector4 = _interopRequireDefault(_Vector3);

	var _Matrix = __webpack_require__(15);

	var _Matrix2 = _interopRequireDefault(_Matrix);

	var _RenderQueue = __webpack_require__(16);

	var _RenderQueue2 = _interopRequireDefault(_RenderQueue);

	var _TransformComponent = __webpack_require__(17);

	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

	var _SceneComponent = __webpack_require__(19);

	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var vec3 = _GLM2.default.vec3,
	    vec4 = _GLM2.default.vec4,
	    mat4 = _GLM2.default.mat4;

	var CameraComponent = function (_Component) {
	    _inherits(CameraComponent, _Component);

	    function CameraComponent() {
	        _classCallCheck(this, CameraComponent);

	        var _this = _possibleConstructorReturn(this, (CameraComponent.__proto__ || Object.getPrototypeOf(CameraComponent)).apply(this, arguments));

	        _this._renderQueue = new _RenderQueue2.default();
	        _this._eyeCache = _Vector4.default.Zero;
	        _this._lookAtCache = _Vector4.default.Zero;
	        _this._upCache = _Vector4.default.Zero;
	        _this.__viewMatrix = new _Matrix2.default();
	        _this.__projectionMatrix = new _Matrix2.default();
	        _this.__invProjectionMatrix = new _Matrix2.default();
	        _this.__projectionViewMatrix = new _Matrix2.default();
	        _this._orthographic = false;
	        return _this;
	    }

	    _createClass(CameraComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;

	            this.getAttributeRaw("far").watch(function (v) {
	                _this2.Far = v;
	            }, true);
	            this.getAttributeRaw("near").watch(function (v) {
	                _this2.Near = v;
	            }, true);
	            this.getAttributeRaw("fovy").watch(function (v) {
	                _this2.Fovy = v;
	            }, true);
	            this.getAttributeRaw("aspect").watch(function (v) {
	                _this2.Aspect = v;
	            }, true);
	            this.getAttributeRaw("orthoSize").watch(function (v) {
	                _this2.OrthoSize = v;
	            }, true);
	            this.getAttributeRaw("orthogonal").watch(function (v) {
	                _this2.OrthographicMode = v;
	            }, true);
	            this.getAttributeRaw("autoAspect").boundTo("_autoAspect");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.transform = this.node.getComponent(_TransformComponent2.default);
	            this.containedScene = CameraComponent._findContainedScene(this.node);
	            this.containedScene.queueRegistory.registerQueue(this._renderQueue);
	            this.node.on("transformUpdated", this.updateTransform.bind(this));
	            this.updateTransform();
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this.containedScene.queueRegistory.unregisterQueue(this._renderQueue);
	            this.containedScene = null;
	        }
	    }, {
	        key: "updateContainedScene",
	        value: function updateContainedScene(loopIndex) {
	            if (this.containedScene) {
	                this.containedScene.updateScene(loopIndex);
	            }
	        }
	    }, {
	        key: "renderScene",
	        value: function renderScene(args) {
	            args = args;
	            if (this.containedScene) {
	                this._justifyAspect(args);
	                args.sceneDescription = this.containedScene.sceneDescription;
	                this._renderQueue.renderAll(args, true, args.loopIndex);
	            }
	        }
	    }, {
	        key: "_justifyAspect",
	        value: function _justifyAspect(args) {
	            if (this._autoAspect) {
	                var asp = args.viewport.Width / args.viewport.Height;
	                if (this._aspectCache !== asp) {
	                    this.setAttribute("aspect", asp);
	                    this._aspectCache = asp;
	                }
	            }
	        }
	    }, {
	        key: "updateTransform",
	        value: function updateTransform() {
	            var transform = this.transform;
	            vec3.transformMat4(this._eyeCache.rawElements, _Vector4.default.Zero.rawElements, transform.globalTransform.rawElements);
	            vec4.transformMat4(this._lookAtCache.rawElements, CameraComponent._frontOrigin.rawElements, transform.globalTransform.rawElements);
	            vec3.add(this._lookAtCache.rawElements, this._lookAtCache.rawElements, this._eyeCache.rawElements);
	            vec4.transformMat4(this._upCache.rawElements, CameraComponent._upOrigin.rawElements, transform.globalTransform.rawElements);
	            mat4.lookAt(this.__viewMatrix.rawElements, this._eyeCache.rawElements, this._lookAtCache.rawElements, this._upCache.rawElements);
	            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
	        }
	    }, {
	        key: "_recalculateProjection",
	        value: function _recalculateProjection() {
	            if (!this._orthographic) {
	                mat4.perspective(this.__projectionMatrix.rawElements, this._fovy, this._aspect, this._near, this._far);
	            } else {
	                mat4.ortho(this.__projectionMatrix.rawElements, -this._orthoSize * this._aspect, this._orthoSize * this._aspect, -this._orthoSize, this._orthoSize, this._near, this._far);
	            }
	            mat4.mul(this.__projectionViewMatrix.rawElements, this.__projectionMatrix.rawElements, this.__viewMatrix.rawElements);
	            mat4.invert(this.__invProjectionMatrix.rawElements, this.__projectionMatrix.rawElements);
	        }
	    }, {
	        key: "ViewMatrix",
	        get: function get() {
	            return this.__viewMatrix;
	        }
	    }, {
	        key: "ProjectionMatrix",
	        get: function get() {
	            return this.__projectionMatrix;
	        }
	    }, {
	        key: "InvProjectionMatrix",
	        get: function get() {
	            return this.__invProjectionMatrix;
	        }
	    }, {
	        key: "ProjectionViewMatrix",
	        get: function get() {
	            return this.__projectionViewMatrix;
	        }
	    }, {
	        key: "Far",
	        get: function get() {
	            return this._far;
	        },
	        set: function set(far) {
	            this._far = far;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "Near",
	        get: function get() {
	            return this._near;
	        },
	        set: function set(near) {
	            this._near = near;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "Aspect",
	        get: function get() {
	            return this._aspect;
	        },
	        set: function set(aspect) {
	            this._aspect = aspect;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "Fovy",
	        get: function get() {
	            return this._fovy;
	        },
	        set: function set(fov) {
	            this._fovy = fov;
	            this._recalculateProjection();
	        }
	    }, {
	        key: "OrthoSize",
	        get: function get() {
	            return this._orthoSize;
	        },
	        set: function set(size) {
	            this._orthoSize = size;
	        }
	    }, {
	        key: "OrthographicMode",
	        set: function set(isOrtho) {
	            this._orthographic = isOrtho;
	            this._recalculateProjection();
	        },
	        get: function get() {
	            return this._orthographic;
	        }
	    }, {
	        key: "AutoAspect",
	        set: function set(autoMode) {
	            if (this._autoAspect !== autoMode) {
	                this._autoAspect = autoMode;
	                this._recalculateProjection();
	            }
	        },
	        get: function get() {
	            return this._autoAspect;
	        }
	        /**
	        * Find scene tag recursively.
	        * @param  {GomlNode}       node [the node to searching currently]
	        * @return {SceneComponent}      [the scene component found]
	        */

	    }], [{
	        key: "_findContainedScene",
	        value: function _findContainedScene(node) {
	            if (node.parent) {
	                var scene = node.parent.getComponent(_SceneComponent2.default);
	                if (scene) {
	                    return scene;
	                } else {
	                    return CameraComponent._findContainedScene(node.parent);
	                }
	            } else {
	                return null;
	            }
	        }
	    }]);

	    return CameraComponent;
	}(_Component3.default);

	exports.default = CameraComponent;

	CameraComponent._frontOrigin = new _Vector2.default(0, 0, -1, 0);
	CameraComponent._upOrigin = new _Vector2.default(0, 1, 0, 0);
	CameraComponent.attributes = {
	    fovy: {
	        default: "45d",
	        converter: "Angle2D"
	    },
	    near: {
	        default: 0.01,
	        converter: "Number"
	    },
	    far: {
	        default: 100,
	        converter: "Number"
	    },
	    aspect: {
	        default: 1.6,
	        converter: "Number"
	    },
	    autoAspect: {
	        default: true,
	        converter: "Boolean"
	    },
	    orthoSize: {
	        default: 100,
	        converter: "Number"
	    },
	    orthogonal: {
	        default: false,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.GLM;

/***/ },
/* 13 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector4;

/***/ },
/* 14 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector3;

/***/ },
/* 15 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Matrix;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RenderQueue = function () {
	    function RenderQueue() {
	        _classCallCheck(this, RenderQueue);

	        this._rendeables = [];
	    }

	    _createClass(RenderQueue, [{
	        key: "add",
	        value: function add(rendarable) {
	            this._rendeables.push({
	                rendarable: rendarable,
	                priortyCache: Number.MIN_VALUE
	            });
	        }
	    }, {
	        key: "remove",
	        value: function remove(rendarable) {
	            var index = 0;
	            for (; index < this._rendeables.length; index++) {
	                var r = this._rendeables[index];
	                if (r.rendarable.id === rendarable.id) {
	                    break;
	                }
	            }
	            if (this._rendeables.length !== index) {
	                this._rendeables.splice(index, 1);
	            }
	        }
	    }, {
	        key: "renderAll",
	        value: function renderAll(args, cameraMoved, frameNumber) {
	            for (var i = 0; i < this._rendeables.length; i++) {
	                this._rendeables[i].priortyCache = this._rendeables[i].rendarable.getRenderingPriorty(args.camera, cameraMoved, this._rendeables[i].priortyCache);
	            }
	            this._rendeables.sort(function (a, b) {
	                return a.priortyCache - b.priortyCache;
	            });
	            this._rendeables.forEach(function (r) {
	                r.rendarable.render(args);
	            });
	        }
	    }]);

	    return RenderQueue;
	}();

	exports.default = RenderQueue;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Matrix = __webpack_require__(15);

	var _Matrix2 = _interopRequireDefault(_Matrix);

	var _Vector = __webpack_require__(14);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Vector3 = __webpack_require__(13);

	var _Vector4 = _interopRequireDefault(_Vector3);

	var _Quaternion = __webpack_require__(18);

	var _Quaternion2 = _interopRequireDefault(_Quaternion);

	var _GLM = __webpack_require__(12);

	var _GLM2 = _interopRequireDefault(_GLM);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mat4 = _GLM2.default.mat4,
	    vec3 = _GLM2.default.vec3,
	    vec4 = _GLM2.default.vec4;
	/**
	 * Provides object transformation like translation,rotation,scaling.
	 */

	var TransformComponent = function (_Component) {
	    _inherits(TransformComponent, _Component);

	    function TransformComponent() {
	        _classCallCheck(this, TransformComponent);

	        /**
	         * Local transform matrix representing scaling,rotation and translation of attached object.
	         * @return {[type]} [description]
	         */
	        var _this = _possibleConstructorReturn(this, (TransformComponent.__proto__ || Object.getPrototypeOf(TransformComponent)).apply(this, arguments));

	        _this.localTransform = new _Matrix2.default();
	        /**
	         * Global transform that consider parent transform and local transform
	         * @return {[type]} [description]
	         */
	        _this.globalTransform = new _Matrix2.default();
	        /**
	         * The children transform should be notified when this transform was updated.
	         * @type {TransformComponent[]}
	         */
	        _this._children = [];
	        /**
	         * Calculation cache to
	         * @return {[type]} [description]
	         */
	        _this._cachePVM = new _Matrix2.default();
	        _this._cacheVM = new _Matrix2.default();
	        /**
	         * Cache of forward direction of this object
	         */
	        _this._forward = new _Vector2.default([0, 0, -1, 0]);
	        /**
	         * Cache of up direction of this object.
	         */
	        _this._up = new _Vector2.default([0, 1, 0, 0]);
	        /**
	         * Cache of right direction of this object.
	         */
	        _this._right = new _Vector2.default([1, 0, 0, 0]);
	        _this._globalPosition = new _Vector2.default([0, 0, 0]);
	        _this._globalScale = new _Vector2.default([1, 1, 1]);
	        _this._matrixTransformMode = false;
	        return _this;
	    }

	    _createClass(TransformComponent, [{
	        key: "calcPVM",
	        value: function calcPVM(camera) {
	            mat4.mul(this._cachePVM.rawElements, camera.ProjectionViewMatrix.rawElements, this.globalTransform.rawElements);
	            return this._cachePVM;
	        }
	    }, {
	        key: "calcVM",
	        value: function calcVM(camera) {
	            mat4.mul(this._cacheVM.rawElements, camera.ViewMatrix.rawElements, this.globalTransform.rawElements);
	            return this._cacheVM;
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;

	            // register observers
	            this.getAttributeRaw("position").watch(function (v) {
	                _this2._localPosition = v;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform(true);
	            });
	            this.getAttributeRaw("rotation").watch(function (v) {
	                _this2._localRotation = v;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform();
	            });
	            this.getAttributeRaw("scale").watch(function (v) {
	                _this2._localScale = v;
	                _this2._matrixTransformMode = false;
	                _this2.updateTransform(true);
	            });
	            this.getAttributeRaw("rawMatrix").watch(function (v) {
	                if (v !== null) {
	                    var mat = v;
	                    _this2._matrixTransformMode = true;
	                    // TODO should be addded?
	                    // mat4.getTranslation(this._localPosition.rawElements, mat.rawElements);
	                    // mat4.getScaling(this._localScale.rawElements, mat.rawElements);
	                    // mat4.getRotation(this._localRotation.rawElements, mat.rawElements);
	                    _this2.localTransform = mat;
	                    _this2.updateGlobalTransform();
	                }
	            });
	            // assign attribute values to field
	            this._localPosition = this.getAttribute("position");
	            this._localRotation = this.getAttribute("rotation");
	            this._localScale = this.getAttribute("scale");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._parentTransform = this.node.parent.getComponent(TransformComponent);
	            if (this._parentTransform) {
	                this._parentTransform._children.push(this);
	            }
	            this.updateTransform();
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            if (this._parentTransform) {
	                this._parentTransform._children.splice(this._parentTransform._children.indexOf(this), 1);
	                this._parentTransform = null;
	            }
	        }
	        /**
	         * update local transform and global transform.
	         * This need to be called if you manually edit raw elements of scale,position or rotation to recalculate transform matricies.
	         */

	    }, {
	        key: "updateTransform",
	        value: function updateTransform(noDirectionalUpdate) {
	            if (!this._matrixTransformMode) {
	                mat4.fromRotationTranslationScale(this.localTransform.rawElements, this._localRotation.rawElements, this._localPosition.rawElements, this._localScale.rawElements);
	            }
	            this.updateGlobalTransform(noDirectionalUpdate);
	        }
	        /**
	         * Update global transoform.
	         */

	    }, {
	        key: "updateGlobalTransform",
	        value: function updateGlobalTransform(noDirectionalUpdate) {
	            if (!this._parentTransform) {
	                mat4.copy(this.globalTransform.rawElements, this.localTransform.rawElements);
	            } else {
	                mat4.mul(this.globalTransform.rawElements, this._parentTransform.globalTransform.rawElements, this.localTransform.rawElements);
	            }
	            if (!noDirectionalUpdate) {
	                this._updateDirections();
	            }
	            this._updateGlobalProperty();
	            this.node.emit("transformUpdated", this);
	            this._children.forEach(function (v) {
	                return v.updateGlobalTransform(noDirectionalUpdate);
	            });
	        }
	    }, {
	        key: "_updateDirections",
	        value: function _updateDirections() {
	            vec4.transformMat4(this._forward.rawElements, TransformComponent._forwardBase.rawElements, this.globalTransform.rawElements);
	            vec4.transformMat4(this._up.rawElements, TransformComponent._upBase.rawElements, this.globalTransform.rawElements);
	            vec4.transformMat4(this._right.rawElements, TransformComponent._rightBase.rawElements, this.globalTransform.rawElements);
	        }
	    }, {
	        key: "_updateGlobalProperty",
	        value: function _updateGlobalProperty() {
	            if (!this._parentTransform) {
	                vec3.copy(this._globalPosition.rawElements, this._localPosition.rawElements);
	                vec3.copy(this._globalScale.rawElements, this._localScale.rawElements);
	            } else {
	                vec3.transformMat4(this._globalPosition.rawElements, this._localPosition.rawElements, this._parentTransform.globalTransform.rawElements);
	                vec3.transformMat4(this._globalScale.rawElements, this._localScale.rawElements, this._parentTransform.globalTransform.rawElements); // TODO buggy
	            }
	        }
	    }, {
	        key: "globalPosition",
	        get: function get() {
	            return this._globalPosition;
	        }
	    }, {
	        key: "localPosition",
	        get: function get() {
	            return this._localPosition;
	        },
	        set: function set(val) {
	            this._localPosition = val;
	            this.setAttribute("position", val);
	        }
	    }, {
	        key: "localRotation",
	        get: function get() {
	            return this._localRotation;
	        },
	        set: function set(val) {
	            this._localRotation = val;
	            this.setAttribute("rotation", val);
	        }
	    }, {
	        key: "globalScale",
	        get: function get() {
	            return this._globalScale;
	        }
	    }, {
	        key: "localScale",
	        get: function get() {
	            return this._localScale;
	        },
	        set: function set(val) {
	            this._localScale = val;
	            this.setAttribute("scale", val);
	        }
	    }, {
	        key: "forward",
	        get: function get() {
	            return this._forward;
	        }
	    }, {
	        key: "up",
	        get: function get() {
	            return this._up;
	        }
	    }, {
	        key: "right",
	        get: function get() {
	            return this._right;
	        }
	    }]);

	    return TransformComponent;
	}(_Component3.default);

	exports.default = TransformComponent;

	TransformComponent.attributes = {
	    "position": {
	        converter: "Vector3",
	        default: _Vector2.default.Zero
	    },
	    "rotation": {
	        converter: "Rotation3",
	        default: _Quaternion2.default.Identity
	    },
	    "scale": {
	        converter: "Vector3",
	        default: _Vector2.default.One
	    },
	    "rawMatrix": {
	        converter: "Object",
	        default: null
	    }
	};
	/**
	 * Source vector to be multiplied with global transform to calculate forward direction of attached object.
	 */
	TransformComponent._forwardBase = new _Vector4.default(0, 0, -1, 0);
	/**
	 * Source vector to be multiplied with global transform to calculate up direction of attached object.
	 */
	TransformComponent._upBase = new _Vector4.default(0, 1, 0, 0);
	/**
	 * Source vector to be multiplied with global transform to calculate right direction of attached object.
	 */
	TransformComponent._rightBase = new _Vector4.default(1, 0, 0, 0);

/***/ },
/* 18 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Quaternion;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RenderQueueRegistry = __webpack_require__(20);

	var _RenderQueueRegistry2 = _interopRequireDefault(_RenderQueueRegistry);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SceneComponent = function (_Component) {
	    _inherits(SceneComponent, _Component);

	    function SceneComponent() {
	        _classCallCheck(this, SceneComponent);

	        var _this = _possibleConstructorReturn(this, (SceneComponent.__proto__ || Object.getPrototypeOf(SceneComponent)).apply(this, arguments));

	        _this.queueRegistory = new _RenderQueueRegistry2.default();
	        return _this;
	    }

	    _createClass(SceneComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var _this2 = this;

	            this.sceneDescription = {};
	            SceneComponent._sceneDescriptionCreationHandlers.forEach(function (v) {
	                return v(_this2.sceneDescription, _this2);
	            });
	        }
	        /**
	         * Notify update scene only when send update message is needed.
	         * @param {number} loopIndex [description]
	         */

	    }, {
	        key: "updateScene",
	        value: function updateScene(loopIndex) {
	            if (this._lastUpdateIndex !== loopIndex) {
	                this.node.broadcastMessage("update", this.sceneDescription);
	                this._lastUpdateIndex = loopIndex;
	            }
	        }
	    }], [{
	        key: "onSceneDescriptionCreation",
	        value: function onSceneDescriptionCreation(handler) {
	            SceneComponent._sceneDescriptionCreationHandlers.push(handler);
	        }
	    }]);

	    return SceneComponent;
	}(_Component3.default);

	exports.default = SceneComponent;

	SceneComponent.attributes = {};
	SceneComponent._sceneDescriptionCreationHandlers = [];

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RenderQueueRegistry = function () {
	    function RenderQueueRegistry() {
	        _classCallCheck(this, RenderQueueRegistry);

	        this._queues = [];
	        this._renderables = [];
	    }

	    _createClass(RenderQueueRegistry, [{
	        key: "registerQueue",
	        value: function registerQueue(queue) {
	            this._queues.push(queue);
	            this._renderables.forEach(function (r) {
	                return queue.add(r);
	            });
	        }
	    }, {
	        key: "unregisterQueue",
	        value: function unregisterQueue(queue) {
	            var index = this._queues.indexOf(queue);
	            if (index > -1) {
	                this._queues.splice(index, 1);
	            }
	        }
	    }, {
	        key: "addRenderable",
	        value: function addRenderable(rendarable) {
	            this._renderables.push(rendarable);
	            this._queues.forEach(function (q) {
	                return q.add(rendarable);
	            });
	        }
	    }, {
	        key: "removeRenderable",
	        value: function removeRenderable(renderable) {
	            var index = this._renderables.indexOf(renderable);
	            if (index === -1) {
	                return; // Could not find specified renderable
	            }
	            this._renderables.splice(index, 1);
	            this._queues.forEach(function (q) {
	                return q.remove(renderable);
	            });
	        }
	    }]);

	    return RenderQueueRegistry;
	}();

	exports.default = RenderQueueRegistry;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GrimoireInterface = __webpack_require__(22);

	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);

	var _Texture2D = __webpack_require__(23);

	var _Texture2D2 = _interopRequireDefault(_Texture2D);

	var _GLExtRequestor = __webpack_require__(25);

	var _GLExtRequestor2 = _interopRequireDefault(_GLExtRequestor);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ns = _GrimoireInterface2.default.ns("HTTP://GRIMOIRE.GL/NS/DEFAULT");
	var ResizeMode;
	(function (ResizeMode) {
	    ResizeMode[ResizeMode["Aspect"] = 0] = "Aspect";
	    ResizeMode[ResizeMode["Fit"] = 1] = "Fit";
	    ResizeMode[ResizeMode["Manual"] = 2] = "Manual";
	})(ResizeMode || (ResizeMode = {}));

	var CanvasInitializerComponent = function (_Component) {
	    _inherits(CanvasInitializerComponent, _Component);

	    function CanvasInitializerComponent() {
	        _classCallCheck(this, CanvasInitializerComponent);

	        return _possibleConstructorReturn(this, (CanvasInitializerComponent.__proto__ || Object.getPrototypeOf(CanvasInitializerComponent)).apply(this, arguments));
	    }

	    _createClass(CanvasInitializerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;

	            this._scriptTag = this.companion.get("scriptElement");
	            if (this._isContainedInBody(this._scriptTag)) {
	                // canvas should be placed siblings of the script tag
	                this._generateCanvas(this._scriptTag);
	            } else {
	                throw new Error("goml script should have body as ancesotor to instanciate canvas element in the location");
	            }
	            // apply sizes on changed
	            this.getAttributeRaw("width").watch(function (v) {
	                _this2._resize();
	            });
	            this.getAttributeRaw("height").watch(function (v) {
	                _this2._resize();
	            });
	        }
	        /**
	         * Generate canvas element
	         * @param  {Element}           parent [description]
	         * @return {HTMLCanvasElement}        [description]
	         */

	    }, {
	        key: "_generateCanvas",
	        value: function _generateCanvas(scriptTag) {
	            var _this3 = this;

	            this._autoFixForBody(scriptTag);
	            this.canvas = document.createElement("canvas");
	            window.addEventListener("resize", function () {
	                return _this3._onWindowResize();
	            });
	            this._configureCanvas(this.canvas, scriptTag);
	            var gl = this._getContext(this.canvas);
	            this.companion.set(ns("gl"), gl);
	            this.companion.set(ns("canvasElement"), this.canvas);
	            this.companion.set(ns("GLExtRequestor"), new _GLExtRequestor2.default(gl));
	            _Texture2D2.default.generateDefaultTexture(gl);
	            return this.canvas;
	        }
	    }, {
	        key: "_resize",
	        value: function _resize(supressBroadcast) {
	            var canvas = this.companion.get("canvasElement");
	            var widthRaw = this.getAttribute("width");
	            var heightRaw = this.getAttribute("height");
	            this._widthMode = this._asResizeMode(widthRaw);
	            this._heightMode = this._asResizeMode(heightRaw);
	            if (this._widthMode === this._heightMode && this._widthMode === ResizeMode.Aspect) {
	                throw new Error("Width and height could not have aspect mode in same time!");
	            }
	            if (this._widthMode === ResizeMode.Aspect) {
	                this._ratio = widthRaw.aspect;
	            }
	            if (this._heightMode === ResizeMode.Aspect) {
	                this._ratio = heightRaw.aspect;
	            }
	            if (this._widthMode === ResizeMode.Manual) {
	                this._applyManualWidth(widthRaw.size, supressBroadcast);
	            }
	            if (this._heightMode === ResizeMode.Manual) {
	                this._applyManualHeight(heightRaw.size, supressBroadcast);
	            }
	            this._onWindowResize(supressBroadcast);
	        }
	    }, {
	        key: "_onWindowResize",
	        value: function _onWindowResize(supressBroadcast) {
	            var size = this._getParentSize();
	            if (this._widthMode === ResizeMode.Fit) {
	                this._applyManualWidth(size.width, supressBroadcast);
	            }
	            if (this._heightMode === ResizeMode.Fit) {
	                if (size.height === 0 && _GrimoireInterface2.default.debug) {
	                    console.warn("Canvas height parameter specified as fit and height of parent element is 0.\n This is possibly the reason you haven't set css to html or body element.");
	                }
	                this._applyManualHeight(size.height, supressBroadcast);
	            }
	        }
	    }, {
	        key: "_applyManualWidth",
	        value: function _applyManualWidth(width, supressBroadcast) {
	            if (width === this.canvas.width) {
	                return;
	            }
	            this.canvas.width = width;
	            this._canvasContainer.style.width = width + "px";
	            if (!supressBroadcast) {
	                this.node.broadcastMessage(1, "resizeCanvas");
	            }
	            if (this._heightMode === ResizeMode.Aspect) {
	                this._applyManualHeight(width / this._ratio, supressBroadcast);
	            }
	        }
	    }, {
	        key: "_applyManualHeight",
	        value: function _applyManualHeight(height, supressBroadcast) {
	            if (height === this.canvas.height) {
	                return;
	            }
	            this.canvas.height = height;
	            this._canvasContainer.style.height = height + "px";
	            if (!supressBroadcast) {
	                this.node.broadcastMessage(1, "resizeCanvas");
	            }
	            if (this._widthMode === ResizeMode.Aspect) {
	                this._applyManualWidth(height * this._ratio, supressBroadcast);
	            }
	        }
	    }, {
	        key: "_getParentSize",
	        value: function _getParentSize() {
	            var parent = this._canvasContainer.parentElement;
	            var boundingBox = parent.getBoundingClientRect();
	            return boundingBox;
	        }
	        /**
	         * Get resize mode from raw attribute of height or width
	         * @param  {string  | number}      mode [description]
	         * @return {ResizeMode}   [description]
	         */

	    }, {
	        key: "_asResizeMode",
	        value: function _asResizeMode(cso) {
	            if (cso.mode === "fit") {
	                return ResizeMode.Fit;
	            } else if (cso.mode === "aspect") {
	                return ResizeMode.Aspect;
	            } else {
	                return ResizeMode.Manual;
	            }
	        }
	    }, {
	        key: "_configureCanvas",
	        value: function _configureCanvas(canvas, scriptTag) {
	            canvas.style.position = "absolute";
	            canvas.style.top = "0px";
	            canvas.style.left = "0px";
	            this._canvasContainer = document.createElement("div");
	            this._canvasContainer.style.position = "relative";
	            this._canvasContainer.style.overflow = "hidden";
	            this._canvasContainer.appendChild(canvas);
	            if (this.getAttribute("containerId")) {
	                this._canvasContainer.id = this.getAttribute("containerId");
	            }
	            if (this.getAttribute("containerClass")) {
	                this._canvasContainer.className = this.getAttribute("containerClass");
	            }
	            this.companion.set(ns("canvasContainer"), this._canvasContainer);
	            scriptTag.parentElement.insertBefore(this._canvasContainer, scriptTag.nextSibling);
	            this._resize(true);
	        }
	    }, {
	        key: "_getContext",
	        value: function _getContext(canvas) {
	            var context = canvas.getContext("webgl", {preserveDrawingBuffer: true});
	            if (!context) {
	                context = canvas.getContext("webgl-experimental", {preserveDrawingBuffer: true});
	            }
	            return context;
	        }
	        /**
	         * Check the tag is included in the body
	         * @param  {Element} tag [description]
	         * @return {boolean}     [description]
	         */

	    }, {
	        key: "_isContainedInBody",
	        value: function _isContainedInBody(tag) {
	            if (!tag.parentElement) {
	                return false;
	            }
	            if (tag.parentNode.nodeName === "BODY") {
	                return true;
	            }
	            return this._isContainedInBody(tag.parentElement);
	        }
	    }, {
	        key: "_autoFixForBody",
	        value: function _autoFixForBody(scriptTag) {
	            if (scriptTag.parentElement.nodeName === "BODY") {
	                var boudningBox = document.body.getBoundingClientRect();
	                if (boudningBox.height === 0) {
	                    document.body.style.height = "100%";
	                    document.body.parentElement.style.height = "100%";
	                }
	            }
	        }
	    }]);

	    return CanvasInitializerComponent;
	}(_Component3.default);

	CanvasInitializerComponent.attributes = {
	    width: {
	        default: "fit",
	        converter: "CanvasSize"
	    },
	    height: {
	        default: "fit",
	        converter: "CanvasSize"
	    },
	    containerId: {
	        default: "",
	        converter: "String"
	    },
	    containerClass: {
	        default: "gr-container",
	        converter: "String"
	    }
	};
	exports.default = CanvasInitializerComponent;

/***/ },
/* 22 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.GrimoireInterface;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ResourceBase2 = __webpack_require__(24);

	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Texture2D = function (_ResourceBase) {
	    _inherits(Texture2D, _ResourceBase);

	    function Texture2D(gl) {
	        _classCallCheck(this, Texture2D);

	        var _this = _possibleConstructorReturn(this, (Texture2D.__proto__ || Object.getPrototypeOf(Texture2D)).call(this, gl));

	        _this._texParameterChanged = true;
	        _this._magFilter = WebGLRenderingContext.LINEAR;
	        _this._minFilter = WebGLRenderingContext.LINEAR;
	        _this._wrapS = WebGLRenderingContext.REPEAT;
	        _this._wrapT = WebGLRenderingContext.REPEAT;
	        if (!Texture2D._maxTextureSize) {
	            Texture2D._maxTextureSize = gl.getParameter(WebGLRenderingContext.MAX_TEXTURE_SIZE);
	        }
	        _this.texture = gl.createTexture();
	        return _this;
	    }

	    _createClass(Texture2D, [{
	        key: "update",
	        value: function update(levelOrImage, widthOrConfig, height, border, format, type, pixels, config) {
	            this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);
	            var uploadConfig = void 0;
	            var image = void 0;
	            var width = void 0;
	            var level = void 0;
	            if (height === void 0) {
	                uploadConfig = widthOrConfig || {
	                    flipY: false,
	                    premultipliedAlpha: false
	                };
	                image = levelOrImage;
	            } else {
	                level = levelOrImage;
	                width = widthOrConfig;
	                uploadConfig = config || {
	                    flipY: false,
	                    premultipliedAlpha: false
	                };
	            }
	            if (uploadConfig.flipY === void 0) {
	                uploadConfig.flipY = false;
	            }
	            if (uploadConfig.premultipliedAlpha === void 0) {
	                uploadConfig.premultipliedAlpha = false;
	            }
	            this.gl.pixelStorei(WebGLRenderingContext.UNPACK_FLIP_Y_WEBGL, uploadConfig.flipY ? 1 : 0);
	            this.gl.pixelStorei(WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, uploadConfig.premultipliedAlpha ? 1 : 0);
	            if (height === void 0) {
	                if (image instanceof HTMLImageElement) {
	                    this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._justifyImage(image));
	                } else if (image instanceof HTMLCanvasElement) {
	                    this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._justifyCanvas(image));
	                } else if (image instanceof HTMLVideoElement) {
	                    this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, this._justifyVideo(image));
	                }
	            } else {
	                if (pixels === void 0) {
	                    pixels = null;
	                }
	                this.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, level, format, width, height, border, format, type, pixels);
	            }
	            this._ensureMipmap();
	            this.valid = true;
	        }
	    }, {
	        key: "register",
	        value: function register(registerNumber) {
	            this.gl.activeTexture(WebGLRenderingContext.TEXTURE0 + registerNumber);
	            this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);
	            if (this._texParameterChanged) {
	                this._updateTexParameter();
	            }
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Texture2D.prototype.__proto__ || Object.getPrototypeOf(Texture2D.prototype), "destroy", this).call(this);
	            this.gl.deleteTexture(this.texture);
	        }
	        // There should be more effective way to resize texture

	    }, {
	        key: "_justifyImage",
	        value: function _justifyImage(img) {
	            var w = img.naturalWidth,
	                h = img.naturalHeight;
	            var size = Math.min(Math.pow(2, Math.log(Math.min(w, h)) / Math.LN2 | 0), Texture2D._maxTextureSize); // largest 2^n integer that does not exceed s
	            if (w !== h || w !== size) {
	                var canv = document.createElement("canvas");
	                canv.height = canv.width = size;
	                canv.getContext("2d").drawImage(img, 0, 0, w, h, 0, 0, size, size);
	                return canv;
	            }
	            return img;
	        }
	    }, {
	        key: "_justifyCanvas",
	        value: function _justifyCanvas(canvas) {
	            var w = canvas.width;
	            var h = canvas.height;
	            var size = Math.pow(2, Math.log(Math.min(w, h)) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            if (w !== h || w !== size) {
	                canvas.height = canvas.width = size * 2;
	            }
	            return canvas;
	        }
	    }, {
	        key: "_justifyVideo",
	        value: function _justifyVideo(video) {
	            var w = video.videoWidth,
	                h = video.videoHeight;
	            var size = Math.pow(2, Math.log(Math.min(w, h)) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            if (w !== h || w !== size) {
	                var canv = document.createElement("canvas");
	                canv.height = canv.width = size;
	                canv.getContext("2d").drawImage(video, 0, 0, w, h, 0, 0, size, size);
	                return canv;
	            }
	            return video;
	        }
	    }, {
	        key: "_updateTexParameter",
	        value: function _updateTexParameter() {
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, this._minFilter);
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, this._magFilter);
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, this._wrapS);
	            this.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, this._wrapT);
	            this._texParameterChanged = false;
	        }
	    }, {
	        key: "_ensureMipmap",
	        value: function _ensureMipmap() {
	            if (Texture2D._filtersNeedsMipmap.indexOf(this.magFilter) >= 0 || Texture2D._filtersNeedsMipmap.indexOf(this.minFilter) >= 0) {
	                this.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.texture);
	                this.gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
	            }
	        }
	    }, {
	        key: "magFilter",
	        get: function get() {
	            return this._magFilter;
	        },
	        set: function set(filter) {
	            if (this._magFilter !== filter) {
	                this._texParameterChanged = true;
	                this._magFilter = filter;
	                this._ensureMipmap();
	            }
	        }
	    }, {
	        key: "minFilter",
	        get: function get() {
	            return this._minFilter;
	        },
	        set: function set(filter) {
	            if (this._minFilter !== filter) {
	                this._texParameterChanged = true;
	                this._minFilter = filter;
	                this._ensureMipmap();
	            }
	        }
	    }, {
	        key: "wrapS",
	        get: function get() {
	            return this._wrapS;
	        },
	        set: function set(filter) {
	            if (this._wrapS !== filter) {
	                this._texParameterChanged = true;
	                this._wrapS = filter;
	            }
	        }
	    }, {
	        key: "wrapT",
	        get: function get() {
	            return this._wrapT;
	        },
	        set: function set(filter) {
	            if (this._wrapT !== filter) {
	                this._texParameterChanged = true;
	                this._wrapT = filter;
	            }
	        }
	    }], [{
	        key: "generateDefaultTexture",
	        value: function generateDefaultTexture(gl) {
	            Texture2D.defaultTextures.set(gl, null); // for preventing called this method recursively by instanciating default texture
	            var texture = new Texture2D(gl);
	            texture.update(0, 1, 1, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
	            Texture2D.defaultTextures.set(gl, texture);
	        }
	    }]);

	    return Texture2D;
	}(_ResourceBase3.default);

	exports.default = Texture2D;

	Texture2D.defaultTextures = new Map();
	/**
	 * ミップマップの更新が必要なフィルタ
	 * @type {number[]}
	 */
	Texture2D._filtersNeedsMipmap = [WebGLRenderingContext.LINEAR_MIPMAP_LINEAR, WebGLRenderingContext.LINEAR_MIPMAP_NEAREST, WebGLRenderingContext.NEAREST_MIPMAP_LINEAR, WebGLRenderingContext.NEAREST_MIPMAP_NEAREST];

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResourceBase = function () {
	    function ResourceBase(gl) {
	        _classCallCheck(this, ResourceBase);

	        this.gl = gl;
	        this.destroyed = false;
	        this.index = ResourceBase._maxIndex++;
	        this.valid = false;
	    }

	    _createClass(ResourceBase, [{
	        key: "destroy",
	        value: function destroy() {
	            this.destroyed = true;
	        }
	    }, {
	        key: "valid",
	        get: function get() {
	            return this._valid;
	        },
	        set: function set(val) {
	            var _this = this;

	            if (this._valid === val) {
	                return;
	            }
	            this._valid = val;
	            if (this._valid) {
	                this._validResolve(this);
	            } else {
	                this.validPromise = new Promise(function (resolve) {
	                    _this._validResolve = resolve;
	                });
	            }
	        }
	    }]);

	    return ResourceBase;
	}();

	ResourceBase._maxIndex = 0;
	exports.default = ResourceBase;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GLExtRequestor = function () {
	    function GLExtRequestor(gl) {
	        _classCallCheck(this, GLExtRequestor);

	        this.gl = gl;
	        this.extensions = {};
	        this._readyExtensions = {};
	        this._resolveRequested();
	        GLExtRequestor._requestObserver.push(this._resolveExtensionSafely);
	    }
	    /**
	     * Request extension to use.
	     * @param {string} str [description]
	     */


	    _createClass(GLExtRequestor, [{
	        key: "_resolveRequested",

	        /**
	         * Resolve all extension requested already.
	         */
	        value: function _resolveRequested() {
	            var _this = this;

	            GLExtRequestor._requestedExtensions.forEach(function (e) {
	                _this._resolveExtensionSafely(e.extensionName);
	            });
	        }
	    }, {
	        key: "_resolveExtensionSafely",
	        value: function _resolveExtensionSafely(extName) {
	            var e = GLExtRequestor._requestedExtensions[GLExtRequestor._requestIndexOf(extName)];
	            if (!this._resolveExtension(e.extensionName) && e.isNecessary) {
	                throw new Error("A WebGL extension '" + e.extensionName + "' was requested. But that is not supported on this device.");
	            }
	        }
	    }, {
	        key: "_resolveExtension",
	        value: function _resolveExtension(name) {
	            if (this._readyExtensions[name]) {
	                return true;
	            }
	            var ext = void 0;
	            if (typeof GLExtRequestor._customExtensionResolvers[name] === "undefined") {
	                ext = this.extensions[name] = this.gl.getExtension(name);
	            } else {
	                ext = this.extensions[name] = GLExtRequestor._customExtensionResolvers[name](this.gl);
	            }
	            this._readyExtensions[name] = this.extensions[name] !== void 0;
	            return !!this._readyExtensions[name];
	        }
	    }], [{
	        key: "request",
	        value: function request(extName) {
	            var isNecessary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	            var index = GLExtRequestor._requestIndexOf(extName);
	            if (index > -1 && isNecessary) {
	                GLExtRequestor._requestedExtensions[index] = { extensionName: extName, isNecessary: isNecessary };
	            } else if (index === -1) {
	                GLExtRequestor._requestedExtensions.push({ extensionName: extName, isNecessary: isNecessary });
	            }
	            GLExtRequestor._requestObserver.forEach(function (o) {
	                return o(extName);
	            });
	        }
	    }, {
	        key: "_requestIndexOf",
	        value: function _requestIndexOf(extName) {
	            for (var i = 0; i < GLExtRequestor._requestedExtensions.length; i++) {
	                if (GLExtRequestor._requestedExtensions[i].extensionName === extName) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }]);

	    return GLExtRequestor;
	}();
	/**
	 * Extension list requested to use.
	 * @type {string[]}
	 */


	exports.default = GLExtRequestor;
	GLExtRequestor._requestedExtensions = [];
	/**
	 * Some of extensions needed to override resolving extensions by this.
	 */
	GLExtRequestor._customExtensionResolvers = {};
	GLExtRequestor._requestObserver = [];
	GLExtRequestor._customExtensionResolvers["WEBGL_color_buffer_float"] = function (gl) {
	    var isSupported = void 0;
	    if (gl.getExtension("WEBGL_color_buffer_float") === null) {
	        var fbo = gl.createFramebuffer();
	        var tex = gl.createTexture();
	        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	        gl.bindTexture(gl.TEXTURE_2D, tex);
	        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.FLOAT, null);
	        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
	        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
	            isSupported = false;
	        } else {
	            isSupported = true;
	        }
	        gl.deleteTexture(tex);
	        gl.deleteFramebuffer(fbo);
	    } else {
	        isSupported = true;
	    }
	    return isSupported;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FullscreenComponent = function (_Component) {
	    _inherits(FullscreenComponent, _Component);

	    function FullscreenComponent() {
	        _classCallCheck(this, FullscreenComponent);

	        var _this = _possibleConstructorReturn(this, (FullscreenComponent.__proto__ || Object.getPrototypeOf(FullscreenComponent)).apply(this, arguments));

	        _this._fullscreen = false;
	        return _this;
	    }

	    _createClass(FullscreenComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;

	            this.getAttributeRaw("fullscreen").watch(function (attr) {
	                if (_this2._fullscreen === attr) {
	                    return;
	                }
	                _this2._fullscreen = attr;
	                _this2._switchFullscreen();
	            });
	        }
	    }, {
	        key: "_switchFullscreen",
	        value: function _switchFullscreen() {
	            if (this._fullscreen) {
	                this.requestFullscreen(this.getAttribute("fullscreenTarget") || this.companion.get("canvasContainer"));
	            } else {
	                this.exitFullscreen();
	            }
	        }
	    }, {
	        key: "requestFullscreen",
	        value: function requestFullscreen(target) {
	            if (target.webkitRequestFullscreen) {
	                target.webkitRequestFullscreen(); //Chrome15+, Safari5.1+, Opera15+
	            } else if (target["mozRequestFullScreen"]) {
	                target["mozRequestFullScreen"](); //FF10+
	            } else if (target["msRequestFullscreen"]) {
	                target["msRequestFullscreen"](); //IE11+
	            } else if (target.requestFullscreen) {
	                target.requestFullscreen(); // HTML5 Fullscreen API仕様
	            } else {
	                console.error('ご利用のブラウザはフルスクリーン操作に対応していません');
	                return;
	            }
	        }
	        /*フルスクリーン終了用ファンクション*/

	    }, {
	        key: "exitFullscreen",
	        value: function exitFullscreen() {
	            if (document.webkitCancelFullScreen) {
	                document.webkitCancelFullScreen(); //Chrome15+, Safari5.1+, Opera15+
	            } else if (document["mozCancelFullScreen"]) {
	                document["mozCancelFullScreen"](); //FF10+
	            } else if (document["msExitFullscreen"]) {
	                document["msExitFullscreen"](); //IE11+
	            } else if (document["cancelFullScreen"]) {
	                document["cancelFullScreen"](); //Gecko:FullScreenAPI仕様
	            } else if (document.exitFullscreen) {
	                document.exitFullscreen(); // HTML5 Fullscreen API仕様
	            }
	        }
	    }]);

	    return FullscreenComponent;
	}(_Component3.default);

	exports.default = FullscreenComponent;

	FullscreenComponent.attributes = {
	    fullscreen: {
	        converter: "Boolean",
	        default: false
	    },
	    fullscreenTarget: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GeometryFactory = __webpack_require__(28);

	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GeometryComponent = function (_Component) {
	    _inherits(GeometryComponent, _Component);

	    function GeometryComponent() {
	        _classCallCheck(this, GeometryComponent);

	        return _possibleConstructorReturn(this, (GeometryComponent.__proto__ || Object.getPrototypeOf(GeometryComponent)).apply(this, arguments));
	    }

	    _createClass(GeometryComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var type = this.getAttribute("type");
	            if (type) {
	                var gf = this.companion.get("GeometryFactory");
	                var attrs = _GeometryFactory2.default.factoryArgumentDeclarations[type];
	                var geometryArgument = {};
	                for (var key in attrs) {
	                    this.__addAtribute(key, attrs[key]);
	                    geometryArgument[key] = this.getAttribute(key);
	                }
	                this.geometry = gf.instanciate(type, geometryArgument);
	                var gr = this.companion.get("GeometryRegistory");
	                var name = this.getAttribute("name");
	                if (!name) {
	                    throw new Error("Name was not specified");
	                }
	                gr.addGeometry(name, this.geometry);
	            }
	        }
	    }]);

	    return GeometryComponent;
	}(_Component3.default);

	exports.default = GeometryComponent;

	GeometryComponent.attributes = {
	    type: {
	        converter: "String",
	        default: null
	    },
	    name: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Provides the feature to instanciate primitive geometry.
	 */
	var GeometryFactory = function () {
	    function GeometryFactory(gl) {
	        _classCallCheck(this, GeometryFactory);

	        this.gl = gl;
	    }
	    /**
	     * Add new type geometry
	     * @param {string}                   typeName        [description]
	     * @param {IAttributeDeclaration }}             argumentDeclarations [description]
	     * @param {IGeometryFactoryDelegate} factoryDelegate [description]
	     */


	    _createClass(GeometryFactory, [{
	        key: "instanciate",
	        value: function instanciate(type, args) {
	            var factoryDelegate = GeometryFactory.factoryDelegates[type];
	            if (!factoryDelegate) {
	                throw new Error("Can not instanciate unknown geometry type " + type);
	            }
	            var geometry = factoryDelegate(this.gl, args);
	            if (GeometryFactory.factoryExtentions[type] !== void 0) {
	                GeometryFactory.factoryExtentions[type].forEach(function (v) {
	                    return v(geometry, args);
	                });
	            }
	            return geometry;
	        }
	    }, {
	        key: "instanciateAsDefault",
	        value: function instanciateAsDefault(type) {
	            var decl = GeometryFactory.factoryArgumentDeclarations[type];
	            var args = {};
	            for (var attr in decl) {
	                var attrDecl = decl[attr];
	                args[attr] = attrDecl.default;
	            }
	            return this.instanciate(type, args);
	        }
	    }], [{
	        key: "addType",
	        value: function addType(typeName, argumentDeclarations, factoryDelegate) {
	            GeometryFactory.factoryDelegates[typeName] = factoryDelegate;
	            GeometryFactory.factoryArgumentDeclarations[typeName] = argumentDeclarations;
	        }
	    }, {
	        key: "extend",
	        value: function extend(typeName, extender) {
	            if (GeometryFactory.factoryExtentions[typeName] === void 0) {
	                GeometryFactory.factoryExtentions[typeName] = [];
	            }
	            GeometryFactory.factoryExtentions[typeName].push(extender);
	        }
	    }]);

	    return GeometryFactory;
	}();
	/**
	 * Delegates to be used as factory
	 */


	exports.default = GeometryFactory;
	GeometryFactory.factoryDelegates = {};
	/**
	 * Argument inputs to be used for construction of geometry.
	 */
	GeometryFactory.factoryArgumentDeclarations = {};
	GeometryFactory.factoryExtentions = {};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GeometryFactory = __webpack_require__(28);

	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _grimoirejs = __webpack_require__(8);

	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GeometryRegistoryComponent = function (_Component) {
	    _inherits(GeometryRegistoryComponent, _Component);

	    function GeometryRegistoryComponent() {
	        _classCallCheck(this, GeometryRegistoryComponent);

	        var _this = _possibleConstructorReturn(this, (GeometryRegistoryComponent.__proto__ || Object.getPrototypeOf(GeometryRegistoryComponent)).apply(this, arguments));

	        _this._geometries = {};
	        return _this;
	    }

	    _createClass(GeometryRegistoryComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this._factory = new _GeometryFactory2.default(this.companion.get("gl"));
	            this.companion.set(this.name, this);
	            this.companion.set(_grimoirejs2.default.ns(this.name.ns)("GeometryFactory"), this._factory);
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = this.getAttribute("defaultGeometry")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var geometry = _step.value;

	                    this.addGeometry(geometry, this._factory.instanciateAsDefault(geometry));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "addGeometry",
	        value: function addGeometry(name, geometry) {
	            this._geometries[name] = geometry;
	        }
	    }, {
	        key: "removeGeometry",
	        value: function removeGeometry(name) {
	            if (this._geometries[name]) {
	                delete this._geometries[name];
	            }
	        }
	    }, {
	        key: "getGeometry",
	        value: function getGeometry(name) {
	            return this._geometries[name];
	        }
	    }]);

	    return GeometryRegistoryComponent;
	}(_Component3.default);

	exports.default = GeometryRegistoryComponent;

	GeometryRegistoryComponent.attributes = {
	    defaultGeometry: {
	        converter: "StringArray",
	        default: ["quad", "cube", "sphere"]
	    }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TransformComponent = __webpack_require__(17);

	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _Vector = __webpack_require__(13);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Matrix = __webpack_require__(15);

	var _Matrix2 = _interopRequireDefault(_Matrix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLBinderComponent = function (_Component) {
	    _inherits(HTMLBinderComponent, _Component);

	    function HTMLBinderComponent() {
	        _classCallCheck(this, HTMLBinderComponent);

	        var _this = _possibleConstructorReturn(this, (HTMLBinderComponent.__proto__ || Object.getPrototypeOf(HTMLBinderComponent)).apply(this, arguments));

	        _this._isFirstCall = true;
	        return _this;
	    }

	    _createClass(HTMLBinderComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this._canvasContainer = this.companion.get("canvasContainer");
	            this._currentTransform = this.node.getComponent(_TransformComponent2.default);
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._canvasContainer = this.companion.get("canvasContainer");
	            this._currentTransform = this.node.getComponent(_TransformComponent2.default);
	            this.node.on("render", this._onRender.bind(this));
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            var _this2 = this;

	            this.getAttributeRaw("targetRenderer").watch(function (v) {
	                if (_this2._rendererQuery !== v) {
	                    _this2._onRendererChanged();
	                }
	            }, true);
	            this.getAttributeRaw("htmlQuery").watch(function (v) {
	                _this2._onQueryChanged(v);
	            }, true);
	        }
	    }, {
	        key: "_onRender",
	        value: function _onRender(args) {
	            if (this._isFirstCall) {
	                this._onRendererChanged();
	                this._isFirstCall = false;
	            }
	            if (this._queriedElement && args.caller.node === this._targetNode) {
	                var vp = args.viewport;
	                var rawPos = _Matrix2.default.transform(this._currentTransform.calcPVM(args.camera), new _Vector2.default(0, 0, 0, 1));
	                var rawScPos = {
	                    x: rawPos.X / rawPos.W,
	                    y: rawPos.Y / rawPos.W,
	                    z: rawPos.Z / rawPos.W
	                };
	                if (rawScPos.z >= -1 && rawScPos.z <= 1) {
	                    var scPos = {
	                        x: vp.Left + (rawScPos.x + 1) / 2 * vp.Width,
	                        y: vp.Top + (rawScPos.y + 1) / 2 * vp.Height
	                    };
	                    this._queriedElement.style.visibility = "visible";
	                    this._queriedElement.style.left = scPos.x + "px";
	                    this._queriedElement.style.bottom = scPos.y + "px";
	                } else {
	                    this._queriedElement.style.visibility = "hidden";
	                }
	            }
	        }
	        /**
	         * Restore default position of queried html
	         */

	    }, {
	        key: "_restoreDefault",
	        value: function _restoreDefault() {
	            this._canvasContainer.removeChild(this._queriedElement);
	            this._parentCache.appendChild(this._queriedElement);
	            var s = this._queriedElement.style;
	            var c = this._styleCache;
	            s.position = c["position"];
	            s.left = c["left"];
	            s.bottom = c["bottom"];
	            s.visibility = c["visibility"];
	        }
	    }, {
	        key: "_beginTrack",
	        value: function _beginTrack() {
	            this._parentCache.removeChild(this._queriedElement);
	            this._canvasContainer.appendChild(this._queriedElement);
	            this._queriedElement.style.position = "absolute";
	        }
	    }, {
	        key: "_onRendererChanged",
	        value: function _onRendererChanged() {
	            var _this3 = this;

	            var returned = false;
	            this.tree(this.getAttribute("targetRenderer")).forEach(function (n) {
	                if (returned) {
	                    return true;
	                } else {
	                    _this3._targetNode = n;
	                    returned = true;
	                }
	            });
	        }
	    }, {
	        key: "_onQueryChanged",
	        value: function _onQueryChanged(query) {
	            var queried = void 0;
	            if (query && query !== "") {
	                queried = document.querySelectorAll(query);
	            }
	            if (this._queriedElement) {
	                this._restoreDefault();
	            }
	            if (!queried || queried.length === 0) {
	                this._queriedElement = undefined;
	                this._parentCache = undefined;
	            } else {
	                this._queriedElement = queried.item(0);
	                var s = this._queriedElement.style;
	                this._styleCache = {
	                    position: s.position,
	                    visibility: s.visibility,
	                    left: s.left,
	                    bottom: s.bottom
	                };
	                this._parentCache = this._queriedElement.parentElement;
	                this._beginTrack();
	            }
	        }
	    }]);

	    return HTMLBinderComponent;
	}(_Component3.default);

	exports.default = HTMLBinderComponent;

	HTMLBinderComponent.attributes = {
	    htmlQuery: {
	        default: null,
	        converter: "String"
	    },
	    targetRenderer: {
	        default: "render-scene",
	        converter: "String"
	    }
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoopManagerComponent = function (_Component) {
	    _inherits(LoopManagerComponent, _Component);

	    function LoopManagerComponent() {
	        _classCallCheck(this, LoopManagerComponent);

	        var _this = _possibleConstructorReturn(this, (LoopManagerComponent.__proto__ || Object.getPrototypeOf(LoopManagerComponent)).apply(this, arguments));

	        _this._loopActions = [];
	        _this._loopIndex = 0;
	        return _this;
	    }

	    _createClass(LoopManagerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;

	            this.getAttributeRaw("loopEnabled").watch(function (attr) {
	                if (attr) {
	                    _this2._begin();
	                }
	            });
	            this._registerNextLoop = window.requestAnimationFrame // if window.requestAnimationFrame is defined or undefined
	            ? function () {
	                window.requestAnimationFrame(_this2._loop.bind(_this2));
	            } : function () {
	                window.setTimeout(_this2._loop.bind(_this2), 1000 / 60);
	            };
	        }
	    }, {
	        key: "register",
	        value: function register(action, priorty) {
	            this._loopActions.push({
	                action: action,
	                priorty: priorty
	            });
	            this._loopActions.sort(function (a, b) {
	                return a.priorty - b.priorty;
	            });
	        }
	    }, {
	        key: "_begin",
	        value: function _begin() {
	            this._registerNextLoop();
	        }
	    }, {
	        key: "_loop",
	        value: function _loop() {
	            var _this3 = this;

	            this.node.emit("loop", {
	                loopIndex: this._loopIndex
	            });
	            this._loopActions.forEach(function (a) {
	                return a.action(_this3._loopIndex);
	            });
	            this._loopIndex++;
	            this._registerNextLoop();
	        }
	    }]);

	    return LoopManagerComponent;
	}(_Component3.default);

	LoopManagerComponent.attributes = {
	    loopEnabled: {
	        default: false,
	        converter: "Boolean"
	    }
	};
	exports.default = LoopManagerComponent;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	var MaterialComponent = function (_Component) {
	    _inherits(MaterialComponent, _Component);

	    function MaterialComponent() {
	        _classCallCheck(this, MaterialComponent);

	        var _this = _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).apply(this, arguments));

	        _this.materialArgs = {};
	        return _this;
	    }

	    _createClass(MaterialComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var typeName = this.getAttribute("type");
	            if (typeName) {
	                this.materialPromise = this.companion.get("MaterialFactory").instanciate(typeName);
	                this._registerAttributes();
	            }
	        }
	    }, {
	        key: "_registerAttributes",
	        value: function _registerAttributes() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var _this2 = this;

	                var key, _loop, _key;

	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return this.materialPromise;

	                            case 2:
	                                this.material = _context.sent;

	                                for (key in this.material.argumentDeclarations) {
	                                    this.__addAtribute(key, this.material.argumentDeclarations[key]);
	                                    this.getAttributeRaw(key).boundTo(key, this.material.arguments);
	                                }

	                                _loop = function _loop(_key) {
	                                    _this2.__addAtribute(_key, _this2.material.macroDeclarations[_key]);
	                                    _this2.getAttributeRaw(_key).watch(function (v) {
	                                        _this2.material.setMacroValue(_key, v);
	                                    }, true);
	                                };

	                                for (_key in this.material.macroDeclarations) {
	                                    _loop(_key);
	                                }
	                                this.ready = true;

	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);

	    return MaterialComponent;
	}(_Component3.default);

	exports.default = MaterialComponent;

	MaterialComponent.attributes = {
	    type: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DrawPriorty = __webpack_require__(34);

	var _DrawPriorty2 = _interopRequireDefault(_DrawPriorty);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _grimoirejs = __webpack_require__(8);

	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	var MaterialContainerComponent = function (_Component) {
	    _inherits(MaterialContainerComponent, _Component);

	    function MaterialContainerComponent() {
	        _classCallCheck(this, MaterialContainerComponent);

	        var _this = _possibleConstructorReturn(this, (MaterialContainerComponent.__proto__ || Object.getPrototypeOf(MaterialContainerComponent)).apply(this, arguments));

	        _this.materialArgs = {};
	        _this.materialReady = false;
	        _this.useMaterial = false;
	        return _this;
	    }

	    _createClass(MaterialContainerComponent, [{
	        key: "getDrawPriorty",
	        value: function getDrawPriorty(depth) {
	            if (!this.materialReady) {
	                return Number.MAX_VALUE;
	            }
	            var orderCriteria = _DrawPriorty2.default[this._drawOrder ? this._drawOrder : this.material.techniques["default"].drawOrder];
	            if (orderCriteria === void 0) {
	                throw new Error("Specified drawing order \"" + this.material.techniques["default"].drawOrder + "\" is not defined");
	            }
	            if (orderCriteria.descending) {
	                return (1.0 - depth / 10000) * orderCriteria.priorty;
	            } else {
	                return depth / 10000 * orderCriteria.priorty;
	            }
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.getAttributeRaw("material").watch(this._onMaterialChanged.bind(this));
	            this.companion.get("loader").register(this._onMaterialChanged());
	            this.getAttributeRaw("drawOrder").boundTo("_drawOrder");
	        }
	        /**
	         * When the material attribute is changed.
	         */

	    }, {
	        key: "_onMaterialChanged",
	        value: function _onMaterialChanged() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var materialPromise;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                materialPromise = this.getAttribute("material");

	                                if (!(materialPromise === void 0)) {
	                                    _context.next = 4;
	                                    break;
	                                }

	                                this.useMaterial = false;
	                                return _context.abrupt("return");

	                            case 4:
	                                this.useMaterial = true;
	                                if (this._registeredAttributes) {
	                                    this.__removeAttributes();
	                                }
	                                if (!this._materialComponent) {
	                                    this._prepareInternalMaterial(materialPromise);
	                                } else {
	                                    this._prepareExternalMaterial(materialPromise);
	                                }

	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	        /**
	         * Resolve materials only when the material required from external material component.
	         * @return {Promise<void>} [description]
	         */

	    }, {
	        key: "_prepareExternalMaterial",
	        value: function _prepareExternalMaterial(materialPromise) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                var loader, material;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                loader = this.companion.get("loader");

	                                loader.register(materialPromise);
	                                _context2.next = 4;
	                                return materialPromise;

	                            case 4:
	                                material = _context2.sent;
	                                // waiting for material load completion
	                                this.material = material;
	                                this.materialArgs = this._materialComponent.materialArgs;
	                                this.materialReady = true;

	                            case 8:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	    }, {
	        key: "_prepareInternalMaterial",
	        value: function _prepareInternalMaterial(materialPromise) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
	                var _this2 = this;

	                var loader, material, key, _loop, _key;

	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                // obtain promise of instanciating material
	                                loader = this.companion.get("loader");

	                                loader.register(materialPromise);

	                                if (materialPromise) {
	                                    _context3.next = 4;
	                                    break;
	                                }

	                                return _context3.abrupt("return");

	                            case 4:
	                                _context3.next = 6;
	                                return materialPromise;

	                            case 6:
	                                material = _context3.sent;
	                                // waiting for material load completion
	                                this.material = material;
	                                for (key in this.material.argumentDeclarations) {
	                                    this.__addAtribute(key, this.material.argumentDeclarations[key]);
	                                    this.getAttributeRaw(key).boundTo(key, this.material.arguments);
	                                }

	                                _loop = function _loop(_key) {
	                                    _this2.__addAtribute(_key, _this2.material.macroDeclarations[_key]);
	                                    _this2.getAttributeRaw(_key).watch(function (v) {
	                                        _this2.material.setMacroValue(_key, v);
	                                    }, true);
	                                };

	                                for (_key in this.material.macroDeclarations) {
	                                    _loop(_key);
	                                }
	                                this._registeredAttributes = true;
	                                this.materialReady = true;

	                            case 13:
	                            case "end":
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	    }], [{
	        key: "rewriteDefaultMaterial",
	        value: function rewriteDefaultMaterial(materialName) {
	            if (materialName !== MaterialContainerComponent._defaultMaterial) {
	                MaterialContainerComponent._defaultMaterial = materialName;
	                _grimoirejs2.default.componentDeclarations.get("MaterialContainer").attributes["material"].default = "new(" + materialName + ")";
	            }
	        }
	    }, {
	        key: "defaultMaterial",
	        get: function get() {
	            return this._defaultMaterial;
	        }
	    }]);

	    return MaterialContainerComponent;
	}(_Component3.default);

	exports.default = MaterialContainerComponent;

	MaterialContainerComponent.attributes = {
	    material: {
	        converter: "Material",
	        default: "new(unlit)",
	        componentBoundTo: "_materialComponent" // When the material was specified with the other material tag, this field would be assigned.
	    },
	    drawOrder: {
	        converter: "String",
	        default: null
	    }
	};
	MaterialContainerComponent._defaultMaterial = "unlit";

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    Background: { priorty: 1000 },
	    NoAlpha: { priorty: 2000 },
	    UseAlpha: { priorty: 3000, descending: true },
	    NoDepth: { priorty: 4000, descending: true },
	    Overlay: { priorty: 5000, descending: true }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MaterialFactory = __webpack_require__(36);

	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MaterialImporterComponent = function (_Component) {
	    _inherits(MaterialImporterComponent, _Component);

	    function MaterialImporterComponent() {
	        _classCallCheck(this, MaterialImporterComponent);

	        return _possibleConstructorReturn(this, (MaterialImporterComponent.__proto__ || Object.getPrototypeOf(MaterialImporterComponent)).apply(this, arguments));
	    }

	    _createClass(MaterialImporterComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("typeName").watch(function (v) {
	                console.warn("Changeing 'typeName' on MaterialImporter makes no sense. This change won't affect anything.");
	            });
	            this.getAttributeRaw("src").watch(function (v) {
	                console.warn("Changeing 'src' on MaterialImporter makes no sense. This change won't affect anything.");
	            });
	            if (!this.getAttribute("typeName") || !this.getAttribute("src")) {
	                throw new Error("type or src cannot be null in material importer");
	            } else {
	                var typeName = this.getAttribute("typeName");
	                if (_MaterialFactory2.default.factories[typeName] !== void 0) {
	                    throw new Error("A material type '" + typeName + "' is already loaded.");
	                }
	                _MaterialFactory2.default.addSORTMaterialFromURL(this.getAttribute("typeName"), this.getAttribute("src"));
	            }
	        }
	    }]);

	    return MaterialImporterComponent;
	}(_Component3.default);

	exports.default = MaterialImporterComponent;

	MaterialImporterComponent.attributes = {
	    typeName: {
	        default: null,
	        converter: "String"
	    },
	    src: {
	        default: null,
	        converter: "String"
	    }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Parser = __webpack_require__(37);

	var _Parser2 = _interopRequireDefault(_Parser);

	var _MacroRegistory = __webpack_require__(44);

	var _MacroRegistory2 = _interopRequireDefault(_MacroRegistory);

	var _TextFileResolver = __webpack_require__(6);

	var _TextFileResolver2 = _interopRequireDefault(_TextFileResolver);

	var _Material = __webpack_require__(46);

	var _Material2 = _interopRequireDefault(_Material);

	var _header = __webpack_require__(59);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	/**
	 * Manage generators for materials.
	 * Materials can be instanciated with this instance.
	 * Every gl reference can contain 1 of MaterialFactory at most.
	 */
	var MaterialFactory = function () {
	    function MaterialFactory(gl) {
	        _classCallCheck(this, MaterialFactory);

	        this.gl = gl;
	        this.shaderHeader = MaterialFactory.defaultShaderHeader;
	        this.macro = new _MacroRegistory2.default();
	        if (MaterialFactory.factories.has(gl)) {
	            throw new Error("MaterialFactory can not be instanciated dupelicately for a WebGLRenderingContext.");
	        }
	        MaterialFactory.factories.set(gl, this);
	    }
	    /**
	     * Obtain an instance of MaterialFactory from WebGLRenderingContext
	     * @param  {WebGLRenderingContext} gl [description]
	     * @return {MaterialFactory}          [description]
	     */


	    _createClass(MaterialFactory, [{
	        key: "instanciate",
	        value: function instanciate(typeName) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!MaterialFactory.generators[typeName]) {
	                                    _context.next = 4;
	                                    break;
	                                }

	                                return _context.abrupt("return", MaterialFactory.generators[typeName](this));

	                            case 4:
	                                _context.next = 6;
	                                return this._waitForRegistered(typeName);

	                            case 6:
	                                return _context.abrupt("return", _context.sent);

	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_waitForRegistered",
	        value: function _waitForRegistered(typeName) {
	            var _this = this;

	            return new Promise(function (resolve) {
	                MaterialFactory._onRegister(typeName, function () {
	                    resolve(MaterialFactory.generators[typeName](_this));
	                });
	            });
	        }
	    }], [{
	        key: "get",
	        value: function get(gl) {
	            var factory = this.factories.get(gl);
	            if (!factory) {
	                throw new Error("There was no associated MaterialFactory with specified WebGLRenderingContext");
	            }
	            return factory;
	        }
	    }, {
	        key: "addMaterialType",
	        value: function addMaterialType(typeName, factory) {
	            MaterialFactory.generators[typeName] = factory;
	            if (MaterialFactory.registerdHandlers[typeName]) {
	                MaterialFactory.registerdHandlers[typeName].forEach(function (t) {
	                    return t();
	                });
	            }
	        }
	        /**
	         * Add source of .sort material as specified typename.
	         * @param  {string}        typeName [description]
	         * @param  {string}        source   [description]
	         * @return {Promise<void>}          [description]
	         */

	    }, {
	        key: "addSORTMaterial",
	        value: function addSORTMaterial(typeName, source) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                var techniques;
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                _context2.next = 2;
	                                return _Parser2.default.parse(source);

	                            case 2:
	                                techniques = _context2.sent;

	                                MaterialFactory.addMaterialType(typeName, function (factory) {
	                                    return new _Material2.default(factory.gl, techniques);
	                                });

	                            case 4:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	        /**
	         * Add source of .sort material from external url as specified typeName.
	         * @param  {string}        typeName [description]
	         * @param  {string}        url      [description]
	         * @return {Promise<void>}          [description]
	         */

	    }, {
	        key: "addSORTMaterialFromURL",
	        value: function addSORTMaterialFromURL(typeName, url) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
	                var source;
	                return regeneratorRuntime.wrap(function _callee3$(_context3) {
	                    while (1) {
	                        switch (_context3.prev = _context3.next) {
	                            case 0:
	                                _context3.next = 2;
	                                return _TextFileResolver2.default.resolve(url);

	                            case 2:
	                                source = _context3.sent;
	                                _context3.next = 5;
	                                return MaterialFactory.addSORTMaterial(typeName, source);

	                            case 5:
	                            case "end":
	                                return _context3.stop();
	                        }
	                    }
	                }, _callee3, this);
	            }));
	        }
	    }, {
	        key: "_onRegister",
	        value: function _onRegister(factoryName, handler) {
	            if (MaterialFactory.registerdHandlers[factoryName]) {
	                MaterialFactory.registerdHandlers[factoryName].push(handler);
	            } else {
	                MaterialFactory.registerdHandlers[factoryName] = [handler];
	            }
	        }
	    }]);

	    return MaterialFactory;
	}();
	/**
	 * Map for gl reference and MaterialFactory.
	 * @type {Map<WebGLRenderingContext,MaterialFactory>}
	 */


	exports.default = MaterialFactory;
	MaterialFactory.factories = new Map();
	MaterialFactory.defaultShaderHeader = _header2.default;
	/**
	 * Actual material generator.
	 */
	MaterialFactory.generators = {};
	MaterialFactory.registerdHandlers = {};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HashCalculator = __webpack_require__(38);

	var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

	var _SortTransformUtility = __webpack_require__(39);

	var _SortTransformUtility2 = _interopRequireDefault(_SortTransformUtility);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SortParser = function () {
	    function SortParser() {
	        _classCallCheck(this, SortParser);
	    }

	    _createClass(SortParser, null, [{
	        key: "parse",
	        value: function parse(source) {
	            var sourceHash = _HashCalculator2.default.calcHash(source);
	            if (SortParser._parsedCache[sourceHash] !== void 0) {
	                return new Promise(function (resolve, reject) {
	                    resolve(SortParser._parsedCache[sourceHash]);
	                });
	            } else {
	                return SortParser._parse(source).then(function (v) {
	                    SortParser._parsedCache[source] = v;
	                    return v;
	                });
	            }
	        }
	    }, {
	        key: "_parse",
	        value: function _parse(source) {
	            return new Promise(function (resolve, reject) {
	                var result = {};
	                _SortTransformUtility2.default.resolveImports(_SortTransformUtility2.default.removeComment(source)).then(function (uncommented) {
	                    try {
	                        var techniqueSources = _SortTransformUtility2.default.separateTechniqueSource(uncommented);
	                        for (var key in techniqueSources) {
	                            result[key] = SortParser._parseTechnique(techniqueSources[key]);
	                        }
	                        resolve(result);
	                    } catch (e) {
	                        reject(e);
	                    }
	                });
	            });
	        }
	    }, {
	        key: "_parseTechnique",
	        value: function _parseTechnique(techniqueSource) {
	            var drawOrder = _SortTransformUtility2.default.fetchDrawOrder(techniqueSource) || "Auto";
	            var passSources = _SortTransformUtility2.default.separatePassSource(techniqueSource);
	            var passes = new Array(passSources.length);
	            for (var i = 0; i < passSources.length; i++) {
	                passes[i] = SortParser._parsePassSource(passSources[i]);
	            }
	            return {
	                drawOrder: drawOrder,
	                passes: passes
	            };
	        }
	    }, {
	        key: "_parsePassSource",
	        value: function _parsePassSource(passSource) {
	            var shaderSource = _SortTransformUtility2.default.removePreferences(passSource);
	            var attributes = _SortTransformUtility2.default.parseVariables(passSource, "attribute");
	            var uniforms = _SortTransformUtility2.default.parseVariables(passSource, "uniform");
	            var macros = _SortTransformUtility2.default.parseMacros(passSource);
	            var states = _SortTransformUtility2.default.parsePreferences(passSource);
	            return {
	                fragment: shaderSource,
	                vertex: shaderSource,
	                attributes: attributes,
	                uniforms: uniforms,
	                macros: macros,
	                states: states
	            };
	        }
	    }]);

	    return SortParser;
	}();
	/**
	 * Cache to prevent double loading
	 */


	SortParser._parsedCache = {};
	exports.default = SortParser;

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HashCalculator = function () {
	    function HashCalculator() {
	        _classCallCheck(this, HashCalculator);
	    }

	    _createClass(HashCalculator, null, [{
	        key: "calcHash",
	        value: function calcHash(source) {
	            var hash = 0;
	            if (source.length === 0) return hash;
	            for (var i = 0; i < source.length; i++) {
	                var char = source.charCodeAt(i);
	                hash = (hash << 5) - hash + char;
	                hash = hash & hash; // Convert to 32bit integer
	            }
	            return hash;
	        }
	    }]);

	    return HashCalculator;
	}();

	exports.default = HashCalculator;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Preferences = __webpack_require__(40);

	var _Preferences2 = _interopRequireDefault(_Preferences);

	var _TypeToConstant = __webpack_require__(41);

	var _TypeToConstant2 = _interopRequireDefault(_TypeToConstant);

	var _NameSemanticsPair = __webpack_require__(42);

	var _NameSemanticsPair2 = _interopRequireDefault(_NameSemanticsPair);

	var _ImportResolver = __webpack_require__(43);

	var _ImportResolver2 = _interopRequireDefault(_ImportResolver);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	var SortTransformUtility = function () {
	    function SortTransformUtility() {
	        _classCallCheck(this, SortTransformUtility);
	    }

	    _createClass(SortTransformUtility, null, [{
	        key: "separateTechniqueSource",

	        /**
	         * Separate .sort shader text with @Technique statements.
	         * @param  {string} uncommentedSource [description]
	         * @return {[type]}                   [description]
	         */
	        value: function separateTechniqueSource(uncommentedSource) {
	            if (uncommentedSource.indexOf("@Technique") === -1) {
	                return { default: uncommentedSource };
	            } else {
	                var result = {};
	                var regex = /@Technique\s+([a-zA-Z0-9_]+)/g;
	                var regexResult = void 0;
	                while (regexResult = regex.exec(uncommentedSource)) {
	                    var techniqueName = regexResult[1];
	                    if (result[techniqueName] !== void 0) {
	                        throw new Error("Technique name " + techniqueName + " is dupelicated");
	                    } else {
	                        result[techniqueName] = SortTransformUtility.obtainNextSection(uncommentedSource, "{", "}", regexResult.index + regexResult.length);
	                    }
	                }
	                return result;
	            }
	        }
	        /**
	         * Separate technique source with @Pass statement.
	         * @param  {string}   uncommentedSource [description]
	         * @return {string[]}                   [description]
	         */

	    }, {
	        key: "separatePassSource",
	        value: function separatePassSource(uncommentedSource) {
	            if (uncommentedSource.indexOf("@Pass") === -1) {
	                return [uncommentedSource];
	            } else {
	                var result = [];
	                var regex = /@Pass/g;
	                var regexResult = void 0;
	                while (regexResult = regex.exec(uncommentedSource)) {
	                    result.push(SortTransformUtility.obtainNextSection(uncommentedSource, "{", "}", regexResult.index + regexResult.length));
	                }
	                return result;
	            }
	        }
	        /**
	         * Fetch draw order preference from technique source.
	         * @param  {string} uncommentedTechniqueSource [description]
	         * @return {string}                            [description]
	         */

	    }, {
	        key: "fetchDrawOrder",
	        value: function fetchDrawOrder(uncommentedTechniqueSource) {
	            var regexResult = /@DrawOrder\s*\((\w+)\)/g.exec(uncommentedTechniqueSource);
	            if (regexResult) {
	                var firstPassIndex = uncommentedTechniqueSource.indexOf("@Pass");
	                if (firstPassIndex !== -1 && firstPassIndex < regexResult.index) {
	                    throw new Error("DrawOrder preference should be just under @Technique section");
	                }
	                return regexResult[1];
	            }
	            return null;
	        }
	    }, {
	        key: "removePreferences",
	        value: function removePreferences(source) {
	            var regex = /@.+$/gm;
	            return source.replace(regex, "");
	        }
	    }, {
	        key: "resolveImports",
	        value: function resolveImports(uncommentedSource) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var regexResult, importContent;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (false) {
	                                    _context.next = 17;
	                                    break;
	                                }

	                                regexResult = /\s*@import\s+"([^"]+)"/.exec(uncommentedSource);

	                                if (regexResult) {
	                                    _context.next = 4;
	                                    break;
	                                }

	                                return _context.abrupt("break", 17);

	                            case 4:
	                                importContent = void 0;
	                                _context.t0 = SortTransformUtility;
	                                _context.next = 8;
	                                return _ImportResolver2.default.resolve(regexResult[1]);

	                            case 8:
	                                _context.t1 = _context.sent;
	                                _context.next = 11;
	                                return _context.t0.resolveImports.call(_context.t0, _context.t1);

	                            case 11:
	                                importContent = _context.sent;

	                                if (importContent) {
	                                    _context.next = 14;
	                                    break;
	                                }

	                                throw new Error("Required shader chunk '" + regexResult[1] + "' was not found!!");

	                            case 14:
	                                uncommentedSource = uncommentedSource.replace(regexResult[0], "\n" + importContent + "\n");
	                                _context.next = 0;
	                                break;

	                            case 17:
	                                return _context.abrupt("return", uncommentedSource);

	                            case 18:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "parseMacros",
	        value: function parseMacros(source) {
	            var result = {};
	            var regex = /@ExposeMacro\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*\)/g;
	            var regexResult = void 0;
	            while (regexResult = regex.exec(source)) {
	                if (!regexResult[1] || !regexResult[2] || !regexResult[3] || !regexResult[4]) {
	                    throw new Error("Invalid parameter was passed on @ExposeMacro preference on '" + regexResult[0] + "'");
	                }
	                if (regexResult[1] !== "bool" && regexResult[1] !== "int") {
	                    throw new Error("Invalid macro type \"" + regexResult[1] + "\". regexResult type must be int or bool");
	                }
	                var value = void 0;
	                if (regexResult[1] === "bool") {
	                    if (regexResult[4] !== "true" && regexResult[4] !== "false") {
	                        throw new Error("Default macro value \"" + regexResult[4] + "\" is invalid for bool type macro. Must be true or false");
	                    }
	                    value = regexResult[4] === "true";
	                } else {
	                    value = parseFloat(regexResult[4]);
	                    if (isNaN(value)) {
	                        throw new Error("Default macro value \"" + regexResult[4] + "\" is invalid for int type macro. Must be a number.");
	                    }
	                }
	                result[regexResult[2]] = {
	                    name: regexResult[2],
	                    macroName: regexResult[3],
	                    type: regexResult[1],
	                    value: value,
	                    target: "expose"
	                };
	            }
	            regex = /@ReferMacro\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*(.+)\s*\)/g;
	            while (regexResult = regex.exec(source)) {
	                if (!regexResult[1] || !regexResult[2]) {
	                    throw new Error("Invalid parameter was passed on @ReferMacro preference on '" + regexResult[0] + "'");
	                }
	                result[regexResult[1]] = {
	                    name: regexResult[1],
	                    macroName: regexResult[1],
	                    value: regexResult[2],
	                    target: "refer"
	                };
	            }
	            return result;
	        }
	    }, {
	        key: "parsePreferences",
	        value: function parsePreferences(source) {
	            var result = {
	                enable: [WebGLRenderingContext.CULL_FACE, WebGLRenderingContext.BLEND, WebGLRenderingContext.DEPTH_TEST],
	                functions: {
	                    blendColor: [0, 0, 0, 0],
	                    cullFace: [WebGLRenderingContext.BACK],
	                    blendFuncSeparate: [WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO, WebGLRenderingContext.ONE, WebGLRenderingContext.ZERO],
	                    blendEquationSeparate: [WebGLRenderingContext.FUNC_ADD, WebGLRenderingContext.FUNC_ADD],
	                    lineWidth: [1],
	                    frontFace: [WebGLRenderingContext.CCW],
	                    depthRange: [0, 1],
	                    depthFunc: [WebGLRenderingContext.LESS]
	                }
	            };
	            var regex = /@([A-Za-z]+)\(([a-zA-Z_0-9,\.\-]*)\)/g;
	            var regexResult = void 0;
	            while (regexResult = regex.exec(source)) {
	                var prefParser = _Preferences2.default[regexResult[1]];
	                if (!prefParser) {
	                    throw new Error("Unknown pass preference " + regexResult[1] + " was specified.");
	                }
	                prefParser(result, regexResult[2].split(","));
	            }
	            return result;
	        }
	    }, {
	        key: "asValidJSON",
	        value: function asValidJSON(json) {
	            var regex = /([\{,]\s*)([a-zA-Z0-9_]+)(\s*\:)/gm;
	            var result = json.replace(regex, '$1"$2"$3');
	            return result;
	        }
	    }, {
	        key: "removeComment",
	        value: function removeComment(source) {
	            var text = "";
	            var isLineComment = false;
	            var isMultiLineComment = false;
	            for (var i = 0; i < source.length; i++) {
	                var c = source.charAt(i);
	                if (c === "/") {
	                    if (i + 1 < source.length) {
	                        if (source.charAt(i + 1) === "/" && !isMultiLineComment) {
	                            isLineComment = true;
	                            i++;
	                            continue;
	                        } else if (source.charAt(i + 1) === "*" && !isLineComment) {
	                            isMultiLineComment = true;
	                            i++;
	                            continue;
	                        }
	                    }
	                }
	                if (c === "*" && isMultiLineComment && i + 1 < source.length && source.charAt(i + 1) === "/") {
	                    isMultiLineComment = false;
	                    i++;
	                    continue;
	                }
	                if (c === "\n") {
	                    if (isLineComment) {
	                        isLineComment = false;
	                        continue;
	                    } else if (isMultiLineComment) {
	                        text += "\n"; // for keeping line break
	                    }
	                }
	                if (!isLineComment && !isMultiLineComment) {
	                    text += c;
	                }
	            }
	            return text;
	        }
	    }, {
	        key: "obtainNextSection",
	        value: function obtainNextSection(source, begin, end, offset) {
	            var beginningPosition = source.indexOf(begin, offset);
	            if (beginningPosition === -1) {
	                throw new Error("Begining section charactor '" + begin + "' was not found.");
	            }
	            if (begin.length > 1 || end.length > 1) {
	                throw new Error("Invalid parameter");
	            }
	            var matchingCount = 1;
	            var beginCode = begin.charCodeAt(0);
	            var endCode = end.charCodeAt(0);
	            for (var i = beginningPosition + 1; i < source.length; i++) {
	                var current = source.charCodeAt(i);
	                if (current === beginCode) {
	                    matchingCount++;
	                } else if (current === endCode) {
	                    matchingCount--;
	                }
	                if (matchingCount === 0) {
	                    return source.substring(beginningPosition + 1, i);
	                }
	            }
	            throw new Error("Invalid bracket matching");
	        }
	    }, {
	        key: "generateVariableFetchRegex",
	        value: function generateVariableFetchRegex(variableType) {
	            return new RegExp("(?:@([a-zA-Z0-9_]+)?(\\{.+\\})?)?\\s*" + variableType + "\\s+(?:(lowp|mediump|highp)\\s+)?([a-z0-9A-Z]+)\\s+([a-zA-Z0-9_]+)(?:\\s*\\[\\s*([a-zA-Z0-9_]+)\\s*\\]\\s*)?\\s*;", "g");
	        }
	    }, {
	        key: "parseVariables",
	        value: function parseVariables(source, variableType) {
	            var result = {};
	            var regex = SortTransformUtility.generateVariableFetchRegex(variableType);
	            var regexResult = void 0;
	            while (regexResult = regex.exec(source)) {
	                var name = regexResult[5];
	                var type = _TypeToConstant2.default[regexResult[4]];
	                var precision = regexResult[3];
	                var rawAnnotations = regexResult[2];
	                var isArray = regexResult[6] !== void 0;
	                var arrayCount = undefined;
	                var semantic = regexResult[1];
	                if (!semantic) {
	                    semantic = _NameSemanticsPair2.default[variableType][name];
	                    if (!semantic) {
	                        semantic = variableType === "uniform" ? "USER_VALUE" : name.toUpperCase();
	                    }
	                }
	                if (isArray) {
	                    arrayCount = parseInt(regexResult[6], 10);
	                    if (isNaN(arrayCount)) {
	                        arrayCount = regexResult[6];
	                    }
	                }
	                result[name] = {
	                    semantic: semantic,
	                    name: name,
	                    type: type,
	                    precision: precision,
	                    attributes: rawAnnotations ? JSON.parse(SortTransformUtility.asValidJSON(rawAnnotations)) : {},
	                    isArray: isArray,
	                    count: arrayCount
	                };
	            }
	            return result;
	        }
	    }]);

	    return SortTransformUtility;
	}();

	exports.default = SortTransformUtility;

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function asGLConstantArgs(args, length) {
	    if (args.length !== length) {
	        throw new Error("Unmatching argument count on preference parse");
	    }
	    return args.map(function (arg) {
	        var argNum = WebGLRenderingContext[arg];
	        if (typeof argNum !== "number") {
	            throw new Error("Unknown WebGL constant " + arg + " was specified");
	        }
	        return argNum;
	    });
	}
	function asNumberArgs(args, length) {
	    if (args.length !== length) {
	        throw new Error("Unmatching argument count on preference parse");
	    }
	    return args.map(function (arg) {
	        var argNum = Number.parseFloat(arg);
	        if (isNaN(argNum)) {
	            throw new Error("Failed to parse number on preference parsing");
	        }
	        return argNum;
	    });
	}
	function asBooleanArgs(args, length) {
	    if (args.length !== length) {
	        throw new Error("Unmatching argument count on preference parse");
	    }
	    return args.map(function (arg) {
	        if (arg !== "true" && arg !== "false") {
	            throw new Error(arg + " is not boolean");
	        }
	        return arg === "true";
	    });
	}
	exports.default = {
	    Enable: function Enable(state, args) {
	        var enableTarget = WebGLRenderingContext[args[0]];
	        if (typeof enableTarget !== "number") {
	            throw new Error("Unknown WebGL constant \"" + args[0] + "\" was specified on @Enable");
	        }
	        state.enable.push(enableTarget);
	    },
	    Disable: function Disable(state, args) {
	        var disableTarget = WebGLRenderingContext[args[0]];
	        if (typeof disableTarget !== "number") {
	            throw new Error("Unknown WebGL constant \"" + args[0] + "\" was specified on @Disable");
	        }
	        var index = state.enable.indexOf(disableTarget);
	        if (index !== index) {
	            state.enable.splice(index, 1);
	        }
	    },
	    BlendFunc: function BlendFunc(state, args) {
	        var config = asGLConstantArgs(args, 2);
	        state.functions.blendFuncSeparate = [config[0], config[1], config[0], config[1]];
	    },
	    BlendFuncSeparate: function BlendFuncSeparate(state, args) {
	        state.functions.blendFuncSeparate = asGLConstantArgs(args, 4);
	    },
	    BlendEquation: function BlendEquation(state, args) {
	        var config = asGLConstantArgs(args, 1);
	        state.functions.blendEquationSeparate = [config[0], config[0]];
	    },
	    BlendEquationSeparate: function BlendEquationSeparate(state, args) {
	        state.functions.blendEquationSeparate = asGLConstantArgs(args, 4);
	    },
	    BlendColor: function BlendColor(state, args) {
	        state.functions.blendColor = asNumberArgs(args, 4);
	    },
	    ColorMask: function ColorMask(state, args) {
	        state.functions.colorMask = asBooleanArgs(args, 4);
	        state.enable.push(WebGLRenderingContext.COLOR_WRITEMASK);
	    },
	    CullFace: function CullFace(state, args) {
	        state.functions.cullFace = asGLConstantArgs(args, 1);
	    },
	    DepthFunc: function DepthFunc(state, args) {
	        state.functions.depthFunc = asGLConstantArgs(args, 1);
	    },
	    DepthRange: function DepthRange(state, args) {
	        state.functions.depthRange = asNumberArgs(args, 2);
	    },
	    FrontFace: function FrontFace(state, args) {
	        state.functions.frontFace = asGLConstantArgs(args, 1);
	    },
	    LineWidth: function LineWidth(state, args) {
	        state.functions.lineWidth = asNumberArgs(args, 1);
	    },
	    PolygonOffset: function PolygonOffset(state, args) {
	        state.functions.polygonOffset = asNumberArgs(args, 2);
	        state.enable.push(WebGLRenderingContext.POLYGON_OFFSET_FILL);
	    },
	    Scissor: function Scissor(state, args) {
	        state.functions.scissor = asNumberArgs(args, 4);
	        state.enable.push(WebGLRenderingContext.SCISSOR_TEST);
	    },
	    ExposeMacro: function ExposeMacro() {
	        return;
	    },
	    ReferMacro: function ReferMacro() {
	        return;
	    }
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	if (!WebGLRenderingContext.ONE) {
	    throw new Error("WebGLRenderingContext constant can not be retrived!");
	}
	var gl = WebGLRenderingContext;
	var result = {
	    vec2: gl.FLOAT_VEC2,
	    vec3: gl.FLOAT_VEC3,
	    vec4: gl.FLOAT_VEC4,
	    ivec2: gl.INT_VEC2,
	    ivec3: gl.INT_VEC3,
	    ivec4: gl.INT_VEC4,
	    bvec2: gl.BOOL_VEC2,
	    bvec3: gl.BOOL_VEC3,
	    bvec4: gl.BOOL_VEC4,
	    float: gl.FLOAT,
	    int: gl.INT,
	    bool: gl.BOOL,
	    sampler2D: gl.SAMPLER_2D,
	    samplerCube: gl.SAMPLER_CUBE,
	    mat4: gl.FLOAT_MAT4,
	    mat3: gl.FLOAT_MAT3,
	    mat2: gl.FLOAT_MAT2
	};
	exports.default = result;

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    attribute: {
	        position: "POSITION",
	        normal: "NORMAL",
	        texCoord: "TEXCOORD"
	    },
	    uniform: {
	        _time: "TIME",
	        _viewportSize: "VIEWPORT_SIZE",
	        _matL: "LOCAL",
	        _matM: "MODEL",
	        _matV: "VIEW",
	        _matP: "PROJECTION",
	        _matVM: "MODELVIEW",
	        _matPVM: "MODELVIEWPROJECTION",
	        _matIM: "MODELINVERSE",
	        _matIV: "VIEWINVERSE",
	        _matIP: "PROJECTIONINVERSE",
	        _matIVM: "MODELVIEWINVERSE",
	        _matIPVM: "MODELVIEWPROJECTIONINVERSE",
	        _matITM: "MODELINVERSETRANSPOSE",
	        _matITVM: "MODELVIEWINVERSETRANSPOSE"
	    }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ImportResolver = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _CacheResolver2 = __webpack_require__(3);

	var _CacheResolver3 = _interopRequireDefault(_CacheResolver2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	var ImportResolver = exports.ImportResolver = function (_CacheResolver) {
	    _inherits(ImportResolver, _CacheResolver);

	    function ImportResolver() {
	        _classCallCheck(this, ImportResolver);

	        var _this = _possibleConstructorReturn(this, (ImportResolver.__proto__ || Object.getPrototypeOf(ImportResolver)).call(this, function (str) {
	            var regex = /^https?:\/\/.*/gm;
	            return regex.test(str) ? ImportResolver._toAbsolute(str) : str;
	        }));

	        _this.staticImports = {};
	        return _this;
	    }

	    _createClass(ImportResolver, [{
	        key: "resolve",
	        value: function resolve(path) {
	            var _this2 = this;

	            return _get(ImportResolver.prototype.__proto__ || Object.getPrototypeOf(ImportResolver.prototype), "resolve", this).call(this, path, function (abs) {
	                return _this2._resolve(path);
	            });
	        }
	    }, {
	        key: "_resolve",
	        value: function _resolve(path) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this.staticImports[path]) {
	                                    _context.next = 4;
	                                    break;
	                                }

	                                return _context.abrupt("return", this.staticImports[path]);

	                            case 4:
	                                _context.next = 6;
	                                return this._fromExternal(path);

	                            case 6:
	                                return _context.abrupt("return", _context.sent);

	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "_fromExternal",
	        value: function _fromExternal(path) {
	            return new Promise(function (resolve, reject) {
	                var xhr = new XMLHttpRequest();
	                xhr.open("GET", path);
	                xhr.onload = function (v) {
	                    resolve(xhr.responseText);
	                };
	                xhr.onerror = function (e) {
	                    reject(e);
	                };
	                xhr.send();
	            });
	        }
	    }], [{
	        key: "_toAbsolute",
	        value: function _toAbsolute(href) {
	            var link = document.createElement("a");
	            link.href = href;
	            return link.protocol + "//" + link.host + link.pathname + link.search + link.hash;
	        }
	    }]);

	    return ImportResolver;
	}(_CacheResolver3.default);

	exports.default = new ImportResolver();

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _DefaultMacro = __webpack_require__(45);

	var _DefaultMacro2 = _interopRequireDefault(_DefaultMacro);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Manage macros which would be appended head of all shaders grimoire.js would load.
	 */
	var MacroRegistory = function () {
	    function MacroRegistory() {
	        _classCallCheck(this, MacroRegistory);

	        /**
	         * The map of macro.
	         */
	        this._macro = {};
	        /**
	         * Handlers functions for changing macro.
	         */
	        this._observers = {};
	        for (var key in _DefaultMacro2.default) {
	            this.setValue(key, _DefaultMacro2.default[key]);
	        }
	    }
	    /**
	     * Set the value of macros.
	     * @param {string}    key [description]
	     * @param {string =   null}        val [description]
	     */


	    _createClass(MacroRegistory, [{
	        key: "setValue",
	        value: function setValue(key) {
	            var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	            if (val === null) {
	                val = "";
	            }
	            if (this._macro[key] !== val) {
	                this._macro[key] = val;
	                if (!this._observers[key]) {
	                    this._observers[key] = [];
	                }
	                this._notifyMacroChanged(key, val);
	            }
	        }
	        /**
	         * Get the value of macro.
	         * @param  {string} key [description]
	         * @return {string}     [description]
	         */

	    }, {
	        key: "getValue",
	        value: function getValue(key) {
	            var macro = this._macro[key];
	            if (macro === null) {
	                return "";
	            } else {
	                return macro;
	            }
	        }
	    }, {
	        key: "watch",
	        value: function watch(macroName, handler) {
	            var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	            var observers = this._observers[macroName];
	            if (!observers) {
	                observers = this._observers[macroName] = [];
	            }
	            observers.push(handler);
	            if (immediate && this._macro[macroName] !== void 0) {
	                handler(this._macro[macroName], true);
	            }
	        }
	    }, {
	        key: "unwatch",
	        value: function unwatch(macroName, handler) {
	            var observers = this._observers[macroName];
	            if (!observers) {
	                return false;
	            }
	            for (var i = 0; i < observers.length; i++) {
	                if (observers[i] === handler) {
	                    observers.splice(i, 1);
	                    return true;
	                }
	            }
	        }
	    }, {
	        key: "_notifyMacroChanged",
	        value: function _notifyMacroChanged(key, value) {
	            for (var i = 0; i < this._observers[key].length; i++) {
	                this._observers[key][i](value, false);
	            }
	        }
	    }]);

	    return MacroRegistory;
	}();

	exports.default = MacroRegistory;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    "GRIMOIRE": null,
	    "WEBGL_VERSION": "1"
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Technique = __webpack_require__(47);

	var _Technique2 = _interopRequireDefault(_Technique);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Material = function () {
	    function Material(gl, techniqueRecipes) {
	        _classCallCheck(this, Material);

	        this.gl = gl;
	        this.techniqueRecipes = techniqueRecipes;
	        this.argumentDeclarations = {};
	        this.arguments = {};
	        this.macroDeclarations = {};
	        this.techniques = {};
	        this._macroObserver = {};
	        for (var key in techniqueRecipes) {
	            this.techniques[key] = new _Technique2.default(this, techniqueRecipes[key]);
	        }
	    }

	    _createClass(Material, [{
	        key: "draw",
	        value: function draw(arg) {
	            var technique = this.techniques[arg.technique];
	            if (technique) {
	                technique.draw(arg);
	            }
	        }
	    }, {
	        key: "addMacroObserver",
	        value: function addMacroObserver(key, macroDeclaration, onChanged) {
	            if (!this._macroObserver[key]) {
	                this._macroObserver[key] = [];
	            }
	            this._macroObserver[key].push(onChanged);
	            this.macroDeclarations[key] = macroDeclaration;
	        }
	    }, {
	        key: "setMacroValue",
	        value: function setMacroValue(key, value) {
	            if (this._macroObserver[key]) {
	                this._macroObserver[key].forEach(function (o) {
	                    return o(value);
	                });
	            }
	        }
	    }, {
	        key: "addArgument",
	        value: function addArgument(key, argumentDeclaration) {
	            this.argumentDeclarations[key] = argumentDeclaration;
	        }
	    }, {
	        key: "deleteArgument",
	        value: function deleteArgument(key) {
	            delete this.argumentDeclarations[key];
	        }
	    }]);

	    return Material;
	}();

	exports.default = Material;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Pass = __webpack_require__(48);

	var _Pass2 = _interopRequireDefault(_Pass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Technique = function () {
	    function Technique(material, recipe) {
	        _classCallCheck(this, Technique);

	        this.material = material;
	        this.passes = [];
	        if (recipe.drawOrder === "Auto") {
	            this.drawOrder = "UseAlpha";
	        } else {
	            this.drawOrder = recipe.drawOrder;
	        }
	        this.passes = recipe.passes.map(function (p) {
	            return new _Pass2.default(material, p);
	        });
	    }

	    _createClass(Technique, [{
	        key: "draw",
	        value: function draw(args) {
	            for (var i = 0; i < this.passes.length; i++) {
	                this.passes[i].draw(args);
	            }
	        }
	    }, {
	        key: "dispose",
	        value: function dispose() {
	            this.passes.forEach(function (p) {
	                return p.dispose();
	            });
	        }
	    }]);

	    return Technique;
	}();

	exports.default = Technique;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ManagedProgram = __webpack_require__(49);

	var _ManagedProgram2 = _interopRequireDefault(_ManagedProgram);

	var _ManagedShader = __webpack_require__(53);

	var _ManagedShader2 = _interopRequireDefault(_ManagedShader);

	var _MaterialFactory = __webpack_require__(36);

	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

	var _Geometry = __webpack_require__(55);

	var _Geometry2 = _interopRequireDefault(_Geometry);

	var _UniformResolverRegistry = __webpack_require__(58);

	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

	var _header = __webpack_require__(59);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pass = function () {
	    function Pass(material, passRecipe) {
	        var _this = this;

	        _classCallCheck(this, Pass);

	        this.material = material;
	        this.passRecipe = passRecipe;
	        this._macro = {};
	        var registers = _UniformResolverRegistry2.default.generateRegisterers(material, passRecipe);
	        this._registers = registers.registerers;
	        this._disposers = registers.disposers;
	        this._gl = material.gl;
	        var factory = _MaterialFactory2.default.get(this._gl);
	        var macroRegister = factory.macro;
	        // register macro

	        var _loop = function _loop(key) {
	            var macro = passRecipe.macros[key];
	            _this._macro[macro.macroName] = macro.value;
	            if (macro.target === "expose") {
	                _this.material.addMacroObserver(key, {
	                    converter: macro.type === "bool" ? "Boolean" : "Number",
	                    default: macro.value
	                }, function (value) {
	                    if (macro.type === "bool") {
	                        _this._macro[macro.macroName] = value ? "" : undefined;
	                    } else {
	                        _this._macro[macro.macroName] = value;
	                    }
	                    _this._updateProgram();
	                });
	            } else if (macro.target === "refer") {
	                _this._macro[macro.macroName] = macro.value;
	                macroRegister.watch(macro.macroName, function (val, immediate) {
	                    _this._macro[macro.macroName] = val;
	                    if (!immediate) {
	                        _this._updateProgram();
	                    }
	                }, true);
	            }
	        };

	        for (var key in passRecipe.macros) {
	            _loop(key);
	        }
	        this._updateProgram();
	        this._disables = Pass._glEnableTargets.concat();
	        for (var i = 0; i < passRecipe.states.enable.length; i++) {
	            var enable = passRecipe.states.enable[i];
	            var index = this._disables.indexOf(enable);
	            if (index > -1) {
	                this._disables.splice(index, 1);
	            }
	        }
	    }

	    _createClass(Pass, [{
	        key: "draw",
	        value: function draw(args) {
	            this.program.use();
	            for (var i = 0; i < this._registers.length; i++) {
	                this._registers[i](this.program.uniforms, args);
	            }
	            this._configure();
	            for (var key in this.passRecipe.attributes) {
	                var attribute = this.passRecipe.attributes[key];
	                _Geometry2.default.bindBufferToAttribute(args.geometry, this.program, key, attribute.semantic);
	            }
	            _Geometry2.default.drawWithCurrentVertexBuffer(args.geometry, args.targetBuffer, args.drawCount, args.drawOffset);
	        }
	    }, {
	        key: "dispose",
	        value: function dispose() {
	            for (var i = 0; i < this._disposers.length; i++) {
	                this._disposers[i]();
	            }
	        }
	    }, {
	        key: "_configure",
	        value: function _configure() {
	            var states = this.passRecipe.states;
	            var functions = this.passRecipe.states.functions;
	            for (var i = 0; i < states.enable.length; i++) {
	                this._gl.enable(states.enable[i]);
	            }
	            for (var _i = 0; _i < this._disables.length; _i++) {
	                this._gl.disable(this._disables[_i]);
	            }
	            if (functions.blendColor) {
	                this._gl.blendColor(functions.blendColor[0], functions.blendColor[1], functions.blendColor[2], functions.blendColor[3]);
	            }
	            if (functions.blendEquationSeparate) {
	                this._gl.blendEquationSeparate(functions.blendEquationSeparate[0], functions.blendEquationSeparate[1]);
	            }
	            if (functions.blendFuncSeparate) {
	                this._gl.blendFuncSeparate(functions.blendFuncSeparate[0], functions.blendFuncSeparate[1], functions.blendFuncSeparate[2], functions.blendFuncSeparate[3]);
	            }
	            if (functions.colorMask) {
	                this._gl.colorMask(functions.colorMask[0], functions.colorMask[1], functions.colorMask[2], functions.colorMask[3]);
	            }
	            if (functions.cullFace) {
	                this._gl.cullFace(functions.cullFace[0]);
	            }
	            if (functions.depthFunc) {
	                this._gl.depthFunc(functions.depthFunc[0]);
	            }
	            if (functions.depthMask) {
	                this._gl.depthMask(functions.depthMask[0]);
	            }
	            if (functions.depthRange) {
	                this._gl.depthRange(functions.depthRange[0], functions.depthRange[1]);
	            }
	            if (functions.frontFace) {
	                this._gl.frontFace(functions.frontFace[0]);
	            }
	            if (functions.lineWidth) {
	                this._gl.lineWidth(functions.lineWidth[0]);
	            }
	            if (functions.polygonOffset) {
	                this._gl.polygonOffset(functions.polygonOffset[0], functions.polygonOffset[1]);
	            }
	            if (functions.scissor) {
	                this._gl.scissor(functions.scissor[0], functions.scissor[1], functions.scissor[2], functions.scissor[3]);
	            }
	        }
	    }, {
	        key: "_updateProgram",
	        value: function _updateProgram() {
	            var lFS = this.fs;
	            this.fs = _ManagedShader2.default.getShader(this._gl, WebGLRenderingContext.FRAGMENT_SHADER, this._generateShaderCode("FS"));
	            var lVS = this.vs;
	            this.vs = _ManagedShader2.default.getShader(this._gl, WebGLRenderingContext.VERTEX_SHADER, this._generateShaderCode("VS"));
	            if (lFS && lVS) {
	                lFS.release();
	                lVS.release();
	            }
	            var lP = this.program;
	            this.program = _ManagedProgram2.default.getProgram(this._gl, [this.vs, this.fs]);
	            if (lP) {
	                lP.release();
	            }
	        }
	    }, {
	        key: "_generateShaderCode",
	        value: function _generateShaderCode(shaderType) {
	            return "#define " + shaderType + "\n" + this._macroCode() + "\n" + _header2.default + "/*BEGINNING OF USER CODE*/\n" + (shaderType === "VS" ? this.passRecipe.vertex : this.passRecipe.fragment);
	        }
	    }, {
	        key: "_macroCode",
	        value: function _macroCode() {
	            var macroCode = "";
	            for (var macroName in this._macro) {
	                macroCode += "#define " + macroName + " " + this._macro[macroName] + "\n";
	            }
	            return macroCode;
	        }
	    }]);

	    return Pass;
	}();

	exports.default = Pass;

	Pass._glEnableTargets = [WebGLRenderingContext.CULL_FACE, WebGLRenderingContext.DEPTH_TEST, WebGLRenderingContext.STENCIL_TEST, WebGLRenderingContext.BLEND, WebGLRenderingContext.SCISSOR_TEST, WebGLRenderingContext.DITHER, WebGLRenderingContext.POLYGON_OFFSET_FILL, WebGLRenderingContext.SAMPLE_ALPHA_TO_COVERAGE, WebGLRenderingContext.SAMPLE_COVERAGE];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HashCalculator = __webpack_require__(38);

	var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

	var _Program2 = __webpack_require__(50);

	var _Program3 = _interopRequireDefault(_Program2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ManagedProgram = function (_Program) {
	    _inherits(ManagedProgram, _Program);

	    function ManagedProgram(gl, hash) {
	        _classCallCheck(this, ManagedProgram);

	        var _this = _possibleConstructorReturn(this, (ManagedProgram.__proto__ || Object.getPrototypeOf(ManagedProgram)).call(this, gl));

	        _this.hash = hash;
	        _this._referenceCount = 0;
	        return _this;
	    }

	    _createClass(ManagedProgram, [{
	        key: "release",
	        value: function release() {
	            this._referenceCount--;
	            if (this._referenceCount === 0) {
	                this.destroy();
	                ManagedProgram._managedPrograms.get(this.gl)[this.hash] = void 0;
	            }
	        }
	    }], [{
	        key: "getProgram",
	        value: function getProgram(gl, shaders) {
	            if (!ManagedProgram._managedPrograms.has(gl)) {
	                ManagedProgram._managedPrograms.set(gl, {});
	            }
	            var programs = ManagedProgram._managedPrograms.get(gl);
	            var hashSource = "";
	            shaders = shaders.sort();
	            shaders.forEach(function (s) {
	                hashSource += s.index + ",";
	            });
	            var hash = _HashCalculator2.default.calcHash(hashSource);
	            if (programs[hash] === void 0) {
	                programs[hash] = new ManagedProgram(gl, hash);
	                programs[hash].update(shaders);
	            }
	            programs[hash]._referenceCount++;
	            return programs[hash];
	        }
	    }]);

	    return ManagedProgram;
	}(_Program3.default);

	exports.default = ManagedProgram;

	ManagedProgram._managedPrograms = new Map();

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ResourceCache = __webpack_require__(51);

	var _ResourceCache2 = _interopRequireDefault(_ResourceCache);

	var _UniformProxy = __webpack_require__(52);

	var _UniformProxy2 = _interopRequireDefault(_UniformProxy);

	var _ResourceBase2 = __webpack_require__(24);

	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Manages WebGLProgram related stuff.
	 */
	var Program = function (_ResourceBase) {
	    _inherits(Program, _ResourceBase);

	    function Program(gl) {
	        _classCallCheck(this, Program);

	        var _this = _possibleConstructorReturn(this, (Program.__proto__ || Object.getPrototypeOf(Program)).call(this, gl));

	        _this._uniformLocations = {};
	        _this._attributeLocations = {};
	        _this.uniforms = new _UniformProxy2.default(_this);
	        _this.program = gl.createProgram();
	        return _this;
	    }
	    /**
	     * Check this program is the last used one or not.
	     * @return {boolean} [description]
	     */


	    _createClass(Program, [{
	        key: "update",

	        /**
	         * Update program with shader instance.
	         * The array might be set of vertex shader and fragment shader couple.
	         * @param {Shader[]} shaders [description]
	         */
	        value: function update(shaders) {
	            var _this2 = this;

	            if (this.valid) {
	                // detach all attached shaders previously
	                var preciousShaders = this.gl.getAttachedShaders(this.program);
	                preciousShaders.forEach(function (s) {
	                    return _this2.gl.detachShader(_this2.program, s);
	                });
	                this._uniformLocations = {}; // reset location caches
	                this._attributeLocations = {};
	            }
	            // attach all shader passed
	            shaders.forEach(function (shader) {
	                _this2.gl.attachShader(_this2.program, shader.shader);
	            });
	            this.gl.linkProgram(this.program); // link program and check errors
	            if (!this.gl.getProgramParameter(this.program, WebGLRenderingContext.LINK_STATUS)) {
	                var errorLog = this.gl.getProgramInfoLog(this.program);
	                throw new Error("LINK FAILED\n" + errorLog);
	            }
	            this.valid = true;
	        }
	        /**
	         * Use this program for drawing.
	         */

	    }, {
	        key: "use",
	        value: function use() {
	            if (!this.isLastUsed) {
	                this.gl.useProgram(this.program);
	            }
	            this.uniforms.onUse();
	        }
	        /**
	         * Destroy this instance.
	         */

	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Program.prototype.__proto__ || Object.getPrototypeOf(Program.prototype), "destroy", this).call(this);
	            this.gl.deleteProgram(this.program);
	        }
	        /**
	         * Fetch attribute location from this program.
	         * @param  {string} variableName [description]
	         * @return {number}              [description]
	         */

	    }, {
	        key: "findAttributeLocation",
	        value: function findAttributeLocation(variableName) {
	            if (this._attributeLocations[variableName] === void 0) {
	                this._attributeLocations[variableName] = this.gl.getAttribLocation(this.program, variableName);
	                this._safeEnableVertexAttribArray(this._attributeLocations[variableName]);
	                return this._attributeLocations[variableName];
	            } else {
	                return this._attributeLocations[variableName];
	            }
	        }
	        /**
	         * Fetch uniform location from this program
	         * @param  {string}               variableName [description]
	         * @return {WebGLUniformLocation}              [description]
	         */

	    }, {
	        key: "findUniformLocation",
	        value: function findUniformLocation(variableName) {
	            var location = this._uniformLocations[variableName];
	            if (location === void 0) {
	                return this._uniformLocations[variableName] = this.gl.getUniformLocation(this.program, variableName);
	            } else {
	                return location;
	            }
	        }
	    }, {
	        key: "_safeEnableVertexAttribArray",
	        value: function _safeEnableVertexAttribArray(location) {
	            if (location < 0) {
	                return;
	            }
	            this.gl.enableVertexAttribArray(location);
	        }
	    }, {
	        key: "isLastUsed",
	        get: function get() {
	            return _ResourceCache2.default.useProgramCheck(this.gl, this.program);
	        }
	    }]);

	    return Program;
	}(_ResourceBase3.default);

	exports.default = Program;

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ResourceCache = exports.ResourceCache = function () {
	    function ResourceCache() {
	        _classCallCheck(this, ResourceCache);

	        this._lastUsedPrograms = new Map();
	    }
	    /**
	     * Save the specified WebGLProgram as last used program.
	     * And check the specified program was used last time.
	     */


	    _createClass(ResourceCache, [{
	        key: "useProgramCheck",
	        value: function useProgramCheck(gl, program) {
	            if (this._lastUsedPrograms.get(gl) === program) {
	                return true;
	            }
	            this._lastUsedPrograms.set(gl, program);
	            return false;
	        }
	    }]);

	    return ResourceCache;
	}();

	exports.default = new ResourceCache();

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UniformProxy = function () {
	    function UniformProxy(program) {
	        _classCallCheck(this, UniformProxy);

	        this.program = program;
	        this._currentTextureRegister = 0;
	        this._gl = program.gl;
	    }

	    _createClass(UniformProxy, [{
	        key: "uniformBool",
	        value: function uniformBool(variableName, val) {
	            var _this = this;

	            this._pass(variableName, function (l) {
	                return _this._gl.uniform1i(l, val ? 1 : 0);
	            });
	        }
	    }, {
	        key: "uniformMatrix",
	        value: function uniformMatrix(variableName, mat) {
	            var _this2 = this;

	            this._pass(variableName, function (l) {
	                return _this2._gl.uniformMatrix4fv(l, false, mat.rawElements);
	            });
	        }
	    }, {
	        key: "uniformMatrixArray",
	        value: function uniformMatrixArray(variableName, matricies) {
	            var _this3 = this;

	            var length = matricies.length / 16;

	            var _loop = function _loop(i) {
	                _this3._passAsArray(variableName, i, function (l) {
	                    return _this3._gl.uniformMatrix4fv(l, false, new Float32Array(matricies.buffer, matricies.byteOffset + i * 64));
	                });
	            };

	            for (var i = 0; i < length; i++) {
	                _loop(i);
	            }
	        }
	    }, {
	        key: "uniformFloat",
	        value: function uniformFloat(variableName, val) {
	            var _this4 = this;

	            this._pass(variableName, function (l) {
	                return _this4._gl.uniform1f(l, val);
	            });
	        }
	    }, {
	        key: "uniformFloatArray",
	        value: function uniformFloatArray(variableName, val) {
	            var _this5 = this;

	            this._pass(variableName, function (l) {
	                return _this5._gl.uniform1fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformInt",
	        value: function uniformInt(variableName, val) {
	            var _this6 = this;

	            this._pass(variableName, function (l) {
	                return _this6._gl.uniform1i(l, val);
	            });
	        }
	    }, {
	        key: "uniformVector2",
	        value: function uniformVector2(variableName, val) {
	            var _this7 = this;

	            this._pass(variableName, function (l) {
	                return _this7._gl.uniform2f(l, val.X, val.Y);
	            });
	        }
	    }, {
	        key: "uniformIntVector2",
	        value: function uniformIntVector2(variableName, val) {
	            var _this8 = this;

	            this._pass(variableName, function (l) {
	                return _this8._gl.uniform2i(l, val.X, val.Y);
	            });
	        }
	    }, {
	        key: "uniformVector2Array",
	        value: function uniformVector2Array(variableName, val) {
	            var _this9 = this;

	            this._pass(variableName, function (l) {
	                return _this9._gl.uniform2fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformVector3",
	        value: function uniformVector3(variableName, val) {
	            var _this10 = this;

	            this._pass(variableName, function (l) {
	                return _this10._gl.uniform3f(l, val.X, val.Y, val.Z);
	            });
	        }
	    }, {
	        key: "uniformIntVector3",
	        value: function uniformIntVector3(variableName, val) {
	            var _this11 = this;

	            this._pass(variableName, function (l) {
	                return _this11._gl.uniform3i(l, val.X, val.Y, val.Z);
	            });
	        }
	    }, {
	        key: "uniformVector3Array",
	        value: function uniformVector3Array(variableName, val) {
	            var _this12 = this;

	            this._pass(variableName, function (l) {
	                return _this12._gl.uniform3fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformColor3",
	        value: function uniformColor3(variableName, val) {
	            var _this13 = this;

	            this._pass(variableName, function (l) {
	                return _this13._gl.uniform3f(l, val.R, val.G, val.B);
	            });
	        }
	    }, {
	        key: "uniformVector4",
	        value: function uniformVector4(variableName, val) {
	            var _this14 = this;

	            this._pass(variableName, function (l) {
	                return _this14._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
	            });
	        }
	    }, {
	        key: "uniformIntVector4",
	        value: function uniformIntVector4(variableName, val) {
	            var _this15 = this;

	            this._pass(variableName, function (l) {
	                return _this15._gl.uniform4f(l, val.X, val.Y, val.Z, val.W);
	            });
	        }
	    }, {
	        key: "uniformVector4Array",
	        value: function uniformVector4Array(variableName, val) {
	            var _this16 = this;

	            this._pass(variableName, function (l) {
	                return _this16._gl.uniform4fv(l, val);
	            });
	        }
	    }, {
	        key: "uniformColor4",
	        value: function uniformColor4(variableName, val) {
	            var _this17 = this;

	            this._pass(variableName, function (l) {
	                return _this17._gl.uniform4f(l, val.R, val.G, val.B, val.A);
	            });
	        }
	    }, {
	        key: "uniformTexture2D",
	        value: function uniformTexture2D(variableName, val) {
	            if (val.valid) {
	                val.register(this._currentTextureRegister);
	                this.uniformInt(variableName, this._currentTextureRegister);
	                this._currentTextureRegister++;
	            } else {
	                console.warn("The texture assigned to '" + variableName + "' is not valid.");
	            }
	        }
	    }, {
	        key: "onUse",
	        value: function onUse() {
	            this._currentTextureRegister = 0;
	        }
	    }, {
	        key: "_pass",
	        value: function _pass(variableName, act) {
	            var location = this.program.findUniformLocation(variableName);
	            if (location) {
	                act(location);
	            }
	        }
	    }, {
	        key: "_passAsArray",
	        value: function _passAsArray(variableName, index, act) {
	            var location = this.program.findUniformLocation(variableName + "[" + index + "]");
	            if (location) {
	                act(location);
	            }
	        }
	    }]);

	    return UniformProxy;
	}();

	exports.default = UniformProxy;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HashCalculator = __webpack_require__(38);

	var _HashCalculator2 = _interopRequireDefault(_HashCalculator);

	var _Shader2 = __webpack_require__(54);

	var _Shader3 = _interopRequireDefault(_Shader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Provides abstraction of shader instance.
	 * If specified shader source was instanced already, delegate actual instance.
	 * And counts reference of shader and if that shader was released and the count is zero, this shader resource would be deleted automatically.
	 *
	 * DO NOT instanciate this class directly. Use getShader method instead.
	 */
	var ManagedShader = function (_Shader) {
	    _inherits(ManagedShader, _Shader);

	    function ManagedShader(gl, type, sourceCode, hash) {
	        _classCallCheck(this, ManagedShader);

	        var _this = _possibleConstructorReturn(this, (ManagedShader.__proto__ || Object.getPrototypeOf(ManagedShader)).call(this, gl, type, sourceCode));

	        _this.type = type;
	        _this.sourceCode = sourceCode;
	        _this.hash = hash;
	        _this._referenceCount = 0;
	        return _this;
	    }
	    /**
	     * Obtain a reference to shader.
	     * @param  {WebGLRenderingContext} gl     [description]
	     * @param  {number}                type   [description]
	     * @param  {string}                shader [description]
	     * @return {ManagedShader}                [description]
	     */


	    _createClass(ManagedShader, [{
	        key: "release",

	        /**
	         * Release shader instance from reference.
	         * Do not call this method dupelicately per a getShader call.
	         *
	         * That would make this shader disposed unintendedly.
	         */
	        value: function release() {
	            this._referenceCount--;
	            if (this._referenceCount === 0) {
	                this.destroy();
	                ManagedShader._managedShaders.get(this.gl)[this.hash] = void 0;
	            }
	        }
	    }], [{
	        key: "getShader",
	        value: function getShader(gl, type, shader) {
	            if (!ManagedShader._managedShaders.has(gl)) {
	                ManagedShader._managedShaders.set(gl, {});
	            }
	            var shaders = ManagedShader._managedShaders.get(gl);
	            var hash = _HashCalculator2.default.calcHash(shader + type);
	            if (shaders[hash] === void 0) {
	                shaders[hash] = new ManagedShader(gl, type, shader, hash);
	            }
	            shaders[hash]._referenceCount++;
	            return shaders[hash];
	        }
	    }]);

	    return ManagedShader;
	}(_Shader3.default);

	exports.default = ManagedShader;

	ManagedShader._managedShaders = new Map();

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ResourceBase2 = __webpack_require__(24);

	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Shader = function (_ResourceBase) {
	    _inherits(Shader, _ResourceBase);

	    function Shader(gl, type, sourceCode) {
	        _classCallCheck(this, Shader);

	        var _this = _possibleConstructorReturn(this, (Shader.__proto__ || Object.getPrototypeOf(Shader)).call(this, gl));

	        _this.type = type;
	        _this.sourceCode = sourceCode;
	        _this.shader = gl.createShader(type);
	        if (sourceCode) {
	            _this.update(sourceCode);
	        }
	        return _this;
	    }

	    _createClass(Shader, [{
	        key: "update",
	        value: function update(source) {
	            this.gl.shaderSource(this.shader, source);
	            this.gl.compileShader(this.shader);
	            if (!this.gl.getShaderParameter(this.shader, WebGLRenderingContext.COMPILE_STATUS)) {
	                throw new Error("Compiling shader failed.\nSourceCode:\n" + this._insertLineNumbers(source) + "\n\nErrorCode:" + this.gl.getShaderInfoLog(this.shader));
	            }
	            this.sourceCode = source;
	            this.valid = true;
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Shader.prototype.__proto__ || Object.getPrototypeOf(Shader.prototype), "destroy", this).call(this);
	            this.gl.deleteShader(this.shader);
	        }
	    }, {
	        key: "_insertLineNumbers",
	        value: function _insertLineNumbers(source) {
	            source = "1:" + source;
	            var lN = 2;
	            for (var i = 0; i < source.length; i++) {
	                var c = source.charAt(i);
	                if (c === '\n') {
	                    source = source.substring(0, i + 1) + (lN + ":") + source.substring(i + 1, source.length - 1);
	                    i++;
	                    lN++;
	                }
	            }
	            return source;
	        }
	    }]);

	    return Shader;
	}(_ResourceBase3.default);

	exports.default = Shader;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Vector = __webpack_require__(14);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _AABB = __webpack_require__(56);

	var _AABB2 = _interopRequireDefault(_AABB);

	var _Buffer = __webpack_require__(57);

	var _Buffer2 = _interopRequireDefault(_Buffer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * The geometry class for managing buffer resource
	 */
	var Geometry = function () {
	    function Geometry(gl) {
	        _classCallCheck(this, Geometry);

	        this.gl = gl;
	        /**
	         * Vertex buffer
	         * @type {Buffer[]}
	         */
	        this.buffers = [];
	        this.indices = {};
	        this.accessors = {};
	        this.aabb = new _AABB2.default([_Vector2.default.Zero]);
	    }

	    _createClass(Geometry, [{
	        key: "addAttributes",
	        value: function addAttributes(buffer, accessors) {
	            var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.STATIC_DRAW;

	            buffer = this._ensureToBeVertexBuffer(buffer, usage);
	            var index = this.buffers.length;
	            this.buffers.push(buffer);
	            for (var semantic in accessors) {
	                var accessor = accessors[semantic];
	                accessor.bufferIndex = index;
	                if (accessor.size === void 0) {
	                    throw new Error("Accessor specified with the semantics \"" + semantic + "\" is not containing size as paranmeter.");
	                }
	                if (accessor.type === void 0) {
	                    accessor.type = WebGLRenderingContext.FLOAT;
	                }
	                if (accessor.stride === void 0) {
	                    accessor.stride = accessor.size * this._attribTypeToByteSize(accessor.type);
	                }
	                if (accessor.offset === void 0) {
	                    accessor.offset = 0;
	                }
	                this.accessors[semantic] = accessor;
	            }
	        }
	    }, {
	        key: "addIndex",
	        value: function addIndex(indexName, buffer) {
	            var topology = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.TRIANGLES;
	            var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	            var count = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	            var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

	            if (!count) {
	                if (buffer instanceof _Buffer2.default || buffer instanceof ArrayBuffer || buffer instanceof DataView) {
	                    throw new Error("The argument 'count' is necessary if you specified buffer with an instance of Buffer or ArrayBuffer");
	                } else {
	                    count = buffer["length"];
	                }
	            }
	            if (type === 0) {
	                type = this._indexTypeFromCount(count);
	            }
	            buffer = this._ensureToBeIndexBuffer(buffer, type);
	            this.indices[indexName] = {
	                byteOffset: offset,
	                byteSize: this._indexTypeToByteSize(type),
	                type: type,
	                topology: topology,
	                count: count,
	                index: buffer
	            };
	        }
	    }, {
	        key: "drawByDefault",
	        value: function drawByDefault(indexName, attribNames, program) {
	            var _this = this;

	            var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.MAX_VALUE;
	            var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

	            attribNames.forEach(function (name) {
	                Geometry.bindBufferToAttribute(_this, program, name, name);
	            });
	            Geometry.drawWithCurrentVertexBuffer(this, indexName, count, offset);
	        }
	        /**
	         * bind a vertex buffer to specified attribute variable.
	         * @param  {Geometry} geometry      [description]
	         * @param  {Program}  program       [description]
	         * @param  {string}   attributeName [description]
	         * @param  {string}   semantics    [description]
	         * @return {boolean}                [description]
	         */

	    }, {
	        key: "_ensureToBeVertexBuffer",

	        /**
	         * Make sure buffer sources converted into Buffer
	         * @param  {Buffer|BufferSource|number[]} buffer [description]
	         * @return {Buffer}                              [description]
	         */
	        value: function _ensureToBeVertexBuffer(buffer, usage) {
	            if (!(buffer instanceof _Buffer2.default)) {
	                var bufferSource = buffer;
	                if (Array.isArray(bufferSource)) {
	                    bufferSource = new Float32Array(bufferSource);
	                }
	                buffer = new _Buffer2.default(this.gl, WebGLRenderingContext.ARRAY_BUFFER, usage);
	                buffer.update(bufferSource);
	            }
	            return buffer;
	        }
	        /**
	         * Make sure buffer sources converted into Buffer
	         * @param  {Buffer|BufferSource|number[]} buffer [description]
	         * @return {Buffer}                              [description]
	         */

	    }, {
	        key: "_ensureToBeIndexBuffer",
	        value: function _ensureToBeIndexBuffer(buffer, type) {
	            if (!(buffer instanceof _Buffer2.default)) {
	                var bufferSource = buffer;
	                if (Array.isArray(bufferSource)) {
	                    bufferSource = new (this._indexTypeToArrayConstructor(type))(bufferSource);
	                }
	                buffer = new _Buffer2.default(this.gl, WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, WebGLRenderingContext.STATIC_DRAW);
	                buffer.update(bufferSource);
	            } else {
	                if (buffer.target !== WebGLRenderingContext.ELEMENT_ARRAY_BUFFER) {
	                    throw new Error("The usage of buffer specified as index buffer is not ELEMENT_ARRAY_BUFFER");
	                }
	            }
	            return buffer;
	        }
	    }, {
	        key: "_indexTypeFromCount",
	        value: function _indexTypeFromCount(count) {
	            if (count < 256) {
	                return WebGLRenderingContext.UNSIGNED_BYTE;
	            } else if (count < 65536) {
	                return WebGLRenderingContext.UNSIGNED_SHORT;
	            } else if (count < 4294967296) {
	                return WebGLRenderingContext.UNSIGNED_INT;
	            } else {
	                throw new Error("Index count exceeds 4,294,967,296. WebGL can not handle such a big index buffer");
	            }
	        }
	    }, {
	        key: "_indexTypeToArrayConstructor",
	        value: function _indexTypeToArrayConstructor(type) {
	            switch (type) {
	                case WebGLRenderingContext.UNSIGNED_BYTE:
	                    return Uint8Array;
	                case WebGLRenderingContext.UNSIGNED_SHORT:
	                    return Uint16Array;
	                case WebGLRenderingContext.UNSIGNED_INT:
	                    return Uint32Array;
	                default:
	                    throw new Error("Unsupported index type");
	            }
	        }
	    }, {
	        key: "_indexTypeToByteSize",
	        value: function _indexTypeToByteSize(type) {
	            switch (type) {
	                case WebGLRenderingContext.UNSIGNED_BYTE:
	                    return 1;
	                case WebGLRenderingContext.UNSIGNED_SHORT:
	                    return 2;
	                case WebGLRenderingContext.UNSIGNED_INT:
	                    return 4;
	                default:
	                    throw new Error("Unsupported index type");
	            }
	        }
	    }, {
	        key: "_attribTypeToByteSize",
	        value: function _attribTypeToByteSize(type) {
	            switch (type) {
	                case WebGLRenderingContext.FLOAT:
	                    return 4;
	                default:
	                    throw new Error("Unsupported attribute variable type \"" + type + "\"");
	            }
	        }
	    }], [{
	        key: "bindBufferToAttribute",
	        value: function bindBufferToAttribute(geometry, program, attributeName, semantics) {
	            var index = program.findAttributeLocation(attributeName);
	            if (index < 0) {
	                return false;
	            }
	            var accessors = geometry.accessors[semantics];
	            if (!accessors) {
	                throw new Error("Specified buffer \"" + semantics + " was not found on this geometry while attempt to bind \"" + attributeName + "\" of attribute variables.\n\n\t  All of the vertex buffer available on this geometry is " + Object.keys(geometry.accessors) + "\"");
	            }
	            var buffer = geometry.buffers[accessors.bufferIndex];
	            buffer.bind();
	            program.gl.vertexAttribPointer(index, accessors.size, accessors.type, false, accessors.stride, accessors.offset);
	            return true;
	        }
	    }, {
	        key: "drawWithCurrentVertexBuffer",
	        value: function drawWithCurrentVertexBuffer(geometry, indexName) {
	            var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE;
	            var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	            var targetIndex = geometry.indices[indexName];
	            if (targetIndex === void 0) {
	                throw new Error("Specified index buffer \"" + indexName + "\" was not found on this geometry.All of the index buffer available on this geometry is \"" + Object.keys(geometry.indices) + "\"");
	            }
	            targetIndex.index.bind();
	            targetIndex.index.gl.drawElements(targetIndex.topology, Math.min(targetIndex.count, count), targetIndex.type, Math.min(offset * targetIndex.byteSize + targetIndex.byteOffset, (targetIndex.count - 1) * targetIndex.byteSize));
	        }
	    }]);

	    return Geometry;
	}();

	exports.default = Geometry;

	Geometry._lastGeometry = new Map();

/***/ },
/* 56 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.AABB;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ResourceBase2 = __webpack_require__(24);

	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Buffer = function (_ResourceBase) {
	    _inherits(Buffer, _ResourceBase);

	    function Buffer(gl) {
	        var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : WebGLRenderingContext.ARRAY_BUFFER;
	        var usage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : WebGLRenderingContext.STATIC_DRAW;

	        _classCallCheck(this, Buffer);

	        var _this = _possibleConstructorReturn(this, (Buffer.__proto__ || Object.getPrototypeOf(Buffer)).call(this, gl));

	        _this.target = target;
	        _this.usage = usage;
	        _this.buffer = gl.createBuffer();
	        return _this;
	    }

	    _createClass(Buffer, [{
	        key: "update",
	        value: function update(length, subBuffer) {
	            this.bind();
	            if (subBuffer) {
	                if (!this.valid) {
	                    this.gl.bufferData(this.target, length + subBuffer.byteLength, this.usage);
	                }
	                this.gl.bufferSubData(this.target, length, subBuffer);
	            } else {
	                if (typeof length === "number") {
	                    this.gl.bufferData(this.target, length, this.usage);
	                } else {
	                    this.gl.bufferData(this.target, length, this.usage);
	                }
	            }
	            this.valid = true;
	        }
	    }, {
	        key: "bind",
	        value: function bind() {
	            this.gl.bindBuffer(this.target, this.buffer);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(Buffer.prototype.__proto__ || Object.getPrototypeOf(Buffer.prototype), "destroy", this).call(this);
	            this.gl.deleteBuffer(this.buffer);
	        }
	    }]);

	    return Buffer;
	}(_ResourceBase3.default);

	exports.default = Buffer;

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UniformResolverRegistry = exports.UniformResolverRegistry = function () {
	    function UniformResolverRegistry() {
	        _classCallCheck(this, UniformResolverRegistry);

	        this._generators = {};
	    }

	    _createClass(UniformResolverRegistry, [{
	        key: "add",
	        value: function add(semantic, generator) {
	            if (typeof generator !== "function") {
	                throw new Error("secound argument of add must be function");
	            }
	            this._generators[semantic.toUpperCase()] = generator;
	        }
	    }, {
	        key: "generateRegisterers",
	        value: function generateRegisterers(material, passInfo) {
	            var registerers = [],
	                disposers = [];
	            for (var key in passInfo.uniforms) {
	                var valueInfo = passInfo.uniforms[key];
	                var semantic = valueInfo.semantic;
	                var registeredGenerator = this._generators[semantic];
	                if (!registeredGenerator) {
	                    throw new Error("There was no suitable registerer for specified semantic " + semantic);
	                }
	                var registerer = registeredGenerator(valueInfo, material);
	                if (typeof registerer === "function") {
	                    registerers.push(registerer);
	                } else {
	                    registerers.push(registerer.register);
	                    if (registerer.dispose) {
	                        disposers.push(registerer.dispose);
	                    }
	                }
	            }
	            return {
	                registerers: registerers,
	                disposers: disposers
	            };
	        }
	    }]);

	    return UniformResolverRegistry;
	}();

	exports.default = new UniformResolverRegistry();

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "/*Header start*/\n// helper macros\n#ifdef FS\n  #define FS_PREC(prec,type) precision prec type;\n  #define VS_PREC(prec,type)\n#endif\n#ifdef VS\n#define VS_PREC(prec,type) precision prec type;\n#define FS_PREC(prec,type)\n#endif\n// constants\n#define PI 3.141592653589793\n#define E 2.718281828459045\n#define LN2 0.6931471805599453\n#define LN10 2.302585092994046\n#define LOG2E 1.4426950408889634\n#define LOG10E 0.4342944819032518\n#define SQRT2 1.4142135623730951\n#define SQRT1_2 0.7071067811865476\n\n/*Header end*/\n"

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grimoirejs = __webpack_require__(8);

	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

	var _MaterialFactory = __webpack_require__(36);

	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MaterialManagerComponent = function (_Component) {
	    _inherits(MaterialManagerComponent, _Component);

	    function MaterialManagerComponent() {
	        _classCallCheck(this, MaterialManagerComponent);

	        return _possibleConstructorReturn(this, (MaterialManagerComponent.__proto__ || Object.getPrototypeOf(MaterialManagerComponent)).apply(this, arguments));
	    }

	    _createClass(MaterialManagerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var ns = _grimoirejs2.default.ns(this.name.ns);
	            this.companion.set(ns("MaterialFactory"), new _MaterialFactory2.default(this.companion.get("gl")));
	        }
	    }]);

	    return MaterialManagerComponent;
	}(_Component3.default);

	exports.default = MaterialManagerComponent;

	MaterialManagerComponent.attributes = {};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SceneComponent = __webpack_require__(19);

	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

	var _MaterialContainerComponent = __webpack_require__(33);

	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

	var _TransformComponent = __webpack_require__(17);

	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _GLM = __webpack_require__(12);

	var _GLM2 = _interopRequireDefault(_GLM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var vec3 = _GLM2.default.vec3;

	var MeshRenderer = function (_Component) {
	    _inherits(MeshRenderer, _Component);

	    function MeshRenderer() {
	        _classCallCheck(this, MeshRenderer);

	        var _this = _possibleConstructorReturn(this, (MeshRenderer.__proto__ || Object.getPrototypeOf(MeshRenderer)).apply(this, arguments));

	        _this._priortyCalcCache = new Float32Array(3);
	        return _this;
	    }
	    /**
	    * Find scene tag recursively.
	    * @param  {GomlNode}       node [the node to searching currently]
	    * @return {SceneComponent}      [the scene component found]
	    */


	    _createClass(MeshRenderer, [{
	        key: "getRenderingPriorty",
	        value: function getRenderingPriorty(camera, cameraMoved, lastPriorty) {
	            vec3.add(this._priortyCalcCache, camera.transform.globalPosition.rawElements, this._geometry.aabb.Center.rawElements);
	            vec3.sub(this._priortyCalcCache, this._priortyCalcCache, this._transformComponent.globalPosition.rawElements);
	            return this._materialContainer.getDrawPriorty(vec3.sqrLen(this._priortyCalcCache)); // Obtains distance between camera and center of aabb
	        }
	    }, {
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("targetBuffer").boundTo("_targetBuffer");
	            this.getAttributeRaw("layer").boundTo("_layer");
	            this.getAttributeRaw("drawOffset").boundTo("_drawOffset");
	            this.getAttributeRaw("drawCount").boundTo("_drawCount");
	            this.getAttributeRaw("geometry").boundTo("_geometry");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._transformComponent = this.node.getComponent(_TransformComponent2.default);
	            this._materialContainer = this.node.getComponent(_MaterialContainerComponent2.default);
	            this._containedScene = MeshRenderer._findContainedScene(this.node);
	            this._containedScene.queueRegistory.addRenderable(this);
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this._containedScene.queueRegistory.removeRenderable(this);
	        }
	    }, {
	        key: "render",
	        value: function render(args) {
	            if (!this.node.isActive || !this.enabled || this._layer !== args.layer) {
	                return;
	            }
	            if (!this._geometry || !args.material && !this._materialContainer.material) {
	                return; // material is not instanciated yet.
	            }
	            var renderArgs = {
	                targetBuffer: this._targetBuffer,
	                geometry: this._geometry,
	                attributeValues: null,
	                camera: args.camera,
	                transform: this._transformComponent,
	                buffers: args.buffers,
	                viewport: args.viewport,
	                drawCount: this._drawCount,
	                drawOffset: this._drawOffset,
	                sceneDescription: args.sceneDescription,
	                technique: args.technique
	            };
	            renderArgs.attributeValues = this._materialContainer.materialArgs;
	            this._materialContainer.material.draw(renderArgs);
	            this.node.emit("render", args);
	        }
	    }], [{
	        key: "_findContainedScene",
	        value: function _findContainedScene(node) {
	            if (node.parent) {
	                var scene = node.parent.getComponent(_SceneComponent2.default);
	                if (scene) {
	                    return scene;
	                } else {
	                    return MeshRenderer._findContainedScene(node.parent);
	                }
	            } else {
	                return null;
	            }
	        }
	    }]);

	    return MeshRenderer;
	}(_Component3.default);

	exports.default = MeshRenderer;

	MeshRenderer.attributes = {
	    geometry: {
	        converter: "Geometry",
	        default: "quad"
	    },
	    targetBuffer: {
	        converter: "String",
	        default: "default"
	    },
	    layer: {
	        converter: "String",
	        default: "default"
	    },
	    drawCount: {
	        converter: "Number",
	        default: Number.MAX_VALUE
	    },
	    drawOffset: {
	        converter: "Number",
	        default: 0
	    }
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Vector = __webpack_require__(14);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Quaternion = __webpack_require__(18);

	var _Quaternion2 = _interopRequireDefault(_Quaternion);

	var _Matrix = __webpack_require__(15);

	var _Matrix2 = _interopRequireDefault(_Matrix);

	var _TransformComponent = __webpack_require__(17);

	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MouseCameraControlComponent = function (_Component) {
	    _inherits(MouseCameraControlComponent, _Component);

	    function MouseCameraControlComponent() {
	        _classCallCheck(this, MouseCameraControlComponent);

	        var _this = _possibleConstructorReturn(this, (MouseCameraControlComponent.__proto__ || Object.getPrototypeOf(MouseCameraControlComponent)).apply(this, arguments));

	        _this._lastScreenPos = null;
	        _this._xsum = 0;
	        _this._ysum = 0;
	        return _this;
	    }

	    _createClass(MouseCameraControlComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("rotateSpeed").boundTo("_rotateSpeed");
	            this.getAttributeRaw("zoomSpeed").boundTo("_zoomSpeed");
	            this.getAttributeRaw("moveSpeed").boundTo("_moveSpeed");
	            this.getAttributeRaw("origin").boundTo("_origin");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            var center = this.getAttribute("center");
	            var distance = null;
	            if (center !== null) {
	                console.warn("The attribute 'center' is deprecated now. This attribute would be removed on next version. Use 'distance' instead.");
	                distance = center;
	            } else {
	                distance = this.getAttribute("distance");
	            }
	            this._transform = this.node.getComponent(_TransformComponent2.default);
	            this._initialRight = _Vector2.default.copy(this._transform.right);
	            this._initialUp = _Vector2.default.copy(this._transform.up);
	            this._initialDirection = _Vector2.default.copy(this._transform.forward.negateThis());
	            this._initialRotation = this._transform.localRotation;
	            var origin = this.getAttribute("origin");
	            if (distance !== null) {
	                this._origin = this._transform.localPosition.addWith(this._transform.forward.multiplyWith(distance));
	            } else {
	                this._origin = origin;
	            }
	            var canvasElement = this.companion.get("canvasElement");
	            canvasElement.addEventListener("mousemove", this._mouseMove.bind(this));
	            canvasElement.addEventListener("contextmenu", this._contextMenu.bind(this));
	            canvasElement.addEventListener("wheel", this._mouseWheel.bind(this));
	        }
	    }, {
	        key: "_contextMenu",
	        value: function _contextMenu(m) {
	            m.preventDefault();
	        }
	    }, {
	        key: "_mouseMove",
	        value: function _mouseMove(m) {
	            if (this._lastScreenPos === null) {
	                this._lastScreenPos = {
	                    x: m.screenX,
	                    y: m.screenY
	                };
	                return;
	            }
	            var updated = false;
	            var diffX = m.screenX - this._lastScreenPos.x;
	            var diffY = m.screenY - this._lastScreenPos.y;
	            var distance = this._transform.localPosition.subtractWith(this._origin).magnitude;
	            if (this._checkButtonPress(m, true)) {
	                this._xsum += diffX;
	                this._ysum += diffY;
	                this._ysum = Math.min(Math.PI * 50, this._ysum);
	                this._ysum = Math.max(-Math.PI * 50, this._ysum);
	                updated = true;
	            }
	            if (this._checkButtonPress(m, false)) {
	                var moveX = -diffX * this._moveSpeed * 0.01;
	                var moveY = diffY * this._moveSpeed * 0.01;
	                this._origin = this._origin.addWith(this._transform.right.multiplyWith(moveX)).addWith(this._transform.up.multiplyWith(moveY));
	                distance = this._transform.localPosition.subtractWith(this._origin).magnitude;
	                updated = true;
	            }
	            if (updated) {
	                // rotate excution
	                var rotationVartical = _Quaternion2.default.angleAxis(-this._xsum * this._rotateSpeed * 0.01, this._initialUp);
	                var rotationHorizontal = _Quaternion2.default.angleAxis(-this._ysum * this._rotateSpeed * 0.01, this._initialRight);
	                var rotation = _Quaternion2.default.multiply(rotationVartical, rotationHorizontal);
	                var rotationMat = _Matrix2.default.rotationQuaternion(rotation);
	                var direction = _Matrix2.default.transformNormal(rotationMat, this._initialDirection);
	                this._transform.localPosition = this._origin.addWith(_Vector2.default.normalize(direction).multiplyWith(distance));
	                this._transform.localRotation = _Quaternion2.default.multiply(this._initialRotation, rotation);
	            }
	            this._lastScreenPos = {
	                x: m.screenX,
	                y: m.screenY
	            };
	        }
	    }, {
	        key: "_checkButtonPress",
	        value: function _checkButtonPress(m, isRight) {
	            if ('buttons' in m) {
	                if (isRight) {
	                    return (m.buttons & 1) > 0;
	                } else {
	                    return (m.buttons & 2) > 0;
	                }
	            } else {
	                if (isRight) {
	                    return m.which === 1;
	                } else {
	                    return m.which === 3;
	                }
	            }
	        }
	    }, {
	        key: "_mouseWheel",
	        value: function _mouseWheel(m) {
	            var dir = _Vector2.default.normalize(_Vector2.default.subtract(this._transform.localPosition, this._origin));
	            var moveDist = -m.deltaY * this._zoomSpeed * 0.05;
	            var distance = _Vector2.default.subtract(this._origin, this._transform.localPosition).magnitude;
	            var nextDist = Math.max(1, distance - moveDist);
	            this._transform.localPosition = this._origin.addWith(dir.multiplyWith(nextDist));
	            m.preventDefault();
	        }
	    }]);

	    return MouseCameraControlComponent;
	}(_Component3.default);

	exports.default = MouseCameraControlComponent;

	MouseCameraControlComponent.attributes = {
	    rotateSpeed: {
	        default: 1,
	        converter: "Number"
	    },
	    zoomSpeed: {
	        default: 1,
	        converter: "Number"
	    },
	    moveSpeed: {
	        default: 1,
	        converter: "Number"
	    },
	    center: {
	        default: null,
	        converter: "Number"
	    },
	    distance: {
	        default: null,
	        converter: "Number"
	    },
	    origin: {
	        default: "0,0,0",
	        converter: "Vector3"
	    }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _RenderBuffer = __webpack_require__(64);

	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _TextureSizeCalculator = __webpack_require__(65);

	var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RenderBufferComponent = function (_Component) {
	    _inherits(RenderBufferComponent, _Component);

	    function RenderBufferComponent() {
	        _classCallCheck(this, RenderBufferComponent);

	        return _possibleConstructorReturn(this, (RenderBufferComponent.__proto__ || Object.getPrototypeOf(RenderBufferComponent)).apply(this, arguments));
	    }

	    _createClass(RenderBufferComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            this.buffer = new _RenderBuffer2.default(this.companion.get("gl"));
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this.buffer.destroy();
	            this.buffer = null;
	        }
	    }, {
	        key: "$resizeBuffer",
	        value: function $resizeBuffer(arg) {
	            var name = this.getAttribute("name");
	            if (!name) {
	                throw new Error("Attribute 'name' must be specified.");
	            }
	            var newSize = _TextureSizeCalculator2.default.getPow2Size(arg.width, arg.height);
	            this.buffer.update(WebGLRenderingContext.DEPTH_COMPONENT16, newSize.width, newSize.height);
	            arg.bufferSizes[name] = { width: newSize.width, height: newSize.height };
	            arg.buffers[name] = this.buffer;
	        }
	    }]);

	    return RenderBufferComponent;
	}(_Component3.default);

	exports.default = RenderBufferComponent;

	RenderBufferComponent.attributes = {
	    name: {
	        converter: "String",
	        default: null
	    }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ResourceBase2 = __webpack_require__(24);

	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RenderBuffer = function (_ResourceBase) {
	    _inherits(RenderBuffer, _ResourceBase);

	    function RenderBuffer(gl) {
	        _classCallCheck(this, RenderBuffer);

	        var _this = _possibleConstructorReturn(this, (RenderBuffer.__proto__ || Object.getPrototypeOf(RenderBuffer)).call(this, gl));

	        _this.renderBuffer = gl.createRenderbuffer();
	        return _this;
	    }

	    _createClass(RenderBuffer, [{
	        key: "update",
	        value: function update(format, width, height) {
	            this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, this.renderBuffer);
	            this.gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER, format, width, height);
	            this.valid = true;
	        }
	    }, {
	        key: "bind",
	        value: function bind() {
	            this.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, this.renderBuffer);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.gl.deleteRenderbuffer(this.renderBuffer);
	            _get(RenderBuffer.prototype.__proto__ || Object.getPrototypeOf(RenderBuffer.prototype), "destroy", this).call(this);
	        }
	    }]);

	    return RenderBuffer;
	}(_ResourceBase3.default);

	exports.default = RenderBuffer;

/***/ },
/* 65 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TextureSizeCalculator = function () {
	    function TextureSizeCalculator() {
	        _classCallCheck(this, TextureSizeCalculator);
	    }

	    _createClass(TextureSizeCalculator, null, [{
	        key: "getPow2Size",
	        value: function getPow2Size(width, height) {
	            var nw = Math.pow(2, Math.log(width) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            var nh = Math.pow(2, Math.log(height) / Math.LN2 | 0); // largest 2^n integer that does not exceed s
	            return {
	                width: nw,
	                height: nh
	            };
	        }
	    }]);

	    return TextureSizeCalculator;
	}();

	exports.default = TextureSizeCalculator;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RendererComponent = function (_Component) {
	    _inherits(RendererComponent, _Component);

	    function RendererComponent() {
	        _classCallCheck(this, RendererComponent);

	        var _this = _possibleConstructorReturn(this, (RendererComponent.__proto__ || Object.getPrototypeOf(RendererComponent)).apply(this, arguments));

	        _this._buffers = {};
	        _this._bufferSizes = {};
	        return _this;
	    }

	    _createClass(RendererComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var _this2 = this;

	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	            this._camera = this.getAttribute("camera");
	            this.getAttributeRaw("camera").watch(function (v) {
	                return _this2._camera = v;
	            });
	            this.getAttributeRaw("viewport").watch(function (v) {
	                _this2._viewportSizeGenerator = v;
	                _this2.$resizeCanvas();
	            });
	            this._viewportSizeGenerator = this.getAttribute("viewport");
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            // This should be called after mounting all of tree nodes in children
	            this.$resizeCanvas();
	        }
	    }, {
	        key: "$resizeCanvas",
	        value: function $resizeCanvas() {
	            this._viewportCache = this._viewportSizeGenerator(this._canvas);
	            if (this.node.children.length === 0) {
	                this.node.addChildByName("render-scene", {});
	            }
	            this.node.broadcastMessage("resizeBuffer", {
	                width: this._viewportCache.Width,
	                height: this._viewportCache.Height,
	                buffers: this._buffers,
	                bufferSizes: this._bufferSizes
	            });
	            this.node.broadcastMessage("bufferUpdated", {
	                buffers: this._buffers,
	                bufferSizes: this._bufferSizes
	            });
	        }
	    }, {
	        key: "$renderViewport",
	        value: function $renderViewport(args) {
	            this.node.broadcastMessage("render", {
	                camera: this._camera,
	                viewport: this._viewportCache,
	                bufferSizes: this._bufferSizes,
	                buffers: this._buffers,
	                loopIndex: args.loopIndex
	            });
	        }
	    }]);

	    return RendererComponent;
	}(_Component3.default);

	exports.default = RendererComponent;

	RendererComponent.attributes = {
	    camera: {
	        converter: "Component",
	        default: "camera",
	        target: "Camera"
	    },
	    viewport: {
	        converter: "Viewport",
	        default: "auto"
	    }
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Color = __webpack_require__(68);

	var _Color2 = _interopRequireDefault(_Color);

	var _LoopManagerComponent = __webpack_require__(31);

	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RendererManagerComponent = function (_Component) {
	    _inherits(RendererManagerComponent, _Component);

	    function RendererManagerComponent() {
	        _classCallCheck(this, RendererManagerComponent);

	        return _possibleConstructorReturn(this, (RendererManagerComponent.__proto__ || Object.getPrototypeOf(RendererManagerComponent)).apply(this, arguments));
	    }

	    _createClass(RendererManagerComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("bgColor").boundTo("_bgColor");
	            this.getAttributeRaw("clearDepth").boundTo("_clearDepth");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this.gl = this.companion.get("gl");
	        }
	    }, {
	        key: "$treeInitialized",
	        value: function $treeInitialized() {
	            this.node.getComponent(_LoopManagerComponent2.default).register(this.onloop.bind(this), 1000);
	            if (this.getAttribute("complementRenderer") && this.node.getChildrenByNodeName("renderer").length === 0) {
	                this.node.addChildByName("renderer", {});
	            }
	        }
	    }, {
	        key: "onloop",
	        value: function onloop(loopIndex) {
	            if (this.enabled) {
	                var c = this._bgColor;
	                this.gl.clearColor(c.R, c.G, c.B, c.A);
	                this.gl.clearDepth(this._clearDepth);
	                this.gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
	                this.node.broadcastMessage(1, "renderViewport", {
	                    loopIndex: loopIndex
	                });
	            }
	        }
	    }]);

	    return RendererManagerComponent;
	}(_Component3.default);

	exports.default = RendererManagerComponent;

	RendererManagerComponent.attributes = {
	    bgColor: {
	        default: new _Color2.default(0, 0, 0, 0),
	        converter: "Color4"
	    },
	    clearDepth: {
	        default: 1.0,
	        converter: "Number"
	    },
	    complementRenderer: {
	        default: true,
	        converter: "Boolean"
	    }
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Color4;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MaterialContainerComponent = __webpack_require__(33);

	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

	var _FrameBuffer = __webpack_require__(70);

	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RenderQuadComponent = function (_Component) {
	    _inherits(RenderQuadComponent, _Component);

	    function RenderQuadComponent() {
	        _classCallCheck(this, RenderQuadComponent);

	        return _possibleConstructorReturn(this, (RenderQuadComponent.__proto__ || Object.getPrototypeOf(RenderQuadComponent)).apply(this, arguments));
	    }

	    _createClass(RenderQuadComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            this.getAttributeRaw("targetBuffer").boundTo("_targetBuffer");
	            this.getAttributeRaw("clearColor").boundTo("_clearColor");
	            this.getAttributeRaw("clearColorEnabled").boundTo("_clearColorEnabled");
	            this.getAttributeRaw("clearDepthEnabled").boundTo("_clearDepthEnabled");
	            this.getAttributeRaw("clearDepth").boundTo("_clearDepth");
	            this.getAttributeRaw("technique").boundTo("_technique");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	            var gr = this.companion.get("GeometryRegistory");
	            this._geom = gr.getGeometry("quad");
	            this._materialContainer = this.node.getComponent(_MaterialContainerComponent2.default);
	        }
	    }, {
	        key: "$bufferUpdated",
	        value: function $bufferUpdated(args) {
	            var out = this.getAttribute("out");
	            if (out !== "default") {
	                this._fbo = new _FrameBuffer2.default(this.companion.get("gl"));
	                this._fbo.update(args.buffers[out]);
	                this._fboSize = args.bufferSizes[out];
	            }
	            var depthBuffer = this.getAttribute("depthBuffer");
	            if (depthBuffer && this._fbo) {
	                this._fbo.update(args.buffers[depthBuffer]);
	            }
	        }
	    }, {
	        key: "$render",
	        value: function $render(args) {
	            if (!this._materialContainer.materialReady) {
	                return;
	            }
	            // bound render target
	            if (this._fbo) {
	                this._fbo.bind();
	                this._gl.viewport(0, 0, this._fboSize.width, this._fboSize.height);
	            } else {
	                this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
	                this._gl.viewport(args.viewport.Left, this._canvas.height - args.viewport.Bottom, args.viewport.Width, args.viewport.Height);
	            }
	            // clear buffer if needed
	            if (this._fbo && this._clearColorEnabled) {
	                this._gl.clearColor(this._clearColor.R, this._clearColor.G, this._clearColor.B, this._clearColor.A);
	                this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
	            }
	            if (this._clearDepthEnabled) {
	                this._gl.clearDepth(this._clearDepth);
	                this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
	            }
	            // make rendering argument
	            var renderArgs = {
	                targetBuffer: this._targetBuffer,
	                geometry: this._geom,
	                attributeValues: {},
	                camera: null,
	                transform: null,
	                buffers: args.buffers,
	                viewport: args.viewport,
	                technique: this._technique
	            };
	            renderArgs.attributeValues = this._materialContainer.materialArgs;
	            // do render
	            this._materialContainer.material.draw(renderArgs);
	            this._gl.flush();
	        }
	    }]);

	    return RenderQuadComponent;
	}(_Component3.default);

	exports.default = RenderQuadComponent;

	RenderQuadComponent.attributes = {
	    out: {
	        default: "default",
	        converter: "String"
	    },
	    depthBuffer: {
	        default: null,
	        converter: "String"
	    },
	    targetBuffer: {
	        default: "default",
	        converter: "String"
	    },
	    clearColor: {
	        default: "#0000",
	        converter: "Color4"
	    },
	    clearColorEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepthEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepth: {
	        default: 1.0,
	        converter: "Number"
	    },
	    technique: {
	        default: "default",
	        converter: "String"
	    }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _RenderBuffer = __webpack_require__(64);

	var _RenderBuffer2 = _interopRequireDefault(_RenderBuffer);

	var _Texture2D = __webpack_require__(23);

	var _Texture2D2 = _interopRequireDefault(_Texture2D);

	var _ResourceBase2 = __webpack_require__(24);

	var _ResourceBase3 = _interopRequireDefault(_ResourceBase2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FrameBuffer = function (_ResourceBase) {
	    _inherits(FrameBuffer, _ResourceBase);

	    function FrameBuffer(gl) {
	        _classCallCheck(this, FrameBuffer);

	        var _this = _possibleConstructorReturn(this, (FrameBuffer.__proto__ || Object.getPrototypeOf(FrameBuffer)).call(this, gl));

	        _this.fbo = gl.createFramebuffer();
	        return _this;
	    }

	    _createClass(FrameBuffer, [{
	        key: "update",
	        value: function update(boundTo, level, bindIndex) {
	            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.fbo);
	            if (boundTo instanceof _Texture2D2.default) {
	                if (typeof bindIndex === "undefined") {
	                    bindIndex = 0;
	                }
	                if (typeof level === "undefined") {
	                    level = 0;
	                }
	                this.gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0 + bindIndex, WebGLRenderingContext.TEXTURE_2D, boundTo.texture, level);
	                if (this.gl.checkFramebufferStatus(WebGLRenderingContext.FRAMEBUFFER) !== WebGLRenderingContext.FRAMEBUFFER_COMPLETE) {
	                    throw new Error("INCOMPLETE framebuffer");
	                }
	            } else if (boundTo instanceof _RenderBuffer2.default) {
	                var registerTarget = level;
	                if (typeof level === "undefined") {
	                    registerTarget = WebGLRenderingContext.DEPTH_ATTACHMENT;
	                }
	                this.gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER, registerTarget, WebGLRenderingContext.RENDERBUFFER, boundTo.renderBuffer);
	            }
	            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
	        }
	    }, {
	        key: "bind",
	        value: function bind() {
	            this.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.fbo);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            _get(FrameBuffer.prototype.__proto__ || Object.getPrototypeOf(FrameBuffer.prototype), "destroy", this).call(this);
	            this.gl.deleteFramebuffer(this.fbo);
	        }
	    }]);

	    return FrameBuffer;
	}(_ResourceBase3.default);

	exports.default = FrameBuffer;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _FrameBuffer = __webpack_require__(70);

	var _FrameBuffer2 = _interopRequireDefault(_FrameBuffer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RenderSceneComponent = function (_Component) {
	    _inherits(RenderSceneComponent, _Component);

	    function RenderSceneComponent() {
	        _classCallCheck(this, RenderSceneComponent);

	        return _possibleConstructorReturn(this, (RenderSceneComponent.__proto__ || Object.getPrototypeOf(RenderSceneComponent)).apply(this, arguments));
	    }

	    _createClass(RenderSceneComponent, [{
	        key: "$awake",

	        // messages
	        value: function $awake() {
	            this.getAttributeRaw("layer").boundTo("_layer");
	            this.getAttributeRaw("clearColor").boundTo("_clearColor");
	            this.getAttributeRaw("clearColorEnabled").boundTo("_clearColorEnabled");
	            this.getAttributeRaw("clearDepthEnabled").boundTo("_clearDepthEnabled");
	            this.getAttributeRaw("clearDepth").boundTo("_clearDepth");
	            this.getAttributeRaw("camera").boundTo("_camera");
	            this.getAttributeRaw("technique").boundTo("_technique");
	        }
	    }, {
	        key: "$mount",
	        value: function $mount() {
	            this._gl = this.companion.get("gl");
	            this._canvas = this.companion.get("canvasElement");
	        }
	    }, {
	        key: "$bufferUpdated",
	        value: function $bufferUpdated(args) {
	            var out = this.getAttribute("out");
	            if (out !== "default") {
	                this._fbo = new _FrameBuffer2.default(this.companion.get("gl"));
	                this._fbo.update(args.buffers[out]);
	                this._fboSize = args.bufferSizes[out];
	            }
	            var depthBuffer = this.getAttribute("depthBuffer");
	            if (depthBuffer && this._fbo) {
	                this._fbo.update(args.buffers[depthBuffer]);
	            }
	        }
	    }, {
	        key: "$render",
	        value: function $render(args) {
	            var camera = this._camera ? this._camera : args.camera;
	            if (!camera) {
	                return;
	            }
	            if (this._fbo) {
	                this._fbo.bind();
	                this._gl.viewport(0, 0, this._fboSize.width, this._fboSize.height);
	            } else {
	                this._gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
	                this._gl.viewport(args.viewport.Left, this._canvas.height - args.viewport.Bottom, args.viewport.Width, args.viewport.Height);
	            }
	            // clear buffer if needed
	            if (this._fbo && this._clearColorEnabled) {
	                this._gl.clearColor(this._clearColor.R, this._clearColor.G, this._clearColor.B, this._clearColor.A);
	                this._gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
	            }
	            if (this._clearDepthEnabled) {
	                this._gl.clearDepth(this._clearDepth);
	                this._gl.clear(WebGLRenderingContext.DEPTH_BUFFER_BIT);
	            }
	            args.camera.updateContainedScene(args.loopIndex);
	            args.camera.renderScene({
	                camera: camera,
	                buffers: args.buffers,
	                layer: this._layer,
	                viewport: args.viewport,
	                loopIndex: args.loopIndex,
	                technique: this._technique
	            });
	        }
	    }]);

	    return RenderSceneComponent;
	}(_Component3.default);

	exports.default = RenderSceneComponent;

	RenderSceneComponent.attributes = {
	    layer: {
	        converter: "String",
	        default: "default"
	    },
	    depthBuffer: {
	        default: null,
	        converter: "String"
	    },
	    out: {
	        converter: "String",
	        default: "default"
	    },
	    clearColor: {
	        default: "#0000",
	        converter: "Color4"
	    },
	    clearColorEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepthEnabled: {
	        default: true,
	        converter: "Boolean"
	    },
	    clearDepth: {
	        default: 1.0,
	        converter: "Number"
	    },
	    camera: {
	        default: null,
	        converter: "Component",
	        target: "Camera"
	    },
	    technique: {
	        default: "default",
	        converter: "String"
	    }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Texture2D = __webpack_require__(23);

	var _Texture2D2 = _interopRequireDefault(_Texture2D);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _TextureSizeCalculator = __webpack_require__(65);

	var _TextureSizeCalculator2 = _interopRequireDefault(_TextureSizeCalculator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextureBufferComponent = function (_Component) {
	    _inherits(TextureBufferComponent, _Component);

	    function TextureBufferComponent() {
	        _classCallCheck(this, TextureBufferComponent);

	        return _possibleConstructorReturn(this, (TextureBufferComponent.__proto__ || Object.getPrototypeOf(TextureBufferComponent)).apply(this, arguments));
	    }

	    _createClass(TextureBufferComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            this.buffer = new _Texture2D2.default(this.companion.get("gl"));
	        }
	    }, {
	        key: "$unmount",
	        value: function $unmount() {
	            this.buffer.destroy();
	            this.buffer = null;
	        }
	    }, {
	        key: "$resizeBuffer",
	        value: function $resizeBuffer(arg) {
	            var bufferName = this.getAttribute("name");
	            if (!bufferName) {
	                throw new Error("Attribute 'name' must be specified.");
	            }
	            var format = this.getAttribute("format");
	            var type = this.getAttribute("type");
	            var newSize = _TextureSizeCalculator2.default.getPow2Size(arg.width, arg.height);
	            this.buffer.update(0, newSize.width, newSize.height, 0, format, type, null);
	            arg.bufferSizes[bufferName] = { width: newSize.width, height: newSize.height };
	            arg.buffers[bufferName] = this.buffer;
	        }
	    }]);

	    return TextureBufferComponent;
	}(_Component3.default);

	exports.default = TextureBufferComponent;

	TextureBufferComponent.attributes = {
	    name: {
	        converter: "String",
	        default: null
	    },
	    format: {
	        converter: "Enum",
	        default: WebGLRenderingContext.RGBA,
	        table: {
	            RGBA: WebGLRenderingContext.RGBA,
	            RGB: WebGLRenderingContext.RGB,
	            ALPHA: WebGLRenderingContext.ALPHA,
	            LUMINANCE: WebGLRenderingContext.LUMINANCE,
	            LUMINANCE_ALPHA: WebGLRenderingContext.LUMINANCE_ALPHA,
	            SRGB_EXT: WebGLRenderingContext["SRGB_EXT"],
	            SRGB_ALPHA_EXT: WebGLRenderingContext["SRGB_ALPHA_EXT"],
	            DEPTH_COMPONENT: WebGLRenderingContext["DEPTH_COMPONENT"],
	            DEPTH_STENCIL: WebGLRenderingContext["DEPTH_STENCIL"]
	        }
	    },
	    type: {
	        converter: "Enum",
	        default: WebGLRenderingContext.UNSIGNED_BYTE,
	        table: {
	            UNSIGNED_BYTE: WebGLRenderingContext.UNSIGNED_BYTE,
	            UNSIGNED_SHORT_5_6_5: WebGLRenderingContext.UNSIGNED_SHORT_5_6_5,
	            UNSIGNED_SHORT_4_4_4_4: WebGLRenderingContext.UNSIGNED_SHORT_4_4_4_4,
	            UNSIGNED_SHORT_5_5_5_1: WebGLRenderingContext.UNSIGNED_SHORT_5_5_5_1,
	            UNSIGNED_SHORT: WebGLRenderingContext.UNSIGNED_SHORT,
	            UNSIGNED_INT: WebGLRenderingContext.UNSIGNED_INT,
	            FLOAT: WebGLRenderingContext.FLOAT
	        }
	    }
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Texture2D = __webpack_require__(23);

	var _Texture2D2 = _interopRequireDefault(_Texture2D);

	var _Component2 = __webpack_require__(9);

	var _Component3 = _interopRequireDefault(_Component2);

	var _ImageResolver = __webpack_require__(5);

	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};

	var TextureComponent = function (_Component) {
	    _inherits(TextureComponent, _Component);

	    function TextureComponent() {
	        _classCallCheck(this, TextureComponent);

	        return _possibleConstructorReturn(this, (TextureComponent.__proto__ || Object.getPrototypeOf(TextureComponent)).apply(this, arguments));
	    }

	    _createClass(TextureComponent, [{
	        key: "$mount",
	        value: function $mount() {
	            var _this2 = this;

	            var src = this.getAttribute("src");
	            this.texture = new _Texture2D2.default(this.companion.get("gl"));
	            this.texture.magFilter = this.getAttribute("magFilter");
	            this.texture.minFilter = this.getAttribute("minFilter");
	            this.texture.wrapT = this.getAttribute("wrapT");
	            this.texture.wrapS = this.getAttribute("wrapS");
	            this.getAttributeRaw("magFilter").watch(function (v) {
	                return _this2.texture.magFilter = v;
	            });
	            this.getAttributeRaw("minFilter").watch(function (v) {
	                return _this2.texture.minFilter = v;
	            });
	            this.getAttributeRaw("wrapS").watch(function (v) {
	                return _this2.texture.wrapS = v;
	            });
	            this.getAttributeRaw("wrapT").watch(function (v) {
	                return _this2.texture.wrapT = v;
	            });
	            if (src) {
	                this._loadTask(src);
	            }
	        }
	    }, {
	        key: "_loadTask",
	        value: function _loadTask(src) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var img;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return _ImageResolver2.default.resolve(src);

	                            case 2:
	                                img = _context.sent;

	                                this.texture.update(img);

	                            case 4:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }]);

	    return TextureComponent;
	}(_Component3.default);

	exports.default = TextureComponent;

	TextureComponent.attributes = {
	    src: {
	        converter: "String",
	        default: null
	    },
	    minFilter: {
	        converter: "Enum",
	        default: "LINEAR",
	        table: {
	            LINEAR: WebGLRenderingContext.LINEAR,
	            NEAREST: WebGLRenderingContext.NEAREST,
	            NEAREST_MIPMAP_NEAREST: WebGLRenderingContext.NEAREST_MIPMAP_NEAREST,
	            NEAREST_MIPMAP_LINEAR: WebGLRenderingContext.NEAREST_MIPMAP_LINEAR,
	            LINEAR_MIPMAP_NEAREST: WebGLRenderingContext.LINEAR_MIPMAP_NEAREST,
	            LINEAR_MIPMAP_LINEAR: WebGLRenderingContext.LINEAR_MIPMAP_LINEAR
	        }
	    },
	    magFilter: {
	        converter: "Enum",
	        default: "LINEAR",
	        table: {
	            LINEAR: WebGLRenderingContext.LINEAR,
	            NEAREST: WebGLRenderingContext.NEAREST
	        }
	    },
	    wrapS: {
	        converter: "Enum",
	        default: "REPEAT",
	        table: {
	            REPEAT: WebGLRenderingContext.REPEAT,
	            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
	            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
	        }
	    },
	    wrapT: {
	        converter: "Enum",
	        default: "REPEAT",
	        table: {
	            REPEAT: WebGLRenderingContext.REPEAT,
	            MIRRORED_REPEAT: WebGLRenderingContext.MIRRORED_REPEAT,
	            CLAMP_TO_EDGE: WebGLRenderingContext.CLAMP_TO_EDGE
	        }
	    }
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function CanvasSizeConverter(val) {
	    if (val === "fit") {
	        return {
	            mode: "fit"
	        };
	    }
	    if (typeof val === "string") {
	        var matched = /aspect\(([\d+(?.\d*)?]+)\)/.exec(val);
	        if (matched) {
	            return {
	                mode: "aspect",
	                aspect: Number.parseFloat(matched[1])
	            };
	        }
	    }
	    return {
	        mode: "manual",
	        size: Number.parseFloat(val)
	    };
	}
	exports.default = CanvasSizeConverter;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Component = __webpack_require__(9);

	var _Component2 = _interopRequireDefault(_Component);

	var _GomlNode = __webpack_require__(76);

	var _GomlNode2 = _interopRequireDefault(_GomlNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function ComponentConverter(val) {
	    if (!this.declaration["target"]) {
	        throw new Error("Component converter require to be specified target");
	    }
	    if (val === null) {
	        return null;
	    }
	    if (val instanceof _GomlNode2.default) {
	        return val.getComponent(this.declaration["target"]);
	    } else if (val instanceof _Component2.default) {
	        if (val.name === this.declaration["target"]) {
	            return val; // check component type?
	        } else {
	            throw new Error("Specified component must be " + this.declaration["target"]);
	        }
	    } else {
	        var n = this.tree(val).first();
	        if (n) {
	            return n.getComponent(this.declaration["target"]);
	        }
	        return null;
	    }
	}
	exports.default = ComponentConverter;

/***/ },
/* 76 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.Node.GomlNode;

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function EnumConverter(val) {
	    if (!this.declaration["table"]) {
	        throw new Error("Enum converter needs to be specified table in attribute dictionary");
	    }
	    if (typeof val === "number") {
	        return val;
	    }
	    if (typeof val === "string") {
	        var result = this.declaration["table"][val];
	        if (!result) {
	            throw new Error("Specified value is not exisiting in the relation table");
	        } else {
	            return result;
	        }
	    }
	    return null;
	}
	exports.default = EnumConverter;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Geometry = __webpack_require__(55);

	var _Geometry2 = _interopRequireDefault(_Geometry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function GeometryConverter(val) {
	    if (typeof val === "string") {
	        return this.companion.get("GeometryRegistory").getGeometry(val);
	    } else if (val instanceof _Geometry2.default) {
	        return val;
	    }
	    throw new Error("Specified geometry \"" + val + "\" is not supported for converting into geometry.");
	}
	exports.default = GeometryConverter;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _MaterialComponent = __webpack_require__(32);

	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function MaterialConverter(val) {
	    if (typeof val === "string") {
	        var regex = /\s*new\s*\(\s*([a-zA-Z\d\-]+)\s*\)/;
	        var regexResult = void 0;
	        if (regexResult = regex.exec(val)) {
	            this.component[this.declaration["componentBoundTo"]] = null;
	            return this.companion.get("MaterialFactory").instanciate(regexResult[1]);
	        } else {
	            var mc = this.tree(val).first().getComponent(_MaterialComponent2.default);
	            this.component[this.declaration["componentBoundTo"]] = mc;
	            return mc.materialPromise;
	        }
	    }
	    return null; // TODO ??
	}
	exports.default = MaterialConverter;

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function NumberArrayConverter(val) {
	    if (val instanceof Array) {
	        return val;
	    }
	    if (typeof val === "string") {
	        var splitted = val.split(",");
	        return splitted.map(function (s) {
	            return Number.parseFloat(s);
	        });
	    }
	}
	exports.default = NumberArrayConverter;

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function NumberConverter(val) {
	    if (typeof val === "number") {
	        return val;
	    } else if (typeof val === "string") {
	        return Number.parseFloat(val);
	    } else if (val === null) {
	        return null;
	    }
	}
	exports.default = NumberConverter;

/***/ },
/* 82 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function ObjectConverter(val) {
	    return val;
	}
	exports.default = ObjectConverter;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _TextureComponent = __webpack_require__(73);

	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);

	var _TextureReference = __webpack_require__(84);

	var _TextureReference2 = _interopRequireDefault(_TextureReference);

	var _Texture2D = __webpack_require__(23);

	var _Texture2D2 = _interopRequireDefault(_Texture2D);

	var _ImageResolver = __webpack_require__(5);

	var _ImageResolver2 = _interopRequireDefault(_ImageResolver);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function updateVideo(tex, video) {
	    tex.update(video);
	    requestAnimationFrame(function () {
	        return updateVideo(tex, video);
	    });
	}
	function _parseQuery(query) {
	    var regex = /(query|backbuffer|video)\((.+)\)[^\)]*$/;
	    var regexResult = void 0;
	    if (regexResult = regex.exec(query)) {
	        return {
	            type: regexResult[1],
	            param: regexResult[2]
	        };
	    }
	    return null;
	}
	function generateVideoTag(src) {
	    var vTag = document.createElement("video");
	    vTag.src = src;
	    return vTag;
	}
	function fromVideoTexture(gl, val) {
	    var tex = new _Texture2D2.default(gl);
	    val.play();
	    tex.update(val);
	    updateVideo(tex, val);
	    return tex;
	}
	function TextureConverter(val) {
	    var _this = this;

	    if (val instanceof _Texture2D2.default) {
	        return new _TextureReference2.default(val);
	    }
	    if (typeof val === "string") {
	        var parseResult = _parseQuery(val);
	        if (parseResult) {
	            var _ret = function () {
	                var param = parseResult.param;

	                var _ret2 = function () {
	                    switch (parseResult.type) {
	                        case "backbuffer":
	                            return {
	                                v: {
	                                    v: new _TextureReference2.default(function (buffers) {
	                                        return buffers[param];
	                                    })
	                                }
	                            };
	                        case "video":
	                            return {
	                                v: {
	                                    v: new _TextureReference2.default(fromVideoTexture(_this.companion.get("gl"), generateVideoTag(param)))
	                                }
	                            };
	                        case "query":
	                            var obtainedTag = _this.tree(param);
	                            var texture = obtainedTag.first().getComponent(_TextureComponent2.default);
	                            return {
	                                v: {
	                                    v: new _TextureReference2.default(function () {
	                                        return texture.texture;
	                                    })
	                                }
	                            };
	                    }
	                }();

	                if ((typeof _ret2 === "undefined" ? "undefined" : _typeof(_ret2)) === "object") return _ret2.v;
	            }();

	            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	        } else {
	            var _ret3 = function () {
	                var tex = new _Texture2D2.default(_this.companion.get("gl"));
	                _ImageResolver2.default.resolve(val).then(function (t) {
	                    tex.update(t);
	                });
	                _this.companion.get("loader").register(tex.validPromise);
	                return {
	                    v: new _TextureReference2.default(tex)
	                };
	            }();

	            if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
	        }
	    }
	    if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
	        if (val instanceof HTMLImageElement) {
	            var _ret4 = function () {
	                var tex = new _Texture2D2.default(_this.companion.get("gl"));
	                if (val.complete && val.naturalWidth) {
	                    tex.update(val);
	                } else {
	                    val.onload = function () {
	                        tex.update(val);
	                    };
	                }
	                return {
	                    v: new _TextureReference2.default(tex)
	                };
	            }();

	            if ((typeof _ret4 === "undefined" ? "undefined" : _typeof(_ret4)) === "object") return _ret4.v;
	        } else if (val instanceof HTMLCanvasElement) {
	            var tex = new _Texture2D2.default(this.companion.get("gl"));
	            tex.update(val);
	            return new _TextureReference2.default(tex);
	        } else if (val instanceof HTMLVideoElement) {
	            return new _TextureReference2.default(fromVideoTexture(this.companion.get("gl"), val));
	        }
	    }
	    return null;
	}
	exports.default = TextureConverter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Proxy of texture reference
	 */
	var TextureReference = function () {
	    function TextureReference(rawResource) {
	        _classCallCheck(this, TextureReference);

	        this.rawResource = rawResource;
	        this._isFunctionalProxy = typeof rawResource === "function";
	    }

	    _createClass(TextureReference, [{
	        key: "get",
	        value: function get(buffers) {
	            if (!this._isFunctionalProxy) {
	                return this.rawResource;
	            } else {
	                return this.rawResource(buffers);
	            }
	        }
	    }]);

	    return TextureReference;
	}();

	exports.default = TextureReference;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _Rectangle = __webpack_require__(86);

	var _Rectangle2 = _interopRequireDefault(_Rectangle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toPixel(parentSize, rep) {
	    var regex = /(\d+)\s*%/;
	    var regexResult = void 0;
	    if (regexResult = regex.exec(rep)) {
	        var percentage = Number.parseFloat(regexResult[1]);
	        return Math.floor(parentSize * percentage * 0.01);
	    } else {
	        return Math.floor(Number.parseFloat(rep));
	    }
	}
	function ViewportConverter(val) {
	    if (val instanceof _Rectangle2.default) {
	        return function () {
	            return val;
	        };
	    }
	    if (typeof val === "string") {
	        if (val === "auto") {
	            return function (canvas) {
	                return new _Rectangle2.default(0, 0, canvas.width, canvas.height);
	            };
	        } else {
	            var _ret = function () {
	                var sizes = val.split(",");
	                if (sizes.length !== 4) {
	                    throw new Error("Invalid viewport size was specified.");
	                } else {
	                    return {
	                        v: function v(canvas) {
	                            return new _Rectangle2.default(_toPixel(canvas.width, sizes[0]), _toPixel(canvas.height, sizes[1]), _toPixel(canvas.width, sizes[2]), _toPixel(canvas.height, sizes[3]));
	                        }
	                    };
	                }
	            }();

	            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	        }
	    }
	    throw new Error(val + " could not be parsed");
	}
	exports.default = ViewportConverter;

/***/ },
/* 86 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Rectangle;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Geometry = __webpack_require__(55);

	var _Geometry2 = _interopRequireDefault(_Geometry);

	var _AABB = __webpack_require__(56);

	var _AABB2 = _interopRequireDefault(_AABB);

	var _Vector = __webpack_require__(14);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _GeometryUtility = __webpack_require__(88);

	var _GeometryUtility2 = _interopRequireDefault(_GeometryUtility);

	var _GeometryFactory = __webpack_require__(28);

	var _GeometryFactory2 = _interopRequireDefault(_GeometryFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var unitBox = new _AABB2.default();
	unitBox.expand(new _Vector2.default(-1, -1, -1));
	unitBox.expand(new _Vector2.default(1, 1, 1));
	var primitiveLayout = {
	    POSITION: {
	        size: 3,
	        stride: 32
	    },
	    NORMAL: {
	        size: 3,
	        stride: 32,
	        offset: 12
	    },
	    TEXCOORD: {
	        size: 2,
	        stride: 32,
	        offset: 24
	    }
	};

	var DefaultPrimitives = function () {
	    function DefaultPrimitives() {
	        _classCallCheck(this, DefaultPrimitives);
	    }

	    _createClass(DefaultPrimitives, null, [{
	        key: "register",
	        value: function register() {
	            DefaultPrimitives._registerQuad();
	            DefaultPrimitives._registerCube();
	            DefaultPrimitives._registerSphere();
	            DefaultPrimitives._registerCircle();
	            // DefaultPrimitives._registerCylinder();
	            // DefaultPrimitives._registerCone();
	            // DefaultPrimitives._registerPlane();
	        }
	    }, {
	        key: "_registerQuad",
	        value: function _registerQuad() {
	            _GeometryFactory2.default.addType("quad", {}, function (gl, attrs) {
	                var geometry = new _Geometry2.default(gl);
	                geometry.addAttributes(_GeometryUtility2.default.plane([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], 1, 1), primitiveLayout);
	                geometry.addIndex("default", _GeometryUtility2.default.planeIndex(0, 1, 1));
	                return geometry;
	            });
	        }
	    }, {
	        key: "_registerCube",
	        value: function _registerCube() {
	            _GeometryFactory2.default.addType("cube", {
	                divHorizontal: {
	                    converter: "Number",
	                    default: 1
	                },
	                divVertical: {
	                    converter: "Number",
	                    default: 1
	                }
	            }, function (gl, attrs) {
	                var hdiv = attrs["divHorizontal"];
	                var vdiv = attrs["divVertical"];
	                var geometry = new _Geometry2.default(gl);
	                var vertices = [].concat.apply([], [_GeometryUtility2.default.plane([0, 0, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 0, -1], [0, 0, -1], [0, 1, 0], [-1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, 1, 0], [0, 1, 0], [0, 0, -1], [1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([0, -1, 0], [0, -1, 0], [0, 0, -1], [-1, 0, 0], hdiv, vdiv), _GeometryUtility2.default.plane([1, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, -1], hdiv, vdiv), _GeometryUtility2.default.plane([-1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, 0, 1], hdiv, vdiv)]);
	                geometry.addAttributes(vertices, primitiveLayout);
	                var os = (hdiv + 1) * (vdiv + 1);
	                var indices = [].concat.apply([], [_GeometryUtility2.default.planeIndex(0, hdiv, vdiv), _GeometryUtility2.default.planeIndex(os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(2 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(3 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(4 * os, hdiv, vdiv), _GeometryUtility2.default.planeIndex(5 * os, hdiv, vdiv)]);
	                geometry.addIndex("default", indices);
	                return geometry;
	            });
	        }
	    }, {
	        key: "_registerSphere",
	        value: function _registerSphere() {
	            _GeometryFactory2.default.addType("sphere", {
	                divVertical: {
	                    converter: "Number",
	                    default: 100
	                },
	                divHorizontal: {
	                    converter: "Number",
	                    default: 100
	                }
	            }, function (gl, attrs) {
	                var dH = attrs["divHorizontal"];
	                var dV = attrs["divVertical"];
	                var geometry = new _Geometry2.default(gl);
	                geometry.addAttributes(_GeometryUtility2.default.sphere([0, 0, 0], [0, 1, 0], [1, 0, 0], [0, 0, -1], dV, dH), primitiveLayout);
	                geometry.addIndex("default", _GeometryUtility2.default.sphereIndex(0, dV, dH));
	                return geometry;
	            });
	        }
	    }, {
	        key: "_registerCircle",
	        value: function _registerCircle() {
	            _GeometryFactory2.default.addType("circle", {
	                divide: {
	                    converter: "Number",
	                    default: 10
	                }
	            }, function (gl, attrs) {
	                var div = attrs["divide"];
	                var geometry = new _Geometry2.default(gl);
	                geometry.addAttributes(_GeometryUtility2.default.circle([0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], div), primitiveLayout);
	                geometry.addIndex("default", _GeometryUtility2.default.circleIndex(0, div));
	                return geometry;
	            });
	        }
	    }]);

	    return DefaultPrimitives;
	}();

	exports.default = DefaultPrimitives;

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GeometryUtility = function () {
	    function GeometryUtility() {
	        _classCallCheck(this, GeometryUtility);
	    }

	    _createClass(GeometryUtility, null, [{
	        key: "plane",
	        value: function plane(center, normal, up, right) {
	            var hdiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
	            var vdiv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;

	            var ret = new Array(8 * (hdiv + 1) * (vdiv + 1));
	            var sp = [center[0] - up[0] - right[0], center[1] - up[1] - right[1], center[2] - up[2] - right[2]];
	            var sr = [right[0] / hdiv * 2, right[1] / hdiv * 2, right[2] / hdiv * 2];
	            var su = [up[0] / vdiv * 2, up[1] / vdiv * 2, up[2] / vdiv * 2];
	            for (var v = 0; v < vdiv + 1; v++) {
	                for (var h = 0; h < hdiv + 1; h++) {
	                    var fi = ((hdiv + 1) * v + h) * 8;
	                    ret[fi + 0] = sp[0] + sr[0] * h + su[0] * v;
	                    ret[fi + 1] = sp[1] + sr[1] * h + su[1] * v;
	                    ret[fi + 2] = sp[2] + sr[2] * h + su[2] * v;
	                    ret[fi + 3] = normal[0];
	                    ret[fi + 4] = normal[1];
	                    ret[fi + 5] = normal[2];
	                    ret[fi + 6] = 1 / hdiv * h;
	                    ret[fi + 7] = 1 - 1 / vdiv * v;
	                }
	            }
	            return ret;
	        }
	    }, {
	        key: "planeIndex",
	        value: function planeIndex() {
	            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	            var hdiv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var vdiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	            var ret = new Array(6 * hdiv * vdiv);
	            for (var v = 0; v < vdiv; v++) {
	                for (var h = 0; h < hdiv; h++) {
	                    var fi = (hdiv * v + h) * 6;
	                    var ld = offset + (hdiv + 1) * v + h;
	                    var lu = offset + (hdiv + 1) * (v + 1) + h;
	                    ret[fi + 0] = ld;
	                    ret[fi + 1] = ld + 1;
	                    ret[fi + 2] = lu;
	                    ret[fi + 3] = lu;
	                    ret[fi + 4] = ld + 1;
	                    ret[fi + 5] = lu + 1;
	                }
	            }
	            return ret;
	        }
	    }, {
	        key: "circle",
	        value: function circle(center, normal, up, right) {
	            var divide = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

	            var ret = new Array((3 + divide) * 6);
	            // center
	            ret[0] = center[0];
	            ret[1] = center[1];
	            ret[2] = center[2];
	            ret[3] = normal[0];
	            ret[4] = normal[1];
	            ret[5] = normal[2];
	            ret[6] = 0.5;
	            ret[7] = 0.5;
	            var delta = 2 * Math.PI / divide;
	            for (var v = 0; v < divide + 1; v++) {
	                var fi = 8 + v * 8;
	                var s = Math.sin(delta * v);
	                var c = Math.cos(delta * v);
	                ret[fi + 0] = center[0] + c * up[0] + s * right[0];
	                ret[fi + 1] = center[1] + c * up[1] + s * right[1];
	                ret[fi + 2] = center[2] + c * up[2] + s * right[2];
	                ret[fi + 3] = normal[0];
	                ret[fi + 4] = normal[1];
	                ret[fi + 5] = normal[2];
	                ret[fi + 6] = 0.5 + 0.5 * s;
	                ret[fi + 7] = 0.5 - 0.5 * c;
	            }
	            return ret;
	        }
	    }, {
	        key: "circleIndex",
	        value: function circleIndex(offset, divide) {
	            var ret = new Array(3 * (divide + 1));
	            for (var i = 0; i < divide; i++) {
	                ret[3 * i + 0] = offset;
	                ret[3 * i + 1] = offset + (i + 2);
	                ret[3 * i + 2] = offset + (i + 1);
	            }
	            return ret;
	        }
	    }, {
	        key: "sphere",
	        value: function sphere(center, up, right, forward) {
	            var vdiv = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 3;
	            var hdiv = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;

	            var ret = new Array((vdiv * hdiv + 2) * 8);
	            //top(0)
	            ret[0] = center[0] + up[0];
	            ret[1] = center[1] + up[1];
	            ret[2] = center[2] + up[2];
	            ret[3] = up[0];
	            ret[4] = up[1];
	            ret[5] = up[2];
	            ret[6] = 0.5;
	            ret[7] = 0.5;
	            // bottom(1)
	            ret[8] = center[0] - up[0];
	            ret[9] = center[1] - up[1];
	            ret[10] = center[2] - up[2];
	            ret[11] = -up[0];
	            ret[12] = -up[1];
	            ret[13] = -up[2];
	            ret[14] = 0.5;
	            ret[15] = -0.5;
	            var vDelta = Math.PI / (vdiv + 1);
	            var hDelta = Math.PI * 2 / hdiv;
	            for (var v = 0; v < vdiv; v++) {
	                var vc = Math.cos((v + 1) * vDelta);
	                var vs = Math.sin((v + 1) * vDelta);
	                for (var h = 0; h < hdiv + 1; h++) {
	                    var hc = Math.cos(h * hDelta);
	                    var hs = Math.sin(h * hDelta);
	                    var fi = 16 + (v * (hdiv + 1) + h) * 8;
	                    ret[fi + 0] = center[0] + vc * up[0] + vs * (forward[0] * hc + right[0] * hs);
	                    ret[fi + 1] = center[1] + vc * up[1] + vs * (forward[1] * hc + right[1] * hs);
	                    ret[fi + 2] = center[2] + vc * up[2] + vs * (forward[2] * hc + right[2] * hs);
	                    ret[fi + 3] = 1; // TODO 法線。。。
	                    ret[fi + 4] = 1;
	                    ret[fi + 5] = 1;
	                    ret[fi + 6] = 1;
	                    ret[fi + 7] = 1;
	                }
	            }
	            return ret;
	        }
	    }, {
	        key: "sphereIndex",
	        value: function sphereIndex(offset) {
	            var vdiv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
	            var hdiv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

	            var ret = new Array((hdiv + 1) * vdiv * 6);
	            for (var i = 0; i < hdiv + 1; i++) {
	                ret[3 * i] = 0;
	                ret[3 * i + 1] = i + 3;
	                ret[3 * i + 2] = i + 2;
	            }
	            // TODO もうむりぽ
	            return ret;
	        }
	    }]);

	    return GeometryUtility;
	}();

	exports.default = GeometryUtility;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MaterialFactory = __webpack_require__(36);

	var _MaterialFactory2 = _interopRequireDefault(_MaterialFactory);

	var _Unlit = __webpack_require__(90);

	var _Unlit2 = _interopRequireDefault(_Unlit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DefaultMaterial = function () {
	    function DefaultMaterial() {
	        _classCallCheck(this, DefaultMaterial);
	    }

	    _createClass(DefaultMaterial, null, [{
	        key: "register",
	        value: function register() {
	            _MaterialFactory2.default.addSORTMaterial("unlit", _Unlit2.default);
	        }
	    }]);

	    return DefaultMaterial;
	}();

	exports.default = DefaultMaterial;

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "@Technique default{\n@Pass{\n  @BlendFunc(SRC_ALPHA,ONE_MINUS_SRC_ALPHA)\n  FS_PREC(mediump,float)\n  varying vec2 vTexCoord;\n  #ifdef VS\n\n  attribute vec3 position;\n  attribute vec2 texCoord;\n  @MODELVIEWPROJECTION\n  uniform mat4 _matPVM;\n  void main()\n  {\n    gl_Position = _matPVM * vec4(position,1.0);\n    vTexCoord = texCoord;\n  }\n  #endif\n  #ifdef FS\n  @{type:\"color\",default:\"white\"}\n  uniform vec4 color;\n\n  uniform sampler2D texture;\n  @HAS_TEXTURE{sampler:\"texture\"}\n  uniform bool _textureUsed;\n\n  uniform float _time;\n  void main(void)\n  {\n    if(_textureUsed){\n      gl_FragColor = color * texture2D(texture,vTexCoord);\n    }else{\n      gl_FragColor = color;\n   }\n  }\n  #endif\n}\n}\n"

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Matrix = __webpack_require__(15);

	var _Matrix2 = _interopRequireDefault(_Matrix);

	var _UniformResolverRegistry = __webpack_require__(58);

	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_UniformResolverRegistry2.default.add("MODELVIEWPROJECTION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.transform.calcPVM(args.camera));
	    };
	});
	_UniformResolverRegistry2.default.add("LOCAL", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.transform.localTransform);
	    };
	});
	_UniformResolverRegistry2.default.add("MODEL", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.transform.globalTransform);
	    };
	});
	_UniformResolverRegistry2.default.add("VIEW", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.camera.ViewMatrix);
	    };
	});
	_UniformResolverRegistry2.default.add("PROJECTION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.camera.ProjectionMatrix);
	    };
	});
	_UniformResolverRegistry2.default.add("MODELINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.globalTransform));
	    };
	});
	_UniformResolverRegistry2.default.add("VIEWINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.camera.ViewMatrix));
	    };
	});
	_UniformResolverRegistry2.default.add("PROJECTIONINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, args.camera.InvProjectionMatrix);
	    };
	});
	_UniformResolverRegistry2.default.add("MODELVIEWINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcVM(args.camera)));
	    };
	});
	_UniformResolverRegistry2.default.add("MODELVIEWPROJECTIONINVERSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.inverse(args.transform.calcPVM(args.camera)));
	    };
	});
	_UniformResolverRegistry2.default.add("MODELINVERSETRANSPOSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.globalTransform)));
	    };
	});
	_UniformResolverRegistry2.default.add("MODELVIEWINVERSETRANSPOSE", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformMatrix(valInfo.name, _Matrix2.default.transpose(_Matrix2.default.inverse(args.transform.calcVM(args.camera))));
	    };
	});
	exports.default = null;

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Vector = __webpack_require__(93);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Vector3 = __webpack_require__(13);

	var _Vector4 = _interopRequireDefault(_Vector3);

	var _UniformResolverRegistry = __webpack_require__(58);

	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_UniformResolverRegistry2.default.add("VIEWPORT", function (valInfo) {
	    return function (proxy, args) {
	        var vp = args.viewport;
	        proxy.uniformVector4(valInfo.name, new _Vector4.default(vp.Left, vp.Top, vp.Width, vp.Height));
	    };
	});
	_UniformResolverRegistry2.default.add("VIEWPORT_SIZE", function (valInfo) {
	    return function (proxy, args) {
	        var vp = args.viewport;
	        proxy.uniformVector2(valInfo.name, new _Vector2.default(vp.Width, vp.Height));
	    };
	});
	_UniformResolverRegistry2.default.add("TIME", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformFloat(valInfo.name, Date.now() % 1.0e7);
	    };
	});
	_UniformResolverRegistry2.default.add("HAS_TEXTURE", function (valInfo, material) {
	    var sampler = valInfo.attributes["sampler"];
	    if (!sampler) {
	        throw new Error("The variable having HAS_TEXTURE as semantics must have sampler attribute");
	    }
	    return function (proxy, args) {
	        var hasTexture = !!material.arguments[sampler] && !!material.arguments[sampler].get(args.buffers);
	        proxy.uniformBool(valInfo.name, hasTexture);
	    };
	});
	_UniformResolverRegistry2.default.add("CAMERA_POSITION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformVector3(valInfo.name, args.camera.transform.globalPosition);
	    };
	});
	_UniformResolverRegistry2.default.add("CAMERA_DIRECTION", function (valInfo) {
	    return function (proxy, args) {
	        proxy.uniformVector3(valInfo.name, args.camera.transform.forward);
	    };
	});
	exports.default = null;

/***/ },
/* 93 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS.lib.math.Vector2;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Texture2D = __webpack_require__(23);

	var _Texture2D2 = _interopRequireDefault(_Texture2D);

	var _UniformResolverRegistry = __webpack_require__(58);

	var _UniformResolverRegistry2 = _interopRequireDefault(_UniformResolverRegistry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gl = WebGLRenderingContext;
	var _userValueRegisterers = {
	    array: {},
	    single: {}
	};
	_UniformResolverRegistry2.default.add("USER_VALUE", function (valInfo, material) {
	    var register = void 0;
	    if (valInfo.count) {
	        register = _userValueRegisterers.array[valInfo.type];
	        if (!register) {
	            throw new Error("No user_value registerer was registered for " + valInfo.type + "[]");
	        }
	    } else {
	        register = _userValueRegisterers.single[valInfo.type];
	        if (!register) {
	            throw new Error("No user_value registerer was registered for " + valInfo.type);
	        }
	    }
	    return register(valInfo, material);
	});
	function basicRegister(type, isArray, converter, defaultValue, _register) {
	    var registerTarget = void 0;
	    if (isArray) {
	        registerTarget = _userValueRegisterers.array;
	    } else {
	        registerTarget = _userValueRegisterers.single;
	    }
	    registerTarget[type] = function (valInfo, material) {
	        material.addArgument(valInfo.name, {
	            converter: converter,
	            default: valInfo.attributes["default"] ? valInfo.attributes["default"] : defaultValue
	        });
	        return {
	            register: function register(proxy, args) {
	                _register(proxy, valInfo.name, material.arguments[valInfo.name], args);
	            },
	            dispose: function dispose() {
	                material.deleteArgument(valInfo.name);
	            }
	        };
	    };
	}
	basicRegister(gl.FLOAT, false, "Number", 0, function (proxy, name, value) {
	    return proxy.uniformFloat(name, value);
	});
	basicRegister(gl.INT, false, "Number", 0, function (proxy, name, value) {
	    return proxy.uniformInt(name, value);
	});
	basicRegister(gl.BOOL, false, "Boolean", false, function (proxy, name, value) {
	    return proxy.uniformBool(name, value);
	});
	basicRegister(gl.INT_VEC2, false, "Vector2", [0, 0], function (proxy, name, value) {
	    return proxy.uniformVector2(name, value);
	});
	basicRegister(gl.INT_VEC3, false, "Vector3", [0, 0, 0], function (proxy, name, value) {
	    return proxy.uniformVector3(name, value);
	});
	basicRegister(gl.INT_VEC4, false, "Vector4", [0, 0, 0, 0], function (proxy, name, value) {
	    return proxy.uniformVector4(name, value);
	});
	basicRegister(gl.FLOAT_VEC2, false, "Vector2", [0, 0], function (proxy, name, value) {
	    return proxy.uniformVector2(name, value);
	});
	basicRegister(gl.FLOAT_MAT4, true, "Object", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], function (proxy, name, value) {
	    return proxy.uniformMatrixArray(name, value);
	});
	basicRegister(gl.SAMPLER_2D, false, "Texture", null, function (proxy, name, value, args) {
	    var texture = void 0;
	    if (value && (texture = value.get(args.buffers))) {
	        proxy.uniformTexture2D(name, texture);
	    } else {
	        proxy.uniformTexture2D(name, _Texture2D2.default.defaultTextures.get(proxy.program.gl));
	    }
	});
	_userValueRegisterers.single[gl.FLOAT_VEC3] = function (valInfo, material) {
	    var isColor = valInfo.attributes["type"] === "color";
	    var attrDefault = valInfo.attributes["default"];
	    var defaultValue = attrDefault ? attrDefault : isColor ? [1, 1, 1] : [0, 0, 0];
	    material.addArgument(valInfo.name, {
	        converter: isColor ? "Color3" : "Vector3",
	        default: defaultValue
	    });
	    return {
	        register: isColor ? function (proxy, args) {
	            proxy.uniformColor3(valInfo.name, material.arguments[valInfo.name]);
	        } : function (proxy, args) {
	            proxy.uniformVector3(valInfo.name, material.arguments[valInfo.name]);
	        },
	        dispose: function dispose() {
	            material.deleteArgument(valInfo.name);
	        }
	    };
	};
	_userValueRegisterers.single[gl.FLOAT_VEC4] = function (valInfo, material) {
	    var isColor = valInfo.attributes["type"] === "color";
	    var attrDefault = valInfo.attributes["default"];
	    var defaultValue = attrDefault ? attrDefault : isColor ? [1, 1, 1, 1] : [0, 0, 0, 0];
	    material.addArgument(valInfo.name, {
	        converter: isColor ? "Color4" : "Vector4",
	        default: defaultValue
	    });
	    return {
	        register: isColor ? function (proxy, args) {
	            proxy.uniformColor4(valInfo.name, material.arguments[valInfo.name]);
	        } : function (proxy, args) {
	            proxy.uniformVector4(valInfo.name, material.arguments[valInfo.name]);
	        },
	        dispose: function dispose() {
	            material.deleteArgument(valInfo.name);
	        }
	    };
	};
	exports.default = null;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _DefaultMaterial = __webpack_require__(89);

	var _DefaultMaterial2 = _interopRequireDefault(_DefaultMaterial);

	var _DefaultPrimitives = __webpack_require__(87);

	var _DefaultPrimitives2 = _interopRequireDefault(_DefaultPrimitives);

	var _grimoirejs = __webpack_require__(8);

	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);

	var _AssetLoadingManagerComponent = __webpack_require__(7);

	var _AssetLoadingManagerComponent2 = _interopRequireDefault(_AssetLoadingManagerComponent);

	var _CameraComponent = __webpack_require__(11);

	var _CameraComponent2 = _interopRequireDefault(_CameraComponent);

	var _CanvasInitializerComponent = __webpack_require__(21);

	var _CanvasInitializerComponent2 = _interopRequireDefault(_CanvasInitializerComponent);

	var _FullscreenComponent = __webpack_require__(26);

	var _FullscreenComponent2 = _interopRequireDefault(_FullscreenComponent);

	var _GeometryComponent = __webpack_require__(27);

	var _GeometryComponent2 = _interopRequireDefault(_GeometryComponent);

	var _GeometryRegistoryComponent = __webpack_require__(29);

	var _GeometryRegistoryComponent2 = _interopRequireDefault(_GeometryRegistoryComponent);

	var _HTMLBinderComponent = __webpack_require__(30);

	var _HTMLBinderComponent2 = _interopRequireDefault(_HTMLBinderComponent);

	var _LoopManagerComponent = __webpack_require__(31);

	var _LoopManagerComponent2 = _interopRequireDefault(_LoopManagerComponent);

	var _MaterialComponent = __webpack_require__(32);

	var _MaterialComponent2 = _interopRequireDefault(_MaterialComponent);

	var _MaterialContainerComponent = __webpack_require__(33);

	var _MaterialContainerComponent2 = _interopRequireDefault(_MaterialContainerComponent);

	var _MaterialImporterComponent = __webpack_require__(35);

	var _MaterialImporterComponent2 = _interopRequireDefault(_MaterialImporterComponent);

	var _MaterialManagerComponent = __webpack_require__(60);

	var _MaterialManagerComponent2 = _interopRequireDefault(_MaterialManagerComponent);

	var _MeshRendererComponent = __webpack_require__(61);

	var _MeshRendererComponent2 = _interopRequireDefault(_MeshRendererComponent);

	var _MouseCameraControlComponent = __webpack_require__(62);

	var _MouseCameraControlComponent2 = _interopRequireDefault(_MouseCameraControlComponent);

	var _RenderBufferComponent = __webpack_require__(63);

	var _RenderBufferComponent2 = _interopRequireDefault(_RenderBufferComponent);

	var _RendererComponent = __webpack_require__(66);

	var _RendererComponent2 = _interopRequireDefault(_RendererComponent);

	var _RendererManagerComponent = __webpack_require__(67);

	var _RendererManagerComponent2 = _interopRequireDefault(_RendererManagerComponent);

	var _RenderQuadComponent = __webpack_require__(69);

	var _RenderQuadComponent2 = _interopRequireDefault(_RenderQuadComponent);

	var _RenderSceneComponent = __webpack_require__(71);

	var _RenderSceneComponent2 = _interopRequireDefault(_RenderSceneComponent);

	var _SceneComponent = __webpack_require__(19);

	var _SceneComponent2 = _interopRequireDefault(_SceneComponent);

	var _TextureBufferComponent = __webpack_require__(72);

	var _TextureBufferComponent2 = _interopRequireDefault(_TextureBufferComponent);

	var _TextureComponent = __webpack_require__(73);

	var _TextureComponent2 = _interopRequireDefault(_TextureComponent);

	var _TransformComponent = __webpack_require__(17);

	var _TransformComponent2 = _interopRequireDefault(_TransformComponent);

	var _CanvasSizeConverter = __webpack_require__(74);

	var _CanvasSizeConverter2 = _interopRequireDefault(_CanvasSizeConverter);

	var _ComponentConverter = __webpack_require__(75);

	var _ComponentConverter2 = _interopRequireDefault(_ComponentConverter);

	var _EnumConverter = __webpack_require__(77);

	var _EnumConverter2 = _interopRequireDefault(_EnumConverter);

	var _GeometryConverter = __webpack_require__(78);

	var _GeometryConverter2 = _interopRequireDefault(_GeometryConverter);

	var _MaterialConverter = __webpack_require__(79);

	var _MaterialConverter2 = _interopRequireDefault(_MaterialConverter);

	var _TextureConverter = __webpack_require__(83);

	var _TextureConverter2 = _interopRequireDefault(_TextureConverter);

	var _NumberArrayConverter = __webpack_require__(80);

	var _NumberArrayConverter2 = _interopRequireDefault(_NumberArrayConverter);

	var _NumberConverter = __webpack_require__(81);

	var _NumberConverter2 = _interopRequireDefault(_NumberConverter);

	var _ObjectConverter = __webpack_require__(82);

	var _ObjectConverter2 = _interopRequireDefault(_ObjectConverter);

	var _ViewportConverter = __webpack_require__(85);

	var _ViewportConverter2 = _interopRequireDefault(_ViewportConverter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	//
	// DO NOT REMOVE THE LINE BELOW.
	//

	exports.default = function () {
	    _grimoirejs2.default.register(function () {
	        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	            var _$ns;

	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _$ns = _grimoirejs2.default.ns("HTTP://GRIMOIRE.GL/NS/DEFAULT");

	                            _grimoirejs2.default.registerComponent(_$ns("AssetLoadingManager"), _AssetLoadingManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Camera"), _CameraComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("CanvasInitializer"), _CanvasInitializerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Fullscreen"), _FullscreenComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Geometry"), _GeometryComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("GeometryRegistory"), _GeometryRegistoryComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("HTMLBinder"), _HTMLBinderComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("LoopManager"), _LoopManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Material"), _MaterialComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MaterialContainer"), _MaterialContainerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MaterialImporter"), _MaterialImporterComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MaterialManager"), _MaterialManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MeshRenderer"), _MeshRendererComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("MouseCameraControl"), _MouseCameraControlComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RenderBuffer"), _RenderBufferComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Renderer"), _RendererComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RendererManager"), _RendererManagerComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RenderQuad"), _RenderQuadComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("RenderScene"), _RenderSceneComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Scene"), _SceneComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("TextureBuffer"), _TextureBufferComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Texture"), _TextureComponent2.default);
	                            _grimoirejs2.default.registerComponent(_$ns("Transform"), _TransformComponent2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("CanvasSize"), _CanvasSizeConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Component"), _ComponentConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Enum"), _EnumConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Geometry"), _GeometryConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Material"), _MaterialConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Texture"), _TextureConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("NumberArray"), _NumberArrayConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Number"), _NumberConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Object"), _ObjectConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Texture2D"), _TextureConverter2.default);
	                            _grimoirejs2.default.registerConverter(_$ns("Viewport"), _ViewportConverter2.default);
	                            _grimoirejs2.default.registerNode("goml", ["CanvasInitializer", "LoopManager", "AssetLoadingManager", "GeometryRegistory", "MaterialManager", "RendererManager", "Fullscreen"]);
	                            _grimoirejs2.default.registerNode("renderer", ["Renderer"]);
	                            _grimoirejs2.default.registerNode("scene", ["Scene"]);
	                            _grimoirejs2.default.registerNode("camera", ["Camera"], { position: "0,0,10" }, "object");
	                            _grimoirejs2.default.registerNode("empty", []);
	                            _grimoirejs2.default.registerNode("object", ["Transform"]);
	                            _grimoirejs2.default.registerNode("geometry", ["Geometry"]);
	                            _grimoirejs2.default.registerNode("texture", ["Texture"]);
	                            _grimoirejs2.default.registerNode("mesh", ["MaterialContainer", "MeshRenderer"], {}, "object");
	                            _grimoirejs2.default.registerNode("material", ["Material"]);
	                            _grimoirejs2.default.registerNode("import-material", ["MaterialImporter"]);
	                            _grimoirejs2.default.registerNode("texture-buffer", ["TextureBuffer"]);
	                            _grimoirejs2.default.registerNode("render-buffer", ["RenderBuffer"]);
	                            _grimoirejs2.default.registerNode("render-scene", ["RenderScene"], {
	                                material: null
	                            });
	                            _grimoirejs2.default.registerNode("render-quad", ["MaterialContainer", "RenderQuad"], {
	                                material: null
	                            });
	                            _DefaultPrimitives2.default.register();
	                            _DefaultMaterial2.default.register();

	                        case 52:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    });
	};

/***/ }
/******/ ])
});
;


},{}],4:[function(require,module,exports){
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS.lib.math;
},{}],5:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _AABB = __webpack_require__(1);
	
	var _AABB2 = _interopRequireDefault(_AABB);
	
	var _Color = __webpack_require__(14);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Color3 = __webpack_require__(15);
	
	var _Color4 = _interopRequireDefault(_Color3);
	
	var _Colors = __webpack_require__(17);
	
	var _Colors2 = _interopRequireDefault(_Colors);
	
	var _Angle2DConverter = __webpack_require__(18);
	
	var _Angle2DConverter2 = _interopRequireDefault(_Angle2DConverter);
	
	var _Color3Converter = __webpack_require__(20);
	
	var _Color3Converter2 = _interopRequireDefault(_Color3Converter);
	
	var _Color4Converter = __webpack_require__(21);
	
	var _Color4Converter2 = _interopRequireDefault(_Color4Converter);
	
	var _Rotation3Converter = __webpack_require__(22);
	
	var _Rotation3Converter2 = _interopRequireDefault(_Rotation3Converter);
	
	var _Vector2Converter = __webpack_require__(26);
	
	var _Vector2Converter2 = _interopRequireDefault(_Vector2Converter);
	
	var _Vector3Converter = __webpack_require__(28);
	
	var _Vector3Converter2 = _interopRequireDefault(_Vector3Converter);
	
	var _Vector4Converter = __webpack_require__(29);
	
	var _Vector4Converter2 = _interopRequireDefault(_Vector4Converter);
	
	var _GLM = __webpack_require__(30);
	
	var _GLM2 = _interopRequireDefault(_GLM);
	
	var _Matrix = __webpack_require__(24);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _MatrixBase = __webpack_require__(25);
	
	var _MatrixBase2 = _interopRequireDefault(_MatrixBase);
	
	var _Quaternion = __webpack_require__(23);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _Rectangle = __webpack_require__(31);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Angle2DParser = __webpack_require__(19);
	
	var _Angle2DParser2 = _interopRequireDefault(_Angle2DParser);
	
	var _Vector = __webpack_require__(27);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Vector3 = __webpack_require__(2);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _Vector5 = __webpack_require__(16);
	
	var _Vector6 = _interopRequireDefault(_Vector5);
	
	var _VectorBase = __webpack_require__(3);
	
	var _VectorBase2 = _interopRequireDefault(_VectorBase);
	
	var _main = __webpack_require__(32);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __EXPOSE__ = {
	    "AABB": _AABB2.default,
	    "Color3": _Color2.default,
	    "Color4": _Color4.default,
	    "Colors": _Colors2.default,
	    "Converters": {
	        "Angle2DConverter": _Angle2DConverter2.default,
	        "Color3Converter": _Color3Converter2.default,
	        "Color4Converter": _Color4Converter2.default,
	        "Rotation3Converter": _Rotation3Converter2.default,
	        "Vector2Converter": _Vector2Converter2.default,
	        "Vector3Converter": _Vector3Converter2.default,
	        "Vector4Converter": _Vector4Converter2.default
	    },
	    "GLM": _GLM2.default,
	    "Matrix": _Matrix2.default,
	    "MatrixBase": _MatrixBase2.default,
	    "Quaternion": _Quaternion2.default,
	    "Rectangle": _Rectangle2.default,
	    "Util": {
	        "Angle2DParser": _Angle2DParser2.default
	    },
	    "Vector2": _Vector2.default,
	    "Vector3": _Vector4.default,
	    "Vector4": _Vector6.default,
	    "VectorBase": _VectorBase2.default
	};
	var __BASE__ = (0, _main2.default)();
	Object.assign(__BASE__ || {}, __EXPOSE__);
	window["GrimoireJS"].lib.math = __EXPOSE__;
	exports.default = __BASE__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); ///<reference path="./gl-matrix.d.ts"/>
	
	
	var _Vector = __webpack_require__(2);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Axis-Aligned Bounding Box implementation
	 */
	var AABB = function () {
	    function AABB(initialPoints) {
	        var _this = this;
	
	        _classCallCheck(this, AABB);
	
	        if (initialPoints) {
	            initialPoints.forEach(function (f) {
	                return _this.expand(f);
	            });
	        }
	    }
	    /**
	     * Width of this AABB
	     */
	
	
	    _createClass(AABB, [{
	        key: "expand",
	
	        /**
	         * Calculate new bounding box with considering the new point is included.
	         * @param  {Vector3} newPoint the point that will be considered that it should be in this bounding box.
	         */
	        value: function expand(newPoint) {
	            if (this.pointLBF == null) {
	                // assume this is first time to be used this AABB instance
	                this.pointLBF = _Vector2.default.copy(newPoint);
	                this.pointRTN = _Vector2.default.copy(newPoint);
	            }
	            this.pointLBF = _Vector2.default.min(newPoint, this.pointLBF);
	            this.pointRTN = _Vector2.default.max(newPoint, this.pointRTN);
	            this._center = null;
	            return this;
	        }
	        /**
	         * Clean up this AABB with initial value.
	         */
	
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.pointLBF = null;
	            this.pointRTN = null;
	            this._center = null;
	        }
	    }, {
	        key: "Width",
	        get: function get() {
	            return Math.abs(this.pointLBF.X - this.pointRTN.X);
	        }
	        /**
	         * Height of this AABB
	         */
	
	    }, {
	        key: "Height",
	        get: function get() {
	            return Math.abs(this.pointLBF.Y - this.pointRTN.Y);
	        }
	        /**
	         * Distance of this AABB
	         */
	
	    }, {
	        key: "Distance",
	        get: function get() {
	            return Math.abs(this.pointLBF.Z - this.pointRTN.Z);
	        }
	    }, {
	        key: "Center",
	        get: function get() {
	            return this._center ? this._center : this._center = _Vector2.default.add(this.pointLBF, this.pointRTN).multiplyWith(0.5);
	        }
	    }]);
	
	    return AABB;
	}();
	
	exports.default = AABB;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VectorBase2 = __webpack_require__(3);
	
	var _VectorBase3 = _interopRequireDefault(_VectorBase2);
	
	var _glMatrix = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ///<reference path="./gl-matrix.d.ts"/>
	
	
	var Vector3 = function (_VectorBase) {
	    _inherits(Vector3, _VectorBase);
	
	    _createClass(Vector3, null, [{
	        key: "copy",
	        value: function copy(source) {
	            return new Vector3(source.X, source.Y, source.Z);
	        }
	    }, {
	        key: "dot",
	        value: function dot(v1, v2) {
	            return _glMatrix.vec3.dot(v1.rawElements, v2.rawElements);
	        }
	    }, {
	        key: "add",
	        value: function add(v1, v2) {
	            var newVec = _glMatrix.vec3.create();
	            return new Vector3(_glMatrix.vec3.add(newVec, v1.rawElements, v2.rawElements));
	        }
	    }, {
	        key: "subtract",
	        value: function subtract(v1, v2) {
	            var newVec = _glMatrix.vec3.create();
	            return new Vector3(_glMatrix.vec3.sub(newVec, v1.rawElements, v2.rawElements));
	        }
	    }, {
	        key: "multiply",
	        value: function multiply(s, v) {
	            var newVec = _glMatrix.vec3.create();
	            return new Vector3(_glMatrix.vec3.scale(newVec, v.rawElements, s));
	        }
	    }, {
	        key: "negate",
	        value: function negate(v1) {
	            return Vector3.multiply(-1, v1);
	        }
	    }, {
	        key: "equals",
	        value: function equals(v1, v2) {
	            return _VectorBase3.default.__elementEquals(v1, v2);
	        }
	    }, {
	        key: "nearlyEquals",
	        value: function nearlyEquals(v1, v2) {
	            return _VectorBase3.default.__nearlyElementEquals(v1, v2);
	        }
	    }, {
	        key: "normalize",
	        value: function normalize(v1) {
	            var newVec = _glMatrix.vec3.create();
	            return new Vector3(_glMatrix.vec3.normalize(newVec, v1.rawElements));
	        }
	    }, {
	        key: "cross",
	        value: function cross(v1, v2) {
	            var newVec = _glMatrix.vec3.create();
	            return new Vector3(_glMatrix.vec3.cross(newVec, v1.rawElements, v2.rawElements));
	        }
	    }, {
	        key: "min",
	        value: function min(v1, v2) {
	            return new Vector3(_VectorBase3.default.__fromGenerationFunction(v1, v2, function (i, _v1, _v2) {
	                return Math.min(_v1.rawElements[i], _v2.rawElements[i]);
	            }));
	        }
	    }, {
	        key: "max",
	        value: function max(v1, v2) {
	            return new Vector3(_VectorBase3.default.__fromGenerationFunction(v1, v2, function (i, _v1, _v2) {
	                return Math.max(_v1.rawElements[i], _v2.rawElements[i]);
	            }));
	        }
	    }, {
	        key: "angle",
	        value: function angle(v1, v2) {
	            return Math.acos(Vector3.dot(v1.normalized, v2.normalized));
	        }
	    }, {
	        key: "parse",
	        value: function parse(str) {
	            var parseResult = _VectorBase3.default.__parse(str);
	            var elements = parseResult.elements;
	            if (!elements || elements.length !== 1 && elements.length !== 3) {
	                return undefined;
	            }
	            var result = void 0;
	            if (elements.length === 1) {
	                result = new Vector3(elements[0], elements[0], elements[0]);
	            } else {
	                result = new Vector3(elements[0], elements[1], elements[2]);
	            }
	            if (parseResult.needNormalize) {
	                result = result.normalizeThis();
	            }
	            if (parseResult.coefficient) {
	                result = result.multiplyWith(parseResult.coefficient);
	            }
	            if (parseResult.needNegate) {
	                result = result.negateThis();
	            }
	            return result;
	        }
	    }, {
	        key: "XUnit",
	        get: function get() {
	            return new Vector3(1, 0, 0);
	        }
	    }, {
	        key: "YUnit",
	        get: function get() {
	            return new Vector3(0, 1, 0);
	        }
	    }, {
	        key: "ZUnit",
	        get: function get() {
	            return new Vector3(0, 0, 1);
	        }
	    }, {
	        key: "Zero",
	        get: function get() {
	            return new Vector3(0, 0, 0);
	        }
	    }, {
	        key: "One",
	        get: function get() {
	            return new Vector3(1, 1, 1);
	        }
	    }]);
	
	    function Vector3(x, y, z) {
	        _classCallCheck(this, Vector3);
	
	        var _this = _possibleConstructorReturn(this, (Vector3.__proto__ || Object.getPrototypeOf(Vector3)).call(this));
	
	        if (typeof y === "undefined") {
	            _this.rawElements = x;
	            return _possibleConstructorReturn(_this);
	        }
	        _this.rawElements = [x, y, z];
	        return _this;
	    }
	
	    _createClass(Vector3, [{
	        key: "normalizeThis",
	        value: function normalizeThis() {
	            return Vector3.normalize(this);
	        }
	    }, {
	        key: "dotWith",
	        value: function dotWith(v) {
	            return Vector3.dot(this, v);
	        }
	    }, {
	        key: "addWith",
	        value: function addWith(v) {
	            return Vector3.add(this, v);
	        }
	    }, {
	        key: "subtractWith",
	        value: function subtractWith(v) {
	            return Vector3.subtract(this, v);
	        }
	    }, {
	        key: "multiplyWith",
	        value: function multiplyWith(s) {
	            return Vector3.multiply(s, this);
	        }
	    }, {
	        key: "negateThis",
	        value: function negateThis() {
	            return Vector3.negate(this);
	        }
	    }, {
	        key: "equalWith",
	        value: function equalWith(v) {
	            return Vector3.equals(this, v);
	        }
	    }, {
	        key: "nearlyEqualWith",
	        value: function nearlyEqualWith(v) {
	            return Vector3.nearlyEquals(this, v);
	        }
	    }, {
	        key: "crossWith",
	        value: function crossWith(v) {
	            return Vector3.cross(this, v);
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "(" + this.X + ", " + this.Y + ", " + this.Z + ")";
	        }
	    }, {
	        key: "toDisplayString",
	        value: function toDisplayString() {
	            return "Vector3" + this.toString();
	        }
	    }, {
	        key: "normalized",
	        get: function get() {
	            return this.multiplyWith(1 / this.magnitude);
	        }
	    }, {
	        key: "X",
	        get: function get() {
	            return this.rawElements[0];
	        },
	        set: function set(x) {
	            this.rawElements[0] = +x;
	        }
	    }, {
	        key: "Y",
	        get: function get() {
	            return this.rawElements[1];
	        },
	        set: function set(y) {
	            this.rawElements[1] = +y;
	        }
	    }, {
	        key: "Z",
	        get: function get() {
	            return this.rawElements[2];
	        },
	        set: function set(z) {
	            this.rawElements[2] = +z;
	        }
	    }, {
	        key: "ElementCount",
	        get: function get() {
	            return 3;
	        }
	    }]);
	
	    return Vector3;
	}(_VectorBase3.default);
	
	exports.default = Vector3;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	///<reference path="./gl-matrix.d.ts"/>
	var VectorBase = function () {
	    function VectorBase() {
	        _classCallCheck(this, VectorBase);
	
	        this._magnitudeSquaredCache = -1;
	        this._magnitudeCache = -1;
	    }
	
	    _createClass(VectorBase, [{
	        key: "magnitude",
	        get: function get() {
	            if (this._magnitudeCache < 0) {
	                this._magnitudeCache = Math.sqrt(this.sqrMagnitude);
	            }
	            return this._magnitudeCache;
	        }
	    }, {
	        key: "ElementCount",
	        get: function get() {
	            return 0;
	        }
	    }, {
	        key: "sqrMagnitude",
	        get: function get() {
	            if (this._magnitudeSquaredCache < 0) {
	                var sum = 0;
	                var r = this.rawElements;
	                for (var i = 0; i < this.ElementCount; i++) {
	                    sum += r[i] * r[i];
	                }
	                this._magnitudeSquaredCache = sum;
	            }
	            return this._magnitudeSquaredCache;
	        }
	    }], [{
	        key: "__elementEquals",
	        value: function __elementEquals(v1, v2) {
	            if (v1.ElementCount !== v2.ElementCount) {
	                return false;
	            }
	            for (var i = 0; i < v1.ElementCount; i++) {
	                if (v1.rawElements[i] !== v2.rawElements[i]) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, {
	        key: "__nearlyElementEquals",
	        value: function __nearlyElementEquals(v1, v2) {
	            if (v1.ElementCount !== v2.ElementCount) {
	                return false;
	            }
	            var error = 0.01;
	            for (var i = 0; i < v1.ElementCount; i++) {
	                if (Math.abs(v1.rawElements[i] - v2.rawElements[i]) > error) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, {
	        key: "__fromGenerationFunction",
	        value: function __fromGenerationFunction(v1, v2, gen) {
	            var f = new Float32Array(v1.ElementCount);
	            for (var i = 0; i < f.length; i++) {
	                f[i] = gen(i, v1, v2);
	            }
	            return f;
	        }
	    }, {
	        key: "__parse",
	        value: function __parse(str) {
	            var checkRegex = /(-?)([\d,Ee\+\-\.]+)?(n)?\(([-\d,Ee\+\.\s]+)\)/g;
	            var matches = checkRegex.exec(str);
	            if (matches) {
	                if (!matches[4]) {
	                    throw new Error("The specified string '" + str + "' is not containing braced vector.");
	                }
	                return {
	                    needNormalize: matches[3] === "n",
	                    needNegate: matches[1] === "-",
	                    coefficient: parseFloat(matches[2]),
	                    elements: VectorBase._parseRawVector(matches[4])
	                };
	            } else {
	                // Assume this is simplified format.
	                return {
	                    needNormalize: false,
	                    needNegate: false,
	                    elements: VectorBase._parseRawVector(str),
	                    coefficient: undefined
	                };
	            }
	        }
	    }, {
	        key: "_parseRawVector",
	        value: function _parseRawVector(str) {
	            var splitted = str.split(",");
	            var result = new Array(splitted.length);
	            for (var i = 0; i < splitted.length; i++) {
	                result[i] = parseFloat(splitted[i]);
	                if (isNaN(result[i])) {
	                    throw new Error("Unexpected vector string " + str);
	                }
	            }
	            return result;
	        }
	    }]);
	
	    return VectorBase;
	}();
	
	exports.default = VectorBase;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @fileoverview gl-matrix - High performance matrix and vector operations
	 * @author Brandon Jones
	 * @author Colin MacKenzie IV
	 * @version 2.3.2
	 */
	
	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	// END HEADER
	
	exports.glMatrix = __webpack_require__(5);
	exports.mat2 = __webpack_require__(6);
	exports.mat2d = __webpack_require__(7);
	exports.mat3 = __webpack_require__(8);
	exports.mat4 = __webpack_require__(9);
	exports.quat = __webpack_require__(10);
	exports.vec2 = __webpack_require__(13);
	exports.vec3 = __webpack_require__(11);
	exports.vec4 = __webpack_require__(12);

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	/**
	 * @class Common utilities
	 * @name glMatrix
	 */
	var glMatrix = {};
	
	// Configuration Constants
	glMatrix.EPSILON = 0.000001;
	glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
	glMatrix.RANDOM = Math.random;
	glMatrix.ENABLE_SIMD = false;
	
	// Capability detection
	glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === Float32Array) && ('SIMD' in this);
	glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;
	
	/**
	 * Sets the type of array used when creating new vectors and matrices
	 *
	 * @param {Type} type Array type, such as Float32Array or Array
	 */
	glMatrix.setMatrixArrayType = function(type) {
	    glMatrix.ARRAY_TYPE = type;
	}
	
	var degree = Math.PI / 180;
	
	/**
	* Convert Degree To Radian
	*
	* @param {Number} Angle in Degrees
	*/
	glMatrix.toRadian = function(a){
	     return a * degree;
	}
	
	/**
	 * Tests whether or not the arguments have approximately the same value, within an absolute
	 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
	 * than or equal to 1.0, and a relative tolerance is used for larger values)
	 * 
	 * @param {Number} a The first number to test.
	 * @param {Number} b The second number to test.
	 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
	 */
	glMatrix.equals = function(a, b) {
		return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
	}
	
	module.exports = glMatrix;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	
	/**
	 * @class 2x2 Matrix
	 * @name mat2
	 */
	var mat2 = {};
	
	/**
	 * Creates a new identity mat2
	 *
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat2 initialized with values from an existing matrix
	 *
	 * @param {mat2} a matrix to clone
	 * @returns {mat2} a new 2x2 matrix
	 */
	mat2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2 to another
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set a mat2 to the identity matrix
	 *
	 * @param {mat2} out the receiving matrix
	 * @returns {mat2} out
	 */
	mat2.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Create a new mat2 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out A new 2x2 matrix
	 */
	mat2.fromValues = function(m00, m01, m10, m11) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m10;
	    out[3] = m11;
	    return out;
	};
	
	/**
	 * Set the components of a mat2 to the given values
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m10 Component in column 1, row 0 position (index 2)
	 * @param {Number} m11 Component in column 1, row 1 position (index 3)
	 * @returns {mat2} out
	 */
	mat2.set = function(out, m00, m01, m10, m11) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m10;
	    out[3] = m11;
	    return out;
	};
	
	
	/**
	 * Transpose the values of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a1 = a[1];
	        out[1] = a[2];
	        out[2] = a1;
	    } else {
	        out[0] = a[0];
	        out[1] = a[2];
	        out[2] = a[1];
	        out[3] = a[3];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	
	        // Calculate the determinant
	        det = a0 * a3 - a2 * a1;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	    
	    out[0] =  a3 * det;
	    out[1] = -a1 * det;
	    out[2] = -a2 * det;
	    out[3] =  a0 * det;
	
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the source matrix
	 * @returns {mat2} out
	 */
	mat2.adjoint = function(out, a) {
	    // Caching this value is nessecary if out == a
	    var a0 = a[0];
	    out[0] =  a[3];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] =  a0;
	
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2
	 *
	 * @param {mat2} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2.determinant = function (a) {
	    return a[0] * a[3] - a[2] * a[1];
	};
	
	/**
	 * Multiplies two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2.multiply}
	 * @function
	 */
	mat2.mul = mat2.multiply;
	
	/**
	 * Rotates a mat2 by the given angle
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    return out;
	};
	
	/**
	 * Scales the mat2 by the dimensions in the given vec2
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2} out
	 **/
	mat2.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.rotate(dest, dest, rad);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2} out
	 */
	mat2.fromRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2.identity(dest);
	 *     mat2.scale(dest, dest, vec);
	 *
	 * @param {mat2} out mat2 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2} out
	 */
	mat2.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2
	 *
	 * @param {mat2} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2.str = function (a) {
	    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2
	 *
	 * @param {mat2} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
	};
	
	/**
	 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
	 * @param {mat2} L the lower triangular matrix 
	 * @param {mat2} D the diagonal matrix 
	 * @param {mat2} U the upper triangular matrix 
	 * @param {mat2} a the input matrix to factorize
	 */
	
	mat2.LDU = function (L, D, U, a) { 
	    L[2] = a[2]/a[0]; 
	    U[0] = a[0]; 
	    U[1] = a[1]; 
	    U[3] = a[3] - L[2] * U[1]; 
	    return [L, D, U];       
	}; 
	
	/**
	 * Adds two mat2's
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @returns {mat2} out
	 */
	mat2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link mat2.subtract}
	 * @function
	 */
	mat2.sub = mat2.subtract;
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2} a The first matrix.
	 * @param {mat2} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
	};
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2} out the receiving matrix
	 * @param {mat2} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2} out
	 */
	mat2.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};
	
	/**
	 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2} out the receiving vector
	 * @param {mat2} a the first operand
	 * @param {mat2} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2} out
	 */
	mat2.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    return out;
	};
	
	module.exports = mat2;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	
	/**
	 * @class 2x3 Matrix
	 * @name mat2d
	 * 
	 * @description 
	 * A mat2d contains six elements defined as:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty]
	 * </pre>
	 * This is a short form for the 3x3 matrix:
	 * <pre>
	 * [a, c, tx,
	 *  b, d, ty,
	 *  0, 0, 1]
	 * </pre>
	 * The last row is ignored so the array is shorter and operations are faster.
	 */
	var mat2d = {};
	
	/**
	 * Creates a new identity mat2d
	 *
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Creates a new mat2d initialized with values from an existing matrix
	 *
	 * @param {mat2d} a matrix to clone
	 * @returns {mat2d} a new 2x3 matrix
	 */
	mat2d.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Copy the values from one mat2d to another
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    return out;
	};
	
	/**
	 * Set a mat2d to the identity matrix
	 *
	 * @param {mat2d} out the receiving matrix
	 * @returns {mat2d} out
	 */
	mat2d.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	};
	
	/**
	 * Create a new mat2d with the given values
	 *
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} A new mat2d
	 */
	mat2d.fromValues = function(a, b, c, d, tx, ty) {
	    var out = new glMatrix.ARRAY_TYPE(6);
	    out[0] = a;
	    out[1] = b;
	    out[2] = c;
	    out[3] = d;
	    out[4] = tx;
	    out[5] = ty;
	    return out;
	};
	
	/**
	 * Set the components of a mat2d to the given values
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {Number} a Component A (index 0)
	 * @param {Number} b Component B (index 1)
	 * @param {Number} c Component C (index 2)
	 * @param {Number} d Component D (index 3)
	 * @param {Number} tx Component TX (index 4)
	 * @param {Number} ty Component TY (index 5)
	 * @returns {mat2d} out
	 */
	mat2d.set = function(out, a, b, c, d, tx, ty) {
	    out[0] = a;
	    out[1] = b;
	    out[2] = c;
	    out[3] = d;
	    out[4] = tx;
	    out[5] = ty;
	    return out;
	};
	
	/**
	 * Inverts a mat2d
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the source matrix
	 * @returns {mat2d} out
	 */
	mat2d.invert = function(out, a) {
	    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
	        atx = a[4], aty = a[5];
	
	    var det = aa * ad - ab * ac;
	    if(!det){
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = ad * det;
	    out[1] = -ab * det;
	    out[2] = -ac * det;
	    out[3] = aa * det;
	    out[4] = (ac * aty - ad * atx) * det;
	    out[5] = (ab * atx - aa * aty) * det;
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat2d
	 *
	 * @param {mat2d} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat2d.determinant = function (a) {
	    return a[0] * a[3] - a[1] * a[2];
	};
	
	/**
	 * Multiplies two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.multiply = function (out, a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
	    out[0] = a0 * b0 + a2 * b1;
	    out[1] = a1 * b0 + a3 * b1;
	    out[2] = a0 * b2 + a2 * b3;
	    out[3] = a1 * b2 + a3 * b3;
	    out[4] = a0 * b4 + a2 * b5 + a4;
	    out[5] = a1 * b4 + a3 * b5 + a5;
	    return out;
	};
	
	/**
	 * Alias for {@link mat2d.multiply}
	 * @function
	 */
	mat2d.mul = mat2d.multiply;
	
	/**
	 * Rotates a mat2d by the given angle
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.rotate = function (out, a, rad) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	    out[0] = a0 *  c + a2 * s;
	    out[1] = a1 *  c + a3 * s;
	    out[2] = a0 * -s + a2 * c;
	    out[3] = a1 * -s + a3 * c;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Scales the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.scale = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0 * v0;
	    out[1] = a1 * v0;
	    out[2] = a2 * v1;
	    out[3] = a3 * v1;
	    out[4] = a4;
	    out[5] = a5;
	    return out;
	};
	
	/**
	 * Translates the mat2d by the dimensions in the given vec2
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to translate
	 * @param {vec2} v the vec2 to translate the matrix by
	 * @returns {mat2d} out
	 **/
	mat2d.translate = function(out, a, v) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
	        v0 = v[0], v1 = v[1];
	    out[0] = a0;
	    out[1] = a1;
	    out[2] = a2;
	    out[3] = a3;
	    out[4] = a0 * v0 + a2 * v1 + a4;
	    out[5] = a1 * v0 + a3 * v1 + a5;
	    return out;
	};
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.rotate(dest, dest, rad);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat2d} out
	 */
	mat2d.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	    out[0] = c;
	    out[1] = s;
	    out[2] = -s;
	    out[3] = c;
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.scale(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat2d} out
	 */
	mat2d.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = v[1];
	    out[4] = 0;
	    out[5] = 0;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat2d.identity(dest);
	 *     mat2d.translate(dest, dest, vec);
	 *
	 * @param {mat2d} out mat2d receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat2d} out
	 */
	mat2d.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    out[4] = v[0];
	    out[5] = v[1];
	    return out;
	}
	
	/**
	 * Returns a string representation of a mat2d
	 *
	 * @param {mat2d} a matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat2d.str = function (a) {
	    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat2d
	 *
	 * @param {mat2d} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat2d.frob = function (a) { 
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
	}; 
	
	/**
	 * Adds two mat2d's
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @returns {mat2d} out
	 */
	mat2d.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    return out;
	};
	
	/**
	 * Alias for {@link mat2d.subtract}
	 * @function
	 */
	mat2d.sub = mat2d.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat2d} out the receiving matrix
	 * @param {mat2d} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat2d} out
	 */
	mat2d.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    return out;
	};
	
	/**
	 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat2d} out the receiving vector
	 * @param {mat2d} a the first operand
	 * @param {mat2d} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat2d} out
	 */
	mat2d.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    return out;
	};
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2d.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat2d} a The first matrix.
	 * @param {mat2d} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat2d.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
	};
	
	module.exports = mat2d;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	
	/**
	 * @class 3x3 Matrix
	 * @name mat3
	 */
	var mat3 = {};
	
	/**
	 * Creates a new identity mat3
	 *
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Copies the upper-left 3x3 values into the given mat3.
	 *
	 * @param {mat3} out the receiving 3x3 matrix
	 * @param {mat4} a   the source 4x4 matrix
	 * @returns {mat3} out
	 */
	mat3.fromMat4 = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[4];
	    out[4] = a[5];
	    out[5] = a[6];
	    out[6] = a[8];
	    out[7] = a[9];
	    out[8] = a[10];
	    return out;
	};
	
	/**
	 * Creates a new mat3 initialized with values from an existing matrix
	 *
	 * @param {mat3} a matrix to clone
	 * @returns {mat3} a new 3x3 matrix
	 */
	mat3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Copy the values from one mat3 to another
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Create a new mat3 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} A new mat3
	 */
	mat3.fromValues = function(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    var out = new glMatrix.ARRAY_TYPE(9);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set the components of a mat3 to the given values
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m10 Component in column 1, row 0 position (index 3)
	 * @param {Number} m11 Component in column 1, row 1 position (index 4)
	 * @param {Number} m12 Component in column 1, row 2 position (index 5)
	 * @param {Number} m20 Component in column 2, row 0 position (index 6)
	 * @param {Number} m21 Component in column 2, row 1 position (index 7)
	 * @param {Number} m22 Component in column 2, row 2 position (index 8)
	 * @returns {mat3} out
	 */
	mat3.set = function(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m10;
	    out[4] = m11;
	    out[5] = m12;
	    out[6] = m20;
	    out[7] = m21;
	    out[8] = m22;
	    return out;
	};
	
	/**
	 * Set a mat3 to the identity matrix
	 *
	 * @param {mat3} out the receiving matrix
	 * @returns {mat3} out
	 */
	mat3.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a12 = a[5];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a01;
	        out[5] = a[7];
	        out[6] = a02;
	        out[7] = a12;
	    } else {
	        out[0] = a[0];
	        out[1] = a[3];
	        out[2] = a[6];
	        out[3] = a[1];
	        out[4] = a[4];
	        out[5] = a[7];
	        out[6] = a[2];
	        out[7] = a[5];
	        out[8] = a[8];
	    }
	    
	    return out;
	};
	
	/**
	 * Inverts a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b01 = a22 * a11 - a12 * a21,
	        b11 = -a22 * a10 + a12 * a20,
	        b21 = a21 * a10 - a11 * a20,
	
	        // Calculate the determinant
	        det = a00 * b01 + a01 * b11 + a02 * b21;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = b01 * det;
	    out[1] = (-a22 * a01 + a02 * a21) * det;
	    out[2] = (a12 * a01 - a02 * a11) * det;
	    out[3] = b11 * det;
	    out[4] = (a22 * a00 - a02 * a20) * det;
	    out[5] = (-a12 * a00 + a02 * a10) * det;
	    out[6] = b21 * det;
	    out[7] = (-a21 * a00 + a01 * a20) * det;
	    out[8] = (a11 * a00 - a01 * a10) * det;
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the source matrix
	 * @returns {mat3} out
	 */
	mat3.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    out[0] = (a11 * a22 - a12 * a21);
	    out[1] = (a02 * a21 - a01 * a22);
	    out[2] = (a01 * a12 - a02 * a11);
	    out[3] = (a12 * a20 - a10 * a22);
	    out[4] = (a00 * a22 - a02 * a20);
	    out[5] = (a02 * a10 - a00 * a12);
	    out[6] = (a10 * a21 - a11 * a20);
	    out[7] = (a01 * a20 - a00 * a21);
	    out[8] = (a00 * a11 - a01 * a10);
	    return out;
	};
	
	/**
	 * Calculates the determinant of a mat3
	 *
	 * @param {mat3} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat3.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8];
	
	    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
	};
	
	/**
	 * Multiplies two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        b00 = b[0], b01 = b[1], b02 = b[2],
	        b10 = b[3], b11 = b[4], b12 = b[5],
	        b20 = b[6], b21 = b[7], b22 = b[8];
	
	    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
	    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
	    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
	
	    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
	    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
	    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
	
	    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
	    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
	    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.multiply}
	 * @function
	 */
	mat3.mul = mat3.multiply;
	
	/**
	 * Translate a mat3 by the given vector
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to translate
	 * @param {vec2} v vector to translate by
	 * @returns {mat3} out
	 */
	mat3.translate = function(out, a, v) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	        x = v[0], y = v[1];
	
	    out[0] = a00;
	    out[1] = a01;
	    out[2] = a02;
	
	    out[3] = a10;
	    out[4] = a11;
	    out[5] = a12;
	
	    out[6] = x * a00 + y * a10 + a20;
	    out[7] = x * a01 + y * a11 + a21;
	    out[8] = x * a02 + y * a12 + a22;
	    return out;
	};
	
	/**
	 * Rotates a mat3 by the given angle
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.rotate = function (out, a, rad) {
	    var a00 = a[0], a01 = a[1], a02 = a[2],
	        a10 = a[3], a11 = a[4], a12 = a[5],
	        a20 = a[6], a21 = a[7], a22 = a[8],
	
	        s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    out[0] = c * a00 + s * a10;
	    out[1] = c * a01 + s * a11;
	    out[2] = c * a02 + s * a12;
	
	    out[3] = c * a10 - s * a00;
	    out[4] = c * a11 - s * a01;
	    out[5] = c * a12 - s * a02;
	
	    out[6] = a20;
	    out[7] = a21;
	    out[8] = a22;
	    return out;
	};
	
	/**
	 * Scales the mat3 by the dimensions in the given vec2
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to rotate
	 * @param {vec2} v the vec2 to scale the matrix by
	 * @returns {mat3} out
	 **/
	mat3.scale = function(out, a, v) {
	    var x = v[0], y = v[1];
	
	    out[0] = x * a[0];
	    out[1] = x * a[1];
	    out[2] = x * a[2];
	
	    out[3] = y * a[3];
	    out[4] = y * a[4];
	    out[5] = y * a[5];
	
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    return out;
	};
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.translate(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Translation vector
	 * @returns {mat3} out
	 */
	mat3.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 1;
	    out[5] = 0;
	    out[6] = v[0];
	    out[7] = v[1];
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.rotate(dest, dest, rad);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat3} out
	 */
	mat3.fromRotation = function(out, rad) {
	    var s = Math.sin(rad), c = Math.cos(rad);
	
	    out[0] = c;
	    out[1] = s;
	    out[2] = 0;
	
	    out[3] = -s;
	    out[4] = c;
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat3.identity(dest);
	 *     mat3.scale(dest, dest, vec);
	 *
	 * @param {mat3} out mat3 receiving operation result
	 * @param {vec2} v Scaling vector
	 * @returns {mat3} out
	 */
	mat3.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	
	    out[3] = 0;
	    out[4] = v[1];
	    out[5] = 0;
	
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 1;
	    return out;
	}
	
	/**
	 * Copies the values from a mat2d into a mat3
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat2d} a the matrix to copy
	 * @returns {mat3} out
	 **/
	mat3.fromMat2d = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = 0;
	
	    out[3] = a[2];
	    out[4] = a[3];
	    out[5] = 0;
	
	    out[6] = a[4];
	    out[7] = a[5];
	    out[8] = 1;
	    return out;
	};
	
	/**
	* Calculates a 3x3 matrix from the given quaternion
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {quat} q Quaternion to create matrix from
	*
	* @returns {mat3} out
	*/
	mat3.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[3] = yx - wz;
	    out[6] = zx + wy;
	
	    out[1] = yx + wz;
	    out[4] = 1 - xx - zz;
	    out[7] = zy - wx;
	
	    out[2] = zx - wy;
	    out[5] = zy + wx;
	    out[8] = 1 - xx - yy;
	
	    return out;
	};
	
	/**
	* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
	*
	* @param {mat3} out mat3 receiving operation result
	* @param {mat4} a Mat4 to derive the normal matrix from
	*
	* @returns {mat3} out
	*/
	mat3.normalFromMat4 = function (out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) { 
	        return null; 
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	
	    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	
	    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat3
	 *
	 * @param {mat3} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat3.str = function (a) {
	    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
	                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
	                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat3
	 *
	 * @param {mat3} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat3.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
	};
	
	/**
	 * Adds two mat3's
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @returns {mat3} out
	 */
	mat3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    return out;
	};
	
	/**
	 * Alias for {@link mat3.subtract}
	 * @function
	 */
	mat3.sub = mat3.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat3} out the receiving matrix
	 * @param {mat3} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat3} out
	 */
	mat3.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    return out;
	};
	
	/**
	 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat3} out the receiving vector
	 * @param {mat3} a the first operand
	 * @param {mat3} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat3} out
	 */
	mat3.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    out[6] = a[6] + (b[6] * scale);
	    out[7] = a[7] + (b[7] * scale);
	    out[8] = a[8] + (b[8] * scale);
	    return out;
	};
	
	/*
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && 
	           a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
	           a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat3} a The first matrix.
	 * @param {mat3} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat3.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = a[6], b7 = b[7], b8 = b[8];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
	            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
	            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
	            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
	};
	
	
	module.exports = mat3;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	
	/**
	 * @class 4x4 Matrix
	 * @name mat4
	 */
	var mat4 = {
	  scalar: {},
	  SIMD: {},
	};
	
	/**
	 * Creates a new identity mat4
	 *
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Creates a new mat4 initialized with values from an existing matrix
	 *
	 * @param {mat4} a matrix to clone
	 * @returns {mat4} a new 4x4 matrix
	 */
	mat4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Copy the values from one mat4 to another
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    out[4] = a[4];
	    out[5] = a[5];
	    out[6] = a[6];
	    out[7] = a[7];
	    out[8] = a[8];
	    out[9] = a[9];
	    out[10] = a[10];
	    out[11] = a[11];
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Create a new mat4 with the given values
	 *
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} A new mat4
	 */
	mat4.fromValues = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    var out = new glMatrix.ARRAY_TYPE(16);
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	/**
	 * Set the components of a mat4 to the given values
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {Number} m00 Component in column 0, row 0 position (index 0)
	 * @param {Number} m01 Component in column 0, row 1 position (index 1)
	 * @param {Number} m02 Component in column 0, row 2 position (index 2)
	 * @param {Number} m03 Component in column 0, row 3 position (index 3)
	 * @param {Number} m10 Component in column 1, row 0 position (index 4)
	 * @param {Number} m11 Component in column 1, row 1 position (index 5)
	 * @param {Number} m12 Component in column 1, row 2 position (index 6)
	 * @param {Number} m13 Component in column 1, row 3 position (index 7)
	 * @param {Number} m20 Component in column 2, row 0 position (index 8)
	 * @param {Number} m21 Component in column 2, row 1 position (index 9)
	 * @param {Number} m22 Component in column 2, row 2 position (index 10)
	 * @param {Number} m23 Component in column 2, row 3 position (index 11)
	 * @param {Number} m30 Component in column 3, row 0 position (index 12)
	 * @param {Number} m31 Component in column 3, row 1 position (index 13)
	 * @param {Number} m32 Component in column 3, row 2 position (index 14)
	 * @param {Number} m33 Component in column 3, row 3 position (index 15)
	 * @returns {mat4} out
	 */
	mat4.set = function(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	    out[0] = m00;
	    out[1] = m01;
	    out[2] = m02;
	    out[3] = m03;
	    out[4] = m10;
	    out[5] = m11;
	    out[6] = m12;
	    out[7] = m13;
	    out[8] = m20;
	    out[9] = m21;
	    out[10] = m22;
	    out[11] = m23;
	    out[12] = m30;
	    out[13] = m31;
	    out[14] = m32;
	    out[15] = m33;
	    return out;
	};
	
	
	/**
	 * Set a mat4 to the identity matrix
	 *
	 * @param {mat4} out the receiving matrix
	 * @returns {mat4} out
	 */
	mat4.identity = function(out) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.transpose = function(out, a) {
	    // If we are transposing ourselves we can skip a few steps but have to cache some values
	    if (out === a) {
	        var a01 = a[1], a02 = a[2], a03 = a[3],
	            a12 = a[6], a13 = a[7],
	            a23 = a[11];
	
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a01;
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a02;
	        out[9] = a12;
	        out[11] = a[14];
	        out[12] = a03;
	        out[13] = a13;
	        out[14] = a23;
	    } else {
	        out[0] = a[0];
	        out[1] = a[4];
	        out[2] = a[8];
	        out[3] = a[12];
	        out[4] = a[1];
	        out[5] = a[5];
	        out[6] = a[9];
	        out[7] = a[13];
	        out[8] = a[2];
	        out[9] = a[6];
	        out[10] = a[10];
	        out[11] = a[14];
	        out[12] = a[3];
	        out[13] = a[7];
	        out[14] = a[11];
	        out[15] = a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Transpose the values of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.transpose = function(out, a) {
	    var a0, a1, a2, a3,
	        tmp01, tmp23,
	        out0, out1, out2, out3;
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    a1 = SIMD.Float32x4.load(a, 4);
	    a2 = SIMD.Float32x4.load(a, 8);
	    a3 = SIMD.Float32x4.load(a, 12);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	    out0  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out1  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 0,  out0);
	    SIMD.Float32x4.store(out, 4,  out1);
	
	    tmp01 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	    tmp23 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	    out2  = SIMD.Float32x4.shuffle(tmp01, tmp23, 0, 2, 4, 6);
	    out3  = SIMD.Float32x4.shuffle(tmp01, tmp23, 1, 3, 5, 7);
	    SIMD.Float32x4.store(out, 8,  out2);
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Transpse a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.transpose = glMatrix.USE_SIMD ? mat4.SIMD.transpose : mat4.scalar.transpose;
	
	/**
	 * Inverts a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.invert = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32,
	
	        // Calculate the determinant
	        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	
	    if (!det) {
	        return null;
	    }
	    det = 1.0 / det;
	
	    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	
	    return out;
	};
	
	/**
	 * Inverts a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.invert = function(out, a) {
	  var row0, row1, row2, row3,
	      tmp1,
	      minor0, minor1, minor2, minor3,
	      det,
	      a0 = SIMD.Float32x4.load(a, 0),
	      a1 = SIMD.Float32x4.load(a, 4),
	      a2 = SIMD.Float32x4.load(a, 8),
	      a3 = SIMD.Float32x4.load(a, 12);
	
	  // Compute matrix adjugate
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	  tmp1   = SIMD.Float32x4.mul(row2, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.mul(row1, tmp1);
	  minor1 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row1, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	  minor3 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	  minor2 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row0, row1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	  // Compute matrix determinant
	  det   = SIMD.Float32x4.mul(row0, minor0);
	  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 2, 3, 0, 1), det);
	  det   = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(det, 1, 0, 3, 2), det);
	  tmp1  = SIMD.Float32x4.reciprocalApproximation(det);
	  det   = SIMD.Float32x4.sub(
	               SIMD.Float32x4.add(tmp1, tmp1),
	               SIMD.Float32x4.mul(det, SIMD.Float32x4.mul(tmp1, tmp1)));
	  det   = SIMD.Float32x4.swizzle(det, 0, 0, 0, 0);
	  if (!det) {
	      return null;
	  }
	
	  // Compute matrix inverse
	  SIMD.Float32x4.store(out, 0,  SIMD.Float32x4.mul(det, minor0));
	  SIMD.Float32x4.store(out, 4,  SIMD.Float32x4.mul(det, minor1));
	  SIMD.Float32x4.store(out, 8,  SIMD.Float32x4.mul(det, minor2));
	  SIMD.Float32x4.store(out, 12, SIMD.Float32x4.mul(det, minor3));
	  return out;
	}
	
	/**
	 * Inverts a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.invert = glMatrix.USE_SIMD ? mat4.SIMD.invert : mat4.scalar.invert;
	
	/**
	 * Calculates the adjugate of a mat4 not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.scalar.adjoint = function(out, a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
	    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
	    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
	    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
	    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
	    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
	    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
	    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
	    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
	    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
	    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
	    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
	    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
	    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
	    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
	    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
	    return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	mat4.SIMD.adjoint = function(out, a) {
	  var a0, a1, a2, a3;
	  var row0, row1, row2, row3;
	  var tmp1;
	  var minor0, minor1, minor2, minor3;
	
	  var a0 = SIMD.Float32x4.load(a, 0);
	  var a1 = SIMD.Float32x4.load(a, 4);
	  var a2 = SIMD.Float32x4.load(a, 8);
	  var a3 = SIMD.Float32x4.load(a, 12);
	
	  // Transpose the source matrix.  Sort of.  Not a true transpose operation
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 0, 1, 4, 5);
	  row1 = SIMD.Float32x4.shuffle(a2, a3, 0, 1, 4, 5);
	  row0 = SIMD.Float32x4.shuffle(tmp1, row1, 0, 2, 4, 6);
	  row1 = SIMD.Float32x4.shuffle(row1, tmp1, 1, 3, 5, 7);
	
	  tmp1 = SIMD.Float32x4.shuffle(a0, a1, 2, 3, 6, 7);
	  row3 = SIMD.Float32x4.shuffle(a2, a3, 2, 3, 6, 7);
	  row2 = SIMD.Float32x4.shuffle(tmp1, row3, 0, 2, 4, 6);
	  row3 = SIMD.Float32x4.shuffle(row3, tmp1, 1, 3, 5, 7);
	
	  tmp1   = SIMD.Float32x4.mul(row2, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.mul(row1, tmp1);
	  minor1 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row1, tmp1), minor0);
	  minor1 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor1);
	  minor1 = SIMD.Float32x4.swizzle(minor1, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row1, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor0);
	  minor3 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor3);
	  minor3 = SIMD.Float32x4.swizzle(minor3, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(row1, 2, 3, 0, 1), row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  row2   = SIMD.Float32x4.swizzle(row2, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor0);
	  minor2 = SIMD.Float32x4.mul(row0, tmp1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor0 = SIMD.Float32x4.sub(minor0, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row0, tmp1), minor2);
	  minor2 = SIMD.Float32x4.swizzle(minor2, 2, 3, 0, 1);
	
	  tmp1   = SIMD.Float32x4.mul(row0, row1);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row2, tmp1), minor3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor2 = SIMD.Float32x4.sub(SIMD.Float32x4.mul(row3, tmp1), minor2);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row2, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row3);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row2, tmp1));
	  minor2 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row2, tmp1), minor1);
	  minor2 = SIMD.Float32x4.sub(minor2, SIMD.Float32x4.mul(row1, tmp1));
	
	  tmp1   = SIMD.Float32x4.mul(row0, row2);
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 1, 0, 3, 2);
	  minor1 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row3, tmp1), minor1);
	  minor3 = SIMD.Float32x4.sub(minor3, SIMD.Float32x4.mul(row1, tmp1));
	  tmp1   = SIMD.Float32x4.swizzle(tmp1, 2, 3, 0, 1);
	  minor1 = SIMD.Float32x4.sub(minor1, SIMD.Float32x4.mul(row3, tmp1));
	  minor3 = SIMD.Float32x4.add(SIMD.Float32x4.mul(row1, tmp1), minor3);
	
	  SIMD.Float32x4.store(out, 0,  minor0);
	  SIMD.Float32x4.store(out, 4,  minor1);
	  SIMD.Float32x4.store(out, 8,  minor2);
	  SIMD.Float32x4.store(out, 12, minor3);
	  return out;
	};
	
	/**
	 * Calculates the adjugate of a mat4 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the source matrix
	 * @returns {mat4} out
	 */
	 mat4.adjoint = glMatrix.USE_SIMD ? mat4.SIMD.adjoint : mat4.scalar.adjoint;
	
	/**
	 * Calculates the determinant of a mat4
	 *
	 * @param {mat4} a the source matrix
	 * @returns {Number} determinant of a
	 */
	mat4.determinant = function (a) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
	
	        b00 = a00 * a11 - a01 * a10,
	        b01 = a00 * a12 - a02 * a10,
	        b02 = a00 * a13 - a03 * a10,
	        b03 = a01 * a12 - a02 * a11,
	        b04 = a01 * a13 - a03 * a11,
	        b05 = a02 * a13 - a03 * a12,
	        b06 = a20 * a31 - a21 * a30,
	        b07 = a20 * a32 - a22 * a30,
	        b08 = a20 * a33 - a23 * a30,
	        b09 = a21 * a32 - a22 * a31,
	        b10 = a21 * a33 - a23 * a31,
	        b11 = a22 * a33 - a23 * a32;
	
	    // Calculate the determinant
	    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	};
	
	/**
	 * Multiplies two mat4's explicitly using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand, must be a Float32Array
	 * @param {mat4} b the second operand, must be a Float32Array
	 * @returns {mat4} out
	 */
	mat4.SIMD.multiply = function (out, a, b) {
	    var a0 = SIMD.Float32x4.load(a, 0);
	    var a1 = SIMD.Float32x4.load(a, 4);
	    var a2 = SIMD.Float32x4.load(a, 8);
	    var a3 = SIMD.Float32x4.load(a, 12);
	
	    var b0 = SIMD.Float32x4.load(b, 0);
	    var out0 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 2, 2, 2, 2), a2),
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b0, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 0, out0);
	
	    var b1 = SIMD.Float32x4.load(b, 4);
	    var out1 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 2, 2, 2, 2), a2),
	                           SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b1, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 4, out1);
	
	    var b2 = SIMD.Float32x4.load(b, 8);
	    var out2 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                       SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 1, 1, 1, 1), a1),
	                       SIMD.Float32x4.add(
	                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 2, 2, 2, 2), a2),
	                               SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b2, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 8, out2);
	
	    var b3 = SIMD.Float32x4.load(b, 12);
	    var out3 = SIMD.Float32x4.add(
	                   SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 0, 0, 0, 0), a0),
	                   SIMD.Float32x4.add(
	                        SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 1, 1, 1, 1), a1),
	                        SIMD.Float32x4.add(
	                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 2, 2, 2, 2), a2),
	                            SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(b3, 3, 3, 3, 3), a3))));
	    SIMD.Float32x4.store(out, 12, out3);
	
	    return out;
	};
	
	/**
	 * Multiplies two mat4's explicitly not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.scalar.multiply = function (out, a, b) {
	    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
	        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
	        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
	        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	
	    // Cache only the current line of the second matrix
	    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
	    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
	    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	
	    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
	    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
	    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
	    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
	    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
	    return out;
	};
	
	/**
	 * Multiplies two mat4's using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.multiply = glMatrix.USE_SIMD ? mat4.SIMD.multiply : mat4.scalar.multiply;
	
	/**
	 * Alias for {@link mat4.multiply}
	 * @function
	 */
	mat4.mul = mat4.multiply;
	
	/**
	 * Translate a mat4 by the given vector not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.scalar.translate = function (out, a, v) {
	    var x = v[0], y = v[1], z = v[2],
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23;
	
	    if (a === out) {
	        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
	        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
	        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
	        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
	    } else {
	        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
	        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
	        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;
	
	        out[12] = a00 * x + a10 * y + a20 * z + a[12];
	        out[13] = a01 * x + a11 * y + a21 * z + a[13];
	        out[14] = a02 * x + a12 * y + a22 * z + a[14];
	        out[15] = a03 * x + a13 * y + a23 * z + a[15];
	    }
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.SIMD.translate = function (out, a, v) {
	    var a0 = SIMD.Float32x4.load(a, 0),
	        a1 = SIMD.Float32x4.load(a, 4),
	        a2 = SIMD.Float32x4.load(a, 8),
	        a3 = SIMD.Float32x4.load(a, 12),
	        vec = SIMD.Float32x4(v[0], v[1], v[2] , 0);
	
	    if (a !== out) {
	        out[0] = a[0]; out[1] = a[1]; out[2] = a[2]; out[3] = a[3];
	        out[4] = a[4]; out[5] = a[5]; out[6] = a[6]; out[7] = a[7];
	        out[8] = a[8]; out[9] = a[9]; out[10] = a[10]; out[11] = a[11];
	    }
	
	    a0 = SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0));
	    a1 = SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1));
	    a2 = SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2));
	
	    var t0 = SIMD.Float32x4.add(a0, SIMD.Float32x4.add(a1, SIMD.Float32x4.add(a2, a3)));
	    SIMD.Float32x4.store(out, 12, t0);
	
	    return out;
	};
	
	/**
	 * Translates a mat4 by the given vector using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to translate
	 * @param {vec3} v vector to translate by
	 * @returns {mat4} out
	 */
	mat4.translate = glMatrix.USE_SIMD ? mat4.SIMD.translate : mat4.scalar.translate;
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.scalar.scale = function(out, a, v) {
	    var x = v[0], y = v[1], z = v[2];
	
	    out[0] = a[0] * x;
	    out[1] = a[1] * x;
	    out[2] = a[2] * x;
	    out[3] = a[3] * x;
	    out[4] = a[4] * y;
	    out[5] = a[5] * y;
	    out[6] = a[6] * y;
	    out[7] = a[7] * y;
	    out[8] = a[8] * z;
	    out[9] = a[9] * z;
	    out[10] = a[10] * z;
	    out[11] = a[11] * z;
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using vectorization
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 **/
	mat4.SIMD.scale = function(out, a, v) {
	    var a0, a1, a2;
	    var vec = SIMD.Float32x4(v[0], v[1], v[2], 0);
	
	    a0 = SIMD.Float32x4.load(a, 0);
	    SIMD.Float32x4.store(
	        out, 0, SIMD.Float32x4.mul(a0, SIMD.Float32x4.swizzle(vec, 0, 0, 0, 0)));
	
	    a1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(
	        out, 4, SIMD.Float32x4.mul(a1, SIMD.Float32x4.swizzle(vec, 1, 1, 1, 1)));
	
	    a2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(
	        out, 8, SIMD.Float32x4.mul(a2, SIMD.Float32x4.swizzle(vec, 2, 2, 2, 2)));
	
	    out[12] = a[12];
	    out[13] = a[13];
	    out[14] = a[14];
	    out[15] = a[15];
	    return out;
	};
	
	/**
	 * Scales the mat4 by the dimensions in the given vec3 using SIMD if available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {vec3} v the vec3 to scale the matrix by
	 * @returns {mat4} out
	 */
	mat4.scale = glMatrix.USE_SIMD ? mat4.SIMD.scale : mat4.scalar.scale;
	
	/**
	 * Rotates a mat4 by the given angle around the given axis
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.rotate = function (out, a, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t,
	        a00, a01, a02, a03,
	        a10, a11, a12, a13,
	        a20, a21, a22, a23,
	        b00, b01, b02,
	        b10, b11, b12,
	        b20, b21, b22;
	
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
	    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
	    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
	
	    // Construct the elements of the rotation matrix
	    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
	    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
	    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
	    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
	    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
	    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
	    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
	    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
	    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
	    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
	    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
	    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
	    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
	    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateX = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[0]  = a[0];
	        out[1]  = a[1];
	        out[2]  = a[2];
	        out[3]  = a[3];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[4] = a10 * c + a20 * s;
	    out[5] = a11 * c + a21 * s;
	    out[6] = a12 * c + a22 * s;
	    out[7] = a13 * c + a23 * s;
	    out[8] = a20 * c - a10 * s;
	    out[9] = a21 * c - a11 * s;
	    out[10] = a22 * c - a12 * s;
	    out[11] = a23 * c - a13 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateX = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	      out[0]  = a[0];
	      out[1]  = a[1];
	      out[2]  = a[2];
	      out[3]  = a[3];
	      out[12] = a[12];
	      out[13] = a[13];
	      out[14] = a[14];
	      out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 4,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_2, c), SIMD.Float32x4.mul(a_1, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the X axis using SIMD if availabe and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.rotateX = glMatrix.USE_SIMD ? mat4.SIMD.rotateX : mat4.scalar.rotateX;
	
	/**
	 * Rotates a matrix by the given angle around the Y axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateY = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a20 = a[8],
	        a21 = a[9],
	        a22 = a[10],
	        a23 = a[11];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[4]  = a[4];
	        out[5]  = a[5];
	        out[6]  = a[6];
	        out[7]  = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c - a20 * s;
	    out[1] = a01 * c - a21 * s;
	    out[2] = a02 * c - a22 * s;
	    out[3] = a03 * c - a23 * s;
	    out[8] = a00 * s + a20 * c;
	    out[9] = a01 * s + a21 * c;
	    out[10] = a02 * s + a22 * c;
	    out[11] = a03 * s + a23 * c;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateY = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged rows
	        out[4]  = a[4];
	        out[5]  = a[5];
	        out[6]  = a[6];
	        out[7]  = a[7];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_2 = SIMD.Float32x4.load(a, 8);
	    SIMD.Float32x4.store(out, 0,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_2, s)));
	    SIMD.Float32x4.store(out, 8,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, s), SIMD.Float32x4.mul(a_2, c)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Y axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	 mat4.rotateY = glMatrix.USE_SIMD ? mat4.SIMD.rotateY : mat4.scalar.rotateY;
	
	/**
	 * Rotates a matrix by the given angle around the Z axis not using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.scalar.rotateZ = function (out, a, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad),
	        a00 = a[0],
	        a01 = a[1],
	        a02 = a[2],
	        a03 = a[3],
	        a10 = a[4],
	        a11 = a[5],
	        a12 = a[6],
	        a13 = a[7];
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[8]  = a[8];
	        out[9]  = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    out[0] = a00 * c + a10 * s;
	    out[1] = a01 * c + a11 * s;
	    out[2] = a02 * c + a12 * s;
	    out[3] = a03 * c + a13 * s;
	    out[4] = a10 * c - a00 * s;
	    out[5] = a11 * c - a01 * s;
	    out[6] = a12 * c - a02 * s;
	    out[7] = a13 * c - a03 * s;
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis using SIMD
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.SIMD.rotateZ = function (out, a, rad) {
	    var s = SIMD.Float32x4.splat(Math.sin(rad)),
	        c = SIMD.Float32x4.splat(Math.cos(rad));
	
	    if (a !== out) { // If the source and destination differ, copy the unchanged last row
	        out[8]  = a[8];
	        out[9]  = a[9];
	        out[10] = a[10];
	        out[11] = a[11];
	        out[12] = a[12];
	        out[13] = a[13];
	        out[14] = a[14];
	        out[15] = a[15];
	    }
	
	    // Perform axis-specific matrix multiplication
	    var a_0 = SIMD.Float32x4.load(a, 0);
	    var a_1 = SIMD.Float32x4.load(a, 4);
	    SIMD.Float32x4.store(out, 0,
	                         SIMD.Float32x4.add(SIMD.Float32x4.mul(a_0, c), SIMD.Float32x4.mul(a_1, s)));
	    SIMD.Float32x4.store(out, 4,
	                         SIMD.Float32x4.sub(SIMD.Float32x4.mul(a_1, c), SIMD.Float32x4.mul(a_0, s)));
	    return out;
	};
	
	/**
	 * Rotates a matrix by the given angle around the Z axis if SIMD available and enabled
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to rotate
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	 mat4.rotateZ = glMatrix.USE_SIMD ? mat4.SIMD.rotateZ : mat4.scalar.rotateZ;
	
	/**
	 * Creates a matrix from a vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromTranslation = function(out, v) {
	    out[0] = 1;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a vector scaling
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.scale(dest, dest, vec);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {vec3} v Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromScaling = function(out, v) {
	    out[0] = v[0];
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = v[1];
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = v[2];
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a given angle around a given axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotate(dest, dest, rad, axis);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @param {vec3} axis the axis to rotate around
	 * @returns {mat4} out
	 */
	mat4.fromRotation = function(out, rad, axis) {
	    var x = axis[0], y = axis[1], z = axis[2],
	        len = Math.sqrt(x * x + y * y + z * z),
	        s, c, t;
	
	    if (Math.abs(len) < glMatrix.EPSILON) { return null; }
	
	    len = 1 / len;
	    x *= len;
	    y *= len;
	    z *= len;
	
	    s = Math.sin(rad);
	    c = Math.cos(rad);
	    t = 1 - c;
	
	    // Perform rotation-specific matrix multiplication
	    out[0] = x * x * t + c;
	    out[1] = y * x * t + z * s;
	    out[2] = z * x * t - y * s;
	    out[3] = 0;
	    out[4] = x * y * t - z * s;
	    out[5] = y * y * t + c;
	    out[6] = z * y * t + x * s;
	    out[7] = 0;
	    out[8] = x * z * t + y * s;
	    out[9] = y * z * t - x * s;
	    out[10] = z * z * t + c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the X axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateX(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromXRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = 1;
	    out[1]  = 0;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = c;
	    out[6] = s;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = -s;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Y axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateY(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromYRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = 0;
	    out[2]  = -s;
	    out[3]  = 0;
	    out[4] = 0;
	    out[5] = 1;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = s;
	    out[9] = 0;
	    out[10] = c;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from the given angle around the Z axis
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.rotateZ(dest, dest, rad);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {Number} rad the angle to rotate the matrix by
	 * @returns {mat4} out
	 */
	mat4.fromZRotation = function(out, rad) {
	    var s = Math.sin(rad),
	        c = Math.cos(rad);
	
	    // Perform axis-specific matrix multiplication
	    out[0]  = c;
	    out[1]  = s;
	    out[2]  = 0;
	    out[3]  = 0;
	    out[4] = -s;
	    out[5] = c;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 1;
	    out[11] = 0;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	    return out;
	}
	
	/**
	 * Creates a matrix from a quaternion rotation and vector translation
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslation = function (out, q, v) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - (yy + zz);
	    out[1] = xy + wz;
	    out[2] = xz - wy;
	    out[3] = 0;
	    out[4] = xy - wz;
	    out[5] = 1 - (xx + zz);
	    out[6] = yz + wx;
	    out[7] = 0;
	    out[8] = xz + wy;
	    out[9] = yz - wx;
	    out[10] = 1 - (xx + yy);
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns the translation vector component of a transformation
	 *  matrix. If a matrix is built with fromRotationTranslation,
	 *  the returned vector will be the same as the translation vector
	 *  originally supplied.
	 * @param  {vec3} out Vector to receive translation component
	 * @param  {mat4} mat Matrix to be decomposed (input)
	 * @return {vec3} out
	 */
	mat4.getTranslation = function (out, mat) {
	  out[0] = mat[12];
	  out[1] = mat[13];
	  out[2] = mat[14];
	
	  return out;
	};
	
	/**
	 * Returns a quaternion representing the rotational component
	 *  of a transformation matrix. If a matrix is built with
	 *  fromRotationTranslation, the returned quaternion will be the
	 *  same as the quaternion originally supplied.
	 * @param {quat} out Quaternion to receive the rotation component
	 * @param {mat4} mat Matrix to be decomposed (input)
	 * @return {quat} out
	 */
	mat4.getRotation = function (out, mat) {
	  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
	  var trace = mat[0] + mat[5] + mat[10];
	  var S = 0;
	
	  if (trace > 0) { 
	    S = Math.sqrt(trace + 1.0) * 2;
	    out[3] = 0.25 * S;
	    out[0] = (mat[6] - mat[9]) / S;
	    out[1] = (mat[8] - mat[2]) / S; 
	    out[2] = (mat[1] - mat[4]) / S; 
	  } else if ((mat[0] > mat[5])&(mat[0] > mat[10])) { 
	    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
	    out[3] = (mat[6] - mat[9]) / S;
	    out[0] = 0.25 * S;
	    out[1] = (mat[1] + mat[4]) / S; 
	    out[2] = (mat[8] + mat[2]) / S; 
	  } else if (mat[5] > mat[10]) { 
	    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
	    out[3] = (mat[8] - mat[2]) / S;
	    out[0] = (mat[1] + mat[4]) / S; 
	    out[1] = 0.25 * S;
	    out[2] = (mat[6] + mat[9]) / S; 
	  } else { 
	    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
	    out[3] = (mat[1] - mat[4]) / S;
	    out[0] = (mat[8] + mat[2]) / S;
	    out[1] = (mat[6] + mat[9]) / S;
	    out[2] = 0.25 * S;
	  }
	
	  return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScale = function (out, q, v, s) {
	    // Quaternion math
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        xy = x * y2,
	        xz = x * z2,
	        yy = y * y2,
	        yz = y * z2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2,
	        sx = s[0],
	        sy = s[1],
	        sz = s[2];
	
	    out[0] = (1 - (yy + zz)) * sx;
	    out[1] = (xy + wz) * sx;
	    out[2] = (xz - wy) * sx;
	    out[3] = 0;
	    out[4] = (xy - wz) * sy;
	    out[5] = (1 - (xx + zz)) * sy;
	    out[6] = (yz + wx) * sy;
	    out[7] = 0;
	    out[8] = (xz + wy) * sz;
	    out[9] = (yz - wx) * sz;
	    out[10] = (1 - (xx + yy)) * sz;
	    out[11] = 0;
	    out[12] = v[0];
	    out[13] = v[1];
	    out[14] = v[2];
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
	 * This is equivalent to (but much faster than):
	 *
	 *     mat4.identity(dest);
	 *     mat4.translate(dest, vec);
	 *     mat4.translate(dest, origin);
	 *     var quatMat = mat4.create();
	 *     quat4.toMat4(quat, quatMat);
	 *     mat4.multiply(dest, quatMat);
	 *     mat4.scale(dest, scale)
	 *     mat4.translate(dest, negativeOrigin);
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat4} q Rotation quaternion
	 * @param {vec3} v Translation vector
	 * @param {vec3} s Scaling vector
	 * @param {vec3} o The origin vector around which to scale and rotate
	 * @returns {mat4} out
	 */
	mat4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
	  // Quaternion math
	  var x = q[0], y = q[1], z = q[2], w = q[3],
	      x2 = x + x,
	      y2 = y + y,
	      z2 = z + z,
	
	      xx = x * x2,
	      xy = x * y2,
	      xz = x * z2,
	      yy = y * y2,
	      yz = y * z2,
	      zz = z * z2,
	      wx = w * x2,
	      wy = w * y2,
	      wz = w * z2,
	
	      sx = s[0],
	      sy = s[1],
	      sz = s[2],
	
	      ox = o[0],
	      oy = o[1],
	      oz = o[2];
	
	  out[0] = (1 - (yy + zz)) * sx;
	  out[1] = (xy + wz) * sx;
	  out[2] = (xz - wy) * sx;
	  out[3] = 0;
	  out[4] = (xy - wz) * sy;
	  out[5] = (1 - (xx + zz)) * sy;
	  out[6] = (yz + wx) * sy;
	  out[7] = 0;
	  out[8] = (xz + wy) * sz;
	  out[9] = (yz - wx) * sz;
	  out[10] = (1 - (xx + yy)) * sz;
	  out[11] = 0;
	  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
	  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
	  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
	  out[15] = 1;
	
	  return out;
	};
	
	/**
	 * Calculates a 4x4 matrix from the given quaternion
	 *
	 * @param {mat4} out mat4 receiving operation result
	 * @param {quat} q Quaternion to create matrix from
	 *
	 * @returns {mat4} out
	 */
	mat4.fromQuat = function (out, q) {
	    var x = q[0], y = q[1], z = q[2], w = q[3],
	        x2 = x + x,
	        y2 = y + y,
	        z2 = z + z,
	
	        xx = x * x2,
	        yx = y * x2,
	        yy = y * y2,
	        zx = z * x2,
	        zy = z * y2,
	        zz = z * z2,
	        wx = w * x2,
	        wy = w * y2,
	        wz = w * z2;
	
	    out[0] = 1 - yy - zz;
	    out[1] = yx + wz;
	    out[2] = zx - wy;
	    out[3] = 0;
	
	    out[4] = yx - wz;
	    out[5] = 1 - xx - zz;
	    out[6] = zy + wx;
	    out[7] = 0;
	
	    out[8] = zx + wy;
	    out[9] = zy - wx;
	    out[10] = 1 - xx - yy;
	    out[11] = 0;
	
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = 0;
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Generates a frustum matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Number} left Left bound of the frustum
	 * @param {Number} right Right bound of the frustum
	 * @param {Number} bottom Bottom bound of the frustum
	 * @param {Number} top Top bound of the frustum
	 * @param {Number} near Near bound of the frustum
	 * @param {Number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.frustum = function (out, left, right, bottom, top, near, far) {
	    var rl = 1 / (right - left),
	        tb = 1 / (top - bottom),
	        nf = 1 / (near - far);
	    out[0] = (near * 2) * rl;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = (near * 2) * tb;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = (right + left) * rl;
	    out[9] = (top + bottom) * tb;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (far * near * 2) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} fovy Vertical field of view in radians
	 * @param {number} aspect Aspect ratio. typically viewport width/height
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspective = function (out, fovy, aspect, near, far) {
	    var f = 1.0 / Math.tan(fovy / 2),
	        nf = 1 / (near - far);
	    out[0] = f / aspect;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = f;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = (far + near) * nf;
	    out[11] = -1;
	    out[12] = 0;
	    out[13] = 0;
	    out[14] = (2 * far * near) * nf;
	    out[15] = 0;
	    return out;
	};
	
	/**
	 * Generates a perspective projection matrix with the given field of view.
	 * This is primarily useful for generating projection matrices to be used
	 * with the still experiemental WebVR API.
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.perspectiveFromFieldOfView = function (out, fov, near, far) {
	    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0),
	        downTan = Math.tan(fov.downDegrees * Math.PI/180.0),
	        leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0),
	        rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0),
	        xScale = 2.0 / (leftTan + rightTan),
	        yScale = 2.0 / (upTan + downTan);
	
	    out[0] = xScale;
	    out[1] = 0.0;
	    out[2] = 0.0;
	    out[3] = 0.0;
	    out[4] = 0.0;
	    out[5] = yScale;
	    out[6] = 0.0;
	    out[7] = 0.0;
	    out[8] = -((leftTan - rightTan) * xScale * 0.5);
	    out[9] = ((upTan - downTan) * yScale * 0.5);
	    out[10] = far / (near - far);
	    out[11] = -1.0;
	    out[12] = 0.0;
	    out[13] = 0.0;
	    out[14] = (far * near) / (near - far);
	    out[15] = 0.0;
	    return out;
	}
	
	/**
	 * Generates a orthogonal projection matrix with the given bounds
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {number} left Left bound of the frustum
	 * @param {number} right Right bound of the frustum
	 * @param {number} bottom Bottom bound of the frustum
	 * @param {number} top Top bound of the frustum
	 * @param {number} near Near bound of the frustum
	 * @param {number} far Far bound of the frustum
	 * @returns {mat4} out
	 */
	mat4.ortho = function (out, left, right, bottom, top, near, far) {
	    var lr = 1 / (left - right),
	        bt = 1 / (bottom - top),
	        nf = 1 / (near - far);
	    out[0] = -2 * lr;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    out[4] = 0;
	    out[5] = -2 * bt;
	    out[6] = 0;
	    out[7] = 0;
	    out[8] = 0;
	    out[9] = 0;
	    out[10] = 2 * nf;
	    out[11] = 0;
	    out[12] = (left + right) * lr;
	    out[13] = (top + bottom) * bt;
	    out[14] = (far + near) * nf;
	    out[15] = 1;
	    return out;
	};
	
	/**
	 * Generates a look-at matrix with the given eye position, focal point, and up axis
	 *
	 * @param {mat4} out mat4 frustum matrix will be written into
	 * @param {vec3} eye Position of the viewer
	 * @param {vec3} center Point the viewer is looking at
	 * @param {vec3} up vec3 pointing up
	 * @returns {mat4} out
	 */
	mat4.lookAt = function (out, eye, center, up) {
	    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
	        eyex = eye[0],
	        eyey = eye[1],
	        eyez = eye[2],
	        upx = up[0],
	        upy = up[1],
	        upz = up[2],
	        centerx = center[0],
	        centery = center[1],
	        centerz = center[2];
	
	    if (Math.abs(eyex - centerx) < glMatrix.EPSILON &&
	        Math.abs(eyey - centery) < glMatrix.EPSILON &&
	        Math.abs(eyez - centerz) < glMatrix.EPSILON) {
	        return mat4.identity(out);
	    }
	
	    z0 = eyex - centerx;
	    z1 = eyey - centery;
	    z2 = eyez - centerz;
	
	    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
	    z0 *= len;
	    z1 *= len;
	    z2 *= len;
	
	    x0 = upy * z2 - upz * z1;
	    x1 = upz * z0 - upx * z2;
	    x2 = upx * z1 - upy * z0;
	    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
	    if (!len) {
	        x0 = 0;
	        x1 = 0;
	        x2 = 0;
	    } else {
	        len = 1 / len;
	        x0 *= len;
	        x1 *= len;
	        x2 *= len;
	    }
	
	    y0 = z1 * x2 - z2 * x1;
	    y1 = z2 * x0 - z0 * x2;
	    y2 = z0 * x1 - z1 * x0;
	
	    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
	    if (!len) {
	        y0 = 0;
	        y1 = 0;
	        y2 = 0;
	    } else {
	        len = 1 / len;
	        y0 *= len;
	        y1 *= len;
	        y2 *= len;
	    }
	
	    out[0] = x0;
	    out[1] = y0;
	    out[2] = z0;
	    out[3] = 0;
	    out[4] = x1;
	    out[5] = y1;
	    out[6] = z1;
	    out[7] = 0;
	    out[8] = x2;
	    out[9] = y2;
	    out[10] = z2;
	    out[11] = 0;
	    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
	    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
	    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
	    out[15] = 1;
	
	    return out;
	};
	
	/**
	 * Returns a string representation of a mat4
	 *
	 * @param {mat4} mat matrix to represent as a string
	 * @returns {String} string representation of the matrix
	 */
	mat4.str = function (a) {
	    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
	                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
	                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
	                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
	};
	
	/**
	 * Returns Frobenius norm of a mat4
	 *
	 * @param {mat4} a the matrix to calculate Frobenius norm of
	 * @returns {Number} Frobenius norm
	 */
	mat4.frob = function (a) {
	    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
	};
	
	/**
	 * Adds two mat4's
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    out[4] = a[4] + b[4];
	    out[5] = a[5] + b[5];
	    out[6] = a[6] + b[6];
	    out[7] = a[7] + b[7];
	    out[8] = a[8] + b[8];
	    out[9] = a[9] + b[9];
	    out[10] = a[10] + b[10];
	    out[11] = a[11] + b[11];
	    out[12] = a[12] + b[12];
	    out[13] = a[13] + b[13];
	    out[14] = a[14] + b[14];
	    out[15] = a[15] + b[15];
	    return out;
	};
	
	/**
	 * Subtracts matrix b from matrix a
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @returns {mat4} out
	 */
	mat4.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    out[4] = a[4] - b[4];
	    out[5] = a[5] - b[5];
	    out[6] = a[6] - b[6];
	    out[7] = a[7] - b[7];
	    out[8] = a[8] - b[8];
	    out[9] = a[9] - b[9];
	    out[10] = a[10] - b[10];
	    out[11] = a[11] - b[11];
	    out[12] = a[12] - b[12];
	    out[13] = a[13] - b[13];
	    out[14] = a[14] - b[14];
	    out[15] = a[15] - b[15];
	    return out;
	};
	
	/**
	 * Alias for {@link mat4.subtract}
	 * @function
	 */
	mat4.sub = mat4.subtract;
	
	/**
	 * Multiply each element of the matrix by a scalar.
	 *
	 * @param {mat4} out the receiving matrix
	 * @param {mat4} a the matrix to scale
	 * @param {Number} b amount to scale the matrix's elements by
	 * @returns {mat4} out
	 */
	mat4.multiplyScalar = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    out[4] = a[4] * b;
	    out[5] = a[5] * b;
	    out[6] = a[6] * b;
	    out[7] = a[7] * b;
	    out[8] = a[8] * b;
	    out[9] = a[9] * b;
	    out[10] = a[10] * b;
	    out[11] = a[11] * b;
	    out[12] = a[12] * b;
	    out[13] = a[13] * b;
	    out[14] = a[14] * b;
	    out[15] = a[15] * b;
	    return out;
	};
	
	/**
	 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
	 *
	 * @param {mat4} out the receiving vector
	 * @param {mat4} a the first operand
	 * @param {mat4} b the second operand
	 * @param {Number} scale the amount to scale b's elements by before adding
	 * @returns {mat4} out
	 */
	mat4.multiplyScalarAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    out[4] = a[4] + (b[4] * scale);
	    out[5] = a[5] + (b[5] * scale);
	    out[6] = a[6] + (b[6] * scale);
	    out[7] = a[7] + (b[7] * scale);
	    out[8] = a[8] + (b[8] * scale);
	    out[9] = a[9] + (b[9] * scale);
	    out[10] = a[10] + (b[10] * scale);
	    out[11] = a[11] + (b[11] * scale);
	    out[12] = a[12] + (b[12] * scale);
	    out[13] = a[13] + (b[13] * scale);
	    out[14] = a[14] + (b[14] * scale);
	    out[15] = a[15] + (b[15] * scale);
	    return out;
	};
	
	/**
	 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && 
	           a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && 
	           a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
	           a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
	};
	
	/**
	 * Returns whether or not the matrices have approximately the same elements in the same position.
	 *
	 * @param {mat4} a The first matrix.
	 * @param {mat4} b The second matrix.
	 * @returns {Boolean} True if the matrices are equal, false otherwise.
	 */
	mat4.equals = function (a, b) {
	    var a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3],
	        a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7], 
	        a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11], 
	        a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
	
	    var b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3],
	        b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7], 
	        b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11], 
	        b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
	
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
	            Math.abs(a4 - b4) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
	            Math.abs(a5 - b5) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
	            Math.abs(a6 - b6) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
	            Math.abs(a7 - b7) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
	            Math.abs(a8 - b8) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
	            Math.abs(a9 - b9) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
	            Math.abs(a10 - b10) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
	            Math.abs(a11 - b11) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
	            Math.abs(a12 - b12) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
	            Math.abs(a13 - b13) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
	            Math.abs(a14 - b14) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
	            Math.abs(a15 - b15) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
	};
	
	
	
	module.exports = mat4;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	var mat3 = __webpack_require__(8);
	var vec3 = __webpack_require__(11);
	var vec4 = __webpack_require__(12);
	
	/**
	 * @class Quaternion
	 * @name quat
	 */
	var quat = {};
	
	/**
	 * Creates a new identity quat
	 *
	 * @returns {quat} a new quaternion
	 */
	quat.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quaternion to represent the shortest rotation from one
	 * vector to another.
	 *
	 * Both vectors are assumed to be unit length.
	 *
	 * @param {quat} out the receiving quaternion.
	 * @param {vec3} a the initial vector
	 * @param {vec3} b the destination vector
	 * @returns {quat} out
	 */
	quat.rotationTo = (function() {
	    var tmpvec3 = vec3.create();
	    var xUnitVec3 = vec3.fromValues(1,0,0);
	    var yUnitVec3 = vec3.fromValues(0,1,0);
	
	    return function(out, a, b) {
	        var dot = vec3.dot(a, b);
	        if (dot < -0.999999) {
	            vec3.cross(tmpvec3, xUnitVec3, a);
	            if (vec3.length(tmpvec3) < 0.000001)
	                vec3.cross(tmpvec3, yUnitVec3, a);
	            vec3.normalize(tmpvec3, tmpvec3);
	            quat.setAxisAngle(out, tmpvec3, Math.PI);
	            return out;
	        } else if (dot > 0.999999) {
	            out[0] = 0;
	            out[1] = 0;
	            out[2] = 0;
	            out[3] = 1;
	            return out;
	        } else {
	            vec3.cross(tmpvec3, a, b);
	            out[0] = tmpvec3[0];
	            out[1] = tmpvec3[1];
	            out[2] = tmpvec3[2];
	            out[3] = 1 + dot;
	            return quat.normalize(out, out);
	        }
	    };
	})();
	
	/**
	 * Sets the specified quaternion with values corresponding to the given
	 * axes. Each axis is a vec3 and is expected to be unit length and
	 * perpendicular to all other specified axes.
	 *
	 * @param {vec3} view  the vector representing the viewing direction
	 * @param {vec3} right the vector representing the local "right" direction
	 * @param {vec3} up    the vector representing the local "up" direction
	 * @returns {quat} out
	 */
	quat.setAxes = (function() {
	    var matr = mat3.create();
	
	    return function(out, view, right, up) {
	        matr[0] = right[0];
	        matr[3] = right[1];
	        matr[6] = right[2];
	
	        matr[1] = up[0];
	        matr[4] = up[1];
	        matr[7] = up[2];
	
	        matr[2] = -view[0];
	        matr[5] = -view[1];
	        matr[8] = -view[2];
	
	        return quat.normalize(out, quat.fromMat3(out, matr));
	    };
	})();
	
	/**
	 * Creates a new quat initialized with values from an existing quaternion
	 *
	 * @param {quat} a quaternion to clone
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.clone = vec4.clone;
	
	/**
	 * Creates a new quat initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} a new quaternion
	 * @function
	 */
	quat.fromValues = vec4.fromValues;
	
	/**
	 * Copy the values from one quat to another
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the source quaternion
	 * @returns {quat} out
	 * @function
	 */
	quat.copy = vec4.copy;
	
	/**
	 * Set the components of a quat to the given values
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {quat} out
	 * @function
	 */
	quat.set = vec4.set;
	
	/**
	 * Set a quat to the identity quaternion
	 *
	 * @param {quat} out the receiving quaternion
	 * @returns {quat} out
	 */
	quat.identity = function(out) {
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 1;
	    return out;
	};
	
	/**
	 * Sets a quat from the given angle and rotation axis,
	 * then returns it.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {vec3} axis the axis around which to rotate
	 * @param {Number} rad the angle in radians
	 * @returns {quat} out
	 **/
	quat.setAxisAngle = function(out, axis, rad) {
	    rad = rad * 0.5;
	    var s = Math.sin(rad);
	    out[0] = s * axis[0];
	    out[1] = s * axis[1];
	    out[2] = s * axis[2];
	    out[3] = Math.cos(rad);
	    return out;
	};
	
	/**
	 * Gets the rotation axis and angle for a given
	 *  quaternion. If a quaternion is created with
	 *  setAxisAngle, this method will return the same
	 *  values as providied in the original parameter list
	 *  OR functionally equivalent values.
	 * Example: The quaternion formed by axis [0, 0, 1] and
	 *  angle -90 is the same as the quaternion formed by
	 *  [0, 0, 1] and 270. This method favors the latter.
	 * @param  {vec3} out_axis  Vector receiving the axis of rotation
	 * @param  {quat} q     Quaternion to be decomposed
	 * @return {Number}     Angle, in radians, of the rotation
	 */
	quat.getAxisAngle = function(out_axis, q) {
	    var rad = Math.acos(q[3]) * 2.0;
	    var s = Math.sin(rad / 2.0);
	    if (s != 0.0) {
	        out_axis[0] = q[0] / s;
	        out_axis[1] = q[1] / s;
	        out_axis[2] = q[2] / s;
	    } else {
	        // If s is zero, return any axis (no rotation - axis does not matter)
	        out_axis[0] = 1;
	        out_axis[1] = 0;
	        out_axis[2] = 0;
	    }
	    return rad;
	};
	
	/**
	 * Adds two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 * @function
	 */
	quat.add = vec4.add;
	
	/**
	 * Multiplies two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {quat} out
	 */
	quat.multiply = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    out[0] = ax * bw + aw * bx + ay * bz - az * by;
	    out[1] = ay * bw + aw * by + az * bx - ax * bz;
	    out[2] = az * bw + aw * bz + ax * by - ay * bx;
	    out[3] = aw * bw - ax * bx - ay * by - az * bz;
	    return out;
	};
	
	/**
	 * Alias for {@link quat.multiply}
	 * @function
	 */
	quat.mul = quat.multiply;
	
	/**
	 * Scales a quat by a scalar number
	 *
	 * @param {quat} out the receiving vector
	 * @param {quat} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {quat} out
	 * @function
	 */
	quat.scale = vec4.scale;
	
	/**
	 * Rotates a quaternion by the given angle about the X axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateX = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + aw * bx;
	    out[1] = ay * bw + az * bx;
	    out[2] = az * bw - ay * bx;
	    out[3] = aw * bw - ax * bx;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Y axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateY = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        by = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw - az * by;
	    out[1] = ay * bw + aw * by;
	    out[2] = az * bw + ax * by;
	    out[3] = aw * bw - ay * by;
	    return out;
	};
	
	/**
	 * Rotates a quaternion by the given angle about the Z axis
	 *
	 * @param {quat} out quat receiving operation result
	 * @param {quat} a quat to rotate
	 * @param {number} rad angle (in radians) to rotate
	 * @returns {quat} out
	 */
	quat.rotateZ = function (out, a, rad) {
	    rad *= 0.5; 
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bz = Math.sin(rad), bw = Math.cos(rad);
	
	    out[0] = ax * bw + ay * bz;
	    out[1] = ay * bw - ax * bz;
	    out[2] = az * bw + aw * bz;
	    out[3] = aw * bw - az * bz;
	    return out;
	};
	
	/**
	 * Calculates the W component of a quat from the X, Y, and Z components.
	 * Assumes that quaternion is 1 unit in length.
	 * Any existing W component will be ignored.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate W component of
	 * @returns {quat} out
	 */
	quat.calculateW = function (out, a) {
	    var x = a[0], y = a[1], z = a[2];
	
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
	    return out;
	};
	
	/**
	 * Calculates the dot product of two quat's
	 *
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @returns {Number} dot product of a and b
	 * @function
	 */
	quat.dot = vec4.dot;
	
	/**
	 * Performs a linear interpolation between two quat's
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 * @function
	 */
	quat.lerp = vec4.lerp;
	
	/**
	 * Performs a spherical linear interpolation between two quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {quat} out
	 */
	quat.slerp = function (out, a, b, t) {
	    // benchmarks:
	    //    http://jsperf.com/quaternion-slerp-implementations
	
	    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
	        bx = b[0], by = b[1], bz = b[2], bw = b[3];
	
	    var        omega, cosom, sinom, scale0, scale1;
	
	    // calc cosine
	    cosom = ax * bx + ay * by + az * bz + aw * bw;
	    // adjust signs (if necessary)
	    if ( cosom < 0.0 ) {
	        cosom = -cosom;
	        bx = - bx;
	        by = - by;
	        bz = - bz;
	        bw = - bw;
	    }
	    // calculate coefficients
	    if ( (1.0 - cosom) > 0.000001 ) {
	        // standard case (slerp)
	        omega  = Math.acos(cosom);
	        sinom  = Math.sin(omega);
	        scale0 = Math.sin((1.0 - t) * omega) / sinom;
	        scale1 = Math.sin(t * omega) / sinom;
	    } else {        
	        // "from" and "to" quaternions are very close 
	        //  ... so we can do a linear interpolation
	        scale0 = 1.0 - t;
	        scale1 = t;
	    }
	    // calculate final values
	    out[0] = scale0 * ax + scale1 * bx;
	    out[1] = scale0 * ay + scale1 * by;
	    out[2] = scale0 * az + scale1 * bz;
	    out[3] = scale0 * aw + scale1 * bw;
	    
	    return out;
	};
	
	/**
	 * Performs a spherical linear interpolation with two control points
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a the first operand
	 * @param {quat} b the second operand
	 * @param {quat} c the third operand
	 * @param {quat} d the fourth operand
	 * @param {Number} t interpolation amount
	 * @returns {quat} out
	 */
	quat.sqlerp = (function () {
	  var temp1 = quat.create();
	  var temp2 = quat.create();
	  
	  return function (out, a, b, c, d, t) {
	    quat.slerp(temp1, a, d, t);
	    quat.slerp(temp2, b, c, t);
	    quat.slerp(out, temp1, temp2, 2 * t * (1 - t));
	    
	    return out;
	  };
	}());
	
	/**
	 * Calculates the inverse of a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate inverse of
	 * @returns {quat} out
	 */
	quat.invert = function(out, a) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
	        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
	        invDot = dot ? 1.0/dot : 0;
	    
	    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
	
	    out[0] = -a0*invDot;
	    out[1] = -a1*invDot;
	    out[2] = -a2*invDot;
	    out[3] = a3*invDot;
	    return out;
	};
	
	/**
	 * Calculates the conjugate of a quat
	 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quat to calculate conjugate of
	 * @returns {quat} out
	 */
	quat.conjugate = function (out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Calculates the length of a quat
	 *
	 * @param {quat} a vector to calculate length of
	 * @returns {Number} length of a
	 * @function
	 */
	quat.length = vec4.length;
	
	/**
	 * Alias for {@link quat.length}
	 * @function
	 */
	quat.len = quat.length;
	
	/**
	 * Calculates the squared length of a quat
	 *
	 * @param {quat} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 * @function
	 */
	quat.squaredLength = vec4.squaredLength;
	
	/**
	 * Alias for {@link quat.squaredLength}
	 * @function
	 */
	quat.sqrLen = quat.squaredLength;
	
	/**
	 * Normalize a quat
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {quat} a quaternion to normalize
	 * @returns {quat} out
	 * @function
	 */
	quat.normalize = vec4.normalize;
	
	/**
	 * Creates a quaternion from the given 3x3 rotation matrix.
	 *
	 * NOTE: The resultant quaternion is not normalized, so you should be sure
	 * to renormalize the quaternion yourself where necessary.
	 *
	 * @param {quat} out the receiving quaternion
	 * @param {mat3} m rotation matrix
	 * @returns {quat} out
	 * @function
	 */
	quat.fromMat3 = function(out, m) {
	    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
	    // article "Quaternion Calculus and Fast Animation".
	    var fTrace = m[0] + m[4] + m[8];
	    var fRoot;
	
	    if ( fTrace > 0.0 ) {
	        // |w| > 1/2, may as well choose w > 1/2
	        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
	        out[3] = 0.5 * fRoot;
	        fRoot = 0.5/fRoot;  // 1/(4w)
	        out[0] = (m[5]-m[7])*fRoot;
	        out[1] = (m[6]-m[2])*fRoot;
	        out[2] = (m[1]-m[3])*fRoot;
	    } else {
	        // |w| <= 1/2
	        var i = 0;
	        if ( m[4] > m[0] )
	          i = 1;
	        if ( m[8] > m[i*3+i] )
	          i = 2;
	        var j = (i+1)%3;
	        var k = (i+2)%3;
	        
	        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
	        out[i] = 0.5 * fRoot;
	        fRoot = 0.5 / fRoot;
	        out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
	        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
	        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
	    }
	    
	    return out;
	};
	
	/**
	 * Returns a string representation of a quatenion
	 *
	 * @param {quat} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	quat.str = function (a) {
	    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {quat} a The first quaternion.
	 * @param {quat} b The second quaternion.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	quat.exactEquals = vec4.exactEquals;
	
	/**
	 * Returns whether or not the quaternions have approximately the same elements in the same position.
	 *
	 * @param {quat} a The first vector.
	 * @param {quat} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	quat.equals = vec4.equals;
	
	module.exports = quat;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	
	/**
	 * @class 3 Dimensional Vector
	 * @name vec3
	 */
	var vec3 = {};
	
	/**
	 * Creates a new, empty vec3
	 *
	 * @returns {vec3} a new 3D vector
	 */
	vec3.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with values from an existing vector
	 *
	 * @param {vec3} a vector to clone
	 * @returns {vec3} a new 3D vector
	 */
	vec3.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Creates a new vec3 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} a new 3D vector
	 */
	vec3.fromValues = function(x, y, z) {
	    var out = new glMatrix.ARRAY_TYPE(3);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Copy the values from one vec3 to another
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the source vector
	 * @returns {vec3} out
	 */
	vec3.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    return out;
	};
	
	/**
	 * Set the components of a vec3 to the given values
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @returns {vec3} out
	 */
	vec3.set = function(out, x, y, z) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Adds two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.subtract}
	 * @function
	 */
	vec3.sub = vec3.subtract;
	
	/**
	 * Multiplies two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.multiply}
	 * @function
	 */
	vec3.mul = vec3.multiply;
	
	/**
	 * Divides two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    return out;
	};
	
	/**
	 * Alias for {@link vec3.divide}
	 * @function
	 */
	vec3.div = vec3.divide;
	
	/**
	 * Math.ceil the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to ceil
	 * @returns {vec3} out
	 */
	vec3.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    out[2] = Math.ceil(a[2]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to floor
	 * @returns {vec3} out
	 */
	vec3.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    out[2] = Math.floor(a[2]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to round
	 * @returns {vec3} out
	 */
	vec3.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    out[2] = Math.round(a[2]);
	    return out;
	};
	
	/**
	 * Scales a vec3 by a scalar number
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec3} out
	 */
	vec3.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    return out;
	};
	
	/**
	 * Adds two vec3's after scaling the second operand by a scalar value
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec3} out
	 */
	vec3.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec3.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.distance}
	 * @function
	 */
	vec3.dist = vec3.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec3.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredDistance}
	 * @function
	 */
	vec3.sqrDist = vec3.squaredDistance;
	
	/**
	 * Calculates the length of a vec3
	 *
	 * @param {vec3} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec3.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return Math.sqrt(x*x + y*y + z*z);
	};
	
	/**
	 * Alias for {@link vec3.length}
	 * @function
	 */
	vec3.len = vec3.length;
	
	/**
	 * Calculates the squared length of a vec3
	 *
	 * @param {vec3} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec3.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    return x*x + y*y + z*z;
	};
	
	/**
	 * Alias for {@link vec3.squaredLength}
	 * @function
	 */
	vec3.sqrLen = vec3.squaredLength;
	
	/**
	 * Negates the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to negate
	 * @returns {vec3} out
	 */
	vec3.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to invert
	 * @returns {vec3} out
	 */
	vec3.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  return out;
	};
	
	/**
	 * Normalize a vec3
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a vector to normalize
	 * @returns {vec3} out
	 */
	vec3.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2];
	    var len = x*x + y*y + z*z;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	        out[2] = a[2] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec3's
	 *
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec3.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	};
	
	/**
	 * Computes the cross product of two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @returns {vec3} out
	 */
	vec3.cross = function(out, a, b) {
	    var ax = a[0], ay = a[1], az = a[2],
	        bx = b[0], by = b[1], bz = b[2];
	
	    out[0] = ay * bz - az * by;
	    out[1] = az * bx - ax * bz;
	    out[2] = ax * by - ay * bx;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec3's
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    return out;
	};
	
	/**
	 * Performs a hermite interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.hermite = function (out, a, b, c, d, t) {
	  var factorTimes2 = t * t,
	      factor1 = factorTimes2 * (2 * t - 3) + 1,
	      factor2 = factorTimes2 * (t - 2) + t,
	      factor3 = factorTimes2 * (t - 1),
	      factor4 = factorTimes2 * (3 - 2 * t);
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Performs a bezier interpolation with two control points
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the first operand
	 * @param {vec3} b the second operand
	 * @param {vec3} c the third operand
	 * @param {vec3} d the fourth operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec3} out
	 */
	vec3.bezier = function (out, a, b, c, d, t) {
	  var inverseFactor = 1 - t,
	      inverseFactorTimesTwo = inverseFactor * inverseFactor,
	      factorTimes2 = t * t,
	      factor1 = inverseFactorTimesTwo * inverseFactor,
	      factor2 = 3 * t * inverseFactorTimesTwo,
	      factor3 = 3 * factorTimes2 * inverseFactor,
	      factor4 = factorTimes2 * t;
	  
	  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
	  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
	  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
	  
	  return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec3} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec3} out
	 */
	vec3.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    var z = (glMatrix.RANDOM() * 2.0) - 1.0;
	    var zScale = Math.sqrt(1.0-z*z) * scale;
	
	    out[0] = Math.cos(r) * zScale;
	    out[1] = Math.sin(r) * zScale;
	    out[2] = z * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat4.
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2],
	        w = m[3] * x + m[7] * y + m[11] * z + m[15];
	    w = w || 1.0;
	    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
	    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
	    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a mat3.
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {mat4} m the 3x3 matrix to transform with
	 * @returns {vec3} out
	 */
	vec3.transformMat3 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2];
	    out[0] = x * m[0] + y * m[3] + z * m[6];
	    out[1] = x * m[1] + y * m[4] + z * m[7];
	    out[2] = x * m[2] + y * m[5] + z * m[8];
	    return out;
	};
	
	/**
	 * Transforms the vec3 with a quat
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec3} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec3} out
	 */
	vec3.transformQuat = function(out, a, q) {
	    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
	
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    return out;
	};
	
	/**
	 * Rotate a 3D vector around the x-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateX = function(out, a, b, c){
	   var p = [], r=[];
		  //Translate point to the origin
		  p[0] = a[0] - b[0];
		  p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	
		  //perform rotation
		  r[0] = p[0];
		  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
		  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);
	
		  //translate to correct position
		  out[0] = r[0] + b[0];
		  out[1] = r[1] + b[1];
		  out[2] = r[2] + b[2];
	
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the y-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateY = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
	  	r[1] = p[1];
	  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Rotate a 3D vector around the z-axis
	 * @param {vec3} out The receiving vec3
	 * @param {vec3} a The vec3 point to rotate
	 * @param {vec3} b The origin of the rotation
	 * @param {Number} c The angle of rotation
	 * @returns {vec3} out
	 */
	vec3.rotateZ = function(out, a, b, c){
	  	var p = [], r=[];
	  	//Translate point to the origin
	  	p[0] = a[0] - b[0];
	  	p[1] = a[1] - b[1];
	  	p[2] = a[2] - b[2];
	  
	  	//perform rotation
	  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
	  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
	  	r[2] = p[2];
	  
	  	//translate to correct position
	  	out[0] = r[0] + b[0];
	  	out[1] = r[1] + b[1];
	  	out[2] = r[2] + b[2];
	  
	  	return out;
	};
	
	/**
	 * Perform some operation over an array of vec3s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec3.forEach = (function() {
	    var vec = vec3.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 3;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Get the angle between two 3D vectors
	 * @param {vec3} a The first operand
	 * @param {vec3} b The second operand
	 * @returns {Number} The angle in radians
	 */
	vec3.angle = function(a, b) {
	   
	    var tempA = vec3.fromValues(a[0], a[1], a[2]);
	    var tempB = vec3.fromValues(b[0], b[1], b[2]);
	 
	    vec3.normalize(tempA, tempA);
	    vec3.normalize(tempB, tempB);
	 
	    var cosine = vec3.dot(tempA, tempB);
	
	    if(cosine > 1.0){
	        return 0;
	    } else {
	        return Math.acos(cosine);
	    }     
	};
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec3} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec3.str = function (a) {
	    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
	};
	
	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec3.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec3} a The first vector.
	 * @param {vec3} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec3.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2];
	    var b0 = b[0], b1 = b[1], b2 = b[2];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
	};
	
	module.exports = vec3;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	
	/**
	 * @class 4 Dimensional Vector
	 * @name vec4
	 */
	var vec4 = {};
	
	/**
	 * Creates a new, empty vec4
	 *
	 * @returns {vec4} a new 4D vector
	 */
	vec4.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = 0;
	    out[1] = 0;
	    out[2] = 0;
	    out[3] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with values from an existing vector
	 *
	 * @param {vec4} a vector to clone
	 * @returns {vec4} a new 4D vector
	 */
	vec4.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Creates a new vec4 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} a new 4D vector
	 */
	vec4.fromValues = function(x, y, z, w) {
	    var out = new glMatrix.ARRAY_TYPE(4);
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Copy the values from one vec4 to another
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the source vector
	 * @returns {vec4} out
	 */
	vec4.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    out[2] = a[2];
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Set the components of a vec4 to the given values
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @param {Number} z Z component
	 * @param {Number} w W component
	 * @returns {vec4} out
	 */
	vec4.set = function(out, x, y, z, w) {
	    out[0] = x;
	    out[1] = y;
	    out[2] = z;
	    out[3] = w;
	    return out;
	};
	
	/**
	 * Adds two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    out[2] = a[2] + b[2];
	    out[3] = a[3] + b[3];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    out[2] = a[2] - b[2];
	    out[3] = a[3] - b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.subtract}
	 * @function
	 */
	vec4.sub = vec4.subtract;
	
	/**
	 * Multiplies two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    out[2] = a[2] * b[2];
	    out[3] = a[3] * b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.multiply}
	 * @function
	 */
	vec4.mul = vec4.multiply;
	
	/**
	 * Divides two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    out[2] = a[2] / b[2];
	    out[3] = a[3] / b[3];
	    return out;
	};
	
	/**
	 * Alias for {@link vec4.divide}
	 * @function
	 */
	vec4.div = vec4.divide;
	
	/**
	 * Math.ceil the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to ceil
	 * @returns {vec4} out
	 */
	vec4.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    out[2] = Math.ceil(a[2]);
	    out[3] = Math.ceil(a[3]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to floor
	 * @returns {vec4} out
	 */
	vec4.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    out[2] = Math.floor(a[2]);
	    out[3] = Math.floor(a[3]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    out[2] = Math.min(a[2], b[2]);
	    out[3] = Math.min(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {vec4} out
	 */
	vec4.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    out[2] = Math.max(a[2], b[2]);
	    out[3] = Math.max(a[3], b[3]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to round
	 * @returns {vec4} out
	 */
	vec4.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    out[2] = Math.round(a[2]);
	    out[3] = Math.round(a[3]);
	    return out;
	};
	
	/**
	 * Scales a vec4 by a scalar number
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec4} out
	 */
	vec4.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    out[2] = a[2] * b;
	    out[3] = a[3] * b;
	    return out;
	};
	
	/**
	 * Adds two vec4's after scaling the second operand by a scalar value
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec4} out
	 */
	vec4.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    out[2] = a[2] + (b[2] * scale);
	    out[3] = a[3] + (b[3] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec4.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.distance}
	 * @function
	 */
	vec4.dist = vec4.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec4.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1],
	        z = b[2] - a[2],
	        w = b[3] - a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredDistance}
	 * @function
	 */
	vec4.sqrDist = vec4.squaredDistance;
	
	/**
	 * Calculates the length of a vec4
	 *
	 * @param {vec4} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec4.length = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return Math.sqrt(x*x + y*y + z*z + w*w);
	};
	
	/**
	 * Alias for {@link vec4.length}
	 * @function
	 */
	vec4.len = vec4.length;
	
	/**
	 * Calculates the squared length of a vec4
	 *
	 * @param {vec4} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec4.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    return x*x + y*y + z*z + w*w;
	};
	
	/**
	 * Alias for {@link vec4.squaredLength}
	 * @function
	 */
	vec4.sqrLen = vec4.squaredLength;
	
	/**
	 * Negates the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to negate
	 * @returns {vec4} out
	 */
	vec4.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    out[2] = -a[2];
	    out[3] = -a[3];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to invert
	 * @returns {vec4} out
	 */
	vec4.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  out[2] = 1.0 / a[2];
	  out[3] = 1.0 / a[3];
	  return out;
	};
	
	/**
	 * Normalize a vec4
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a vector to normalize
	 * @returns {vec4} out
	 */
	vec4.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1],
	        z = a[2],
	        w = a[3];
	    var len = x*x + y*y + z*z + w*w;
	    if (len > 0) {
	        len = 1 / Math.sqrt(len);
	        out[0] = x * len;
	        out[1] = y * len;
	        out[2] = z * len;
	        out[3] = w * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec4's
	 *
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec4.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	};
	
	/**
	 * Performs a linear interpolation between two vec4's
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the first operand
	 * @param {vec4} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec4} out
	 */
	vec4.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1],
	        az = a[2],
	        aw = a[3];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    out[2] = az + t * (b[2] - az);
	    out[3] = aw + t * (b[3] - aw);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec4} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec4} out
	 */
	vec4.random = function (out, scale) {
	    scale = scale || 1.0;
	
	    //TODO: This is a pretty awful way of doing this. Find something better.
	    out[0] = glMatrix.RANDOM();
	    out[1] = glMatrix.RANDOM();
	    out[2] = glMatrix.RANDOM();
	    out[3] = glMatrix.RANDOM();
	    vec4.normalize(out, out);
	    vec4.scale(out, out, scale);
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a mat4.
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec4} out
	 */
	vec4.transformMat4 = function(out, a, m) {
	    var x = a[0], y = a[1], z = a[2], w = a[3];
	    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
	    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
	    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
	    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
	    return out;
	};
	
	/**
	 * Transforms the vec4 with a quat
	 *
	 * @param {vec4} out the receiving vector
	 * @param {vec4} a the vector to transform
	 * @param {quat} q quaternion to transform with
	 * @returns {vec4} out
	 */
	vec4.transformQuat = function(out, a, q) {
	    var x = a[0], y = a[1], z = a[2],
	        qx = q[0], qy = q[1], qz = q[2], qw = q[3],
	
	        // calculate quat * vec
	        ix = qw * x + qy * z - qz * y,
	        iy = qw * y + qz * x - qx * z,
	        iz = qw * z + qx * y - qy * x,
	        iw = -qx * x - qy * y - qz * z;
	
	    // calculate result * inverse quat
	    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
	    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
	    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
	    out[3] = a[3];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec4s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec4.forEach = (function() {
	    var vec = vec4.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 4;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec4} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec4.str = function (a) {
	    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
	};
	
	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec4.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec4} a The first vector.
	 * @param {vec4} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec4.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
	    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
	            Math.abs(a2 - b2) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
	            Math.abs(a3 - b3) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
	};
	
	module.exports = vec4;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE. */
	
	var glMatrix = __webpack_require__(5);
	
	/**
	 * @class 2 Dimensional Vector
	 * @name vec2
	 */
	var vec2 = {};
	
	/**
	 * Creates a new, empty vec2
	 *
	 * @returns {vec2} a new 2D vector
	 */
	vec2.create = function() {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = 0;
	    out[1] = 0;
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with values from an existing vector
	 *
	 * @param {vec2} a vector to clone
	 * @returns {vec2} a new 2D vector
	 */
	vec2.clone = function(a) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Creates a new vec2 initialized with the given values
	 *
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} a new 2D vector
	 */
	vec2.fromValues = function(x, y) {
	    var out = new glMatrix.ARRAY_TYPE(2);
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Copy the values from one vec2 to another
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the source vector
	 * @returns {vec2} out
	 */
	vec2.copy = function(out, a) {
	    out[0] = a[0];
	    out[1] = a[1];
	    return out;
	};
	
	/**
	 * Set the components of a vec2 to the given values
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} x X component
	 * @param {Number} y Y component
	 * @returns {vec2} out
	 */
	vec2.set = function(out, x, y) {
	    out[0] = x;
	    out[1] = y;
	    return out;
	};
	
	/**
	 * Adds two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.add = function(out, a, b) {
	    out[0] = a[0] + b[0];
	    out[1] = a[1] + b[1];
	    return out;
	};
	
	/**
	 * Subtracts vector b from vector a
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.subtract = function(out, a, b) {
	    out[0] = a[0] - b[0];
	    out[1] = a[1] - b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.subtract}
	 * @function
	 */
	vec2.sub = vec2.subtract;
	
	/**
	 * Multiplies two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.multiply = function(out, a, b) {
	    out[0] = a[0] * b[0];
	    out[1] = a[1] * b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.multiply}
	 * @function
	 */
	vec2.mul = vec2.multiply;
	
	/**
	 * Divides two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.divide = function(out, a, b) {
	    out[0] = a[0] / b[0];
	    out[1] = a[1] / b[1];
	    return out;
	};
	
	/**
	 * Alias for {@link vec2.divide}
	 * @function
	 */
	vec2.div = vec2.divide;
	
	/**
	 * Math.ceil the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to ceil
	 * @returns {vec2} out
	 */
	vec2.ceil = function (out, a) {
	    out[0] = Math.ceil(a[0]);
	    out[1] = Math.ceil(a[1]);
	    return out;
	};
	
	/**
	 * Math.floor the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to floor
	 * @returns {vec2} out
	 */
	vec2.floor = function (out, a) {
	    out[0] = Math.floor(a[0]);
	    out[1] = Math.floor(a[1]);
	    return out;
	};
	
	/**
	 * Returns the minimum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.min = function(out, a, b) {
	    out[0] = Math.min(a[0], b[0]);
	    out[1] = Math.min(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Returns the maximum of two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec2} out
	 */
	vec2.max = function(out, a, b) {
	    out[0] = Math.max(a[0], b[0]);
	    out[1] = Math.max(a[1], b[1]);
	    return out;
	};
	
	/**
	 * Math.round the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to round
	 * @returns {vec2} out
	 */
	vec2.round = function (out, a) {
	    out[0] = Math.round(a[0]);
	    out[1] = Math.round(a[1]);
	    return out;
	};
	
	/**
	 * Scales a vec2 by a scalar number
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to scale
	 * @param {Number} b amount to scale the vector by
	 * @returns {vec2} out
	 */
	vec2.scale = function(out, a, b) {
	    out[0] = a[0] * b;
	    out[1] = a[1] * b;
	    return out;
	};
	
	/**
	 * Adds two vec2's after scaling the second operand by a scalar value
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} scale the amount to scale b by before adding
	 * @returns {vec2} out
	 */
	vec2.scaleAndAdd = function(out, a, b, scale) {
	    out[0] = a[0] + (b[0] * scale);
	    out[1] = a[1] + (b[1] * scale);
	    return out;
	};
	
	/**
	 * Calculates the euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} distance between a and b
	 */
	vec2.distance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.distance}
	 * @function
	 */
	vec2.dist = vec2.distance;
	
	/**
	 * Calculates the squared euclidian distance between two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} squared distance between a and b
	 */
	vec2.squaredDistance = function(a, b) {
	    var x = b[0] - a[0],
	        y = b[1] - a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredDistance}
	 * @function
	 */
	vec2.sqrDist = vec2.squaredDistance;
	
	/**
	 * Calculates the length of a vec2
	 *
	 * @param {vec2} a vector to calculate length of
	 * @returns {Number} length of a
	 */
	vec2.length = function (a) {
	    var x = a[0],
	        y = a[1];
	    return Math.sqrt(x*x + y*y);
	};
	
	/**
	 * Alias for {@link vec2.length}
	 * @function
	 */
	vec2.len = vec2.length;
	
	/**
	 * Calculates the squared length of a vec2
	 *
	 * @param {vec2} a vector to calculate squared length of
	 * @returns {Number} squared length of a
	 */
	vec2.squaredLength = function (a) {
	    var x = a[0],
	        y = a[1];
	    return x*x + y*y;
	};
	
	/**
	 * Alias for {@link vec2.squaredLength}
	 * @function
	 */
	vec2.sqrLen = vec2.squaredLength;
	
	/**
	 * Negates the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to negate
	 * @returns {vec2} out
	 */
	vec2.negate = function(out, a) {
	    out[0] = -a[0];
	    out[1] = -a[1];
	    return out;
	};
	
	/**
	 * Returns the inverse of the components of a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to invert
	 * @returns {vec2} out
	 */
	vec2.inverse = function(out, a) {
	  out[0] = 1.0 / a[0];
	  out[1] = 1.0 / a[1];
	  return out;
	};
	
	/**
	 * Normalize a vec2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a vector to normalize
	 * @returns {vec2} out
	 */
	vec2.normalize = function(out, a) {
	    var x = a[0],
	        y = a[1];
	    var len = x*x + y*y;
	    if (len > 0) {
	        //TODO: evaluate use of glm_invsqrt here?
	        len = 1 / Math.sqrt(len);
	        out[0] = a[0] * len;
	        out[1] = a[1] * len;
	    }
	    return out;
	};
	
	/**
	 * Calculates the dot product of two vec2's
	 *
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {Number} dot product of a and b
	 */
	vec2.dot = function (a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	};
	
	/**
	 * Computes the cross product of two vec2's
	 * Note that the cross product must by definition produce a 3D vector
	 *
	 * @param {vec3} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @returns {vec3} out
	 */
	vec2.cross = function(out, a, b) {
	    var z = a[0] * b[1] - a[1] * b[0];
	    out[0] = out[1] = 0;
	    out[2] = z;
	    return out;
	};
	
	/**
	 * Performs a linear interpolation between two vec2's
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the first operand
	 * @param {vec2} b the second operand
	 * @param {Number} t interpolation amount between the two inputs
	 * @returns {vec2} out
	 */
	vec2.lerp = function (out, a, b, t) {
	    var ax = a[0],
	        ay = a[1];
	    out[0] = ax + t * (b[0] - ax);
	    out[1] = ay + t * (b[1] - ay);
	    return out;
	};
	
	/**
	 * Generates a random vector with the given scale
	 *
	 * @param {vec2} out the receiving vector
	 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
	 * @returns {vec2} out
	 */
	vec2.random = function (out, scale) {
	    scale = scale || 1.0;
	    var r = glMatrix.RANDOM() * 2.0 * Math.PI;
	    out[0] = Math.cos(r) * scale;
	    out[1] = Math.sin(r) * scale;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y;
	    out[1] = m[1] * x + m[3] * y;
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat2d
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat2d} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat2d = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[2] * y + m[4];
	    out[1] = m[1] * x + m[3] * y + m[5];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat3
	 * 3rd vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat3} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat3 = function(out, a, m) {
	    var x = a[0],
	        y = a[1];
	    out[0] = m[0] * x + m[3] * y + m[6];
	    out[1] = m[1] * x + m[4] * y + m[7];
	    return out;
	};
	
	/**
	 * Transforms the vec2 with a mat4
	 * 3rd vector component is implicitly '0'
	 * 4th vector component is implicitly '1'
	 *
	 * @param {vec2} out the receiving vector
	 * @param {vec2} a the vector to transform
	 * @param {mat4} m matrix to transform with
	 * @returns {vec2} out
	 */
	vec2.transformMat4 = function(out, a, m) {
	    var x = a[0], 
	        y = a[1];
	    out[0] = m[0] * x + m[4] * y + m[12];
	    out[1] = m[1] * x + m[5] * y + m[13];
	    return out;
	};
	
	/**
	 * Perform some operation over an array of vec2s.
	 *
	 * @param {Array} a the array of vectors to iterate over
	 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
	 * @param {Number} offset Number of elements to skip at the beginning of the array
	 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
	 * @param {Function} fn Function to call for each vector in the array
	 * @param {Object} [arg] additional argument to pass to fn
	 * @returns {Array} a
	 * @function
	 */
	vec2.forEach = (function() {
	    var vec = vec2.create();
	
	    return function(a, stride, offset, count, fn, arg) {
	        var i, l;
	        if(!stride) {
	            stride = 2;
	        }
	
	        if(!offset) {
	            offset = 0;
	        }
	        
	        if(count) {
	            l = Math.min((count * stride) + offset, a.length);
	        } else {
	            l = a.length;
	        }
	
	        for(i = offset; i < l; i += stride) {
	            vec[0] = a[i]; vec[1] = a[i+1];
	            fn(vec, vec, arg);
	            a[i] = vec[0]; a[i+1] = vec[1];
	        }
	        
	        return a;
	    };
	})();
	
	/**
	 * Returns a string representation of a vector
	 *
	 * @param {vec2} vec vector to represent as a string
	 * @returns {String} string representation of the vector
	 */
	vec2.str = function (a) {
	    return 'vec2(' + a[0] + ', ' + a[1] + ')';
	};
	
	/**
	 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.exactEquals = function (a, b) {
	    return a[0] === b[0] && a[1] === b[1];
	};
	
	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 *
	 * @param {vec2} a The first vector.
	 * @param {vec2} b The second vector.
	 * @returns {Boolean} True if the vectors are equal, false otherwise.
	 */
	vec2.equals = function (a, b) {
	    var a0 = a[0], a1 = a[1];
	    var b0 = b[0], b1 = b[1];
	    return (Math.abs(a0 - b0) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
	            Math.abs(a1 - b1) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
	};
	
	module.exports = vec2;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VectorBase2 = __webpack_require__(3);
	
	var _VectorBase3 = _interopRequireDefault(_VectorBase2);
	
	var _Vector = __webpack_require__(2);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Color = __webpack_require__(15);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Vector3 = __webpack_require__(16);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _Colors = __webpack_require__(17);
	
	var _Colors2 = _interopRequireDefault(_Colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ///<reference path="./gl-matrix.d.ts"/>
	
	
	var Color3 = function (_VectorBase) {
	    _inherits(Color3, _VectorBase);
	
	    _createClass(Color3, null, [{
	        key: "fromColor4",
	        value: function fromColor4(col) {
	            return new Color3(col.R, col.G, col.B);
	        }
	    }, {
	        key: "parse",
	        value: function parse(color, tryParse) {
	            return Color3.internalParse(color, true, tryParse);
	        }
	        /// Color parser for css like syntax
	
	    }, {
	        key: "internalParse",
	        value: function internalParse(color, isFirst, tryParse) {
	            if (isFirst && _Colors2.default[color]) {
	                var col = _Color2.default.internalParse(_Colors2.default[color], false, tryParse);
	                return Color3.fromColor4(col);
	            }
	            var m = void 0;
	            if (isFirst) {
	                m = color.match(/^#([0-9a-f]{3})$/i);
	                // #fff
	                if (m) {
	                    var s = m[1];
	                    return new Color3(parseInt(s.charAt(0), 16) / 0xf, parseInt(s.charAt(1), 16) / 0xf, parseInt(s.charAt(2), 16) / 0xf);
	                }
	            }
	            // #ffffff
	            m = color.match(/^#([0-9a-f]{6})$/i);
	            if (m) {
	                var _s = m[1];
	                return new Color3(parseInt(_s.substr(0, 2), 16) / 0xff, parseInt(_s.substr(2, 2), 16) / 0xff, parseInt(_s.substr(4, 2), 16) / 0xff);
	            }
	            var n = color.match(/^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i);
	            if (n && isFirst) {
	                return new Color3(parseInt(n[1], 10) / 0xff, parseInt(n[2], 10) / 0xff, parseInt(n[3], 10) / 0xff);
	            }
	            if (tryParse) {
	                return undefined;
	            }
	            throw new Error("Unexpected color string" + color);
	        }
	    }, {
	        key: "equals",
	        value: function equals(col1, col2) {
	            return _VectorBase3.default.__elementEquals(col1, col2);
	        }
	    }]);
	
	    function Color3(r, g, b) {
	        _classCallCheck(this, Color3);
	
	        var _this = _possibleConstructorReturn(this, (Color3.__proto__ || Object.getPrototypeOf(Color3)).call(this));
	
	        _this.rawElements = [r, g, b];
	        return _this;
	    }
	
	    _createClass(Color3, [{
	        key: "toVector",
	        value: function toVector() {
	            return new _Vector2.default(this.R, this.G, this.B);
	        }
	    }, {
	        key: "toVector4",
	        value: function toVector4(a) {
	            if (typeof a === "undefined") {
	                a = 0;
	            }
	            return new _Vector4.default(this.R, this.G, this.B, a);
	        }
	    }, {
	        key: "equalWith",
	        value: function equalWith(col) {
	            return Color3.equals(col, this);
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "rgb(" + Math.round(this.R * 255) + ", " + Math.round(this.G * 255) + ", " + Math.round(this.B * 255) + ")";
	        }
	    }, {
	        key: "toDisplayString",
	        value: function toDisplayString() {
	            var st = "#";
	            st += Math.round(this.R * 0xff).toString(16).toUpperCase();
	            st += Math.round(this.G * 0xff).toString(16).toUpperCase();
	            st += Math.round(this.B * 0xff).toString(16).toUpperCase();
	            return "Color3(" + this.R + ", " + this.G + ", " + this.B + ", " + st + ")";
	        }
	    }, {
	        key: "R",
	        get: function get() {
	            return this.rawElements[0];
	        }
	    }, {
	        key: "G",
	        get: function get() {
	            return this.rawElements[1];
	        }
	    }, {
	        key: "B",
	        get: function get() {
	            return this.rawElements[2];
	        }
	    }, {
	        key: "ElementCount",
	        get: function get() {
	            return 3;
	        }
	    }]);
	
	    return Color3;
	}(_VectorBase3.default);
	
	exports.default = Color3;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VectorBase2 = __webpack_require__(3);
	
	var _VectorBase3 = _interopRequireDefault(_VectorBase2);
	
	var _Vector = __webpack_require__(16);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Colors = __webpack_require__(17);
	
	var _Colors2 = _interopRequireDefault(_Colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ///<reference path="./gl-matrix.d.ts"/>
	
	
	var Color4 = function (_VectorBase) {
	    _inherits(Color4, _VectorBase);
	
	    _createClass(Color4, null, [{
	        key: "internalParse",
	
	        /// Color parser for css like syntax
	        value: function internalParse(color, isFirst, tryParse) {
	            if (isFirst && _Colors2.default[color]) {
	                return Color4.internalParse(_Colors2.default[color], false);
	            }
	            var m = void 0;
	            if (isFirst) {
	                m = color.match(/^#([0-9a-f]{3})$/i);
	                // #fff
	                if (m) {
	                    var s = m[1];
	                    return new Color4(parseInt(s.charAt(0), 16) / 0xf, parseInt(s.charAt(1), 16) / 0xf, parseInt(s.charAt(2), 16) / 0xf, 1);
	                }
	            }
	            if (isFirst) {
	                m = color.match(/^#([0-9a-f]{4})$/i);
	                // #ffff
	                if (m) {
	                    var _s = m[1];
	                    return new Color4(parseInt(_s.charAt(0), 16) / 0xf, parseInt(_s.charAt(1), 16) / 0xf, parseInt(_s.charAt(2), 16) / 0xf, parseInt(_s.charAt(3), 16) / 0xf);
	                }
	            }
	            // #ffffff
	            m = color.match(/^#([0-9a-f]{6})$/i);
	            if (m) {
	                var _s2 = m[1];
	                return new Color4(parseInt(_s2.substr(0, 2), 16) / 0xff, parseInt(_s2.substr(2, 2), 16) / 0xff, parseInt(_s2.substr(4, 2), 16) / 0xff, 1);
	            }
	            // #ffffffff
	            if (isFirst) {
	                m = color.match(/^#([0-9a-f]{8})$/i);
	                if (m) {
	                    var _s3 = m[1];
	                    return new Color4(parseInt(_s3.substr(0, 2), 16) / 0xff, parseInt(_s3.substr(2, 2), 16) / 0xff, parseInt(_s3.substr(4, 2), 16) / 0xff, parseInt(_s3.substr(6, 2), 16) / 0xff);
	                }
	            }
	            var n = color.match(/^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i);
	            if (n && isFirst) {
	                return new Color4(parseInt(n[1], 10) / 0xff, parseInt(n[2], 10) / 0xff, parseInt(n[3], 10) / 0xff, 1);
	            }
	            n = color.match(/^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*(0|1|0\.\d+)\s*\)\s*$/i);
	            if (n && isFirst) {
	                var d = parseInt(n[4], 10);
	                d = d <= 1 ? d : d / 0xff;
	                return new Color4(parseInt(n[1], 10) / 0xff, parseInt(n[2], 10) / 0xff, parseInt(n[3], 10) / 0xff, parseInt(n[4], 10));
	            }
	            if (tryParse) {
	                return undefined;
	            }
	            throw new Error("Unexpected color string" + color);
	        }
	    }, {
	        key: "parse",
	        value: function parse(color, tryParse) {
	            return Color4.internalParse(color, true, tryParse);
	        }
	    }, {
	        key: "equals",
	        value: function equals(col1, col2) {
	            return _VectorBase3.default.__elementEquals(col1, col2);
	        }
	    }]);
	
	    function Color4(r, g, b, a) {
	        _classCallCheck(this, Color4);
	
	        var _this = _possibleConstructorReturn(this, (Color4.__proto__ || Object.getPrototypeOf(Color4)).call(this));
	
	        _this.rawElements = [r, g, b, a];
	        return _this;
	    }
	
	    _createClass(Color4, [{
	        key: "toVector",
	        value: function toVector() {
	            return new _Vector2.default(this.R, this.G, this.B, this.A);
	        }
	    }, {
	        key: "equalWith",
	        value: function equalWith(col) {
	            return Color4.equals(col, this);
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "rgba(" + Math.round(this.R * 255) + ", " + Math.round(this.G * 255) + ", " + Math.round(this.B * 255) + ", " + Math.round(this.A * 255) + ")";
	        }
	    }, {
	        key: "toDisplayString",
	        value: function toDisplayString() {
	            var st = "#";
	            st += Math.round(this.R * 0xff).toString(16).toUpperCase();
	            st += Math.round(this.G * 0xff).toString(16).toUpperCase();
	            st += Math.round(this.B * 0xff).toString(16).toUpperCase();
	            st += Math.round(this.A * 0xff).toString(16).toUpperCase();
	            return "Color4(" + this.R + ", " + this.G + ", " + this.B + ", " + this.A + ", " + st + ")";
	        }
	    }, {
	        key: "R",
	        get: function get() {
	            return this.rawElements[0];
	        }
	    }, {
	        key: "G",
	        get: function get() {
	            return this.rawElements[1];
	        }
	    }, {
	        key: "B",
	        get: function get() {
	            return this.rawElements[2];
	        }
	    }, {
	        key: "A",
	        get: function get() {
	            return this.rawElements[3];
	        }
	    }, {
	        key: "ElementCount",
	        get: function get() {
	            return 4;
	        }
	    }]);
	
	    return Color4;
	}(_VectorBase3.default);
	
	exports.default = Color4;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VectorBase2 = __webpack_require__(3);
	
	var _VectorBase3 = _interopRequireDefault(_VectorBase2);
	
	var _glMatrix = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ///<reference path="./gl-matrix.d.ts"/>
	
	
	var Vector4 = function (_VectorBase) {
	    _inherits(Vector4, _VectorBase);
	
	    _createClass(Vector4, null, [{
	        key: "copy",
	        value: function copy(vec) {
	            return new Vector4(vec.X, vec.Y, vec.Z, vec.W);
	        }
	    }, {
	        key: "dot",
	        value: function dot(v1, v2) {
	            return _glMatrix.vec4.dot(v1.rawElements, v2.rawElements);
	        }
	    }, {
	        key: "add",
	        value: function add(v1, v2) {
	            var newVec = _glMatrix.vec4.create();
	            return new Vector4(_glMatrix.vec4.add(newVec, v1.rawElements, v2.rawElements));
	        }
	    }, {
	        key: "subtract",
	        value: function subtract(v1, v2) {
	            var newVec = _glMatrix.vec4.create();
	            return new Vector4(_glMatrix.vec4.sub(newVec, v1.rawElements, v2.rawElements));
	        }
	    }, {
	        key: "multiply",
	        value: function multiply(s, v) {
	            var newVec = _glMatrix.vec4.create();
	            return new Vector4(_glMatrix.vec4.scale(newVec, v.rawElements, s));
	        }
	    }, {
	        key: "negate",
	        value: function negate(v1) {
	            return Vector4.multiply(-1, v1);
	        }
	    }, {
	        key: "equals",
	        value: function equals(v1, v2) {
	            return _VectorBase3.default.__elementEquals(v1, v2);
	        }
	    }, {
	        key: "nearlyEquals",
	        value: function nearlyEquals(v1, v2) {
	            return _VectorBase3.default.__nearlyElementEquals(v1, v2);
	        }
	    }, {
	        key: "normalize",
	        value: function normalize(v1) {
	            var newVec = _glMatrix.vec4.create();
	            return new Vector4(_glMatrix.vec4.normalize(newVec, v1.rawElements));
	        }
	    }, {
	        key: "min",
	        value: function min(v1, v2) {
	            return new Vector4(_VectorBase3.default.__fromGenerationFunction(v1, v2, function (i, _v1, _v2) {
	                return Math.min(_v1.rawElements[i], _v2.rawElements[i]);
	            }));
	        }
	    }, {
	        key: "max",
	        value: function max(v1, v2) {
	            return new Vector4(_VectorBase3.default.__fromGenerationFunction(v1, v2, function (i, _v1, _v2) {
	                return Math.max(_v1.rawElements[i], _v2.rawElements[i]);
	            }));
	        }
	    }, {
	        key: "angle",
	        value: function angle(v1, v2) {
	            return Math.acos(Vector4.dot(v1.normalized, v2.normalized));
	        }
	    }, {
	        key: "parse",
	        value: function parse(str) {
	            var parseResult = _VectorBase3.default.__parse(str);
	            var elements = parseResult.elements;
	            if (!elements || elements.length !== 1 && elements.length !== 4) {
	                return undefined;
	            }
	            var result = void 0;
	            if (elements.length === 1) {
	                result = new Vector4(elements[0], elements[0], elements[0], elements[0]);
	            } else {
	                result = new Vector4(elements[0], elements[1], elements[2], elements[3]);
	            }
	            if (parseResult.needNormalize) {
	                result = result.normalizeThis();
	            }
	            if (parseResult.coefficient) {
	                result = result.multiplyWith(parseResult.coefficient);
	            }
	            if (parseResult.needNegate) {
	                result = result.negateThis();
	            }
	            return result;
	        }
	    }, {
	        key: "XUnit",
	        get: function get() {
	            return new Vector4(1, 0, 0, 0);
	        }
	    }, {
	        key: "YUnit",
	        get: function get() {
	            return new Vector4(0, 1, 0, 0);
	        }
	    }, {
	        key: "ZUnit",
	        get: function get() {
	            return new Vector4(0, 0, 1, 0);
	        }
	    }, {
	        key: "WUnit",
	        get: function get() {
	            return new Vector4(0, 0, 0, 1);
	        }
	    }, {
	        key: "One",
	        get: function get() {
	            return new Vector4(1, 1, 1, 1);
	        }
	    }, {
	        key: "Zero",
	        get: function get() {
	            return new Vector4(0, 0, 0, 0);
	        }
	    }]);
	
	    function Vector4(x, y, z, w) {
	        _classCallCheck(this, Vector4);
	
	        var _this = _possibleConstructorReturn(this, (Vector4.__proto__ || Object.getPrototypeOf(Vector4)).call(this));
	
	        if (typeof y === "undefined") {
	            _this.rawElements = x;
	            return _possibleConstructorReturn(_this);
	        }
	        _this.rawElements = [x, y, z, w];
	        return _this;
	    }
	
	    _createClass(Vector4, [{
	        key: "normalizeThis",
	        value: function normalizeThis() {
	            return Vector4.normalize(this);
	        }
	    }, {
	        key: "dotWith",
	        value: function dotWith(v) {
	            return Vector4.dot(this, v);
	        }
	    }, {
	        key: "addWith",
	        value: function addWith(v) {
	            return Vector4.add(this, v);
	        }
	    }, {
	        key: "subtractWith",
	        value: function subtractWith(v) {
	            return Vector4.subtract(this, v);
	        }
	    }, {
	        key: "multiplyWith",
	        value: function multiplyWith(s) {
	            return Vector4.multiply(s, this);
	        }
	    }, {
	        key: "negateThis",
	        value: function negateThis() {
	            return Vector4.negate(this);
	        }
	    }, {
	        key: "equalWith",
	        value: function equalWith(v) {
	            return Vector4.equals(this, v);
	        }
	    }, {
	        key: "nearlyEqualWith",
	        value: function nearlyEqualWith(v) {
	            return Vector4.nearlyEquals(this, v);
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "(" + this.X + ", " + this.Y + ", " + this.Z + ", " + this.W + ")";
	        }
	    }, {
	        key: "toDisplayString",
	        value: function toDisplayString() {
	            return "Vector4" + this.toString();
	        }
	    }, {
	        key: "normalized",
	        get: function get() {
	            return this.multiplyWith(1 / this.magnitude);
	        }
	    }, {
	        key: "X",
	        get: function get() {
	            return this.rawElements[0];
	        },
	        set: function set(x) {
	            this.rawElements[0] = +x;
	        }
	    }, {
	        key: "Y",
	        get: function get() {
	            return this.rawElements[1];
	        },
	        set: function set(y) {
	            this.rawElements[1] = +y;
	        }
	    }, {
	        key: "Z",
	        get: function get() {
	            return this.rawElements[2];
	        },
	        set: function set(z) {
	            this.rawElements[2] = +z;
	        }
	    }, {
	        key: "W",
	        get: function get() {
	            return this.rawElements[3];
	        },
	        set: function set(w) {
	            this.rawElements[3] = +w;
	        }
	    }, {
	        key: "ElementCount",
	        get: function get() {
	            return 4;
	        }
	    }]);
	
	    return Vector4;
	}(_VectorBase3.default);
	
	exports.default = Vector4;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    "aliceblue": "#F0F8FF",
	    "antiquewhite": "#FAEBD7",
	    "aqua": "#00FFFF",
	    "aquamarine": "#7FFFD4",
	    "azure": "#F0FFFF",
	    "beige": "#F5F5DC",
	    "bisque": "#FFE4C4",
	    "black": "#000000",
	    "blanchedalmond": "#FFEBCD",
	    "blue": "#0000FF",
	    "blueviolet": "#8A2BE2",
	    "brown": "#A52A2A",
	    "burlywood": "#DEB887",
	    "cadetblue": "#5F9EA0",
	    "chartreuse": "#7FFF00",
	    "chocolate": "#D2691E",
	    "coral": "#FF7F50",
	    "cornflowerblue": "#6495ED",
	    "cornsilk": "#FFF8DC",
	    "crimson": "#DC143C",
	    "cyan": "#00FFFF",
	    "darkblue": "#00008B",
	    "darkcyan": "#008B8B",
	    "darkgoldenrod": "#B8860B",
	    "darkgray": "#A9A9A9",
	    "darkgreen": "#006400",
	    "darkgrey": "#A9A9A9",
	    "darkkhaki": "#BDB76B",
	    "darkmagenta": "#8B008B",
	    "darkolivegreen": "#556B2F",
	    "darkorange": "#FF8C00",
	    "darkorchid": "#9932CC",
	    "darkred": "#8B0000",
	    "darksalmon": "#E9967A",
	    "darkseagreen": "#8FBC8F",
	    "darkslateblue": "#483D8B",
	    "darkslategray": "#2F4F4F",
	    "darkslategrey": "#2F4F4F",
	    "darkturquoise": "#00CED1",
	    "darkviolet": "#9400D3",
	    "deeppink": "#FF1493",
	    "deepskyblue": "#00BFFF",
	    "dimgray": "#696969",
	    "dimgrey": "#696969",
	    "dodgerblue": "#1E90FF",
	    "firebrick": "#B22222",
	    "floralwhite": "#FFFAF0",
	    "forestgreen": "#228B22",
	    "fuchsia": "#FF00FF",
	    "gainsboro": "#DCDCDC",
	    "ghostwhite": "#F8F8FF",
	    "gold": "#FFD700",
	    "goldenrod": "#DAA520",
	    "gray": "#808080",
	    "green": "#008000",
	    "greenyellow": "#ADFF2F",
	    "grey": "#808080",
	    "honeydew": "#F0FFF0",
	    "hotpink": "#FF69B4",
	    "indianred": "#CD5C5C",
	    "indigo": "#4B0082",
	    "ivory": "#FFFFF0",
	    "khaki": "#F0E68C",
	    "lavender": "#E6E6FA",
	    "lavenderblush": "#FFF0F5",
	    "lawngreen": "#7CFC00",
	    "lemonchiffon": "#FFFACD",
	    "lightblue": "#ADD8E6",
	    "lightcoral": "#F08080",
	    "lightcyan": "#E0FFFF",
	    "lightgoldenrodyellow": "#FAFAD2",
	    "lightgray": "#D3D3D3",
	    "lightgreen": "#90EE90",
	    "lightgrey": "#D3D3D3",
	    "lightpink": "#FFB6C1",
	    "lightsalmon": "#FFA07A",
	    "lightseagreen": "#20B2AA",
	    "lightskyblue": "#87CEFA",
	    "lightslategray": "#778899",
	    "lightslategrey": "#778899",
	    "lightsteelblue": "#B0C4DE",
	    "lightyellow": "#FFFFE0",
	    "lime": "#00FF00",
	    "limegreen": "#32CD32",
	    "linen": "#FAF0E6",
	    "magenta": "#FF00FF",
	    "maroon": "#800000",
	    "mediumaquamarine": "#66CDAA",
	    "mediumblue": "#0000CD",
	    "mediumorchid": "#BA55D3",
	    "mediumpurple": "#9370DB",
	    "mediumseagreen": "#3CB371",
	    "mediumslateblue": "#7B68EE",
	    "mediumspringgreen": "#00FA9A",
	    "mediumturquoise": "#48D1CC",
	    "mediumvioletred": "#C71585",
	    "midnightblue": "#191970",
	    "mintcream": "#F5FFFA",
	    "mistyrose": "#FFE4E1",
	    "moccasin": "#FFE4B5",
	    "navajowhite": "#FFDEAD",
	    "navy": "#000080",
	    "oldlace": "#FDF5E6",
	    "olive": "#808000",
	    "olivedrab": "#6B8E23",
	    "orange": "#FFA500",
	    "orangered": "#FF4500",
	    "orchid": "#DA70D6",
	    "palegoldenrod": "#EEE8AA",
	    "palegreen": "#98FB98",
	    "paleturquoise": "#AFEEEE",
	    "palevioletred": "#DB7093",
	    "papayawhip": "#FFEFD5",
	    "peachpuff": "#FFDAB9",
	    "peru": "#CD853F",
	    "pink": "#FFC0CB",
	    "plum": "#DDA0DD",
	    "powderblue": "#B0E0E6",
	    "purple": "#800080",
	    "red": "#FF0000",
	    "rosybrown": "#BC8F8F",
	    "royalblue": "#4169E1",
	    "saddlebrown": "#8B4513",
	    "salmon": "#FA8072",
	    "sandybrown": "#F4A460",
	    "seagreen": "#2E8B57",
	    "seashell": "#FFF5EE",
	    "sienna": "#A0522D",
	    "silver": "#C0C0C0",
	    "skyblue": "#87CEEB",
	    "slateblue": "#6A5ACD",
	    "slategray": "#708090",
	    "slategrey": "#708090",
	    "snow": "#FFFAFA",
	    "springgreen": "#00FF7F",
	    "steelblue": "#4682B4",
	    "tan": "#D2B48C",
	    "teal": "#008080",
	    "thistle": "#D8BFD8",
	    "tomato": "#FF6347",
	    "turquoise": "#40E0D0",
	    "violet": "#EE82EE",
	    "wheat": "#F5DEB3",
	    "white": "#FFFFFF",
	    "whitesmoke": "#F5F5F5",
	    "yellow": "#FFFF00",
	    "yellowgreen": "#9ACD32"
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Angle2DParser = __webpack_require__(19);
	
	var _Angle2DParser2 = _interopRequireDefault(_Angle2DParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Angle2DConverter(val) {
	    if (typeof val === "number") {
	        return val;
	    }
	    if (typeof val === "string") {
	        return _Angle2DParser2.default.parseAngle(val);
	    }
	    throw new Error("Passed argument \"" + val + "\" can't be parsed as angle.");
	}
	exports.default = Angle2DConverter;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Utility class to parse the arguments of attributes.
	 */
	/**
	 * Utility class to parse the arguments of attributes.
	 */var Angle2DParser = function () {
	    function Angle2DParser() {
	        _classCallCheck(this, Angle2DParser);
	    }
	
	    _createClass(Angle2DParser, null, [{
	        key: "parseAngle",
	
	        /**
	         * Parse angle strings.
	         * "p" means Pi. Ex) 3/4 p
	         * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
	         * @param input the string to parse.
	         * @returns {number} parsed angle in radians.
	         */
	        value: function parseAngle(input) {
	            var regex = /^ *(-?[\de+-.]*) *(?:\/ *([\de+-.]*))? *(p|prad|deg|d|r|rad)? *$/gm;
	            var result = regex.exec(input);
	            if (result == null) {
	                throw new Error("faild parse Angle string:'" + input + "'");
	            }
	            var numerator = parseFloat(result[1]);
	            if (result[2]) {
	                numerator /= parseFloat(result[2]);
	            }
	            var unit = result[3];
	            if (unit == null) {
	                unit = "d";
	            }
	            if (unit === "r" || unit === "rad") {
	                return numerator;
	            }
	            if (unit === "p" || unit === "prad") {
	                return numerator * Math.PI;
	            }
	            return numerator / 180 * Math.PI;
	        }
	    }]);
	
	    return Angle2DParser;
	}();
	
	exports.default = Angle2DParser;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Color = __webpack_require__(14);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Color3 = __webpack_require__(15);
	
	var _Color4 = _interopRequireDefault(_Color3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Color3Converter(val) {
	    if (val instanceof _Color2.default) {
	        return val;
	    } else if (val instanceof _Color4.default) {
	        return new _Color2.default(val.R, val.G, val.B);
	    } else if (typeof val === "string") {
	        return _Color2.default.parse(val);
	    } else if (Array.isArray(val)) {
	        return new _Color2.default(val[0], val[1], val[2]);
	    } else {
	        throw new Error(val + " can not be parsed as Color4.");
	    }
	}
	exports.default = Color3Converter;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Color = __webpack_require__(14);
	
	var _Color2 = _interopRequireDefault(_Color);
	
	var _Color3 = __webpack_require__(15);
	
	var _Color4 = _interopRequireDefault(_Color3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Color4Converter(val) {
	    if (val instanceof _Color4.default) {
	        return val;
	    } else if (val instanceof _Color2.default) {
	        return new _Color4.default(val.R, val.G, val.B, 1.0);
	    } else if (typeof val === "string") {
	        return _Color4.default.parse(val);
	    } else if (Array.isArray(val)) {
	        return new _Color4.default(val[0], val[1], val[2], val[3]);
	    } else {
	        throw new Error(val + " can not be parsed as Color4.");
	    }
	}
	exports.default = Color4Converter;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Quaternion = __webpack_require__(23);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Rotation3Converter(val) {
	    if (val instanceof _Quaternion2.default) {
	        return val;
	    } else if (Array.isArray(val)) {
	        return new _Quaternion2.default([val[0], val[1], val[2], val[3]]);
	    } else if (typeof val === "string") {
	        return _Quaternion2.default.parse(val);
	    }
	}
	exports.default = Rotation3Converter;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); ///<reference path="./gl-matrix.d.ts"/>
	
	
	var _Vector = __webpack_require__(2);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _glMatrix = __webpack_require__(4);
	
	var _Matrix = __webpack_require__(24);
	
	var _Matrix2 = _interopRequireDefault(_Matrix);
	
	var _Angle2DParser = __webpack_require__(19);
	
	var _Angle2DParser2 = _interopRequireDefault(_Angle2DParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	* The class to maniplate quaternion.
	* Basically,you don't need to operate raw element.
	* You consider to use some of useful methods without editing raw element forcelly.
	* Each element will be represented as (w;x,y,z)
	* (1,i,j,k) is base axis for quaternion. (i,j,k is pure imaginary number)
	* (w;x,y,z) means w*1+x*i+y*j+z*k
	*
	*/
	var Quaternion = function () {
	    _createClass(Quaternion, null, [{
	        key: "equals",
	        value: function equals(q1, q2) {
	            for (var i = 0; i < 4; i++) {
	                if (q1.rawElements[i] !== q2.rawElements[i]) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        /**
	         * Parse angle string in 3D.
	         * "p" means Pi. Ex) 3/4 p
	         * "d" means degree. if this unit was specified, the argument will be parsed as degree. Ex) 90d
	         * "eular(x,y,z)" means rotation in eular. This means Z-X-Y rotation like Unity.
	         * "axis(angle,x,y,z)" means rotation around specified axis. This means angle radians will be rotated around the axis (x,y,z).
	         * This angle can be specified with the character "p" or "d".
	         * "x(angle)","y(angle)" or "z(angle)" means rotation around unit axis.
	         * This angle can be specified with the character "p" or "d".
	         * @param input the string to be parsed as angle in 3D.
	         * @returns {Quaternion} parsed rotation in Quaternion.
	         */
	
	    }, {
	        key: "parse",
	        value: function parse(input) {
	            var reg1 = /^ *(x|y|z) *\(([^\(\)]+)\) *$/gm;
	            var reg2 = /^ *axis *\(([^\(\),]+),([^\(\),]+),([^\(\),]+),([^\(\),]+)\) *$/gm;
	            var reg3 = /^ *([^\(\),]+),([^\(\),]+),([^\(\),]+) *$/gm;
	            var result = reg1.exec(input);
	            if (result) {
	                if (result[1] === "x") {
	                    return Quaternion.angleAxis(_Angle2DParser2.default.parseAngle(result[2]), _Vector2.default.XUnit);
	                }
	                if (result[1] === "y") {
	                    return Quaternion.angleAxis(_Angle2DParser2.default.parseAngle(result[2]), _Vector2.default.YUnit);
	                }
	                if (result[1] === "z") {
	                    return Quaternion.angleAxis(_Angle2DParser2.default.parseAngle(result[2]), _Vector2.default.ZUnit);
	                }
	            }
	            var res2 = reg2.exec(input);
	            if (res2) {
	                var rotation = _Angle2DParser2.default.parseAngle(res2[1]);
	                var x = parseFloat(res2[2]);
	                var y = parseFloat(res2[3]);
	                var z = parseFloat(res2[4]);
	                return Quaternion.angleAxis(rotation, new _Vector2.default(x, y, z));
	            }
	            var res3 = reg3.exec(input);
	            if (res3) {
	                return Quaternion.euler(_Angle2DParser2.default.parseAngle(res3[1]), _Angle2DParser2.default.parseAngle(res3[2]), _Angle2DParser2.default.parseAngle(res3[3]));
	            }
	            throw new Error("Unknown format for rotation3D:'" + input + "'");
	        }
	        /**
	        * Calculate add result of two quaternion
	        */
	
	    }, {
	        key: "add",
	        value: function add(q1, q2) {
	            var newQuat = _glMatrix.quat.create();
	            return new Quaternion(_glMatrix.quat.add(newQuat, q1.rawElements, q2.rawElements));
	        }
	        /**
	        * Calculate multiply result of two quaternion
	        */
	
	    }, {
	        key: "multiply",
	        value: function multiply(q1, q2) {
	            var newQuat = _glMatrix.quat.create();
	            return new Quaternion(_glMatrix.quat.mul(newQuat, q1.rawElements, q2.rawElements));
	        }
	        /**
	        * Calculate the rotation quaternion represented as pair of angle and axis.
	        */
	
	    }, {
	        key: "angleAxis",
	        value: function angleAxis(angle, axis) {
	            var axisVec = _glMatrix.vec3.create();
	            axisVec[0] = axis.X;
	            axisVec[1] = axis.Y;
	            axisVec[2] = axis.Z;
	            var newQuat = _glMatrix.quat.create();
	            return new Quaternion(_glMatrix.quat.setAxisAngle(newQuat, axisVec, +angle));
	        }
	    }, {
	        key: "euler",
	        value: function euler(x, y, z) {
	            return Quaternion.multiply(Quaternion.angleAxis(z, _Vector2.default.ZUnit), Quaternion.multiply(Quaternion.angleAxis(x, _Vector2.default.XUnit), Quaternion.angleAxis(y, _Vector2.default.YUnit)));
	        }
	    }, {
	        key: "eulerXYZ",
	        value: function eulerXYZ(x, y, z) {
	            return Quaternion.multiply(Quaternion.angleAxis(z, _Vector2.default.ZUnit), Quaternion.multiply(Quaternion.angleAxis(y, _Vector2.default.YUnit), Quaternion.angleAxis(x, _Vector2.default.XUnit)));
	        }
	    }, {
	        key: "slerp",
	        value: function slerp(q1, q2, t) {
	            var newQuat = _glMatrix.quat.create();
	            return new Quaternion(_glMatrix.quat.slerp(newQuat, q1.rawElements, q2.rawElements, +t));
	        }
	        /**
	         * Returns the angle in degrees between two rotations q1 and q2.
	         * @param q1 the quaternion represents begin angle.
	         * @param q2 the quaternion represents end angle.
	         * @returns {number} angle represented in radians.
	         */
	
	    }, {
	        key: "angle",
	        value: function angle(q1, q2) {
	            var delta = Quaternion.multiply(q2, q1.inverse());
	            delta = delta.normalize();
	            return 2 * Math.acos(delta.W);
	        }
	    }, {
	        key: "fromToRotation",
	        value: function fromToRotation(from, to) {
	            var crossed = _Vector2.default.cross(from.normalized, to.normalized);
	            var angle = _Vector2.default.dot(from.normalized, to.normalized);
	            return Quaternion.angleAxis(angle, crossed);
	        }
	    }, {
	        key: "lookRotation",
	        value: function lookRotation(forward, upVec) {
	            upVec = upVec || _Vector2.default.YUnit;
	            var normalizedForward = forward.normalized;
	            var upForwardCross = _Vector2.default.cross(upVec, normalizedForward).normalized;
	            var thirdAxis = _Vector2.default.cross(normalizedForward, upForwardCross);
	            var m00 = upForwardCross.X;
	            var m01 = upForwardCross.Y;
	            var m02 = upForwardCross.Z;
	            var m10 = thirdAxis.X;
	            var m11 = thirdAxis.Y;
	            var m12 = thirdAxis.Z;
	            var m20 = normalizedForward.X;
	            var m21 = normalizedForward.Y;
	            var m22 = normalizedForward.Z;
	            var num8 = m00 + m11 + m22;
	            if (num8 > 0) {
	                var num = Math.sqrt(1 + num8);
	                return new Quaternion([(m12 - m21) * 0.5 / num, (m20 - m02) * 0.5 / num, (m01 - m10) * 0.5 / num, num / 2]);
	            }
	            if (m00 >= m11 && m00 >= m22) {
	                var num7 = Math.sqrt(1 + m00 - m11 - m22);
	                return new Quaternion([(m01 + m10) * 0.5 / num7, (m02 + m20) * 0.5 / num7, (m12 - m21) * 0.5 / num7, num7 / 2]);
	            }
	            if (m11 > m22) {
	                var num6 = Math.sqrt(1 + m11 - m00 - m22);
	                return new Quaternion([(m10 + m01) * 0, 5 / num6, 0.5 * num6, (m21 + m12) * 0.5 / num6, (m20 - m02) * 0.5 / num6]);
	            }
	            var num5 = Math.sqrt(1 + m22 - m00 - m11);
	            return new Quaternion([(m20 + m02) * 0.5 / num5, (m21 + m12) * 0.5 / num5, 0.5 * num5, (m01 - m10) * 0.5 / num5]);
	        }
	    }, {
	        key: "Identity",
	        get: function get() {
	            return new Quaternion(_glMatrix.quat.create());
	        }
	        /**
	        * Constructor by specifing each elements.
	        */
	
	    }]);
	
	    function Quaternion(rawElements) {
	        _classCallCheck(this, Quaternion);
	
	        this.rawElements = rawElements;
	    }
	
	    _createClass(Quaternion, [{
	        key: "equalWith",
	        value: function equalWith(q) {
	            return Quaternion.equals(this, q);
	        }
	        /**
	        * Get normalized quaternion
	        */
	
	    }, {
	        key: "normalize",
	        value: function normalize() {
	            var newQuat = _glMatrix.quat.create();
	            return new Quaternion(_glMatrix.quat.normalize(newQuat, this.rawElements));
	        }
	    }, {
	        key: "inverse",
	        value: function inverse() {
	            var newQuat = _glMatrix.quat.create();
	            return new Quaternion(_glMatrix.quat.invert(newQuat, this.rawElements));
	        }
	    }, {
	        key: "toAngleAxisString",
	        value: function toAngleAxisString() {
	            var angle = 2 * Math.acos(this.W);
	            var imm = Math.sqrt(1 - this.W * this.W);
	            if (angle !== 180 && angle !== 0) {
	                return "axis(" + angle + "," + this.X / imm + "," + this.Y / imm + "," + this.Z / imm + ")";
	            } else if (angle === 0) {
	                return "axis(" + angle + ",0,1,0)";
	            } else {
	                return "axis(180d," + this.X + "," + this.Y + "," + this.Z + ")";
	            }
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return this.toAngleAxisString();
	        }
	    }, {
	        key: "factoringQuaternionZXY",
	        value: function factoringQuaternionZXY() {
	            var result = { x: 0, y: 0, z: 0 };
	            var mat = _Matrix2.default.rotationQuaternion(this);
	            var sx = mat.rawElements[6];
	            if (Math.abs(sx) < 1 - 1.0E-4) {
	                result.x = Math.asin(sx);
	                result.z = Math.atan2(-mat.rawElements[4], mat.rawElements[5]);
	                result.y = Math.atan2(-mat.rawElements[2], mat.rawElements[10]);
	            } else {
	                result.y = 0;
	                result.x = Math.PI / 2 * sx;
	                result.z = Math.atan2(mat.rawElements[1], mat.rawElements[0]);
	            }
	            return result;
	        }
	    }, {
	        key: "factoringQuaternionXYZ",
	        value: function factoringQuaternionXYZ() {
	            var result = { x: 0, y: 0, z: 0 };
	            var mat = _Matrix2.default.rotationQuaternion(this);
	            var sy = -mat.rawElements[2];
	            if (Math.abs(sy) < 1 - 1.0E-4) {
	                result.x = Math.atan2(mat.rawElements[6], mat.rawElements[10]);
	                result.y = Math.asin(sy);
	                result.z = Math.atan2(mat.rawElements[1], mat.rawElements[0]);
	            } else {
	                result.x = 0;
	                result.y = Math.PI / 2 * sy;
	                result.z = Math.atan2(-mat.rawElements[4], mat.rawElements[5]);
	            }
	            return result;
	        }
	    }, {
	        key: "eularAngles",
	        get: function get() {
	            var eular = this.factoringQuaternionZXY();
	            return new _Vector2.default(eular.x, eular.y, eular.z);
	        },
	        set: function set(v) {
	            this.rawElements = Quaternion.euler(v.X, v.Y, v.Z).rawElements;
	        }
	        /**
	        * Getter for X.
	        */
	
	    }, {
	        key: "X",
	        get: function get() {
	            return this.rawElements[0];
	        }
	        /**
	        * Getter for Y.
	        */
	
	    }, {
	        key: "Y",
	        get: function get() {
	            return this.rawElements[1];
	        }
	        /**
	        * Getter for Z.
	        */
	
	    }, {
	        key: "Z",
	        get: function get() {
	            return this.rawElements[2];
	        }
	        /**
	        * Getter for W.
	        */
	
	    }, {
	        key: "W",
	        get: function get() {
	            return this.rawElements[3];
	        }
	        /**
	        * Getter for imaginary part vector.
	        * It returns the vector (x,y,z)
	        */
	
	    }, {
	        key: "ImaginaryPart",
	        get: function get() {
	            return new _Vector2.default(this.X, this.Y, this.Z);
	        }
	        /**
	        * Get the conjugate of this quaternion
	        */
	
	    }, {
	        key: "Conjugate",
	        get: function get() {
	            var newQuat = _glMatrix.quat.create();
	            return new Quaternion(_glMatrix.quat.conjugate(newQuat, this.rawElements));
	        }
	        /**
	        * Get the length
	        */
	
	    }, {
	        key: "Length",
	        get: function get() {
	            return _glMatrix.quat.len(this.rawElements);
	        }
	    }]);
	
	    return Quaternion;
	}();
	
	exports.default = Quaternion;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MatrixBase2 = __webpack_require__(25);
	
	var _MatrixBase3 = _interopRequireDefault(_MatrixBase2);
	
	var _Vector = __webpack_require__(2);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Vector3 = __webpack_require__(16);
	
	var _Vector4 = _interopRequireDefault(_Vector3);
	
	var _Quaternion = __webpack_require__(23);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _glMatrix = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ///<reference path="./gl-matrix.d.ts"/>
	
	
	var Matrix = function (_MatrixBase) {
	    _inherits(Matrix, _MatrixBase);
	
	    _createClass(Matrix, null, [{
	        key: "zero",
	        value: function zero() {
	            return new Matrix([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	        }
	    }, {
	        key: "identity",
	        value: function identity() {
	            return new Matrix(_glMatrix.mat4.create());
	        }
	    }, {
	        key: "fromElements",
	        value: function fromElements(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	            return new Matrix([m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33]);
	        }
	    }, {
	        key: "fromFunc",
	        value: function fromFunc(f) {
	            return new Matrix([f(0, 0), f(1, 0), f(2, 0), f(3, 0), f(0, 1), f(1, 1), f(2, 1), f(3, 1), f(0, 2), f(1, 2), f(2, 2), f(3, 2), f(0, 3), f(1, 3), f(2, 3), f(3, 3)]);
	        }
	    }, {
	        key: "equals",
	        value: function equals(m1, m2) {
	            return Matrix.__elementEquals(m1, m2);
	        }
	    }, {
	        key: "add",
	        value: function add(m1, m2) {
	            var mat = _glMatrix.mat4.create();
	            for (var i = 0; i < 16; i++) {
	                mat[i] = m1.rawElements[i] + m2.rawElements[i];
	            }
	            return new Matrix(mat);
	        }
	    }, {
	        key: "subtract",
	        value: function subtract(m1, m2) {
	            return Matrix.add(m1, Matrix.negate(m2));
	        }
	    }, {
	        key: "scalarMultiply",
	        value: function scalarMultiply(s, m) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.multiply(newMat, [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, s], m.rawElements);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "multiply",
	        value: function multiply(m1, m2) {
	            var newMat = _glMatrix.mat4.create();
	            return new Matrix(_glMatrix.mat4.mul(newMat, m1.rawElements, m2.rawElements));
	        }
	    }, {
	        key: "trs",
	        value: function trs(t, rot, s) {
	            var newMat = _glMatrix.mat4.create();
	            var cacheMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.mul(newMat, _glMatrix.mat4.translate(newMat, _glMatrix.mat4.create(), t.rawElements), _glMatrix.mat4.fromQuat(cacheMat, rot.rawElements));
	            _glMatrix.mat4.scale(newMat, newMat, s.rawElements);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "negate",
	        value: function negate(m) {
	            return this.scalarMultiply(-1, m);
	        }
	    }, {
	        key: "transpose",
	        value: function transpose(m) {
	            var newMat = _glMatrix.mat4.create();
	            return new Matrix(_glMatrix.mat4.transpose(newMat, m.rawElements));
	        }
	    }, {
	        key: "transformPoint",
	        value: function transformPoint(m, t) {
	            var newVec = _glMatrix.vec3.create();
	            _glMatrix.vec3.transformMat4(newVec, t.rawElements, m.rawElements);
	            return new _Vector2.default(newVec);
	        }
	    }, {
	        key: "transformNormal",
	        value: function transformNormal(m, t) {
	            var newVec = _glMatrix.vec4.create();
	            var trans = _glMatrix.vec4.create();
	            trans[0] = t.X;
	            trans[1] = t.Y;
	            trans[2] = t.Z;
	            trans[3] = 0;
	            _glMatrix.vec4.transformMat4(newVec, trans, m.rawElements);
	            return new _Vector2.default(newVec[0], newVec[1], newVec[2]);
	        }
	    }, {
	        key: "transform",
	        value: function transform(m, t) {
	            var newVec = _glMatrix.vec4.create();
	            var trans = _glMatrix.vec4.create();
	            trans[0] = t.X;
	            trans[1] = t.Y;
	            trans[2] = t.Z;
	            trans[3] = t.W;
	            _glMatrix.vec4.transformMat4(newVec, trans, m.rawElements);
	            return new _Vector4.default(newVec[0], newVec[1], newVec[2], newVec[3]);
	        }
	        /**
	         * Retrieve determinant of passed matrix
	         */
	
	    }, {
	        key: "determinant",
	        value: function determinant(m) {
	            return _glMatrix.mat4.determinant(m.rawElements);
	        }
	        /**
	         * Compute inverted passed matrix.
	         */
	
	    }, {
	        key: "inverse",
	        value: function inverse(m) {
	            var newMat = _glMatrix.mat4.create();
	            return new Matrix(_glMatrix.mat4.invert(newMat, m.rawElements));
	        }
	        /**
	         * Generate linear translation transform matrix.
	         */
	
	    }, {
	        key: "translate",
	        value: function translate(v) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.translate(newMat, newMat, v.rawElements);
	            return new Matrix(newMat);
	        }
	        /**
	         * Generate linear scaling transform matrix.
	         */
	
	    }, {
	        key: "scale",
	        value: function scale(v) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.scale(newMat, newMat, v.rawElements);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "rotateX",
	        value: function rotateX(angle) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.rotateX(newMat, newMat, angle);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "rotateY",
	        value: function rotateY(angle) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.rotateY(newMat, newMat, angle);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "rotateZ",
	        value: function rotateZ(angle) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.rotateZ(newMat, newMat, angle);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "rotationQuaternion",
	        value: function rotationQuaternion(quat_) {
	            var quaternion = _glMatrix.quat.create();
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.quat.normalize(quaternion, quat_.rawElements);
	            _glMatrix.mat4.fromQuat(newMat, quaternion);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "frustum",
	        value: function frustum(left, right, bottom, top, near, far) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.frustum(newMat, left, right, bottom, top, near, far);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "ortho",
	        value: function ortho(left, right, bottom, top, near, far) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.ortho(newMat, left, right, bottom, top, near, far);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "perspective",
	        value: function perspective(fovy, aspect, near, far) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.perspective(newMat, fovy, aspect, near, far);
	            return new Matrix(newMat);
	        }
	    }, {
	        key: "lookAt",
	        value: function lookAt(eye, _lookAt, up) {
	            var newMat = _glMatrix.mat4.create();
	            _glMatrix.mat4.lookAt(newMat, eye.rawElements, _lookAt.rawElements, up.rawElements);
	            return new Matrix(newMat);
	        }
	    }]);
	
	    function Matrix(arr) {
	        _classCallCheck(this, Matrix);
	
	        var _this = _possibleConstructorReturn(this, (Matrix.__proto__ || Object.getPrototypeOf(Matrix)).call(this));
	
	        if (arr) {
	            _this.rawElements = arr;
	        } else {
	            _this.rawElements = _glMatrix.mat4.create();
	        }
	        return _this;
	    }
	
	    _createClass(Matrix, [{
	        key: "getAt",
	        value: function getAt(row, colmun) {
	            return this.rawElements[colmun * 4 + row];
	        }
	    }, {
	        key: "setAt",
	        value: function setAt(row, colmun, val) {
	            this.rawElements[colmun * 4 + row] = val;
	        }
	    }, {
	        key: "getBySingleIndex",
	        value: function getBySingleIndex(index) {
	            return this.rawElements[index];
	        }
	    }, {
	        key: "getColmun",
	        value: function getColmun(col) {
	            return new _Vector4.default(this.rawElements[col * 4], this.rawElements[col * 4 + 1], this.rawElements[col * 4 + 2], this.rawElements[col * 4 + 3]);
	        }
	        /**
	        * Get row
	        * @params row [0-3]
	        */
	
	    }, {
	        key: "getRow",
	        value: function getRow(row) {
	            return new _Vector4.default(this.rawElements[row], this.rawElements[row + 4], this.rawElements[row + 8], this.rawElements[row + 12]);
	        }
	    }, {
	        key: "multiplyWith",
	        value: function multiplyWith(m) {
	            return Matrix.multiply(this, m);
	        }
	    }, {
	        key: "equalWith",
	        value: function equalWith(m) {
	            return Matrix.equals(m, this);
	        }
	    }, {
	        key: "getTranslation",
	        value: function getTranslation() {
	            var res = [0, 0, 0];
	            _glMatrix.mat4.getTranslation(res, this.rawElements);
	            return new _Vector2.default(res);
	        }
	    }, {
	        key: "getScaling",
	        value: function getScaling() {
	            var res = [0, 0, 0];
	            _glMatrix.mat4.getScaling(res, this.rawElements);
	            return new _Vector2.default(res);
	        }
	    }, {
	        key: "getRotation",
	        value: function getRotation() {
	            var res = [0, 0, 0, 0];
	            _glMatrix.mat4.getRotation(res, this.rawElements);
	            return new _Quaternion2.default(res);
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "|" + this.getBySingleIndex(0) + " " + this.getBySingleIndex(4) + " " + this.getBySingleIndex(8) + " " + this.getBySingleIndex(12) + "|\n\n                 |" + this.getBySingleIndex(1) + " " + this.getBySingleIndex(5) + " " + this.getBySingleIndex(9) + " " + this.getBySingleIndex(13) + "|\n\n                 |" + this.getBySingleIndex(2) + " " + this.getBySingleIndex(6) + " " + this.getBySingleIndex(10) + " " + this.getBySingleIndex(14) + "|\n\n                 |" + this.getBySingleIndex(3) + " " + this.getBySingleIndex(7) + " " + this.getBySingleIndex(11) + " " + this.getBySingleIndex(15) + "|";
	        }
	    }, {
	        key: "ElementCount",
	        get: function get() {
	            return 16;
	        }
	    }, {
	        key: "RowCount",
	        get: function get() {
	            return 4;
	        }
	    }, {
	        key: "ColmunCount",
	        get: function get() {
	            return 4;
	        }
	    }]);
	
	    return Matrix;
	}(_MatrixBase3.default);
	
	exports.default = Matrix;

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	///<reference path="./gl-matrix.d.ts"/>
	var MatrixBase = function () {
	    function MatrixBase() {
	        _classCallCheck(this, MatrixBase);
	    }
	
	    _createClass(MatrixBase, [{
	        key: "getAt",
	        value: function getAt(row, colmun) {
	            throw new Error("Not implemented");
	        }
	    }, {
	        key: "getBySingleIndex",
	        value: function getBySingleIndex(index) {
	            throw new Error("Not implemented");
	        }
	    }, {
	        key: "RowCount",
	        get: function get() {
	            return 0;
	        }
	    }, {
	        key: "ColmunCount",
	        get: function get() {
	            return 0;
	        }
	    }], [{
	        key: "__elementEquals",
	        value: function __elementEquals(m1, m2) {
	            if (m1.RowCount !== m2.RowCount || m1.ColmunCount !== m2.ColmunCount) {
	                return false;
	            }
	            var count = m1.RowCount * m2.ColmunCount;
	            for (var i = 0; i < count; i++) {
	                if (m1.getBySingleIndex(i) !== m2.getBySingleIndex(i)) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }]);
	
	    return MatrixBase;
	}();
	
	exports.default = MatrixBase;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(27);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Vector2Converter(val) {
	    if (val instanceof _Vector2.default) {
	        return val;
	    } else if (typeof val === "string") {
	        return _Vector2.default.parse(val);
	    } else if (typeof val === "number") {
	        return new _Vector2.default(val, val);
	    } else if (Array.isArray(val)) {
	        return new _Vector2.default(val[0], val[1]);
	    }
	}
	exports.default = Vector2Converter;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VectorBase2 = __webpack_require__(3);
	
	var _VectorBase3 = _interopRequireDefault(_VectorBase2);
	
	var _glMatrix = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } ///<reference path="./gl-matrix.d.ts"/>
	
	
	var Vector2 = function (_VectorBase) {
	    _inherits(Vector2, _VectorBase);
	
	    _createClass(Vector2, null, [{
	        key: "copy",
	        value: function copy(vec) {
	            return new Vector2(vec.X, vec.Y);
	        }
	    }, {
	        key: "parse",
	        value: function parse(str) {
	            var parseResult = _VectorBase3.default.__parse(str);
	            var elements = parseResult.elements;
	            if (elements.length !== 1 && elements.length !== 2) {
	                return undefined;
	            }
	            var result = void 0;
	            if (elements.length === 1) {
	                result = new Vector2(elements[0], elements[0]);
	            } else {
	                result = new Vector2(elements[0], elements[1]);
	            }
	            if (parseResult.needNormalize) {
	                result = result.normalizeThis();
	            }
	            if (parseResult.coefficient) {
	                result = result.multiplyWith(parseResult.coefficient);
	            }
	            if (parseResult.needNegate) {
	                result = result.negateThis();
	            }
	            return result;
	        }
	    }, {
	        key: "dot",
	        value: function dot(v1, v2) {
	            return _glMatrix.vec2.dot(v1.rawElements, v2.rawElements);
	        }
	    }, {
	        key: "add",
	        value: function add(v1, v2) {
	            var newVec = _glMatrix.vec2.create();
	            return new Vector2(_glMatrix.vec2.add(newVec, v1.rawElements, v2.rawElements));
	        }
	    }, {
	        key: "subtract",
	        value: function subtract(v1, v2) {
	            var newVec = _glMatrix.vec2.create();
	            return new Vector2(_glMatrix.vec2.sub(newVec, v1.rawElements, v2.rawElements));
	        }
	    }, {
	        key: "multiply",
	        value: function multiply(s, v) {
	            var newVec = _glMatrix.vec2.create();
	            return new Vector2(_glMatrix.vec2.scale(newVec, v.rawElements, s));
	        }
	    }, {
	        key: "negate",
	        value: function negate(v1) {
	            return Vector2.multiply(-1, v1);
	        }
	    }, {
	        key: "equals",
	        value: function equals(v1, v2) {
	            return _VectorBase3.default.__elementEquals(v1, v2);
	        }
	    }, {
	        key: "nearlyEquals",
	        value: function nearlyEquals(v1, v2) {
	            return _VectorBase3.default.__nearlyElementEquals(v1, v2);
	        }
	    }, {
	        key: "normalize",
	        value: function normalize(v1) {
	            var newVec = _glMatrix.vec2.create();
	            return new Vector2(_glMatrix.vec2.normalize(newVec, v1.rawElements));
	        }
	    }, {
	        key: "min",
	        value: function min(v1, v2) {
	            return new Vector2(_VectorBase3.default.__fromGenerationFunction(v1, v2, function (i, v1_, v2_) {
	                return Math.min(v1_.rawElements[i], v2_.rawElements[i]);
	            }));
	        }
	    }, {
	        key: "max",
	        value: function max(v1, v2) {
	            return new Vector2(_VectorBase3.default.__fromGenerationFunction(v1, v2, function (i, v1_, v2_) {
	                return Math.max(v1_.rawElements[i], v2_.rawElements[i]);
	            }));
	        }
	    }, {
	        key: "angle",
	        value: function angle(v1, v2) {
	            return Math.acos(Vector2.dot(v1.normalized, v2.normalized));
	        }
	    }, {
	        key: "XUnit",
	        get: function get() {
	            return new Vector2(1, 0);
	        }
	    }, {
	        key: "YUnit",
	        get: function get() {
	            return new Vector2(0, 1);
	        }
	    }, {
	        key: "One",
	        get: function get() {
	            return new Vector2(1, 1);
	        }
	    }, {
	        key: "Zero",
	        get: function get() {
	            return new Vector2(0, 0);
	        }
	    }]);
	
	    function Vector2(x, y) {
	        _classCallCheck(this, Vector2);
	
	        var _this = _possibleConstructorReturn(this, (Vector2.__proto__ || Object.getPrototypeOf(Vector2)).call(this));
	
	        if (typeof y === "undefined") {
	            _this.rawElements = x;
	            return _possibleConstructorReturn(_this);
	        }
	        _this.rawElements = [x, y];
	        return _this;
	    }
	
	    _createClass(Vector2, [{
	        key: "dotWith",
	        value: function dotWith(v) {
	            return Vector2.dot(this, v);
	        }
	    }, {
	        key: "addWith",
	        value: function addWith(v) {
	            return Vector2.add(this, v);
	        }
	    }, {
	        key: "subtractWith",
	        value: function subtractWith(v) {
	            return Vector2.subtract(v, this);
	        }
	    }, {
	        key: "multiplyWith",
	        value: function multiplyWith(s) {
	            return Vector2.multiply(s, this);
	        }
	    }, {
	        key: "negateThis",
	        value: function negateThis() {
	            return Vector2.negate(this);
	        }
	    }, {
	        key: "equalWith",
	        value: function equalWith(v) {
	            return Vector2.equals(this, v);
	        }
	    }, {
	        key: "nearlyEqualWith",
	        value: function nearlyEqualWith(v) {
	            return Vector2.nearlyEquals(this, v);
	        }
	    }, {
	        key: "normalizeThis",
	        value: function normalizeThis() {
	            return Vector2.normalize(this);
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "(" + this.X + ", " + this.Y + ")";
	        }
	    }, {
	        key: "toDisplayString",
	        value: function toDisplayString() {
	            return "Vector2" + this.toString();
	        }
	    }, {
	        key: "normalized",
	        get: function get() {
	            return this.multiplyWith(1 / this.magnitude);
	        }
	    }, {
	        key: "X",
	        get: function get() {
	            return this.rawElements[0];
	        },
	        set: function set(x) {
	            this.rawElements[0] = +x;
	        }
	    }, {
	        key: "Y",
	        get: function get() {
	            return this.rawElements[1];
	        },
	        set: function set(y) {
	            this.rawElements[1] = +y;
	        }
	    }, {
	        key: "ElementCount",
	        get: function get() {
	            return 2;
	        }
	    }]);
	
	    return Vector2;
	}(_VectorBase3.default);
	
	exports.default = Vector2;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(2);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Vector3Converter(val) {
	    if (val instanceof _Vector2.default) {
	        return val;
	    } else if (typeof val === "string") {
	        return _Vector2.default.parse(val);
	    } else if (typeof val == "number") {
	        return new _Vector2.default(val, val, val);
	    } else if (Array.isArray(val)) {
	        return new _Vector2.default(val[0], val[1], val[2]);
	    }
	}
	exports.default = Vector3Converter;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Vector = __webpack_require__(16);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Vector4Converter(val) {
	    if (val instanceof _Vector2.default) {
	        return val;
	    } else if (typeof val === "string") {
	        return _Vector2.default.parse(val);
	    } else if (typeof val === "number") {
	        return new _Vector2.default(val, val, val, val);
	    } else if (Array.isArray(val)) {
	        return new _Vector2.default(val[0], val[1], val[2], val[3]);
	    }
	}
	exports.default = Vector4Converter;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _glMatrix = __webpack_require__(4);
	
	exports.default = {
	    vec2: _glMatrix.vec2,
	    vec3: _glMatrix.vec3,
	    vec4: _glMatrix.vec4,
	    glMatrix: _glMatrix.glMatrix,
	    mat2d: _glMatrix.mat2d,
	    mat3: _glMatrix.mat3,
	    mat4: _glMatrix.mat4,
	    quat: _glMatrix.quat
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(27);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rectangle = function () {
	    _createClass(Rectangle, null, [{
	        key: "equals",
	        value: function equals(r1, r2) {
	            return r1.Left === r2.Left && r1.Right === r2.Right && r1.Top === r2.Top && r1.Bottom === r2.Bottom;
	        }
	    }, {
	        key: "edgeSizeEquals",
	        value: function edgeSizeEquals(r1, r2) {
	            return r1.Width === r2.Width && r1.Height === r2.Height;
	        }
	    }]);
	
	    function Rectangle(left, top, width, height) {
	        _classCallCheck(this, Rectangle);
	
	        this._left = left;
	        this._top = top;
	        this._width = width;
	        this._height = height;
	    }
	
	    _createClass(Rectangle, [{
	        key: "contains",
	        value: function contains(xOrPoint, y) {
	            var x = void 0;
	            if (xOrPoint instanceof _Vector2.default) {
	                x = xOrPoint.X;
	                y = xOrPoint.Y;
	            } else {
	                x = xOrPoint;
	            }
	            return this.Left <= x && this.Right >= x && this.Top <= y && this.Bottom >= y;
	        }
	    }, {
	        key: "toLocal",
	        value: function toLocal(xOrPoint, y) {
	            var x = void 0;
	            if (xOrPoint instanceof _Vector2.default) {
	                x = xOrPoint.X;
	                y = xOrPoint.Y;
	            } else {
	                x = xOrPoint;
	            }
	            x -= this.Left;
	            y -= this.Top;
	            return xOrPoint instanceof _Vector2.default ? new _Vector2.default(x, y) : [x, y];
	        }
	    }, {
	        key: "toString",
	        value: function toString() {
	            return "Rectangle(" + this.Left + "," + this.Top + "-" + this.Right + "," + this.Bottom + ")";
	        }
	    }, {
	        key: "Left",
	        get: function get() {
	            return this._left;
	        }
	    }, {
	        key: "Right",
	        get: function get() {
	            return this.Left + this.Width;
	        }
	    }, {
	        key: "Top",
	        get: function get() {
	            return this._top;
	        }
	    }, {
	        key: "Bottom",
	        get: function get() {
	            return this._top + this._height;
	        }
	    }, {
	        key: "Width",
	        get: function get() {
	            return this._width;
	        }
	    }, {
	        key: "Height",
	        get: function get() {
	            return this._height;
	        }
	    }]);
	
	    return Rectangle;
	}();
	
	exports.default = Rectangle;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _grimoirejs = __webpack_require__(33);
	
	var _grimoirejs2 = _interopRequireDefault(_grimoirejs);
	
	var _Vector2Converter = __webpack_require__(26);
	
	var _Vector2Converter2 = _interopRequireDefault(_Vector2Converter);
	
	var _Vector3Converter = __webpack_require__(28);
	
	var _Vector3Converter2 = _interopRequireDefault(_Vector3Converter);
	
	var _Vector4Converter = __webpack_require__(29);
	
	var _Vector4Converter2 = _interopRequireDefault(_Vector4Converter);
	
	var _Rotation3Converter = __webpack_require__(22);
	
	var _Rotation3Converter2 = _interopRequireDefault(_Rotation3Converter);
	
	var _Angle2DConverter = __webpack_require__(18);
	
	var _Angle2DConverter2 = _interopRequireDefault(_Angle2DConverter);
	
	var _Color3Converter = __webpack_require__(20);
	
	var _Color3Converter2 = _interopRequireDefault(_Color3Converter);
	
	var _Color4Converter = __webpack_require__(21);
	
	var _Color4Converter2 = _interopRequireDefault(_Color4Converter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	
	exports.default = function () {
	    _grimoirejs2.default.registerConverter("Vector2", _Vector2Converter2.default);
	    _grimoirejs2.default.registerConverter("Vector3", _Vector3Converter2.default);
	    _grimoirejs2.default.registerConverter("Vector4", _Vector4Converter2.default);
	    _grimoirejs2.default.registerConverter("Color3", _Color3Converter2.default);
	    _grimoirejs2.default.registerConverter("Color4", _Color4Converter2.default);
	    _grimoirejs2.default.registerConverter("Rotation3", _Rotation3Converter2.default);
	    _grimoirejs2.default.registerConverter("Angle2D", _Angle2DConverter2.default);
	    _grimoirejs2.default.register(function () {
	        return __awaiter(undefined, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                        case "end":
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	    });
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});exports.default=window.GrimoireJS;

/***/ }
/******/ ])
});
;

},{}],6:[function(require,module,exports){
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});exports.default=window.GrimoireJS;
},{}],7:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _AttributeManager = __webpack_require__(1);
	
	var _AttributeManager2 = _interopRequireDefault(_AttributeManager);
	
	var _Constants = __webpack_require__(6);
	
	var _Constants2 = _interopRequireDefault(_Constants);
	
	var _EEObject = __webpack_require__(11);
	
	var _EEObject2 = _interopRequireDefault(_EEObject);
	
	var _Ensure = __webpack_require__(2);
	
	var _Ensure2 = _interopRequireDefault(_Ensure);
	
	var _IDObject = __webpack_require__(13);
	
	var _IDObject2 = _interopRequireDefault(_IDObject);
	
	var _NSDictionary = __webpack_require__(15);
	
	var _NSDictionary2 = _interopRequireDefault(_NSDictionary);
	
	var _NSIdentity = __webpack_require__(16);
	
	var _NSIdentity2 = _interopRequireDefault(_NSIdentity);
	
	var _NSSet = __webpack_require__(24);
	
	var _NSSet2 = _interopRequireDefault(_NSSet);
	
	var _Utility = __webpack_require__(4);
	
	var _Utility2 = _interopRequireDefault(_Utility);
	
	var _XMLHttpRequestAsync = __webpack_require__(26);
	
	var _XMLHttpRequestAsync2 = _interopRequireDefault(_XMLHttpRequestAsync);
	
	var _XMLReader = __webpack_require__(8);
	
	var _XMLReader2 = _interopRequireDefault(_XMLReader);
	
	var _GrimoireComponent = __webpack_require__(18);
	
	var _GrimoireComponent2 = _interopRequireDefault(_GrimoireComponent);
	
	var _BooleanConverter = __webpack_require__(17);
	
	var _BooleanConverter2 = _interopRequireDefault(_BooleanConverter);
	
	var _StringArrayConverter = __webpack_require__(21);
	
	var _StringArrayConverter2 = _interopRequireDefault(_StringArrayConverter);
	
	var _StringConverter = __webpack_require__(22);
	
	var _StringConverter2 = _interopRequireDefault(_StringConverter);
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _GomlInterface = __webpack_require__(5);
	
	var _GomlInterface2 = _interopRequireDefault(_GomlInterface);
	
	var _NodeInterface = __webpack_require__(7);
	
	var _NodeInterface2 = _interopRequireDefault(_NodeInterface);
	
	var _Attribute = __webpack_require__(20);
	
	var _Attribute2 = _interopRequireDefault(_Attribute);
	
	var _Component = __webpack_require__(19);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _ComponentDeclaration = __webpack_require__(23);
	
	var _ComponentDeclaration2 = _interopRequireDefault(_ComponentDeclaration);
	
	var _GomlLoader = __webpack_require__(27);
	
	var _GomlLoader2 = _interopRequireDefault(_GomlLoader);
	
	var _GomlNode = __webpack_require__(10);
	
	var _GomlNode2 = _interopRequireDefault(_GomlNode);
	
	var _GomlParser = __webpack_require__(9);
	
	var _GomlParser2 = _interopRequireDefault(_GomlParser);
	
	var _NodeDeclaration = __webpack_require__(25);
	
	var _NodeDeclaration2 = _interopRequireDefault(_NodeDeclaration);
	
	var _NodeUtility = __webpack_require__(14);
	
	var _NodeUtility2 = _interopRequireDefault(_NodeUtility);
	
	var _main = __webpack_require__(28);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __VERSION__ = "0.14.0beta0";
	var __NAME__ = "grimoirejs";
	
	var __EXPOSE__ = {
	    "Base": {
	        "AttributeManager": _AttributeManager2.default,
	        "Constants": _Constants2.default,
	        "EEObject": _EEObject2.default,
	        "Ensure": _Ensure2.default,
	        "IDObject": _IDObject2.default,
	        "NSDictionary": _NSDictionary2.default,
	        "NSIdentity": _NSIdentity2.default,
	        "NSSet": _NSSet2.default,
	        "Utility": _Utility2.default,
	        "XMLHttpRequestAsync": _XMLHttpRequestAsync2.default,
	        "XMLReader": _XMLReader2.default
	    },
	    "Components": {
	        "GrimoireComponent": _GrimoireComponent2.default
	    },
	    "Converters": {
	        "BooleanConverter": _BooleanConverter2.default,
	        "StringArrayConverter": _StringArrayConverter2.default,
	        "StringConverter": _StringConverter2.default
	    },
	    "GrimoireInterface": _GrimoireInterface2.default,
	    "Interface": {
	        "GomlInterface": _GomlInterface2.default,
	        "NodeInterface": _NodeInterface2.default
	    },
	    "Node": {
	        "Attribute": _Attribute2.default,
	        "Component": _Component2.default,
	        "ComponentDeclaration": _ComponentDeclaration2.default,
	        "GomlLoader": _GomlLoader2.default,
	        "GomlNode": _GomlNode2.default,
	        "GomlParser": _GomlParser2.default,
	        "NodeDeclaration": _NodeDeclaration2.default,
	        "NodeUtility": _NodeUtility2.default
	    }
	};
	var __BASE__ = (0, _main2.default)();
	Object.assign(__EXPOSE__, {
	    __VERSION__: __VERSION__,
	    __NAME__: __NAME__
	});
	Object.assign(__BASE__ || {}, __EXPOSE__);
	window["GrimoireJS"]["__VERSION__"] = __VERSION__;
	exports.default = __BASE__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Ensure = __webpack_require__(2);
	
	var _Ensure2 = _interopRequireDefault(_Ensure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AttributeManager = function () {
	    function AttributeManager(tag, attributes) {
	        _classCallCheck(this, AttributeManager);
	
	        this.tag = tag;
	        this.attributes = attributes;
	        this._attrBuffer = {};
	        this._watchBuffer = {};
	    }
	
	    _createClass(AttributeManager, [{
	        key: "addAttribute",
	        value: function addAttribute(attr) {
	            if (this.attributes.get(attr.name)) {
	                console.warn("attribute " + attr.name + " is already exist in " + this.tag);
	            }
	            this.attributes.set(attr.name, attr);
	            // check buffer value.
	            var attrBuf = this._attrBuffer[attr.name.fqn];
	            if (attrBuf !== void 0) {
	                attr.Value = attrBuf;
	                delete this._attrBuffer[attr.name.fqn];
	            }
	            var watchBuf = this._watchBuffer[attr.name.fqn];
	            if (watchBuf) {
	                attr.watch(watchBuf, true);
	            }
	            return attr;
	        }
	    }, {
	        key: "watch",
	        value: function watch(attrName, watcher) {
	            var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            attrName = _Ensure2.default.ensureTobeNSIdentity(attrName);
	            var attr = this.attributes.get(attrName);
	            if (!attr) {
	                this._watchBuffer[attrName.fqn] = watcher;
	            } else {
	                attr.watch(watcher, immediate);
	            }
	        }
	    }, {
	        key: "setAttribute",
	        value: function setAttribute(attrName, value) {
	            attrName = _Ensure2.default.ensureTobeNSIdentity(attrName);
	            var attr = this.attributes.get(attrName);
	            if (!attr) {
	                this._attrBuffer[attrName.fqn] = value;
	            } else {
	                attr.Value = value;
	            }
	        }
	    }, {
	        key: "getAttribute",
	        value: function getAttribute(attrName) {
	            attrName = _Ensure2.default.ensureTobeNSIdentity(attrName);
	            var attr = this.attributes.get(attrName);
	            if (!attr) {
	                var attrBuf = this._attrBuffer[attrName.fqn];
	                if (attrBuf !== void 0) {
	                    return attrBuf;
	                }
	                console.warn("attribute \"" + attrName.name + "\" is not found.");
	                return;
	            } else {
	                return attr.Value;
	            }
	        }
	    }, {
	        key: "removeAttribute",
	        value: function removeAttribute(attr) {
	            return this.attributes.delete(attr.name);
	        }
	    }]);
	
	    return AttributeManager;
	}();
	
	exports.default = AttributeManager;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _NSIdentity = __webpack_require__(16);
	
	var _NSIdentity2 = _interopRequireDefault(_NSIdentity);
	
	var _NSDictionary = __webpack_require__(15);
	
	var _NSDictionary2 = _interopRequireDefault(_NSDictionary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Provides static methods to ensure arguments are valid type.
	 */
	var Ensure = function () {
	    function Ensure() {
	        _classCallCheck(this, Ensure);
	    }
	
	    _createClass(Ensure, null, [{
	        key: "ensureString",
	
	        /**
	         * Ensure specified str being string
	         * @param  {string | number}      str [description]
	         * @return {string}      [description]
	         */
	        value: function ensureString(str) {
	            if (typeof str === "string") {
	                return str;
	            } else if (typeof str === "number") {
	                return str.toString();
	            } else {
	                throw new Error("Specified argument can not convert into string");
	            }
	        }
	        /**
	         * Ensure specified number being number
	         * @param  {string | number}      str [description]
	         * @return {string}      [description]
	         */
	
	    }, {
	        key: "ensureNumber",
	        value: function ensureNumber(num) {
	            if (typeof num === "string") {
	                return parseInt(num, 10);
	            } else if (typeof num === "number") {
	                return num;
	            } else {
	                throw new Error("specified argument can not be converted into number");
	            }
	        }
	    }, {
	        key: "ensureTobeNSIdentity",
	        value: function ensureTobeNSIdentity(name) {
	            if (!name) {
	                return undefined;
	            }
	            if (typeof name === "string") {
	                if (name.indexOf("|") !== -1) {
	                    return _NSIdentity2.default.fromFQN(name);
	                }
	                return _NSIdentity2.default.from(name);
	            } else {
	                return name;
	            }
	        }
	    }, {
	        key: "ensureTobeNSIdentityArray",
	        value: function ensureTobeNSIdentityArray(names) {
	            if (!names) {
	                return [];
	            }
	            var newArr = [];
	            for (var i = 0; i < names.length; i++) {
	                newArr.push(this.ensureTobeNSIdentity(names[i]));
	            }
	            return newArr;
	        }
	    }, {
	        key: "ensureTobeNSDictionary",
	        value: function ensureTobeNSDictionary(dict) {
	            if (!dict) {
	                return new _NSDictionary2.default();
	            }
	            if (dict instanceof _NSDictionary2.default) {
	                return dict;
	            } else {
	                var newDict = new _NSDictionary2.default();
	                for (var key in dict) {
	                    newDict.set(_NSIdentity2.default.from(key), dict[key]);
	                }
	                return newDict;
	            }
	        }
	    }, {
	        key: "ensureTobeMessage",
	        value: function ensureTobeMessage(message) {
	            if (message.startsWith("$")) {
	                if (message.startsWith("$$")) {
	                    return message;
	                } else {
	                    return "$" + message;
	                }
	            } else {
	                return "$$" + message;
	            }
	        }
	    }, {
	        key: "ensureTobeComponentConstructor",
	        value: function ensureTobeComponentConstructor(c) {
	            if (typeof c === "function") {
	                return c;
	            } else if (typeof c === "string") {
	                return _GrimoireInterface2.default.componentDeclarations.get(c).ctor;
	            } else {
	                return _GrimoireInterface2.default.componentDeclarations.get(c).ctor;
	            }
	        }
	    }]);
	
	    return Ensure;
	}();
	
	exports.default = Ensure;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Utility = __webpack_require__(4);
	
	var _Utility2 = _interopRequireDefault(_Utility);
	
	var _GomlInterface = __webpack_require__(5);
	
	var _GomlInterface2 = _interopRequireDefault(_GomlInterface);
	
	var _BooleanConverter = __webpack_require__(17);
	
	var _BooleanConverter2 = _interopRequireDefault(_BooleanConverter);
	
	var _GrimoireComponent = __webpack_require__(18);
	
	var _GrimoireComponent2 = _interopRequireDefault(_GrimoireComponent);
	
	var _StringArrayConverter = __webpack_require__(21);
	
	var _StringArrayConverter2 = _interopRequireDefault(_StringArrayConverter);
	
	var _StringConverter = __webpack_require__(22);
	
	var _StringConverter2 = _interopRequireDefault(_StringConverter);
	
	var _Constants = __webpack_require__(6);
	
	var _Constants2 = _interopRequireDefault(_Constants);
	
	var _ComponentDeclaration = __webpack_require__(23);
	
	var _ComponentDeclaration2 = _interopRequireDefault(_ComponentDeclaration);
	
	var _Component = __webpack_require__(19);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _NSSet = __webpack_require__(24);
	
	var _NSSet2 = _interopRequireDefault(_NSSet);
	
	var _NodeDeclaration = __webpack_require__(25);
	
	var _NodeDeclaration2 = _interopRequireDefault(_NodeDeclaration);
	
	var _NSIdentity = __webpack_require__(16);
	
	var _NSIdentity2 = _interopRequireDefault(_NSIdentity);
	
	var _NSDictionary = __webpack_require__(15);
	
	var _NSDictionary2 = _interopRequireDefault(_NSDictionary);
	
	var _Ensure = __webpack_require__(2);
	
	var _Ensure2 = _interopRequireDefault(_Ensure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	
	var GrimoireInterfaceImpl = function () {
	    function GrimoireInterfaceImpl() {
	        _classCallCheck(this, GrimoireInterfaceImpl);
	
	        this.nodeDeclarations = new _NSDictionary2.default();
	        this.converters = new _NSDictionary2.default();
	        this.componentDeclarations = new _NSDictionary2.default();
	        this.rootNodes = {};
	        this.loadTasks = [];
	        this.lib = {};
	        this.nodeDictionary = {};
	        this.componentDictionary = {};
	        this.companion = new _NSDictionary2.default();
	        this.initializedEventHandler = [];
	        this.debug = true;
	    }
	    /**
	     * Generate namespace helper function
	     * @param  {string} ns namespace URI to be used
	     * @return {[type]}    the namespaced identity
	     */
	
	
	    _createClass(GrimoireInterfaceImpl, [{
	        key: "ns",
	        value: function ns(_ns) {
	            return function (name) {
	                return _NSIdentity2.default.from(_ns, name);
	            };
	        }
	    }, {
	        key: "initialize",
	        value: function initialize() {
	            this.registerConverter("String", _StringConverter2.default);
	            this.registerConverter("StringArray", _StringArrayConverter2.default);
	            this.registerConverter("Boolean", _BooleanConverter2.default);
	            this.registerComponent("GrimoireComponent", _GrimoireComponent2.default);
	            this.registerNode("grimoire-node-base", ["GrimoireComponent"]);
	        }
	        /**
	         * Register plugins
	         * @param  {(}      loadTask [description]
	         * @return {[type]}          [description]
	         */
	
	    }, {
	        key: "register",
	        value: function register(loadTask) {
	            this.loadTasks.push(loadTask);
	        }
	    }, {
	        key: "resolvePlugins",
	        value: function resolvePlugins() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var i;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                i = 0;
	
	                            case 1:
	                                if (!(i < this.loadTasks.length)) {
	                                    _context.next = 7;
	                                    break;
	                                }
	
	                                _context.next = 4;
	                                return this.loadTasks[i]();
	
	                            case 4:
	                                i++;
	                                _context.next = 1;
	                                break;
	
	                            case 7:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	        /**
	         * register custom component
	         * @param  {string                |   NSIdentity} name          [description]
	         * @param  {IAttributeDeclaration }} attributes           [description]
	         * @param  {Object                |   (new                 (}           obj           [description]
	         * @return {[type]}                       [description]
	         */
	
	    }, {
	        key: "registerComponent",
	        value: function registerComponent(name, obj, superComponent) {
	            name = _Ensure2.default.ensureTobeNSIdentity(name);
	            if (this.componentDeclarations.get(name)) {
	                throw new Error("component " + name.fqn + " is already registerd.");
	            }
	            if (this.debug && !_Utility2.default.isCamelCase(name.name)) {
	                console.warn("component " + name.name + " is registerd. but,it should be 'CamelCase'.");
	            }
	            obj = this._ensureTobeComponentConstructor(obj, this._ensureNameTobeConstructor(superComponent));
	            var attrs = obj["attributes"] || {};
	            for (var key in attrs) {
	                if (attrs[key].default === void 0) {
	                    throw new Error("default value of attribute " + key + " in " + name.fqn + " must be not 'undefined'.");
	                }
	            }
	            var dec = new _ComponentDeclaration2.default(name, attrs, obj);
	            this.componentDeclarations.set(name, dec);
	            return dec;
	        }
	    }, {
	        key: "registerNode",
	        value: function registerNode(name, requiredComponents, defaults, superNode, freezeAttributes) {
	            name = _Ensure2.default.ensureTobeNSIdentity(name);
	            if (this.nodeDeclarations.get(name)) {
	                throw new Error("gomlnode " + name.fqn + " is already registerd.");
	            }
	            if (this.debug && !_Utility2.default.isSnakeCase(name.name)) {
	                console.warn("node " + name.name + " is registerd. but,it should be 'snake-case'.");
	            }
	            requiredComponents = _Ensure2.default.ensureTobeNSIdentityArray(requiredComponents);
	            defaults = _Ensure2.default.ensureTobeNSDictionary(defaults);
	            superNode = _Ensure2.default.ensureTobeNSIdentity(superNode);
	            this.nodeDeclarations.set(name, new _NodeDeclaration2.default(name, _NSSet2.default.fromArray(requiredComponents), defaults, superNode, freezeAttributes));
	        }
	    }, {
	        key: "registerConverter",
	        value: function registerConverter(name, converter) {
	            name = _Ensure2.default.ensureTobeNSIdentity(name);
	            this.converters.set(name, { name: name, convert: converter });
	        }
	    }, {
	        key: "overrideDeclaration",
	        value: function overrideDeclaration(targetDeclaration, arg2, defaults) {
	            var dec = this.nodeDeclarations.get(targetDeclaration);
	            if (!dec) {
	                throw new Error("attempt not-exist node declaration : " + _Ensure2.default.ensureTobeNSIdentity(targetDeclaration).name);
	            }
	            if (defaults) {
	                var additionalC = arg2;
	                for (var i = 0; i < additionalC.length; i++) {
	                    dec.addDefaultComponent(additionalC[i]);
	                }
	                dec.defaultAttributes.pushDictionary(_Ensure2.default.ensureTobeNSDictionary(defaults));
	            } else if (Array.isArray(arg2)) {
	                var _additionalC = arg2;
	                for (var _i = 0; _i < _additionalC.length; _i++) {
	                    dec.addDefaultComponent(_additionalC[_i]);
	                }
	            } else {
	                dec.defaultAttributes.pushDictionary(_Ensure2.default.ensureTobeNSDictionary(arg2));
	            }
	            return dec;
	        }
	    }, {
	        key: "addRootNode",
	        value: function addRootNode(tag, rootNode) {
	            if (!rootNode) {
	                throw new Error("can not register null to rootNodes.");
	            }
	            this.rootNodes[rootNode.id] = rootNode;
	            rootNode.companion.set(this.ns(_Constants2.default.defaultNamespace)("scriptElement"), tag);
	            // awake and mount tree.
	            rootNode.setMounted(true);
	            rootNode.broadcastMessage("treeInitialized", {
	                ownerScriptTag: tag,
	                id: rootNode.id
	            });
	            tag.setAttribute("x-rootNodeId", rootNode.id);
	            this._onTreeInitialized(tag);
	            return rootNode.id;
	        }
	    }, {
	        key: "getRootNode",
	        value: function getRootNode(scriptTag) {
	            var id = scriptTag.getAttribute("x-rootNodeId");
	            return this.rootNodes[id];
	        }
	    }, {
	        key: "noConflict",
	        value: function noConflict() {
	            window["gr"] = this.noConflictPreserve;
	        }
	    }, {
	        key: "queryRootNodes",
	        value: function queryRootNodes(query) {
	            var scriptTags = document.querySelectorAll(query);
	            var nodes = [];
	            for (var i = 0; i < scriptTags.length; i++) {
	                var node = this.getRootNode(scriptTags.item(i));
	                if (node) {
	                    nodes.push(node);
	                }
	            }
	            return nodes;
	        }
	        /**
	         * This method is not for users.
	         * Just for unit testing.
	         *
	         * Clear all configuration that GrimoireInterface contain.
	         */
	
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.nodeDeclarations.clear();
	            this.componentDeclarations.clear();
	            this.converters.clear();
	            for (var key in this.rootNodes) {
	                delete this.rootNodes[key];
	            }
	            this.loadTasks.splice(0, this.loadTasks.length);
	            this.initialize();
	        }
	        /**
	         * Ensure the given object or constructor to be an constructor inherits Component;
	         * @param  {Object | (new ()=> Component} obj [The variable need to be ensured.]
	         * @return {[type]}      [The constructor inherits Component]
	         */
	
	    }, {
	        key: "_ensureTobeComponentConstructor",
	        value: function _ensureTobeComponentConstructor(obj, baseConstructor) {
	            if (typeof obj === "function") {
	                if (!(obj.prototype instanceof _Component2.default) && obj !== _Component2.default) {
	                    throw new Error("Component constructor must extends Component class.");
	                }
	                return obj;
	            } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
	                var _ret = function () {
	                    if (baseConstructor && !(baseConstructor.prototype instanceof _Component2.default)) {
	                        throw new Error("Base component comstructor must extends Compoent class.");
	                    }
	                    var ctor = baseConstructor || _Component2.default;
	                    var newCtor = function newCtor() {
	                        ctor.call(this);
	                    };
	                    var properties = {};
	                    for (var key in obj) {
	                        if (key === "attributes") {
	                            continue;
	                        }
	                        properties[key] = { value: obj[key] };
	                    }
	                    var attributes = {};
	                    for (var _key in ctor["attributes"]) {
	                        attributes[_key] = ctor["attributes"][_key];
	                    }
	                    for (var _key2 in obj["attributes"]) {
	                        attributes[_key2] = obj["attributes"][_key2];
	                    }
	                    newCtor.prototype = Object.create(ctor.prototype, properties);
	                    Object.defineProperty(newCtor, "attributes", {
	                        value: attributes
	                    });
	                    obj = newCtor;
	                    return {
	                        v: obj
	                    };
	                }();
	
	                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	            }
	            return _Component2.default;
	        }
	    }, {
	        key: "_ensureNameTobeConstructor",
	        value: function _ensureNameTobeConstructor(component) {
	            if (!component) {
	                return null;
	            }
	            if (typeof component === "function") {
	                return component;
	            } else if (typeof component === "string") {
	                return this._ensureNameTobeConstructor(_Ensure2.default.ensureTobeNSIdentity(component));
	            } else {
	                //here NSIdentity.
	                var c = this.componentDeclarations.get(component);
	                if (!c) {
	                    return null;
	                }
	                return c.ctor;
	            }
	        }
	    }, {
	        key: "_onTreeInitialized",
	        value: function _onTreeInitialized(tag) {
	            this.initializedEventHandler.forEach(function (h) {
	                h(tag.id, tag.className, tag);
	            });
	        }
	    }]);
	
	    return GrimoireInterfaceImpl;
	}();
	
	var context = new GrimoireInterfaceImpl();
	var obtainGomlInterface = function obtainGomlInterface(query) {
	    if (typeof query === "string") {
	        // return GomlInterfaceGenerator(context.queryRootNodes(query));
	        var gomlContext = new _GomlInterface2.default(context.queryRootNodes(query));
	        var queryFunc = gomlContext.queryFunc.bind(gomlContext);
	        Object.setPrototypeOf(queryFunc, gomlContext);
	        return queryFunc;
	    } else if (typeof query === "function") {
	        context.initializedEventHandler.push(query);
	    } else {
	        var _gomlContext = new _GomlInterface2.default(query);
	        var _queryFunc = _gomlContext.queryFunc.bind(_gomlContext);
	        Object.setPrototypeOf(_queryFunc, _gomlContext);
	        return _queryFunc;
	    }
	};
	// const bindedFunction = obtainGomlInterface.bind(context);
	Object.setPrototypeOf(obtainGomlInterface, context);
	exports.default = obtainGomlInterface;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Utility = function () {
	    function Utility() {
	        _classCallCheck(this, Utility);
	    }
	
	    _createClass(Utility, null, [{
	        key: "w",
	        value: function w(message) {
	            if (_GrimoireInterface2.default.debug) {
	                console.warn(message);
	            }
	        }
	    }, {
	        key: "isCamelCase",
	        value: function isCamelCase(str) {
	            return (/^[A-Z][a-zA-Z0-9]*$/.test(str)
	            );
	        }
	    }, {
	        key: "isSnakeCase",
	        value: function isSnakeCase(str) {
	            return (/^[a-z0-9\-]+$/.test(str)
	            );
	        }
	    }, {
	        key: "flat",
	        value: function flat(array) {
	            var count = 0;
	            for (var i = 0; i < array.length; i++) {
	                count += array[i].length;
	            }
	            var ret = new Array(count);
	            count = 0;
	            for (var _i = 0; _i < array.length; _i++) {
	                var ar = array[_i];
	                for (var j = 0; j < ar.length; j++) {
	                    ret[count] = ar[j];
	                    count++;
	                }
	            }
	            return ret;
	        }
	    }, {
	        key: "flatMap",
	        value: function flatMap(source, map) {
	            var c = new Array(source.length);
	            for (var i = 0; i < source.length; i++) {
	                c[i] = map(source[i]);
	            }
	            return Utility.flat(c);
	        }
	    }, {
	        key: "sum",
	        value: function sum(array) {
	            var total = 0;
	            for (var i = 0; i < array.length; i++) {
	                total += array[i];
	            }
	            return total;
	        }
	    }, {
	        key: "remove",
	        value: function remove(array, target) {
	            var index = -1;
	            for (var i = 0; i < array.length; i++) {
	                if (target === array[i]) {
	                    index = i;
	                    break;
	                }
	            }
	            if (index < 0) {
	                return false;
	            }
	            array.splice(index, 1);
	            return true;
	        }
	    }]);
	
	    return Utility;
	}();
	
	exports.default = Utility;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Constants = __webpack_require__(6);
	
	var _Constants2 = _interopRequireDefault(_Constants);
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _NodeInterface = __webpack_require__(7);
	
	var _NodeInterface2 = _interopRequireDefault(_NodeInterface);
	
	var _GomlNode = __webpack_require__(10);
	
	var _GomlNode2 = _interopRequireDefault(_GomlNode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Provides interfaces to treat whole goml tree for each.
	 */
	var GomlInterface = function () {
	    function GomlInterface(rootNodes) {
	        _classCallCheck(this, GomlInterface);
	
	        this.rootNodes = rootNodes;
	    }
	
	    _createClass(GomlInterface, [{
	        key: "getNodeById",
	        value: function getNodeById(id) {
	            return this.rootNodes.map(function (root) {
	                return _GomlNode2.default.fromElement(root.element.ownerDocument.getElementById(id));
	            });
	        }
	    }, {
	        key: "queryFunc",
	        value: function queryFunc(query) {
	            return new _NodeInterface2.default(this.queryNodes(query));
	        }
	    }, {
	        key: "queryNodes",
	        value: function queryNodes(query) {
	            return this.rootNodes.map(function (root) {
	                var nodelist = root.element.ownerDocument.querySelectorAll(query);
	                var nodes = [];
	                for (var i = 0; i < nodelist.length; i++) {
	                    var node = _GrimoireInterface2.default.nodeDictionary[nodelist.item(i).getAttribute(_Constants2.default.x_gr_id)];
	                    if (node) {
	                        nodes.push(node);
	                    }
	                }
	                return nodes;
	            });
	        }
	    }]);
	
	    return GomlInterface;
	}();
	
	exports.default = GomlInterface;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Constants = function () {
	    function Constants() {
	        _classCallCheck(this, Constants);
	    }
	
	    _createClass(Constants, null, [{
	        key: "defaultNamespace",
	        get: function get() {
	            return "HTTP://GRIMOIRE.GL/NS/DEFAULT";
	        }
	    }, {
	        key: "x_gr_id",
	        get: function get() {
	            return "x-gr-id";
	        }
	    }]);
	
	    return Constants;
	}();
	
	exports.default = Constants;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Utility = __webpack_require__(4);
	
	var _Utility2 = _interopRequireDefault(_Utility);
	
	var _XMLReader = __webpack_require__(8);
	
	var _XMLReader2 = _interopRequireDefault(_XMLReader);
	
	var _GomlParser = __webpack_require__(9);
	
	var _GomlParser2 = _interopRequireDefault(_GomlParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * 複数のノードを対象とした操作を提供するインタフェース
	 */
	var NodeInterface = function () {
	    function NodeInterface(nodes) {
	        _classCallCheck(this, NodeInterface);
	
	        this.nodes = nodes;
	        if (!nodes) {
	            throw new Error("nodes is null");
	        }
	    }
	
	    _createClass(NodeInterface, [{
	        key: "isEmpty",
	        value: function isEmpty() {
	            return this.count() === 0;
	        }
	    }, {
	        key: "get",
	        value: function get(i1, i2) {
	            var _this = this;
	
	            if (i1 === void 0) {
	                var first = this.first();
	                if (!first) {
	                    throw new Error("this NodeInterface is empty.");
	                } else {
	                    return first;
	                }
	            } else if (i2 === void 0) {
	                if (this.count() <= i1) {
	                    throw new Error("index out of range.");
	                } else {
	                    var _ret = function () {
	                        var c = i1;
	                        var returnNode = null;
	                        _this.forEach(function (node) {
	                            if (c === 0) {
	                                returnNode = node;
	                            }
	                            c--;
	                        });
	                        return {
	                            v: returnNode
	                        };
	                    }();
	
	                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	                }
	            } else {
	                if (this.nodes.length <= i1 || this.nodes[i1].length <= i2) {
	                    throw new Error("index out of range.");
	                } else {
	                    return this.nodes[i1][i2];
	                }
	            }
	        }
	    }, {
	        key: "getAttribute",
	        value: function getAttribute(attrName) {
	            var first = this.first();
	            if (!first) {
	                throw new Error("this NodeInterface is empty.");
	            }
	            return first.getAttribute(attrName);
	        }
	    }, {
	        key: "setAttribute",
	        value: function setAttribute(attrName, value) {
	            this.forEach(function (node) {
	                node.setAttribute(attrName, value, false);
	            });
	        }
	        /**
	         * 対象ノードにイベントリスナを追加します。
	         * @param {string}   eventName [description]
	         * @param {Function} listener  [description]
	         */
	
	    }, {
	        key: "on",
	        value: function on(eventName, listener) {
	            this.forEach(function (node) {
	                node.on(eventName, listener);
	            });
	            return this;
	        }
	        /**
	         * 対象ノードに指定したイベントリスナが登録されていれば削除します
	         * @param {string}   eventName [description]
	         * @param {Function} listener  [description]
	         */
	
	    }, {
	        key: "off",
	        value: function off(eventName, listener) {
	            this.forEach(function (node) {
	                node.removeListener(eventName, listener);
	            });
	            return this;
	        }
	        /**
	         * このノードインタフェースが対象とするノードそれぞれに、
	         * タグで指定したノードを子要素として追加します。
	         * @param {string} tag [description]
	         */
	
	    }, {
	        key: "append",
	        value: function append(tag) {
	            this.forEach(function (node) {
	                var elems = _XMLReader2.default.parseXML(tag);
	                elems.forEach(function (elem) {
	                    var child = _GomlParser2.default.parse(elem, null, null);
	                    node.addChild(child);
	                });
	            });
	            return this;
	        }
	        /**
	         * このノードインタフェースが対象とするノードの子に、
	         * 指定されたノードが存在すれば削除します。
	         * @param {GomlNode} child [description]
	         */
	
	    }, {
	        key: "remove",
	        value: function remove() {
	            this.forEach(function (node) {
	                node.remove();
	            });
	            return this;
	        }
	        /**
	         * このノードインタフェースが対象とするノードに対して反復処理を行います
	         * @param  {GomlNode} callback [description]
	         * @return {[type]}            [description]
	         */
	
	    }, {
	        key: "forEach",
	        value: function forEach(callback) {
	            this.nodes.forEach(function (array, gomlIndex) {
	                array.forEach(function (node, nodeIndex) {
	                    callback(node, gomlIndex, nodeIndex);
	                });
	            });
	            return this;
	        }
	    }, {
	        key: "find",
	        value: function find(predicate) {
	            var nodes = this.nodes;
	            for (var i = 0; i < nodes.length; i++) {
	                var array = nodes[i];
	                for (var j = 0; j < array.length; j++) {
	                    var node = array[j];
	                    if (predicate(node, i, j)) {
	                        return node;
	                    }
	                }
	            }
	            return null;
	        }
	    }, {
	        key: "watch",
	        value: function watch(attrName, watcher) {
	            var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this.forEach(function (node) {
	                node.watch(attrName, watcher, immediate);
	            });
	        }
	        /**
	         * このノードインタフェースが対象とするノードを有効、または無効にします。
	         * @param {boolean} enable [description]
	         */
	
	    }, {
	        key: "setEnable",
	        value: function setEnable(enable) {
	            this.forEach(function (node) {
	                node.enabled = !!enable;
	            });
	            return this;
	        }
	        /**
	         * このノードインタフェースが対象とするノードのそれぞれの子ノードを対象とする、
	         * 新しいノードインタフェースを取得します。
	         * @return {NodeInterface} [description]
	         */
	
	    }, {
	        key: "children",
	        value: function children() {
	            var children = this.nodes.map(function (nodes) {
	                return _Utility2.default.flatMap(nodes, function (node) {
	                    return node.children;
	                });
	            });
	            return new NodeInterface(children);
	        }
	        /**
	         * 対象ノードにコンポーネントをアタッチします。
	         * @param {Component} component [description]
	         */
	
	    }, {
	        key: "addComponent",
	        value: function addComponent(componentId) {
	            var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	            this.forEach(function (node) {
	                node.addComponent(componentId, attributes);
	            });
	            return this;
	        }
	        /**
	         * 最初の対象ノードを取得する
	         * @return {GomlNode} [description]
	         */
	
	    }, {
	        key: "first",
	        value: function first() {
	            return this.find(function () {
	                return true;
	            });
	        }
	        /**
	         * 対象となる唯一のノードを取得する。
	         * 対象が存在しない、あるいは複数存在するときは例外を投げる。
	         * @return {GomlNode} [description]
	         */
	
	    }, {
	        key: "single",
	        value: function single() {
	            if (this.count() !== 1) {
	                throw new Error("this nodeInterface is not single.");
	            }
	            var first = this.first();
	            if (!first) {
	                throw new Error("this nodeInterface is not single,but is empty.");
	            }
	            return first;
	        }
	        /**
	         * 対象となるノードの個数を取得する
	         * @return {number} [description]
	         */
	
	    }, {
	        key: "count",
	        value: function count() {
	            if (this.nodes.length === 0) {
	                return 0;
	            }
	            var counts = this.nodes.map(function (nodes) {
	                return nodes.length;
	            });
	            return _Utility2.default.sum(counts);
	        }
	    }, {
	        key: "filter",
	        value: function filter(predicate) {
	            var newNodes = [];
	            for (var i = 0; i < this.nodes.length; i++) {
	                var goml = this.nodes[i];
	                newNodes.push([]);
	                for (var j = 0; j < goml.length; j++) {
	                    var node = goml[j];
	                    if (predicate(node, i, j)) {
	                        newNodes[i].push(node);
	                    }
	                }
	            }
	            return new NodeInterface(newNodes);
	        }
	    }, {
	        key: "toArray",
	        value: function toArray() {
	            return _Utility2.default.flat(this.nodes);
	        }
	    }, {
	        key: "addChildByName",
	        value: function addChildByName(nodeName, attributes) {
	            this.forEach(function (node) {
	                node.addChildByName(nodeName, attributes);
	            });
	        }
	    }, {
	        key: "sendMessage",
	        value: function sendMessage(message, args) {
	            this.forEach(function (node) {
	                node.sendMessage(message, args);
	            });
	        }
	    }, {
	        key: "broadcastMessage",
	        value: function broadcastMessage(arg1, arg2, arg3) {
	            if (typeof arg1 === "number") {
	                this.forEach(function (node) {
	                    node.broadcastMessage(arg1, arg2, arg3);
	                });
	            } else {
	                this.forEach(function (node) {
	                    node.broadcastMessage(arg2, arg3);
	                });
	            }
	        }
	    }]);
	
	    return NodeInterface;
	}();
	
	exports.default = NodeInterface;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Provides safe xml read feature.
	 */
	var XMLReader = function () {
	    function XMLReader() {
	        _classCallCheck(this, XMLReader);
	    }
	
	    _createClass(XMLReader, null, [{
	        key: 'parseXML',
	        value: function parseXML(doc, rootElementName) {
	            var isParseError = function isParseError(parsedDocument) {
	                var defaultError = console.error;
	                console.error = function () {}; //disable error message!
	                var errorneousParse = XMLReader._parser.parseFromString('<', 'text/xml');
	                delete console.error; //restore...
	                console.error = defaultError;
	                if (errorneousParse.documentURI === void 0) {
	                    return false;
	                }
	                var parsererrorNS = errorneousParse.getElementsByTagName("parsererror").item(0).namespaceURI;
	                if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
	                    return parsedDocument.getElementsByTagName("parsererror").length > 0;
	                }
	                return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
	            };
	            var parsed = XMLReader._parser.parseFromString(doc, "text/xml");
	            if (isParseError(parsed)) {
	                throw new Error('Error parsing XML');
	            }
	            if (rootElementName) {
	                if (parsed.documentElement.tagName.toUpperCase() !== rootElementName.toUpperCase()) {
	                    throw new Error("Specified document is invalid.");
	                } // TODO should throw more detail error
	            }
	            return [parsed.documentElement]; // TODO: implenent!
	        }
	    }, {
	        key: 'getElements',
	        value: function getElements(elem, name) {
	            var result = [];
	            var elems = elem.getElementsByTagName(name);
	            for (var i = 0; i < elems.length; i++) {
	                result.push(elems.item(i));
	            }
	            return result;
	        }
	    }, {
	        key: 'getSingleElement',
	        value: function getSingleElement(elem, name, mandatory) {
	            var result = XMLReader.getElements(elem, name);
	            if (result.length === 1) {
	                return result[0];
	            } else if (result.length === 0) {
	                if (mandatory) {
	                    throw new Error('The mandatory element ' + name + ' was required, but not found');
	                } else {
	                    return null;
	                }
	            } else {
	                throw new Error('The element ' + name + ' requires to exist in single. But there is ' + result.length + ' count of elements');
	            }
	        }
	    }, {
	        key: 'getAttribute',
	        value: function getAttribute(elem, name, mandatory) {
	            var result = elem.attributes.getNamedItem(name);
	            if (result) {
	                return result.value;
	            } else if (mandatory) {
	                throw new Error('The mandatory attribute ' + name + ' was required, but it was not found');
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'getAttributeFloat',
	        value: function getAttributeFloat(elem, name, mandatory) {
	            var resultStr = XMLReader.getAttribute(elem, name, mandatory);
	            return parseFloat(resultStr);
	        }
	    }, {
	        key: 'getAttributeInt',
	        value: function getAttributeInt(elem, name, mandatory) {
	            var resultStr = XMLReader.getAttribute(elem, name, mandatory);
	            return parseInt(resultStr, 10);
	        }
	    }, {
	        key: 'getChildElements',
	        value: function getChildElements(elem) {
	            var children = elem.childNodes;
	            var result = [];
	            for (var i = 0; i < children.length; i++) {
	                if (children.item(i) instanceof Element) {
	                    result.push(children.item(i));
	                }
	            }
	            return result;
	        }
	    }, {
	        key: 'getAttributes',
	        value: function getAttributes(elem, ns) {
	            var result = {};
	            var attrs = elem.attributes;
	            for (var i = 0; i < attrs.length; i++) {
	                var attr = attrs.item(i);
	                if (!ns || attr.namespaceURI === ns) {
	                    result[attr.localName] = attr.value;
	                }
	            }
	            return result;
	        }
	    }]);
	
	    return XMLReader;
	}();
	
	XMLReader._parser = new DOMParser();
	exports.default = XMLReader;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GomlNode = __webpack_require__(10);
	
	var _GomlNode2 = _interopRequireDefault(_GomlNode);
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Parser of Goml to Node utilities.
	 * This class do not store any nodes and goml properties.
	 */
	var GomlParser = function () {
	    function GomlParser() {
	        _classCallCheck(this, GomlParser);
	    }
	
	    _createClass(GomlParser, null, [{
	        key: "parse",
	
	        /**
	         * Domをパースする
	         * @param  {Element}           source    [description]
	         * @param  {GomlNode}          parent    あればこのノードにaddChildされる
	         * @return {GomlNode}                    ルートノード
	         */
	        value: function parse(source, parent, scriptTag) {
	            var newNode = GomlParser._createNode(source);
	            if (!newNode) {
	                // when specified node could not be found
	                console.warn("\"" + source.tagName + "\" was not parsed.");
	                return null;
	            }
	            // Parse children recursively
	            var children = source.childNodes;
	            var childNodeElements = []; // for parse after .Components has resolved.
	            if (children && children.length !== 0) {
	                var removeTarget = [];
	                for (var i = 0; i < children.length; i++) {
	                    var child = children.item(i);
	                    if (!GomlParser._isElement(child)) {
	                        removeTarget.push(child);
	                        continue;
	                    }
	                    if (this._isComponentsTag(child)) {
	                        // parse as components
	                        GomlParser._parseComponents(newNode, child);
	                        removeTarget.push(child);
	                    } else {
	                        // parse as child node.
	                        childNodeElements.push(child);
	                    }
	                }
	                // remove unused elements
	                for (var _i = 0; _i < removeTarget.length; _i++) {
	                    source.removeChild(removeTarget[_i]);
	                }
	            }
	            // generate tree
	            if (parent) {
	                parent.addChild(newNode, null, false);
	            }
	            childNodeElements.forEach(function (child) {
	                GomlParser.parse(child, newNode, null);
	            });
	            return newNode;
	        }
	        /**
	         * GomlNodeのインスタンス化。GrimoireInterfaceへの登録
	         * @param  {HTMLElement}      elem         [description]
	         * @param  {GomlConfigurator} configurator [description]
	         * @return {GomlTreeNodeBase}              [description]
	         */
	
	    }, {
	        key: "_createNode",
	        value: function _createNode(elem) {
	            var tagName = elem.localName;
	            var recipe = _GrimoireInterface2.default.nodeDeclarations.get(elem);
	            if (!recipe) {
	                throw new Error("Tag \"" + tagName + "\" is not found.");
	            }
	            return new _GomlNode2.default(recipe, elem);
	        }
	        /**
	         * .COMPONENTSのパース。
	         * @param {GomlNode} node          アタッチされるコンポーネント
	         * @param {Element}  componentsTag .COMPONENTSタグ
	         */
	
	    }, {
	        key: "_parseComponents",
	        value: function _parseComponents(node, componentsTag) {
	            var componentNodes = componentsTag.childNodes;
	            if (!componentNodes) {
	                return;
	            }
	            for (var i = 0; i < componentNodes.length; i++) {
	                var componentNode = componentNodes.item(i);
	                if (!GomlParser._isElement(componentNode)) {
	                    continue; // Skip if the node was not element
	                }
	                var componentDecl = _GrimoireInterface2.default.componentDeclarations.get(componentNode);
	                if (!componentDecl) {
	                    throw new Error("Component " + componentNode.tagName + " is not found.");
	                }
	                var component = componentDecl.generateInstance(componentNode);
	                node._addComponentDirectly(component, false);
	            }
	        }
	    }, {
	        key: "_isElement",
	        value: function _isElement(node) {
	            return node.nodeType === Node.ELEMENT_NODE;
	        }
	    }, {
	        key: "_isComponentsTag",
	        value: function _isComponentsTag(element) {
	            var regexToFindComponent = /\.COMPONENTS$/mi; // TODO might needs to fix
	            return regexToFindComponent.test(element.nodeName);
	        }
	    }]);
	
	    return GomlParser;
	}();
	
	exports.default = GomlParser;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AttributeManager = __webpack_require__(1);
	
	var _AttributeManager2 = _interopRequireDefault(_AttributeManager);
	
	var _Utility = __webpack_require__(4);
	
	var _Utility2 = _interopRequireDefault(_Utility);
	
	var _Constants = __webpack_require__(6);
	
	var _Constants2 = _interopRequireDefault(_Constants);
	
	var _GomlParser = __webpack_require__(9);
	
	var _GomlParser2 = _interopRequireDefault(_GomlParser);
	
	var _XMLReader = __webpack_require__(8);
	
	var _XMLReader2 = _interopRequireDefault(_XMLReader);
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _EEObject2 = __webpack_require__(11);
	
	var _EEObject3 = _interopRequireDefault(_EEObject2);
	
	var _NodeUtility = __webpack_require__(14);
	
	var _NodeUtility2 = _interopRequireDefault(_NodeUtility);
	
	var _NSDictionary = __webpack_require__(15);
	
	var _NSDictionary2 = _interopRequireDefault(_NSDictionary);
	
	var _NSIdentity = __webpack_require__(16);
	
	var _NSIdentity2 = _interopRequireDefault(_NSIdentity);
	
	var _Ensure = __webpack_require__(2);
	
	var _Ensure2 = _interopRequireDefault(_Ensure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GomlNode = function (_EEObject) {
	    _inherits(GomlNode, _EEObject);
	
	    /**
	     * create new instance.
	     * @param  {NodeDeclaration} recipe  作成するノードのDeclaration
	     * @param  {Element}         element 対応するDomElement
	     * @return {[type]}                  [description]
	     */
	    function GomlNode(recipe, element) {
	        _classCallCheck(this, GomlNode);
	
	        var _this = _possibleConstructorReturn(this, (GomlNode.__proto__ || Object.getPrototypeOf(GomlNode)).call(this));
	
	        _this.children = [];
	        _this._parent = null;
	        _this._root = null;
	        _this._mounted = false;
	        _this._enabled = true;
	        // private _messageBuffer: { message: string, target: Component }[] = [];
	        _this._tree = null;
	        _this._companion = new _NSDictionary2.default();
	        _this._deleted = false;
	        _this._attrBuffer = {};
	        _this._defaultValueResolved = false;
	        _this._isActive = false;
	        _this._messageCache = {};
	        if (!recipe) {
	            throw new Error("recipe must not be null");
	        }
	        _this.nodeDeclaration = recipe;
	        _this.element = element ? element : document.createElementNS(recipe.name.ns, recipe.name.name); // TODO Could be undefined or null?
	        _this.componentsElement = document.createElement("COMPONENTS");
	        _this._root = _this;
	        _this._tree = (0, _GrimoireInterface2.default)([_this]);
	        _this._components = [];
	        _this._attributeManager = new _AttributeManager2.default(recipe.name.name, new _NSDictionary2.default());
	        _this.element.setAttribute(_Constants2.default.x_gr_id, _this.id);
	        var defaultComponentNames = recipe.defaultComponentsActual;
	        // instanciate default components
	        defaultComponentNames.forEach(function (id) {
	            _this.addComponent(id, null, true);
	        });
	        // register to GrimoireInterface.
	        _GrimoireInterface2.default.nodeDictionary[_this.id] = _this;
	        return _this;
	    }
	    /**
	     * Get actual goml node from element of xml tree.
	     * @param  {Element}  elem [description]
	     * @return {GomlNode}      [description]
	     */
	
	
	    _createClass(GomlNode, [{
	        key: "getChildrenByClass",
	
	        /**
	         * search from children node by class property.
	         * return all nodes has same class as given.
	         * @param  {string}     className [description]
	         * @return {GomlNode[]}           [description]
	         */
	        value: function getChildrenByClass(className) {
	            var nodes = this.element.getElementsByClassName(className);
	            var array = new Array(nodes.length);
	            for (var i = 0; i < nodes.length; i++) {
	                array[i] = GomlNode.fromElement(nodes.item(i));
	            }
	            return array;
	        }
	        /**
	         * search from children node by name property.
	         * return all nodes has same name as given.
	         * @param  {string}     nodeName [description]
	         * @return {GomlNode[]}          [description]
	         */
	
	    }, {
	        key: "getChildrenByNodeName",
	        value: function getChildrenByNodeName(nodeName) {
	            var nodes = this.element.getElementsByTagName(nodeName);
	            var array = new Array(nodes.length);
	            for (var i = 0; i < nodes.length; i++) {
	                array[i] = GomlNode.fromElement(nodes.item(i));
	            }
	            return array;
	        }
	    }, {
	        key: "remove",
	        value: function remove() {
	            this.children.forEach(function (c) {
	                c.remove();
	            });
	            _GrimoireInterface2.default.nodeDictionary[this.id] = null;
	            if (this._parent) {
	                this._parent.detachChild(this);
	            } else {
	                this.setMounted(false);
	                if (this.element.parentNode) {
	                    this.element.parentNode.removeChild(this.element);
	                }
	            }
	            this._deleted = true;
	        }
	        /**
	         * send message to this node.
	         * invoke component method has same name as message if this node isActive.
	         * @param  {string}  message [description]
	         * @param  {any}     args    [description]
	         * @return {boolean}         is this node active.
	         */
	
	    }, {
	        key: "sendMessage",
	        value: function sendMessage(message, args) {
	            if (!this.isActive) {
	                return false;
	            }
	            message = _Ensure2.default.ensureTobeMessage(message);
	            this._sendMessage(message, args);
	            return true;
	        }
	    }, {
	        key: "_sendMessage",
	        value: function _sendMessage(message, args) {
	            if (this._messageCache[message] === void 0) {
	                this._messageCache[message] = this._components.filter(function (c) {
	                    return typeof c[message] === "function";
	                });
	            }
	            var targetList = this._messageCache[message];
	            for (var i = 0; i < targetList.length; i++) {
	                this._sendMessageToComponent(targetList[i], message, args);
	            }
	        }
	    }, {
	        key: "broadcastMessage",
	        value: function broadcastMessage(arg1, arg2, arg3) {
	            if (!this.enabled || !this.mounted) {
	                return;
	            }
	            if (typeof arg1 === "number") {
	                var range = arg1;
	                var message = _Ensure2.default.ensureTobeMessage(arg2);
	                var args = arg3;
	                this._broadcastMessage(message, args, range);
	            } else {
	                var _message = _Ensure2.default.ensureTobeMessage(arg1);
	                var _args = arg2;
	                this._broadcastMessage(_message, _args, -1);
	            }
	        }
	    }, {
	        key: "_broadcastMessage",
	        value: function _broadcastMessage(message, args, range) {
	            //message is already ensured.-1 to unlimited range.
	            if (!this.isActive) {
	                return;
	            }
	            this._sendMessage(message, args);
	            if (range === 0) {
	                return;
	            }
	            var nextRange = range - 1;
	            for (var i = 0; i < this.children.length; i++) {
	                this.children[i]._broadcastMessage(message, args, nextRange);
	            }
	        }
	    }, {
	        key: "append",
	        value: function append(tag) {
	            var _this2 = this;
	
	            var elems = _XMLReader2.default.parseXML(tag);
	            var ret = [];
	            elems.forEach(function (elem) {
	                var child = _GomlParser2.default.parse(elem, null, null);
	                _this2.addChild(child);
	                ret.push(child);
	            });
	            return ret;
	        }
	        /**
	         * add new instance created by given name and attributes for this node as child.
	         * @param {string |   NSIdentity} nodeName      [description]
	         * @param {any    }} attributes   [description]
	         */
	
	    }, {
	        key: "addChildByName",
	        value: function addChildByName(nodeName, attributes) {
	            if (typeof nodeName === "string") {
	                return this.addChildByName(_NSIdentity2.default.from(nodeName), attributes);
	            } else {
	                var nodeDec = _GrimoireInterface2.default.nodeDeclarations.get(nodeName);
	                var node = new GomlNode(nodeDec, null);
	                if (attributes) {
	                    for (var key in attributes) {
	                        var id = _Ensure2.default.ensureTobeNSIdentity(key);
	                        node.setAttribute(id, attributes[key]);
	                    }
	                }
	                this.addChild(node);
	                return node;
	            }
	        }
	        /**
	         * Add child for this node.
	         * @param {GomlNode} child            child node to add.
	         * @param {number}   index            index for insert.なければ末尾に追加
	         * @param {[type]}   elementSync=true trueのときはElementのツリーを同期させる。（Elementからパースするときはfalseにする）
	         */
	
	    }, {
	        key: "addChild",
	        value: function addChild(child, index) {
	            var elementSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            if (child._deleted) {
	                throw new Error("deleted node never use.");
	            }
	            if (index != null && typeof index !== "number") {
	                throw new Error("insert index should be number or null or undefined.");
	            }
	            child._parent = this;
	            var insertIndex = index == null ? this.children.length : index;
	            this.children.splice(insertIndex, 0, child);
	            // handling html
	            if (elementSync) {
	                var referenceElement = this.element[_NodeUtility2.default.getNodeListIndexByElementIndex(this.element, insertIndex)];
	                this.element.insertBefore(child.element, referenceElement);
	            }
	            child._tree = this._tree;
	            child._companion = this._companion;
	            // mounting
	            if (this.mounted) {
	                child.setMounted(true);
	            }
	        }
	    }, {
	        key: "callRecursively",
	        value: function callRecursively(func) {
	            return this._callRecursively(func, function (n) {
	                return n.children;
	            });
	        }
	        /**
	         * delete child node.
	         * @param {GomlNode} child Target node to be inserted.
	         */
	
	    }, {
	        key: "removeChild",
	        value: function removeChild(child) {
	            var node = this.detachChild(child);
	            if (node) {
	                node.remove();
	            }
	        }
	        /**
	         * detach given node from this node if target is child of this node.
	         * return null if target is not child of this node.
	         * @param  {GomlNode} child [description]
	         * @return {GomlNode}       detached node.
	         */
	
	    }, {
	        key: "detachChild",
	        value: function detachChild(target) {
	            // search child.
	            var index = this.children.indexOf(target);
	            if (index === -1) {
	                return null;
	            }
	            target.setMounted(false);
	            target._parent = null;
	            this.children.splice(index, 1);
	            // html sync
	            this.element.removeChild(target.element);
	            return target;
	        }
	        /**
	         * detach this node from parent.
	         */
	
	    }, {
	        key: "detach",
	        value: function detach() {
	            if (this.parent) {
	                this.parent.detachChild(this);
	            } else {
	                throw new Error("root Node cannot be detached.");
	            }
	        }
	        /**
	         * [[[OBSOLETE!]]]get value of attribute.
	         * @param  {string | NSIdentity}  attrName [description]
	         * @return {any}         [description]
	         */
	
	    }, {
	        key: "getValue",
	        value: function getValue(attrName) {
	            console.warn("getValue is obsolate. please use getAttribute instead of");
	            return this.getAttribute(attrName);
	        }
	    }, {
	        key: "getAttribute",
	        value: function getAttribute(attrName) {
	            return this._attributeManager.getAttribute(attrName);
	        }
	    }, {
	        key: "getAttributeRaw",
	        value: function getAttributeRaw(attrName) {
	            return this._attributeManager.attributes.get(attrName);
	        }
	    }, {
	        key: "setAttribute",
	        value: function setAttribute(attrName, value) {
	            var ignoireFreeze = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	
	            if (!ignoireFreeze && this.isFreezeAttribute(_Ensure2.default.ensureTobeNSIdentity(attrName).name)) {
	                throw new Error("attribute " + _Ensure2.default.ensureTobeNSIdentity(attrName).name + " can not set. Attribute is frozen. ");
	            }
	            return this._attributeManager.setAttribute(attrName, value);
	        }
	        /**
	         *  Add new attribute. In most of case, users no need to call this method.
	         *  Use __addAttribute in Component should be used instead.
	         */
	
	    }, {
	        key: "addAttribute",
	        value: function addAttribute(attr) {
	            return this._attributeManager.addAttribute(attr);
	        }
	        /**
	         * Update mounted status and emit events
	         * @param {boolean} mounted Mounted status.
	         */
	
	    }, {
	        key: "setMounted",
	        value: function setMounted(mounted) {
	            if (this._mounted === mounted) {
	                return;
	            }
	            if (mounted) {
	                this._mounted = mounted;
	                this._sendMessageForced("awake");
	                this._isActive = this._parent ? this._parent.isActive && this.enabled : this.enabled;
	                this._sendMessageForced("mount");
	                this.children.forEach(function (child) {
	                    child.setMounted(mounted);
	                });
	            } else {
	                this.children.forEach(function (child) {
	                    child.setMounted(mounted);
	                });
	                this._sendMessageForced("unmount");
	                this._sendMessageForced("dispose");
	                this._isActive = false;
	                this._tree = null;
	                this._companion = null;
	                this._mounted = mounted;
	            }
	        }
	        /**
	         * Get index of this node from parent.
	         * @return {number} number of index.
	         */
	
	    }, {
	        key: "index",
	        value: function index() {
	            if (!this._parent) {
	                return -1;
	            }
	            return this._parent.children.indexOf(this);
	        }
	        /**
	         * remove attribute from this node.
	         * @param {Attribute} attr [description]
	         */
	
	    }, {
	        key: "removeAttribute",
	        value: function removeAttribute(attr) {
	            return this._attributeManager.removeAttribute(attr);
	        }
	        /**
	         * attach component to this node.
	         * @param {Component} component [description]
	         */
	
	    }, {
	        key: "addComponent",
	        value: function addComponent(component) {
	            var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	            var isDefaultComponent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            var declaration = _GrimoireInterface2.default.componentDeclarations.get(component);
	            if (!declaration) {
	                throw new Error("Specified component \"" + _Ensure2.default.ensureTobeNSIdentity(component).fqn + "\" was not registered yet.\n      Did you register your component on valid timing?");
	            }
	            var instance = declaration.generateInstance();
	            attributes = attributes || {};
	            for (var key in attributes) {
	                instance.setAttribute(key, attributes[key]);
	            }
	            this._addComponentDirectly(instance, isDefaultComponent);
	            return instance;
	        }
	        /**
	         * Internal use!
	         * Should not operate by users or plugin developpers
	         * @param {Component} component          [description]
	         * @param {boolean}   isDefaultComponent [description]
	         */
	
	    }, {
	        key: "_addComponentDirectly",
	        value: function _addComponentDirectly(component, isDefaultComponent) {
	            var _this3 = this;
	
	            if (component.node || component.disposed) {
	                throw new Error("component never change attached node");
	            }
	            this._messageCache = {}; //TODO:optimize.
	            component.isDefaultComponent = !!isDefaultComponent;
	            component.node = this;
	            var referenceElement = this.componentsElement[_NodeUtility2.default.getNodeListIndexByElementIndex(this.componentsElement, this._components.length)];
	            this.componentsElement.insertBefore(component.element, referenceElement);
	            var propNames = [];
	            var o = component;
	            while (o) {
	                propNames = propNames.concat(Object.getOwnPropertyNames(o));
	                o = Object.getPrototypeOf(o);
	            }
	            propNames.filter(function (name) {
	                return name.startsWith("$") && typeof component[name] === "function";
	            }).forEach(function (method) {
	                component["$" + method] = component[method].bind(component);
	            });
	            this._components.push(component);
	            if (isDefaultComponent) {
	                // attributes should be exposed on node
	                component.attributes.forEach(function (p) {
	                    return _this3.addAttribute(p);
	                });
	                if (this._defaultValueResolved) {
	                    component.attributes.forEach(function (p) {
	                        return p.resolveDefaultValue(_NodeUtility2.default.getAttributes(_this3.element));
	                    });
	                }
	            }
	            if (this._mounted) {
	                component.resolveDefaultAttributes(null); // here must be optional component.should not use node element attributes.
	                this._sendMessageForcedTo(component, "awake");
	                this._sendMessageForcedTo(component, "mount");
	            }
	        }
	    }, {
	        key: "removeComponent",
	        value: function removeComponent(component) {
	            if (_Utility2.default.remove(this._components, component)) {
	                this._messageCache = {}; //TODO:optimize.
	                component.node = null;
	                component.disposed = true;
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "getComponents",
	        value: function getComponents(filter) {
	            var _this4 = this;
	
	            if (!filter) {
	                return this._components;
	            } else {
	                var _ret = function () {
	                    var ctor = _Ensure2.default.ensureTobeComponentConstructor(filter);
	                    return {
	                        v: _this4._components.filter(function (c) {
	                            return c instanceof ctor;
	                        })
	                    };
	                }();
	
	                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	            }
	        }
	        /**
	         * search component by name from this node.
	         * @param  {string | NSIdentity}  name [description]
	         * @return {Component}   component found first.
	         */
	
	    }, {
	        key: "getComponent",
	        value: function getComponent(name) {
	            // 事情により<T extends Component>とはできない。
	            // これはref/Node/Componentによって参照されるのが外部ライブラリにおけるコンポーネントであるが、
	            // src/Node/Componentがこのプロジェクトにおけるコンポーネントのため、別のコンポーネントとみなされ、型の制約をみたさなくなるからである。
	            if (!name) {
	                throw new Error("name must be not null or undefined");
	            } else if (typeof name === "function") {
	                return this._components.find(function (c) {
	                    return c instanceof name;
	                }) || null;
	            } else {
	                var ctor = _Ensure2.default.ensureTobeComponentConstructor(name);
	                if (!ctor) {
	                    throw new Error("component " + name + " is not exist");
	                }
	                return this.getComponent(ctor);
	            }
	        }
	    }, {
	        key: "getComponentsInChildren",
	        value: function getComponentsInChildren(name) {
	            if (typeof name === "function") {
	                return this.callRecursively(function (node) {
	                    return node.getComponent(name);
	                });
	            } else {
	                return this.callRecursively(function (node) {
	                    return node.getComponent(name);
	                });
	            }
	        }
	    }, {
	        key: "getComponentInAncesotor",
	        value: function getComponentInAncesotor(name) {
	            if (this.parent) {
	                return this.parent._getComponentInAncesotor(name);
	            }
	            return null;
	        }
	    }, {
	        key: "_getComponentInAncesotor",
	        value: function _getComponentInAncesotor(name) {
	            var ret = this.getComponent(name);
	            if (ret) {
	                return ret;
	            }
	            if (this.parent) {
	                return this.parent._getComponentInAncesotor(name);
	            }
	            return null;
	        }
	        /**
	         * resolve default attribute value for all component.
	         * すべてのコンポーネントの属性をエレメントかデフォルト値で初期化
	         */
	
	    }, {
	        key: "resolveAttributesValue",
	        value: function resolveAttributesValue() {
	            this._defaultValueResolved = true;
	            var attrs = _NodeUtility2.default.getAttributes(this.element);
	            for (var key in attrs) {
	                if (this.isFreezeAttribute(key)) {
	                    throw new Error("attribute " + key + " can not change from GOML. Attribute is frozen. ");
	                }
	            }
	            this._components.forEach(function (component) {
	                component.resolveDefaultAttributes(attrs);
	            });
	        }
	    }, {
	        key: "isFreezeAttribute",
	        value: function isFreezeAttribute(attributeName) {
	            return !!this.nodeDeclaration.freezeAttributes.find(function (name) {
	                return attributeName === name;
	            });
	        }
	    }, {
	        key: "notifyActivenessUpdate",
	        value: function notifyActivenessUpdate(activeness) {
	            if (this.isActive !== activeness) {
	                this._isActive = activeness;
	                this.children.forEach(function (child) {
	                    child.notifyActivenessUpdate(activeness && child.enabled);
	                });
	            }
	        }
	    }, {
	        key: "watch",
	        value: function watch(attrName, watcher) {
	            var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	            this._attributeManager.watch(attrName, watcher, immediate);
	        }
	        /**
	         * コンポーネントにメッセージを送る。送信したらバッファからは削除される.
	         * @param  {Component} targetComponent 対象コンポーネント
	         * @param  {string}    message         メッセージ
	         * @param  {boolean}   forced          trueでコンポーネントのenableを無視して送信
	         * @param  {boolean}   toBuffer        trueで送信失敗したらバッファに追加
	         * @param  {any}       args            [description]
	         * @return {boolean}                   送信したか
	         */
	
	    }, {
	        key: "_sendMessageToComponent",
	        value: function _sendMessageToComponent(targetComponent, message, args) {
	            if (!targetComponent.enabled) {
	                return false;
	            }
	            var method = targetComponent[message];
	            if (typeof method === "function") {
	                method(args);
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "_sendMessageForced",
	        value: function _sendMessageForced(message) {
	            for (var i = 0; i < this._components.length; i++) {
	                this._sendMessageForcedTo(this._components[i], message);
	            }
	        }
	        /**
	         * for $awake
	         * @param {Component} target  [description]
	         * @param {string}    message [description]
	         */
	
	    }, {
	        key: "_sendMessageForcedTo",
	        value: function _sendMessageForcedTo(target, message) {
	            message = _Ensure2.default.ensureTobeMessage(message);
	            var method = target[message];
	            if (typeof method === "function") {
	                method();
	            }
	        }
	    }, {
	        key: "_callRecursively",
	        value: function _callRecursively(func, nextGenerator) {
	            var val = func(this);
	            var nexts = nextGenerator(this);
	            var nextVals = nexts.map(function (c) {
	                return c.callRecursively(func);
	            });
	            var list = _Utility2.default.flat(nextVals);
	            list.unshift(val);
	            return list;
	        }
	    }, {
	        key: "name",
	
	        /**
	         * Tag name.
	         */
	        get: function get() {
	            return this.nodeDeclaration.name;
	        }
	    }, {
	        key: "attributes",
	        get: function get() {
	            return this._attributeManager.attributes;
	        }
	        /**
	         * GomlInterface that this node is bound to.
	         * throw exception if this node is not mounted.
	         * @return {IGomlInterface} [description]
	         */
	
	    }, {
	        key: "tree",
	        get: function get() {
	            if (!this.mounted) {
	                throw new Error("this node is not mounted");
	            }
	            return this._tree;
	        }
	        /**
	         * indicate this node is already deleted.
	         * if this node is deleted once, this node will not be mounted.
	         * @return {boolean} [description]
	         */
	
	    }, {
	        key: "deleted",
	        get: function get() {
	            return this._deleted;
	        }
	        /**
	         * indicate this node is enabled in tree.
	         * This value must be false when ancestor of this node is disabled.
	         * @return {boolean} [description]
	         */
	
	    }, {
	        key: "isActive",
	        get: function get() {
	            return this._isActive;
	        }
	        /**
	         * indicate this node is enabled.
	         * this node never recieve any message if this node is not enabled.
	         * @return {boolean} [description]
	         */
	
	    }, {
	        key: "enabled",
	        get: function get() {
	            return this._enabled;
	        },
	        set: function set(value) {
	            this.setAttribute("enabled", value);
	        }
	        /**
	         * the shared object by all nodes in tree.
	         * @return {NSDictionary<any>} [description]
	         */
	
	    }, {
	        key: "companion",
	        get: function get() {
	            return this._companion;
	        }
	        /**
	         * parent node of this node.
	         * if this node is root, return null.
	         * @return {GomlNode} [description]
	         */
	
	    }, {
	        key: "parent",
	        get: function get() {
	            return this._parent;
	        }
	        /**
	         * return true if this node has some child nodes.
	         * @return {boolean} [description]
	         */
	
	    }, {
	        key: "hasChildren",
	        get: function get() {
	            return this.children.length > 0;
	        }
	        /**
	         * indicate mounted status.
	         * this property to be true when treeroot registered to GrimoireInterface.
	         * to be false when this node detachd from the tree.
	         * @return {boolean} Whether this node is mounted or not.
	         */
	
	    }, {
	        key: "mounted",
	        get: function get() {
	            return this._mounted;
	        }
	    }], [{
	        key: "fromElement",
	        value: function fromElement(elem) {
	            return _GrimoireInterface2.default.nodeDictionary[elem.getAttribute(_Constants2.default.x_gr_id)];
	        }
	    }]);
	
	    return GomlNode;
	}(_EEObject3.default);
	
	exports.default = GomlNode;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _events = __webpack_require__(12);
	
	var _IDObject2 = __webpack_require__(13);
	
	var _IDObject3 = _interopRequireDefault(_IDObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * EventEmitterをmixinしたIDObject
	 */
	var EEObject = function (_IDObject) {
	    _inherits(EEObject, _IDObject);
	
	    function EEObject() {
	        _classCallCheck(this, EEObject);
	
	        return _possibleConstructorReturn(this, (EEObject.__proto__ || Object.getPrototypeOf(EEObject)).call(this));
	    }
	
	    return EEObject;
	}(_IDObject3.default);
	
	function applyMixins(derivedCtor, baseCtors) {
	    baseCtors.forEach(function (baseCtor) {
	        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
	            derivedCtor.prototype[name] = baseCtor.prototype[name];
	        });
	    });
	}
	applyMixins(EEObject, [_events.EventEmitter]);
	exports.default = EEObject;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Most based object for any Grimoire.js related classes.
	 * @type {[type]}
	 */
	var IDObject = function () {
	    _createClass(IDObject, null, [{
	        key: "getUniqueRandom",
	
	        /**
	         * Generate random string
	         * @param  {number} length length of random string
	         * @return {string}        generated string
	         */
	        value: function getUniqueRandom(length) {
	            return Math.random().toString(36).slice(-length);
	        }
	    }]);
	
	    function IDObject() {
	        _classCallCheck(this, IDObject);
	
	        this.id = IDObject.getUniqueRandom(10);
	    }
	    /**
	     * Obtain stringfied object.
	     * If this method was not overridden, this method return class name.
	     * @return {string} stringfied object
	     */
	
	
	    _createClass(IDObject, [{
	        key: "toString",
	        value: function toString() {
	            return this.getTypeName();
	        }
	        /**
	         * Obtain class name
	         * @return {string} Class name of the instance.
	         */
	
	    }, {
	        key: "getTypeName",
	        value: function getTypeName() {
	            var funcNameRegex = /function (.{1,})\(/;
	            var result = funcNameRegex.exec(this.constructor.toString());
	            return result && result.length > 1 ? result[1] : "";
	        }
	    }]);
	
	    return IDObject;
	}();
	
	exports.default = IDObject;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NodeUtility = function () {
	    function NodeUtility() {
	        _classCallCheck(this, NodeUtility);
	    }
	
	    _createClass(NodeUtility, null, [{
	        key: "getNodeListIndexByElementIndex",
	
	        /**
	         * Get index of NodeList converted from index in Element
	         * @param  {HTMLElement} targetElement Parent element of search target elements
	         * @param  {number}      elementIndex  Index in element
	         * @return {number}                    Index in NodeList
	         */
	        value: function getNodeListIndexByElementIndex(targetElement, elementIndex) {
	            var nodeArray = Array.prototype.slice.call(targetElement.childNodes);
	            var elementArray = nodeArray.filter(function (v) {
	                return v.nodeType === 1;
	            });
	            elementIndex = elementIndex < 0 ? elementArray.length + elementIndex : elementIndex;
	            var index = nodeArray.indexOf(elementArray[elementIndex]);
	            return index === -1 ? null : index;
	        }
	    }, {
	        key: "getAttributes",
	        value: function getAttributes(element) {
	            var attributes = {};
	            var domAttr = element.attributes;
	            for (var i = 0; i < domAttr.length; i++) {
	                var attrNode = domAttr.item(i);
	                var name = attrNode.name;
	                attributes[name] = attrNode.value;
	            }
	            return attributes;
	        }
	    }]);
	
	    return NodeUtility;
	}();
	
	exports.default = NodeUtility;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _NSIdentity = __webpack_require__(16);
	
	var _NSIdentity2 = _interopRequireDefault(_NSIdentity);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NSDictionary = function () {
	    function NSDictionary() {
	        _classCallCheck(this, NSDictionary);
	
	        this._nameObjectMap = {};
	        this._fqnObjectMap = {};
	    }
	
	    _createClass(NSDictionary, [{
	        key: "set",
	        value: function set(key, value) {
	            if (!this._fqnObjectMap[key.fqn]) {
	                this._fqnObjectMap[key.fqn] = value;
	                var c = this._nameObjectMap[key.name];
	                if (c !== void 0) {
	                    c.push({ id: key, value: value });
	                } else {
	                    this._nameObjectMap[key.name] = [{ id: key, value: value }];
	                }
	            } else {
	                this._fqnObjectMap[key.fqn] = value;
	                var _c = this._nameObjectMap[key.name];
	                for (var i = 0; i < _c.length; i++) {
	                    if (_c[i].id.fqn === key.fqn) {
	                        _c[i] = { id: key, value: value };
	                        break;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "delete",
	        value: function _delete(key) {
	            if (this._fqnObjectMap[key.fqn] !== void 0) {
	                delete this._fqnObjectMap[key.fqn];
	                var theMap = this._nameObjectMap[key.name];
	                for (var i = 0; i < theMap.length; i++) {
	                    if (theMap[i].id.fqn === key.fqn) {
	                        theMap.splice(i, 1);
	                        break;
	                    }
	                }
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "get",
	        value: function get(arg1, name) {
	            if (!arg1) {
	                throw new Error("NSDictionary.get() can not recieve args null or undefined.");
	            }
	            if (typeof arg1 === "string") {
	                if (name) {
	                    return this.fromFQN(name + "|" + arg1.toUpperCase());
	                } else {
	                    var namedMap = this._nameObjectMap[arg1];
	                    if (!namedMap) {
	                        return null;
	                    }
	                    if (namedMap.length === 1) {
	                        return namedMap[0].value;
	                    } else {
	                        throw new Error("Specified tag name " + arg1 + " is ambigious to identify.");
	                    }
	                }
	            } else {
	                if (arg1 instanceof _NSIdentity2.default) {
	                    return this.fromFQN(arg1.fqn);
	                } else {
	                    if (arg1.prefix) {
	                        return this.get(_NSIdentity2.default.from(arg1.namespaceURI, arg1.localName));
	                    } else {
	                        if (arg1.namespaceURI && this._fqnObjectMap[arg1.localName + "|" + arg1.namespaceURI] !== void 0) {
	                            return this.get(_NSIdentity2.default.from(arg1.namespaceURI, arg1.localName));
	                        }
	                        if (arg1 && arg1.ownerElement && arg1.ownerElement.namespaceURI && this._fqnObjectMap[arg1.localName + "|" + arg1.ownerElement.namespaceURI] !== void 0) {
	                            return this.get(_NSIdentity2.default.from(arg1.ownerElement.namespaceURI, arg1.localName));
	                        }
	                        return this.get(arg1.localName);
	                    }
	                }
	            }
	        }
	    }, {
	        key: "fromFQN",
	        value: function fromFQN(fqn) {
	            return this._fqnObjectMap[fqn];
	        }
	    }, {
	        key: "isAmbigious",
	        value: function isAmbigious(name) {
	            return this._nameObjectMap[name].length > 1;
	        }
	    }, {
	        key: "has",
	        value: function has(name) {
	            return this._nameObjectMap[name] !== void 0;
	        }
	    }, {
	        key: "pushDictionary",
	        value: function pushDictionary(dict) {
	            var _this = this;
	
	            dict.forEach(function (value, keyFQN) {
	                var id = _NSIdentity2.default.fromFQN(keyFQN);
	                _this.set(id, value);
	            });
	            return this;
	        }
	    }, {
	        key: "toArray",
	        value: function toArray() {
	            var _this2 = this;
	
	            var ret = [];
	            Object.keys(this._fqnObjectMap).forEach(function (key) {
	                ret.push(_this2._fqnObjectMap[key]);
	            });
	            return ret;
	        }
	    }, {
	        key: "clone",
	        value: function clone() {
	            var dict = new NSDictionary();
	            return dict.pushDictionary(this);
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(callback) {
	            var _this3 = this;
	
	            Object.keys(this._fqnObjectMap).forEach(function (key) {
	                callback(_this3._fqnObjectMap[key], key);
	            });
	            return this;
	        }
	    }, {
	        key: "map",
	        value: function map(callback) {
	            var ret = new NSDictionary();
	            this.forEach(function (val, fqn) {
	                var id = _NSIdentity2.default.fromFQN(fqn);
	                ret.set(id, callback(val, fqn));
	            });
	            return ret;
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this._nameObjectMap = {};
	            this._fqnObjectMap = {};
	        }
	    }]);
	
	    return NSDictionary;
	}();
	
	exports.default = NSDictionary;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Constants = __webpack_require__(6);
	
	var _Constants2 = _interopRequireDefault(_Constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The class to identity with XML namespace feature.
	 */
	var NSIdentity = function () {
	    function NSIdentity(ns, name) {
	        _classCallCheck(this, NSIdentity);
	
	        this._ns = ns.toUpperCase();
	        this._name = name;
	        // Ensure all of the characters are uppercase
	        this._name = NSIdentity._ensureValidIdentity(this.name, true);
	        this._ns = NSIdentity._ensureValidIdentity(this.ns);
	        this._fqn = this.name + "|" + this.ns;
	        NSIdentity._instances[this._fqn] = this;
	        if (!NSIdentity._map[this.name]) {
	            NSIdentity._map[this.name] = [this];
	        } else {
	            NSIdentity._map[this.name].push(this);
	        }
	    }
	    /**
	     * Namespace of this identity
	     * @type {string}
	     */
	
	
	    _createClass(NSIdentity, [{
	        key: "ns",
	        get: function get() {
	            return this._ns;
	        }
	        /**
	         * Short name for this identity
	         * @type {string}
	         */
	
	    }, {
	        key: "name",
	        get: function get() {
	            return this._name;
	        }
	        /**
	         * Full qualified name of this identity
	         * @type {string}
	         */
	
	    }, {
	        key: "fqn",
	        get: function get() {
	            return this._fqn;
	        }
	        /**
	         * Generate an instance from Full qualified name.
	         * @param  {string}             fqn [description]
	         * @return {NSIdentity}     [description]
	         */
	
	    }], [{
	        key: "fromFQN",
	        value: function fromFQN(fqn) {
	            var inst = NSIdentity._instances[fqn];
	            if (inst) {
	                return inst;
	            }
	            var splitted = fqn.split("|");
	            if (splitted.length !== 2) {
	                throw new Error("Invalid fqn was given");
	            }
	            return new NSIdentity(splitted[1], splitted[0]);
	        }
	        /**
	         * デフォルト名前空間でID作成
	         * @param  {string}     name [description]
	         * @return {NSIdentity}      [description]
	         */
	
	    }, {
	        key: "createOnDefaultNS",
	        value: function createOnDefaultNS(name) {
	            return NSIdentity.from(_Constants2.default.defaultNamespace, name);
	        }
	    }, {
	        key: "from",
	        value: function from(arg1, name) {
	            if (name) {
	                var fqn = name + "|" + arg1.toUpperCase();
	                var inst = NSIdentity._instances[fqn];
	                if (inst) {
	                    return inst;
	                }
	                return new NSIdentity(arg1, name);
	            } else {
	                var list = NSIdentity._map[arg1];
	                if (!list) {
	                    return new NSIdentity(_Constants2.default.defaultNamespace, arg1);
	                }
	                if (list.length == 1) {
	                    return list[0];
	                }
	                throw new Error("name " + arg1 + " is ambiguous in NSIdentity." + list + " exists.");
	            }
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            NSIdentity._instances = {};
	            NSIdentity._map = {};
	        }
	        /**
	         * Make sure given name is valid for using in identity.
	         * | is prohibited for using in name or namespace.
	         * . is prohibited for using in name.
	         * All lowercase alphabet will be transformed into uppercase.
	         * @param  {string} name        [A name to verify]
	         * @param  {[type]} noDot=false [Ensure not using dot or not]
	         * @return {string}             [Valid name]
	         */
	
	    }, {
	        key: "_ensureValidIdentity",
	        value: function _ensureValidIdentity(name) {
	            var noDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	            if (name == null) {
	                throw new Error("Specified name was null or undefined");
	            }
	            if (name.indexOf("|") > -1) {
	                throw new Error("Namespace and identity cannnot contain | ");
	            }
	            if (noDot && name.indexOf(".") > -1) {
	                throw new Error("identity cannnot contain .");
	            }
	            return name;
	        }
	    }]);
	
	    return NSIdentity;
	}();
	
	NSIdentity._instances = {};
	NSIdentity._map = {};
	exports.default = NSIdentity;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function BooleanConverter(val) {
	    if (typeof val === "boolean") {
	        return val;
	    } else if (typeof val === "string") {
	        switch (val) {
	            case "true":
	                return true;
	            case "false":
	                return false;
	            default:
	                return undefined;
	        }
	    }
	}
	exports.default = BooleanConverter;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Component2 = __webpack_require__(19);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GrimoireComponent = function (_Component) {
	    _inherits(GrimoireComponent, _Component);
	
	    function GrimoireComponent() {
	        _classCallCheck(this, GrimoireComponent);
	
	        return _possibleConstructorReturn(this, (GrimoireComponent.__proto__ || Object.getPrototypeOf(GrimoireComponent)).apply(this, arguments));
	    }
	
	    _createClass(GrimoireComponent, [{
	        key: "$awake",
	        value: function $awake() {
	            var _this2 = this;
	
	            this.node.resolveAttributesValue();
	            this.getAttributeRaw("id").watch(function (attr) {
	                _this2.node.element.id = attr ? attr : "";
	            }, true);
	            this.getAttributeRaw("class").watch(function (attr) {
	                _this2.node.element.className = Array.isArray(attr) ? attr.join(" ") : "";
	            }, true);
	            this.getAttributeRaw("enabled").watch(function (attr) {
	                _this2.node["_enabled"] = attr;
	                var p = _this2.node.parent;
	                _this2.node.notifyActivenessUpdate(p ? p.isActive && _this2.node.enabled : _this2.node.enabled);
	            });
	            this.node["_enabled"] = this.getAttribute("enabled");
	            this.node["_isActive"] = this.node.parent ? this.node.parent.isActive && this.enabled : this.enabled;
	        }
	    }]);
	
	    return GrimoireComponent;
	}(_Component3.default);
	
	GrimoireComponent.attributes = {
	    id: {
	        converter: "String",
	        default: null,
	        readonly: false
	    },
	    class: {
	        converter: "StringArray",
	        default: null,
	        readonly: false
	    },
	    enabled: {
	        converter: "Boolean",
	        default: true,
	        readonly: false
	    }
	};
	exports.default = GrimoireComponent;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Utility = __webpack_require__(4);
	
	var _Utility2 = _interopRequireDefault(_Utility);
	
	var _Constants = __webpack_require__(6);
	
	var _Constants2 = _interopRequireDefault(_Constants);
	
	var _NodeUtility = __webpack_require__(14);
	
	var _NodeUtility2 = _interopRequireDefault(_NodeUtility);
	
	var _Attribute = __webpack_require__(20);
	
	var _Attribute2 = _interopRequireDefault(_Attribute);
	
	var _IDObject2 = __webpack_require__(13);
	
	var _IDObject3 = _interopRequireDefault(_IDObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Base class for any components
	 */
	var Component = function (_IDObject) {
	    _inherits(Component, _IDObject);
	
	    function Component() {
	        _classCallCheck(this, Component);
	
	        /**
	         * Whether this component was created by nodeDeclaration
	         * @type {boolean}
	         */
	        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
	
	        _this.isDefaultComponent = false;
	        _this.disposed = false;
	        /**
	         * Flag that this component is activated or not.
	         * @type {boolean}
	         */
	        _this._enabled = true;
	        _this._handlers = [];
	        _this._additionalAttributesNames = [];
	        return _this;
	    }
	
	    _createClass(Component, [{
	        key: "setAttribute",
	
	        /**
	         * Set value of attribute
	         * @param {string} name  [description]
	         * @param {any}    value [description]
	         */
	        value: function setAttribute(name, value) {
	            var attr = this.attributes.get(name); // TODO:check readonly?
	            if (attr) {
	                attr.Value = value;
	            }
	        }
	    }, {
	        key: "getAttribute",
	        value: function getAttribute(name) {
	            var attr = this.getAttributeRaw(name);
	            if (attr) {
	                return attr.Value;
	            } else {
	                throw new Error("attribute " + name + " is not defined in " + this.name.fqn);
	            }
	        }
	    }, {
	        key: "getAttributeRaw",
	        value: function getAttributeRaw(name) {
	            return this.attributes.get(name);
	        }
	    }, {
	        key: "addEnabledObserver",
	        value: function addEnabledObserver(observer) {
	            this._handlers.push(observer);
	        }
	    }, {
	        key: "removeEnabledObserver",
	        value: function removeEnabledObserver(observer) {
	            return _Utility2.default.remove(this._handlers, observer);
	        }
	    }, {
	        key: "resolveDefaultAttributes",
	        value: function resolveDefaultAttributes(nodeAttributes) {
	            var _this2 = this;
	
	            nodeAttributes = nodeAttributes || {};
	            if (this.isDefaultComponent) {
	                this.attributes.forEach(function (attr) {
	                    return attr.resolveDefaultValue(nodeAttributes);
	                });
	            } else {
	                (function () {
	                    var attrs = _NodeUtility2.default.getAttributes(_this2.element);
	                    for (var key in attrs) {
	                        if (key === _Constants2.default.x_gr_id) continue;
	                    }
	                    _this2.attributes.forEach(function (attr) {
	                        return attr.resolveDefaultValue(attrs);
	                    });
	                })();
	            }
	        }
	    }, {
	        key: "dispose",
	        value: function dispose() {
	            this.node.removeComponent(this);
	        }
	        /**
	         * Add attribute
	         * @param {string}                name      [description]
	         * @param {IAttributeDeclaration} attribute [description]
	         */
	
	    }, {
	        key: "__addAtribute",
	        value: function __addAtribute(name, attribute) {
	            if (!attribute) {
	                throw new Error("can not add attribute null or undefined.");
	            }
	            var attr = _Attribute2.default.generateAttributeForComponent(name, attribute, this);
	            if (this.isDefaultComponent) {
	                this.node.addAttribute(attr);
	            }
	            if (this.isDefaultComponent) {
	                attr.resolveDefaultValue(_NodeUtility2.default.getAttributes(this.node.element));
	            } else {
	                var attrs = _NodeUtility2.default.getAttributes(this.element);
	                attr.resolveDefaultValue(attrs);
	            }
	            this._additionalAttributesNames.push(attr.name);
	        }
	    }, {
	        key: "__removeAttributes",
	        value: function __removeAttributes(name) {
	            var _this3 = this;
	
	            if (name) {
	                var index = this._additionalAttributesNames.findIndex(function (id) {
	                    return id.name === name;
	                });
	                if (index < 0) {
	                    throw new Error("can not remove attributes :" + name);
	                }
	                var attrId = this._additionalAttributesNames[index];
	                if (this.isDefaultComponent) {
	                    this.node.removeAttribute(this.attributes.get(attrId));
	                }
	                this.attributes.delete(attrId);
	                this._additionalAttributesNames.splice(index, 1);
	            } else {
	                this._additionalAttributesNames.forEach(function (id) {
	                    _this3.__removeAttributes(id.name);
	                });
	            }
	        }
	    }, {
	        key: "__bindAttributes",
	        value: function __bindAttributes() {
	            this.attributes.forEach(function (attr) {
	                var name = attr.name.name;
	                attr.boundTo("_" + name);
	            });
	        }
	    }, {
	        key: "enabled",
	        get: function get() {
	            return this._enabled;
	        },
	        set: function set(val) {
	            var _this4 = this;
	
	            if (this._enabled === val) {
	                return;
	            }
	            this._enabled = val;
	            this._handlers.forEach(function (handler) {
	                handler(_this4);
	            });
	        }
	        /**
	         * The dictionary which is shared in entire tree.
	         * @return {NSDictionary<any>} [description]
	         */
	
	    }, {
	        key: "companion",
	        get: function get() {
	            return this.node ? this.node.companion : null;
	        }
	        /**
	         * Tree interface for the tree this node is attached.
	         * @return {IGomlInterface} [description]
	         */
	
	    }, {
	        key: "tree",
	        get: function get() {
	            return this.node ? this.node.tree : null;
	        }
	    }]);
	
	    return Component;
	}(_IDObject3.default);
	
	exports.default = Component;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Ensure = __webpack_require__(2);
	
	var _Ensure2 = _interopRequireDefault(_Ensure);
	
	var _NSIdentity = __webpack_require__(16);
	
	var _NSIdentity2 = _interopRequireDefault(_NSIdentity);
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Manage a attribute attached to components.
	 */
	var Attribute = function () {
	    function Attribute() {
	        _classCallCheck(this, Attribute);
	
	        /**
	         * List of functions that is listening changing values.
	         */
	        this._observers = [];
	    }
	
	    _createClass(Attribute, [{
	        key: "watch",
	
	        /**
	         * Add event handler to observe changing this attribute.
	         * @param  {(attr: Attribute) => void} handler handler the handler you want to add.
	         * @param {boolean = false} callFirst whether that handler should be called first time.
	         */
	        value: function watch(watcher) {
	            var immedateCalls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	            this._observers.push(watcher);
	            if (immedateCalls) {
	                watcher(this.Value, undefined, this);
	            }
	        }
	        /**
	         * Remove event handler you added.
	         * @param  {Attribute} handler [description]
	         * @return {[type]}            [description]
	         */
	
	    }, {
	        key: "removeObserver",
	        value: function removeObserver(target) {
	            var index = this._observers.findIndex(function (f) {
	                return f === target;
	            });
	            if (index < 0) {
	                return;
	            }
	            this._observers.splice(index, 1);
	        }
	        /**
	         * Bind converted value to specified field.
	         * When target object was not specified, field of owner component would be assigned.
	         * @param {string} variableName [description]
	         * @param {any} targetObject [description]
	         */
	
	    }, {
	        key: "boundTo",
	        value: function boundTo(variableName) {
	            var targetObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.component;
	
	            this.watch(function (v) {
	                targetObject[variableName] = v;
	            }, true);
	        }
	        /**
	         * Apply default value to attribute from DOM values.
	         * @param {string }} domValues [description]
	         */
	
	    }, {
	        key: "resolveDefaultValue",
	        value: function resolveDefaultValue(domValues) {
	            if (this._value !== void 0) {
	                return;
	            }
	            var tagAttrValue = domValues[this.name.name];
	            if (tagAttrValue !== void 0) {
	                this.Value = tagAttrValue; // Dom指定値で解決
	                return;
	            }
	            var nodeDefaultValue = this.component.node.nodeDeclaration.defaultAttributesActual.get(this.name);
	            if (nodeDefaultValue !== void 0) {
	                this.Value = nodeDefaultValue; // Node指定値で解決
	                return;
	            }
	            this.Value = this.declaration.default;
	        }
	    }, {
	        key: "_valuate",
	        value: function _valuate(raw) {
	            var v = this.converter.convert(raw);
	            if (v === void 0) {
	                throw new Error("attribute " + this.name.name + " value can not be convert from " + this._value);
	            }
	            this._lastValuete = v;
	            return v;
	        }
	    }, {
	        key: "_notifyChange",
	        value: function _notifyChange(newValue) {
	            var _this = this;
	
	            var lastvalue = this._lastValuete;
	            var c = this.converter;
	            this._observers.forEach(function (handler) {
	                handler(c.convert(newValue), lastvalue, _this);
	            });
	        }
	    }, {
	        key: "tree",
	
	        /**
	         * Goml tree interface which contains the component this attribute bound to.
	         * @return {IGomlInterface} [description]
	         */
	        get: function get() {
	            return this.component.tree;
	        }
	        /**
	         * Companion map which is bounding to the component this attribute bound to.
	         * @return {NSDictionary<any>} [description]
	         */
	
	    }, {
	        key: "companion",
	        get: function get() {
	            return this.component.companion;
	        }
	        /**
	         * Get a value with specified type.
	         * @return {any} value with specified type.
	         */
	
	    }, {
	        key: "Value",
	        get: function get() {
	            if (this._value === void 0) {
	                throw new Error("attribute " + this.name.name + " value is undefined in " + this.component.node.name.name);
	            }
	            return this._valuate(this._value);
	        }
	        /**
	         * Set a value with any type.
	         * @param {any} val Value with string or specified type.
	         */
	        ,
	        set: function set(val) {
	            if (this._value === val) {
	                return;
	            }
	            this._value = val;
	            this._notifyChange(val);
	        }
	        /**
	         * Construct a new attribute with name of key and any value with specified type. If constant flag is true, This attribute will be immutable.
	         * If converter is not served, string converter will be set as default.
	         * @param {string}        key       Key of this attribute.
	         * @param {any}           value     Value of this attribute.
	         * @param {ConverterBase} converter Converter of this attribute.
	         * @param {boolean}       constant  Whether this attribute is immutable or not. False as default.
	         */
	
	    }], [{
	        key: "convert",
	        value: function convert(converter, val) {
	            var cname = _Ensure2.default.ensureTobeNSIdentity(converter);
	            var conv = _GrimoireInterface2.default.converters.get(cname);
	            if (!conv) {
	                throw new Error("converter " + cname.name + " is not defined.");
	            }
	            return conv.convert(val);
	        }
	    }, {
	        key: "generateAttributeForComponent",
	        value: function generateAttributeForComponent(name, declaration, component) {
	            var attr = new Attribute();
	            attr.name = _NSIdentity2.default.from(component.name.ns, name);
	            attr.component = component;
	            attr.declaration = declaration;
	            var converterName = _Ensure2.default.ensureTobeNSIdentity(declaration.converter);
	            attr.converter = _GrimoireInterface2.default.converters.get(converterName);
	            if (attr.converter === void 0) {
	                // When the specified converter was not found
	                throw new Error("Specified converter " + converterName.name + " was not found from registered converters.\n Component: " + attr.component.name.fqn + "\n Attribute: " + attr.name.name);
	            }
	            attr.converter = {
	                convert: attr.converter.convert.bind(attr),
	                name: attr.converter.name
	            };
	            attr.component.attributes.set(attr.name, attr);
	            return attr;
	        }
	    }]);
	
	    return Attribute;
	}();
	
	exports.default = Attribute;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function StringArrayConverter(val) {
	    if (Array.isArray(val) || !val) {
	        return val;
	    }
	    if (typeof val === "string") {
	        return val.split(" ");
	    }
	}
	exports.default = StringArrayConverter;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function StringConverter(val) {
	    if (typeof val === "string") {
	        return val;
	    } else if (!val) {
	        return val;
	    } else if (typeof val.toString === "function") {
	        return val.toString();
	    }
	}
	exports.default = StringConverter;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Constants = __webpack_require__(6);
	
	var _Constants2 = _interopRequireDefault(_Constants);
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _Attribute = __webpack_require__(20);
	
	var _Attribute2 = _interopRequireDefault(_Attribute);
	
	var _NSDictionary = __webpack_require__(15);
	
	var _NSDictionary2 = _interopRequireDefault(_NSDictionary);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ComponentDeclaration = function () {
	    function ComponentDeclaration(name, attributes, ctor) {
	        _classCallCheck(this, ComponentDeclaration);
	
	        this.name = name;
	        this.attributes = attributes;
	        this.ctor = ctor;
	    }
	
	    _createClass(ComponentDeclaration, [{
	        key: "generateInstance",
	        value: function generateInstance(componentElement) {
	            componentElement = componentElement ? componentElement : document.createElementNS(this.name.ns, this.name.name);
	            var component = new this.ctor();
	            componentElement.setAttribute(_Constants2.default.x_gr_id, component.id);
	            _GrimoireInterface2.default.componentDictionary[component.id] = component;
	            component.name = this.name;
	            component.element = componentElement;
	            component.attributes = new _NSDictionary2.default();
	            for (var key in this.attributes) {
	                _Attribute2.default.generateAttributeForComponent(key, this.attributes[key], component);
	            }
	            return component;
	        }
	    }]);
	
	    return ComponentDeclaration;
	}();
	
	exports.default = ComponentDeclaration;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NSSet = function () {
	    function NSSet() {
	        _classCallCheck(this, NSSet);
	
	        this._contentArray = [];
	    }
	
	    _createClass(NSSet, [{
	        key: "push",
	        value: function push(item) {
	            var index = this._contentArray.findIndex(function (id) {
	                return id.fqn === item.fqn;
	            });
	            if (index === -1) {
	                this._contentArray.push(item);
	            }
	            return this;
	        }
	    }, {
	        key: "pushArray",
	        value: function pushArray(item) {
	            var _this = this;
	
	            item.forEach(function (v) {
	                _this.push(v);
	            });
	            return this;
	        }
	    }, {
	        key: "values",
	        value: function values() {
	            return this._contentArray.values();
	        }
	    }, {
	        key: "toArray",
	        value: function toArray() {
	            var ret = [];
	            for (var key in this._contentArray) {
	                ret.push(this._contentArray[key]);
	            }
	            return ret;
	        }
	    }, {
	        key: "clone",
	        value: function clone() {
	            var newSet = new NSSet();
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._contentArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var i = _step.value;
	
	                    newSet.push(i);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return newSet;
	        }
	    }, {
	        key: "merge",
	        value: function merge(other) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = other._contentArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var elem = _step2.value;
	
	                    this.push(elem);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return this;
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(func) {
	            this._contentArray.forEach(func);
	        }
	    }], [{
	        key: "fromArray",
	        value: function fromArray(array) {
	            var nSet = new NSSet();
	            nSet.pushArray(array);
	            return nSet;
	        }
	    }]);
	
	    return NSSet;
	}();
	
	exports.default = NSSet;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Ensure = __webpack_require__(2);
	
	var _Ensure2 = _interopRequireDefault(_Ensure);
	
	var _NSIdentity = __webpack_require__(16);
	
	var _NSIdentity2 = _interopRequireDefault(_NSIdentity);
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NodeDeclaration = function () {
	    function NodeDeclaration(name, defaultComponents, defaultAttributes, superNode, freezeAttributes) {
	        _classCallCheck(this, NodeDeclaration);
	
	        this.name = name;
	        this.defaultComponents = defaultComponents;
	        this.defaultAttributes = defaultAttributes;
	        this.superNode = superNode;
	        this.freezeAttributes = freezeAttributes;
	        this.freezeAttributes = this.freezeAttributes ? this.freezeAttributes : [];
	        if (!this.superNode && this.name.name !== "grimoire-node-base") {
	            this.superNode = _NSIdentity2.default.createOnDefaultNS("grimoire-node-base");
	        }
	    }
	
	    _createClass(NodeDeclaration, [{
	        key: "addDefaultComponent",
	        value: function addDefaultComponent(componentName) {
	            var componentId = _Ensure2.default.ensureTobeNSIdentity(componentName);
	            this.defaultComponents.push(componentId);
	            if (this._defaultComponentsActual) {
	                this._defaultComponentsActual.push(componentId);
	            }
	        }
	    }, {
	        key: "_resolveInherites",
	        value: function _resolveInherites() {
	            if (!this.superNode) {
	                this._defaultComponentsActual = this.defaultComponents;
	                this._defaultAttributesActual = this.defaultAttributes;
	                return;
	            }
	            var superNode = _GrimoireInterface2.default.nodeDeclarations.get(this.superNode);
	            var inheritedDefaultComponents = superNode.defaultComponentsActual;
	            var inheritedDefaultAttribute = superNode.defaultAttributesActual;
	            this._defaultComponentsActual = inheritedDefaultComponents.clone().merge(this.defaultComponents);
	            this._defaultAttributesActual = inheritedDefaultAttribute.clone().pushDictionary(this.defaultAttributes);
	        }
	    }, {
	        key: "defaultComponentsActual",
	        get: function get() {
	            if (!this._defaultComponentsActual) {
	                this._resolveInherites();
	            }
	            return this._defaultComponentsActual;
	        }
	    }, {
	        key: "defaultAttributesActual",
	        get: function get() {
	            if (!this._defaultAttributesActual) {
	                this._resolveInherites();
	            }
	            return this._defaultAttributesActual;
	        }
	    }]);
	
	    return NodeDeclaration;
	}();
	
	exports.default = NodeDeclaration;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var XMLHttpRequestAsync = function () {
	    function XMLHttpRequestAsync() {
	        _classCallCheck(this, XMLHttpRequestAsync);
	    }
	
	    _createClass(XMLHttpRequestAsync, null, [{
	        key: "send",
	        value: function send(xhr, data) {
	            return new Promise(function (resolve, reject) {
	                xhr.onload = function (e) {
	                    resolve(e);
	                };
	                xhr.onerror = function (e) {
	                    reject(e);
	                };
	                xhr.send(data);
	            });
	        }
	    }]);
	
	    return XMLHttpRequestAsync;
	}();
	
	exports.default = XMLHttpRequestAsync;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _GomlParser = __webpack_require__(9);
	
	var _GomlParser2 = _interopRequireDefault(_GomlParser);
	
	var _XMLReader = __webpack_require__(8);
	
	var _XMLReader2 = _interopRequireDefault(_XMLReader);
	
	var _XMLHttpRequestAsync = __webpack_require__(26);
	
	var _XMLHttpRequestAsync2 = _interopRequireDefault(_XMLHttpRequestAsync);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	
	/**
	 * Provides the features to fetch Goml source.
	 */
	var GomlLoader = function () {
	    function GomlLoader() {
	        _classCallCheck(this, GomlLoader);
	    }
	
	    _createClass(GomlLoader, null, [{
	        key: "loadFromScriptTag",
	
	        /**
	         * Obtain the Goml source from specified tag.
	         * @param  {HTMLScriptElement} scriptTag [the script tag to load]
	         * @return {Promise<void>}               [the promise to wait for loading]
	         */
	        value: function loadFromScriptTag(scriptTag) {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var srcAttr, source, req, doc, rootNode;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                srcAttr = scriptTag.getAttribute("src");
	                                source = void 0;
	
	                                if (!srcAttr) {
	                                    _context.next = 10;
	                                    break;
	                                }
	
	                                // ignore text element
	                                req = new XMLHttpRequest();
	
	                                req.open("GET", srcAttr);
	                                _context.next = 7;
	                                return _XMLHttpRequestAsync2.default.send(req);
	
	                            case 7:
	                                source = req.responseText;
	                                _context.next = 11;
	                                break;
	
	                            case 10:
	                                source = scriptTag.text;
	
	                            case 11:
	                                doc = _XMLReader2.default.parseXML(source, "GOML");
	                                rootNode = _GomlParser2.default.parse(doc[0], null, scriptTag);
	
	                                _GrimoireInterface2.default.addRootNode(scriptTag, rootNode);
	
	                            case 14:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	        /**
	         * Load from the script tags which will be found with specified query.
	         * @param  {string}          query [the query to find script tag]
	         * @return {Promise<void[]>}       [the promise to wait for all goml loading]
	         */
	
	    }, {
	        key: "loadFromQuery",
	        value: function loadFromQuery(query) {
	            var tags = document.querySelectorAll(query);
	            var pArray = [];
	            for (var i = 0; i < tags.length; i++) {
	                pArray[i] = GomlLoader.loadFromScriptTag(tags.item(i));
	            }
	            if (pArray.length === 0 && _GrimoireInterface2.default.debug) {
	                console.warn("There was no goml file detected. Have you specified `type='text/goml'` to the script tag?");
	            }
	            return Promise.all(pArray);
	        }
	        /**
	         * Load all Goml sources contained in HTML.
	         * @return {Promise<void>} [the promise to wait for all goml loading]
	         */
	
	    }, {
	        key: "loadForPage",
	        value: function loadForPage() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                    while (1) {
	                        switch (_context2.prev = _context2.next) {
	                            case 0:
	                                _context2.next = 2;
	                                return GomlLoader.loadFromQuery('script[type="text/goml"]');
	
	                            case 2:
	                            case "end":
	                                return _context2.stop();
	                        }
	                    }
	                }, _callee2, this);
	            }));
	        }
	    }]);
	
	    return GomlLoader;
	}();
	
	exports.default = GomlLoader;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function () {
	    GrimoireInitializer.initialize();
	    _GrimoireInterface2.default.noConflictPreserve = window["gr"];
	    return window["gr"] = window["GrimoireJS"] = _GrimoireInterface2.default; // TODO gr should implements noConflict
	};
	
	var _GrimoireInterface = __webpack_require__(3);
	
	var _GrimoireInterface2 = _interopRequireDefault(_GrimoireInterface);
	
	var _GomlLoader = __webpack_require__(27);
	
	var _GomlLoader2 = _interopRequireDefault(_GomlLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator["throw"](value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	
	/**
	 * Provides procedures for initializing.
	 */
	var GrimoireInitializer = function () {
	    function GrimoireInitializer() {
	        _classCallCheck(this, GrimoireInitializer);
	    }
	
	    _createClass(GrimoireInitializer, null, [{
	        key: "initialize",
	
	        /**
	         * Start initializing
	         * @return {Promise<void>} The promise which will be resolved when all of the Goml script was loaded.
	         */
	        value: function initialize() {
	            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.prev = 0;
	
	                                GrimoireInitializer._copyGLConstants();
	                                _GrimoireInterface2.default.initialize();
	                                _context.next = 5;
	                                return GrimoireInitializer._waitForDOMLoading();
	
	                            case 5:
	                                GrimoireInitializer._logVersions();
	                                _context.next = 8;
	                                return _GrimoireInterface2.default.resolvePlugins();
	
	                            case 8:
	                                _context.next = 10;
	                                return _GomlLoader2.default.loadForPage();
	
	                            case 10:
	                                _context.next = 15;
	                                break;
	
	                            case 12:
	                                _context.prev = 12;
	                                _context.t0 = _context["catch"](0);
	
	                                console.error(_context.t0);
	
	                            case 15:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this, [[0, 12]]);
	            }));
	        }
	        /**
	         * Ensure WebGLRenderingContext.[CONSTANTS] is exisiting.
	         * Some of the browsers contains them in prototype.
	         */
	
	    }, {
	        key: "_copyGLConstants",
	        value: function _copyGLConstants() {
	            if (WebGLRenderingContext.ONE) {
	                // Assume the CONSTANTS are already in WebGLRenderingContext
	                // Chrome,Firefox,IE,Edge...
	                return;
	            }
	            // Otherwise like ""Safari""
	            for (var propName in WebGLRenderingContext.prototype) {
	                if (/^[A-Z]/.test(propName)) {
	                    var property = WebGLRenderingContext.prototype[propName];
	                    WebGLRenderingContext[propName] = property;
	                }
	            }
	        }
	        /**
	         * Obtain the promise object which will be resolved when DOMContentLoaded event was rised.
	         * @return {Promise<void>} the promise
	         */
	
	    }, {
	        key: "_waitForDOMLoading",
	        value: function _waitForDOMLoading() {
	            return new Promise(function (resolve) {
	                window.addEventListener("DOMContentLoaded", function () {
	                    resolve();
	                });
	            });
	        }
	    }, {
	        key: "_logVersions",
	        value: function _logVersions() {
	            var gr = _GrimoireInterface2.default;
	            if (!gr.debug) {
	                return;
	            }
	            var log = "%cGrimoire.js v" + gr["__VERSION__"] + "\nplugins:\n\n";
	            var i = 1;
	            for (var key in gr.lib) {
	                var plugin = gr.lib[key];
	                log += "  " + i + " : " + (plugin.__NAME__ || key) + "@" + plugin.__VERSION__ + "\n";
	                i++;
	            }
	            log += "\nTo suppress this message,please inject a line \"gr.debug = false;\" on the initializing timing.";
	            console.log(log, "color:#44F;font-weight:bold;");
	        }
	    }]);
	
	    return GrimoireInitializer;
	}();
	/**
	 * Just start the process.
	 */
	
	
	;

/***/ }
/******/ ])
});
;

},{}],8:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],9:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":8}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gr = require('grimoirejs').default;

var $ = null;

var EPS = Math.pow(10, -5);

gr(function () {
  $ = gr('#canvas');
  var stats = new Stats();
  stats.showPanel(0);
  stats.dom.setAttribute('class', 'st');
  document.body.appendChild(stats.dom);
  $('goml').first().getComponent('LoopManager').register(function (i) {
    stats.begin();
  }, -100000000);
  $('goml').first().getComponent('LoopManager').register(function (i) {
    stats.end();
  }, 100000000);
  var gui = new dat.GUI();
  var general = new General();
  gui.add(general, 'axis');
  gui.add(general, 'wireframe');
  gui.add(general, 'capture');
  var mageru = new Mageru();
  var f1 = gui.addFolder('Mageru');
  f1.add(mageru, 'radius', -1, 1).listen();
  f1.add(mageru, 'coef', 0, 1);
  f1.add(mageru, 'animation');
  f1.open();
});

var General = function () {
  function General() {
    _classCallCheck(this, General);

    this._axis = true;
    this._wireframe = true;
  }

  _createClass(General, [{
    key: 'capture',
    value: function capture() {
      var dataUrl = document.querySelector('#app canvas').toDataURL();
      var a = document.createElement('a');
      a.href = dataUrl;
      a.style.display = 'none';
      a.setAttribute('download', 'capture_' + +new Date() + '.png');
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }, {
    key: 'axis',
    set: function set(v) {
      this._axis = v;
      $('#axis').setAttribute('scale', this._axis ? 1 : 0);
    },
    get: function get() {
      return this._axis;
    }
  }, {
    key: 'wireframe',
    set: function set(v) {
      this._wireframe = v;
      $('.ita').setAttribute('targetBuffer', this._wireframe ? 'wireframe' : 'default');
    },
    get: function get() {
      return this._wireframe;
    }
  }]);

  return General;
}();

var Mageru = function () {
  function Mageru() {
    _classCallCheck(this, Mageru);

    this._coef = 0.13;
    this._radius = 0.5;
    this.frame = 0;
    this._animation = false;
  }

  _createClass(Mageru, [{
    key: 'animate',
    value: function animate() {
      this.frame += 1;
      console.log(Math.cos(this.frame * Math.PI / 180 * 3));
      this.radius = Math.cos(this.frame * Math.PI / 180 * 3);
      if (this._animation) {
        requestAnimationFrame(this.animate.bind(this));
      }
    }
  }, {
    key: 'coef',
    set: function set(v) {
      this._coef = v;
      $('#mageru').setAttribute('coef', v);
    },
    get: function get() {
      return this._coef;
    }
  }, {
    key: 'radius',
    set: function set(v) {
      this._radius = v;
      var r = 1 / v;
      if (r > 1 / EPS) {
        r = 1 / EPS;
      } else if (r < -1 / EPS) {
        r = -1 / EPS;
      }
      $('#mageru').setAttribute('radius', r);
    },
    get: function get() {
      return this._radius;
    }
  }, {
    key: 'animation',
    set: function set(v) {
      this._animation = v;
      if (v) {
        requestAnimationFrame(this.animate.bind(this));
      }
    },
    get: function get() {
      return this._animation;
    }
  }]);

  return Mageru;
}();

},{"grimoirejs":6}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require$default$Geom = require('grimoirejs-fundamental').default.Geometry,
    Geometry = _require$default$Geom.Geometry,
    GeometryFactory = _require$default$Geom.GeometryFactory;

var _require$default = require('grimoirejs-math').default,
    Vector3 = _require$default.Vector3,
    AABB = _require$default.AABB;

var Ita = function () {
  function Ita(div) {
    _classCallCheck(this, Ita);

    this.div = div;
    this.offset = 0;
    this.topology = 3;
    this.positions = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];
    this.vertices = [];
    this.wireframeIndices = [];
    this.count = 0;
    this.debug = false;
    this.texCoordsMapping = [{
      dot: Vector3.YUnit,
      offset: [0.3333, 0.3333]
    }, {
      dot: Vector3.YUnit.negateThis(),
      offset: [0.3333, 0.3333]
    }, {
      dot: Vector3.XUnit,
      offset: [0.6666, 0.3333]
    }, {
      dot: Vector3.XUnit.negateThis(),
      offset: [0.0, 0.3333]
    }, {
      dot: Vector3.ZUnit,
      offset: [0.3333, 0.6666]
    }, {
      dot: Vector3.ZUnit.negateThis(),
      offset: [0.3333, 0.0]
    }];
    this.texUnit = 0.3333;
  }

  _createClass(Ita, [{
    key: 'debugInit',
    value: function debugInit() {
      this.indices_ = [];
      this.positions_ = [];
      this.texCoords_ = [];
      this.div_ = [];
    }
  }, {
    key: 'generate',
    value: function generate(debug) {
      if (debug) {
        this.debug = true;
        this.debugInit();
      }
      this.cube();
      this.count = this.positions.length / this.topology;
      this.vertices = this.interleave();
      this.wireframeIndices = this.wireframe();
      if (this.debug) {
        this.validate();
        console.log(this.indices_);
        console.log(this.positions_);
        console.log(this.texCoords_);
      }
    }
  }, {
    key: 'interleave',
    value: function interleave() {
      var vertices = [];
      for (var i = 0; i <= this.positions.length / 3; i++) {
        vertices.push.apply(vertices, _toConsumableArray(this.positions.slice(i * 3, (i + 1) * 3).concat(this.normals.slice(i * 3, (i + 1) * 3)).concat(this.texCoords.slice(i * 2, (i + 1) * 2))));
      }
      return vertices;
    }
  }, {
    key: 'wireframe',
    value: function wireframe() {
      var indices = [];
      var ic = new Array(3);
      for (var i = 0; i <= this.indices.length - 1; i++) {
        ic[i % 3] = this.indices[i];
        if (i % 3 === 2) {
          var a = ic[0],
              b = ic[1],
              c = ic[2];
          indices.push(a, b, b, c, c, a);
        }
      }
      return indices;
    }
  }, {
    key: 'cube',
    value: function cube() {
      var center = Vector3.Zero;
      var up = Vector3.YUnit;
      var right = Vector3.XUnit;
      var forward = Vector3.ZUnit.negateThis();
      this.offset = 0;
      this.rect(center.subtractWith(forward), up, right, forward.negateThis()); // 手前
      this.rect(center.addWith(forward), up.negateThis(), right, forward); // 奥
      this.rect(center.addWith(up), forward, right, up); // 上
      this.rect(center.subtractWith(up), forward, right.negateThis(), up.negateThis()); // 下
      this.rect(center.addWith(right), forward, up.negateThis(), right); // 右
      this.rect(center.subtractWith(right), forward, up, right.negateThis()); // 左
    }
  }, {
    key: 'rect',
    value: function rect(center, up, right, forward) {
      var _this = this;

      var xdiv = Math.abs(this.div.dotWith(right));
      var ydiv = Math.abs(this.div.dotWith(up));
      if (this.debug) {
        this.div_.push([xdiv, ydiv].toString());
      }

      var _loop = function _loop(x) {
        var _loop2 = function _loop2(y) {
          var _positions, _normals;

          var p = center.addWith(right.multiplyWith(2 * x / xdiv - 1).addWith(up.multiplyWith(2 * y / ydiv - 1)));
          (_positions = _this.positions).push.apply(_positions, _toConsumableArray(Array.prototype.slice.call(p.rawElements)));
          if (_this.debug) {
            _this.positions_.push(Array.prototype.slice.call(p.rawElements).toString() + center.toString() + up.toString() + right.toString());
          }
          (_normals = _this.normals).push.apply(_normals, _toConsumableArray(Array.prototype.slice.call(forward.rawElements)));
          _this.texCoordsMapping.forEach(function (v) {
            if (v.dot.dotWith(forward) === 1) {
              var _texCoords;

              var uv = void 0;
              if (v.dot.equalWith(Vector3.YUnit.negateThis())) {
                uv = [v.offset[0] + _this.texUnit - x * (_this.texUnit / xdiv), v.offset[1] + _this.texUnit - y * (_this.texUnit / ydiv)];
              } else {
                uv = [v.offset[0] + x * (_this.texUnit / xdiv), v.offset[1] + _this.texUnit - y * (_this.texUnit / ydiv)];
              }
              (_texCoords = _this.texCoords).push.apply(_texCoords, _toConsumableArray(uv));
              if (_this.debug) {
                _this.texCoords_.push(uv.toString() + forward.toString());
              }
            }
          });
          if (x !== 0 && y !== 0) {
            (function () {
              var poly = [];
              [[-1, -1], [0, -1], [-1, 0], [0, 0], [-1, 0], [0, -1]].forEach(function (dxdy, i) {
                _this.indices.push(_this.coordToIndex(_this.offset, x + dxdy[0], y + dxdy[1], up));
                if (_this.debug) {
                  poly.push(_this.coordToIndex(_this.offset, x + dxdy[0], y + dxdy[1], up));
                  if (poly.length === 3) {
                    _this.indices_.push(poly.toString());
                    poly = [];
                  }
                }
              });
            })();
          }
        };

        for (var y = 0; y <= ydiv; y++) {
          _loop2(y);
        }
      };

      for (var x = 0; x <= xdiv; x++) {
        _loop(x);
      }
      this.offset += (xdiv + 1) * (ydiv + 1);
    }
  }, {
    key: 'coordToIndex',
    value: function coordToIndex(offset, x, y, up) {
      return offset + x * (Math.abs(this.div.dotWith(up)) + 1) + y;
    }
  }, {
    key: 'validate',
    value: function validate() {
      var _this2 = this;

      if (this.positions.length % 3 !== 0) {
        console.error('position length(' + this.positions.length + ') is not a multiple of 3.');
      }
      if (this.normals.length % 3 !== 0) {
        console.error('normal length(' + this.normals.length + ') is not a multiple of 3.');
      }
      if (this.indices.length % this.topology !== 0) {
        console.error('index length(' + this.indices.length + ') is not a multiple of topology(' + this.topology + ').');
      }
      if (this.texCoords.length % 2 !== 0) {
        console.error('texCoord length(' + this.texCoords.length + ') is not a multiple of 2.');
      }
      if (this.positions.length !== this.normals.length) {
        console.error('normal length is not match to position length. normal: ' + this.normals.length + ', position: ' + this.positions.length);
      }
      if (this.positions.length / 3 !== this.texCoords.length / 2) {
        console.error('texCoord pair length is not match to position pair length. texCoord: ' + this.texCoords.length / 2 + ', position: ' + this.positions.length / 3);
      }
      this.indices.forEach(function (v, idx) {
        if (isNaN(parseInt(v)) || parseInt(v) !== v) {
          console.error('index(' + v + ') is not a integer. in: index[' + idx + '] (' + Math.ceil(idx / _this2.topology) + ')');
        }
        if (v > _this2.positions.length / 3) {
          console.error('index(' + v + ') is out of range. in: index[' + idx + '] (' + Math.ceil(idx / _this2.topology) + ')');
        }
      });
      this.positions.forEach(function (v, idx) {
        if (isNaN(parseFloat(v))) {
          console.error('position(' + v + ') is not a number. in: position[' + idx + '] (' + Math.ceil(idx / 3) + ')');
        }
        if (v > 1.0 || v < -1.0) {
          console.warn('position(' + v + ') is out of unit space(-1 < q < 1). in: position[' + idx + '] (' + Math.ceil(idx / 3) + ')');
        }
      });
      Array.from({ length: this.normals.length / 3 }, function (v, i) {
        return _this2.normals.slice(i * 3, i * 3 + 3);
      }).forEach(function (v, idx) {
        var n = new Vector3(v);
        if (Math.abs(n.magnitude - 1) > 0.001) {
          console.warn('normal(' + v.toString() + ') is not normalized(' + n.magnitude + '). in: normal[' + idx * 3 + '..' + (idx * 3 + 3) + '] (' + idx + ')');
        }
      });
      this.texCoords.forEach(function (v, idx) {
        if (isNaN(parseFloat(v))) {
          console.error('texCoord(' + v + ') is not a number. in: texCoord[' + idx + '] (' + Math.ceil(idx / 2) + ')');
        }
        if (v > 1.0 || v < 0) {
          console.warn('texCoord(' + v + ') is out of unit space(0 < q < 1). in: texCoord[' + idx + '] (' + Math.ceil(idx / 2) + ')');
        }
      });
    }
  }]);

  return Ita;
}();

var unitBox = new AABB([new Vector3(-1, -1, -1), new Vector3(1, 1, 1)]);

var primitiveLayout = {
  POSITION: {
    size: 3,
    stride: 32
  },
  NORMAL: {
    size: 3,
    stride: 32,
    offset: 12
  },
  TEXCOORD: {
    size: 2,
    stride: 32,
    offset: 24
  }
};

GeometryFactory.addType("ita", {
  div: {
    converter: 'Vector3',
    defaultValue: '2,2,2'
  }
}, function (gl, attrs) {
  var ita = new Ita(attrs.div);
  ita.generate();
  var geometry = new Geometry(gl);
  geometry.addAttributes(ita.vertices, primitiveLayout);
  geometry.addIndex('default', ita.indices);
  geometry.addIndex('wireframe', ita.wireframeIndices, WebGLRenderingContext.LINES);
  return geometry;
});

},{"grimoirejs-fundamental":2,"grimoirejs-math":4}]},{},[1])
//# sourceMappingURL=index.js.map
