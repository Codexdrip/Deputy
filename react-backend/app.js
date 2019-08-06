var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
const mongoose = require("mongoose");
const { USER, PASS } = require("./utils/dbAuth");
const { options } = require("./db_helpers/users");
const mongoDB = `mongodb://${USER}:${PASS}@ds045679.mlab.com:45679/deputy`;

mongoose
  .connect(mongoDB, options)
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
