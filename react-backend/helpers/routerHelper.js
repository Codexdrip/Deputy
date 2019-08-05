const Joi = require("@hapi/joi");
const authSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required()
});

module.exports = {
  debuger: () => {
    return (req, res, next) => {
      console.log("req.body debugger: ", req.body);
    };
  },
  validateBody: schemas => {
    return (req, res, next) => {
      schemas.validate(req.body, (err, result) => {
        if (err) {
          console.log(err);
        }

        console.log(result);
        //userController.signUp();
      });
      // req.value.body instead of req.body
    };
  },

  validate: reqg => {
    console.log("hello>");
    authSchema.validate(req, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log("joi: ", result);
      //userController.signUp();
    });
    // req.value.body instead of req.body
  }
};
