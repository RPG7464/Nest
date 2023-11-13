import * as Joi from 'joi';
export const ValidationSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  SECRET: Joi.string().required(),
});
