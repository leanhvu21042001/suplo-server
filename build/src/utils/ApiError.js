"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _httpStatus = _interopRequireDefault(require("http-status"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class ExtendableError extends Error {
  constructor({
    message,
    errors,
    status,
    isPublic,
    stack
  }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    this.stack = stack;
  }
}
class APIError extends ExtendableError {
  constructor({
    message,
    errors,
    stack,
    status = _httpStatus.default.INTERNAL_SERVER_ERROR,
    isPublic = false
  }) {
    super({
      message,
      errors,
      status,
      isPublic,
      stack
    });
  }

  /**
   *
   * @param {ExtendableError} error
   * @returns APIError
   */
  static NotFound(error) {
    return new APIError(_objectSpread({
      message: "Not found",
      status: _httpStatus.default.NOT_FOUND
    }, error));
  }

  /**
   *
   * @param {ExtendableError} error
   * @returns APIError
   */
  static BadRequest(error) {
    return new APIError(_objectSpread({
      message: "Bad request",
      status: _httpStatus.default.BAD_REQUEST
    }, error));
  }

  /**
   *
   * @param {ExtendableError} error
   * @returns APIError
   */
  static ValidationError(error) {
    return new APIError(_objectSpread({
      message: "Validation Error",
      status: _httpStatus.default.BAD_REQUEST
    }, error));
  }
}
var _default = exports.default = APIError;