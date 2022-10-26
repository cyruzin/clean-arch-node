import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { postgres } from './config/database';
import Routes from './routes';

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
