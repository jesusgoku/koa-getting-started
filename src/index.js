import http from 'http';

import app from './app';
import logger from './logger';
import { PORT } from './config';

const server = http.createServer(app.callback());

server.listen(PORT, () => {
  logger.info(`Listen on: http://0.0.0.0:${PORT}`);
});
