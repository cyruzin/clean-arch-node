import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getAll } from '../../http/controllers/products';

export default function (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void,
) {
  fastify.get('/products', {}, getAll);
  done();
}
