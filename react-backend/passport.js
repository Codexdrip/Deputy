const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { TOKEN_SEC } = require("./utils/token");
const Users = require("./models/users");
const profileURL = "https://2d1c2502043811.na.deputy.com/api/v1/me";
const { clientID, clientSecret } = require("./utils/token");

const strategy = new OAuth2Strategy(
  {
    authorizationURL: "https://once.deputy.com/my/oauth/login",
    tokenURL: "https://once.deputy.com/my/oauth/access_token",
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: "http://localhost:5000/auth/example/callback",
    passReqToCallback: true
  },
  function(accessToken, refreshToken, profile, done) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return done(null, strategy);
  }
);
OAuth2Strategy.prototype.userProfile = function(accessToken, done) {
  console.log(accessToken);
};

passport.use("provider", strategy);
