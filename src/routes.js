import Router from '@koa/router';

import * as handlers from './handlers';

const router = new Router();

router.get('/', handlers.home);

export default router;
