"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = exports.morganLogFormat = exports.env = void 0;
var _path = _interopRequireDefault(require("path"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config({
  path: _path.default.join(__dirname, "../.env")
});
const env = exports.env = process.env.NODE_ENV;
const port = exports.port = process.env.PORT || 142;
const morganLogFormat = exports.morganLogFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";