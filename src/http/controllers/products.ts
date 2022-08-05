import { FastifyRequest, FastifyReply } from 'fastify';
import { productRepository } from '../../repositories/products';

export const getAll = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const res = await productRepository.getAll();
    return reply.code(200).send(res);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send(err);
  }
};

export const getByID = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    const res = await productRepository.getByID(+id);
    return reply.code(200).send(res);
  } catch (err) {
    request.log.error(err);
    return reply.code(500).send(err);
  }
};
