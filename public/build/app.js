"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/chat/js/actions/conversation.js":
/*!************************************************!*\
  !*** ./assets/chat/js/actions/conversation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMessage: () => (/* binding */ addMessage),
/* harmony export */   fetchConversations: () => (/* binding */ fetchConversations),
/* harmony export */   fetchMessages: () => (/* binding */ fetchMessages),
/* harmony export */   postMessage: () => (/* binding */ postMessage),
/* harmony export */   receiveConversations: () => (/* binding */ receiveConversations),
/* harmony export */   receiveMessages: () => (/* binding */ receiveMessages),
/* harmony export */   requestConversations: () => (/* binding */ requestConversations),
/* harmony export */   requestMessages: () => (/* binding */ requestMessages),
/* harmony export */   setHuburl: () => (/* binding */ setHuburl),
/* harmony export */   setLastMessage: () => (/* binding */ setLastMessage),
/* harmony export */   setUsername: () => (/* binding */ setUsername)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/actionTypes */ "./assets/chat/js/constants/actionTypes.js");





var requestConversations = function requestConversations() {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.GET_CONVERSATIONS
  };
};
var receiveConversations = function receiveConversations(json) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.RECIEVE_CONVERSATIONS,
    items: json
  };
};
var requestMessages = function requestMessages(id) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.GET_MESSAGES,
    conversationId: id
  };
};
var receiveMessages = function receiveMessages(json, id) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.RECIEVE_MESSAGES,
    messages: json,
    conversationId: id
  };
};
var postMessage = function postMessage(json, id) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.ADD_MESSAGE,
    message: json,
    conversationId: id
  };
};
var setLastMessage = function setLastMessage(message, conversationId) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.SET_LAST_MESSAGE,
    message: message,
    conversationId: conversationId
  };
};
var setHuburl = function setHuburl(url) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.SET_HUBURL,
    url: url
  };
};
var setUsername = function setUsername(username) {
  return {
    type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__.SET_USERNAME,
    username: username
  };
};
var fetchConversations = function fetchConversations() {
  return function (dispatch) {
    dispatch(requestConversations());
    return fetch("/conversations/").then(function (response) {
      // TODO: set the HUB URL right here
      var hubUrl = response.headers.get('Link').match(/<([^>]+)>;\s+rel=(?:mercure|"[^"]*mercure[^"]*")/)[1];
      dispatch(setHuburl(hubUrl));
      return response.json();
    }).then(function (json) {
      return dispatch(receiveConversations(json));
    });
  };
};
var fetchMessages = function fetchMessages(id) {
  return function (dispatch) {
    dispatch(requestMessages(id));
    return fetch("/messages/".concat(id)).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveMessages(json, id));
    });
  };
};
var addMessage = function addMessage(content, conversationId) {
  return function (dispatch) {
    var formData = new FormData();
    formData.append('content', content);
    return fetch("/messages/".concat(conversationId), {
      method: "POST",
      body: formData
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      dispatch(setLastMessage(json, conversationId));
      return dispatch(postMessage(json, conversationId));
    });
  };
};

/***/ }),

/***/ "./assets/chat/js/app.js":
/*!*******************************!*\
  !*** ./assets/chat/js/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./assets/chat/js/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions_conversation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/conversation */ "./assets/chat/js/actions/conversation.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ "./assets/chat/js/components/App.js");







_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_actions_conversation__WEBPACK_IMPORTED_MODULE_4__.setUsername(document.querySelector('#app').dataset.username));
react_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.MemoryRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('app'));

/***/ }),

/***/ "./assets/chat/js/components/App.js":
/*!******************************************!*\
  !*** ./assets/chat/js/components/App.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Left_Left__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Left/Left */ "./assets/chat/js/components/Left/Left.js");
/* harmony import */ var _Right_Right__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Right/Right */ "./assets/chat/js/components/Right/Right.js");
/* harmony import */ var _Right_Blank__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Right/Blank */ "./assets/chat/js/components/Right/Blank.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  var _super = _createSuper(App);
  function App() {
    _classCallCheck(this, App);
    return _super.apply(this, arguments);
  }
  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("section", {
        className: "message-area"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement("div", {
        className: "chat-area"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_Left_Left__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: "/",
        component: _Right_Blank__WEBPACK_IMPORTED_MODULE_25__["default"],
        exact: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Route, {
        path: "/conversation/:id",
        render: function render(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_22__.createElement(_Right_Right__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
            key: props.match.params.id
          }));
        }
      })))))));
    }
  }]);
  return App;
}(react__WEBPACK_IMPORTED_MODULE_22__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./assets/chat/js/components/Left/Conversation.js":
/*!********************************************************!*\
  !*** ./assets/chat/js/components/Left/Conversation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Conversation = /*#__PURE__*/function (_React$Component) {
  _inherits(Conversation, _React$Component);
  var _super = _createSuper(Conversation);
  function Conversation() {
    _classCallCheck(this, Conversation);
    return _super.apply(this, arguments);
  }
  _createClass(Conversation, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
        to: "/conversation/" + this.props.conversation.conversationId,
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        className: "flex-shrink-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("img", {
        src: "https://mehedihtml.com/chatbox/assets/img/user.png",
        alt: "user",
        className: "img-fluid"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("span", {
        className: "active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        className: "flex-grow-1 ms-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("h3", null, this.props.conversation.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", null, this.props.conversation.content)));
    }
  }]);
  return Conversation;
}(react__WEBPACK_IMPORTED_MODULE_19__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Conversation);

/***/ }),

