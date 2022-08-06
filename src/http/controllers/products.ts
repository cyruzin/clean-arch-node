import { Product } from 'domain/products';
import { FastifyRequest, FastifyReply } from 'fastify';
import { productService } from '../../services/products';

export const getAll = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const res = await productService.getAll();
    return reply.code(200).send(res);
  } catch (err) {
    return reply.code(500).send(err);
  }
};

export const getByID = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    const res = await productService.getByID(+id);
    return reply.code(200).send(res);
  } catch (err) {
    return reply.code(500).send(err);
  }
};

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    await productService.create(request.body as Product);
    return reply.code(201).send({ message: 'created' });
  } catch (err) {
    return reply.code(500).send(err);
  }
};

export const update = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    const newProduct: Product = {
      ...(request.body as Product),
      id,
    };

    await productService.update(newProduct);
    return reply.code(200).send({ message: 'updated' });
  } catch (err) {
    return reply.code(500).send(err);
  }
};

export const remove = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    await productService.remove(+id);
    return reply.code(200).send({ message: 'removed' });
  } catch (err) {
    return reply.code(500).send(err);
  }
};
