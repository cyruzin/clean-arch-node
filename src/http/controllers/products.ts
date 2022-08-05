import { FastifyRequest, FastifyReply } from 'fastify';

export const getAll = async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.code(200).send({ data: ['PlayStation 5', 'XBOX Series X'] });
};
