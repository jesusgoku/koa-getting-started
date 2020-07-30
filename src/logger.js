import log4js from 'log4js';

import { DEBUG_LEVEL } from './config';

const logger = log4js.getLogger('KOA-GETTING-STARTED');

logger.level = DEBUG_LEVEL;

export default logger;
