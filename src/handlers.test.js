import * as handlers from './handlers';

describe('handlers', () => {
  let ctx;

  beforeEach(() => {
    ctx = {};
  });

  it('home', async () => {
    await handlers.home(ctx);

    expect(ctx).toHaveProperty('body');
  });
});
