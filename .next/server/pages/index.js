module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/app-bridge/actions */ \"@shopify/app-bridge/actions\");\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`\n  query getProducts($ids: [ID!]!) {\n    nodes(ids: $ids) {\n      ... on Product {\n        title\n        handle\n        descriptionHtml\n        id\n        images(first: 1) {\n          edges {\n            node {\n              originalSrc\n              altText\n            }\n          }\n        }\n        variants(first: 1) {\n          edges {\n            node {\n              price\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n\nclass ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const app = this.context;\n\n    const redirectToProduct = () => {\n      const redirect = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__[\"Redirect\"].create(app);\n      redirect.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_5__[\"Redirect\"].Action.APP, \"/edit-products\");\n    };\n\n    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();\n    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__[\"Query\"], {\n      query: GET_PRODUCTS_BY_ID,\n      variables: {\n        ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"ids\")\n      }\n    }, ({\n      data,\n      loading,\n      error\n    }) => {\n      if (loading) return __jsx(\"div\", null, \"Loading\\u2026\");\n      if (error) return __jsx(\"div\", null, error.message);\n      console.log(data);\n      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"], {\n        showHeader: true,\n        resourceName: {\n          singular: \"Product\",\n          plural: \"Products\"\n        },\n        items: data.nodes,\n        renderItem: item => {\n          const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Thumbnail\"], {\n            source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : \"\",\n            alt: item.images.edges[0] ? item.images.edges[0].node.altText : \"\"\n          });\n\n          const price = item.variants.edges[0].node.price;\n          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"ResourceList\"].Item, {\n            id: item.id,\n            media: media,\n            accessibilityLabel: `View details for ${item.title}`,\n            onClick: () => {\n              store_js__WEBPACK_IMPORTED_MODULE_4___default.a.set(\"item\", item);\n              redirectToProduct();\n            }\n          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, {\n            fill: true\n          }, __jsx(\"h3\", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"TextStyle\"], {\n            variation: \"strong\"\n          }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, \"$\", price)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"].Item, null, __jsx(\"p\", null, \"Expires on \", twoWeeksFromNow, \" \"))));\n        }\n      }));\n    });\n  }\n\n}\n\n_defineProperty(ResourceListWithProducts, \"contextType\", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__[\"Context\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListWithProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC5qcz8zZDY1Il0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiYXBwIiwiY29udGV4dCIsInJlZGlyZWN0VG9Qcm9kdWN0IiwicmVkaXJlY3QiLCJSZWRpcmVjdCIsImNyZWF0ZSIsImRpc3BhdGNoIiwiQWN0aW9uIiwiQVBQIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwic2V0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUEvQjs7QUE2QkEsTUFBTUMsd0JBQU4sU0FBdUNDLDRDQUFLLENBQUNDLFNBQTdDLENBQXVEO0FBR3JEQyxRQUFNLEdBQUc7QUFDUCxVQUFNQyxHQUFHLEdBQUcsS0FBS0MsT0FBakI7O0FBQ0EsVUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM5QixZQUFNQyxRQUFRLEdBQUdDLG9FQUFRLENBQUNDLE1BQVQsQ0FBZ0JMLEdBQWhCLENBQWpCO0FBQ0FHLGNBQVEsQ0FBQ0csUUFBVCxDQUFrQkYsb0VBQVEsQ0FBQ0csTUFBVCxDQUFnQkMsR0FBbEMsRUFBdUMsZ0JBQXZDO0FBQ0QsS0FIRDs7QUFLQSxVQUFNQyxlQUFlLEdBQUcsSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxPQUF0QixFQUErQkMsWUFBL0IsRUFBeEI7QUFFQSxXQUNFLE1BQUMsa0RBQUQ7QUFBTyxXQUFLLEVBQUVsQixrQkFBZDtBQUFrQyxlQUFTLEVBQUU7QUFBRW1CLFdBQUcsRUFBRUMsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVY7QUFBUDtBQUE3QyxPQUNHLENBQUM7QUFBRUMsVUFBRjtBQUFRQyxhQUFSO0FBQWlCQztBQUFqQixLQUFELEtBQThCO0FBQzdCLFVBQUlELE9BQUosRUFBYSxPQUFPLG1DQUFQO0FBQ2IsVUFBSUMsS0FBSixFQUFXLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0MsT0FBWixDQUFQO0FBQ1hDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0EsYUFDRSxNQUFDLHFEQUFELFFBQ0UsTUFBQyw2REFBRDtBQUNFLGtCQUFVLE1BRFo7QUFFRSxvQkFBWSxFQUFFO0FBQUVNLGtCQUFRLEVBQUUsU0FBWjtBQUF1QkMsZ0JBQU0sRUFBRTtBQUEvQixTQUZoQjtBQUdFLGFBQUssRUFBRVAsSUFBSSxDQUFDUSxLQUhkO0FBSUUsa0JBQVUsRUFBR0MsSUFBRCxJQUFVO0FBQ3BCLGdCQUFNQyxLQUFLLEdBQ1QsTUFBQywwREFBRDtBQUNFLGtCQUFNLEVBQ0pELElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQ0lILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkMsV0FEOUIsR0FFSSxFQUpSO0FBTUUsZUFBRyxFQUNETCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUNJSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJFLE9BRDlCLEdBRUk7QUFUUixZQURGOztBQWNBLGdCQUFNQyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjTCxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkcsS0FBMUM7QUFDQSxpQkFDRSxNQUFDLDZEQUFELENBQWMsSUFBZDtBQUNFLGNBQUUsRUFBRVAsSUFBSSxDQUFDUyxFQURYO0FBRUUsaUJBQUssRUFBRVIsS0FGVDtBQUdFLDhCQUFrQixFQUFHLG9CQUFtQkQsSUFBSSxDQUFDVSxLQUFNLEVBSHJEO0FBSUUsbUJBQU8sRUFBRSxNQUFNO0FBQ2JyQiw2REFBSyxDQUFDc0IsR0FBTixDQUFVLE1BQVYsRUFBa0JYLElBQWxCO0FBQ0F2QiwrQkFBaUI7QUFDbEI7QUFQSCxhQVNFLE1BQUMsc0RBQUQsUUFDRSxNQUFDLHNEQUFELENBQU8sSUFBUDtBQUFZLGdCQUFJO0FBQWhCLGFBQ0Usa0JBQ0UsTUFBQywwREFBRDtBQUFXLHFCQUFTLEVBQUM7QUFBckIsYUFDR3VCLElBQUksQ0FBQ1UsS0FEUixDQURGLENBREYsQ0FERixFQVFFLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0Usc0JBQUtILEtBQUwsQ0FERixDQVJGLEVBV0UsTUFBQyxzREFBRCxDQUFPLElBQVAsUUFDRSxnQ0FBZXZCLGVBQWYsTUFERixDQVhGLENBVEYsQ0FERjtBQTJCRDtBQS9DSCxRQURGLENBREY7QUFxREQsS0ExREgsQ0FERjtBQThERDs7QUExRW9EOztnQkFBakRiLHdCLGlCQUNpQnlDLGlFOztBQTRFUnpDLHVGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBSZXNvdXJjZUxpc3QsXG4gIFN0YWNrLFxuICBUZXh0U3R5bGUsXG4gIFRodW1ibmFpbCxcbn0gZnJvbSBcIkBzaG9waWZ5L3BvbGFyaXNcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwic3RvcmUtanNcIjtcbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XG5cbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKSB7XG4gICAgbm9kZXMoaWRzOiAkaWRzKSB7XG4gICAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGhhbmRsZVxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcbiAgICAgICAgaWRcbiAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKSB7XG4gICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNsYXNzIFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IENvbnRleHQ7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCByZWRpcmVjdFRvUHJvZHVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlZGlyZWN0ID0gUmVkaXJlY3QuY3JlYXRlKGFwcCk7XG4gICAgICByZWRpcmVjdC5kaXNwYXRjaChSZWRpcmVjdC5BY3Rpb24uQVBQLCBcIi9lZGl0LXByb2R1Y3RzXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCB0d29XZWVrc0Zyb21Ob3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTIwOTZlNSkudG9EYXRlU3RyaW5nKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldChcImlkc1wiKSB9fT5cbiAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcbiAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcbiAgICAgICAgICAgICAgICBzaG93SGVhZGVyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiBcIlByb2R1Y3RcIiwgcGx1cmFsOiBcIlByb2R1Y3RzXCIgfX1cbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYm5haWxcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxuICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuc2V0KFwiaXRlbVwiLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9Qcm9kdWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtIGZpbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiB7dHdvV2Vla3NGcm9tTm93fSA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ResourceList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList.js\");\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst img = \"https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg\";\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      open: false\n    });\n\n    _defineProperty(this, \"handleSelection\", resources => {\n      const idsFromResources = resources.selection.map(product => product.id);\n      this.setState({\n        open: false\n      });\n      store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set(\"ids\", idsFromResources);\n    });\n  }\n\n  render() {\n    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"ids\");\n    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"TitleBar\"], {\n      title: \"Fortress Skate Co.\",\n      primaryAction: {\n        content: \"Select products\",\n        onAction: () => this.setState({\n          open: true\n        })\n      }\n    }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: this.state.open,\n      onSelection: resources => this.handleSelection(resources),\n      onCancel: () => this.setState({\n        open: false\n      })\n    }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"EmptyState\"], {\n      heading: \"Select products to start\",\n      action: {\n        content: \"Select products\",\n        onAction: () => this.setState({\n          open: true\n        })\n      },\n      image: img\n    }, __jsx(\"p\", null, \"Select products and change their price temporarily\"))) : __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImltZyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJyZW5kZXIiLCJlbXB0eVN0YXRlIiwiZ2V0IiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLG1FQUFaOztBQUVBLE1BQU1DLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDMUI7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FEMEI7O0FBQUEsNkNBdUNmQyxTQUFELElBQWU7QUFDL0IsWUFBTUMsZ0JBQWdCLEdBQUdELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBeUJDLE9BQUQsSUFBYUEsT0FBTyxDQUFDQyxFQUE3QyxDQUF6QjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBQ0FRLHFEQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFWLEVBQWlCUCxnQkFBakI7QUFDRCxLQTNDaUM7QUFBQTs7QUFFbENRLFFBQU0sR0FBRztBQUNQLFVBQU1DLFVBQVUsR0FBRyxDQUFDSCwrQ0FBSyxDQUFDSSxHQUFOLENBQVUsS0FBVixDQUFwQjtBQUNBLFdBQ0UsTUFBQyxxREFBRCxRQUNFLE1BQUMsa0VBQUQ7QUFDRSxXQUFLLEVBQUMsb0JBRFI7QUFFRSxtQkFBYSxFQUFFO0FBQ2JDLGVBQU8sRUFBRSxpQkFESTtBQUViQyxnQkFBUSxFQUFFLE1BQU0sS0FBS1AsUUFBTCxDQUFjO0FBQUVQLGNBQUksRUFBRTtBQUFSLFNBQWQ7QUFGSDtBQUZqQixNQURGLEVBUUUsTUFBQyx3RUFBRDtBQUNFLGtCQUFZLEVBQUMsU0FEZjtBQUVFLGtCQUFZLEVBQUUsS0FGaEI7QUFHRSxVQUFJLEVBQUUsS0FBS2UsS0FBTCxDQUFXZixJQUhuQjtBQUlFLGlCQUFXLEVBQUdDLFNBQUQsSUFBZSxLQUFLZSxlQUFMLENBQXFCZixTQUFyQixDQUo5QjtBQUtFLGNBQVEsRUFBRSxNQUFNLEtBQUtNLFFBQUwsQ0FBYztBQUFFUCxZQUFJLEVBQUU7QUFBUixPQUFkO0FBTGxCLE1BUkYsRUFlR1csVUFBVSxHQUNULE1BQUMsdURBQUQsUUFDRSxNQUFDLDJEQUFEO0FBQ0UsYUFBTyxFQUFDLDBCQURWO0FBRUUsWUFBTSxFQUFFO0FBQ05FLGVBQU8sRUFBRSxpQkFESDtBQUVOQyxnQkFBUSxFQUFFLE1BQU0sS0FBS1AsUUFBTCxDQUFjO0FBQUVQLGNBQUksRUFBRTtBQUFSLFNBQWQ7QUFGVixPQUZWO0FBTUUsV0FBSyxFQUFFSjtBQU5ULE9BUUUsc0VBUkYsQ0FERixDQURTLEdBY1QsTUFBQyxnRUFBRCxPQTdCSixDQURGO0FBa0NEOztBQXRDaUM7O0FBOENyQkMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCJzdG9yZS1qc1wiO1xuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3RcIjtcblxuY29uc3QgaW1nID0gXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoXCJpZHNcIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICB0aXRsZT1cIkZvcnRyZXNzIFNrYXRlIENvLlwiXG4gICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgY29udGVudDogXCJTZWxlY3QgcHJvZHVjdHNcIixcbiAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICAvPlxuICAgICAgICB7ZW1wdHlTdGF0ZSA/IChcbiAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICAgICAgaGVhZGluZz1cIlNlbGVjdCBwcm9kdWN0cyB0byBzdGFydFwiXG4gICAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IHByb2R1Y3RzXCIsXG4gICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpbWFnZT17aW1nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XG4gICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgc3RvcmUuc2V0KFwiaWRzXCIsIGlkc0Zyb21SZXNvdXJjZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge/actions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnNcIj8wNmMwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge/actions\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });