var express = require("express");
const cors = require("cors");
const axios = require("axios");
var router = require("express-promise-router")();
const userController = require("../controllers/users.js");
const Joi = require("@hapi/joi");
const { debuger, validate, authSchema } = require("../helpers/routerHelper");

router.post("/signup", cors(), function(req, res, next) {
  console.log("outside", req.body);
  validate(req.body);

  // req.value.body instead of req.body
  //debuger();
  //res.json({
  //  received: true
  //});
});

router.post("/signin", cors(), function(req, res, next) {
  userController.signIn();
});

router.get("/secret", function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
