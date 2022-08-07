import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getAll, getByID, create, update, remove } from '../http/controllers/products';

export default function (
  fastify: FastifyInstance,
  _options: FastifyPluginOptions,
  done: () => void,
) {
  fastify.get('/products', {}, getAll);
  fastify.get('/products/:id', {}, getByID);
  fastify.post('/products', {}, create);
  fastify.put('/products/:id', {}, update);
  fastify.delete('/products/:id', {}, remove);

  done();
}
