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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a6ed128f35e7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzM4MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhNmVkMTI4ZjM1ZTdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/dashboardWrapper.tsx":
/*!**********************************!*\
  !*** ./app/dashboardWrapper.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./(components)/Navbar */ \"(app-pages-browser)/./app/(components)/Navbar/index.tsx\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./(components)/Sidebar */ \"(app-pages-browser)/./app/(components)/Sidebar/index.tsx\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux */ \"(app-pages-browser)/./app/redux.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DashboardLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const isSidebarCollapsed = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const isDarkMode = (0,_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.global.isDarkMode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"light flex bg-gray-50 text-gray-900 w-full min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col w-full h-full py-7 px-9 bg-gray-50 \".concat(isSidebarCollapsed ? \"md:pl-24\" : \"md:pl-72\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 15\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, undefined);\n};\n_s(DashboardLayout, \"UwG19HqQoK7rAE3ttwhG8f0CXGc=\", false, function() {\n    return [\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector,\n        _redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = DashboardLayout;\nconst DashboardWrapper = (param)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_redux__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardLayout, {\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\dashboardWrapper.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = DashboardWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardWrapper);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashboardLayout\");\n$RefreshReg$(_c1, \"DashboardWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmRXcmFwcGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFeUI7QUFDaUI7QUFDRTtBQUNXO0FBRXZELE1BQU1LLGtCQUFrQjtRQUFDLEVBQUNDLFFBQVEsRUFBNkI7O0lBRTNELE1BQU1DLHFCQUFxQkgsc0RBQWNBLENBQ3JDLENBQUNJLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0Ysa0JBQWtCO0lBRzlDLE1BQU1HLGFBQWFOLHNEQUFjQSxDQUFDLENBQUNJLFFBQVNBLE1BQU1DLE1BQU0sQ0FBQ0MsVUFBVTtJQUVuRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBWTs7MEJBQ2IsOERBQUNWLDJEQUFPQTs7Ozs7MEJBQ1IsOERBQUNXO2dCQUFLRCxXQUFXLG9EQUFpRyxPQUE3Q0wscUJBQXFCLGFBQWE7O2tDQUNuRyw4REFBQ04sMERBQU1BOzs7OztvQkFDVEs7Ozs7Ozs7Ozs7Ozs7QUFJVjtHQWpCSUQ7O1FBRXlCRCxrREFBY0E7UUFJdEJBLGtEQUFjQTs7O0tBTi9CQztBQW1CTixNQUFNUyxtQkFBbUI7UUFBQyxFQUFDUixRQUFRLEVBQTZCO0lBQzlELHFCQUNFLDhEQUFDSCw4Q0FBYUE7a0JBQ1YsNEVBQUNFO3NCQUNJQzs7Ozs7Ozs7Ozs7QUFJYjtNQVJNUTtBQVVOLCtEQUFlQSxnQkFBZ0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZFdyYXBwZXIudHN4PzMyNjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi8oY29tcG9uZW50cykvTmF2YmFyXCJcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vKGNvbXBvbmVudHMpL1NpZGViYXJcIlxyXG5pbXBvcnQgU3RvcmVQcm92aWRlciwgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuL3JlZHV4XCJcclxuXHJcbmNvbnN0IERhc2hib2FyZExheW91dCA9ICh7Y2hpbGRyZW59OntjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGlzU2lkZWJhckNvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgICAgIChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsLmlzU2lkZWJhckNvbGxhcHNlZFxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGlzRGFya01vZGUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpPT4gc3RhdGUuZ2xvYmFsLmlzRGFya01vZGUpXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGlnaHQgZmxleCBiZy1ncmF5LTUwIHRleHQtZ3JheS05MDAgdy1mdWxsIG1pbi1oLXNjcmVlbmB9PlxyXG4gICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBweS03IHB4LTkgYmctZ3JheS01MCAke2lzU2lkZWJhckNvbGxhcHNlZCA/IFwibWQ6cGwtMjRcIiA6IFwibWQ6cGwtNzJcIn1gfT5cclxuICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG5jb25zdCBEYXNoYm9hcmRXcmFwcGVyID0gKHtjaGlsZHJlbn06e2NoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGV9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdG9yZVByb3ZpZGVyPlxyXG4gICAgICAgIDxEYXNoYm9hcmRMYXlvdXQ+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0Rhc2hib2FyZExheW91dD5cclxuICAgIDwvU3RvcmVQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFdyYXBwZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJOYXZiYXIiLCJTaWRlYmFyIiwiU3RvcmVQcm92aWRlciIsInVzZUFwcFNlbGVjdG9yIiwiRGFzaGJvYXJkTGF5b3V0IiwiY2hpbGRyZW4iLCJpc1NpZGViYXJDb2xsYXBzZWQiLCJzdGF0ZSIsImdsb2JhbCIsImlzRGFya01vZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiRGFzaGJvYXJkV3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboardWrapper.tsx\n"));

/***/ })

});