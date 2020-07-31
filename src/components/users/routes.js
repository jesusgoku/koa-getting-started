import Router from '@koa/router';

import { validateSchemas } from '../../middleware';
import * as handlers from './handlers';
import * as schemas from './schemas';

const router = new Router();

router.get(
  '/',
  validateSchemas([{ section: 'query', schema: schemas.getUsersQuerySchema }]),
  handlers.getUsers,
);

router.get(
  '/:id',
  validateSchemas([{ section: 'params', schema: schemas.getUserParamsSchema }]),
  handlers.getUser,
);

router.delete(
  '/:id',
  validateSchemas([{ section: 'params', schema: schemas.deleteUserParamsSchema }]),
  handlers.deleteUser,
);

router.post(
  '/',
  validateSchemas([{ section: 'body', schema: schemas.createUserBodySchema }]),
  handlers.createUser,
);

export default router;
