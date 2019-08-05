var express = require("express");
var router = require("express-promise-router")();
const cors = require("cors");
const axios = require("axios");
const userController = require("../controllers/users.js");

async function fetchDeputy() {
  let api = "https://2d1c2502043811.na.deputy.com/api/v1/me";
  let user = await axios.get(api);
  console.log(user);
  // let userbase = [{ id: 1, username: "simp" }, { id: 2, username: "evensimp" }];
  return user;
}

/* GET home page. */
router.get("/", cors(), function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getMe", cors(), (req, res, next) => {
  // And insert something like this instead:
  res.json([
    {
      id: 1,
      username: "samsepi0l"
    },
    {
      id: 2,
      username: "D0loresH4ze"
    }
  ]);
});

router.get("/deputy", cors(), async (req, res, next) => {
  try {
    const user = await fetchDeputy();
    res.json(user);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    console.error(e);
  }
});

module.exports = router;
