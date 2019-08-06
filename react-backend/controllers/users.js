const User = require("../models/users");
const JWT = require("jsonwebtoken");
const { TOKEN_SEC } = require("../utils/token");
const signToken = user => {
  const token = JWT.sign(
    {
      iss: "codedotrunners", //issuer: any name optional
      sub: user.id, //sub: ? meaty part, find the user id and save it
      iat: new Date().getTime(), //date/current time optional
      exp: new Date().setDate(new Date().getDate() + 1) // experation date, set to tomorrow, optional
    },
    TOKEN_SEC
  ); // the final parameter is the secret code to use, required
  return token;
};

module.exports = {
  signUp: async (result, res) => {
    // username & password
    const { email, password } = result;
    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
      res.status(403).json({ error: "email in use" });
    } else {
      const newUser = new User({
        email: email,
        password: password
      });
      await newUser.save();
      const token = signToken(newUser);
      if (token) {
        res.status(200).json({ success: "yep", token: token });
      }
    }
  },
  signIn: async (req, res, next) => {
    console.log("signIn");
  },
  secret: async (req, res, next) => {
    console.log("secret");
  }
};
