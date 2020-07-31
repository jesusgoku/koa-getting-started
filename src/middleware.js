import logger from './logger';

async function handleErrors(ctx, next) {
  try {
    await next();
  } catch (err) {
    const { message, status = 500, expose } = err;

    logger.error(
      `${ctx.request.method} ${ctx.request.url} - ${ctx.request.ip} - ${status} ${message}`,
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
    `${ctx.request.method} ${ctx.request.url} - ${ctx.request.ip} - ${ctx.response.status} ${ctx.response.message}`,
  );
}

export { handleErrors, loggerRequests };
