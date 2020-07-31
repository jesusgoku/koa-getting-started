import joi from 'joi';

const getUsersQuerySchema = joi.object({
  page: joi.number().default(1),
  limit: joi.number().default(10),
});

const getUserParamsSchema = joi.object({
  id: joi.number().required(),
});

export { getUsersQuerySchema, getUserParamsSchema };
