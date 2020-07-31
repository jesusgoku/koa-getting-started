import Router from '@koa/router';

import { validateSchemas } from '../../middleware';
import * as handlers from './handlers';
import * as schemas from './schemas';

const router = new Router();

router.get(
  '/:id',
  validateSchemas([{ section: 'params', schema: schemas.getUserParamsSchema }]),
  handlers.getUser,
);

router.get(
  '/',
  validateSchemas([{ section: 'query', schema: schemas.getUsersQuerySchema }]),
  handlers.getUsers,
);

export default router;
