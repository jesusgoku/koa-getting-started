import joi from 'joi';

const getUsersQuerySchema = joi.object({
  page: joi.number().default(1),
  limit: joi.number().default(10),
});

const getUserParamsSchema = joi.object({
  id: joi.number().required(),
});

const deleteUserParamsSchema = joi.object({
  id: joi.number().required(),
});

const createUserBodySchema = joi.object({
  name: joi.string().required(),
  username: joi.string().required(),
  email: joi.string().email().required(),
});

const updateUserParamsSchema = joi.object({
  id: joi.number().required(),
});

const updateUserBodySchema = joi.object({
  name: joi.string().trim(),
  username: joi.string().trim(),
  email: joi.string().email(),
});

export {
  getUsersQuerySchema,
  getUserParamsSchema,
  deleteUserParamsSchema,
  createUserBodySchema,
  updateUserParamsSchema,
  updateUserBodySchema,
};
