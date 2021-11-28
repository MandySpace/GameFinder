(this["webpackJsonpignite"] = this["webpackJsonpignite"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _components_GobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GobalStyles */ "./src/components/GobalStyles.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_SearchedGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchedGames */ "./src/components/SearchedGames.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/App.js";







function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_GobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: ["/", "/game/:id"],
        exact: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_pages_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: ["/results", "/results/game/:id"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_SearchedGames__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/detailAction.js":
/*!*************************************!*\
  !*** ./src/actions/detailAction.js ***!
  \*************************************/
/*! exports provided: detail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detail", function() { return detail; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const detail = id => async dispatch => {
  dispatch({
    type: "LOADING"
  });
  const detail = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_api__WEBPACK_IMPORTED_MODULE_1__["GAME_DETAIL_URL"])(id));
  const screenshots = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_api__WEBPACK_IMPORTED_MODULE_1__["GAME_SCREENSHOTS_URL"])(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: detail.data,
      screenshots: screenshots.data.results
    }
  });
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/gamesAction.js":
/*!************************************!*\
  !*** ./src/actions/gamesAction.js ***!
  \************************************/
/*! exports provided: loadGames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGames", function() { return loadGames; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/api.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const loadGames = () => async dispatch => {
  const popularGames = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_api__WEBPACK_IMPORTED_MODULE_1__["POPULAR_GAMES_URL"])());
  const upcomingGames = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_api__WEBPACK_IMPORTED_MODULE_1__["UPCOMING_GAMES_URL"])());
  const newGames = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(Object(_api__WEBPACK_IMPORTED_MODULE_1__["NEW_GAMES_URL"])());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
      latest: newGames.data.results,
      upcoming: upcomingGames.data.results
    }
  });
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/actions/searchAction.js":
/*!*************************************!*\
  !*** ./src/actions/searchAction.js ***!
  \*************************************/
/*! exports provided: searchGames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchGames", function() { return searchGames; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./src/api.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const searchGames = (searchParam, page, sortBy) => async dispatch => {
  const searchData = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(Object(_api__WEBPACK_IMPORTED_MODULE_0__["SEARCH_GAME_URL"])(searchParam, page, sortBy));
  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      search: searchData.data,
      query: searchParam
    }
  });
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: POPULAR_GAMES_URL, UPCOMING_GAMES_URL, NEW_GAMES_URL, GAME_DETAIL_URL, GAME_SCREENSHOTS_URL, SEARCH_GAME_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPULAR_GAMES_URL", function() { return POPULAR_GAMES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCOMING_GAMES_URL", function() { return UPCOMING_GAMES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_GAMES_URL", function() { return NEW_GAMES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_DETAIL_URL", function() { return GAME_DETAIL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_SCREENSHOTS_URL", function() { return GAME_SCREENSHOTS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_GAME_URL", function() { return SEARCH_GAME_URL; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = `?key=${"c95f60bd88a4474985d3619660665cd6"}`;
const GAMES = `/games`;

const currentDate = () => new Date().toISOString().slice(0, 10).split("-").map(ele => ele.padStart(2, "0")).join("-"); //1 year Later Date


const upcomingGamesDate = () => {
  const upcomingDate = currentDate().split("-");
  upcomingDate[0] = String(Number(upcomingDate[0]) + 1);
  return upcomingDate.join("-");
};

const newGamesDate = () => {
  const upcomingDate = currentDate().split("-");
  upcomingDate[1] = String(Number(upcomingDate[1]) - 2).padStart(2, "0");
  return upcomingDate.join("-");
};

const POPULAR_GAMES_URL = () => `${BASE_URL}${GAMES}${API_KEY}&page_size=14`;
_c = POPULAR_GAMES_URL;
const UPCOMING_GAMES_URL = () => `${BASE_URL}${GAMES}${API_KEY}&dates=${currentDate()},${upcomingGamesDate()}&page_size=14`;
_c2 = UPCOMING_GAMES_URL;
const NEW_GAMES_URL = () => `${BASE_URL}${GAMES}${API_KEY}&dates=${newGamesDate()},${currentDate()}&page_size=14`;
_c3 = NEW_GAMES_URL;
const GAME_DETAIL_URL = id => `${BASE_URL}${GAMES}/${id}${API_KEY}`;
_c4 = GAME_DETAIL_URL;
const GAME_SCREENSHOTS_URL = id => `${BASE_URL}${GAMES}/${id}/screenshots${API_KEY}`;
_c5 = GAME_SCREENSHOTS_URL;
const SEARCH_GAME_URL = function (searchQuery) {
  let page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  let sortBy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "-rating";
  return `${BASE_URL}${GAMES}${API_KEY}&search=${searchQuery}&page=${page}&ordering=${sortBy}&search_exact=true`;
};
_c6 = SEARCH_GAME_URL;

var _c, _c2, _c3, _c4, _c5, _c6;

__webpack_require__.$Refresh$.register(_c, "POPULAR_GAMES_URL");
__webpack_require__.$Refresh$.register(_c2, "UPCOMING_GAMES_URL");
__webpack_require__.$Refresh$.register(_c3, "NEW_GAMES_URL");
__webpack_require__.$Refresh$.register(_c4, "GAME_DETAIL_URL");
__webpack_require__.$Refresh$.register(_c5, "GAME_SCREENSHOTS_URL");
__webpack_require__.$Refresh$.register(_c6, "SEARCH_GAME_URL");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Game.js":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _actions_detailAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/detailAction */ "./src/actions/detailAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/components/Game.js",
    _s = __webpack_require__.$Refresh$.signature();










function Game(_ref) {
  _s();

  let {
    name,
    img,
    genres,
    id
  } = _ref;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();

  const loadDetailHandler = () => {
    dispatch(Object(_actions_detailAction__WEBPACK_IMPORTED_MODULE_2__["detail"])(id));
    document.body.style.overflow = "hidden";
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledGame, {
    onClick: loadDetailHandler,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: `${location.pathname === "/" ? "" : location.pathname}/game/${id}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
        src: Object(_util__WEBPACK_IMPORTED_MODULE_5__["smallImage"])(img, 640),
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
        children: genres.map(genre => genre.name).join(", ")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Game, "GbYGBQuBzDFP3ryA9Nq5nJnvu8Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"]];
});

_c = Game;
const StyledGame = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  cursor: pointer;

  img {
    flex: 300px;
    width: 250px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    box-shadow: 0 1px 8px #00000026;
  }
`;
_c2 = StyledGame;
/* harmony default export */ __webpack_exports__["default"] = (Game);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "Game");
__webpack_require__.$Refresh$.register(_c2, "StyledGame");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GameDetail.js":
/*!**************************************!*\
  !*** ./src/components/GameDetail.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _img_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/close.svg */ "./src/img/close.svg");
/* harmony import */ var _img_left_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/left.svg */ "./src/img/left.svg");
/* harmony import */ var _img_right_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/right.svg */ "./src/img/right.svg");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util */ "./src/util.js");
/* harmony import */ var _img_metacritic_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/metacritic.svg */ "./src/img/metacritic.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/components/GameDetail.js",
    _s = __webpack_require__.$Refresh$.signature();












let i = 0;

function GameDetail() {
  _s();

  var _detail$parent_platfo, _detail$esrb_rating, _detail$parent_platfo2, _detail$genres;

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
  const rightArrowRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  const leftArrowRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_9__["useRef"])(null);
  const {
    detail,
    screenshots,
    isLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(store => store.detail);
  const [galleryPic, setGalleryPic] = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    var _screenshots$;

    return setGalleryPic((_screenshots$ = screenshots[0]) === null || _screenshots$ === void 0 ? void 0 : _screenshots$.image);
  }, [screenshots]);

  const exitDetailHandler = e => {
    if (e.target.classList.contains("close")) {
      document.body.style.overflow = "auto";
      history.push(location.pathname.split("/").slice(0, -2).join("/"));
    }
  };

  const carousel = e => {
    //VARIABLES
    const containerWidth = containerRef.current.offsetWidth;
    const width = containerRef.current.childNodes.length * containerRef.current.childNodes[0].offsetWidth;
    let scrollLeft = containerWidth * i; //EVALUATING COUNTER

    if (e.target.classList.contains("right") && scrollLeft + containerWidth < width) i += 1;
    if (e.target.classList.contains("left") && scrollLeft > 0) i -= 1;
    scrollLeft = containerWidth * i; //SCROLLING CONTAINER

    containerRef.current.scrollTo({
      left: containerWidth * i,
      behavior: "smooth"
    }); //ACTIVATING/DEACTIVATING BUTTONS

    scrollLeft + containerWidth < width ? rightArrowRef.current.style.display = "inline-block" : rightArrowRef.current.style.display = "none";
    scrollLeft === 0 ? leftArrowRef.current.style.display = "none" : leftArrowRef.current.style.display = "inline-block";
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(ModalContainer, {
    onClick: exitDetailHandler,
    className: "close",
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(LoadingSpinner, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Detail, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
        src: _img_close_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "close icon",
        className: "svg close",
        onClick: exitDetailHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Media, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          src: detail.background_image,
          alt: "Game cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Stats, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h3", {
            children: detail.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: detail.publishers.map(publisher => publisher.name).join(", ")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Platforms, {
        children: (_detail$parent_platfo = detail.parent_platforms) === null || _detail$parent_platfo === void 0 ? void 0 : _detail$parent_platfo.map(data => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          src: Object(_util__WEBPACK_IMPORTED_MODULE_7__["platformNameToSvg"])(data.platform.name),
          alt: "platforms"
        }, data.platform.id, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(RatingContainer, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "ratings",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "empty",
            children: [Object(_util__WEBPACK_IMPORTED_MODULE_7__["emptyStars"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "full",
              children: Object(_util__WEBPACK_IMPORTED_MODULE_7__["ratingToStars"])(detail.rating).map(star => star)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: detail.rating
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "metacritic",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
            src: _img_metacritic_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
            alt: "metacritic logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: detail.metacritic
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "esrb",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
            src: Object(_util__WEBPACK_IMPORTED_MODULE_7__["esrpRatingSvg"])((_detail$esrb_rating = detail.esrb_rating) === null || _detail$esrb_rating === void 0 ? void 0 : _detail$esrb_rating.id),
            alt: "esrp rating"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Description, {
        children: [detail.background_image_additional && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          src: Object(_util__WEBPACK_IMPORTED_MODULE_7__["smallImage"])(detail.background_image_additional, 1920),
          alt: "addtional game cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
          children: detail.description_raw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Table, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: "Platform:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: "Release:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: "Publisher:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: "Genres:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: "Website:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: (_detail$parent_platfo2 = detail.parent_platforms) === null || _detail$parent_platfo2 === void 0 ? void 0 : _detail$parent_platfo2.map(platform => platform.platform.name).join(", ")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: Object(_util__WEBPACK_IMPORTED_MODULE_7__["reverseDate"])(detail.released)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: detail.publishers.map(publisher => publisher.name).join(", ")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
            children: (_detail$genres = detail.genres) === null || _detail$genres === void 0 ? void 0 : _detail$genres.map(genre => genre.name).join(", ")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            href: detail.website,
            target: "_blank",
            rel: "noreferrer",
            children: detail.website
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
        children: "Gallery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Gallery, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          src: galleryPic,
          alt: "Gallery",
          className: "gallery-pic"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            className: "container",
            ref: containerRef,
            children: screenshots === null || screenshots === void 0 ? void 0 : screenshots.map(screenshot => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
              ref: rightArrowRef,
              src: Object(_util__WEBPACK_IMPORTED_MODULE_7__["smallImage"])(screenshot.image, 640),
              alt: "Screenshots of the game",
              onClick: () => setGalleryPic(screenshot.image)
            }, screenshot.id, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 19
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          ref: leftArrowRef,
          src: _img_left_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
          alt: "left arrow",
          className: "arrow left",
          onClick: carousel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
          ref: rightArrowRef,
          src: _img_right_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
          alt: "right arrow",
          className: "arrow right",
          onClick: carousel
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }, this), detail.stores[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
        children: "Available on"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 32
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Stores, {
        children: detail.stores.filter(store => {
          var _store$store;

          return ["PlayStation Store", "Xbox Store", "Steam"].includes((_store$store = store.store) === null || _store$store === void 0 ? void 0 : _store$store.name);
        }).map(store => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
          href: `https://${store.store.domain}`,
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
            src: Object(_util__WEBPACK_IMPORTED_MODULE_7__["storeImages"])(store.store.name),
            alt: "Stores to purchase games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 17
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

_s(GameDetail, "VMqg8Kkt9E8N2jVUrenPsnGTM1M=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = GameDetail;
const ModalContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  position: relative;
  width: 100%;
  min-height: 100vh;

  backdrop-filter: blur(8px) brightness(0.4);
  position: fixed;
  top: 0;
  left: 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 50px;
  }
`;
_c2 = ModalContainer;
const Detail = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  position: fixed;
  top: 0;
  left: 10%;
  width: 80%;
  height: max-content;
  background: white;
  padding-bottom: 5rem;

  color: black;

  .svg {
    position: fixed;
    top: 2%;
    right: 12%;
    cursor: pointer;
    background-color: #ffffff1f;
    z-index: 2000;

    &:hover {
      transform: scale(1.05);
    }
  }

  h4 {
    width: max-content;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 300;
    margin: 0 auto;
    margin-bottom: 4rem;
    background-color: var(--color-primary);
    color: #ffffff;
    padding: 0.3rem 3rem;
  }
`;
_c3 = Detail;
const Stats = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  background: var(--color-primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: max-content;
  max-width: 35rem;
  padding: 2rem;
  position: absolute;
  top: 90%;
  left: 5%;

  h3 {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1;
  }
`;
_c4 = Stats;
const RatingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  margin-left: auto;
  width: max-content;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem;

  .ratings {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 30px;
    }

    .empty {
      position: relative;
    }

    .full {
      position: absolute;
      top: 0;
      left: 0;
    }

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .metacritic {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 50px;
      object-fit: cover;
    }

    p {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .esrb {
    img {
      width: 64px;
      object-fit: cover;
    }
  }
`;
_c5 = RatingContainer;
const Platforms = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  width: min-content;
  margin-left: auto;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background: #ffffffa9;
  margin-top: -3.5rem;
  position: relative;
  z-index: 1000;

  img {
    width: 36px;
  }
`;
_c6 = Platforms;
const Media = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  position: relative;
  img {
    width: 100%;
    height: 40rem;
    object-fit: cover;
    object-position: center;
  }
`;
_c7 = Media;
const Description = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  margin-top: 10rem;
  padding: 3rem;
  width: 70%;
  max-width: 80rem;
  line-height: 1.6;
  background-color: #292929;
  color: #fff;

  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 3rem;
    outline: 10px solid #fff;
  }
`;
_c8 = Description;
const Table = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  display: flex;
  width: max-content;
  margin: 10rem auto;
  gap: 5rem;
  font-weight: 400;
  p,
  a {
    font-size: 1.2rem;
  }
`;
_c9 = Table;
const Stores = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  display: flex;
  align-items: center;
  width: 70%;
  max-width: 50em;
  margin: 0 auto;
  gap: 2rem;

  a {
    flex: 1;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;
_c10 = Stores;
const LoadingSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
_c11 = LoadingSpinner;
const Gallery = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div)`
  width: 70%;
  max-width: 80rem;
  margin: 0 auto;
  position: relative;

  .gallery-pic {
    width: 100%;
  }

  .container {
    display: flex;
    overflow-x: hidden;
    margin-bottom: 10rem;

    img {
      width: 33.33%;
      cursor: pointer;
      border: 4px solid #fff;
      opacity: 0.9;
      will-change: opacity;
      transition: opacity 0.1s;

      &:hover {
        opacity: 1;
        border: 4px solid var(--color-primary);
      }
    }
  }
  .arrow {
    padding: 0.4rem;
    position: absolute;
    top: 85%;
    border-radius: 50%;
    background-color: var(--color-primary);
    box-shadow: 0 2px 10px #00000057;
    cursor: pointer;
    will-change: transform;
    transition: transform 0.1s;

    &:hover {
      transform: scale(1.02);
      background-color: var(--color-primary-dark);
    }

    &:active {
      transform: scale(0.98);
      background-color: var(--color-primary-dark);
    }
  }
  .left {
    left: -1.6%;
  }

  .right {
    right: -1.6%;
  }
`;
_c12 = Gallery;
/* harmony default export */ __webpack_exports__["default"] = (GameDetail);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

__webpack_require__.$Refresh$.register(_c, "GameDetail");
__webpack_require__.$Refresh$.register(_c2, "ModalContainer");
__webpack_require__.$Refresh$.register(_c3, "Detail");
__webpack_require__.$Refresh$.register(_c4, "Stats");
__webpack_require__.$Refresh$.register(_c5, "RatingContainer");
__webpack_require__.$Refresh$.register(_c6, "Platforms");
__webpack_require__.$Refresh$.register(_c7, "Media");
__webpack_require__.$Refresh$.register(_c8, "Description");
__webpack_require__.$Refresh$.register(_c9, "Table");
__webpack_require__.$Refresh$.register(_c10, "Stores");
__webpack_require__.$Refresh$.register(_c11, "LoadingSpinner");
__webpack_require__.$Refresh$.register(_c12, "Gallery");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/GobalStyles.js":
/*!***************************************!*\
  !*** ./src/components/GobalStyles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
:root{
    --color-light-font: #202020;

    --color-light-body: #fff;

    --color-primary: #186ED7;

    --color-primary-dark: #13488a;
}

* {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgray;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 50px;
  }
}

body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    width: 100%;
    color: var(--color-light-font);
    background-color: var(--color-light-body);
}

h2 {
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem 0;
}

h3 {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 0.5rem 0 .25rem 0;
}

p {
    font-size: 1rem;
    padding: .25rem 0;
}

a {
    text-decoration: none;
    color : var(--color-light-font);
}
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _img_search_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/search.svg */ "./src/img/search.svg");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_searchAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/searchAction */ "./src/actions/searchAction.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/components/Nav.js",
    _s = __webpack_require__.$Refresh$.signature();










function Nav() {
  _s();

  const [searchQuery, setSearchQuery] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  const clickHandler = e => {
    e.preventDefault();
    dispatch(Object(_actions_searchAction__WEBPACK_IMPORTED_MODULE_6__["searchGames"])(searchQuery));
    history.push("/results");
  };

  const changeHandler = e => {
    setSearchQuery(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledNav, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Logo, {
      src: _img_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"],
      alt: "logo",
      onClick: () => history.push("/")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Form, {
      action: "#",
      onSubmit: clickHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
        value: searchQuery,
        type: "text",
        placeholder: "Search for games...",
        onChange: changeHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
        onClick: clickHandler,
        src: _img_search_svg__WEBPACK_IMPORTED_MODULE_0__["default"],
        alt: "search icon",
        className: "search-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Nav, "f095XOrrHfS8FfANc04pbpLEqnk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"]];
});

_c = Nav;
const StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #cccccc;
`;
_c2 = StyledNav;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img`
  width: 60px;
  object-fit: cover;
  cursor: pointer;
`;
_c3 = Logo;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form`
  display: flex;
  align-self: center;

  input {
    font-family: inherit;
    width: 30%;
    min-width: 20rem;
    padding: 0.5rem 1rem;
    padding-right: 3rem;
    font-size: 1.2rem;
    border-radius: 8px;
    font-weight: 100;
    border: 1px solid #a3a3a3;
  }

  .search-icon {
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
    margin-left: -3rem;
  }
`;
_c4 = Form;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "Nav");
__webpack_require__.$Refresh$.register(_c2, "StyledNav");
__webpack_require__.$Refresh$.register(_c3, "Logo");
__webpack_require__.$Refresh$.register(_c4, "Form");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/SearchedGames.js":
/*!*****************************************!*\
  !*** ./src/components/SearchedGames.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/components/Game.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _GameDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameDetail */ "./src/components/GameDetail.js");
/* harmony import */ var _img_leftPagination_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/leftPagination.svg */ "./src/img/leftPagination.svg");
/* harmony import */ var _img_rightPagination_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/rightPagination.svg */ "./src/img/rightPagination.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_searchAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/searchAction */ "./src/actions/searchAction.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/components/SearchedGames.js",
    _s = __webpack_require__.$Refresh$.signature();













function SearchedGames() {
  _s();

  var _search$results;

  const [currentPage, setCurrentPage] = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(1);
  const [pagesOnDisplayFirst, setPagesOnDisplayFirst] = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(0);
  const [pagesOnDisplay, setPagesOnDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]);
  const [displaySortingOptions, setDisplaySortingOptions] = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const [sortBy, setSortBy] = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    HighRating: true,
    LowRating: false,
    LatestRelease: false,
    OldestRelease: false,
    AZName: false,
    ZAName: false
  });
  const [apiSortParam, setApiSortParam] = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])("-rating");
  const leftRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  const rightRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(null);
  const {
    search,
    query
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(store => store.search);
  const pageCount = 20;
  const noOfPages = Math.ceil(search.count / pageCount);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();

  const toggleArrows = () => {
    if (currentPage === 1) {
      leftRef.current.style.display = "none";
      rightRef.current.style.display = "inline-block";
    } else if (currentPage === noOfPages) {
      rightRef.current.style.display = "none";
      leftRef.current.style.display = "inline-block";
    } else {
      leftRef.current.style.display = "inline-block";
      rightRef.current.style.display = "inline-block";
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    document.addEventListener("click", detectClickToCloseSortBy);
    return () => document.removeEventListener("click", detectClickToCloseSortBy);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    if (noOfPages > 1) {
      setPagesOnDisplayFirst(currentPage > 3 ? currentPage - 3 : 1);
      const arr = [];

      for (let i = pagesOnDisplayFirst; i <= pagesOnDisplayFirst + 7; i++) {
        if (i > 0 && i <= noOfPages) arr.push(i);
      }

      setPagesOnDisplay(arr);
      toggleArrows();
    }
  }, [currentPage, pagesOnDisplayFirst, noOfPages]);
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
  const showDetail = location.pathname.split("/")[2];

  const loadPage = page => {
    return () => {
      dispatch(Object(_actions_searchAction__WEBPACK_IMPORTED_MODULE_9__["searchGames"])(query, page, apiSortParam));
      toggleArrows();
      setCurrentPage(page);
    };
  };

  const radioButtonHandler = e => {
    dispatch(Object(_actions_searchAction__WEBPACK_IMPORTED_MODULE_9__["searchGames"])(query, 1, e.target.value));
    Object.keys(sortBy).forEach(key => {
      if (key === e.target.id) {
        sortBy[key] = true;
      } else {
        sortBy[key] = false;
      }
    });
    setSortBy({ ...sortBy
    });
    setDisplaySortingOptions(false);
    setApiSortParam(e.target.value);
  };

  const detectClickToCloseSortBy = e => {
    var _e$target$closest;

    if (displaySortingOptions && !((_e$target$closest = e.target.closest("form")) === null || _e$target$closest === void 0 ? void 0 : _e$target$closest.classList.contains("form"))) setDisplaySortingOptions(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Sorting, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
        children: ["Page ", currentPage, " of ", noOfPages]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
        children: ["Search results for \"", query, "\""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        class: "sort",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
          onClick: () => setDisplaySortingOptions(true),
          children: "Sort by"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this), displaySortingOptions && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("form", {
          action: "#",
          className: "form",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
            type: "radio",
            name: "sort",
            id: "HighRating",
            defaultChecked: sortBy.HighRating ? "checked" : "",
            value: "-rating",
            onChange: radioButtonHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            htmlFor: "HighRating",
            children: "Highest Rating"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
            type: "radio",
            name: "sort",
            id: "LowRating",
            defaultChecked: sortBy.LowRating ? "checked" : "",
            value: "rating",
            onChange: radioButtonHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            htmlFor: "LowRating",
            children: "Lowest Rating"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
            type: "radio",
            name: "sort",
            id: "LatestRelease",
            defaultChecked: sortBy.LatestRelease ? "checked" : "",
            value: "-released",
            onChange: radioButtonHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            htmlFor: "LatestRelease",
            children: "Latest Release"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
            type: "radio",
            name: "sort",
            id: "OldestRelease",
            defaultChecked: sortBy.OldestRelease ? "checked" : "",
            value: "released",
            onChange: radioButtonHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            htmlFor: "OldestRelease",
            children: "Oldest Released"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
            type: "radio",
            name: "sort",
            id: "AZName",
            defaultChecked: sortBy.AZName ? "checked" : "",
            value: "name",
            onChange: radioButtonHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            htmlFor: "AZName",
            children: "Name A \u2192 Z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
            type: "radio",
            name: "sort",
            id: "ZAName",
            defaultChecked: sortBy.ZAName ? "checked" : "",
            value: "-name",
            onChange: radioButtonHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
            htmlFor: "ZAName",
            children: "Name Z \u2192 A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Container, {
      children: (_search$results = search.results) === null || _search$results === void 0 ? void 0 : _search$results.map(game => game.name && game.id && game.background_image && game.genres && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_Game__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: game.name,
        img: game.background_image,
        genres: game.genres,
        id: game.id
      }, game.id, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 15
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }, this), noOfPages > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Pagination, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
        ref: leftRef,
        src: _img_leftPagination_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
        alt: "left arrow",
        onClick: loadPage(currentPage - 1),
        className: "arrow left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }, this), pagesOnDisplay.includes(1) ? "" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "first-page",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
          className: 1 === currentPage ? "active" : "",
          onClick: loadPage(1),
          children: "1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 15
        }, this), "..."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "pages",
        children: pagesOnDisplay === null || pagesOnDisplay === void 0 ? void 0 : pagesOnDisplay.map((page, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
          className: i + pagesOnDisplayFirst === currentPage ? "active" : "",
          onClick: loadPage(page),
          children: page
        }, page, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 11
      }, this), pagesOnDisplay.includes(noOfPages) ? "" : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "first-page",
        children: ["...", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
          className: noOfPages === currentPage ? "active" : "",
          onClick: loadPage(noOfPages),
          children: noOfPages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
        ref: rightRef,
        src: _img_rightPagination_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
        alt: "right arrow",
        onClick: loadPage(currentPage + 1),
        className: "arrow right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }, this), showDetail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_GameDetail__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 22
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

_s(SearchedGames, "VeGVp6M8/mGka6ExDIVbWNK4THk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"]];
});

_c = SearchedGames;
const Sorting = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 70%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0.5rem 0;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sort {
    position: relative;
    button {
      font-size: 1rem;
      background-color: #fff;
      border-radius: 5px;
      padding: 0.5rem 2rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: #fff;
        background-color: var(--color-primary);
      }
    }

    form {
      position: absolute;
      top: -10%;
      left: -10%;
      display: flex;
      flex-direction: column;
      width: max-content;
      font-size: 1rem;
      background: #fff;
      border: 1px solid #cccccc;
      border-radius: 10px;
      overflow: hidden;

      input {
        display: none;
      }

      label {
        padding: 0.5rem 2rem;
        cursor: pointer;
      }

      label:hover {
        color: #fff;
        background-color: var(--color-primary);
      }
    }
  }
`;
_c2 = Sorting;
const Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div)`
  width: 70%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 2rem;
  column-gap: 1rem;
  justify-content: center;
`;
_c3 = Container;
const Pagination = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 0;

  .arrow {
    cursor: pointer;
  }

  button {
    font-size: 1.2rem;
    background: #fff;
    border: none;
    color: var(--color-primary);
    cursor: pointer;
    padding: 0.5rem 1rem;
  }

  .pages {
    display: flex;
    gap: 1rem;

    .active {
      background: var(--color-primary);
      color: #fff;
    }
  }
`;
_c4 = Pagination;
/* harmony default export */ __webpack_exports__["default"] = (SearchedGames);

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "SearchedGames");
__webpack_require__.$Refresh$.register(_c2, "Sorting");
__webpack_require__.$Refresh$.register(_c3, "Container");
__webpack_require__.$Refresh$.register(_c4, "Pagination");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/carousel.js":
/*!************************************!*\
  !*** ./src/components/carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const remToPixel = rem => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

function Carousel(GamesParentRef, GamesRef, i, leftArrowRef, rightArrowRef) {
  return e => {
    //VARIABLES
    const containerWidth = GamesRef.current.clientWidth;
    const width = (GamesParentRef.current.childNodes[0].offsetWidth + remToPixel(2)) * GamesParentRef.current.childNodes.length - remToPixel(2);
    let scrollLeft = (containerWidth - containerWidth * 0.1) * i; //EVALUATING COUNTER

    if (e.target.classList.contains("right") && scrollLeft + containerWidth < width) i += 1;
    if (e.target.classList.contains("left") && scrollLeft > 0) i -= 1;
    scrollLeft = (containerWidth - containerWidth * 0.1) * i; //SCROLLING CONTAINER

    GamesRef.current.scrollTo({
      left: (containerWidth - containerWidth * 0.1) * i,
      behavior: "smooth"
    }); //ACTIVATING/DEACTIVATING BUTTONS

    scrollLeft + containerWidth < width ? rightArrowRef.current.style.display = "inline-block" : rightArrowRef.current.style.display = "none";
    scrollLeft === 0 ? leftArrowRef.current.style.display = "none" : leftArrowRef.current.style.display = "inline-block";
  };
}

_c = Carousel;
/* harmony default export */ __webpack_exports__["default"] = (Carousel);

var _c;

__webpack_require__.$Refresh$.register(_c, "Carousel");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/useWindowSize.js":
/*!*****************************************!*\
  !*** ./src/components/useWindowSize.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _s = __webpack_require__.$Refresh$.signature();



function useWindowSize() {
  _s();

  const [size, setSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

_s(useWindowSize, "KQWnpQUxxL9IA2SMgNRWXVwWGFs=");

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/img/apple.svg":
/*!***************************!*\
  !*** ./src/img/apple.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/apple.5757c37e.svg");

/***/ }),

/***/ "./src/img/close.svg":
/*!***************************!*\
  !*** ./src/img/close.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/close.e4ee085c.svg");

/***/ }),

/***/ "./src/img/esrp1.svg":
/*!***************************!*\
  !*** ./src/img/esrp1.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/esrp1.c10e71ab.svg");

/***/ }),

/***/ "./src/img/esrp2.svg":
/*!***************************!*\
  !*** ./src/img/esrp2.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/esrp2.f1eb8161.svg");

/***/ }),

/***/ "./src/img/esrp3.svg":
/*!***************************!*\
  !*** ./src/img/esrp3.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/esrp3.24d49820.svg");

/***/ }),

/***/ "./src/img/esrp4.svg":
/*!***************************!*\
  !*** ./src/img/esrp4.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/esrp4.a816ad46.svg");

/***/ }),

/***/ "./src/img/esrp5.svg":
/*!***************************!*\
  !*** ./src/img/esrp5.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/esrp5.963570be.svg");

/***/ }),

/***/ "./src/img/esrpnull.svg":
/*!******************************!*\
  !*** ./src/img/esrpnull.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/esrpnull.1b1cd49a.svg");

/***/ }),

/***/ "./src/img/gamepad.svg":
/*!*****************************!*\
  !*** ./src/img/gamepad.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/gamepad.c9269ef5.svg");

/***/ }),

/***/ "./src/img/left.svg":
/*!**************************!*\
  !*** ./src/img/left.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/left.58467e9e.svg");

/***/ }),

/***/ "./src/img/leftPagination.svg":
/*!************************************!*\
  !*** ./src/img/leftPagination.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/leftPagination.cdd76f9b.svg");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo.52ff579d.png");

/***/ }),

/***/ "./src/img/metacritic.svg":
/*!********************************!*\
  !*** ./src/img/metacritic.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/metacritic.e3190046.svg");

/***/ }),

/***/ "./src/img/nintendo.svg":
/*!******************************!*\
  !*** ./src/img/nintendo.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/nintendo.2da7b4da.svg");

/***/ }),

/***/ "./src/img/playStation_store.png":
/*!***************************************!*\
  !*** ./src/img/playStation_store.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/playStation_store.79d02b54.png");

/***/ }),

/***/ "./src/img/playstation.svg":
/*!*********************************!*\
  !*** ./src/img/playstation.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/playstation.775fbb69.svg");

/***/ }),

/***/ "./src/img/right.svg":
/*!***************************!*\
  !*** ./src/img/right.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/right.74a5323e.svg");

/***/ }),

/***/ "./src/img/rightPagination.svg":
/*!*************************************!*\
  !*** ./src/img/rightPagination.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/rightPagination.67a53220.svg");

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/search.0ede1a90.svg");

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/star.a5be968f.png");

/***/ }),

/***/ "./src/img/steam.svg":
/*!***************************!*\
  !*** ./src/img/steam.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/steam.b9f0604e.svg");

/***/ }),

/***/ "./src/img/steam_store.jpeg":
/*!**********************************!*\
  !*** ./src/img/steam_store.jpeg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/steam_store.a04286e7.jpeg");

/***/ }),

/***/ "./src/img/xbox.svg":
/*!**************************!*\
  !*** ./src/img/xbox.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/xbox.fcfec7b0.svg");

/***/ }),

/***/ "./src/img/xbox_store.svg":
/*!********************************!*\
  !*** ./src/img/xbox_store.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/xbox_store.907ce46b.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/index.js";










const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_4__["compose"];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], composeEnhancer(Object(redux__WEBPACK_IMPORTED_MODULE_4__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_7__["default"])));
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["BrowserRouter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 3
}, undefined), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_gamesAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/gamesAction */ "./src/actions/gamesAction.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Game */ "./src/components/Game.js");
/* harmony import */ var _components_GameDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GameDetail */ "./src/components/GameDetail.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _img_left_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/left.svg */ "./src/img/left.svg");
/* harmony import */ var _img_right_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/right.svg */ "./src/img/right.svg");
/* harmony import */ var _components_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/useWindowSize */ "./src/components/useWindowSize.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/carousel */ "./src/components/carousel.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/pages/Home.js",
    _s = __webpack_require__.$Refresh$.signature();
















function Home() {
  _s();

  var _latest$, _upcoming$, _latest$2, _latest$3, _popular$;

  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useLocation"])();
  const showDetail = location.pathname.split("/")[2];
  const counterContainer = [0, 0, 0]; //REFS

  const i = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(0);
  const upcomingGamesRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const latestGamesRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const popularGamesRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const leftArrowPopularRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const rightArrowPopularRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const leftArrowLatestRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const rightArrowLatestRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const leftArrowUpcomingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const rightArrowUpcomingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const GamesParentRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const refContainer = [upcomingGamesRef, latestGamesRef, popularGamesRef];
  const leftArrowContainer = [leftArrowPopularRef, leftArrowLatestRef, leftArrowUpcomingRef];
  const rightArrowContainer = [rightArrowPopularRef, rightArrowLatestRef, rightArrowUpcomingRef];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])(); //USE EFFECT HOOKS

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => dispatch(Object(_actions_gamesAction__WEBPACK_IMPORTED_MODULE_1__["loadGames"])()), [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const headerInterval = setInterval(() => {
      if (i.current > 4) i.current = 0;
      headerRef.current.style.marginLeft = `${i.current * -100}%`;
      i.current++;
    }, 3000);
    return () => clearInterval(headerInterval);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    refContainer === null || refContainer === void 0 ? void 0 : refContainer.forEach((ref, i) => {
      counterContainer[i] = 0;
      ref.current.scrollTo({
        left: 0,
        behavior: "smooth"
      });
      rightArrowContainer[i].current.style.display = "inline-block";
      leftArrowContainer[i].current.style.display = "none";
    });
  }, [Object(_components_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["default"])()]);
  const {
    popular,
    latest,
    upcoming
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.games);
  const gamesContainer = [latest, popular, upcoming];
  const headingContainer = ["Latest", "Popular", "Upcoming"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Header, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "slides first",
        ref: headerRef,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
          src: (_latest$ = latest[0]) === null || _latest$ === void 0 ? void 0 : _latest$.background_image,
          alt: "Game Cover Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "slides",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
          src: (_upcoming$ = upcoming[0]) === null || _upcoming$ === void 0 ? void 0 : _upcoming$.background_image,
          alt: "Game Cover Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "slides",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
          src: (_latest$2 = latest[1]) === null || _latest$2 === void 0 ? void 0 : _latest$2.background_image,
          alt: "Game Cover Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "slides",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
          src: (_latest$3 = latest[2]) === null || _latest$3 === void 0 ? void 0 : _latest$3.background_image,
          alt: "Game Cover Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
        className: "slides",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
          src: (_popular$ = popular[0]) === null || _popular$ === void 0 ? void 0 : _popular$.background_image,
          alt: "Game Cover Header"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(GameList, {
      children: [gamesContainer.map((games, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(MainContiner, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
          className: "header",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("h2", {
            children: [headingContainer[i], " Games"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("button", {
            children: "View All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
          ref: leftArrowContainer[i],
          onClick: Object(_components_carousel__WEBPACK_IMPORTED_MODULE_10__["default"])(GamesParentRef, refContainer[i], counterContainer[i], leftArrowContainer[i], rightArrowContainer[i]),
          src: _img_left_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
          alt: "left arrow",
          className: "arrow left",
          style: {
            display: "none"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("img", {
          ref: rightArrowContainer[i],
          onClick: Object(_components_carousel__WEBPACK_IMPORTED_MODULE_10__["default"])(GamesParentRef, refContainer[i], counterContainer[i], leftArrowContainer[i], rightArrowContainer[i]),
          src: _img_right_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
          alt: "right arrow",
          className: "arrow right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(GamesContainer, {
          ref: refContainer[i],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Games, {
            ref: GamesParentRef,
            children: games && games.map(game => game.name && game.id && game.background_image && game.genres && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_Game__WEBPACK_IMPORTED_MODULE_3__["default"], {
              name: game.name,
              img: game.background_image,
              genres: game.genres,
              id: game.id
            }, game.id, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 25
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, this)), showDetail && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_components_GameDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 24
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Home, "8VjCRpoUnxZlSjOyOxPwHasV8yc=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_11__["useLocation"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"], _components_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["default"], react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]];
});

_c = Home;
const Header = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div)`
  height: 60rem;
  display: flex;
  overflow-x: hidden;
  /* margin-left: -20%; */

  .slides {
    flex: 0 0 auto;
    width: 100%;

    img {
      height: 60rem;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
_c2 = Header;
const GameList = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div)`
  padding: 0 5rem;
  width: 80%;
  max-width: 150rem;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      display: inline-block;
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-primary);
      background-color: #fff;
      border: none;
      cursor: pointer;
      border-bottom: 2px solid #fff;
      transition: all 0.1s;

      &:hover {
        border-bottom: 2px solid var(--color-primary);
      }
    }
  }
`;
_c3 = GameList;
const MainContiner = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div)`
  padding: 1rem 0;
  position: relative;

  .arrow {
    padding: 0.4rem;
    position: absolute;
    top: 38%;
    border-radius: 50%;
    background-color: var(--color-primary);
    box-shadow: 0 2px 10px #00000057;
    cursor: pointer;
    will-change: transform;
    transition: transform 0.1s;

    &:hover {
      transform: scale(1.02);
      background-color: var(--color-primary-dark);
    }

    &:active {
      transform: scale(0.98);
      background-color: var(--color-primary-dark);
    }
  }
  .left {
    left: -1%;
  }

  .right {
    right: -1%;
  }
`;
_c4 = MainContiner;
const GamesContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div)`
  overflow: hidden;
`;
_c5 = GamesContainer;
const Games = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_6__["motion"].div)`
  display: flex;
  column-gap: 2rem;
`;
_c6 = Games;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3, _c4, _c5, _c6;

__webpack_require__.$Refresh$.register(_c, "Home");
__webpack_require__.$Refresh$.register(_c2, "Header");
__webpack_require__.$Refresh$.register(_c3, "GameList");
__webpack_require__.$Refresh$.register(_c4, "MainContiner");
__webpack_require__.$Refresh$.register(_c5, "GamesContainer");
__webpack_require__.$Refresh$.register(_c6, "Games");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/detailReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/detailReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const initialState = {
  detail: {},
  screenshots: [],
  isLoading: true
};

const detailReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_DETAIL":
      return { ...state,
        detail: action.payload.detail,
        screenshots: action.payload.screenshots,
        isLoading: false
      };

    case "LOADING":
      return { ...state,
        isLoading: true
      };

    default:
      return { ...state
      };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (detailReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/gamesReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/gamesReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const initState = {
  popular: [],
  latest: [],
  upcoming: []
};

const gamesreducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "FETCH_GAMES":
      return {
        popular: action.payload.popular,
        latest: action.payload.latest,
        upcoming: action.payload.upcoming
      };

    default:
      return { ...state
      };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (gamesreducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _gamesReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamesReducer */ "./src/reducers/gamesReducer.js");
/* harmony import */ var _detailReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailReducer */ "./src/reducers/detailReducer.js");
/* harmony import */ var _searchReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchReducer */ "./src/reducers/searchReducer.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  games: _gamesReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  detail: _detailReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  search: _searchReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reducers/searchReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/searchReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const init = {
  search: [],
  query: ""
};

const searchReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SEARCH_GAMES":
      return { ...state,
        search: action.payload.search,
        query: action.payload.query
      };

    default:
      return { ...state
      };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (searchReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: smallImage, platformNameToSvg, esrpRatingSvg, ratingToStars, emptyStars, storeImages, reverseDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smallImage", function() { return smallImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "platformNameToSvg", function() { return platformNameToSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esrpRatingSvg", function() { return esrpRatingSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratingToStars", function() { return ratingToStars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStars", function() { return emptyStars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeImages", function() { return storeImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseDate", function() { return reverseDate; });
/* harmony import */ var _img_playstation_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/playstation.svg */ "./src/img/playstation.svg");
/* harmony import */ var _img_xbox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/xbox.svg */ "./src/img/xbox.svg");
/* harmony import */ var _img_steam_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/steam.svg */ "./src/img/steam.svg");
/* harmony import */ var _img_nintendo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/nintendo.svg */ "./src/img/nintendo.svg");
/* harmony import */ var _img_gamepad_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/gamepad.svg */ "./src/img/gamepad.svg");
/* harmony import */ var _img_apple_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/apple.svg */ "./src/img/apple.svg");
/* harmony import */ var _img_esrp1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/esrp1.svg */ "./src/img/esrp1.svg");
/* harmony import */ var _img_esrp2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/esrp2.svg */ "./src/img/esrp2.svg");
/* harmony import */ var _img_esrp3_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/esrp3.svg */ "./src/img/esrp3.svg");
/* harmony import */ var _img_esrp4_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/esrp4.svg */ "./src/img/esrp4.svg");
/* harmony import */ var _img_esrp5_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/esrp5.svg */ "./src/img/esrp5.svg");
/* harmony import */ var _img_esrpnull_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/esrpnull.svg */ "./src/img/esrpnull.svg");
/* harmony import */ var _img_star_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/star.png */ "./src/img/star.png");
/* harmony import */ var _img_playStation_store_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/playStation_store.png */ "./src/img/playStation_store.png");
/* harmony import */ var _img_xbox_store_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/xbox_store.svg */ "./src/img/xbox_store.svg");
/* harmony import */ var _img_steam_store_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/steam_store.jpeg */ "./src/img/steam_store.jpeg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/mandy/Documents/Dev Ed - React course/ignite/src/util.js";

















