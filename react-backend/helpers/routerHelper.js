const Joi = require("joi");
const userController = require("../controllers/users.js");

// schema used to verify name and email & password
const authSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required()
});

//export this method
// validateBody email and password meet requirements
module.exports = {
  validateBody: (req, res) => {
    authSchema.validate(req, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        console.log("joi: ", result);
        userController.signUp(result, res); // sign up the user
      }
    });
  }
};
