(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactFlexModal"] = factory(require("prop-types"), require("react"), require("react-dom"));
	else
		root["ReactFlexModal"] = factory(root["PropTypes"], root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_);

// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom","umd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_umd_react_dom_ = __webpack_require__(2);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_umd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_umd_react_dom_);

// EXTERNAL MODULE: external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types","umd":"prop-types"}
var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_ = __webpack_require__(0);
var external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/ModalPortal.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var KEYCODES = {
  ESCAPE: 27
};
var MAIN_CLASS = 'Modal';
var ROOT_CLASS_OPEN = MAIN_CLASS + '-open';
var MAIN_CLASS_OPEN = MAIN_CLASS + '--open';
var MAIN_CLASS_TRANSITION_ENTER = MAIN_CLASS + '--enter';
var MAIN_CLASS_TRANSITION_ENTER_ACTIVE = MAIN_CLASS + '--enter-active';
var MAIN_CLASS_TRANSITION_LEAVE = MAIN_CLASS + '--leave';
var MAIN_CLASS_TRANSITION_LEAVE_ACTIVE = MAIN_CLASS + '--leave-active';

var ModalPortal_ModalPortal =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    var _this;

    _classCallCheck(this, ModalPortal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalPortal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      enter: false,
      enterActive: false,
      leave: false,
      leaveActive: false
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseClick", function () {
      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onInsideDialogClick", function (e) {
      _this.willClose = false;
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      if (e.keyCode === KEYCODES.ESCAPE && _this.props.isOpen) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onOutsideDialogClick", function (e) {
      if (_this.willClose) _this.close();
      _this.willClose = true;
    });

    _this.willClose = true;
    _this.scrollTop = 0;
    _this.doc = document.documentElement;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.storedActiveElement = document.activeElement;
      this.scrollTop = window.pageYOffset || this.doc.scrollTop;
      setTimeout(function () {
        _this2.enforceFocus();
      }, 0);

      if (this.props.transition) {
        this.transitionTimeStart = new Date();
        this.setState({
          enter: true
        }, function () {
          _this2.setState({
            enterActive: true
          });

          _this2.enterTimer = setTimeout(function () {
            _this2.setState({
              enter: false,
              enterActive: false
            });
          }, _this2.props.transitionEnterTimeout);
        });
      }

      this.addRootClass();

      if (this.props.position == 'fixed') {
        document.body.style.paddingRight = this.getScrollbarSize() + 'px';
        this.doc.style.position = 'fixed';
        this.doc.style.width = '100%';
        this.doc.style.top = -this.scrollTop + 'px';
        this.doc.style.overflow = 'hidden';
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!(document.activeElement === this.modal || this.modal.contains(document.activeElement))) {
        this.enforceFocus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.enterTimer) clearTimeout(this.enterTimer);
      if (this.leaveTimer) clearTimeout(this.leaveTimer);
      this.storedActiveElement.focus();
      this.storedActiveElement = null;
      this.removeRootClass();

      if (this.props.position == 'fixed') {
        document.body.style.paddingRight = '';
        this.doc.style.position = '';
        this.doc.style.width = '';
        this.doc.style.top = '';
        this.doc.style.overflow = '';
        window.scrollTo(0, this.scrollTop);
      }
    }
  }, {
    key: "getScrollbarSize",
    value: function getScrollbarSize() {
      var scroller = document.createElement('div');
      scroller.style.width = '100px';
      scroller.style.overflow = 'scroll';
      document.body.appendChild(scroller);
      return scroller.offsetWidth - scroller.clientWidth;
    }
  }, {
    key: "getTransitionLeaveTimeout",
    value: function getTransitionLeaveTimeout() {
      return Math.min(this.transitionTimeEnd - this.transitionTimeStart, this.props.transitionLeaveTimeout);
    }
  }, {
    key: "addRootClass",
    value: function addRootClass() {
      document.documentElement.classList.add(ROOT_CLASS_OPEN);
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      if (!this.props.transition) {
        this.props.onClose();
      } else {
        if (this.enterTimer) {
          clearTimeout(this.enterTimer);
        }

        if (!this.state.leave) {
          this.setState({
            leave: true
          }, function () {
            _this3.setState({
              leaveActive: true
            });

            _this3.transitionTimeEnd = new Date();
            _this3.leaveTimer = setTimeout(function () {
              _this3.setState({
                leave: false,
                leaveActive: false
              });

              _this3.props.onClose();
            }, _this3.getTransitionLeaveTimeout());
          });
        }
      }
    }
  }, {
    key: "enforceFocus",
    value: function enforceFocus() {
      this.modal.focus();
    }
  }, {
    key: "removeRootClass",
    value: function removeRootClass() {
      document.documentElement.classList.remove(ROOT_CLASS_OPEN);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this4 = this;

      var mainClassNames = classnames_default()((_classNames = {}, _defineProperty(_classNames, MAIN_CLASS, true), _defineProperty(_classNames, MAIN_CLASS_OPEN, this.props.isOpen), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_ENTER, this.state.enter), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_ENTER_ACTIVE, this.state.enterActive), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_LEAVE, this.state.leave), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_LEAVE_ACTIVE, this.state.leaveActive), _classNames)); // TODO: Need to add role attribute

      return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
        ref: function ref(m) {
          _this4.modal = m;
        },
        className: mainClassNames,
        tabIndex: -1,
        onKeyDown: this.onKeyDown,
        onClick: this.onOutsideDialogClick
      }, external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
        className: MAIN_CLASS + '__layout'
      }, external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
        className: MAIN_CLASS + '__dialog',
        onClick: this.onInsideDialogClick
      }, external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("button", {
        className: MAIN_CLASS + '__close',
        onClick: this.onCloseClick
      }, external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("span", {
        className: MAIN_CLASS + '__close-icon'
      }), external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("span", {
        className: MAIN_CLASS + '__close-text'
      }, "Close")), external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
        className: MAIN_CLASS + '__content'
      }, this.props.children))));
    }
  }]);

  return ModalPortal;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"]);

