import * as services from './services';

async function getUsers(ctx) {
  ctx.body = await services.getUsers(ctx.state.query);
}

async function getUser(ctx) {
  ctx.body = await services.getUser(ctx.state.params.id);
}

export { getUsers, getUser };
