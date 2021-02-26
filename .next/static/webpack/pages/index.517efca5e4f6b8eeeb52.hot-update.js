webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Mostrar-Repos/index.js":
/*!***********************************************!*\
  !*** ./src/components/Mostrar-Repos/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\wesle\\Documents\\ssr-atividade\\src\\components\\Mostrar-Repos\\index.js";


const MostrarRepos = ({
  repos
}) => {
  const formatarData = str => {
    const data = new Date(str);
    return data.toLocaleDateString("pt");
  };

  const listRepos = repos.map((repo, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card",
    style: {
      width: "18rem"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-body",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
        className: "card-title",
        children: repo.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
        className: "card-subtitle mb-2 text-muted",
        children: ["Linguagem: ", repo.language]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "card-text",
        children: ["Criado em: ", formatarData(repo.created_at)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: repo.html_url,
        target: "_blank",
        className: "card-link",
        children: "Acessar reposit\xF3rio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)
  }, index, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card-columns",
    children: listRepos
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, undefined);
};

_c = MostrarRepos;
/* harmony default export */ __webpack_exports__["default"] = (MostrarRepos);

var _c;

$RefreshReg$(_c, "MostrarRepos");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9zdHJhci1SZXBvcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb3N0cmFyUmVwb3MiLCJyZXBvcyIsImZvcm1hdGFyRGF0YSIsInN0ciIsImRhdGEiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibGlzdFJlcG9zIiwibWFwIiwicmVwbyIsImluZGV4Iiwid2lkdGgiLCJuYW1lIiwibGFuZ3VhZ2UiLCJjcmVhdGVkX2F0IiwiaHRtbF91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFHOUIsUUFBTUMsWUFBWSxHQUFJQyxHQUFELElBQVM7QUFDMUIsVUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsR0FBVCxDQUFiO0FBQ0EsV0FBT0MsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QixJQUF4QixDQUFQO0FBQ0gsR0FIRDs7QUFNQSxRQUFNQyxTQUFTLEdBQUdOLEtBQUssQ0FBQ08sR0FBTixDQUFVLENBQUNDLElBQUQsRUFBTUMsS0FBTixrQkFDeEI7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFFO0FBQVIsS0FBN0I7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxrQkFBNEJGLElBQUksQ0FBQ0c7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUksaUJBQVMsRUFBQywrQkFBZDtBQUFBLGtDQUEwREgsSUFBSSxDQUFDSSxRQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFHLGlCQUFTLEVBQUMsV0FBYjtBQUFBLGtDQUFxQ1gsWUFBWSxDQUFDTyxJQUFJLENBQUNLLFVBQU4sQ0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBSUk7QUFBRyxZQUFJLEVBQUVMLElBQUksQ0FBQ00sUUFBZDtBQUF3QixjQUFNLEVBQUMsUUFBL0I7QUFBd0MsaUJBQVMsRUFBQyxXQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixLQUFvREwsS0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjLENBQWxCO0FBV0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBLGNBQ0tIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0F6QkQ7O0tBQU1QLFk7QUE0QlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxN2VmY2E1ZTRmNmI4ZWVlYjUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTW9zdHJhclJlcG9zID0gKHtyZXBvc30pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgZm9ybWF0YXJEYXRhID0gKHN0cikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZShzdHIpXHJcbiAgICAgICAgcmV0dXJuIGRhdGEudG9Mb2NhbGVEYXRlU3RyaW5nKFwicHRcIilcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgbGlzdFJlcG9zID0gcmVwb3MubWFwKChyZXBvLGluZGV4KSA9PiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17e3dpZHRoOiBcIjE4cmVtXCJ9fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3JlcG8ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+TGluZ3VhZ2VtOiB7cmVwby5sYW5ndWFnZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+Q3JpYWRvIGVtOiB7Zm9ybWF0YXJEYXRhKHJlcG8uY3JlYXRlZF9hdCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cmVwby5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiY2FyZC1saW5rXCI+QWNlc3NhciByZXBvc2l0w7NyaW88L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbHVtbnNcIj5cclxuICAgICAgICAgICAge2xpc3RSZXBvc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9zdHJhclJlcG9zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9