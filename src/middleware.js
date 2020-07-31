import logger from './logger';

/**
 * @typedef {Object} Schema
 * @property {string} section - query, body or params
 * @property {Schema} schema - Joi schema
 * @property {Object} options - Joi schema validate options (https://hapi.dev/module/joi/api/?v=17.1.1#anyvalidatevalue-options)
 */

async function handleErrors(ctx, next) {
  try {
    await next();
  } catch (err) {
    const { message, status = 500, expose } = err;

    logger.error(
      `${ctx.request.ip} > ${ctx.request.method} ${ctx.request.url} < ${status} ${message}`,
    );

    ctx.status = status;
    ctx.body = {
      status,
      errors: [{ message: expose ? message : 'Internal server error' }],
    };
  }
}

async function loggerRequests(ctx, next) {
  await next();

  logger.info(
    `${ctx.request.ip} > ${ctx.request.method} ${ctx.request.url} < ${ctx.response.status} ${ctx.response.message}`,
  );
}

/**
 * Validate schema into request sections and sanitize data in ctx.state[section]
 *
 * @param {Schema[]} schemas - schemas to validate
 *
 * @return {Function} - async middleware for Koa
 */
function validateSchemas(schemas) {
  return async (ctx, next) => {
    const promises = schemas
      .filter(({ section }) => ['body', 'query', 'params'].includes(section))
      .map(({ section, schema, options }) =>
        schema
          .validateAsync(ctx.request[section] || ctx[section], options)
          .then((data) => ({ section, data })),
      );

    try {
      (await Promise.all(promises)).forEach(({ section, data }) => {
        ctx.state[section] = { ...(ctx.request[section] || ctx[section]), ...data };
      });

      await next();
    } catch (err) {
      ctx.throw(400, err);
    }
  };
}

export { handleErrors, loggerRequests, validateSchemas };
