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







_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(_actions_conversation__WEBPACK_IMPORTED_MODULE_4__.setUsername(document.querySelector('#LiveChat').dataset.username));
react_dom__WEBPACK_IMPORTED_MODULE_0__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.MemoryRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('LiveChat'));

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
        src: "/assets/img/profile/".concat(this.props.conversation.imageName),
        alt: "",
        height: "45",
        width: "45",
        className: "img-fluid rounded-circle"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("span", {
        className: "active"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        className: "flex-grow-1 ms-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("h3", null, this.props.conversation.Pseudo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", null, this.props.conversation.content)));
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
        className: "msg-search"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("input", {
        type: "text",
        className: "form-control",
        id: "inlineFormInputGroup",
        placeholder: "Search",
        "aria-label": "search"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("a", {
        className: "add",
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("img", {
        className: "img-fluid",
        src: "https://mehedihtml.com/chatbox/assets/img/add.svg",
        alt: "add"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("ul", {
        className: "nav nav-tabs",
        id: "myTab",
        role: "tablist"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("button", {
        className: "nav-link active",
        id: "Open-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#Open",
        type: "button",
        role: "tab",
        "aria-controls": "Open",
        "aria-selected": "true"
      }, "Open")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("li", {
        className: "nav-item",
        role: "presentation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("button", {
        className: "nav-link",
        id: "Closed-tab",
        "data-bs-toggle": "tab",
        "data-bs-target": "#Closed",
        type: "button",
        role: "tab",
        "aria-controls": "Closed",
        "aria-selected": "false"
      }, "Closed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24__.createElement("div", {
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
        return a.CreatedAt < b.CreatedAt;
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
/* harmony import */ var _Timer_Timer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Timer/Timer */ "./assets/chat/js/components/Right/Timer/Timer.js");
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
              // debugger
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
        className: "flex-shrink-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("img", {
        className: "img-fluid",
        src: "https://mehedihtml.com/chatbox/assets/img/user.png",
        alt: "user img"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "flex-grow-1 ms-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h3", null, "Consultation avec: ", this.props.items[0].Pseudo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Timer_Timer__WEBPACK_IMPORTED_MODULE_31__["default"], {
        solde: this.props.items[0].SoldeCompteClient,
        coutchat: this.props.items[0].TarifChat
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
        className: "send-btns"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "attach"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "button-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("span", {
        className: "label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("img", {
        className: "img-fluid",
        src: "https://mehedihtml.com/chatbox/assets/img/upload.svg",
        alt: "image title"
      }), " attached file"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("input", {
        type: "file",
        name: "upload",
        id: "upload",
        className: "upload-box",
        placeholder: "Upload File",
        "aria-label": "Upload File"
      }))))))));
    }
  }]);
  return Right;
}(react__WEBPACK_IMPORTED_MODULE_26__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_27__.connect)(mapStateToProps, _actions_conversation__WEBPACK_IMPORTED_MODULE_28__)(Right));

/***/ }),

