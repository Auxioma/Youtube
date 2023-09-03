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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("h3", null, "Mehedi Hasan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement(_Timer_Timer__WEBPACK_IMPORTED_MODULE_31__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26__.createElement("div", {
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
  var initialTime = 1 * 60; // 10 minutes en secondes
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0UsU0FBUyxHQUFHcEQsTUFBTSxDQUFDNUcsT0FBTyxDQUFDZ0ssU0FBUyxFQUN6Q04sTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVHLElBQUksQ0FBQyxJQUV6QkosTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUVHLElBQUksQ0FBQztNQUNqQyxDQUFDLENBQUM7TUFDRixPQUFBTixhQUFBLENBQUFBLGFBQUEsS0FDT2hGLEtBQUs7UUFDUjhFLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxhQUFhLEVBQUUsS0FBSztRQUNwQjlKLEtBQUssRUFBQW1LLGtCQUFBLENBQU1HLGVBQWU7TUFBQztJQUVuQyxLQUFLN0ssK0RBQVU7TUFDWCxPQUFBc0ssYUFBQSxDQUFBQSxhQUFBLEtBQ09oRixLQUFLO1FBQ1I4RSxVQUFVLEVBQUUsS0FBSztRQUNqQkMsYUFBYSxFQUFFLEtBQUs7UUFDcEI1SSxNQUFNLEVBQUVpRyxNQUFNLENBQUN6RztNQUFHO0lBRTFCLEtBQUtoQixpRUFBWTtNQUNiLE9BQUFxSyxhQUFBLENBQUFBLGFBQUEsS0FDT2hGLEtBQUs7UUFDUm5FLFFBQVEsRUFBRXVHLE1BQU0sQ0FBQ3ZHO01BQVE7SUFFakM7TUFDSSxPQUFPbUUsS0FBSztFQUNwQjtBQUVKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdpRDtBQUNuQjtBQUNlO0FBRTlDLElBQUk5QyxLQUFLLEdBQUd1SSxrREFBVyxDQUFDRyw4REFBUSxFQUFFRixzREFBZSxDQUFDQyxtREFBSyxDQUFDLENBQUM7QUFFekQsaUVBQWV6SSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvYWN0aW9ucy9jb252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvTGVmdC9Db252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9MZWZ0L0xlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L0lucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9jb21wb25lbnRzL1JpZ2h0L1JpZ2h0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL2NvbXBvbmVudHMvUmlnaHQvVGltZXIvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NoYXQvanMvY29uc3RhbnRzL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jaGF0L2pzL3JlZHVjZXJzL2NvbnZlcnNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY2hhdC9qcy9zdG9yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgR0VUX0NPTlZFUlNBVElPTlMsXHJcbiAgICBSRUNJRVZFX0NPTlZFUlNBVElPTlMsXHJcbiAgICBHRVRfTUVTU0FHRVMsXHJcbiAgICBSRUNJRVZFX01FU1NBR0VTLFxyXG4gICAgQUREX01FU1NBR0UsXHJcbiAgICBQT1NUX01FU1NBR0UsXHJcbiAgICBTRVRfSFVCVVJMLCBcclxuICAgIFNFVF9VU0VSTkFNRSwgXHJcbiAgICBTRVRfTEFTVF9NRVNTQUdFLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0Q29udmVyc2F0aW9ucyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBHRVRfQ09OVkVSU0FUSU9OUyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVjZWl2ZUNvbnZlcnNhdGlvbnMgPSAoanNvbikgPT4ge1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgdHlwZTogUkVDSUVWRV9DT05WRVJTQVRJT05TLFxyXG4gICAgICAgIGl0ZW1zOiBqc29uLFxyXG4gICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0TWVzc2FnZXMgPSAoaWQpID0+ICh7XHJcbiAgICB0eXBlOiBHRVRfTUVTU0FHRVMsXHJcbiAgICBjb252ZXJzYXRpb25JZDogaWRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1lc3NhZ2VzID0gKGpzb24sIGlkKSA9PiB7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICB0eXBlOiBSRUNJRVZFX01FU1NBR0VTLFxyXG4gICAgICAgIG1lc3NhZ2VzOiBqc29uLFxyXG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBpZFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdE1lc3NhZ2UgPSAoanNvbiwgaWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQUREX01FU1NBR0UsXHJcbiAgICAgICAgbWVzc2FnZToganNvbixcclxuICAgICAgICBjb252ZXJzYXRpb25JZDogaWRcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMYXN0TWVzc2FnZSA9IChtZXNzYWdlLCBjb252ZXJzYXRpb25JZCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBTRVRfTEFTVF9NRVNTQUdFLFxyXG4gICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgY29udmVyc2F0aW9uSWRcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRIdWJ1cmwgPSAodXJsKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNFVF9IVUJVUkwsXHJcbiAgICAgICAgdXJsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXJuYW1lID0gKHVzZXJuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNFVF9VU0VSTkFNRSxcclxuICAgICAgICB1c2VybmFtZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ29udmVyc2F0aW9ucyA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHJlcXVlc3RDb252ZXJzYXRpb25zKCkpO1xyXG4gICAgcmV0dXJuIGZldGNoKGAvY29udmVyc2F0aW9ucy9gKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogc2V0IHRoZSBIVUIgVVJMIHJpZ2h0IGhlcmVcclxuICAgICAgICAgICAgY29uc3QgaHViVXJsID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xpbmsnKS5tYXRjaCgvPChbXj5dKyk+O1xccytyZWw9KD86bWVyY3VyZXxcIlteXCJdKm1lcmN1cmVbXlwiXSpcIikvKVsxXVxyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRIdWJ1cmwoaHViVXJsKSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2gocmVjZWl2ZUNvbnZlcnNhdGlvbnMoanNvbikpXHJcbiAgICAgICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE1lc3NhZ2VzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChyZXF1ZXN0TWVzc2FnZXMoaWQpKTtcclxuICAgIHJldHVybiBmZXRjaChgL21lc3NhZ2VzLyR7aWR9YClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChyZWNlaXZlTWVzc2FnZXMoanNvbiwgaWQpKVxyXG4gICAgICAgIH0pXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE1lc3NhZ2UgPSAoY29udGVudCwgY29udmVyc2F0aW9uSWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9tZXNzYWdlcy8ke2NvbnZlcnNhdGlvbklkfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TGFzdE1lc3NhZ2UoanNvbiwgY29udmVyc2F0aW9uSWQpKVxyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2gocG9zdE1lc3NhZ2UoanNvbiwgY29udmVyc2F0aW9uSWQpKVxyXG4gICAgICAgIH0pXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge01lbW9yeVJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYWN0aW9ucy9jb252ZXJzYXRpb24nXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5cbnN0b3JlLmRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNldFVzZXJuYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5kYXRhc2V0LnVzZXJuYW1lKSk7XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxNZW1vcnlSb3V0ZXI+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9NZW1vcnlSb3V0ZXI+XG4gICAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBMZWZ0IGZyb20gXCIuL0xlZnQvTGVmdFwiO1xuaW1wb3J0IFJpZ2h0IGZyb20gXCIuL1JpZ2h0L1JpZ2h0XCI7XG5pbXBvcnQgQmxhbmsgZnJvbSBcIi4vUmlnaHQvQmxhbmtcIjtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1lc3NhZ2UtYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMZWZ0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17Qmxhbmt9IGV4YWN0IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb252ZXJzYXRpb24vOmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3Byb3BzID0+IDxSaWdodCB7Li4ucHJvcHN9IGtleT17cHJvcHMubWF0Y2gucGFyYW1zLmlkfT48L1JpZ2h0PiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5cbmNsYXNzIENvbnZlcnNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpbmsgdG89e1wiL2NvbnZlcnNhdGlvbi9cIiArIHRoaXMucHJvcHMuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkfSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvYXNzZXRzL2ltZy9wcm9maWxlLyR7dGhpcy5wcm9wcy5jb252ZXJzYXRpb24uaW1hZ2VOYW1lfWB9IGFsdD1cIlwiIGhlaWdodD1cIjQ1XCIgd2lkdGg9XCI0NVwiIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTEgbXMtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuY29udmVyc2F0aW9uLlBzZXVkb308L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5jb252ZXJzYXRpb24uY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb252ZXJzYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb252ZXJzYXRpb24gZnJvbSBcIi4vQ29udmVyc2F0aW9uXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25DcmVhdG9ycyBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbnZlcnNhdGlvbidcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgTGVmdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IF90ID0gdGhpcztcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaENvbnZlcnNhdGlvbnMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodGhpcy5wcm9wcy5odWJVcmwpO1xuICAgICAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0b3BpYycsIGAvY29udmVyc2F0aW9ucy8ke3RoaXMucHJvcHMudXNlcm5hbWV9YCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIF90LnByb3BzLnNldExhc3RNZXNzYWdlKGRhdGEsIGRhdGEuY29udmVyc2F0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRsaXN0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbmxpbmVGb3JtSW5wdXRHcm91cFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgYXJpYS1sYWJlbD1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGRcIiBocmVmPVwiI1wiPjxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvYWRkLnN2Z1wiIGFsdD1cImFkZFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBpZD1cIk9wZW4tdGFiXCIgZGF0YS1icy10b2dnbGU9XCJ0YWJcIiBkYXRhLWJzLXRhcmdldD1cIiNPcGVuXCIgdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiT3BlblwiIGFyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCI+T3BlbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaWQ9XCJDbG9zZWQtdGFiXCIgZGF0YS1icy10b2dnbGU9XCJ0YWJcIiBkYXRhLWJzLXRhcmdldD1cIiNDbG9zZWRcIiB0eXBlPVwiYnV0dG9uXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJDbG9zZWRcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5DbG9zZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1saXN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiIGlkPVwibXlUYWJDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIGFjdGl2ZSBzaG93XCIgaWQ9XCJob21lXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwiT3Blbi10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLml0ZW1zICE9IHVuZGVmaW5lZCA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5DcmVhdGVkQXQgPCBiLkNyZWF0ZWRBdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjb252ZXJzYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnZlcnNhdGlvbiBjb252ZXJzYXRpb249e2NvbnZlcnNhdGlvbn0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgYWN0aW9uQ3JlYXRvcnMpKExlZnQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgQmxhbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyBweC0wXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9fT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbGFuazsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vLi4vYWN0aW9ucy9jb252ZXJzYXRpb24nXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBzdGF0ZTtcbn07XG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlID0gdGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkTWVzc2FnZSh0aGlzLnN0YXRlLmNvbnRlbnQsIHRoaXMucHJvcHMuaWQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudDogJyd9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIHtjb250ZW50OiBldmVudC50YXJnZXQudmFsdWV9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJidXR0b24tYWRkb24yXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5zZW5kTWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBhcGVyLXBsYW5lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25DcmVhdG9ycykoSW5wdXQpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLm1lc3NhZ2UubWluZSA/IGBzZW5kZXJgIDogYHJlcGFseWB9YH0gPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLm1lc3NhZ2UuY29udGVudH08L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPntuZXcgRGF0ZSh0aGlzLnByb3BzLm1lc3NhZ2UuQ3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gJy4uLy4uL2FjdGlvbnMvY29udmVyc2F0aW9uJ1xuXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCIuL01lc3NhZ2VcIjtcbmltcG9ydCBUaW1lciBmcm9tICcuL1RpbWVyL1RpbWVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xufTtcblxuY2xhc3MgUmlnaHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5ib2R5UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIF9jb252ZXJzYXRpb25JbmRleDogLTEsXG4gICAgICAgICAgICBldmVudFNvdXJjZTogbnVsbFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2Nyb2xsIGRvd24gdG8gdGhlIGxhdGVzdCBtZXNzYWdlXG4gICAgc2Nyb2xsRG93bigpIHtcbiAgICAgICAgdGhpcy5ib2R5UmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gdGhpcy5ib2R5UmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXggIT0gLTFcbiAgICAgICAgICAgICYmIHRoaXMucHJvcHMuaXRlbXNbdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXhdLm1lc3NhZ2VzPy5sZW5ndGhcbiAgICAgICAgICAgICYmIHByZXZQcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXM/Lmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IF90ID0gdGhpcztcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZDtcbiAgICAgICAgY29uc3QgX2NvbnZlcnNhdGlvbkluZGV4ID0gdGhpcy5wcm9wcy5pdGVtcy5maW5kSW5kZXgoXG4gICAgICAgICAgICBjb252ZXJzYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSWQgPT0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBfY29udmVyc2F0aW9uSW5kZXg6IF9jb252ZXJzYXRpb25JbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXRlbXNbX2NvbnZlcnNhdGlvbkluZGV4XS5tZXNzYWdlcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hNZXNzYWdlcyhpZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZXZlbnRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodGhpcy5wcm9wcy5odWJVcmwpO1xuICAgICAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCBgL2NvbnZlcnNhdGlvbnMvJHt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZH1gKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgX3QucHJvcHMucG9zdE1lc3NhZ2UoZGF0YSwgZGF0YS5jb252ZXJzYXRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50U291cmNlIGluc3RhbmNlb2YgRXZlbnRTb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZXZlbnRTb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGV2ZW50U291cmNlOiBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0Ym94IHNob3dib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIgcmVmPXt0aGlzLmJvZHlSZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXNnLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hhdC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3JjPVwiaHR0cHM6Ly9tZWhlZGlodG1sLmNvbS9jaGF0Ym94L2Fzc2V0cy9pbWcvYXJyb2xlZnR0LnN2Z1wiIGFsdD1cImltYWdlIHRpdGxlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9XCJodHRwczovL21laGVkaWh0bWwuY29tL2NoYXRib3gvYXNzZXRzL2ltZy91c2VyLnBuZ1wiIGFsdD1cInVzZXIgaW1nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1zLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NZWhlZGkgSGFzYW48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtc2ctYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5fY29udmVyc2F0aW9uSW5kZXggIT0gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5pdGVtcyAhPSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF0ubWVzc2FnZXMgIT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5pdGVtc1t0aGlzLnN0YXRlLl9jb252ZXJzYXRpb25JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgbWVzc2FnZT17bWVzc2FnZX0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VuZC1idG5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0YWNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz1cImh0dHBzOi8vbWVoZWRpaHRtbC5jb20vY2hhdGJveC9hc3NldHMvaW1nL3VwbG9hZC5zdmdcIiBhbHQ9XCJpbWFnZSB0aXRsZVwiLz4gYXR0YWNoZWQgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwidXBsb2FkXCIgaWQ9XCJ1cGxvYWRcIiBjbGFzc05hbWU9XCJ1cGxvYWQtYm94XCIgcGxhY2Vob2xkZXI9XCJVcGxvYWQgRmlsZVwiIGFyaWEtbGFiZWw9XCJVcGxvYWQgRmlsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIGFjdGlvbkNyZWF0b3JzKShSaWdodCk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUaW1lciA9ICgpID0+IHtcclxuICBjb25zdCBpbml0aWFsVGltZSA9ICAxICogNjA7IC8vIDEwIG1pbnV0ZXMgZW4gc2Vjb25kZXNcclxuICBjb25zdCBbcmVtYWluaW5nVGltZSwgc2V0UmVtYWluaW5nVGltZV0gPSB1c2VTdGF0ZShpbml0aWFsVGltZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgaW50ZXJ2YWw7XHJcblxyXG4gICAgLy8gRMOpbWFycmUgbGUgY29tcHRlIMOgIHJlYm91cnNcclxuICAgIGNvbnN0IHN0YXJ0Q291bnRkb3duID0gKCkgPT4ge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzZXRSZW1haW5pbmdUaW1lKHByZXZSZW1haW5pbmdUaW1lID0+IHtcclxuICAgICAgICAgIGlmIChwcmV2UmVtYWluaW5nVGltZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZSZW1haW5pbmdUaW1lIC0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyBBcnLDqnRlIGxlIGNvbXB0ZSDDoCByZWJvdXJzIGxvcnNxdWUgbGUgdGVtcHMgYXR0ZWludCAwXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAxMDAwKTsgLy8gTWV0dHJlIMOgIGpvdXIgbGUgdGVtcHMgdG91dGVzIGxlcyAxMDAwIG1zICgxIHNlY29uZGUpXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIETDqW1hcnJlciBsZSBjb21wdGUgw6AgcmVib3VycyBxdWFuZCBsZSBjb21wb3NhbnQgZXN0IG1vbnTDqVxyXG4gICAgc3RhcnRDb3VudGRvd24oKTtcclxuXHJcbiAgICAvLyBBcnLDqnRlciBsZSBjb21wdGUgw6AgcmVib3VycyBxdWFuZCBsZSBjb21wb3NhbnQgZXN0IGTDqW1vbnTDqVxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gQ29udmVydGlyIGxlIHRlbXBzIGVuIG1pbnV0ZXMgZXQgc2Vjb25kZXMgcG91ciBsJ2FmZmljaGFnZVxyXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJlbWFpbmluZ1RpbWUgLyA2MCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHJlbWFpbmluZ1RpbWUgJSA2MDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIEFmZmljaGVyIGxlIHRlbXBzIHJlc3RhbnQsIGV0IGxlIGxlIHRlbXBzID0gMCwgYWZmaWNoZXIgbGUgbWVzc2FnZVxyXG4gICAgLy8gXCJUZW1wcyDDqWNvdWzDqVwiXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cmVtYWluaW5nVGltZSA9PT0gMCA/IChcclxuICAgICAgICA8cD5UZW1wcyDDqWNvdWzDqSAhPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPlRlbXBzIHJlc3RhbnQ6IHttaW51dGVzfTp7c2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IHNlY29uZHN9PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX0NPTlZFUlNBVElPTlMgPSAnR0VUX0NPTlZFUlNBVElPTlMnO1xuZXhwb3J0IGNvbnN0IFJFQ0lFVkVfQ09OVkVSU0FUSU9OUyA9ICdSRUNJRVZFX0NPTlZFUlNBVElPTlMnO1xuZXhwb3J0IGNvbnN0IEdFVF9NRVNTQUdFUyA9ICdHRVRfTUVTU0FHRVMnO1xuZXhwb3J0IGNvbnN0IFJFQ0lFVkVfTUVTU0FHRVMgPSAnUkVDSUVWRV9NRVNTQUdFUyc7XG5leHBvcnQgY29uc3QgQUREX01FU1NBR0UgPSAnQUREX01FU1NBR0UnO1xuZXhwb3J0IGNvbnN0IFBPU1RfTUVTU0FHRSA9ICdQT1NUX01FU1NBR0UnO1xuZXhwb3J0IGNvbnN0IFNFVF9IVUJVUkwgPSAnU0VUX0hVQlVSTCc7XG5leHBvcnQgY29uc3QgU0VUX1VTRVJOQU1FID0gJ1NFVF9VU0VSTkFNRSc7XG5leHBvcnQgY29uc3QgU0VUX0xBU1RfTUVTU0FHRSA9ICdTRVRfTEFTVF9NRVNTQUdFJzsiLCJpbXBvcnQge1xuICAgIEdFVF9DT05WRVJTQVRJT05TLCBSRUNJRVZFX0NPTlZFUlNBVElPTlMsXG4gICAgR0VUX01FU1NBR0VTLCBSRUNJRVZFX01FU1NBR0VTLFxuICAgIFBPU1RfTUVTU0FHRSwgQUREX01FU1NBR0UsIFNFVF9IVUJVUkwsIFNFVF9VU0VSTkFNRSxcbiAgICBTRVRfTEFTVF9NRVNTQUdFXG59IGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBodWJVcmw6IG51bGwsXG4gICAgdXNlcm5hbWU6IG51bGxcbn0sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBHRVRfQ09OVkVSU0FUSU9OUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBSRUNJRVZFX0NPTlZFUlNBVElPTlM6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgR0VUX01FU1NBR0VTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFJFQ0lFVkVfTUVTU0FHRVM6XG4gICAgICAgICAgICBjb25zdCBfbmV3Q29udmVyc2F0aW9ucyA9IHN0YXRlLml0ZW1zLm1hcCgoY29udmVyc2F0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZCA9PSBhY3Rpb24uY29udmVyc2F0aW9uSWRcbiAgICAgICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBjb252ZXJzYXRpb24sIHttZXNzYWdlczogYWN0aW9uLm1lc3NhZ2VzfSlcbiAgICAgICAgICAgICAgICAgICAgOiBjb252ZXJzYXRpb25cbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5fbmV3Q29udmVyc2F0aW9uc11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSBBRERfTUVTU0FHRTpcbiAgICAgICAgICAgIGNvbnN0IF9uZXdJdGVtc0ZpbmFsID0gc3RhdGUuaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmNvbnZlcnNhdGlvbklkID09IGFjdGlvbi5jb252ZXJzYXRpb25JZFxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7bWVzc2FnZXM6IFsuLi5pdGVtLm1lc3NhZ2VzLCBhY3Rpb24ubWVzc2FnZV19KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5fbmV3SXRlbXNGaW5hbF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgU0VUX0xBU1RfTUVTU0FHRTpcbiAgICAgICAgICAgIGNvbnN0IF9uZXdJdGVtc0ZpbmFsMiA9IHN0YXRlLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jb252ZXJzYXRpb25JZCA9PSBhY3Rpb24uY29udmVyc2F0aW9uSWRcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNvbnRlbnQgPSBhY3Rpb24ubWVzc2FnZS5jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jcmVhdGVkQXQgPSBhY3Rpb24ubWVzc2FnZS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBpdGVtKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5fbmV3SXRlbXNGaW5hbDJdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFNFVF9IVUJVUkw6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGh1YlVybDogYWN0aW9uLnVybFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBTRVRfVVNFUk5BTUU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBhY3Rpb24udXNlcm5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMvY29udmVyc2F0aW9uJ1xuXG5sZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VycywgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sIm5hbWVzIjpbIkdFVF9DT05WRVJTQVRJT05TIiwiUkVDSUVWRV9DT05WRVJTQVRJT05TIiwiR0VUX01FU1NBR0VTIiwiUkVDSUVWRV9NRVNTQUdFUyIsIkFERF9NRVNTQUdFIiwiUE9TVF9NRVNTQUdFIiwiU0VUX0hVQlVSTCIsIlNFVF9VU0VSTkFNRSIsIlNFVF9MQVNUX01FU1NBR0UiLCJyZXF1ZXN0Q29udmVyc2F0aW9ucyIsInR5cGUiLCJyZWNlaXZlQ29udmVyc2F0aW9ucyIsImpzb24iLCJpdGVtcyIsInJlcXVlc3RNZXNzYWdlcyIsImlkIiwiY29udmVyc2F0aW9uSWQiLCJyZWNlaXZlTWVzc2FnZXMiLCJtZXNzYWdlcyIsInBvc3RNZXNzYWdlIiwibWVzc2FnZSIsInNldExhc3RNZXNzYWdlIiwic2V0SHVidXJsIiwidXJsIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZSIsImZldGNoQ29udmVyc2F0aW9ucyIsImRpc3BhdGNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJodWJVcmwiLCJoZWFkZXJzIiwiZ2V0IiwibWF0Y2giLCJmZXRjaE1lc3NhZ2VzIiwiY29uY2F0IiwiYWRkTWVzc2FnZSIsImNvbnRlbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsIlJlYWN0RE9NIiwiUmVhY3QiLCJzdG9yZSIsIlByb3ZpZGVyIiwiTWVtb3J5Um91dGVyIiwiYWN0aW9uQ3JlYXRvcnMiLCJBcHAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRhc2V0IiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiUm91dGUiLCJTd2l0Y2giLCJMZWZ0IiwiUmlnaHQiLCJCbGFuayIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY2xhc3NOYW1lIiwicGF0aCIsImNvbXBvbmVudCIsImV4YWN0IiwicHJvcHMiLCJfZXh0ZW5kcyIsInBhcmFtcyIsIkNvbXBvbmVudCIsIkxpbmsiLCJDb252ZXJzYXRpb24iLCJ0byIsImNvbnZlcnNhdGlvbiIsInNyYyIsImltYWdlTmFtZSIsImFsdCIsImhlaWdodCIsIndpZHRoIiwiUHNldWRvIiwiY29ubmVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2FsbCIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMiLCJfdCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2UiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvbm1lc3NhZ2UiLCJldmVudCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJwbGFjZWhvbGRlciIsImhyZWYiLCJyb2xlIiwidW5kZWZpbmVkIiwic29ydCIsImEiLCJiIiwiQ3JlYXRlZEF0IiwibWFwIiwiaW5kZXgiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIklucHV0IiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZW5kTWVzc2FnZSIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJhY3Rpb24iLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJNZXNzYWdlIiwibWluZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIlRpbWVyIiwiYm9keVJlZiIsImNyZWF0ZVJlZiIsIl9jb252ZXJzYXRpb25JbmRleCIsInNjcm9sbERvd24iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiX3RoaXMkcHJvcHMkaXRlbXMkdGhpIiwiX3ByZXZQcm9wcyRpdGVtcyR0aGlzIiwibGVuZ3RoIiwiZmluZEluZGV4IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjbG9zZSIsInJlZiIsIm5hbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWxUaW1lIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmVtYWluaW5nVGltZSIsInNldFJlbWFpbmluZ1RpbWUiLCJpbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJwcmV2UmVtYWluaW5nVGltZSIsImNsZWFySW50ZXJ2YWwiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwic2Vjb25kcyIsImlzRmV0Y2hpbmciLCJkaWRJbnZhbGlkYXRlIiwiX29iamVjdFNwcmVhZCIsIl9uZXdDb252ZXJzYXRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX25ld0l0ZW1zRmluYWwiLCJpdGVtIiwiX25ld0l0ZW1zRmluYWwyIiwiY3JlYXRlZEF0IiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInJlZHVjZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==