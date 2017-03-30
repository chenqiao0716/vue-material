(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 422);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach((function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    }))
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _splitData = function _splitData() {
  var allOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var haveOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var optionKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';

  var urlKeyStr = ',';
  var noOptions = [];

  haveOptions.forEach((function (value) {
    urlKeyStr += value[optionKey] + ',';
  }));
  allOptions.forEach((function (value) {
    if (urlKeyStr.indexOf(',' + value[optionKey] + ',') === -1) {
      noOptions.push(value);
    }
  }));
  return noOptions;
};
var _selectItem = function _selectItem(options, index, selected, src) {
  if (!src.selected) {
    selected.push(options[index]);
    src.className = 'selected';
    src.selected = true;
    src.selectedIndex = index;
    return selected;
  }
  src.className = '';
  src.selected = false;
  var selectedIndex = parseInt(src.selectedIndex, 10);
  var temp = [];

  selected.forEach((function (value, index) {
    if (index !== selectedIndex) {
      temp.push(value);
    }
  }));
  return temp;
};

exports.default = {
  mounted: function mounted() {
    console.log(this.$el.querySelector('#rightBox').offsetHeight);
  },
  data: function data() {
    return {
      leftSelected: [],
      leftSelectedElements: [],
      leftOptions: [],
      rightOptions: [],
      rightSelected: [],
      rightSelectedElements: []
    };
  },

  props: {
    allOptions: {
      type: Array,
      default: function _default() {
        return [];
      },
      required: true
    },
    haveOptions: {
      type: Array,
      default: function _default() {
        return [];
      },
      required: true
    },
    optionKey: {
      type: String,
      default: 'key'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    type: {
      type: String,
      default: 'no-yes'
    },
    noHeader: {
      type: String,
      default: '未拥有'
    },
    yesHeader: {
      type: String,
      default: '已拥有'
    }
  },
  computed: {
    _rightOptions: function _rightOptions() {
      if (this.type === 'no-yes') {
        this.rightOptions = this.haveOptions;
        return '';
      }
      this.rightOptions = _splitData(this.allOptions, this.haveOptions, this.optionKey);
      return '';
    },
    rightHeader: function rightHeader() {
      if (this.type === 'no-yes') {
        return this.yesHeader;
      }
      return this.noHeader;
    },
    _leftOptions: function _leftOptions() {
      if (this.type === 'no-yes') {
        this.leftOptions = _splitData(this.allOptions, this.haveOptions, this.optionKey);
        return '';
      }
      this.leftOptions = this.haveOptions;
      return '';
    },
    leftHeader: function leftHeader() {
      if (this.type === 'no-yes') {
        return this.noHeader;
      }
      return this.yesHeader;
    }
  },
  methods: {
    selectedData: function selectedData() {
      if (this.type === 'no-yes') {
        this.$emit('change', this.rightOptions);
      } else {
        this.$emit('change', this.leftOptions);
      }
    },
    selectLeft: function selectLeft(index, $event) {
      this.leftSelected = _selectItem(this.leftOptions, index, this.leftSelected, $event.srcElement);
    },
    toRight: function toRight() {
      if (!this.leftSelected.length) {
        return;
      }
      this.rightOptions = this.rightOptions.concat(this.leftSelected);
      this.leftSelected = [];
      this.leftOptions = _splitData(this.leftOptions, this.rightOptions, this.optionKey);
      this.$el.querySelector('#leftBox').querySelectorAll('li').forEach((function (value) {
        value.className = '';
        value.selected = false;
      }));
      this.selectedData('left');
    },
    selectRight: function selectRight(index, $event) {
      this.rightSelected = _selectItem(this.rightOptions, index, this.rightSelected, $event.srcElement);
    },
    toLeft: function toLeft() {
      if (!this.rightSelected.length) {
        return;
      }
      this.leftOptions = this.leftOptions.concat(this.rightSelected);
      this.rightSelected = [];
      this.rightOptions = _splitData(this.rightOptions, this.leftOptions, this.optionKey);
      this.$el.querySelector('#rightBox').querySelectorAll('li').forEach((function (value) {
        value.className = '';
        value.selected = false;
      }));
      this.selectedData('right');
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(226)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(386),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/chenqiao/vue-material/src/components/mdSelectBox/mdSelectBox.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSelectBox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74333a94", Component.options)
  } else {
    hotAPI.reload("data-v-74333a94", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "select-box-wrap clearfix"
  }, [_c('div', {
    staticClass: "left-wrap col-sm-5 clearfix"
  }, [_c('div', {
    staticClass: "select-header"
  }, [_vm._v("\n      " + _vm._s(_vm.leftHeader) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "select-container",
    attrs: {
      "id": "leftBox"
    }
  }, [_c('ul', _vm._l((_vm.leftOptions), (function(value, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.selectLeft(index, $event)
        }
      }
    }, [_vm._v("\n          " + _vm._s(value[_vm.valueKey]) + "\n        ")])
  })))])]), _vm._v(" "), _c('div', {
    staticClass: "center-wrap col-sm-2 clearfix"
  }, [_c('span', {
    staticClass: "move",
    on: {
      "click": _vm.toLeft
    }
  }, [_vm._v("←")]), _vm._v(" "), _c('span', {
    staticClass: "move",
    on: {
      "click": _vm.toRight
    }
  }, [_vm._v("→")])]), _vm._v(" "), _c('div', {
    staticClass: "right-wrap col-sm-5 clearfix"
  }, [_c('div', {
    staticClass: "select-header"
  }, [_vm._v("\n      " + _vm._s(_vm.rightHeader) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "select-container",
    attrs: {
      "id": "rightBox"
    }
  }, [_c('ul', _vm._l((_vm.rightOptions), (function(value, index) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.selectRight(index, $event)
        }
      }
    }, [_vm._v("\n          " + _vm._s(value[_vm.valueKey]) + "\n        ")])
  })))])]), _vm._v(" "), _c('div', {
    staticClass: "hide"
  }, [_vm._v(_vm._s(_vm._rightOptions))]), _vm._v(" "), _c('div', {
    staticClass: "hide"
  }, [_vm._v(_vm._s(_vm._leftOptions))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-74333a94", module.exports)
  }
}

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSelectBox = __webpack_require__(311);

var _mdSelectBox2 = _interopRequireDefault(_mdSelectBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mdAvatarTheme from './mdSelectBox.theme';

function install(Vue) {
  Vue.component('md-select-box', _mdSelectBox2.default);

  // Vue.material.styles.push(mdAvatarTheme);
}
module.exports = exports['default'];

/***/ })

/******/ });
}));