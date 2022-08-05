import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import ProductsRoutes from './routes/products';

const fastify: FastifyInstance = Fastify({ logger: true });

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'string',
      },
    },
  },
};

fastify.get('/', opts, async (request, reply) => {
  reply.send({ v1: 'clean architecture' });
});

fastify.register(ProductsRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log('server started successfully');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
