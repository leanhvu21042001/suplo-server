"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _httpStatus = _interopRequireDefault(require("http-status"));
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (err, _req, res, _next) => {
  const response = {
    code: err.status,
    message: err.message || _httpStatus.default[err.status],
    errors: err.errors,
    stack: err.stack
  };
  if (_constants.env !== "development") {
    delete response.stack;
  }
  return res.status(err.status).json(response);
};
exports.default = _default;