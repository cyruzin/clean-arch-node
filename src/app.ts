import Fastify, { FastifyInstance } from 'fastify';
import Routes from './routes';
import { postgres } from './config/database';

const fastify: FastifyInstance = Fastify({ logger: true });

fastify.get('/', {}, async (request, reply) => {
  reply.code(200).send({ v1: 'clean architecture' });
});

fastify.register(Routes);

(async () => {
  try {
    await postgres.connect();
    fastify.log.info('postgres started successfully');

    await fastify.listen({ port: 3000 });
    fastify.log.info('server started successfully');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
