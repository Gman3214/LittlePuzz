const joi = require('@hapi/joi')

const UserValidation = joi.object({

    email: joi.string()
    .email()
    .required(),
    username: joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    password: joi.string()
    .pattern(/^[0-9a-zA-Z]+$/)
    .min(8)
    .max(30),


});



module.exports.RUserValidation = UserValidation;