/***/ "./assets/chat/js/components/Right/Timer/Timer.js":
/*!********************************************************!*\
  !*** ./assets/chat/js/components/Right/Timer/Timer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

var Timer = /*#__PURE__*/function (_React$Component) {
  _inherits(Timer, _React$Component);
  var _super = _createSuper(Timer);
  function Timer(props) {
    var _this;
    _classCallCheck(this, Timer);
    _this = _super.call(this, props);
    var cout = props.coutchat;
    var solde = props.solde;

    // Je vais calculer le cout de la consultation en seconde
    var CoutMinutes = solde / cout;
    var CoutSecondes = CoutMinutes * 60;
    var CoutSeconde = CoutSecondes.toFixed(0);
    _this.state = {
      remainingTime: CoutSeconde
    };
    return _this;
  }
  _createClass(Timer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var interval;

      // Démarre le compte à rebours
      var startCountdown = function startCountdown() {
        interval = setInterval(function () {
          _this2.setState(function (prevState) {
            if (prevState.remainingTime > 0) {
              return {
                remainingTime: prevState.remainingTime - 1
              };
            } else {
              clearInterval(interval); // Arrête le compte à rebours lorsque le temps atteint 0
              return {
                remainingTime: 0
              };
            }
          });
        }, 1000); // Mettre à jour le temps toutes les 1000 ms (1 seconde)
      };

      // Démarrer le compte à rebours quand le composant est monté
      startCountdown();

      // Arrêter le compte à rebours quand le composant est démonté
      this.interval = interval;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }

    // Convertir le temps en minutes et secondes pour l'affichage
  }, {
    key: "render",
    value: function render() {
      var minutes = Math.floor(this.state.remainingTime / 60);
      var seconds = this.state.remainingTime % 60;
      return (
        /*#__PURE__*/
        // Afficher le temps restant, et le le temps = 0, afficher le message
        // "Temps écoulé"
        react__WEBPACK_IMPORTED_MODULE_21__.createElement("div", null, this.state.remainingTime === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("p", null, "Temps \xE9coul\xE9 !") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21__.createElement("p", null, "Temps restant: ", minutes, ":", seconds < 10 ? "0".concat(seconds) : seconds))
      );
    }
  }]);
  return Timer;
}(react__WEBPACK_IMPORTED_MODULE_21__.Component);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-9b2981","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-fe07a2"], () => (__webpack_exec__("./assets/chat/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBR3RELE1BQU0sQ0FBQzVHLE9BQU8sQ0FBQ2tLLFNBQVMsRUFDekNOLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRyxJQUFJLENBQUMsSUFFekJKLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRyxJQUFJLENBQUM7TUFDakMsQ0FBQyxDQUFDO01BQ0YsT0FBQU4sYUFBQSxDQUFBQSxhQUFBLEtBQ09sRixLQUFLO1FBQ1JnRixVQUFVLEVBQUUsS0FBSztRQUNqQkMsYUFBYSxFQUFFLEtBQUs7UUFDcEJoSyxLQUFLLEVBQUFxSyxrQkFBQSxDQUFNRyxlQUFlO01BQUM7SUFFbkMsS0FBSy9LLCtEQUFVO01BQ1gsT0FBQXdLLGFBQUEsQ0FBQUEsYUFBQSxLQUNPbEYsS0FBSztRQUNSZ0YsVUFBVSxFQUFFLEtBQUs7UUFDakJDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCOUksTUFBTSxFQUFFaUcsTUFBTSxDQUFDekc7TUFBRztJQUUxQixLQUFLaEIsaUVBQVk7TUFDYixPQUFBdUssYUFBQSxDQUFBQSxhQUFBLEtBQ09sRixLQUFLO1FBQ1JuRSxRQUFRLEVBQUV1RyxNQUFNLENBQUN2RztNQUFRO0lBRWpDO01BQ0ksT0FBT21FLEtBQUs7RUFDcEI7QUFFSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHaUQ7QUFDbkI7QUFDZTtBQUU5QyxJQUFJOUMsS0FBSyxHQUFHeUksa0RBQVcsQ0FBQ0csOERBQVEsRUFBRUYsc0RBQWUsQ0FBQ0MsbURBQUssQ0FBQyxDQUFDO0FBRXpELGlFQUFlM0ksS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2FjdGlvbnMvY29udmVyc2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL0xlZnQvQ29udmVyc2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvQmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L1RpbWVyL1RpbWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbnN0YW50cy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9yZWR1Y2Vycy9jb252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvc3RvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBHRVRfQ09OVkVSU0FUSU9OUyxcbiAgICBSRUNJRVZFX0NPTlZFUlNBVElPTlMsXG4gICAgR0VUX01FU1NBR0VTLFxuICAgIFJFQ0lFVkVfTUVTU0FHRVMsXG4gICAgQUREX01FU1NBR0UsXG4gICAgUE9TVF9NRVNTQUdFLFxuICAgIFNFVF9IVUJVUkwsIFxuICAgIFNFVF9VU0VSTkFNRSwgXG4gICAgU0VUX0xBU1RfTUVTU0FHRSxcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdENvbnZlcnNhdGlvbnMgPSAoKSA9PiAoe1xuICAgIHR5cGU6IEdFVF9DT05WRVJTQVRJT05TLFxufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlQ29udmVyc2F0aW9ucyA9IChqc29uKSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIHR5cGU6IFJFQ0lFVkVfQ09OVkVSU0FUSU9OUyxcbiAgICAgICAgaXRlbXM6IGpzb24sXG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TWVzc2FnZXMgPSAoaWQpID0+ICh7XG4gICAgdHlwZTogR0VUX01FU1NBR0VTLFxuICAgIGNvbnZlcnNhdGlvbklkOiBpZFxufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlTWVzc2FnZXMgPSAoanNvbiwgaWQpID0+IHtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgdHlwZTogUkVDSUVWRV9NRVNTQUdFUyxcbiAgICAgICAgbWVzc2FnZXM6IGpzb24sXG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBpZFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlID0gKGpzb24sIGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX01FU1NBR0UsXG4gICAgICAgIG1lc3NhZ2U6IGpzb24sXG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBpZFxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMYXN0TWVzc2FnZSA9IChtZXNzYWdlLCBjb252ZXJzYXRpb25JZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFVF9MQVNUX01FU1NBR0UsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGNvbnZlcnNhdGlvbklkXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNldEh1YnVybCA9ICh1cmwpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfSFVCVVJMLFxuICAgICAgICB1cmxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFVzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX1VTRVJOQU1FLFxuICAgICAgICB1c2VybmFtZVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnZlcnNhdGlvbnMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENvbnZlcnNhdGlvbnMoKSk7XG4gICAgcmV0dXJuIGZldGNoKGAvY29udmVyc2F0aW9ucy9gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzZXQgdGhlIEhVQiBVUkwgcmlnaHQgaGVyZVxuICAgICAgICAgICAgY29uc3QgaHViVXJsID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xpbmsnKS5tYXRjaCgvPChbXj5dKyk+O1xccytyZWw9KD86bWVyY3VyZXxcIlteXCJdKm1lcmN1cmVbXlwiXSpcIikvKVsxXVxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SHVidXJsKGh1YlVybCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChyZWNlaXZlQ29udmVyc2F0aW9ucyhqc29uKSlcbiAgICAgICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdE1lc3NhZ2VzKGlkKSk7XG4gICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtpZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHJlY2VpdmVNZXNzYWdlcyhqc29uLCBpZCkpXG4gICAgICAgIH0pXG59O1xuXG5cbmV4cG9ydCBjb25zdCBhZGRNZXNzYWdlID0gKGNvbnRlbnQsIGNvbnZlcnNhdGlvbklkKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XG4gICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExhc3RNZXNzYWdlKGpzb24sIGNvbnZlcnNhdGlvbklkKSlcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChwb3N0TWVzc2FnZShqc29uLCBjb252ZXJzYXRpb25JZCkpXG4gICAgICAgIH0pXG59O1xuIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7TWVtb3J5Um91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuc3RvcmUuZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2V0VXNlcm5hbWUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0xpdmVDaGF0JykuZGF0YXNldC51c2VybmFtZSkpO1xuXG5SZWFjdERPTS5yZW5kZXIoKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8TWVtb3J5Um91dGVyPlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvTWVtb3J5Um91dGVyPlxuICAgIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTGl2ZUNoYXQnKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBMZWZ0IGZyb20gXCIuL0xlZnQvTGVmdFwiO1xuaW1wb3J0IFJpZ2h0IGZyb20gXCIuL1JpZ2h0L1JpZ2h0XCI7XG5pbXBvcnQgQmxhbmsgZnJvbSBcIi4vUmlnaHQvQmxhbmtcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17Qmxhbmt9IGV4YWN0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb252ZXJzYXRpb24vOmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3Byb3BzID0+IDxSaWdodCB7Li4ucHJvcHN9IGtleT17cHJvcHMubWF0Y2gucGFyYW1zLmlkfT48L1JpZ2h0PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNsYXNzIENvbnZlcnNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsgdG89e1wiL2NvbnZlcnNhdGlvbi9cIiArIHRoaXMucHJvcHMuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkfSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvYXNzZXRzL2ltZy9wcm9maWxlLyR7dGhpcy5wcm9wcy5jb252ZXJzYXRpb24uaW1hZ2VOYW1lfWB9IGFsdD1cIlwiIGhlaWdodD1cIjQ1XCIgd2lkdGg9XCI0NVwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTEgbXMtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29udmVyc2F0aW9uLlBzZXVkb308L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5jb252ZXJzYXRpb24uY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb252ZXJzYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb252ZXJzYXRpb24gZnJvbSBcIi4vQ29udmVyc2F0aW9uXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgTGVmdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IF90ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbnZlcnNhdGlvbnMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodGhpcy5wcm9wcy5odWJVcmwpO1xuICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0b3BpYycsIGAvY29udmVyc2F0aW9ucy8ke3RoaXMucHJvcHMudXNlcm5hbWV9YCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIF90LnByb3BzLnNldExhc3RNZXNzYWdlKGRhdGEsIGRhdGEuY29udmVyc2F0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRsaXN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbmxpbmVGb3JtSW5wdXRHcm91cFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXJpYS1sYWJlbD1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGRcIiBocmVmPVwiI1wiPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvYWRkLnN2Z1wiIGFsdD1cImFkZFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBpZD1cIk9wZW4tdGFiXCIgZGF0YS1icy10b2dnbGU9XCJ0YWJcIiBkYXRhLWJzLXRhcmdldD1cIiNPcGVuXCIgdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiT3BlblwiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+T3BlbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaWQ9XCJDbG9zZWQtdGFiXCIgZGF0YS1icy10b2dnbGU9XCJ0YWJcIiBkYXRhLWJzLXRhcmdldD1cIiNDbG9zZWRcIiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJDbG9zZWRcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5DbG9zZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1saXN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibXlUYWJDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIGFjdGl2ZSBzaG93XCIgaWQ9XCJob21lXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiT3Blbi10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zICE9IHVuZGVmaW5lZCA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5DcmVhdGVkQXQgPCBiLkNyZWF0ZWRBdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjb252ZXJzYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnZlcnNhdGlvbiBjb252ZXJzYXRpb249e2NvbnZlcnNhdGlvbn0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9uQ3JlYXRvcnMpKExlZnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgQmxhbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBweC0wXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9fT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbGFuazsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9jb252ZXJzYXRpb24nXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlID0gdGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkTWVzc2FnZSh0aGlzLnN0YXRlLmNvbnRlbnQsIHRoaXMucHJvcHMuaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogJyd9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtjb250ZW50OiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJidXR0b24tYWRkb24yXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5zZW5kTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBhcGVyLXBsYW5lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25DcmVhdG9ycykoSW5wdXQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLm1lc3NhZ2UubWluZSA/IGBzZW5kZXJgIDogYHJlcGFseWB9YH0gPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLm1lc3NhZ2UuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntuZXcgRGF0ZSh0aGlzLnByb3BzLm1lc3NhZ2UuQ3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uL2FjdGlvbnMvY29udmVyc2F0aW9uJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2VcIjtcbmltcG9ydCBUaW1lciBmcm9tICcuL1RpbWVyL1RpbWVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgUmlnaHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ib2R5UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIF9jb252ZXJzYXRpb25JbmRleDogLTEsXG4gICAgICAgICAgICBldmVudFNvdXJjZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2Nyb2xsIGRvd24gdG8gdGhlIGxhdGVzdCBtZXNzYWdlXG4gICAgc2Nyb2xsRG93bigpIHtcbiAgICAgICAgdGhpcy5ib2R5UmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gdGhpcy5ib2R5UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXggIT0gLTFcbiAgICAgICAgICAgICYmIHRoaXMucHJvcHMuaXRlbXNbdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXhdLm1lc3NhZ2VzPy5sZW5ndGhcbiAgICAgICAgICAgICYmIHByZXZQcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXM/Lmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IF90ID0gdGhpcztcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZDtcbiAgICAgICAgY29uc3QgX2NvbnZlcnNhdGlvbkluZGV4ID0gdGhpcy5wcm9wcy5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgICAgICBjb252ZXJzYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSWQgPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBfY29udmVyc2F0aW9uSW5kZXg6IF9jb252ZXJzYXRpb25JbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXRlbXNbX2NvbnZlcnNhdGlvbkluZGV4XS5tZXNzYWdlcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hNZXNzYWdlcyhpZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXZlbnRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodGhpcy5wcm9wcy5odWJVcmwpO1xuICAgICAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCBgL2NvbnZlcnNhdGlvbnMvJHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgX3QucHJvcHMucG9zdE1lc3NhZ2UoZGF0YSwgZGF0YS5jb252ZXJzYXRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50U291cmNlIGluc3RhbmNlb2YgRXZlbnRTb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZXZlbnRTb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlOiBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Ym94IHNob3dib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIgcmVmPXt0aGlzLmJvZHlSZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hhdC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvYXJyb2xlZnR0LnN2Z1wiIGFsdD1cImltYWdlIHRpdGxlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL21laGVkaWh0bWwuY29tL2NoYXRib3gvYXNzZXRzL2ltZy91c2VyLnBuZ1wiIGFsdD1cInVzZXIgaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1zLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNvbnN1bHRhdGlvbiBhdmVjOiB7dGhpcy5wcm9wcy5pdGVtc1swXS5Qc2V1ZG99PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyIHNvbGRlPXt0aGlzLnByb3BzLml0ZW1zWzBdLlNvbGRlQ29tcHRlQ2xpZW50fSBjb3V0Y2hhdD17dGhpcy5wcm9wcy5pdGVtc1swXS5UYXJpZkNoYXR9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleCAhPSAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnByb3BzLml0ZW1zICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnByb3BzLml0ZW1zW3RoaXMuc3RhdGUuX2NvbnZlcnNhdGlvbkluZGV4XS5tZXNzYWdlcyAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLml0ZW1zW3RoaXMuc3RhdGUuX2NvbnZlcnNhdGlvbkluZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBtZXNzYWdlPXttZXNzYWdlfSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZW5kLWJ0bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdHRhY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvdXBsb2FkLnN2Z1wiIGFsdD1cImltYWdlIHRpdGxlXCIvPiBhdHRhY2hlZCBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJ1cGxvYWRcIiBpZD1cInVwbG9hZFwiIGNsYXNzTmFtZT1cInVwbG9hZC1ib3hcIiBwbGFjZWhvbGRlcj1cIlVwbG9hZCBGaWxlXCIgYXJpYS1sYWJlbD1cIlVwbG9hZCBGaWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9uQ3JlYXRvcnMpKFJpZ2h0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBUaW1lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBjb3V0ID0gcHJvcHMuY291dGNoYXQ7XG4gICAgY29uc3Qgc29sZGUgPSBwcm9wcy5zb2xkZTtcblxuICAgIC8vIEplIHZhaXMgY2FsY3VsZXIgbGUgY291dCBkZSBsYSBjb25zdWx0YXRpb24gZW4gc2Vjb25kZVxuICAgIGNvbnN0IENvdXRNaW51dGVzID0gc29sZGUgLyBjb3V0O1xuICAgIGNvbnN0IENvdXRTZWNvbmRlcyA9IENvdXRNaW51dGVzICogNjA7XG4gICAgY29uc3QgQ291dFNlY29uZGUgPSBDb3V0U2Vjb25kZXMudG9GaXhlZCgwKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVtYWluaW5nVGltZTogQ291dFNlY29uZGVcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGludGVydmFsO1xuXG4gICAgLy8gRMOpbWFycmUgbGUgY29tcHRlIMOgIHJlYm91cnNcbiAgICBjb25zdCBzdGFydENvdW50ZG93biA9ICgpID0+IHtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgaWYgKHByZXZTdGF0ZS5yZW1haW5pbmdUaW1lID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVtYWluaW5nVGltZTogcHJldlN0YXRlLnJlbWFpbmluZ1RpbWUgLSAxIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyBBcnLDqnRlIGxlIGNvbXB0ZSDDoCByZWJvdXJzIGxvcnNxdWUgbGUgdGVtcHMgYXR0ZWludCAwXG4gICAgICAgICAgICByZXR1cm4geyByZW1haW5pbmdUaW1lOiAwIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMDApOyAvLyBNZXR0cmUgw6Agam91ciBsZSB0ZW1wcyB0b3V0ZXMgbGVzIDEwMDAgbXMgKDEgc2Vjb25kZSlcbiAgICB9O1xuXG4gICAgLy8gRMOpbWFycmVyIGxlIGNvbXB0ZSDDoCByZWJvdXJzIHF1YW5kIGxlIGNvbXBvc2FudCBlc3QgbW9udMOpXG4gICAgc3RhcnRDb3VudGRvd24oKTtcblxuICAgIC8vIEFycsOqdGVyIGxlIGNvbXB0ZSDDoCByZWJvdXJzIHF1YW5kIGxlIGNvbXBvc2FudCBlc3QgZMOpbW9udMOpXG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIC8vIENvbnZlcnRpciBsZSB0ZW1wcyBlbiBtaW51dGVzIGV0IHNlY29uZGVzIHBvdXIgbCdhZmZpY2hhZ2VcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS5yZW1haW5pbmdUaW1lIC8gNjApO1xuICAgIGNvbnN0IHNlY29uZHMgPSB0aGlzLnN0YXRlLnJlbWFpbmluZ1RpbWUgJSA2MDtcblxuICAgIHJldHVybiAoXG4gICAgICAvLyBBZmZpY2hlciBsZSB0ZW1wcyByZXN0YW50LCBldCBsZSBsZSB0ZW1wcyA9IDAsIGFmZmljaGVyIGxlIG1lc3NhZ2VcbiAgICAgIC8vIFwiVGVtcHMgw6ljb3Vsw6lcIlxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUucmVtYWluaW5nVGltZSA9PT0gMCA/IChcbiAgICAgICAgICA8cD5UZW1wcyDDqWNvdWzDqSAhPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGVtcHMgcmVzdGFudDoge21pbnV0ZXN9OntzZWNvbmRzIDwgMTAgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kc31cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImV4cG9ydCBjb25zdCBHRVRfQ09OVkVSU0FUSU9OUyA9ICdHRVRfQ09OVkVSU0FUSU9OUyc7XG5leHBvcnQgY29uc3QgUkVDSUVWRV9DT05WRVJTQVRJT05TID0gJ1JFQ0lFVkVfQ09OVkVSU0FUSU9OUyc7XG5leHBvcnQgY29uc3QgR0VUX01FU1NBR0VTID0gJ0dFVF9NRVNTQUdFUyc7XG5leHBvcnQgY29uc3QgUkVDSUVWRV9NRVNTQUdFUyA9ICdSRUNJRVZFX01FU1NBR0VTJztcbmV4cG9ydCBjb25zdCBBRERfTUVTU0FHRSA9ICdBRERfTUVTU0FHRSc7XG5leHBvcnQgY29uc3QgUE9TVF9NRVNTQUdFID0gJ1BPU1RfTUVTU0FHRSc7XG5leHBvcnQgY29uc3QgU0VUX0hVQlVSTCA9ICdTRVRfSFVCVVJMJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUk5BTUUgPSAnU0VUX1VTRVJOQU1FJztcbmV4cG9ydCBjb25zdCBTRVRfTEFTVF9NRVNTQUdFID0gJ1NFVF9MQVNUX01FU1NBR0UnOyIsImltcG9ydCB7XG4gICAgR0VUX0NPTlZFUlNBVElPTlMsIFJFQ0lFVkVfQ09OVkVSU0FUSU9OUyxcbiAgICBHRVRfTUVTU0FHRVMsIFJFQ0lFVkVfTUVTU0FHRVMsXG4gICAgUE9TVF9NRVNTQUdFLCBBRERfTUVTU0FHRSwgU0VUX0hVQlVSTCwgU0VUX1VTRVJOQU1FLFxuICAgIFNFVF9MQVNUX01FU1NBR0Vcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgaXRlbXM6IFtdLFxuICAgIGh1YlVybDogbnVsbCxcbiAgICB1c2VybmFtZTogbnVsbFxufSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEdFVF9DT05WRVJTQVRJT05TOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFJFQ0lFVkVfQ09OVkVSU0FUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBHRVRfTUVTU0FHRVM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgUkVDSUVWRV9NRVNTQUdFUzpcbiAgICAgICAgICAgIGNvbnN0IF9uZXdDb252ZXJzYXRpb25zID0gc3RhdGUuaXRlbXMubWFwKChjb252ZXJzYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkID09IGFjdGlvbi5jb252ZXJzYXRpb25JZFxuICAgICAgICAgICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIGNvbnZlcnNhdGlvbiwge21lc3NhZ2VzOiBhY3Rpb24ubWVzc2FnZXN9KVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnZlcnNhdGlvblxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLl9uZXdDb252ZXJzYXRpb25zXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIEFERF9NRVNTQUdFOlxuICAgICAgICAgICAgY29uc3QgX25ld0l0ZW1zRmluYWwgPSBzdGF0ZS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY29udmVyc2F0aW9uSWQgPT0gYWN0aW9uLmNvbnZlcnNhdGlvbklkXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHttZXNzYWdlczogWy4uLml0ZW0ubWVzc2FnZXMsIGFjdGlvbi5tZXNzYWdlXX0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLl9uZXdJdGVtc0ZpbmFsXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTRVRfTEFTVF9NRVNTQUdFOlxuICAgICAgICAgICAgY29uc3QgX25ld0l0ZW1zRmluYWwyID0gc3RhdGUuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmNvbnZlcnNhdGlvbklkID09IGFjdGlvbi5jb252ZXJzYXRpb25JZFxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY29udGVudCA9IGFjdGlvbi5tZXNzYWdlLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNyZWF0ZWRBdCA9IGFjdGlvbi5tZXNzYWdlLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLl9uZXdJdGVtc0ZpbmFsMl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0VUX0hVQlVSTDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaHViVXJsOiBhY3Rpb24udXJsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNFVF9VU0VSTkFNRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGFjdGlvbi51c2VybmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycy9jb252ZXJzYXRpb24nXG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiXSwibmFtZXMiOlsiR0VUX0NPTlZFUlNBVElPTlMiLCJSRUNJRVZFX0NPTlZFUlNBVElPTlMiLCJHRVRfTUVTU0FHRVMiLCJSRUNJRVZFX01FU1NBR0VTIiwiQUREX01FU1NBR0UiLCJQT1NUX01FU1NBR0UiLCJTRVRfSFVCVVJMIiwiU0VUX1VTRVJOQU1FIiwiU0VUX0xBU1RfTUVTU0FHRSIsInJlcXVlc3RDb252ZXJzYXRpb25zIiwidHlwZSIsInJlY2VpdmVDb252ZXJzYXRpb25zIiwianNvbiIsIml0ZW1zIiwicmVxdWVzdE1lc3NhZ2VzIiwiaWQiLCJjb252ZXJzYXRpb25JZCIsInJlY2VpdmVNZXNzYWdlcyIsIm1lc3NhZ2VzIiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlIiwic2V0TGFzdE1lc3NhZ2UiLCJzZXRIdWJ1cmwiLCJ1cmwiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lIiwiZmV0Y2hDb252ZXJzYXRpb25zIiwiZGlzcGF0Y2giLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImh1YlVybCIsImhlYWRlcnMiLCJnZXQiLCJtYXRjaCIsImZldGNoTWVzc2FnZXMiLCJjb25jYXQiLCJhZGRNZXNzYWdlIiwiY29udGVudCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJib2R5IiwiUmVhY3RET00iLCJSZWFjdCIsInN0b3JlIiwiUHJvdmlkZXIiLCJNZW1vcnlSb3V0ZXIiLCJhY3Rpb25DcmVhdG9ycyIsIkFwcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSb3V0ZSIsIlN3aXRjaCIsIkxlZnQiLCJSaWdodCIsIkJsYW5rIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjbGFzc05hbWUiLCJwYXRoIiwiY29tcG9uZW50IiwiZXhhY3QiLCJwcm9wcyIsIl9leHRlbmRzIiwicGFyYW1zIiwiQ29tcG9uZW50IiwiTGluayIsIkNvbnZlcnNhdGlvbiIsInRvIiwiY29udmVyc2F0aW9uIiwic3JjIiwiaW1hZ2VOYW1lIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJQc2V1ZG8iLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjYWxsIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpcyIsIl90IiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZXZlbnRTb3VyY2UiLCJFdmVudFNvdXJjZSIsIndpdGhDcmVkZW50aWFscyIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInBsYWNlaG9sZGVyIiwiaHJlZiIsInJvbGUiLCJ1bmRlZmluZWQiLCJzb3J0IiwiYSIsImIiLCJDcmVhdGVkQXQiLCJtYXAiLCJpbmRleCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiSW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbmRNZXNzYWdlIiwiX3RoaXMyIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImFjdGlvbiIsIm9uQ2hhbmdlIiwib25DbGljayIsIk1lc3NhZ2UiLCJtaW5lIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiVGltZXIiLCJib2R5UmVmIiwiY3JlYXRlUmVmIiwiX2NvbnZlcnNhdGlvbkluZGV4Iiwic2Nyb2xsRG93biIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJfdGhpcyRwcm9wcyRpdGVtcyR0aGkiLCJfcHJldlByb3BzJGl0ZW1zJHRoaXMiLCJsZW5ndGgiLCJmaW5kSW5kZXgiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsb3NlIiwicmVmIiwic29sZGUiLCJTb2xkZUNvbXB0ZUNsaWVudCIsImNvdXRjaGF0IiwiVGFyaWZDaGF0IiwibmFtZSIsImNvdXQiLCJDb3V0TWludXRlcyIsIkNvdXRTZWNvbmRlcyIsIkNvdXRTZWNvbmRlIiwidG9GaXhlZCIsInJlbWFpbmluZ1RpbWUiLCJpbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJjbGVhckludGVydmFsIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJpc0ZldGNoaW5nIiwiZGlkSW52YWxpZGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJfbmV3Q29udmVyc2F0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9uZXdJdGVtc0ZpbmFsIiwiaXRlbSIsIl9uZXdJdGVtc0ZpbmFsMiIsImNyZWF0ZWRBdCIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJyZWR1Y2VycyJdLCJzb3VyY2VSb290IjoiIn0=