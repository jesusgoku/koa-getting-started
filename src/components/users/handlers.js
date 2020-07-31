import * as services from './services';

async function getUsers(ctx) {
  ctx.body = await services.getUsers(ctx.state.query);
}

async function getUser(ctx) {
  ctx.body = await services.getUser(ctx.state.params.id);
}

async function deleteUser(ctx) {
  await services.deleteUser(ctx.state.params.id);

  ctx.status = 204;
}

async function createUser(ctx) {
  ctx.status = 201;
  ctx.body = await services.createUser(ctx.state.body);
}

async function updateUser(ctx) {
  ctx.body = await services.updateUser(ctx.state.params.id, ctx.state.body);
}

export { getUsers, getUser, deleteUser, createUser, updateUser };
