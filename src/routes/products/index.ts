import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getAll, getByID } from '../../http/controllers/products';

export default function (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void,
) {
  fastify.get('/products', {}, getAll);
  fastify.get('/products/:id', {}, getByID);
  done();
}
