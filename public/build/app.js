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
        className: "flex-shrink-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("img", {
        className: "img-fluid",
        src: "https://mehedihtml.com/chatbox/assets/img/user.png",
        alt: "user img"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
        className: "flex-grow-1 ms-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h3", null, "Mehedi Hasan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Timer__WEBPACK_IMPORTED_MODULE_31__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFrQztBQUUzQixJQUFNUyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFBO0VBQUEsT0FBVTtJQUN2Q0MsSUFBSSxFQUFFVixxRUFBaUJBO0VBQzNCLENBQUM7QUFBQSxDQUFDO0FBRUssSUFBTVcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSUMsSUFBSSxFQUFLO0VBQzFDLE9BQVE7SUFDSkYsSUFBSSxFQUFFVCx5RUFBcUI7SUFDM0JZLEtBQUssRUFBRUQ7RUFDWCxDQUFDO0FBQ0wsQ0FBQztBQUVNLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsRUFBRTtFQUFBLE9BQU07SUFDcENMLElBQUksRUFBRVIsZ0VBQVk7SUFDbEJjLGNBQWMsRUFBRUQ7RUFDcEIsQ0FBQztBQUFBLENBQUM7QUFFSyxJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlMLElBQUksRUFBRUcsRUFBRSxFQUFLO0VBQ3pDLE9BQVE7SUFDSkwsSUFBSSxFQUFFUCxvRUFBZ0I7SUFDdEJlLFFBQVEsRUFBRU4sSUFBSTtJQUNkSSxjQUFjLEVBQUVEO0VBQ3BCLENBQUM7QUFDTCxDQUFDO0FBRU0sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlQLElBQUksRUFBRUcsRUFBRSxFQUFLO0VBQ3JDLE9BQU87SUFDSEwsSUFBSSxFQUFFTiwrREFBVztJQUNqQmdCLE9BQU8sRUFBRVIsSUFBSTtJQUNiSSxjQUFjLEVBQUVEO0VBQ3BCLENBQUM7QUFDTCxDQUFDO0FBRU0sSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJRCxPQUFPLEVBQUVKLGNBQWMsRUFBSztFQUN2RCxPQUFPO0lBQ0hOLElBQUksRUFBRUYsb0VBQWdCO0lBQ3RCWSxPQUFPLEVBQVBBLE9BQU87SUFDUEosY0FBYyxFQUFkQTtFQUNKLENBQUM7QUFDTCxDQUFDO0FBRU0sSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLEdBQUcsRUFBSztFQUM5QixPQUFPO0lBQ0hiLElBQUksRUFBRUosOERBQVU7SUFDaEJpQixHQUFHLEVBQUhBO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFTSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsUUFBUSxFQUFLO0VBQ3JDLE9BQU87SUFDSGYsSUFBSSxFQUFFSCxnRUFBWTtJQUNsQmtCLFFBQVEsRUFBUkE7RUFDSixDQUFDO0FBQ0wsQ0FBQztBQUVNLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUE7RUFBQSxPQUFTLFVBQUFDLFFBQVEsRUFBSTtJQUNoREEsUUFBUSxDQUFDbEIsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE9BQU9tQixLQUFLLGtCQUFrQixDQUFDLENBQzFCQyxJQUFJLENBQUMsVUFBQUMsUUFBUSxFQUFJO01BQ2Q7TUFDQSxJQUFNQyxNQUFNLEdBQUdELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUNDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4R1AsUUFBUSxDQUFDTCxTQUFTLENBQUNTLE1BQU0sQ0FBQyxDQUFDO01BQzNCLE9BQU9ELFFBQVEsQ0FBQ2xCLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUNEaUIsSUFBSSxDQUFDLFVBQUFqQixJQUFJLEVBQUk7TUFDVixPQUFPZSxRQUFRLENBQUNoQixvQkFBb0IsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0VBQ1YsQ0FBQztBQUFBO0FBRU0sSUFBTXVCLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSXBCLEVBQUU7RUFBQSxPQUFLLFVBQUFZLFFBQVEsRUFBSTtJQUM3Q0EsUUFBUSxDQUFDYixlQUFlLENBQUNDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLE9BQU9hLEtBQUssY0FBQVEsTUFBQSxDQUFjckIsRUFBRSxDQUFFLENBQUMsQ0FDMUJjLElBQUksQ0FBQyxVQUFBQyxRQUFRO01BQUEsT0FBSUEsUUFBUSxDQUFDbEIsSUFBSSxDQUFDLENBQUM7SUFBQSxFQUFDLENBQ2pDaUIsSUFBSSxDQUFDLFVBQUFqQixJQUFJLEVBQUk7TUFDVixPQUFPZSxRQUFRLENBQUNWLGVBQWUsQ0FBQ0wsSUFBSSxFQUFFRyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUM7RUFDVixDQUFDO0FBQUE7QUFHTSxJQUFNc0IsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLE9BQU8sRUFBRXRCLGNBQWM7RUFBQSxPQUFLLFVBQUFXLFFBQVEsRUFBSTtJQUMvRCxJQUFJWSxRQUFRLEdBQUcsSUFBSUMsUUFBUSxDQUFDLENBQUM7SUFDN0JELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLFNBQVMsRUFBRUgsT0FBTyxDQUFDO0lBQ25DLE9BQU9WLEtBQUssY0FBQVEsTUFBQSxDQUFjcEIsY0FBYyxHQUFJO01BQ3hDMEIsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFSjtJQUNWLENBQUMsQ0FBQyxDQUNHVixJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ2xCLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUNqQ2lCLElBQUksQ0FBQyxVQUFBakIsSUFBSSxFQUFJO01BQ1ZlLFFBQVEsQ0FBQ04sY0FBYyxDQUFDVCxJQUFJLEVBQUVJLGNBQWMsQ0FBQyxDQUFDO01BQzlDLE9BQU9XLFFBQVEsQ0FBQ1IsV0FBVyxDQUFDUCxJQUFJLEVBQUVJLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQztFQUNWLENBQUM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdnQztBQUNQO0FBQ0M7QUFDUztBQUNVO0FBRVU7QUFFckI7QUFFbkM4Qiw4Q0FBSyxDQUFDbkIsUUFBUSxDQUFDc0IsOERBQTBCLENBQUNFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxPQUFPLENBQUM1QixRQUFRLENBQUMsQ0FBQztBQUUzRm1CLDZDQUFlLGVBQ1hDLGdEQUFBLENBQUNFLGlEQUFRO0VBQUNELEtBQUssRUFBRUEsOENBQUtBO0FBQUMsZ0JBQ25CRCxnREFBQSxDQUFDRywwREFBWSxxQkFDVEgsZ0RBQUEsQ0FBQ0ssdURBQUcsTUFBQyxDQUNLLENBQ1IsQ0FBQyxFQUNaQyxRQUFRLENBQUNLLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJSO0FBQ3FCO0FBRWhCO0FBQ0c7QUFDQTtBQUFBLElBRTVCTixHQUFHLDBCQUFBWSxnQkFBQTtFQUFBQyxTQUFBLENBQUFiLEdBQUEsRUFBQVksZ0JBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQWYsR0FBQTtFQUFBLFNBQUFBLElBQUE7SUFBQWdCLGVBQUEsT0FBQWhCLEdBQUE7SUFBQSxPQUFBYyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQW5CLEdBQUE7SUFBQW9CLEdBQUE7SUFBQUMsS0FBQSxFQUVMLFNBQUFqQixPQUFBLEVBQVM7TUFDTCxvQkFDSVQsaURBQUE7UUFBUzJCLFNBQVMsRUFBQztNQUFjLGdCQUM3QjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBVyxnQkFDdEIzQixpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQUssZ0JBQ2hCM0IsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFRLGdCQUNuQjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBVyxnQkFDdEIzQixpREFBQSxDQUFDYyxtREFBSSxNQUFDLENBQUMsZUFDUGQsaURBQUEsQ0FBQ2EscURBQU0scUJBQ0hiLGlEQUFBLENBQUNZLG9EQUFLO1FBQUNnQixJQUFJLEVBQUMsR0FBRztRQUFDQyxTQUFTLEVBQUViLHFEQUFNO1FBQUNjLEtBQUs7TUFBQSxDQUFFLENBQUMsZUFDMUM5QixpREFBQSxDQUFDWSxvREFBSztRQUFDZ0IsSUFBSSxFQUFDLG1CQUFtQjtRQUMzQm5CLE1BQU0sRUFBRSxTQUFBQSxPQUFBc0IsS0FBSztVQUFBLG9CQUFJL0IsaURBQUEsQ0FBQ2UscURBQUssRUFBQWlCLFFBQUEsS0FBS0QsS0FBSztZQUFFTixHQUFHLEVBQUVNLEtBQUssQ0FBQzFDLEtBQUssQ0FBQzRDLE1BQU0sQ0FBQy9EO1VBQUcsRUFBUSxDQUFDO1FBQUE7TUFBRSxDQUM1RSxDQUNHLENBQ1AsQ0FDSixDQUNKLENBQ0osQ0FDQSxDQUFDO0lBRWxCO0VBQUM7RUFBQSxPQUFBbUMsR0FBQTtBQUFBLEVBdEJhTCw2Q0FBZTtBQXlCakMsaUVBQWVLLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENRO0FBQ1k7QUFBQSxJQUdoQytCLFlBQVksMEJBQUFuQixnQkFBQTtFQUFBQyxTQUFBLENBQUFrQixZQUFBLEVBQUFuQixnQkFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBZ0IsWUFBQTtFQUFBLFNBQUFBLGFBQUE7SUFBQWYsZUFBQSxPQUFBZSxZQUFBO0lBQUEsT0FBQWpCLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBWSxZQUFBO0lBQUFYLEdBQUE7SUFBQUMsS0FBQSxFQUNkLFNBQUFqQixPQUFBLEVBQVM7TUFDTCxvQkFDSVQsaURBQUEsQ0FBQ21DLG1EQUFJO1FBQUNFLEVBQUUsRUFBRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUNOLEtBQUssQ0FBQ08sWUFBWSxDQUFDbkUsY0FBZTtRQUFDd0QsU0FBUyxFQUFDO01BQTJCLGdCQUV0RzNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBZSxnQkFDMUIzQixpREFBQTtRQUFLdUMsR0FBRyxFQUFDLG9EQUFvRDtRQUFDQyxHQUFHLEVBQUMsTUFBTTtRQUFDYixTQUFTLEVBQUM7TUFBVyxDQUFDLENBQUMsZUFDaEczQixpREFBQTtRQUFNMkIsU0FBUyxFQUFDO01BQVEsQ0FBTyxDQUM5QixDQUFDLGVBRU4zQixpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQWtCLGdCQUM3QjNCLGlEQUFBLGFBQUssSUFBSSxDQUFDK0IsS0FBSyxDQUFDTyxZQUFZLENBQUNHLE1BQVcsQ0FBQyxlQUN6Q3pDLGlEQUFBLFlBQUksSUFBSSxDQUFDK0IsS0FBSyxDQUFDTyxZQUFZLENBQUM3QyxPQUFXLENBQ3RDLENBRUgsQ0FBQztJQUVmO0VBQUM7RUFBQSxPQUFBMkMsWUFBQTtBQUFBLEVBakJzQnBDLDZDQUFlO0FBb0IxQyxpRUFBZW9DLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7QUFDZ0I7QUFDTDtBQUN1QjtBQUU1RCxJQUFNTyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUMvQixPQUFPQSxLQUFLO0FBQ2hCLENBQUM7QUFBQyxJQUVJOUIsSUFBSSwwQkFBQUcsZ0JBQUE7RUFBQUMsU0FBQSxDQUFBSixJQUFBLEVBQUFHLGdCQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFOLElBQUE7RUFDTixTQUFBQSxLQUFZaUIsS0FBSyxFQUFFO0lBQUFWLGVBQUEsT0FBQVAsSUFBQTtJQUFBLE9BQUFLLE1BQUEsQ0FBQTBCLElBQUEsT0FDVGQsS0FBSztFQUVmO0VBQUNQLFlBQUEsQ0FBQVYsSUFBQTtJQUFBVyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBb0Isa0JBQUEsRUFBb0I7TUFBQSxJQUFBQyxLQUFBO01BQ2hCLElBQU1DLEVBQUUsR0FBRyxJQUFJO01BQ2YsSUFBSSxDQUFDakIsS0FBSyxDQUFDbEQsa0JBQWtCLENBQUMsQ0FBQyxDQUMxQkcsSUFBSSxDQUFDLFlBQU07UUFFUixJQUFJTixHQUFHLEdBQUcsSUFBSXVFLEdBQUcsQ0FBQ0YsS0FBSSxDQUFDaEIsS0FBSyxDQUFDN0MsTUFBTSxDQUFDO1FBQ3BDUixHQUFHLENBQUN3RSxZQUFZLENBQUN0RCxNQUFNLENBQUMsT0FBTyxvQkFBQUwsTUFBQSxDQUFvQndELEtBQUksQ0FBQ2hCLEtBQUssQ0FBQ25ELFFBQVEsQ0FBRSxDQUFDO1FBRXpFLElBQU11RSxXQUFXLEdBQUcsSUFBSUMsV0FBVyxDQUFDMUUsR0FBRyxFQUFFO1VBQ3JDMkUsZUFBZSxFQUFFO1FBQ3JCLENBQUMsQ0FBQztRQUVGRixXQUFXLENBQUNHLFNBQVMsR0FBRyxVQUFVQyxLQUFLLEVBQUU7VUFDckM7VUFDQSxJQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxLQUFLLENBQUNDLElBQUksQ0FBQztVQUNuQ1IsRUFBRSxDQUFDakIsS0FBSyxDQUFDdkQsY0FBYyxDQUFDZ0YsSUFBSSxFQUFFQSxJQUFJLENBQUNsQixZQUFZLENBQUNwRSxFQUFFLENBQUM7UUFDdkQsQ0FBQztNQUNMLENBQUMsQ0FBQztJQUNWO0VBQUM7SUFBQXVELEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFqQixPQUFBLEVBQVM7TUFDTCxvQkFDSVQsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFVLGdCQUNyQjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBVSxnQkFDckIzQixpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQXlCLGdCQUNwQzNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBZSxnQkFDOUIzQixpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQWEsZ0JBQ2xDM0IsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFZLGdCQUN6QjNCLGlEQUFBO1FBQU9uQyxJQUFJLEVBQUMsTUFBTTtRQUFDOEQsU0FBUyxFQUFDLGNBQWM7UUFBQ3pELEVBQUUsRUFBQyxzQkFBc0I7UUFBQ3lGLFdBQVcsRUFBQyxRQUFRO1FBQUMsY0FBVztNQUFRLENBQUMsQ0FBQyxlQUNoSDNELGlEQUFBO1FBQUcyQixTQUFTLEVBQUMsS0FBSztRQUFDaUMsSUFBSSxFQUFDO01BQUcsZ0JBQUM1RCxpREFBQTtRQUFLMkIsU0FBUyxFQUFDLFdBQVc7UUFBQ1ksR0FBRyxFQUFDLG1EQUFtRDtRQUFDQyxHQUFHLEVBQUM7TUFBSyxDQUFDLENBQUksQ0FDMUgsQ0FBQyxlQUVOeEMsaURBQUE7UUFBSTJCLFNBQVMsRUFBQyxjQUFjO1FBQUN6RCxFQUFFLEVBQUMsT0FBTztRQUFDMkYsSUFBSSxFQUFDO01BQVMsZ0JBQ3BEN0QsaURBQUE7UUFBSTJCLFNBQVMsRUFBQyxVQUFVO1FBQUNrQyxJQUFJLEVBQUM7TUFBYyxnQkFDMUM3RCxpREFBQTtRQUFRMkIsU0FBUyxFQUFDLGlCQUFpQjtRQUFDekQsRUFBRSxFQUFDLFVBQVU7UUFBQyxrQkFBZSxLQUFLO1FBQUMsa0JBQWUsT0FBTztRQUFDTCxJQUFJLEVBQUMsUUFBUTtRQUFDZ0csSUFBSSxFQUFDLEtBQUs7UUFBQyxpQkFBYyxNQUFNO1FBQUMsaUJBQWM7TUFBTSxHQUFDLE1BQVksQ0FDM0ssQ0FBQyxlQUNMN0QsaURBQUE7UUFBSTJCLFNBQVMsRUFBQyxVQUFVO1FBQUNrQyxJQUFJLEVBQUM7TUFBYyxnQkFDMUM3RCxpREFBQTtRQUFRMkIsU0FBUyxFQUFDLFVBQVU7UUFBQ3pELEVBQUUsRUFBQyxZQUFZO1FBQUMsa0JBQWUsS0FBSztRQUFDLGtCQUFlLFNBQVM7UUFBQ0wsSUFBSSxFQUFDLFFBQVE7UUFBQ2dHLElBQUksRUFBQyxLQUFLO1FBQUMsaUJBQWMsUUFBUTtRQUFDLGlCQUFjO01BQU8sR0FBQyxRQUFjLENBQzdLLENBQ0YsQ0FDRCxDQUFDLGVBQ003RCxpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQVksZ0JBQ3ZCM0IsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFZLGdCQUN2QjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUMsYUFBYTtRQUFDekQsRUFBRSxFQUFDO01BQWMsZ0JBQzFDOEIsaURBQUE7UUFBSzJCLFNBQVMsRUFBQywyQkFBMkI7UUFBQ3pELEVBQUUsRUFBQyxNQUFNO1FBQUMyRixJQUFJLEVBQUMsVUFBVTtRQUFDLG1CQUFnQjtNQUFVLGdCQUMzRjdELGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBVyxHQUVsQixJQUFJLENBQUNJLEtBQUssQ0FBQy9ELEtBQUssSUFBSThGLFNBQVMsR0FFekIsSUFBSSxDQUFDL0IsS0FBSyxDQUFDL0QsS0FBSyxDQUNYK0YsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFLO1FBQ1osT0FBT0QsQ0FBQyxDQUFDRSxTQUFTLEdBQUdELENBQUMsQ0FBQ0MsU0FBUztNQUNwQyxDQUFDLENBQUMsQ0FDREMsR0FBRyxDQUFDLFVBQUM3QixZQUFZLEVBQUU4QixLQUFLLEVBQUs7UUFDMUIsb0JBQ0lwRSxpREFBQSxDQUFDb0Msc0RBQVk7VUFBQ0UsWUFBWSxFQUFFQSxZQUFhO1VBQUNiLEdBQUcsRUFBRTJDO1FBQU0sQ0FBRSxDQUFDO01BRWhFLENBQUMsQ0FBQyxHQUNKLEVBRVQsQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNKLENBQUM7SUFFZDtFQUFDO0VBQUEsT0FBQXRELElBQUE7QUFBQSxFQTVFY2QsNkNBQWU7QUErRWxCLGlFQUFlMEMscURBQU8sQ0FBQ0MsZUFBZSxFQUFFdkMsbURBQWMsQ0FBQyxDQUFDVSxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rm5EO0FBQUEsSUFHcEJFLEtBQUssMEJBQUFDLGdCQUFBO0VBQUFDLFNBQUEsQ0FBQUYsS0FBQSxFQUFBQyxnQkFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixLQUFBO0VBQUEsU0FBQUEsTUFBQTtJQUFBSyxlQUFBLE9BQUFMLEtBQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVIsS0FBQTtJQUFBUyxHQUFBO0lBQUFDLEtBQUEsRUFFUCxTQUFBakIsT0FBQSxFQUFTO01BQ0wsb0JBQ0lULGlEQUFBO1FBQUsyQixTQUFTLEVBQUMsWUFBWTtRQUFDMEMsS0FBSyxFQUFFO1VBQUNDLEtBQUssRUFBRSxNQUFNO1VBQUVDLGVBQWUsRUFBRTtRQUFPO01BQUUsQ0FFeEUsQ0FBQztJQUVkO0VBQUM7RUFBQSxPQUFBdkQsS0FBQTtBQUFBLEVBUmVoQiw2Q0FBZTtBQVduQyxpRUFBZWdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RLO0FBQ1U7QUFDeUI7QUFFNUQsSUFBTTJCLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBSUMsS0FBSyxFQUFLO0VBQy9CLE9BQU9BLEtBQUs7QUFDaEIsQ0FBQztBQUFDLElBRUk0QixLQUFLLDBCQUFBdkQsZ0JBQUE7RUFBQUMsU0FBQSxDQUFBc0QsS0FBQSxFQUFBdkQsZ0JBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQW9ELEtBQUE7RUFDUCxTQUFBQSxNQUFBLEVBQWM7SUFBQSxJQUFBekIsS0FBQTtJQUFBMUIsZUFBQSxPQUFBbUQsS0FBQTtJQUNWekIsS0FBQSxHQUFBNUIsTUFBQSxDQUFBMEIsSUFBQTtJQUNBRSxLQUFBLENBQUtILEtBQUssR0FBRztNQUNUbkQsT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVEc0QsS0FBQSxDQUFLMEIsWUFBWSxHQUFHMUIsS0FBQSxDQUFLMEIsWUFBWSxDQUFDQyxJQUFJLENBQUFDLHNCQUFBLENBQUE1QixLQUFBLENBQUssQ0FBQztJQUNoREEsS0FBQSxDQUFLNkIsV0FBVyxHQUFHN0IsS0FBQSxDQUFLNkIsV0FBVyxDQUFDRixJQUFJLENBQUFDLHNCQUFBLENBQUE1QixLQUFBLENBQUssQ0FBQztJQUFDLE9BQUFBLEtBQUE7RUFDbkQ7RUFBQ3ZCLFlBQUEsQ0FBQWdELEtBQUE7SUFBQS9DLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFrRCxZQUFZckIsS0FBSyxFQUFFO01BQUEsSUFBQXNCLE1BQUE7TUFDZnRCLEtBQUssQ0FBQ3VCLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLElBQUksQ0FBQy9DLEtBQUssQ0FBQ3ZDLFVBQVUsQ0FBQyxJQUFJLENBQUNvRCxLQUFLLENBQUNuRCxPQUFPLEVBQUUsSUFBSSxDQUFDc0MsS0FBSyxDQUFDN0QsRUFBRSxDQUFDLENBQUNjLElBQUksQ0FBQyxZQUFNO1FBQ2hFNkYsTUFBSSxDQUFDRSxRQUFRLENBQUM7VUFBQ3RGLE9BQU8sRUFBRTtRQUFFLENBQUMsQ0FBQztNQUNoQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFnQyxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBK0MsYUFBYWxCLEtBQUssRUFBRTtNQUNoQixJQUFJLENBQUN3QixRQUFRLENBQ1Q7UUFBQ3RGLE9BQU8sRUFBRThELEtBQUssQ0FBQ3lCLE1BQU0sQ0FBQ3REO01BQUssQ0FDaEMsQ0FBQztJQUNMO0VBQUM7SUFBQUQsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWpCLE9BQUEsRUFBUztNQUNMLG9CQUNJVCxpREFBQTtRQUFNaUYsTUFBTSxFQUFDO01BQUcsZ0JBQ1pqRixpREFBQTtRQUFPbkMsSUFBSSxFQUFDLE1BQU07UUFBQzhGLFdBQVcsRUFBQyxnQkFBZ0I7UUFBQyxvQkFBaUIsZUFBZTtRQUFDdUIsUUFBUSxFQUFFLElBQUksQ0FBQ1QsWUFBYTtRQUFDL0MsS0FBSyxFQUFFLElBQUksQ0FBQ2tCLEtBQUssQ0FBQ25ELE9BQVE7UUFBQ2tDLFNBQVMsRUFBQztNQUFjLENBQUMsQ0FBQyxlQUNuSzNCLGlEQUFBO1FBQVFuQyxJQUFJLEVBQUMsUUFBUTtRQUFDc0gsT0FBTyxFQUFFLElBQUksQ0FBQ1A7TUFBWSxnQkFDNUM1RSxpREFBQTtRQUFHMkIsU0FBUyxFQUFDO01BQW1CLENBQUksQ0FBQyxRQUVqQyxDQUNOLENBQUM7SUFFZjtFQUFDO0VBQUEsT0FBQTZDLEtBQUE7QUFBQSxFQWxDZXhFLDZDQUFlO0FBcUNuQyxpRUFBZTBDLHFEQUFPLENBQUNDLGVBQWUsRUFBRXZDLG1EQUFjLENBQUMsQ0FBQ29FLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDcEM7QUFBQSxJQUdwQlksT0FBTywwQkFBQW5FLGdCQUFBO0VBQUFDLFNBQUEsQ0FBQWtFLE9BQUEsRUFBQW5FLGdCQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFnRSxPQUFBO0VBQUEsU0FBQUEsUUFBQTtJQUFBL0QsZUFBQSxPQUFBK0QsT0FBQTtJQUFBLE9BQUFqRSxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQTRELE9BQUE7SUFBQTNELEdBQUE7SUFBQUMsS0FBQSxFQUVULFNBQUFvQixrQkFBQSxFQUFvQixDQUVwQjtFQUFDO0lBQUFyQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBakIsT0FBQSxFQUFTO01BQ0wsSUFBSTRFLEdBQUcsS0FBSztNQUNaLElBQUksQ0FBQyxJQUFJLENBQUN0RCxLQUFLLENBQUN4RCxPQUFPLENBQUMrRyxJQUFJLEVBQUU7UUFDMUJELEdBQUcsZ0JBQUdyRixpREFBQTtVQUFLdUMsR0FBRyxFQUFDLDRFQUE0RTtVQUFDQyxHQUFHLEVBQUMsTUFBTTtVQUFDOEIsS0FBSyxFQUFDLElBQUk7VUFBQzNDLFNBQVMsRUFBQztRQUFnQixDQUFFLENBQUM7TUFDbko7TUFDQSxvQkFFSTNCLGlEQUFBO1FBQUkyQixTQUFTLEtBQUFwQyxNQUFBLENBQUssSUFBSSxDQUFDd0MsS0FBSyxDQUFDeEQsT0FBTyxDQUFDK0csSUFBSSxzQkFBc0I7TUFBRyxnQkFDOUR0RixpREFBQSxZQUFJLElBQUksQ0FBQytCLEtBQUssQ0FBQ3hELE9BQU8sQ0FBQ2tCLE9BQVcsQ0FBQyxlQUNuQ08saURBQUE7UUFBTTJCLFNBQVMsRUFBQztNQUFNLEdBQUUsSUFBSTRELElBQUksQ0FBQyxJQUFJLENBQUN4RCxLQUFLLENBQUN4RCxPQUFPLENBQUNpSCxTQUFTLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQVEsQ0FDdEYsQ0FBQztJQUdiO0VBQUM7RUFBQSxPQUFBTCxPQUFBO0FBQUEsRUFuQmlCcEYsNkNBQWU7QUFzQnJDLGlFQUFlb0YsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJJO0FBQ1c7QUFDdUI7QUFFaEM7QUFDSTtBQUNKO0FBRTVCLElBQU16QyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLEtBQUssRUFBSztFQUMvQixPQUFPQSxLQUFLO0FBQ2hCLENBQUM7QUFBQyxJQUVJN0IsS0FBSywwQkFBQUUsZ0JBQUE7RUFBQUMsU0FBQSxDQUFBSCxLQUFBLEVBQUFFLGdCQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFMLEtBQUE7RUFDUCxTQUFBQSxNQUFZZ0IsS0FBSyxFQUFFO0lBQUEsSUFBQWdCLEtBQUE7SUFBQTFCLGVBQUEsT0FBQU4sS0FBQTtJQUNmZ0MsS0FBQSxHQUFBNUIsTUFBQSxDQUFBMEIsSUFBQSxPQUFNZCxLQUFLO0lBQ1hnQixLQUFBLENBQUs0QyxPQUFPLEdBQUczRiw2Q0FBZSxDQUFDLENBQUM7SUFDaEMrQyxLQUFBLENBQUtILEtBQUssR0FBRztNQUNUMUUsRUFBRSxFQUFFLElBQUk7TUFDUjJILGtCQUFrQixFQUFFLENBQUMsQ0FBQztNQUN0QjFDLFdBQVcsRUFBRTtJQUNqQixDQUFDO0lBQUEsT0FBQUosS0FBQTtFQUNMOztFQUVBO0VBQUF2QixZQUFBLENBQUFULEtBQUE7SUFBQVUsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQW9FLFdBQUEsRUFBYTtNQUNULElBQUksQ0FBQ0gsT0FBTyxDQUFDSSxPQUFPLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDRSxZQUFZO0lBQ3RFO0VBQUM7SUFBQXhFLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUF3RSxtQkFBbUJDLFNBQVMsRUFBRTtNQUFBLElBQUFDLHFCQUFBLEVBQUFDLHFCQUFBO01BQzFCLElBQ0ksSUFBSSxDQUFDekQsS0FBSyxDQUFDaUQsa0JBQWtCLElBQUksQ0FBQyxDQUFDLEtBQUFPLHFCQUFBLEdBQ2hDLElBQUksQ0FBQ3JFLEtBQUssQ0FBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUM0RSxLQUFLLENBQUNpRCxrQkFBa0IsQ0FBQyxDQUFDeEgsUUFBUSxjQUFBK0gscUJBQUEsZUFBeERBLHFCQUFBLENBQTBERSxNQUFNLEtBQUFELHFCQUFBLEdBQ2hFRixTQUFTLENBQUNuSSxLQUFLLENBQUMsSUFBSSxDQUFDNEUsS0FBSyxDQUFDaUQsa0JBQWtCLENBQUMsQ0FBQ3hILFFBQVEsY0FBQWdJLHFCQUFBLGVBQXZEQSxxQkFBQSxDQUF5REMsTUFBTSxFQUNwRTtRQUNFLElBQUksQ0FBQ1IsVUFBVSxDQUFDLENBQUM7TUFDckI7SUFDSjtFQUFDO0lBQUFyRSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBb0Isa0JBQUEsRUFBb0I7TUFBQSxJQUFBK0IsTUFBQTtNQUNoQixJQUFNN0IsRUFBRSxHQUFHLElBQUk7TUFDZixJQUFNOUUsRUFBRSxHQUFHLElBQUksQ0FBQzZELEtBQUssQ0FBQzFDLEtBQUssQ0FBQzRDLE1BQU0sQ0FBQy9ELEVBQUU7TUFDckMsSUFBTTJILGtCQUFrQixHQUFHLElBQUksQ0FBQzlELEtBQUssQ0FBQy9ELEtBQUssQ0FBQ3VJLFNBQVMsQ0FDakQsVUFBQWpFLFlBQVksRUFBSTtRQUNaLE9BQU9BLFlBQVksQ0FBQ25FLGNBQWMsSUFBSTBHLE1BQUksQ0FBQzlDLEtBQUssQ0FBQzFDLEtBQUssQ0FBQzRDLE1BQU0sQ0FBQy9ELEVBQUU7TUFDcEUsQ0FDSixDQUFDO01BQ0QsSUFBSSxDQUFDNkcsUUFBUSxDQUFDO1FBQ1ZjLGtCQUFrQixFQUFFQTtNQUN4QixDQUFDLENBQUM7TUFDRixJQUFJLElBQUksQ0FBQzlELEtBQUssQ0FBQy9ELEtBQUssQ0FBQzZILGtCQUFrQixDQUFDLENBQUN4SCxRQUFRLElBQUl5RixTQUFTLEVBQUU7UUFDNUQsSUFBSSxDQUFDL0IsS0FBSyxDQUFDekMsYUFBYSxDQUFDcEIsRUFBRSxDQUFDLENBQUNjLElBQUksQ0FBQyxZQUFNO1VBQ3BDNkYsTUFBSSxDQUFDaUIsVUFBVSxDQUFDLENBQUM7VUFDakIsSUFBSWpCLE1BQUksQ0FBQ2pDLEtBQUssQ0FBQ08sV0FBVyxLQUFLLElBQUksRUFBRTtZQUNqQyxJQUFJekUsR0FBRyxHQUFHLElBQUl1RSxHQUFHLENBQUM0QixNQUFJLENBQUM5QyxLQUFLLENBQUM3QyxNQUFNLENBQUM7WUFDcENSLEdBQUcsQ0FBQ3dFLFlBQVksQ0FBQ3RELE1BQU0sQ0FBQyxPQUFPLG9CQUFBTCxNQUFBLENBQW9Cc0YsTUFBSSxDQUFDOUMsS0FBSyxDQUFDMUMsS0FBSyxDQUFDNEMsTUFBTSxDQUFDL0QsRUFBRSxDQUFFLENBQUM7WUFDaEYyRyxNQUFJLENBQUMxQixXQUFXLEdBQUcsSUFBSUMsV0FBVyxDQUFDMUUsR0FBRyxFQUFFO2NBQ3BDMkUsZUFBZSxFQUFFO1lBQ3JCLENBQUMsQ0FBQztZQUNGd0IsTUFBSSxDQUFDMUIsV0FBVyxDQUFDRyxTQUFTLEdBQUcsVUFBVUMsS0FBSyxFQUFFO2NBQzFDLElBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILEtBQUssQ0FBQ0MsSUFBSSxDQUFDO2NBQ25DO2NBQ0FSLEVBQUUsQ0FBQ2pCLEtBQUssQ0FBQ3pELFdBQVcsQ0FBQ2tGLElBQUksRUFBRUEsSUFBSSxDQUFDbEIsWUFBWSxDQUFDcEUsRUFBRSxDQUFDO1lBQ3BELENBQUM7VUFDTDtRQUNKLENBQUMsQ0FBQztNQUNOLENBQUMsTUFBTTtRQUNILElBQUksQ0FBQzRILFVBQVUsQ0FBQyxDQUFDO01BQ3JCO0lBRUo7RUFBQztJQUFBckUsR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQThFLHFCQUFBLEVBQXVCO01BQ25CLElBQUksSUFBSSxDQUFDNUQsS0FBSyxDQUFDTyxXQUFXLFlBQVlDLFdBQVcsRUFBRTtRQUMvQyxJQUFJLENBQUNSLEtBQUssQ0FBQ08sV0FBVyxDQUFDc0QsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDMUIsUUFBUSxDQUFDO1VBQ1Y1QixXQUFXLEVBQUU7UUFDakIsQ0FBQyxDQUFDO01BQ047SUFDSjtFQUFDO0lBQUExQixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBakIsT0FBQSxFQUFTO01BQ0wsb0JBQ0lULGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBaUIsZ0JBQzVCM0IsaURBQUE7UUFBSzJCLFNBQVMsRUFBQyx5QkFBeUI7UUFBQytFLEdBQUcsRUFBRSxJQUFJLENBQUNmO01BQVEsZ0JBQ3ZEM0YsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFlLGdCQUMxQjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBVSxnQkFDckIzQixpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQUssZ0JBQ2hCM0IsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFRLGdCQUNuQjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBMkIsZ0JBQ3RDM0IsaURBQUE7UUFBTTJCLFNBQVMsRUFBQztNQUFXLGdCQUN2QjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUMsV0FBVztRQUFDWSxHQUFHLEVBQUMseURBQXlEO1FBQUNDLEdBQUcsRUFBQztNQUFhLENBQUUsQ0FFMUcsQ0FBQyxlQUNQeEMsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFlLGdCQUMxQjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUMsV0FBVztRQUFDWSxHQUFHLEVBQUMsb0RBQW9EO1FBQUNDLEdBQUcsRUFBQztNQUFVLENBQUUsQ0FDbkcsQ0FBQyxlQUNOeEMsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFrQixnQkFFN0IzQixpREFBQSxhQUFJLGNBQWdCLENBQUMsZUFDckJBLGlEQUFBLENBQUMwRiwrQ0FBSyxNQUFFLENBQ1AsQ0FDSixDQUNKLENBQ0osQ0FDSixDQUFDLGVBQ04xRixpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQVksZ0JBQ3ZCM0IsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFVLGdCQUNyQjNCLGlEQUFBLGFBRVEsSUFBSSxDQUFDNEMsS0FBSyxDQUFDaUQsa0JBQWtCLElBQUksQ0FBQyxDQUFDLElBQzVCLElBQUksQ0FBQzlELEtBQUssQ0FBQy9ELEtBQUssSUFBSThGLFNBQVMsSUFDN0IsSUFBSSxDQUFDL0IsS0FBSyxDQUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQzRFLEtBQUssQ0FBQ2lELGtCQUFrQixDQUFDLENBQUN4SCxRQUFRLElBQUl5RixTQUFTLEdBQ3RFLElBQUksQ0FBQy9CLEtBQUssQ0FBQy9ELEtBQUssQ0FBQyxJQUFJLENBQUM0RSxLQUFLLENBQUNpRCxrQkFBa0IsQ0FBQyxDQUM1Q3hILFFBQVEsQ0FBQzhGLEdBQUcsQ0FBQyxVQUFDNUYsT0FBTyxFQUFFNkYsS0FBSyxFQUFLO1FBQzlCLG9CQUNJcEUsaURBQUEsQ0FBQ29GLGlEQUFPO1VBQUM3RyxPQUFPLEVBQUVBLE9BQVE7VUFBQ2tELEdBQUcsRUFBRTJDO1FBQU0sQ0FBRSxDQUFDO01BRWpELENBQUMsQ0FBQyxHQUFHLEVBRWpCLENBQ0gsQ0FDSixDQUFDLGVBQ05wRSxpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQVUsZ0JBQ3JCM0IsaURBQUEsQ0FBQ3dFLCtDQUFLO1FBQUN0RyxFQUFFLEVBQUUsSUFBSSxDQUFDNkQsS0FBSyxDQUFDMUMsS0FBSyxDQUFDNEMsTUFBTSxDQUFDL0Q7TUFBRyxDQUFFLENBQUMsZUFDekM4QixpREFBQTtRQUFLMkIsU0FBUyxFQUFDO01BQVcsZ0JBQ3RCM0IsaURBQUE7UUFBSzJCLFNBQVMsRUFBQztNQUFRLGdCQUNuQjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUM7TUFBZ0IsZ0JBQzNCM0IsaURBQUE7UUFBTTJCLFNBQVMsRUFBQztNQUFPLGdCQUN2QjNCLGlEQUFBO1FBQUsyQixTQUFTLEVBQUMsV0FBVztRQUFDWSxHQUFHLEVBQUMsc0RBQXNEO1FBQUNDLEdBQUcsRUFBQztNQUFhLENBQUMsQ0FBQyxrQkFDbkcsQ0FBQyxlQUFBeEMsaURBQUE7UUFBT25DLElBQUksRUFBQyxNQUFNO1FBQUM4SSxJQUFJLEVBQUMsUUFBUTtRQUFDekksRUFBRSxFQUFDLFFBQVE7UUFBQ3lELFNBQVMsRUFBQyxZQUFZO1FBQUNnQyxXQUFXLEVBQUMsYUFBYTtRQUFDLGNBQVc7TUFBYSxDQUFDLENBQzdILENBQ0osQ0FDSixDQUNKLENBQ0osQ0FDSixDQUNKLENBQUM7SUFFZDtFQUFDO0VBQUEsT0FBQTVDLEtBQUE7QUFBQSxFQTlIZWYsNkNBQWU7QUFpSW5DLGlFQUFlMEMscURBQU8sQ0FBQ0MsZUFBZSxFQUFFdkMsbURBQWMsQ0FBQyxDQUFDVyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdJWDtBQUVuRCxJQUFNMkUsS0FBSyxHQUFHLFNBQVJBLEtBQUtBLENBQUEsRUFBUztFQUNsQixJQUFNb0IsV0FBVyxHQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztFQUM3QixJQUFBQyxTQUFBLEdBQTBDSCxnREFBUSxDQUFDRSxXQUFXLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeERHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsVUFBQTtFQUV0Q0gsaURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSU8sUUFBUTs7SUFFWjtJQUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBQSxFQUFTO01BQzNCRCxRQUFRLEdBQUdFLFdBQVcsQ0FBQyxZQUFNO1FBQzNCSCxnQkFBZ0IsQ0FBQyxVQUFBSSxpQkFBaUIsRUFBSTtVQUNwQyxJQUFJQSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7WUFDekIsT0FBT0EsaUJBQWlCLEdBQUcsQ0FBQztVQUM5QixDQUFDLE1BQU07WUFDTEMsYUFBYSxDQUFDSixRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sQ0FBQztVQUNWO1FBQ0YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDOztJQUVEO0lBQ0FDLGNBQWMsQ0FBQyxDQUFDOztJQUVoQjtJQUNBLE9BQU87TUFBQSxPQUFNRyxhQUFhLENBQUNKLFFBQVEsQ0FBQztJQUFBO0VBQ3RDLENBQUMsRUFBRSxFQUFFLENBQUM7O0VBRU47RUFDQSxJQUFNSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDVCxhQUFhLEdBQUcsRUFBRSxDQUFDO0VBQzlDLElBQU1VLE9BQU8sR0FBR1YsYUFBYSxHQUFHLEVBQUU7RUFFbEM7SUFBQTtJQUNFO0lBQ0E7SUFDQWxILGlEQUFBLGNBQ0drSCxhQUFhLEtBQUssQ0FBQyxnQkFDbEJsSCxpREFBQSxZQUFHLHNCQUFpQixDQUFDLGdCQUVyQkEsaURBQUEsWUFBRyxpQkFBZSxFQUFDeUgsT0FBTyxFQUFDLEdBQUMsRUFBQ0csT0FBTyxHQUFHLEVBQUUsT0FBQXJJLE1BQUEsQ0FBT3FJLE9BQU8sSUFBS0EsT0FBVyxDQUV0RTtFQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlbEMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DYixJQUFNdkksaUJBQWlCLEdBQUcsbUJBQW1CO0FBQzdDLElBQU1DLHFCQUFxQixHQUFHLHVCQUF1QjtBQUNyRCxJQUFNQyxZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBa0I7QUFDM0MsSUFBTUMsV0FBVyxHQUFHLGFBQWE7QUFDakMsSUFBTUMsWUFBWSxHQUFHLGNBQWM7QUFDbkMsSUFBTUMsVUFBVSxHQUFHLFlBQVk7QUFDL0IsSUFBTUMsWUFBWSxHQUFHLGNBQWM7QUFDbkMsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaEI7QUFFbEMsaUVBQWUsWUFNRDtFQUFBLElBTkVpRixLQUFLLEdBQUFyQixTQUFBLENBQUErRSxNQUFBLFFBQUEvRSxTQUFBLFFBQUF1QyxTQUFBLEdBQUF2QyxTQUFBLE1BQUc7SUFDcEJzRyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsYUFBYSxFQUFFLEtBQUs7SUFDcEI5SixLQUFLLEVBQUUsRUFBRTtJQUNUa0IsTUFBTSxFQUFFLElBQUk7SUFDWk4sUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUFBLElBQUVxRyxNQUFNLEdBQUExRCxTQUFBLENBQUErRSxNQUFBLE9BQUEvRSxTQUFBLE1BQUF1QyxTQUFBO0VBQ0wsUUFBUW1CLE1BQU0sQ0FBQ3BILElBQUk7SUFDZixLQUFLVixzRUFBaUI7TUFDbEIsT0FBQTRLLGFBQUEsQ0FBQUEsYUFBQSxLQUNPbkYsS0FBSztRQUNSaUYsVUFBVSxFQUFFLElBQUk7UUFDaEJDLGFBQWEsRUFBRTtNQUFLO0lBRTVCLEtBQUsxSywwRUFBcUI7TUFDdEIsT0FBQTJLLGFBQUEsQ0FBQUEsYUFBQSxLQUNPbkYsS0FBSztRQUNSaUYsVUFBVSxFQUFFLEtBQUs7UUFDakJDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCOUosS0FBSyxFQUFFaUgsTUFBTSxDQUFDakg7TUFBSztJQUUzQixLQUFLWCxpRUFBWTtNQUNiLE9BQUEwSyxhQUFBLENBQUFBLGFBQUEsS0FDT25GLEtBQUs7UUFDUmlGLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxhQUFhLEVBQUU7TUFBSztJQUU1QixLQUFLeEsscUVBQWdCO01BQ2pCLElBQU0wSyxpQkFBaUIsR0FBR3BGLEtBQUssQ0FBQzVFLEtBQUssQ0FBQ21HLEdBQUcsQ0FBQyxVQUFDN0IsWUFBWSxFQUFLO1FBQ3hELE9BQU9BLFlBQVksQ0FBQ25FLGNBQWMsSUFBSThHLE1BQU0sQ0FBQzlHLGNBQWMsR0FDckQ4SixNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTVGLFlBQVksRUFBRTtVQUFDakUsUUFBUSxFQUFFNEcsTUFBTSxDQUFDNUc7UUFBUSxDQUFDLENBQUMsR0FDNURpRSxZQUFZO01BRXRCLENBQUMsQ0FBQztNQUVGLE9BQUF5RixhQUFBLENBQUFBLGFBQUEsS0FDT25GLEtBQUs7UUFDUmlGLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxhQUFhLEVBQUUsS0FBSztRQUNwQjlKLEtBQUssRUFBQW1LLGtCQUFBLENBQU1ILGlCQUFpQjtNQUFDO0lBR3JDLEtBQUt6SyxnRUFBVztNQUNaLElBQU02SyxjQUFjLEdBQUd4RixLQUFLLENBQUM1RSxLQUFLLENBQUNtRyxHQUFHLENBQUMsVUFBQWtFLElBQUksRUFBSTtRQUMzQyxPQUFPQSxJQUFJLENBQUNsSyxjQUFjLElBQUk4RyxNQUFNLENBQUM5RyxjQUFjLEdBR3ZDOEosTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVHLElBQUksRUFBRTtVQUFDaEssUUFBUSxLQUFBa0IsTUFBQSxDQUFBNEksa0JBQUEsQ0FBTUUsSUFBSSxDQUFDaEssUUFBUSxJQUFFNEcsTUFBTSxDQUFDMUcsT0FBTztRQUFDLENBQUMsQ0FBQyxHQUU3RTBKLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRyxJQUFJLENBQUM7TUFDakMsQ0FBQyxDQUFDO01BQ0YsT0FBQU4sYUFBQSxDQUFBQSxhQUFBLEtBQ09uRixLQUFLO1FBQ1JpRixVQUFVLEVBQUUsS0FBSztRQUNqQkMsYUFBYSxFQUFFLEtBQUs7UUFDcEI5SixLQUFLLEVBQUFtSyxrQkFBQSxDQUFNQyxjQUFjO01BQUM7SUFFbEMsS0FBS3pLLHFFQUFnQjtNQUNqQixJQUFNMkssZUFBZSxHQUFHMUYsS0FBSyxDQUFDNUUsS0FBSyxDQUFDbUcsR0FBRyxDQUFDLFVBQUFrRSxJQUFJLEVBQUk7UUFDNUMsT0FBT0EsSUFBSSxDQUFDbEssY0FBYyxJQUFJOEcsTUFBTSxDQUFDOUcsY0FBYyxJQUczQ2tLLElBQUksQ0FBQzVJLE9BQU8sR0FBR3dGLE1BQU0sQ0FBQzFHLE9BQU8sQ0FBQ2tCLE9BQU8sRUFDckM0SSxJQUFJLENBQUNuRSxTQUFTLEdBQUdlLE1BQU0sQ0FBQzFHLE9BQU8sQ0FBQzJGLFNBQVMsRUFDekMrRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUcsSUFBSSxDQUFDLElBRXpCSixNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRUcsSUFBSSxDQUFDO01BQ2pDLENBQUMsQ0FBQztNQUNGLE9BQUFOLGFBQUEsQ0FBQUEsYUFBQSxLQUNPbkYsS0FBSztRQUNSaUYsVUFBVSxFQUFFLEtBQUs7UUFDakJDLGFBQWEsRUFBRSxLQUFLO1FBQ3BCOUosS0FBSyxFQUFBbUssa0JBQUEsQ0FBTUcsZUFBZTtNQUFDO0lBRW5DLEtBQUs3SywrREFBVTtNQUNYLE9BQUFzSyxhQUFBLENBQUFBLGFBQUEsS0FDT25GLEtBQUs7UUFDUmlGLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxhQUFhLEVBQUUsS0FBSztRQUNwQjVJLE1BQU0sRUFBRStGLE1BQU0sQ0FBQ3ZHO01BQUc7SUFFMUIsS0FBS2hCLGlFQUFZO01BQ2IsT0FBQXFLLGFBQUEsQ0FBQUEsYUFBQSxLQUNPbkYsS0FBSztRQUNSaEUsUUFBUSxFQUFFcUcsTUFBTSxDQUFDckc7TUFBUTtJQUVqQztNQUNJLE9BQU9nRSxLQUFLO0VBQ3BCO0FBRUosQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR2lEO0FBQ25CO0FBQ2U7QUFFOUMsSUFBSTNDLEtBQUssR0FBR3NJLGtEQUFXLENBQUNHLDhEQUFRLEVBQUVGLHNEQUFlLENBQUNDLG1EQUFLLENBQUMsQ0FBQztBQUV6RCxpRUFBZXhJLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9hY3Rpb25zL2NvbnZlcnNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9MZWZ0L0NvbnZlcnNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL0xlZnQvTGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L0JsYW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9NZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvUmlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvcmVkdWNlcnMvY29udmVyc2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL3N0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgR0VUX0NPTlZFUlNBVElPTlMsXG4gICAgUkVDSUVWRV9DT05WRVJTQVRJT05TLFxuICAgIEdFVF9NRVNTQUdFUyxcbiAgICBSRUNJRVZFX01FU1NBR0VTLFxuICAgIEFERF9NRVNTQUdFLFxuICAgIFBPU1RfTUVTU0FHRSxcbiAgICBTRVRfSFVCVVJMLCBTRVRfVVNFUk5BTUUsIFNFVF9MQVNUX01FU1NBR0Vcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdENvbnZlcnNhdGlvbnMgPSAoKSA9PiAoe1xuICAgIHR5cGU6IEdFVF9DT05WRVJTQVRJT05TLFxufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlQ29udmVyc2F0aW9ucyA9IChqc29uKSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIHR5cGU6IFJFQ0lFVkVfQ09OVkVSU0FUSU9OUyxcbiAgICAgICAgaXRlbXM6IGpzb24sXG4gICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0TWVzc2FnZXMgPSAoaWQpID0+ICh7XG4gICAgdHlwZTogR0VUX01FU1NBR0VTLFxuICAgIGNvbnZlcnNhdGlvbklkOiBpZFxufSk7XG5cbmV4cG9ydCBjb25zdCByZWNlaXZlTWVzc2FnZXMgPSAoanNvbiwgaWQpID0+IHtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgdHlwZTogUkVDSUVWRV9NRVNTQUdFUyxcbiAgICAgICAgbWVzc2FnZXM6IGpzb24sXG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBpZFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHBvc3RNZXNzYWdlID0gKGpzb24sIGlkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogQUREX01FU1NBR0UsXG4gICAgICAgIG1lc3NhZ2U6IGpzb24sXG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBpZFxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZXRMYXN0TWVzc2FnZSA9IChtZXNzYWdlLCBjb252ZXJzYXRpb25JZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFVF9MQVNUX01FU1NBR0UsXG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGNvbnZlcnNhdGlvbklkXG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNldEh1YnVybCA9ICh1cmwpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfSFVCVVJMLFxuICAgICAgICB1cmxcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFVzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX1VTRVJOQU1FLFxuICAgICAgICB1c2VybmFtZVxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbnZlcnNhdGlvbnMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENvbnZlcnNhdGlvbnMoKSk7XG4gICAgcmV0dXJuIGZldGNoKGAvY29udmVyc2F0aW9ucy9gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzZXQgdGhlIEhVQiBVUkwgcmlnaHQgaGVyZVxuICAgICAgICAgICAgY29uc3QgaHViVXJsID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xpbmsnKS5tYXRjaCgvPChbXj5dKyk+O1xccytyZWw9KD86bWVyY3VyZXxcIlteXCJdKm1lcmN1cmVbXlwiXSpcIikvKVsxXVxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SHVidXJsKGh1YlVybCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChyZWNlaXZlQ29udmVyc2F0aW9ucyhqc29uKSlcbiAgICAgICAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdE1lc3NhZ2VzKGlkKSk7XG4gICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtpZH1gKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHJlY2VpdmVNZXNzYWdlcyhqc29uLCBpZCkpXG4gICAgICAgIH0pXG59O1xuXG5cbmV4cG9ydCBjb25zdCBhZGRNZXNzYWdlID0gKGNvbnRlbnQsIGNvbnZlcnNhdGlvbklkKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XG4gICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExhc3RNZXNzYWdlKGpzb24sIGNvbnZlcnNhdGlvbklkKSlcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChwb3N0TWVzc2FnZShqc29uLCBjb252ZXJzYXRpb25JZCkpXG4gICAgICAgIH0pXG59OyIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge01lbW9yeVJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb252ZXJzYXRpb24nXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbnN0b3JlLmRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNldFVzZXJuYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5kYXRhc2V0LnVzZXJuYW1lKSk7XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxNZW1vcnlSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9NZW1vcnlSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBMZWZ0IGZyb20gXCIuL0xlZnQvTGVmdFwiO1xuaW1wb3J0IFJpZ2h0IGZyb20gXCIuL1JpZ2h0L1JpZ2h0XCI7XG5pbXBvcnQgQmxhbmsgZnJvbSBcIi4vUmlnaHQvQmxhbmtcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17Qmxhbmt9IGV4YWN0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb252ZXJzYXRpb24vOmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3Byb3BzID0+IDxSaWdodCB7Li4ucHJvcHN9IGtleT17cHJvcHMubWF0Y2gucGFyYW1zLmlkfT48L1JpZ2h0PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNsYXNzIENvbnZlcnNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsgdG89e1wiL2NvbnZlcnNhdGlvbi9cIiArIHRoaXMucHJvcHMuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkfSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvdXNlci5wbmdcIiBhbHQ9XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhY3RpdmVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1zLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLmNvbnZlcnNhdGlvbi5Qc2V1ZG99PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuY29udmVyc2F0aW9uLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udmVyc2F0aW9uIGZyb20gXCIuL0NvbnZlcnNhdGlvblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9jb252ZXJzYXRpb24nXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmNsYXNzIExlZnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBfdCA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hDb252ZXJzYXRpb25zKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHRoaXMucHJvcHMuaHViVXJsKTtcbiAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCBgL2NvbnZlcnNhdGlvbnMvJHt0aGlzLnByb3BzLnVzZXJuYW1lfWApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRTb3VyY2Uub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBfdC5wcm9wcy5zZXRMYXN0TWVzc2FnZShkYXRhLCBkYXRhLmNvbnZlcnNhdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0bGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbmxpbmVGb3JtSW5wdXRHcm91cFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXJpYS1sYWJlbD1cInNlYXJjaFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYWRkXCIgaHJlZj1cIiNcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vbWVoZWRpaHRtbC5jb20vY2hhdGJveC9hc3NldHMvaW1nL2FkZC5zdmdcIiBhbHQ9XCJhZGRcIi8+PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIiBpZD1cIm15VGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgaWQ9XCJPcGVuLXRhYlwiIGRhdGEtYnMtdG9nZ2xlPVwidGFiXCIgZGF0YS1icy10YXJnZXQ9XCIjT3BlblwiIHR5cGU9XCJidXR0b25cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cIk9wZW5cIiBhcmlhLXNlbGVjdGVkPVwidHJ1ZVwiPk9wZW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBpZD1cIkNsb3NlZC10YWJcIiBkYXRhLWJzLXRvZ2dsZT1cInRhYlwiIGRhdGEtYnMtdGFyZ2V0PVwiI0Nsb3NlZFwiIHR5cGU9XCJidXR0b25cIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cIkNsb3NlZFwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPkNsb3NlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWxpc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCIgaWQ9XCJteVRhYkNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGZhZGUgYWN0aXZlIHNob3dcIiBpZD1cImhvbWVcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJPcGVuLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaXRlbXMgIT0gdW5kZWZpbmVkID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGNvbnZlcnNhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udmVyc2F0aW9uIGNvbnZlcnNhdGlvbj17Y29udmVyc2F0aW9ufSBrZXk9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgIH1cbn1cblxuICAgICAgICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25DcmVhdG9ycykoTGVmdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBCbGFuayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IHB4LTBcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ319PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsYW5rOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29udGVudDogJydcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UgPSB0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRNZXNzYWdlKHRoaXMuc3RhdGUuY29udGVudCwgdGhpcy5wcm9wcy5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb250ZW50OiAnJ30pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAge2NvbnRlbnQ6IGV2ZW50LnRhcmdldC52YWx1ZX1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCIgYXJpYS1kZXNjcmliZWRieT1cImJ1dHRvbi1hZGRvbjJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRlbnR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnNlbmRNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGFwZXItcGxhbmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbkNyZWF0b3JzKShJbnB1dCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgaW1nID0gYGA7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5tZXNzYWdlLm1pbmUpIHtcbiAgICAgICAgICAgIGltZyA9IDxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWhtZC9pbWFnZS91cGxvYWQvdjE1NjQ5NjAzOTUvYXZhdGFyX3VzYWU3ei5zdmdcIiBhbHQ9XCJ1c2VyXCIgd2lkdGg9XCI1MFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlXCIgLz47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5tZXNzYWdlLm1pbmUgPyBgc2VuZGVyYCA6IGByZXBhbHlgfWB9ID5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5tZXNzYWdlLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj57bmV3IERhdGUodGhpcy5wcm9wcy5tZXNzYWdlLkNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi9NZXNzYWdlXCI7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmNsYXNzIFJpZ2h0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYm9keVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBfY29udmVyc2F0aW9uSW5kZXg6IC0xLFxuICAgICAgICAgICAgZXZlbnRTb3VyY2U6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNjcm9sbCBkb3duIHRvIHRoZSBsYXRlc3QgbWVzc2FnZVxuICAgIHNjcm9sbERvd24oKSB7XG4gICAgICAgIHRoaXMuYm9keVJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IHRoaXMuYm9keVJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuX2NvbnZlcnNhdGlvbkluZGV4ICE9IC0xXG4gICAgICAgICAgICAmJiB0aGlzLnByb3BzLml0ZW1zW3RoaXMuc3RhdGUuX2NvbnZlcnNhdGlvbkluZGV4XS5tZXNzYWdlcz8ubGVuZ3RoXG4gICAgICAgICAgICAmJiBwcmV2UHJvcHMuaXRlbXNbdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXhdLm1lc3NhZ2VzPy5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCBfdCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICAgIGNvbnN0IF9jb252ZXJzYXRpb25JbmRleCA9IHRoaXMucHJvcHMuaXRlbXMuZmluZEluZGV4KFxuICAgICAgICAgICAgY29udmVyc2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkID09IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgX2NvbnZlcnNhdGlvbkluZGV4OiBfY29udmVyc2F0aW9uSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLml0ZW1zW19jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoTWVzc2FnZXMoaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50U291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHRoaXMucHJvcHMuaHViVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3RvcGljJywgYC9jb252ZXJzYXRpb25zLyR7dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9YClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90LnByb3BzLnBvc3RNZXNzYWdlKGRhdGEsIGRhdGEuY29udmVyc2F0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5ldmVudFNvdXJjZSBpbnN0YW5jZW9mIEV2ZW50U291cmNlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmV2ZW50U291cmNlLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZTogbnVsbFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdGJveCBzaG93Ym94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiIHJlZj17dGhpcy5ib2R5UmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zZy1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYXQtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vbWVoZWRpaHRtbC5jb20vY2hhdGJveC9hc3NldHMvaW1nL2Fycm9sZWZ0dC5zdmdcIiBhbHQ9XCJpbWFnZSB0aXRsZVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvdXNlci5wbmdcIiBhbHQ9XCJ1c2VyIGltZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMSBtcy0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+TWVoZWRpIEhhc2FuPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuX2NvbnZlcnNhdGlvbkluZGV4ICE9IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMucHJvcHMuaXRlbXMgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMucHJvcHMuaXRlbXNbdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXhdLm1lc3NhZ2VzICE9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuaXRlbXNbdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIG1lc3NhZ2U9e21lc3NhZ2V9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGlkPXt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbmQtYnRuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dGFjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL21laGVkaWh0bWwuY29tL2NoYXRib3gvYXNzZXRzL2ltZy91cGxvYWQuc3ZnXCIgYWx0PVwiaW1hZ2UgdGl0bGVcIi8+IGF0dGFjaGVkIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cInVwbG9hZFwiIGlkPVwidXBsb2FkXCIgY2xhc3NOYW1lPVwidXBsb2FkLWJveFwiIHBsYWNlaG9sZGVyPVwiVXBsb2FkIEZpbGVcIiBhcmlhLWxhYmVsPVwiVXBsb2FkIEZpbGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25DcmVhdG9ycykoUmlnaHQpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGltZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFRpbWUgPSAgMiAqIDYwOyAvLyAxMCBtaW51dGVzIGVuIHNlY29uZGVzXHJcbiAgY29uc3QgW3JlbWFpbmluZ1RpbWUsIHNldFJlbWFpbmluZ1RpbWVdID0gdXNlU3RhdGUoaW5pdGlhbFRpbWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGludGVydmFsO1xyXG5cclxuICAgIC8vIETDqW1hcnJlIGxlIGNvbXB0ZSDDoCByZWJvdXJzXHJcbiAgICBjb25zdCBzdGFydENvdW50ZG93biA9ICgpID0+IHtcclxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0UmVtYWluaW5nVGltZShwcmV2UmVtYWluaW5nVGltZSA9PiB7XHJcbiAgICAgICAgICBpZiAocHJldlJlbWFpbmluZ1RpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2UmVtYWluaW5nVGltZSAtIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8gQXJyw6p0ZSBsZSBjb21wdGUgw6AgcmVib3VycyBsb3JzcXVlIGxlIHRlbXBzIGF0dGVpbnQgMFxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMTAwMCk7IC8vIE1ldHRyZSDDoCBqb3VyIGxlIHRlbXBzIHRvdXRlcyBsZXMgMTAwMCBtcyAoMSBzZWNvbmRlKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEw6ltYXJyZXIgbGUgY29tcHRlIMOgIHJlYm91cnMgcXVhbmQgbGUgY29tcG9zYW50IGVzdCBtb250w6lcclxuICAgIHN0YXJ0Q291bnRkb3duKCk7XHJcblxyXG4gICAgLy8gQXJyw6p0ZXIgbGUgY29tcHRlIMOgIHJlYm91cnMgcXVhbmQgbGUgY29tcG9zYW50IGVzdCBkw6ltb250w6lcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIENvbnZlcnRpciBsZSB0ZW1wcyBlbiBtaW51dGVzIGV0IHNlY29uZGVzIHBvdXIgbCdhZmZpY2hhZ2VcclxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihyZW1haW5pbmdUaW1lIC8gNjApO1xyXG4gIGNvbnN0IHNlY29uZHMgPSByZW1haW5pbmdUaW1lICUgNjA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBBZmZpY2hlciBsZSB0ZW1wcyByZXN0YW50LCBldCBsZSBsZSB0ZW1wcyA9IDAsIGFmZmljaGVyIGxlIG1lc3NhZ2VcclxuICAgIC8vIFwiVGVtcHMgw6ljb3Vsw6lcIlxyXG4gICAgPGRpdj5cclxuICAgICAge3JlbWFpbmluZ1RpbWUgPT09IDAgPyAoXHJcbiAgICAgICAgPHA+VGVtcHMgw6ljb3Vsw6kgITwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD5UZW1wcyByZXN0YW50OiB7bWludXRlc306e3NlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBzZWNvbmRzfTwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lcjtcclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9DT05WRVJTQVRJT05TID0gJ0dFVF9DT05WRVJTQVRJT05TJztcbmV4cG9ydCBjb25zdCBSRUNJRVZFX0NPTlZFUlNBVElPTlMgPSAnUkVDSUVWRV9DT05WRVJTQVRJT05TJztcbmV4cG9ydCBjb25zdCBHRVRfTUVTU0FHRVMgPSAnR0VUX01FU1NBR0VTJztcbmV4cG9ydCBjb25zdCBSRUNJRVZFX01FU1NBR0VTID0gJ1JFQ0lFVkVfTUVTU0FHRVMnO1xuZXhwb3J0IGNvbnN0IEFERF9NRVNTQUdFID0gJ0FERF9NRVNTQUdFJztcbmV4cG9ydCBjb25zdCBQT1NUX01FU1NBR0UgPSAnUE9TVF9NRVNTQUdFJztcbmV4cG9ydCBjb25zdCBTRVRfSFVCVVJMID0gJ1NFVF9IVUJVUkwnO1xuZXhwb3J0IGNvbnN0IFNFVF9VU0VSTkFNRSA9ICdTRVRfVVNFUk5BTUUnO1xuZXhwb3J0IGNvbnN0IFNFVF9MQVNUX01FU1NBR0UgPSAnU0VUX0xBU1RfTUVTU0FHRSc7IiwiaW1wb3J0IHtcbiAgICBHRVRfQ09OVkVSU0FUSU9OUywgUkVDSUVWRV9DT05WRVJTQVRJT05TLFxuICAgIEdFVF9NRVNTQUdFUywgUkVDSUVWRV9NRVNTQUdFUyxcbiAgICBQT1NUX01FU1NBR0UsIEFERF9NRVNTQUdFLCBTRVRfSFVCVVJMLCBTRVRfVVNFUk5BTUUsXG4gICAgU0VUX0xBU1RfTUVTU0FHRVxufSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICBpdGVtczogW10sXG4gICAgaHViVXJsOiBudWxsLFxuICAgIHVzZXJuYW1lOiBudWxsXG59LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgR0VUX0NPTlZFUlNBVElPTlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgUkVDSUVWRV9DT05WRVJTQVRJT05TOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEdFVF9NRVNTQUdFUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBSRUNJRVZFX01FU1NBR0VTOlxuICAgICAgICAgICAgY29uc3QgX25ld0NvbnZlcnNhdGlvbnMgPSBzdGF0ZS5pdGVtcy5tYXAoKGNvbnZlcnNhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSWQgPT0gYWN0aW9uLmNvbnZlcnNhdGlvbklkXG4gICAgICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgY29udmVyc2F0aW9uLCB7bWVzc2FnZXM6IGFjdGlvbi5tZXNzYWdlc30pXG4gICAgICAgICAgICAgICAgICAgIDogY29udmVyc2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4uX25ld0NvbnZlcnNhdGlvbnNdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgQUREX01FU1NBR0U6XG4gICAgICAgICAgICBjb25zdCBfbmV3SXRlbXNGaW5hbCA9IHN0YXRlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jb252ZXJzYXRpb25JZCA9PSBhY3Rpb24uY29udmVyc2F0aW9uSWRcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge21lc3NhZ2VzOiBbLi4uaXRlbS5tZXNzYWdlcywgYWN0aW9uLm1lc3NhZ2VdfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4uX25ld0l0ZW1zRmluYWxdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNFVF9MQVNUX01FU1NBR0U6XG4gICAgICAgICAgICBjb25zdCBfbmV3SXRlbXNGaW5hbDIgPSBzdGF0ZS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY29udmVyc2F0aW9uSWQgPT0gYWN0aW9uLmNvbnZlcnNhdGlvbklkXG4gICAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb250ZW50ID0gYWN0aW9uLm1lc3NhZ2UuY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3JlYXRlZEF0ID0gYWN0aW9uLm1lc3NhZ2UuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4uX25ld0l0ZW1zRmluYWwyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTRVRfSFVCVVJMOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBodWJVcmw6IGFjdGlvbi51cmxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0VUX1VTRVJOQU1FOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogYWN0aW9uLnVzZXJuYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzL2NvbnZlcnNhdGlvbidcblxubGV0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJuYW1lcyI6WyJHRVRfQ09OVkVSU0FUSU9OUyIsIlJFQ0lFVkVfQ09OVkVSU0FUSU9OUyIsIkdFVF9NRVNTQUdFUyIsIlJFQ0lFVkVfTUVTU0FHRVMiLCJBRERfTUVTU0FHRSIsIlBPU1RfTUVTU0FHRSIsIlNFVF9IVUJVUkwiLCJTRVRfVVNFUk5BTUUiLCJTRVRfTEFTVF9NRVNTQUdFIiwicmVxdWVzdENvbnZlcnNhdGlvbnMiLCJ0eXBlIiwicmVjZWl2ZUNvbnZlcnNhdGlvbnMiLCJqc29uIiwiaXRlbXMiLCJyZXF1ZXN0TWVzc2FnZXMiLCJpZCIsImNvbnZlcnNhdGlvbklkIiwicmVjZWl2ZU1lc3NhZ2VzIiwibWVzc2FnZXMiLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2UiLCJzZXRMYXN0TWVzc2FnZSIsInNldEh1YnVybCIsInVybCIsInNldFVzZXJuYW1lIiwidXNlcm5hbWUiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJkaXNwYXRjaCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiaHViVXJsIiwiaGVhZGVycyIsImdldCIsIm1hdGNoIiwiZmV0Y2hNZXNzYWdlcyIsImNvbmNhdCIsImFkZE1lc3NhZ2UiLCJjb250ZW50IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsImJvZHkiLCJSZWFjdERPTSIsIlJlYWN0Iiwic3RvcmUiLCJQcm92aWRlciIsIk1lbW9yeVJvdXRlciIsImFjdGlvbkNyZWF0b3JzIiwiQXBwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJvdXRlIiwiU3dpdGNoIiwiTGVmdCIsIlJpZ2h0IiwiQmxhbmsiLCJfUmVhY3QkQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsInBhdGgiLCJjb21wb25lbnQiLCJleGFjdCIsInByb3BzIiwiX2V4dGVuZHMiLCJwYXJhbXMiLCJDb21wb25lbnQiLCJMaW5rIiwiQ29udmVyc2F0aW9uIiwidG8iLCJjb252ZXJzYXRpb24iLCJzcmMiLCJhbHQiLCJQc2V1ZG8iLCJjb25uZWN0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjYWxsIiwiY29tcG9uZW50RGlkTW91bnQiLCJfdGhpcyIsIl90IiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZXZlbnRTb3VyY2UiLCJFdmVudFNvdXJjZSIsIndpdGhDcmVkZW50aWFscyIsIm9ubWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInBsYWNlaG9sZGVyIiwiaHJlZiIsInJvbGUiLCJ1bmRlZmluZWQiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJtYXAiLCJpbmRleCIsInN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbnB1dCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VuZE1lc3NhZ2UiLCJfdGhpczIiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwidGFyZ2V0IiwiYWN0aW9uIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiTWVzc2FnZSIsImltZyIsIm1pbmUiLCJEYXRlIiwiQ3JlYXRlZEF0IiwidG9Mb2NhbGVTdHJpbmciLCJUaW1lciIsImJvZHlSZWYiLCJjcmVhdGVSZWYiLCJfY29udmVyc2F0aW9uSW5kZXgiLCJzY3JvbGxEb3duIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsIl90aGlzJHByb3BzJGl0ZW1zJHRoaSIsIl9wcmV2UHJvcHMkaXRlbXMkdGhpcyIsImxlbmd0aCIsImZpbmRJbmRleCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xvc2UiLCJyZWYiLCJuYW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpbml0aWFsVGltZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInJlbWFpbmluZ1RpbWUiLCJzZXRSZW1haW5pbmdUaW1lIiwiaW50ZXJ2YWwiLCJzdGFydENvdW50ZG93biIsInNldEludGVydmFsIiwicHJldlJlbWFpbmluZ1RpbWUiLCJjbGVhckludGVydmFsIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJpc0ZldGNoaW5nIiwiZGlkSW52YWxpZGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJfbmV3Q29udmVyc2F0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9uZXdJdGVtc0ZpbmFsIiwiaXRlbSIsIl9uZXdJdGVtc0ZpbmFsMiIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJyZWR1Y2VycyJdLCJzb3VyY2VSb290IjoiIn0=