/***/ "./assets/chat/js/components/Left/Left.js":
/*!************************************************!*\
  !*** ./assets/chat/js/components/Left/Left.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Conversation */ "./assets/chat/js/components/Left/Conversation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_conversation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../actions/conversation */ "./assets/chat/js/actions/conversation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var Left = /*#__PURE__*/function (_React$Component) {
  _inherits(Left, _React$Component);
  var _super = _createSuper(Left);
  function Left(props) {
    _classCallCheck(this, Left);
    return _super.call(this, props);
  }
  _createClass(Left, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;
      var _t = this;
      this.props.fetchConversations().then(function () {
        var url = new URL(_this.props.hubUrl);
        url.searchParams.append('topic', "/conversations/".concat(_this.props.username));
        var eventSource = new EventSource(url, {
          withCredentials: true
        });
        eventSource.onmessage = function (event) {
          debugger;
          var data = JSON.parse(event.data);
          _t.props.setLastMessage(data, data.conversation.id);
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "chatlist"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "bg-white"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "modal-dialog-scrollable"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "chat-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("h1", null, "Conversation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "chat-lists"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "tab-content",
        id: "myTabContent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "tab-pane fade active show",
        id: "home",
        role: "tabpanel",
        "aria-labelledby": "Open-tab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "chat-list"
      }, this.props.items != undefined ? this.props.items.sort(function (a, b) {
        return a.createdAt < b.createdAt;
      }).map(function (conversation, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement(_Conversation__WEBPACK_IMPORTED_MODULE_25__["default"], {
          conversation: conversation,
          key: index
        });
      }) : '')))))))));
    }
  }]);
  return Left;
}(react__WEBPACK_IMPORTED_MODULE_24__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_26__.connect)(mapStateToProps, _actions_conversation__WEBPACK_IMPORTED_MODULE_27__)(Left));

/***/ }),

/***/ "./assets/chat/js/components/Right/Blank.js":
/*!**************************************************!*\
  !*** ./assets/chat/js/components/Right/Blank.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Blank = /*#__PURE__*/function (_React$Component) {
  _inherits(Blank, _React$Component);
  var _super = _createSuper(Blank);
  function Blank() {
    _classCallCheck(this, Blank);
    return _super.apply(this, arguments);
  }
  _createClass(Blank, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        className: "col-7 px-0",
        style: {
          width: '100%',
          backgroundColor: 'white'
        }
      });
    }
  }]);
  return Blank;
}(react__WEBPACK_IMPORTED_MODULE_19__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blank);

/***/ }),

