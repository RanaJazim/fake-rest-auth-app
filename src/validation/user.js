const Joi = require("joi");

const userRegister = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email({ minDomainSegments: 1, tlds: { allow: ["com"] } }),
  password: Joi.string().min(5).max(30).required(),
});

const userLogin = Joi.object({
  email: Joi.string().email({ minDomainSegments: 1, tlds: { allow: ["com"] } }),
  password: Joi.string().min(5).max(30).required(),
});


module.exports = { userRegister, userLogin };
