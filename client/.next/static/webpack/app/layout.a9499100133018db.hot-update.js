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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8f214d8555b9\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzM4MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4ZjIxNGQ4NTU1YjlcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/(components)/Sidebar/index.tsx":
/*!********************************************!*\
  !*** ./app/(components)/Sidebar/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/redux */ \"(app-pages-browser)/./app/redux.tsx\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state */ \"(app-pages-browser)/./state/index.ts\");\n/* harmony import */ var _barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const dispatch = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();\n    const isSidebarCollapsed = (0,_app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.global.isSidebarCollapsed);\n    const toggleSidebar = ()=>{\n        dispatch((0,_state__WEBPACK_IMPORTED_MODULE_2__.setIsSidebarCollapsed)(!isSidebarCollapsed));\n    };\n    const sidebarClassNames = \"fixed flex flex-col \".concat(isSidebarCollapsed ? \"w-0 md:w-16\" : \"w-72 md:w-64\", \" bg-gray-500 transition-all duration-300 overflow-hidden h-full shadow-md z-40\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: sidebarClassNames,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 justify-between md:justify-normal items-center pt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-extrabold text-2xl\",\n                        children: \"STOCKS\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"md:hidden px-3 py-3 bg-gray-300 rounded-full hover:bg-blue-100\",\n                        onClick: toggleSidebar,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"w-4 h-4\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow mt-8\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center text-xs text-gray-500\",\n                    children: \"\\xa9 2024 H&Mstock\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\iamha\\\\OneDrive\\\\Desktop\\\\practice-projects\\\\nextjs-inventory-management\\\\client\\\\app\\\\(components)\\\\Sidebar\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"PqQZzUnCvmXyMQtUoWWwPjOlbu4=\", false, function() {\n    return [\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch,\n        _app_redux__WEBPACK_IMPORTED_MODULE_1__.useAppSelector\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY29tcG9uZW50cykvU2lkZWJhci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0RDtBQUNiO0FBQ1o7QUFFbkMsTUFBTUksVUFBVTs7SUFFWixNQUFNQyxXQUFXTCwwREFBY0E7SUFDL0IsTUFBTU0scUJBQXFCTCwwREFBY0EsQ0FDckMsQ0FBQ00sUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixrQkFBa0I7SUFHOUMsTUFBTUcsZ0JBQWdCO1FBQ2xCSixTQUFTSCw2REFBcUJBLENBQUMsQ0FBQ0k7SUFDcEM7SUFFQSxNQUFNSSxvQkFBbUIsdUJBQXlFLE9BQWxESixxQkFBcUIsZ0JBQWMsZ0JBQWU7SUFFcEcscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVdGOzswQkFFWiw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDtrQ0FBSTs7Ozs7O2tDQUNMLDhEQUFDRTt3QkFBR0QsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDeEMsOERBQUNFO3dCQUFPRixXQUFVO3dCQUFpRUcsU0FBU047a0NBQ3hGLDRFQUFDTixnRkFBSUE7NEJBQUNTLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl4Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Ozs7OzswQkFJZiw4REFBQ0Q7MEJBQ0csNEVBQUNLO29CQUFFSixXQUFVOzhCQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0Q7R0FuQ01SOztRQUVlSixzREFBY0E7UUFDSkMsc0RBQWNBOzs7S0FIdkNHO0FBcUNOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oY29tcG9uZW50cykvU2lkZWJhci9pbmRleC50c3g/YjI2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2FwcC9yZWR1eFwiXHJcbmltcG9ydCB7IHNldElzU2lkZWJhckNvbGxhcHNlZCB9IGZyb20gXCJAL3N0YXRlXCJcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICAgIGNvbnN0IGlzU2lkZWJhckNvbGxhcHNlZCA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgICAgIChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsLmlzU2lkZWJhckNvbGxhcHNlZFxyXG4gICAgKVxyXG4gICAgXHJcbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldElzU2lkZWJhckNvbGxhcHNlZCghaXNTaWRlYmFyQ29sbGFwc2VkKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaWRlYmFyQ2xhc3NOYW1lcz0gYGZpeGVkIGZsZXggZmxleC1jb2wgJHtpc1NpZGViYXJDb2xsYXBzZWQgPyBcInctMCBtZDp3LTE2XCI6XCJ3LTcyIG1kOnctNjRcIn0gYmctZ3JheS01MDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIG92ZXJmbG93LWhpZGRlbiBoLWZ1bGwgc2hhZG93LW1kIHotNDBgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2lkZWJhckNsYXNzTmFtZXN9PlxyXG4gICAgICAgIHsvKiB0b3AgbG9nbyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktbm9ybWFsIGl0ZW1zLWNlbnRlciBwdC04XCI+XHJcbiAgICAgICAgICAgIDxkaXY+bG9nbzwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC0yeGxcIj5TVE9DS1M8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBweC0zIHB5LTMgYmctZ3JheS0zMDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWJsdWUtMTAwXCIgb25DbGljaz17dG9nZ2xlU2lkZWJhcn0+XHJcbiAgICAgICAgICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIExpbmtzICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG10LThcIj5cclxuey8qIGxpbmtzIGhlcmUgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICAgICZjb3B5OyAyMDI0IEgmTXN0b2NrXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhciJdLCJuYW1lcyI6WyJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwic2V0SXNTaWRlYmFyQ29sbGFwc2VkIiwiTWVudSIsIlNpZGViYXIiLCJkaXNwYXRjaCIsImlzU2lkZWJhckNvbGxhcHNlZCIsInN0YXRlIiwiZ2xvYmFsIiwidG9nZ2xlU2lkZWJhciIsInNpZGViYXJDbGFzc05hbWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(components)/Sidebar/index.tsx\n"));

/***/ })

});