/*! For license information please see home.826464971ffdbea32208.js.LICENSE.txt */
(self.webpackChunkunit_demo_cra = self.webpackChunkunit_demo_cra || []).push([['home'], {
  635: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "Home": () => (/* binding */ Home)\n});\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(294);\n// EXTERNAL MODULE: ./node_modules/lodash/lodash.js\nvar lodash = __webpack_require__(486);\nvar lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 24 modules\nvar es = __webpack_require__(40);\n// EXTERNAL MODULE: ./src/store.js\nvar store = __webpack_require__(275);\n;// CONCATENATED MODULE: ./src/utils/uuid.js\n// import crypto from \'crypto-browserify\';\n\n// генерируем какой-то идентификатор для запуска\nvar UUID = crypto.randomUUID();\n// EXTERNAL MODULE: ./src/components/index.module.css\nvar index_module = __webpack_require__(242);\nvar index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);\n// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js\nvar jsx_runtime = __webpack_require__(893);\n;// CONCATENATED MODULE: ./src/components/TodoItem.js\n\n\n\n\n\n\n\nvar TodoItem = function TodoItem(props) {\n  var index = props.index;\n  var dispatch = (0,es.useDispatch)();\n  var text = (0,es.useSelector)(function (state) {\n    return state.items[index];\n  });\n  var done = (0,es.useSelector)(function (state) {\n    return state.done[index];\n  });\n  var onChange = (0,react.useCallback)(function () {\n    return dispatch((0,store.setDone)(index, !done));\n  }, [index, done, dispatch]);\n  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {\n    className: (index_module_default()).item,\n    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n      "data-testid": "list-item",\n      className: done ? "done" : "",\n      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {\n        type: "checkbox",\n        checked: done,\n        onChange: onChange\n      }), text]\n    })\n  });\n};\n;// CONCATENATED MODULE: ./src/components/TodoList.js\n\n\n\n\n\n\n\nvar TodoList = function TodoList() {\n  var dispatch = (0,es.useDispatch)();\n  var items = (0,es.useSelector)(function (state) {\n    return state.items;\n  });\n  var text = (0,es.useSelector)(function (state) {\n    return state.text;\n  });\n  var onChange = (0,react.useCallback)(function (_ref) {\n    var target = _ref.target;\n    dispatch((0,store.setText)(target.value));\n  }, [dispatch]);\n  var onClick = (0,react.useCallback)(function () {\n    dispatch((0,store.addItem)(text));\n  }, [dispatch, text]);\n  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {\n      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", {\n        "data-testid": "input-add",\n        value: text,\n        onChange: onChange\n      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {\n        "data-testid": "button-add",\n        onClick: onClick,\n        children: "\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C"\n      })]\n    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {\n      "data-testid": "list",\n      className: "list",\n      children: lodash_default().map(items, function (text, i) {\n        return /*#__PURE__*/(0,jsx_runtime.jsx)(TodoItem, {\n          index: i\n        }, i);\n      })\n    })]\n  });\n};\n;// CONCATENATED MODULE: ./src/pages/Home.js\n\n\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {\n    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h1", {\n      "data-testid": "page-title",\n      children: "Home"\n    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {\n      children: "This is the list."\n    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TodoList, {})]\n  });\n};\n\n//# sourceURL=webpack://unit-demo-cra/./src/pages/Home.js_+_3_modules?');
  },
  275: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addItem": () => (/* binding */ addItem),\n/* harmony export */   "initStore": () => (/* binding */ initStore),\n/* harmony export */   "setDone": () => (/* binding */ setDone),\n/* harmony export */   "setText": () => (/* binding */ setText)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ 857);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar items = ["Позавтракать", "Сходить в магазин", "Покормить кота"];\nvar DEFAULT_STATE = {\n  items: items,\n  done: {},\n  text: ""\n};\n\n// actions\nvar addItem = function addItem(text) {\n  return {\n    type: "ADD_ITEM",\n    text: text\n  };\n};\nvar setText = function setText(text) {\n  return {\n    type: "SET_TEXT",\n    text: text\n  };\n};\nvar setDone = function setDone(index, done) {\n  return {\n    type: "SET_DONE",\n    index: index,\n    done: done\n  };\n};\n\n// reducer\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case "ADD_ITEM":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        text: "",\n        items: [].concat(_toConsumableArray(state.items), [action.text])\n      });\n    case "SET_TEXT":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        text: action.text\n      });\n    case "SET_DONE":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        done: _objectSpread(_objectSpread({}, state.done), {}, _defineProperty({}, action.index, action.done))\n      });\n    default:\n      return state;\n  }\n};\n\n// epics\n\nfunction initStore() {\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer);\n  return store;\n}\n\n//# sourceURL=webpack://unit-demo-cra/./src/store.js?');
  },
  17: (module, __webpack_exports__, __webpack_require__) => {
    eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 81);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".EPk3EXERT5xyM_B8zf0P {\\r\\n    padding: 0px;\\r\\n}\\r\\n", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"item": "EPk3EXERT5xyM_B8zf0P"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/index.module.css?./node_modules/css-loader/dist/cjs.js');
  },
  242: (module, __unused_webpack_exports, __webpack_require__) => { eval("var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);\n            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.module.css */ 17);\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://unit-demo-cra/./src/components/index.module.css?"); },
}, (e) => { e.O(0, ['vendors-node_modules_react_jsx-runtime_js', 'vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-23e42a'], (() => (635, e(e.s = 635)))), e.O(); }]);
