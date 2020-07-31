import Router from '@koa/router';

import * as handlers from './handlers';
import users from './components/users/routes';

const router = new Router();

router.get('/', handlers.home);
router.use('/users', users.routes(), users.allowedMethods());

export default router;
