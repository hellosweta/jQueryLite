/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);


function $l(selector) {
  if (selector instanceof HTMLElement) {
    return new DOMNodeCollection(selector);
  } else {
    return Array.from(document.querySelectorAll(selector));
  }


}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(HTMLElements) {
    this.elements = HTMLElements;
  }

  html(innerHTML = null){
    if (innerHTML === null) {
      this.elements[0].innerHTML();
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML(innerHTML);
      }
    }
  }

  empty(){
    this.elements.html("");
  }

  append(outerHTML){
    if (outerHTML instanceof this) {
      this.html(outerHTML);
    }
  }

  attr(attribute, value){
    if (value === null) {
      this.elements[0].setAttribute(attribute, value);
    } else {
      this.elements[0].getAttribute(attribute);
    }

  }
  addClass(className){
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].className(className);
    }
  }

  removeClass(className){
    let classNames = className.split(" ");
    for (var j = 0; j < classNames.length; j++) {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].classNames(classNames[j], "");
      }

    }
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);