/***/ "./assets/chat/js/components/Right/Input.js":
/*!**************************************************!*\
  !*** ./assets/chat/js/components/Right/Input.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_conversation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../actions/conversation */ "./assets/chat/js/actions/conversation.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);
  var _super = _createSuper(Input);
  function Input() {
    var _this;
    _classCallCheck(this, Input);
    _this = _super.call(this);
    _this.state = {
      content: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.sendMessage = _this.sendMessage.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Input, [{
    key: "sendMessage",
    value: function sendMessage(event) {
      var _this2 = this;
      event.preventDefault();
      this.props.addMessage(this.state.content, this.props.id).then(function () {
        _this2.setState({
          content: ''
        });
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        content: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("form", {
        action: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("input", {
        type: "text",
        placeholder: "Type a message",
        "aria-describedby": "button-addon2",
        onChange: this.handleChange,
        value: this.state.content,
        className: "form-control"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("button", {
        type: "submit",
        onClick: this.sendMessage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("i", {
        className: "fa fa-paper-plane"
      }), "Send"));
    }
  }]);
  return Input;
}(react__WEBPACK_IMPORTED_MODULE_19__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_20__.connect)(mapStateToProps, _actions_conversation__WEBPACK_IMPORTED_MODULE_21__)(Input));

/***/ }),

/***/ "./assets/chat/js/components/Right/Message.js":
/*!****************************************************!*\
  !*** ./assets/chat/js/components/Right/Message.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Message = /*#__PURE__*/function (_React$Component) {
  _inherits(Message, _React$Component);
  var _super = _createSuper(Message);
  function Message() {
    _classCallCheck(this, Message);
    return _super.apply(this, arguments);
  }
  _createClass(Message, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var img = "";
      if (!this.props.message.mine) {
        img = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("img", {
          src: "https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg",
          alt: "user",
          width: "50",
          className: "rounded-circle"
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("li", {
        className: "".concat(this.props.message.mine ? "sender" : "repaly")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("p", null, this.props.message.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("span", {
        className: "time"
      }, new Date(this.props.message.CreatedAt).toLocaleString()));
    }
  }]);
  return Message;
}(react__WEBPACK_IMPORTED_MODULE_20__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

/***/ }),

/***/ "./assets/chat/js/components/Right/Right.js":
/*!**************************************************!*\
  !*** ./assets/chat/js/components/Right/Right.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_conversation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../actions/conversation */ "./assets/chat/js/actions/conversation.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Input */ "./assets/chat/js/components/Right/Input.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Message */ "./assets/chat/js/components/Right/Message.js");
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Timer */ "./assets/chat/js/components/Right/Timer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var Right = /*#__PURE__*/function (_React$Component) {
  _inherits(Right, _React$Component);
  var _super = _createSuper(Right);
  function Right(props) {
    var _this;
    _classCallCheck(this, Right);
    _this = _super.call(this, props);
    _this.bodyRef = react__WEBPACK_IMPORTED_MODULE_26__.createRef();
    _this.state = {
      id: null,
      _conversationIndex: -1,
      eventSource: null
    };
    return _this;
  }

  // scroll down to the latest message
  _createClass(Right, [{
    key: "scrollDown",
    value: function scrollDown() {
      this.bodyRef.current.scrollTop = this.bodyRef.current.scrollHeight;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props$items$thi, _prevProps$items$this;
      if (this.state._conversationIndex != -1 && (_this$props$items$thi = this.props.items[this.state._conversationIndex].messages) !== null && _this$props$items$thi !== void 0 && _this$props$items$thi.length && (_prevProps$items$this = prevProps.items[this.state._conversationIndex].messages) !== null && _prevProps$items$this !== void 0 && _prevProps$items$this.length) {
        this.scrollDown();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var _t = this;
      var id = this.props.match.params.id;
      var _conversationIndex = this.props.items.findIndex(function (conversation) {
        return conversation.conversationId == _this2.props.match.params.id;
      });
      this.setState({
        _conversationIndex: _conversationIndex
      });
      if (this.props.items[_conversationIndex].messages == undefined) {
        this.props.fetchMessages(id).then(function () {
          _this2.scrollDown();
          if (_this2.state.eventSource === null) {
            var url = new URL(_this2.props.hubUrl);
            url.searchParams.append('topic', "/conversations/".concat(_this2.props.match.params.id));
            _this2.eventSource = new EventSource(url, {
              withCredentials: true
            });
            _this2.eventSource.onmessage = function (event) {
              var data = JSON.parse(event.data);
              debugger;
              _t.props.postMessage(data, data.conversation.id);
            };
          }
        });
      } else {
        this.scrollDown();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.eventSource instanceof EventSource) {
        this.state.eventSource.close();
        this.setState({
          eventSource: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "chatbox showbox"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "modal-dialog-scrollable",
        ref: this.bodyRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "msg-head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "d-flex align-items-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("span", {
        className: "chat-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("img", {
        className: "img-fluid",
        src: "https://mehedihtml.com/chatbox/assets/img/arroleftt.svg",
        alt: "image title"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        "class": "flex-shrink-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("img", {
        "class": "img-fluid",
        src: "https://mehedihtml.com/chatbox/assets/img/user.png",
        alt: "user img"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "flex-grow-1 ms-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h3", null, "Mehedi Hasan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Timer__WEBPACK_IMPORTED_MODULE_31__["default"], null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "msg-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("ul", null, this.state._conversationIndex != -1 && this.props.items != undefined && this.props.items[this.state._conversationIndex].messages != undefined ? this.props.items[this.state._conversationIndex].messages.map(function (message, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Message__WEBPACK_IMPORTED_MODULE_30__["default"], {
          message: message,
          key: index
        });
      }) : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "send-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Input__WEBPACK_IMPORTED_MODULE_29__["default"], {
        id: this.props.match.params.id
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        "class": "send-btns"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        "class": "attach"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        "class": "button-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("span", {
        "class": "label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("img", {
        "class": "img-fluid",
        src: "https://mehedihtml.com/chatbox/assets/img/upload.svg",
        alt: "image title"
      }), " attached file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("input", {
        type: "file",
        name: "upload",
        id: "upload",
        "class": "upload-box",
        placeholder: "Upload File",
        "aria-label": "Upload File"
      }))))))));
    }
  }]);
  return Right;
}(react__WEBPACK_IMPORTED_MODULE_26__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_27__.connect)(mapStateToProps, _actions_conversation__WEBPACK_IMPORTED_MODULE_28__)(Right));

/***/ }),

/***/ "./assets/chat/js/components/Right/Timer.js":
/*!**************************************************!*\
  !*** ./assets/chat/js/components/Right/Timer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Timer = function Timer() {
  var initialTime = 2 * 60; // 10 minutes en secondes
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(initialTime),
    _useState2 = _slicedToArray(_useState, 2),
    remainingTime = _useState2[0],
    setRemainingTime = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    var interval;

    // Démarre le compte à rebours
    var startCountdown = function startCountdown() {
      interval = setInterval(function () {
        setRemainingTime(function (prevRemainingTime) {
          if (prevRemainingTime > 0) {
            return prevRemainingTime - 1;
          } else {
            clearInterval(interval); // Arrête le compte à rebours lorsque le temps atteint 0
            return 0;
          }
        });
      }, 1000); // Mettre à jour le temps toutes les 1000 ms (1 seconde)
    };

    // Démarrer le compte à rebours quand le composant est monté
    startCountdown();

    // Arrêter le compte à rebours quand le composant est démonté
    return function () {
      return clearInterval(interval);
    };
  }, []);

  // Convertir le temps en minutes et secondes pour l'affichage
  var minutes = Math.floor(remainingTime / 60);
  var seconds = remainingTime % 60;
  return (
    /*#__PURE__*/
    // Afficher le temps restant, et le le temps = 0, afficher le message
    // "Temps écoulé"
    react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", null, remainingTime === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", null, "Temps \xE9coul\xE9 !") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", null, "Temps restant: ", minutes, ":", seconds < 10 ? "0".concat(seconds) : seconds))
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);

/***/ }),

/***/ "./assets/chat/js/constants/actionTypes.js":
/*!*************************************************!*\
  !*** ./assets/chat/js/constants/actionTypes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_MESSAGE: () => (/* binding */ ADD_MESSAGE),
