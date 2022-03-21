const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const path = require("path");
const admin = require("firebase-admin");
const globalErrorHandler = require("./controllers/errors.controller");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");

const csrf = require("csurf");
const cookieParser = require("cookie-parser");
var filter = require("content-filter");

const EmployeeRouter = require("./Routes/employee.routes");
// sentry
console.log("checkpoint 1 passport.......");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const app = express();

Sentry.init({
  dsn: "https://3925331b97be4c9b9ae1720b5feaa6f7@o1061329.ingest.sentry.io/6051739",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.1,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

//?firebase node js authentication

//?logger
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(cors({ credentials: true, origin: true }));

//* setting security middlewares
//? setting security headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.json());
//? preventing xss attacks
app.use(xss());

//? sanitizining inputs to prevent sql injection
app.use(mongoSanitize());

//? hiding express platform info
app.disable("x-powered-by");

// app.use(
//   "http://localhost:3000/api/v1/user/login/fb",
//   passport.authenticate("facebook")
// );

// app.use("http://localhost:3000/api/v1/user/failed/login", (req, res, next) => {
//   res.send("login failed");
// });
// app.use(
//   "/fb/auth",
//   passport.authenticate("facebook", { failureRedirect: "/failed/login" }),
//   function (req, res) {
//     res.send("logged in to facebook");
//   }
// );

// !-----------------------

//? second layer of input sanitization for preventing sql injections
var blackList = ["$", "{", "&&", "||"];
var options = {
  urlBlackList: blackList,
  bodyBlackList: blackList,
};
app.use(filter(options));

//? parser to parse the cookies like the auth and csrf cookies
app.use(cookieParser());

// app.use(csrf({ cookie: true }));

// app.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   //sending CSRF token on each request
//   next();
// });

//? rate limiting to prevent the DOS attacks
const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000,
  message: "too many request from this IP",
});

app.use("/api", limiter);
app.use(compression());
//? implementing the routes

// todo implement routest for CRUD (pcs)

app.use("/api/v1/employee", EmployeeRouter);

//? sending the static files to the browser on the first req...
// this may be cached by the browser

if (process.env.NODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname, "..", "..")));
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");

    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());
app.use(globalErrorHandler);
module.exports = app;
