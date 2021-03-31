//For Validation
const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().email(),
    password: Joi.string().min(5).required(),
    displayusername: Joi.string().required(),
    timestamp: Joi.date().iso(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().email(),
    password: Joi.string().min(5).required(),
    timestamp: Joi.date().iso().required(),
  });

  return schema.validate(data);
};

const timeStampValidation = (data) => {
  const schema = Joi.object({
    timestamp: Joi.date().iso().required(),
  });

  return schema.validate(data);
};

const carFilterValidation = (data) => {
  const schema = Joi.object({
    carname: Joi.string().allow(''),
    pageindex: Joi.number().required(),
    pagesize: Joi.number().required(),
    timestamp: Joi.date().iso().required(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.timeStampValidation = timeStampValidation;
module.exports.carFilterValidation = carFilterValidation;