/* harmony export */   GET_CONVERSATIONS: () => (/* binding */ GET_CONVERSATIONS),
/* harmony export */   GET_MESSAGES: () => (/* binding */ GET_MESSAGES),
/* harmony export */   POST_MESSAGE: () => (/* binding */ POST_MESSAGE),
/* harmony export */   RECIEVE_CONVERSATIONS: () => (/* binding */ RECIEVE_CONVERSATIONS),
/* harmony export */   RECIEVE_MESSAGES: () => (/* binding */ RECIEVE_MESSAGES),
/* harmony export */   SET_HUBURL: () => (/* binding */ SET_HUBURL),
/* harmony export */   SET_LAST_MESSAGE: () => (/* binding */ SET_LAST_MESSAGE),
/* harmony export */   SET_USERNAME: () => (/* binding */ SET_USERNAME)
/* harmony export */ });
var GET_CONVERSATIONS = 'GET_CONVERSATIONS';
var RECIEVE_CONVERSATIONS = 'RECIEVE_CONVERSATIONS';
var GET_MESSAGES = 'GET_MESSAGES';
var RECIEVE_MESSAGES = 'RECIEVE_MESSAGES';
var ADD_MESSAGE = 'ADD_MESSAGE';
var POST_MESSAGE = 'POST_MESSAGE';
var SET_HUBURL = 'SET_HUBURL';
var SET_USERNAME = 'SET_USERNAME';
var SET_LAST_MESSAGE = 'SET_LAST_MESSAGE';

/***/ }),

/***/ "./assets/chat/js/reducers/conversation.js":
/*!*************************************************!*\
  !*** ./assets/chat/js/reducers/conversation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../constants/actionTypes */ "./assets/chat/js/constants/actionTypes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
































function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    didInvalidate: false,
    items: [],
    hubUrl: null,
    username: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.GET_CONVERSATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true,
        didInvalidate: false
      });
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.RECIEVE_CONVERSATIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        didInvalidate: false,
        items: action.items
      });
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.GET_MESSAGES:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: true,
        didInvalidate: false
      });
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.RECIEVE_MESSAGES:
      var _newConversations = state.items.map(function (conversation) {
        return conversation.conversationId == action.conversationId ? Object.assign({}, conversation, {
          messages: action.messages
        }) : conversation;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        didInvalidate: false,
        items: _toConsumableArray(_newConversations)
      });
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.ADD_MESSAGE:
      var _newItemsFinal = state.items.map(function (item) {
        return item.conversationId == action.conversationId ? Object.assign({}, item, {
          messages: [].concat(_toConsumableArray(item.messages), [action.message])
        }) : Object.assign({}, item);
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        didInvalidate: false,
        items: _toConsumableArray(_newItemsFinal)
      });
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.SET_LAST_MESSAGE:
      var _newItemsFinal2 = state.items.map(function (item) {
        return item.conversationId == action.conversationId ? (item.content = action.message.content, item.createdAt = action.message.createdAt, Object.assign({}, item)) : Object.assign({}, item);
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        didInvalidate: false,
        items: _toConsumableArray(_newItemsFinal2)
      });
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.SET_HUBURL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: false,
        didInvalidate: false,
        hubUrl: action.url
      });
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_32__.SET_USERNAME:
      return _objectSpread(_objectSpread({}, state), {}, {
        username: action.username
      });
    default:
      return state;
  }
});

/***/ }),

/***/ "./assets/chat/js/store.js":
/*!*********************************!*\
  !*** ./assets/chat/js/store.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_conversation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/conversation */ "./assets/chat/js/reducers/conversation.js");