_defineProperty(ModalPortal_ModalPortal, "propTypes", {
  isOpen: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool.isRequired,
  onClose: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  position: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  transition: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  transitionEnterTimeout: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number,
  transitionLeaveTimeout: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number,
  children: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.node
});

_defineProperty(ModalPortal_ModalPortal, "defaultProps", {
  isOpen: false,
  position: 'fixed',
  transition: false,
  transitionEnterTimeout: 300,
  transitionLeaveTimeout: 300
});

/* harmony default export */ var src_ModalPortal = (ModalPortal_ModalPortal);
// CONCATENATED MODULE: ./src/Modal.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal_Modal; });
function Modal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Modal_typeof = function _typeof(obj) { return typeof obj; }; } else { Modal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Modal_typeof(obj); }

function Modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) Modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) Modal_defineProperties(Constructor, staticProps); return Constructor; }

function Modal_possibleConstructorReturn(self, call) { if (call && (Modal_typeof(call) === "object" || typeof call === "function")) { return call; } return Modal_assertThisInitialized(self); }

function Modal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Modal_getPrototypeOf(o) { Modal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Modal_getPrototypeOf(o); }

function Modal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Modal_setPrototypeOf(subClass, superClass); }

function Modal_setPrototypeOf(o, p) { Modal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Modal_setPrototypeOf(o, p); }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var getParentContainer = function getParentContainer() {
  var container = document.querySelector('[data-modal-container]');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('data-modal-container', '');
    document.body.appendChild(container);
  }

  return container;
};

var Modal_Modal =
/*#__PURE__*/
function (_Component) {
  Modal_inherits(Modal, _Component);

  function Modal() {
    Modal_classCallCheck(this, Modal);

    return Modal_possibleConstructorReturn(this, Modal_getPrototypeOf(Modal).apply(this, arguments));
  }

  Modal_createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      this.parentContainer = getParentContainer();

      if (props.isOpen) {
        this.mountPortal(props);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.isOpen) {
        this.mountPortal(this.props);
      } else {
        this.unmountPortal();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmountPortal();
    }
  }, {
    key: "mountPortal",
    value: function mountPortal(props) {
      if (!this.container) {
        this.container = document.createElement('div');
        this.parentContainer.appendChild(this.container);
      }

      external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_umd_react_dom_default.a.render(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(src_ModalPortal, props), this.container);
    }
  }, {
    key: "unmountPortal",
    value: function unmountPortal() {
      if (this.container) {
        external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_umd_react_dom_default.a.unmountComponentAtNode(this.container);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"]);

Modal_defineProperty(Modal_Modal, "propTypes", {
  children: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.node,
  isOpen: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  onClose: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.func,
  position: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.string,
  transition: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.bool,
  transitionEnterTimeout: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number,
  transitionLeaveTimeout: external_root_PropTypes_commonjs2_prop_types_commonjs_prop_types_amd_prop_types_umd_prop_types_default.a.number
});

Modal_defineProperty(Modal_Modal, "defaultProps", {
  isOpen: false
});



/***/ })
/******/ ]);
});