import http from 'http';

import app from './app';
import { PORT } from './config';

const server = http.createServer(app.callback());

server.listen(PORT, () => {
  console.log(`Listen on: http://0.0.0.0:${PORT}`);
});
