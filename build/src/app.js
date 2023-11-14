"use strict";

var _path = _interopRequireDefault(require("path"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _helmet = _interopRequireDefault(require("helmet"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _methodOverride = _interopRequireDefault(require("method-override"));
var _constants = require("./constants");
var _ApiError = _interopRequireDefault(require("./utils/ApiError"));
var _cors = _interopRequireDefault(require("./middleware/cors"));
var _errorConverter = _interopRequireDefault(require("./middleware/error-converter"));
var _errorHandler = _interopRequireDefault(require("./middleware/error-handler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const acb = 0;
let a;
var b;
const app = (0, _express.default)();

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use((0, _methodOverride.default)());

// Use package
app.use((0, _helmet.default)());

// just run when deploy. [Maybe some test case over 100 requests]
if (_constants.env === "production") {
  app.use(limiter);
}

// Cross Origin Resource Sharing
app.use(_cors.default);

// Logger
app.use((0, _morgan.default)(_constants.morganLogFormat));

// parse application/json
app.use(_express.default.json());

// parse application/x-www-form-urlencoded
app.use(_express.default.urlencoded({
  extended: true
}));

// set up for cookies middleware
app.use((0, _cookieParser.default)());
app.use("/public", _express.default.static(_path.default.join(__dirname, "./public")));

// Use router
app.get("/", (req, res) => {
  return res.json({
    hello: "world"
  });
});
// app.use(rootRouter);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(_ApiError.default.NotFound());
});

// if error is not an instanceOf APIError, convert it.
app.use(_errorConverter.default);

// error handler, send stacktrace only during development
app.use(_errorHandler.default);
module.exports = app;