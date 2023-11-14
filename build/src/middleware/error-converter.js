"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ApiError = _interopRequireDefault(require("../utils/ApiError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (err, _req, _res, next) => {
  let convertedError = err;
  if (!(err instanceof _ApiError.default)) {
    convertedError = new _ApiError.default({
      message: err.message,
      status: err.status,
      stack: err.stack
    });
  }
  next(convertedError);
};
exports.default = _default;