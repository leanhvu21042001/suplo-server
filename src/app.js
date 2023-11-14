import path from "path";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";

import { env } from "@/constants";
import APIError from "@/utils/ApiError";
import loadRoutes from "@/utils/load-routes";
import cors from "@/middleware/cors";
import errorConverter from "@/middleware/error-converter";
import errorHandler from "@/middleware/error-handler";
import limiter from "@/middleware/limiter";
import morganMiddleware from "@/middleware/morgan";
import connectMongooseDB from "@/database/mongoose.connect";

const app = express();

// Connect DB
connectMongooseDB();

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// Use package
app.use(helmet());

// just run when deploy. [Maybe some test case over 100 requests]
if (env === "production") {
  app.use(limiter);
}

// Cross Origin Resource Sharing
app.use(cors);

// Logger
app.use(morganMiddleware);

// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set up for cookies middleware
app.use(cookieParser());

app.use("/public", express.static(path.join(__dirname, "./public")));

// Use router
app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

// Load Routes
app.use(loadRoutes("./modules/v1", "/api/v1"));

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(APIError.NotFound({ message: "Page not Found" }));
});

// if error is not an instanceOf APIError, convert it.
app.use(errorConverter);

// error handler, send stacktrace only during development
app.use(errorHandler);

module.exports = app;
