/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n\n    constructor (array) {\n        this.htmls = array;\n    }\n\n    html (string) {\n        if (typeof string === 'string') {\n            this.htmls.forEach((ele) => {\n                ele.innerHTML = string;\n            });\n        }\n        else {\n            return this.htmls[0].innerHTML;\n        }\n    }\n\n    empty () {\n        this.html('');\n    }\n\n    append (arg) {\n        if (typeof arg === 'string') {\n            this.htmls.forEach((ele) => {\n                ele.innerHTML += arg;\n            });\n        }\n        \n        else if (arg instanceof DOMNodeCollection) {\n            this.htmls.forEach((ele) => {\n                for (i = 0; i < arg.length; i++) {\n                    ele.innerHTML += arg[i].outerHTML;\n                }\n            });\n        }\n        \n        else {\n            this.htmls.forEach((ele) => {\n                ele.innerHTML += arg.outerHTML;\n            });\n        }\n    }\n\n    attr (attributeName, val)  {\n        if (typeof val === 'undefined') {\n            this.htmls.forEach((ele) => {\n                if (ele.hasAttribute(attributeName)) {\n                    return ele.getAttribute(attributeName);\n                }\n            });\n        }\n        else {\n            this.htmls.forEach((ele) => {\n                // if (ele.hasAttribute(attributeName)) {\n                    ele.setAttribute(attributeName, val);\n                // }\n            });\n        }\n    }\n\n    addClass (classNames) {\n        this.htmls.forEach((ele) => {\n            ele.className += classNames;\n        });\n    }\n\n    removeClass (classNames) {\n        this.htmls.forEach((ele) => {\n            ele.classList.remove(classNames);\n\n            // let argLength = classNames.length; \n            // let eleLength = ele.className.length;\n            // for (let i = 0; i < (eleLength - argLength); i++) {\n            //     let substring = ele.className.slice(i, i+argLength);\n            //     if (substring === classNames) {\n            //         let left = ele.className.slice(0, i);\n            //         let right = ele.className.slice(i+1);\n            //         ele.className = (left + right);\n            //     }\n            // }\n        });\n    }\n\n    children () {\n        var children = [];\n        this.htmls.forEach((ele) => {\n            children.push(ele.childNodes);\n        });\n        return new DOMNodeCollection(children);\n    }\n\n    parent () {\n        var parents = [];\n        this.htmls.forEach((ele) => {\n            parents.push(ele.parentNode);\n        });\n        return new DOMNodeCollection(parents);\n    }\n\n    find (selector) {\n        var nodeList = document.querySelectorAll(selector);\n        return new DOMNodeCollection(nodeList);\n    }\n\n    remove () {\n        this.htmls.forEach ((ele) => {\n            ele.innerHTML = \"\";\n        });\n\n        // this.htmls = [];\n    }\n\n    on (event, callback) {\n        this.htmls.forEach((node) => {\n            node.addEventListener(event, callback);\n            node.callback = callback;\n        });\n        \n    }\n\n    off (event) {\n        this.htmls.forEach((node) => {\n            node.removeEventListener(event, node.callback);\n        });\n\n    }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n$l = function (selector) {\n    if (selector instanceof HTMLElement) {\n        var htmls = Array.from(selector);\n        var dom_node = new DOMNodeCollection(htmls);\n        return dom_node;\n    }\n    \n\n    else if (selector instanceof Function) {\n        var queue = [];\n        queue.push(selector) \n    }\n\n\n    var nodeList = document.querySelectorAll(selector);\n    return new DOMNodeCollection(Array.from(nodeList)); //Send this into DOMNodeCollection\n};\n\nwindow.$l = $l;\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });