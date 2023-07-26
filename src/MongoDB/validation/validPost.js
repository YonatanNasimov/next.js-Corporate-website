import Joi from "joi";

export const validPost = (_reqBody) => {
    const joiSchema = Joi.object({
        title: Joi.string().min(3).max(50).required(),
        desc: Joi.string().min(3).max(100).required(),
        content: Joi.string().min(3).max(9999).required(),
        imgUrl: Joi.string().min(2).max(9999).required(),
        user: Joi.string().min(2).max(99),
    })

    return joiSchema.validate(_reqBody);
}
