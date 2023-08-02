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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h3", null, "Mehedi Hasan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("p", null, "front end developer")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-b7c506","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-1bb224"], () => (__webpack_exec__("./assets/chat/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDLENBQUMsQ0FBQyxFQUFFRyxJQUFJLENBQUM7TUFDakMsQ0FBQyxDQUFDO01BQ0YsT0FBQU4sYUFBQSxDQUFBQSxhQUFBLEtBQ09oRSxLQUFLO1FBQ1I4RCxVQUFVLEVBQUUsS0FBSztRQUNqQkMsYUFBYSxFQUFFLEtBQUs7UUFDcEIxSSxLQUFLLEVBQUErSSxrQkFBQSxDQUFNRyxlQUFlO01BQUM7SUFFbkMsS0FBS3pKLCtEQUFVO01BQ1gsT0FBQWtKLGFBQUEsQ0FBQUEsYUFBQSxLQUNPaEUsS0FBSztRQUNSOEQsVUFBVSxFQUFFLEtBQUs7UUFDakJDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCeEgsTUFBTSxFQUFFNEYsTUFBTSxDQUFDcEc7TUFBRztJQUUxQixLQUFLaEIsaUVBQVk7TUFDYixPQUFBaUosYUFBQSxDQUFBQSxhQUFBLEtBQ09oRSxLQUFLO1FBQ1IvRCxRQUFRLEVBQUVrRyxNQUFNLENBQUNsRztNQUFRO0lBRWpDO01BQ0ksT0FBTytELEtBQUs7RUFDcEI7QUFFSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHaUQ7QUFDbkI7QUFDZTtBQUU5QyxJQUFJMUMsS0FBSyxHQUFHa0gsa0RBQVcsQ0FBQ0csOERBQVEsRUFBRUYsc0RBQWUsQ0FBQ0MsbURBQUssQ0FBQyxDQUFDO0FBRXpELGlFQUFlcEgsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2FjdGlvbnMvY29udmVyc2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL0xlZnQvQ29udmVyc2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvQmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvcmVkdWNlcnMvY29udmVyc2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL3N0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgR0VUX0NPTlZFUlNBVElPTlMsXG4gICAgUkVDSUVWRV9DT05WRVJTQVRJT05TLFxuICAgIEdFVF9NRVNTQUdFUyxcbiAgICBSRUNJRVZFX01FU1NBR0VTLFxuICAgIEFERF9NRVNTQUdFLFxuICAgIFBPU1RfTUVTU0FHRSxcbiAgICBTRVRfSFVCVVJMLCBTRVRfVVNFUk5BTUUsIFNFVF9MQVNUX01FU1NBR0Vcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdENvbnZlcnNhdGlvbnMgPSAoKSA9PiAoe1xuICAgIHR5cGU6IEdFVF9DT05WRVJTQVRJT05TLFxufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlQ29udmVyc2F0aW9ucyA9IChqc29uKSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIHR5cGU6IFJFQ0lFVkVfQ09OVkVSU0FUSU9OUyxcbiAgICAgICAgaXRlbXM6IGpzb24sXG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TWVzc2FnZXMgPSAoaWQpID0+ICh7XG4gICAgdHlwZTogR0VUX01FU1NBR0VTLFxuICAgIGNvbnZlcnNhdGlvbklkOiBpZFxufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlTWVzc2FnZXMgPSAoanNvbiwgaWQpID0+IHtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgdHlwZTogUkVDSUVWRV9NRVNTQUdFUyxcbiAgICAgICAgbWVzc2FnZXM6IGpzb24sXG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBpZFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlID0gKGpzb24sIGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX01FU1NBR0UsXG4gICAgICAgIG1lc3NhZ2U6IGpzb24sXG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBpZFxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMYXN0TWVzc2FnZSA9IChtZXNzYWdlLCBjb252ZXJzYXRpb25JZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFVF9MQVNUX01FU1NBR0UsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGNvbnZlcnNhdGlvbklkXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNldEh1YnVybCA9ICh1cmwpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfSFVCVVJMLFxuICAgICAgICB1cmxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFVzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX1VTRVJOQU1FLFxuICAgICAgICB1c2VybmFtZVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnZlcnNhdGlvbnMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENvbnZlcnNhdGlvbnMoKSk7XG4gICAgcmV0dXJuIGZldGNoKGAvY29udmVyc2F0aW9ucy9gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzZXQgdGhlIEhVQiBVUkwgcmlnaHQgaGVyZVxuICAgICAgICAgICAgY29uc3QgaHViVXJsID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xpbmsnKS5tYXRjaCgvPChbXj5dKyk+O1xccytyZWw9KD86bWVyY3VyZXxcIlteXCJdKm1lcmN1cmVbXlwiXSpcIikvKVsxXVxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SHVidXJsKGh1YlVybCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChyZWNlaXZlQ29udmVyc2F0aW9ucyhqc29uKSlcbiAgICAgICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdE1lc3NhZ2VzKGlkKSk7XG4gICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtpZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHJlY2VpdmVNZXNzYWdlcyhqc29uLCBpZCkpXG4gICAgICAgIH0pXG59O1xuXG5cbmV4cG9ydCBjb25zdCBhZGRNZXNzYWdlID0gKGNvbnRlbnQsIGNvbnZlcnNhdGlvbklkKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XG4gICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExhc3RNZXNzYWdlKGpzb24sIGNvbnZlcnNhdGlvbklkKSlcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChwb3N0TWVzc2FnZShqc29uLCBjb252ZXJzYXRpb25JZCkpXG4gICAgICAgIH0pXG59OyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge01lbW9yeVJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb252ZXJzYXRpb24nXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbnN0b3JlLmRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNldFVzZXJuYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5kYXRhc2V0LnVzZXJuYW1lKSk7XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxNZW1vcnlSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9NZW1vcnlSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBMZWZ0IGZyb20gXCIuL0xlZnQvTGVmdFwiO1xuaW1wb3J0IFJpZ2h0IGZyb20gXCIuL1JpZ2h0L1JpZ2h0XCI7XG5pbXBvcnQgQmxhbmsgZnJvbSBcIi4vUmlnaHQvQmxhbmtcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17Qmxhbmt9IGV4YWN0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb252ZXJzYXRpb24vOmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3Byb3BzID0+IDxSaWdodCB7Li4ucHJvcHN9IGtleT17cHJvcHMubWF0Y2gucGFyYW1zLmlkfT48L1JpZ2h0PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNsYXNzIENvbnZlcnNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsgdG89e1wiL2NvbnZlcnNhdGlvbi9cIiArIHRoaXMucHJvcHMuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkfSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvdXNlci5wbmdcIiBhbHQ9XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY3RpdmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1zLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbnZlcnNhdGlvbi51c2VybmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5jb252ZXJzYXRpb24uY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb252ZXJzYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb252ZXJzYXRpb24gZnJvbSBcIi4vQ29udmVyc2F0aW9uXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgTGVmdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IF90ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbnZlcnNhdGlvbnMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodGhpcy5wcm9wcy5odWJVcmwpO1xuICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0b3BpYycsIGAvY29udmVyc2F0aW9ucy8ke3RoaXMucHJvcHMudXNlcm5hbWV9YCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIF90LnByb3BzLnNldExhc3RNZXNzYWdlKGRhdGEsIGRhdGEuY29udmVyc2F0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRsaXN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Db252ZXJzYXRpb248L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtbGlzdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm15VGFiQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgZmFkZSBhY3RpdmUgc2hvd1wiIGlkPVwiaG9tZVwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cIk9wZW4tdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtcyAhPSB1bmRlZmluZWQgP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuY3JlYXRlZEF0IDwgYi5jcmVhdGVkQXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoY29udmVyc2F0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb252ZXJzYXRpb24gY29udmVyc2F0aW9uPXtjb252ZXJzYXRpb259IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG4gICAgICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbkNyZWF0b3JzKShMZWZ0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIEJsYW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgcHgtMFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfX0+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxhbms7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uL2FjdGlvbnMvY29udmVyc2F0aW9uJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG59O1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSA9IHRoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLmFkZE1lc3NhZ2UodGhpcy5zdGF0ZS5jb250ZW50LCB0aGlzLnByb3BzLmlkKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbnRlbnQ6ICcnfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICB7Y29udGVudDogZXZlbnQudGFyZ2V0LnZhbHVlfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2VcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiYnV0dG9uLWFkZG9uMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc2VuZE1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wYXBlci1wbGFuZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9uQ3JlYXRvcnMpKElucHV0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBpbWcgPSBgYDtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLm1lc3NhZ2UubWluZSkge1xuICAgICAgICAgICAgaW1nID0gPGltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9taG1kL2ltYWdlL3VwbG9hZC92MTU2NDk2MDM5NS9hdmF0YXJfdXNhZTd6LnN2Z1wiIGFsdD1cInVzZXJcIiB3aWR0aD1cIjUwXCIgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGVcIiAvPjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLm1lc3NhZ2UubWluZSA/IGBzZW5kZXJgIDogYHJlcGFseWB9YH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLm1lc3NhZ2UuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntuZXcgRGF0ZSh0aGlzLnByb3BzLm1lc3NhZ2UuQ3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uL2FjdGlvbnMvY29udmVyc2F0aW9uJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2VcIjtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgUmlnaHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ib2R5UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIF9jb252ZXJzYXRpb25JbmRleDogLTEsXG4gICAgICAgICAgICBldmVudFNvdXJjZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2Nyb2xsIGRvd24gdG8gdGhlIGxhdGVzdCBtZXNzYWdlXG4gICAgc2Nyb2xsRG93bigpIHtcbiAgICAgICAgdGhpcy5ib2R5UmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gdGhpcy5ib2R5UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXggIT0gLTFcbiAgICAgICAgICAgICYmIHRoaXMucHJvcHMuaXRlbXNbdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXhdLm1lc3NhZ2VzPy5sZW5ndGhcbiAgICAgICAgICAgICYmIHByZXZQcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXM/Lmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IF90ID0gdGhpcztcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZDtcbiAgICAgICAgY29uc3QgX2NvbnZlcnNhdGlvbkluZGV4ID0gdGhpcy5wcm9wcy5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgICAgICBjb252ZXJzYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSWQgPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBfY29udmVyc2F0aW9uSW5kZXg6IF9jb252ZXJzYXRpb25JbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXRlbXNbX2NvbnZlcnNhdGlvbkluZGV4XS5tZXNzYWdlcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hNZXNzYWdlcyhpZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXZlbnRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodGhpcy5wcm9wcy5odWJVcmwpO1xuICAgICAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCBgL2NvbnZlcnNhdGlvbnMvJHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgX3QucHJvcHMucG9zdE1lc3NhZ2UoZGF0YSwgZGF0YS5jb252ZXJzYXRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50U291cmNlIGluc3RhbmNlb2YgRXZlbnRTb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZXZlbnRTb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlOiBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdGJveCBzaG93Ym94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiIHJlZj17dGhpcy5ib2R5UmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXQtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vbWVoZWRpaHRtbC5jb20vY2hhdGJveC9hc3NldHMvaW1nL2Fycm9sZWZ0dC5zdmdcIiBhbHQ9XCJpbWFnZSB0aXRsZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vbWVoZWRpaHRtbC5jb20vY2hhdGJveC9hc3NldHMvaW1nL3VzZXIucG5nXCIgYWx0PVwidXNlciBpbWdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTEgbXMtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWVoZWRpIEhhc2FuPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ZnJvbnQgZW5kIGRldmVsb3BlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXggIT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5pdGVtcyAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXMgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZW5kLWJ0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dGFjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL21laGVkaWh0bWwuY29tL2NoYXRib3gvYXNzZXRzL2ltZy91cGxvYWQuc3ZnXCIgYWx0PVwiaW1hZ2UgdGl0bGVcIi8+IGF0dGFjaGVkIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInVwbG9hZFwiIGlkPVwidXBsb2FkXCIgY2xhc3M9XCJ1cGxvYWQtYm94XCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgRmlsZVwiIGFyaWEtbGFiZWw9XCJVcGxvYWQgRmlsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbkNyZWF0b3JzKShSaWdodCk7IiwiZXhwb3J0IGNvbnN0IEdFVF9DT05WRVJTQVRJT05TID0gJ0dFVF9DT05WRVJTQVRJT05TJztcbmV4cG9ydCBjb25zdCBSRUNJRVZFX0NPTlZFUlNBVElPTlMgPSAnUkVDSUVWRV9DT05WRVJTQVRJT05TJztcbmV4cG9ydCBjb25zdCBHRVRfTUVTU0FHRVMgPSAnR0VUX01FU1NBR0VTJztcbmV4cG9ydCBjb25zdCBSRUNJRVZFX01FU1NBR0VTID0gJ1JFQ0lFVkVfTUVTU0FHRVMnO1xuZXhwb3J0IGNvbnN0IEFERF9NRVNTQUdFID0gJ0FERF9NRVNTQUdFJztcbmV4cG9ydCBjb25zdCBQT1NUX01FU1NBR0UgPSAnUE9TVF9NRVNTQUdFJztcbmV4cG9ydCBjb25zdCBTRVRfSFVCVVJMID0gJ1NFVF9IVUJVUkwnO1xuZXhwb3J0IGNvbnN0IFNFVF9VU0VSTkFNRSA9ICdTRVRfVVNFUk5BTUUnO1xuZXhwb3J0IGNvbnN0IFNFVF9MQVNUX01FU1NBR0UgPSAnU0VUX0xBU1RfTUVTU0FHRSc7IiwiaW1wb3J0IHtcbiAgICBHRVRfQ09OVkVSU0FUSU9OUywgUkVDSUVWRV9DT05WRVJTQVRJT05TLFxuICAgIEdFVF9NRVNTQUdFUywgUkVDSUVWRV9NRVNTQUdFUyxcbiAgICBQT1NUX01FU1NBR0UsIEFERF9NRVNTQUdFLCBTRVRfSFVCVVJMLCBTRVRfVVNFUk5BTUUsXG4gICAgU0VUX0xBU1RfTUVTU0FHRVxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICBpdGVtczogW10sXG4gICAgaHViVXJsOiBudWxsLFxuICAgIHVzZXJuYW1lOiBudWxsXG59LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgR0VUX0NPTlZFUlNBVElPTlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgUkVDSUVWRV9DT05WRVJTQVRJT05TOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEdFVF9NRVNTQUdFUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBSRUNJRVZFX01FU1NBR0VTOlxuICAgICAgICAgICAgY29uc3QgX25ld0NvbnZlcnNhdGlvbnMgPSBzdGF0ZS5pdGVtcy5tYXAoKGNvbnZlcnNhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSWQgPT0gYWN0aW9uLmNvbnZlcnNhdGlvbklkXG4gICAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgY29udmVyc2F0aW9uLCB7bWVzc2FnZXM6IGFjdGlvbi5tZXNzYWdlc30pXG4gICAgICAgICAgICAgICAgICAgIDogY29udmVyc2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4uX25ld0NvbnZlcnNhdGlvbnNdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgQUREX01FU1NBR0U6XG4gICAgICAgICAgICBjb25zdCBfbmV3SXRlbXNGaW5hbCA9IHN0YXRlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jb252ZXJzYXRpb25JZCA9PSBhY3Rpb24uY29udmVyc2F0aW9uSWRcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge21lc3NhZ2VzOiBbLi4uaXRlbS5tZXNzYWdlcywgYWN0aW9uLm1lc3NhZ2VdfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4uX25ld0l0ZW1zRmluYWxdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNFVF9MQVNUX01FU1NBR0U6XG4gICAgICAgICAgICBjb25zdCBfbmV3SXRlbXNGaW5hbDIgPSBzdGF0ZS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY29udmVyc2F0aW9uSWQgPT0gYWN0aW9uLmNvbnZlcnNhdGlvbklkXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb250ZW50ID0gYWN0aW9uLm1lc3NhZ2UuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3JlYXRlZEF0ID0gYWN0aW9uLm1lc3NhZ2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4uX25ld0l0ZW1zRmluYWwyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTRVRfSFVCVVJMOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBodWJVcmw6IGFjdGlvbi51cmxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0VUX1VTRVJOQU1FOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogYWN0aW9uLnVzZXJuYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2NvbnZlcnNhdGlvbidcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJuYW1lcyI6WyJHRVRfQ09OVkVSU0FUSU9OUyIsIlJFQ0lFVkVfQ09OVkVSU0FUSU9OUyIsIkdFVF9NRVNTQUdFUyIsIlJFQ0lFVkVfTUVTU0FHRVMiLCJBRERfTUVTU0FHRSIsIlBPU1RfTUVTU0FHRSIsIlNFVF9IVUJVUkwiLCJTRVRfVVNFUk5BTUUiLCJTRVRfTEFTVF9NRVNTQUdFIiwicmVxdWVzdENvbnZlcnNhdGlvbnMiLCJ0eXBlIiwicmVjZWl2ZUNvbnZlcnNhdGlvbnMiLCJqc29uIiwiaXRlbXMiLCJyZXF1ZXN0TWVzc2FnZXMiLCJpZCIsImNvbnZlcnNhdGlvbklkIiwicmVjZWl2ZU1lc3NhZ2VzIiwibWVzc2FnZXMiLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2UiLCJzZXRMYXN0TWVzc2FnZSIsInNldEh1YnVybCIsInVybCIsInNldFVzZXJuYW1lIiwidXNlcm5hbWUiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJkaXNwYXRjaCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiaHViVXJsIiwiaGVhZGVycyIsImdldCIsIm1hdGNoIiwiZmV0Y2hNZXNzYWdlcyIsImNvbmNhdCIsImFkZE1lc3NhZ2UiLCJjb250ZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsImJvZHkiLCJSZWFjdERPTSIsIlJlYWN0Iiwic3RvcmUiLCJQcm92aWRlciIsIk1lbW9yeVJvdXRlciIsImFjdGlvbkNyZWF0b3JzIiwiQXBwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJvdXRlIiwiU3dpdGNoIiwiTGVmdCIsIlJpZ2h0IiwiQmxhbmsiLCJfUmVhY3QkQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInBhdGgiLCJjb21wb25lbnQiLCJleGFjdCIsInByb3BzIiwiX2V4dGVuZHMiLCJwYXJhbXMiLCJDb21wb25lbnQiLCJMaW5rIiwiQ29udmVyc2F0aW9uIiwidG8iLCJjb252ZXJzYXRpb24iLCJzcmMiLCJhbHQiLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjYWxsIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpcyIsIl90IiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZXZlbnRTb3VyY2UiLCJFdmVudFNvdXJjZSIsIndpdGhDcmVkZW50aWFscyIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInJvbGUiLCJ1bmRlZmluZWQiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJtYXAiLCJpbmRleCIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbnB1dCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VuZE1lc3NhZ2UiLCJfdGhpczIiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwiYWN0aW9uIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJNZXNzYWdlIiwiaW1nIiwibWluZSIsIkRhdGUiLCJDcmVhdGVkQXQiLCJ0b0xvY2FsZVN0cmluZyIsImJvZHlSZWYiLCJjcmVhdGVSZWYiLCJfY29udmVyc2F0aW9uSW5kZXgiLCJzY3JvbGxEb3duIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIl90aGlzJHByb3BzJGl0ZW1zJHRoaSIsIl9wcmV2UHJvcHMkaXRlbXMkdGhpcyIsImxlbmd0aCIsImZpbmRJbmRleCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xvc2UiLCJyZWYiLCJuYW1lIiwiaXNGZXRjaGluZyIsImRpZEludmFsaWRhdGUiLCJfb2JqZWN0U3ByZWFkIiwiX25ld0NvbnZlcnNhdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJfbmV3SXRlbXNGaW5hbCIsIml0ZW0iLCJfbmV3SXRlbXNGaW5hbDIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwicmVkdWNlcnMiXSwic291cmNlUm9vdCI6IiJ9