import { IProduct } from 'domain/products';
import { FastifyRequest, FastifyReply } from 'fastify';
import { productSchema } from '../../validation/products';
import { ProductService } from '../../services/products';

export const getAll = async (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    const res = await ProductService.getAll();
    return reply.code(200).send(res);
  } catch (err) {
    return reply.send(err);
  }
};

export const getByID = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    const res = await ProductService.getByID(+id);
    return reply.code(200).send(res);
  } catch (err) {
    return reply.send(err);
  }
};

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const product = request.body as IProduct;

    await productSchema.validateAsync(product);

    await ProductService.create(product);
    return reply.code(201).send({ message: 'created' });
  } catch (err) {
    return reply.send(err);
  }
};

export const update = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    const product: IProduct = {
      ...(request.body as IProduct),
      id,
    };

    await productSchema.validateAsync(product);

    await ProductService.update(product);
    return reply.code(200).send({ message: 'updated' });
  } catch (err) {
    return reply.send(err);
  }
};

export const remove = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    await ProductService.remove(+id);
    return reply.code(200).send({ message: 'removed' });
  } catch (err) {
    return reply.send(err);
  }
};