const smallImage = (imagePath, size) => {
  const image = imagePath === null || imagePath === void 0 ? void 0 : imagePath.split("media/");
  image === null || image === void 0 ? void 0 : image.splice(1, 0, `media/resize/${size}/-/`);
  return image === null || image === void 0 ? void 0 : image.join("");
};
const platformNameToSvg = platform => {
  switch (platform) {
    case "PlayStation":
      return _img_playstation_svg__WEBPACK_IMPORTED_MODULE_0__["default"];

    case "Xbox":
      return _img_xbox_svg__WEBPACK_IMPORTED_MODULE_1__["default"];

    case "PC":
      return _img_steam_svg__WEBPACK_IMPORTED_MODULE_2__["default"];

    case "Nintendo":
      return _img_nintendo_svg__WEBPACK_IMPORTED_MODULE_3__["default"];

    case "Apple Macintosh":
      return _img_apple_svg__WEBPACK_IMPORTED_MODULE_5__["default"];

    default:
      return _img_gamepad_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  }
};
const esrpRatingSvg = esrpId => {
  switch (esrpId) {
    case 1:
      return _img_esrp1_svg__WEBPACK_IMPORTED_MODULE_6__["default"];

    case 2:
      return _img_esrp2_svg__WEBPACK_IMPORTED_MODULE_7__["default"];

    case 3:
      return _img_esrp3_svg__WEBPACK_IMPORTED_MODULE_8__["default"];

    case 4:
      return _img_esrp4_svg__WEBPACK_IMPORTED_MODULE_9__["default"];

    case 5:
      return _img_esrp5_svg__WEBPACK_IMPORTED_MODULE_10__["default"];

    default:
      return _img_esrpnull_svg__WEBPACK_IMPORTED_MODULE_11__["default"];
  }
};
const ratingToStars = rating => {
  const arr = [];
  const diffPercentage = Math.floor((rating - Math.floor(rating)) * 100);

  for (let i = Math.floor(rating); i > 0; i--) {
    arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("img", {
      src: _img_star_png__WEBPACK_IMPORTED_MODULE_12__["default"],
      alt: "stars"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 14
    }, undefined));
  }

  if (diffPercentage > 0) {
    arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("img", {
      src: _img_star_png__WEBPACK_IMPORTED_MODULE_12__["default"],
      alt: "stars",
      style: {
        clipPath: `polygon(0 0, ${diffPercentage}% 0, ${diffPercentage}% 100%, 0 100%)`
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined));
  }

  return arr;
};
const emptyStars = () => {
  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxDEV"])("img", {
      src: _img_star_png__WEBPACK_IMPORTED_MODULE_12__["default"],
      alt: "dim star",
      style: {
        opacity: 0.3
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 14
    }, undefined));
  }

  return arr;
};
const storeImages = store => {
  switch (store) {
    case "PlayStation Store":
      return _img_playStation_store_png__WEBPACK_IMPORTED_MODULE_13__["default"];

    case "Xbox Store":
      return _img_xbox_store_svg__WEBPACK_IMPORTED_MODULE_14__["default"];

    case "Steam":
      return _img_steam_store_jpeg__WEBPACK_IMPORTED_MODULE_15__["default"];

    default:
      return;
  }
};
const reverseDate = date => {
  return date === null || date === void 0 ? void 0 : date.split("-").reverse().join("/");
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mandy/Documents/Dev Ed - React course/ignite/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/mandy/Documents/Dev Ed - React course/ignite/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/mandy/Documents/Dev Ed - React course/ignite/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/mandy/Documents/Dev Ed - React course/ignite/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map