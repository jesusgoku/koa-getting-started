import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import * as middleware from './middleware';
import router from './routes';

const app = new Koa();

app.use(bodyParser());

app.use(middleware.loggerRequests);
app.use(middleware.handleErrors);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
