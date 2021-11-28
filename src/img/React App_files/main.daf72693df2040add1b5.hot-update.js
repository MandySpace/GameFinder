webpackHotUpdate("main",{

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
  return `${BASE_URL}${GAMES}${API_KEY}&search=${searchQuery}&page=${page}&ordering=${sortBy}&search_precise=true`;
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

/***/ })

})
//# sourceMappingURL=main.daf72693df2040add1b5.hot-update.js.map