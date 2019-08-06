var express = require("express");
const cors = require("cors");
const axios = require("axios");
var router = require("express-promise-router")();
const Joi = require("joi"); // validate user input
const { validateBody } = require("../helpers/routerHelper"); // validate user input
const passport = require("passport");
const passconf = require("../passport");

router.post("/signup", cors(), async function(req, res, next) {
  //console.log("outside", req.body, res);
  validateBody(req.body, res);
});

router.get("/signin", cors(), function(req, res, next) {
  res.json({ sad: "sad..." });
});
router.post("/signin", cors(), function(req, res, next) {
  userController.signIn();
});

router.get("/secret", function(req, res, next) {
  console.log("trying to auth");
  passport.authenticate("jwt", { session: false });
  //console.log(req.body);
});

router.get("/auth/example", cors(), passport.authenticate("provider"));

router.get(
  "/auth/example/callback",
  cors(),
  passport.authenticate("provider", { failureRedirect: "/signin" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
    let code = req.query.code;
    console.log("code", code);
  }
);

module.exports = router;
