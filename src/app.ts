import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { postgres } from './config/database';
import Routes from './routes';
import FastifyGracefulShutdown from 'fastify-graceful-shutdown';

const fastify: FastifyInstance = Fastify({ logger: true });

fastify.server.requestTimeout = Number(process.env.SERVER_TIMEOUT) || 20000;

fastify.register(cors, {
  origin: ['*'],
  allowedHeaders: ['Accept', 'Authorization', 'Content-Type'],
  exposedHeaders: ['Link'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  maxAge: 300,
});

fastify.register(Routes);

fastify.register(FastifyGracefulShutdown);

fastify.addHook('onClose', async () => {
  await postgres.end();
  fastify.log.info('postgres closed');
  fastify.log.info('server closed');
});

fastify.after(() => {
  fastify.gracefulShutdown(async (signal: string, next: (err?: Error | undefined) => void) => {
    try {
      fastify.log.warn(signal + ' received...');
      fastify.log.info('closing postgres...');
      next();
    } catch (err: any) {
      fastify.log.error(err);
      next(err);
    }
  });
});

(async () => {
  try {
    await postgres.connect();
    fastify.log.info('postgres started successfully');

    await fastify.listen({ port: Number(process.env.SERVER_PORT) });
    fastify.log.info('server started successfully');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
