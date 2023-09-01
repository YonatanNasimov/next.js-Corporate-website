import Joi from "joi";

export const validUser = (_reqBody) => {
  const joiSchema = Joi.object({
    username: Joi.string().min(3).max(99).required(),
    email: Joi.string().min(2).max(99).email().required(),
    password: Joi.string().min(3).max(99).required(),
    imgUrl: Joi.string().min(2).max(9999).allow(null, ""),
    phone: Joi.string().min(2).max(99).allow(null, ""),
  });

  return joiSchema.validate(_reqBody);
};

export const validUserEdit = (_reqBody) => {
  const joiSchema = Joi.object({
    username: Joi.string().min(3).max(99).required(),
    email: Joi.string().min(2).max(99).email().required(),
    imgUrl: Joi.string().min(2).max(9999).allow(null, ""),
    phone: Joi.string().min(2).max(99).allow(null, ""),
  });

  return joiSchema.validate(_reqBody);
};

export const validLogin = (_reqBody) => {
  const joiSchema = Joi.object({
    username: Joi.string().min(3).max(99).required(),
    password: Joi.string().min(3).max(99).required(),
  });

  return joiSchema.validate(_reqBody);
};

