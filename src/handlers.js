async function home(ctx) {
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.stringify({ message: 'Hello World' });
}

export { home };
