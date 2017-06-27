(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactJSModal"] = factory(require("react"), require("react-dom"));
	else
		root["ReactJSModal"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.state = {
      enter: false,
      enterActive: false,
      leave: false,
      leaveActive: false
    };

    _this.willClose = true;
    _this.scrollTop = 0;
    _this.doc = document.documentElement;

    _this.handleOutsideDialogClick = _this.handleOutsideDialogClick.bind(_this);
    _this.handleInsideDialogClick = _this.handleInsideDialogClick.bind(_this);
    _this.handleCloseClick = _this.handleCloseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  _createClass(ModalPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.storedActiveElement = document.activeElement;
      this.scrollTop = window.pageYOffset || this.doc.scrollTop;

      setTimeout(function () {
        _this2.enforceFoces();
      }, 0);

      if (this.props.transition) {
        this.transitionTimeStart = new Date();

        this.setState({ enter: true }, function () {
          _this2.setState({ enterActive: true });

          _this2.enterTimer = setTimeout(function () {
            _this2.setState({ enter: false, enterActive: false });
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
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!(document.activeElement === this.modal || this.modal.contains(document.activeElement))) {
        this.enforceFoces();
      }
    }
  }, {
    key: 'componentWillUnmount',
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
    key: 'handleOutsideDialogClick',
    value: function handleOutsideDialogClick(e) {
      if (this.willClose) this.close();
      this.willClose = true;
    }
  }, {
    key: 'handleInsideDialogClick',
    value: function handleInsideDialogClick(e) {
      this.willClose = false;
    }
  }, {
    key: 'handleCloseClick',
    value: function handleCloseClick() {
      this.close();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.props.isOpen) {
        this.close();
      }
    }
  }, {
    key: 'addRootClass',
    value: function addRootClass() {
      document.documentElement.classList.add(ROOT_CLASS_OPEN);
    }
  }, {
    key: 'removeRootClass',
    value: function removeRootClass() {
      document.documentElement.classList.remove(ROOT_CLASS_OPEN);
    }
  }, {
    key: 'enforceFoces',
    value: function enforceFoces() {
      this.modal.focus();
    }
  }, {
    key: 'getTransitionLeaveTimeout',
    value: function getTransitionLeaveTimeout() {
      return Math.min(this.transitionTimeEnd - this.transitionTimeStart, this.props.transitionLeaveTimeout);
    }
  }, {
    key: 'getScrollbarSize',
    value: function getScrollbarSize() {
      var scroller = document.createElement('div');

      scroller.style.width = '100px';
      scroller.style.overflow = 'scroll';
      document.body.appendChild(scroller);

      return scroller.offsetWidth - scroller.clientWidth;
    }
  }, {
    key: 'close',
    value: function close() {
      var _this3 = this;

      if (!this.props.transition) {
        this.props.onClose();
      } else {
        if (this.enterTimer) {
          clearTimeout(this.enterTimer);
        }

        if (!this.state.leave) {
          this.setState({ leave: true }, function () {
            _this3.setState({ leaveActive: true });

            _this3.transitionTimeEnd = new Date();

            _this3.leaveTimer = setTimeout(function () {
              _this3.setState({ leave: false, leaveActive: false });
              _this3.props.onClose();
            }, _this3.getTransitionLeaveTimeout());
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this4 = this;

      var mainClassNames = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, MAIN_CLASS, true), _defineProperty(_classNames, MAIN_CLASS_OPEN, this.props.isOpen), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_ENTER, this.state.enter), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_ENTER_ACTIVE, this.state.enterActive), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_LEAVE, this.state.leave), _defineProperty(_classNames, MAIN_CLASS_TRANSITION_LEAVE_ACTIVE, this.state.leaveActive), _classNames));

      // TODO: Need to add role attribute
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(m) {
            _this4.modal = m;
          },
          className: mainClassNames,
          tabIndex: -1,
          onKeyDown: this.handleKeydown,
          onClick: this.handleOutsideDialogClick
        },
        _react2.default.createElement(
          'div',
          { className: MAIN_CLASS + '__layout' },
          _react2.default.createElement(
            'div',
            {
              className: MAIN_CLASS + '__dialog',
              onClick: this.handleInsideDialogClick
            },
            _react2.default.createElement(
              'button',
              {
                className: MAIN_CLASS + '__close',
                onClick: this.handleCloseClick
              },
              _react2.default.createElement('span', { className: MAIN_CLASS + '__close-icon' }),
              _react2.default.createElement(
                'span',
                { className: MAIN_CLASS + '__close-text' },
                '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: MAIN_CLASS + '__content' },
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.propTypes = {
  isOpen: _react2.default.PropTypes.bool.isRequired,
  onClose: _react2.default.PropTypes.func,
  position: _react2.default.PropTypes.string,
  transition: _react2.default.PropTypes.bool,
  transitionEnterTimeout: _react2.default.PropTypes.number,
  transitionLeaveTimeout: _react2.default.PropTypes.number,
  children: _react2.default.PropTypes.node
};
ModalPortal.defaultProps = {
  isOpen: false,
  position: 'fixed',
  transition: false,
  transitionEnterTimeout: 300,
  transitionLeaveTimeout: 300
};
exports.default = ModalPortal;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ModalPortal = __webpack_require__(2);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getParentContainer() {
  var container = document.querySelector('[data-modal-container]');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('data-modal-container', '');
    document.body.appendChild(container);
  }

  return container;
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;

      this.parentContainer = getParentContainer();

      if (props.isOpen) {
        this.mountCombo(props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen) {
        this.mountCombo(nextProps);
      } else {
        this.unmountCombo();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unmountCombo();
    }
  }, {
    key: 'mountCombo',
    value: function mountCombo(props) {
      if (!this.container) {
        this.container = document.createElement('div');
        this.parentContainer.appendChild(this.container);
      }

      _reactDom2.default.render(_react2.default.createElement(_ModalPortal2.default, props), this.container);
    }
  }, {
    key: 'unmountCombo',
    value: function unmountCombo() {
      if (this.container) {
        _reactDom2.default.unmountComponentAtNode(this.container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _react2.default.PropTypes.bool.isRequired,
  onClose: _react2.default.PropTypes.func,
  position: _react2.default.PropTypes.string,
  transition: _react2.default.PropTypes.bool,
  transitionEnterTimeout: _react2.default.PropTypes.number,
  transitionLeaveTimeout: _react2.default.PropTypes.number,
  children: _react2.default.PropTypes.node
};
exports.default = Modal;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
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
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
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

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })
/******/ ]);
});