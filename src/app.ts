import Fastify, { FastifyInstance } from 'fastify';
import ProductsRoutes from './routes/products';

const fastify: FastifyInstance = Fastify({ logger: true });

fastify.get('/', {}, async (request, reply) => {
  reply.code(200).send({ v1: 'clean architecture' });
});

fastify.register(ProductsRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info('server started successfully');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
