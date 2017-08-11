"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require("react-hot-loader");

var _socketIo = require("./socketIo");

var _socketIo2 = _interopRequireDefault(_socketIo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiRunner = require("./api-runner-browser");

<<<<<<< HEAD
window.___emitter = require("./emitter");

// Let the site/plugins run code very early.
apiRunner("onClientEntry");

// Hook up the client to socket.io on server
(0, _socketIo2.default)();
=======
window.___emitter = require("./emitter"

// Let the site/plugins run code very early.
);apiRunner("onClientEntry"

// Hook up the client to socket.io on server
);(0, _socketIo2.default
>>>>>>> fd65a333b1234103ed8c4413e9f921f726714be8

/**
 * Service Workers are persistent by nature. They stick around,
 * serving a cached version of the site if they aren't removed.
 * This is especially frustrating when you need to test the
 * production build on your local machine.
 *
 * Let's unregister the service workers in development, and tidy up a few errors.
 */
<<<<<<< HEAD
if ("serviceWorker" in navigator) {
=======
)();if ("serviceWorker" in navigator) {
>>>>>>> fd65a333b1234103ed8c4413e9f921f726714be8
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(registrations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var registration = _step.value;

        registration.unregister();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
}

var rootElement = document.getElementById("___gatsby");

var Root = require("./root");
if (Root.default) {
  Root = Root.default;
}

_reactDom2.default.render(_react2.default.createElement(
  _reactHotLoader.AppContainer,
  null,
  _react2.default.createElement(Root, null)
<<<<<<< HEAD
), rootElement, function () {
  apiRunner("onInitialClientRender");
});
=======
), rootElement);
>>>>>>> fd65a333b1234103ed8c4413e9f921f726714be8

if (module.hot) {
  module.hot.accept("./root", function () {
    var NextRoot = require("./root");
    if (NextRoot.default) {
      NextRoot = NextRoot.default;
    }
    _reactDom2.default.render(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(NextRoot, null)
<<<<<<< HEAD
    ), rootElement, function () {
      apiRunner("onInitialClientRender");
    });
=======
    ), rootElement);
>>>>>>> fd65a333b1234103ed8c4413e9f921f726714be8
  });
}
//# sourceMappingURL=app.js.map