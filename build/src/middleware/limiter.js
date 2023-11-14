"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// setup limiter required by user.
// over 100 request then server should res to client status [429 TOO MANY REQUESTS]
const limiter = (0, _expressRateLimit.default)({
  // 15 minutes
  windowMs: 15 * 60 * 1000,
  // limit each IP to 100 requests per windowMs
  max: 100
});
var _default = exports.default = limiter;