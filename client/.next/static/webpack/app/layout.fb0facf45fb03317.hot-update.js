"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"adf0d78de60e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzM4MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhZGYwZDc4ZGU2MGVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/dashboardWrapper.tsx":
/*!**********************************!*\
  !*** ./app/dashboardWrapper.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./(components)/Navbar */ \"(app-pages-browser)/./app/(components)/Navbar/index.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./(components)/Sidebar */ \"(app-pages-browser)/./app/(components)/Sidebar/index.tsx\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./app/redux.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DashboardLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const isSidebarCollapsed = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const isDarkMode = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isDarkMode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(isDarkMode ? \"dark\" : \"light\", \" flex bg-gray-50 text-gray-900 w-full min-h-screen\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col w-full h-full py-7 px-9 bg-gray-50 \".concat(isSidebarCollapsed ? \"md:pl-24\" : \"md:pl-72\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 15\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, undefined);\n};\n_s(DashboardLayout, \"UwG19HqQoK7rAE3ttwhG8f0CXGc=\", false, function() {\n    return [\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = DashboardLayout;\nconst DashboardWrapper = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardLayout, {\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = DashboardWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardWrapper);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardLayout\");\n$RefreshReg$(_c1, \"DashboardWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmRXcmFwcGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFeUI7QUFDaUI7QUFDRTtBQUNXO0FBRXZELE1BQU1LLGtCQUFrQjtRQUFDLEVBQUNDLFFBQVEsRUFBNkI7O0lBRTNELE1BQU1DLHFCQUFxQkgsc0RBQWNBLENBQ3JDLENBQUNJLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0Ysa0JBQWtCO0lBRzlDLE1BQU1HLGFBQWFOLHNEQUFjQSxDQUFDLENBQUNJLFFBQVNBLE1BQU1DLE1BQU0sQ0FBQ0MsVUFBVTtJQUVuRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxHQUFpQyxPQUE5QkYsYUFBYSxTQUFTLFNBQVE7OzBCQUM3Qyw4REFBQ1IsMkRBQU9BOzs7OzswQkFDUiw4REFBQ1c7Z0JBQUtELFdBQVcsb0RBQWlHLE9BQTdDTCxxQkFBcUIsYUFBYTs7a0NBQ25HLDhEQUFDTiwwREFBTUE7Ozs7O29CQUNUSzs7Ozs7Ozs7Ozs7OztBQUlWO0dBakJJRDs7UUFFeUJELGtEQUFjQTtRQUl0QkEsa0RBQWNBOzs7S0FOL0JDO0FBbUJOLE1BQU1TLG1CQUFtQjtRQUFDLEVBQUNSLFFBQVEsRUFBNkI7SUFDOUQscUJBQ0UsOERBQUNILDhDQUFhQTtrQkFDViw0RUFBQ0U7c0JBQ0lDOzs7Ozs7Ozs7OztBQUliO01BUk1RO0FBVU4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkV3JhcHBlci50c3g/MzI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLyhjb21wb25lbnRzKS9OYXZiYXJcIlxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi8oY29tcG9uZW50cykvU2lkZWJhclwiXHJcbmltcG9ydCBTdG9yZVByb3ZpZGVyLCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4vcmVkdXhcIlxyXG5cclxuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKHtjaGlsZHJlbn06e2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGV9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaXNTaWRlYmFyQ29sbGFwc2VkID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWwuaXNTaWRlYmFyQ29sbGFwc2VkXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgaXNEYXJrTW9kZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSk9PiBzdGF0ZS5nbG9iYWwuaXNEYXJrTW9kZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aXNEYXJrTW9kZSA/IFwiZGFya1wiIDogXCJsaWdodFwifSBmbGV4IGJnLWdyYXktNTAgdGV4dC1ncmF5LTkwMCB3LWZ1bGwgbWluLWgtc2NyZWVuYH0+XHJcbiAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1mdWxsIHB5LTcgcHgtOSBiZy1ncmF5LTUwICR7aXNTaWRlYmFyQ29sbGFwc2VkID8gXCJtZDpwbC0yNFwiIDogXCJtZDpwbC03MlwifWB9PlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbmNvbnN0IERhc2hib2FyZFdyYXBwZXIgPSAoe2NoaWxkcmVufTp7Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZX0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlUHJvdmlkZXI+XHJcbiAgICAgICAgPERhc2hib2FyZExheW91dD5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRGFzaGJvYXJkTGF5b3V0PlxyXG4gICAgPC9TdG9yZVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkV3JhcHBlciJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIlNpZGViYXIiLCJTdG9yZVByb3ZpZGVyIiwidXNlQXBwU2VsZWN0b3IiLCJEYXNoYm9hcmRMYXlvdXQiLCJjaGlsZHJlbiIsImlzU2lkZWJhckNvbGxhcHNlZCIsInN0YXRlIiwiZ2xvYmFsIiwiaXNEYXJrTW9kZSIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJEYXNoYm9hcmRXcmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboardWrapper.tsx\n"));

/***/ })

});