"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// whitelist
const allowedOrigins = ["http://localhost:3000", "http://localhost:1412"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "DELETE", "PATCH", "PUT"]
};
var _default = exports.default = (0, _cors.default)(corsOptions);