var store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers_conversation__WEBPACK_IMPORTED_MODULE_0__["default"], (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-9b2981","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-1bb224"], () => (__webpack_exec__("./assets/chat/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hLLGNBQWMsSUFBSTJHLE1BQU0sQ0FBQzNHLGNBQWMsSUFHM0NnSyxJQUFJLENBQUMxSSxPQUFPLEdBQUdxRixNQUFNLENBQUN2RyxPQUFPLENBQUNrQixPQUFPLEVBQ3JDMEksSUFBSSxDQUFDcEUsU0FBUyxHQUFHZSxNQUFNLENBQUN2RyxPQUFPLENBQUN3RixTQUFTLEVBQ3pDZ0UsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVHLElBQUksQ0FBQyxJQUV6QkosTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVHLElBQUksQ0FBQztNQUNqQyxDQUFDLENBQUM7TUFDRixPQUFBTixhQUFBLENBQUFBLGFBQUEsS0FDT2xGLEtBQUs7UUFDUmdGLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxhQUFhLEVBQUUsS0FBSztRQUNwQjVKLEtBQUssRUFBQWlLLGtCQUFBLENBQU1HLGVBQWU7TUFBQztJQUVuQyxLQUFLM0ssK0RBQVU7TUFDWCxPQUFBb0ssYUFBQSxDQUFBQSxhQUFBLEtBQ09sRixLQUFLO1FBQ1JnRixVQUFVLEVBQUUsS0FBSztRQUNqQkMsYUFBYSxFQUFFLEtBQUs7UUFDcEIxSSxNQUFNLEVBQUU0RixNQUFNLENBQUNwRztNQUFHO0lBRTFCLEtBQUtoQixpRUFBWTtNQUNiLE9BQUFtSyxhQUFBLENBQUFBLGFBQUEsS0FDT2xGLEtBQUs7UUFDUi9ELFFBQVEsRUFBRWtHLE1BQU0sQ0FBQ2xHO01BQVE7SUFFakM7TUFDSSxPQUFPK0QsS0FBSztFQUNwQjtBQUVKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdpRDtBQUNuQjtBQUNlO0FBRTlDLElBQUkxQyxLQUFLLEdBQUdvSSxrREFBVyxDQUFDRyw4REFBUSxFQUFFRixzREFBZSxDQUFDQyxtREFBSyxDQUFDLENBQUM7QUFFekQsaUVBQWV0SSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvYWN0aW9ucy9jb252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvTGVmdC9Db252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9MZWZ0L0xlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L0lucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L1JpZ2h0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29uc3RhbnRzL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL3JlZHVjZXJzL2NvbnZlcnNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEdFVF9DT05WRVJTQVRJT05TLFxuICAgIFJFQ0lFVkVfQ09OVkVSU0FUSU9OUyxcbiAgICBHRVRfTUVTU0FHRVMsXG4gICAgUkVDSUVWRV9NRVNTQUdFUyxcbiAgICBBRERfTUVTU0FHRSxcbiAgICBQT1NUX01FU1NBR0UsXG4gICAgU0VUX0hVQlVSTCwgU0VUX1VTRVJOQU1FLCBTRVRfTEFTVF9NRVNTQUdFXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RDb252ZXJzYXRpb25zID0gKCkgPT4gKHtcbiAgICB0eXBlOiBHRVRfQ09OVkVSU0FUSU9OUyxcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZUNvbnZlcnNhdGlvbnMgPSAoanNvbikgPT4ge1xuICAgIHJldHVybiAoe1xuICAgICAgICB0eXBlOiBSRUNJRVZFX0NPTlZFUlNBVElPTlMsXG4gICAgICAgIGl0ZW1zOiBqc29uLFxuICAgIH0pXG59O1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdE1lc3NhZ2VzID0gKGlkKSA9PiAoe1xuICAgIHR5cGU6IEdFVF9NRVNTQUdFUyxcbiAgICBjb252ZXJzYXRpb25JZDogaWRcbn0pO1xuXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1lc3NhZ2VzID0gKGpzb24sIGlkKSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIHR5cGU6IFJFQ0lFVkVfTUVTU0FHRVMsXG4gICAgICAgIG1lc3NhZ2VzOiBqc29uLFxuICAgICAgICBjb252ZXJzYXRpb25JZDogaWRcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0TWVzc2FnZSA9IChqc29uLCBpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9NRVNTQUdFLFxuICAgICAgICBtZXNzYWdlOiBqc29uLFxuICAgICAgICBjb252ZXJzYXRpb25JZDogaWRcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TGFzdE1lc3NhZ2UgPSAobWVzc2FnZSwgY29udmVyc2F0aW9uSWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfTEFTVF9NRVNTQUdFLFxuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBjb252ZXJzYXRpb25JZFxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZXRIdWJ1cmwgPSAodXJsKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX0hVQlVSTCxcbiAgICAgICAgdXJsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRVc2VybmFtZSA9ICh1c2VybmFtZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFVF9VU0VSTkFNRSxcbiAgICAgICAgdXNlcm5hbWVcbiAgICB9XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb252ZXJzYXRpb25zID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDb252ZXJzYXRpb25zKCkpO1xuICAgIHJldHVybiBmZXRjaChgL2NvbnZlcnNhdGlvbnMvYClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETzogc2V0IHRoZSBIVUIgVVJMIHJpZ2h0IGhlcmVcbiAgICAgICAgICAgIGNvbnN0IGh1YlVybCA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMaW5rJykubWF0Y2goLzwoW14+XSspPjtcXHMrcmVsPSg/Om1lcmN1cmV8XCJbXlwiXSptZXJjdXJlW15cIl0qXCIpLylbMV1cbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEh1YnVybChodWJVcmwpKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2gocmVjZWl2ZUNvbnZlcnNhdGlvbnMoanNvbikpXG4gICAgICAgIH0pXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNZXNzYWdlcyA9IChpZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RNZXNzYWdlcyhpZCkpO1xuICAgIHJldHVybiBmZXRjaChgL21lc3NhZ2VzLyR7aWR9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChyZWNlaXZlTWVzc2FnZXMoanNvbiwgaWQpKVxuICAgICAgICB9KVxufTtcblxuXG5leHBvcnQgY29uc3QgYWRkTWVzc2FnZSA9IChjb250ZW50LCBjb252ZXJzYXRpb25JZCkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpO1xuICAgIHJldHVybiBmZXRjaChgL21lc3NhZ2VzLyR7Y29udmVyc2F0aW9uSWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMYXN0TWVzc2FnZShqc29uLCBjb252ZXJzYXRpb25JZCkpXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2gocG9zdE1lc3NhZ2UoanNvbiwgY29udmVyc2F0aW9uSWQpKVxuICAgICAgICB9KVxufTsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtNZW1vcnlSb3V0ZXJ9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuL2FjdGlvbnMvY29udmVyc2F0aW9uJ1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuXG5zdG9yZS5kaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZXRVc2VybmFtZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuZGF0YXNldC51c2VybmFtZSkpO1xuXG5SZWFjdERPTS5yZW5kZXIoKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8TWVtb3J5Um91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvTWVtb3J5Um91dGVyPlxuICAgIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlLCBTd2l0Y2h9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgTGVmdCBmcm9tIFwiLi9MZWZ0L0xlZnRcIjtcbmltcG9ydCBSaWdodCBmcm9tIFwiLi9SaWdodC9SaWdodFwiO1xuaW1wb3J0IEJsYW5rIGZyb20gXCIuL1JpZ2h0L0JsYW5rXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZXNzYWdlLWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGVmdC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0JsYW5rfSBleGFjdCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udmVyc2F0aW9uLzppZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXtwcm9wcyA9PiA8UmlnaHQgey4uLnByb3BzfSBrZXk9e3Byb3BzLm1hdGNoLnBhcmFtcy5pZH0+PC9SaWdodD4gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuXG5jbGFzcyBDb252ZXJzYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIHRvPXtcIi9jb252ZXJzYXRpb24vXCIgKyB0aGlzLnByb3BzLmNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZH0gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWVoZWRpaHRtbC5jb20vY2hhdGJveC9hc3NldHMvaW1nL3VzZXIucG5nXCIgYWx0PVwidXNlclwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMSBtcy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5jb252ZXJzYXRpb24udXNlcm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuY29udmVyc2F0aW9uLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udmVyc2F0aW9uIGZyb20gXCIuL0NvbnZlcnNhdGlvblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9jb252ZXJzYXRpb24nXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmNsYXNzIExlZnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBfdCA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDb252ZXJzYXRpb25zKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHRoaXMucHJvcHMuaHViVXJsKTtcbiAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCBgL2NvbnZlcnNhdGlvbnMvJHt0aGlzLnByb3BzLnVzZXJuYW1lfWApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBfdC5wcm9wcy5zZXRMYXN0TWVzc2FnZShkYXRhLCBkYXRhLmNvbnZlcnNhdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0bGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q29udmVyc2F0aW9uPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWxpc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJteVRhYkNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgYWN0aXZlIHNob3dcIiBpZD1cImhvbWVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJPcGVuLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXRlbXMgIT0gdW5kZWZpbmVkID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNvbnZlcnNhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udmVyc2F0aW9uIGNvbnZlcnNhdGlvbj17Y29udmVyc2F0aW9ufSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgIH1cbn1cblxuICAgICAgICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25DcmVhdG9ycykoTGVmdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBCbGFuayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IHB4LTBcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ319PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsYW5rOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29udGVudDogJydcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSB0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRNZXNzYWdlKHRoaXMuc3RhdGUuY29udGVudCwgdGhpcy5wcm9wcy5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb250ZW50OiAnJ30pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCIgYXJpYS1kZXNjcmliZWRieT1cImJ1dHRvbi1hZGRvbjJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnNlbmRNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGFwZXItcGxhbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbkNyZWF0b3JzKShJbnB1dCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaW1nID0gYGA7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5tZXNzYWdlLm1pbmUpIHtcbiAgICAgICAgICAgIGltZyA9IDxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWhtZC9pbWFnZS91cGxvYWQvdjE1NjQ5NjAzOTUvYXZhdGFyX3VzYWU3ei5zdmdcIiBhbHQ9XCJ1c2VyXCIgd2lkdGg9XCI1MFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCIgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5tZXNzYWdlLm1pbmUgPyBgc2VuZGVyYCA6IGByZXBhbHlgfWB9ID5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5tZXNzYWdlLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj57bmV3IERhdGUodGhpcy5wcm9wcy5tZXNzYWdlLkNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmNsYXNzIFJpZ2h0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYm9keVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBfY29udmVyc2F0aW9uSW5kZXg6IC0xLFxuICAgICAgICAgICAgZXZlbnRTb3VyY2U6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNjcm9sbCBkb3duIHRvIHRoZSBsYXRlc3QgbWVzc2FnZVxuICAgIHNjcm9sbERvd24oKSB7XG4gICAgICAgIHRoaXMuYm9keVJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IHRoaXMuYm9keVJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuX2NvbnZlcnNhdGlvbkluZGV4ICE9IC0xXG4gICAgICAgICAgICAmJiB0aGlzLnByb3BzLml0ZW1zW3RoaXMuc3RhdGUuX2NvbnZlcnNhdGlvbkluZGV4XS5tZXNzYWdlcz8ubGVuZ3RoXG4gICAgICAgICAgICAmJiBwcmV2UHJvcHMuaXRlbXNbdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXhdLm1lc3NhZ2VzPy5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBfdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICAgIGNvbnN0IF9jb252ZXJzYXRpb25JbmRleCA9IHRoaXMucHJvcHMuaXRlbXMuZmluZEluZGV4KFxuICAgICAgICAgICAgY29udmVyc2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkID09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgX2NvbnZlcnNhdGlvbkluZGV4OiBfY29udmVyc2F0aW9uSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLml0ZW1zW19jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoTWVzc2FnZXMoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50U291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHRoaXMucHJvcHMuaHViVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3RvcGljJywgYC9jb252ZXJzYXRpb25zLyR7dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90LnByb3BzLnBvc3RNZXNzYWdlKGRhdGEsIGRhdGEuY29udmVyc2F0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5ldmVudFNvdXJjZSBpbnN0YW5jZW9mIEV2ZW50U291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmV2ZW50U291cmNlLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZTogbnVsbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRib3ggc2hvd2JveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIiByZWY9e3RoaXMuYm9keVJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGF0LWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL21laGVkaWh0bWwuY29tL2NoYXRib3gvYXNzZXRzL2ltZy9hcnJvbGVmdHQuc3ZnXCIgYWx0PVwiaW1hZ2UgdGl0bGVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL21laGVkaWh0bWwuY29tL2NoYXRib3gvYXNzZXRzL2ltZy91c2VyLnBuZ1wiIGFsdD1cInVzZXIgaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1zLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk1laGVkaSBIYXNhbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxUaW1lciAvPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXggIT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5pdGVtcyAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXMgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kLWJ0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dGFjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL21laGVkaWh0bWwuY29tL2NoYXRib3gvYXNzZXRzL2ltZy91cGxvYWQuc3ZnXCIgYWx0PVwiaW1hZ2UgdGl0bGVcIi8+IGF0dGFjaGVkIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInVwbG9hZFwiIGlkPVwidXBsb2FkXCIgY2xhc3M9XCJ1cGxvYWQtYm94XCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgRmlsZVwiIGFyaWEtbGFiZWw9XCJVcGxvYWQgRmlsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbkNyZWF0b3JzKShSaWdodCk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUaW1lciA9ICgpID0+IHtcclxuICBjb25zdCBpbml0aWFsVGltZSA9ICAyICogNjA7IC8vIDEwIG1pbnV0ZXMgZW4gc2Vjb25kZXNcclxuICBjb25zdCBbcmVtYWluaW5nVGltZSwgc2V0UmVtYWluaW5nVGltZV0gPSB1c2VTdGF0ZShpbml0aWFsVGltZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaW50ZXJ2YWw7XHJcblxyXG4gICAgLy8gRMOpbWFycmUgbGUgY29tcHRlIMOgIHJlYm91cnNcclxuICAgIGNvbnN0IHN0YXJ0Q291bnRkb3duID0gKCkgPT4ge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRSZW1haW5pbmdUaW1lKHByZXZSZW1haW5pbmdUaW1lID0+IHtcclxuICAgICAgICAgIGlmIChwcmV2UmVtYWluaW5nVGltZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZSZW1haW5pbmdUaW1lIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyBBcnLDqnRlIGxlIGNvbXB0ZSDDoCByZWJvdXJzIGxvcnNxdWUgbGUgdGVtcHMgYXR0ZWludCAwXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAxMDAwKTsgLy8gTWV0dHJlIMOgIGpvdXIgbGUgdGVtcHMgdG91dGVzIGxlcyAxMDAwIG1zICgxIHNlY29uZGUpXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIETDqW1hcnJlciBsZSBjb21wdGUgw6AgcmVib3VycyBxdWFuZCBsZSBjb21wb3NhbnQgZXN0IG1vbnTDqVxyXG4gICAgc3RhcnRDb3VudGRvd24oKTtcclxuXHJcbiAgICAvLyBBcnLDqnRlciBsZSBjb21wdGUgw6AgcmVib3VycyBxdWFuZCBsZSBjb21wb3NhbnQgZXN0IGTDqW1vbnTDqVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gQ29udmVydGlyIGxlIHRlbXBzIGVuIG1pbnV0ZXMgZXQgc2Vjb25kZXMgcG91ciBsJ2FmZmljaGFnZVxyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJlbWFpbmluZ1RpbWUgLyA2MCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHJlbWFpbmluZ1RpbWUgJSA2MDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIEFmZmljaGVyIGxlIHRlbXBzIHJlc3RhbnQsIGV0IGxlIGxlIHRlbXBzID0gMCwgYWZmaWNoZXIgbGUgbWVzc2FnZVxyXG4gICAgLy8gXCJUZW1wcyDDqWNvdWzDqVwiXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cmVtYWluaW5nVGltZSA9PT0gMCA/IChcclxuICAgICAgICA8cD5UZW1wcyDDqWNvdWzDqSAhPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPlRlbXBzIHJlc3RhbnQ6IHttaW51dGVzfTp7c2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHN9PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX0NPTlZFUlNBVElPTlMgPSAnR0VUX0NPTlZFUlNBVElPTlMnO1xuZXhwb3J0IGNvbnN0IFJFQ0lFVkVfQ09OVkVSU0FUSU9OUyA9ICdSRUNJRVZFX0NPTlZFUlNBVElPTlMnO1xuZXhwb3J0IGNvbnN0IEdFVF9NRVNTQUdFUyA9ICdHRVRfTUVTU0FHRVMnO1xuZXhwb3J0IGNvbnN0IFJFQ0lFVkVfTUVTU0FHRVMgPSAnUkVDSUVWRV9NRVNTQUdFUyc7XG5leHBvcnQgY29uc3QgQUREX01FU1NBR0UgPSAnQUREX01FU1NBR0UnO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVTU0FHRSA9ICdQT1NUX01FU1NBR0UnO1xuZXhwb3J0IGNvbnN0IFNFVF9IVUJVUkwgPSAnU0VUX0hVQlVSTCc7XG5leHBvcnQgY29uc3QgU0VUX1VTRVJOQU1FID0gJ1NFVF9VU0VSTkFNRSc7XG5leHBvcnQgY29uc3QgU0VUX0xBU1RfTUVTU0FHRSA9ICdTRVRfTEFTVF9NRVNTQUdFJzsiLCJpbXBvcnQge1xuICAgIEdFVF9DT05WRVJTQVRJT05TLCBSRUNJRVZFX0NPTlZFUlNBVElPTlMsXG4gICAgR0VUX01FU1NBR0VTLCBSRUNJRVZFX01FU1NBR0VTLFxuICAgIFBPU1RfTUVTU0FHRSwgQUREX01FU1NBR0UsIFNFVF9IVUJVUkwsIFNFVF9VU0VSTkFNRSxcbiAgICBTRVRfTEFTVF9NRVNTQUdFXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBodWJVcmw6IG51bGwsXG4gICAgdXNlcm5hbWU6IG51bGxcbn0sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBHRVRfQ09OVkVSU0FUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBSRUNJRVZFX0NPTlZFUlNBVElPTlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgR0VUX01FU1NBR0VTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFJFQ0lFVkVfTUVTU0FHRVM6XG4gICAgICAgICAgICBjb25zdCBfbmV3Q29udmVyc2F0aW9ucyA9IHN0YXRlLml0ZW1zLm1hcCgoY29udmVyc2F0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZCA9PSBhY3Rpb24uY29udmVyc2F0aW9uSWRcbiAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBjb252ZXJzYXRpb24sIHttZXNzYWdlczogYWN0aW9uLm1lc3NhZ2VzfSlcbiAgICAgICAgICAgICAgICAgICAgOiBjb252ZXJzYXRpb25cbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5fbmV3Q29udmVyc2F0aW9uc11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSBBRERfTUVTU0FHRTpcbiAgICAgICAgICAgIGNvbnN0IF9uZXdJdGVtc0ZpbmFsID0gc3RhdGUuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmNvbnZlcnNhdGlvbklkID09IGFjdGlvbi5jb252ZXJzYXRpb25JZFxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7bWVzc2FnZXM6IFsuLi5pdGVtLm1lc3NhZ2VzLCBhY3Rpb24ubWVzc2FnZV19KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5fbmV3SXRlbXNGaW5hbF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0VUX0xBU1RfTUVTU0FHRTpcbiAgICAgICAgICAgIGNvbnN0IF9uZXdJdGVtc0ZpbmFsMiA9IHN0YXRlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jb252ZXJzYXRpb25JZCA9PSBhY3Rpb24uY29udmVyc2F0aW9uSWRcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbnRlbnQgPSBhY3Rpb24ubWVzc2FnZS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jcmVhdGVkQXQgPSBhY3Rpb24ubWVzc2FnZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5fbmV3SXRlbXNGaW5hbDJdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNFVF9IVUJVUkw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGh1YlVybDogYWN0aW9uLnVybFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTRVRfVVNFUk5BTUU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBhY3Rpb24udXNlcm5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvY29udmVyc2F0aW9uJ1xuXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sIm5hbWVzIjpbIkdFVF9DT05WRVJTQVRJT05TIiwiUkVDSUVWRV9DT05WRVJTQVRJT05TIiwiR0VUX01FU1NBR0VTIiwiUkVDSUVWRV9NRVNTQUdFUyIsIkFERF9NRVNTQUdFIiwiUE9TVF9NRVNTQUdFIiwiU0VUX0hVQlVSTCIsIlNFVF9VU0VSTkFNRSIsIlNFVF9MQVNUX01FU1NBR0UiLCJyZXF1ZXN0Q29udmVyc2F0aW9ucyIsInR5cGUiLCJyZWNlaXZlQ29udmVyc2F0aW9ucyIsImpzb24iLCJpdGVtcyIsInJlcXVlc3RNZXNzYWdlcyIsImlkIiwiY29udmVyc2F0aW9uSWQiLCJyZWNlaXZlTWVzc2FnZXMiLCJtZXNzYWdlcyIsInBvc3RNZXNzYWdlIiwibWVzc2FnZSIsInNldExhc3RNZXNzYWdlIiwic2V0SHVidXJsIiwidXJsIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZSIsImZldGNoQ29udmVyc2F0aW9ucyIsImRpc3BhdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJodWJVcmwiLCJoZWFkZXJzIiwiZ2V0IiwibWF0Y2giLCJmZXRjaE1lc3NhZ2VzIiwiY29uY2F0IiwiYWRkTWVzc2FnZSIsImNvbnRlbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsIlJlYWN0RE9NIiwiUmVhY3QiLCJzdG9yZSIsIlByb3ZpZGVyIiwiTWVtb3J5Um91dGVyIiwiYWN0aW9uQ3JlYXRvcnMiLCJBcHAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiUm91dGUiLCJTd2l0Y2giLCJMZWZ0IiwiUmlnaHQiLCJCbGFuayIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY2xhc3NOYW1lIiwicGF0aCIsImNvbXBvbmVudCIsImV4YWN0IiwicHJvcHMiLCJfZXh0ZW5kcyIsInBhcmFtcyIsIkNvbXBvbmVudCIsIkxpbmsiLCJDb252ZXJzYXRpb24iLCJ0byIsImNvbnZlcnNhdGlvbiIsInNyYyIsImFsdCIsImNvbm5lY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNhbGwiLCJjb21wb25lbnREaWRNb3VudCIsIl90aGlzIiwiX3QiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJldmVudFNvdXJjZSIsIkV2ZW50U291cmNlIiwid2l0aENyZWRlbnRpYWxzIiwib25tZXNzYWdlIiwiZXZlbnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicm9sZSIsInVuZGVmaW5lZCIsInNvcnQiLCJhIiwiYiIsImNyZWF0ZWRBdCIsIm1hcCIsImluZGV4Iiwic3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsIklucHV0IiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZW5kTWVzc2FnZSIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJhY3Rpb24iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25DbGljayIsIk1lc3NhZ2UiLCJpbWciLCJtaW5lIiwiRGF0ZSIsIkNyZWF0ZWRBdCIsInRvTG9jYWxlU3RyaW5nIiwiVGltZXIiLCJib2R5UmVmIiwiY3JlYXRlUmVmIiwiX2NvbnZlcnNhdGlvbkluZGV4Iiwic2Nyb2xsRG93biIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJfdGhpcyRwcm9wcyRpdGVtcyR0aGkiLCJfcHJldlByb3BzJGl0ZW1zJHRoaXMiLCJsZW5ndGgiLCJmaW5kSW5kZXgiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsb3NlIiwicmVmIiwibmFtZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW5pdGlhbFRpbWUiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJyZW1haW5pbmdUaW1lIiwic2V0UmVtYWluaW5nVGltZSIsImludGVydmFsIiwic3RhcnRDb3VudGRvd24iLCJzZXRJbnRlcnZhbCIsInByZXZSZW1haW5pbmdUaW1lIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiaXNGZXRjaGluZyIsImRpZEludmFsaWRhdGUiLCJfb2JqZWN0U3ByZWFkIiwiX25ld0NvbnZlcnNhdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfbmV3SXRlbXNGaW5hbCIsIml0ZW0iLCJfbmV3SXRlbXNGaW5hbDIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicmVkdWNlcnMiXSwic291cmNlUm9vdCI6IiJ9