import { IProduct } from 'domain/products';
import { FastifyRequest, FastifyReply } from 'fastify';
import { productSchema } from '../../validation/products';
import { ProductService } from '../../services/products';
import ValidationError from '../../domain/errors/validation';
import { EHTTP } from '../../enums/http-status-code';

export const getAll = async (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    const res = await ProductService.getAll();
    return reply.code(EHTTP.StatusOK).send(res);
  } catch (err) {
    return reply.send(err);
  }
};

export const getByID = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    const res = await ProductService.getByID(+id);
    return reply.code(EHTTP.StatusOK).send(res);
  } catch (err) {
    return reply.send(err);
  }
};

export const create = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const product = request.body as IProduct;

    const validation = productSchema.validate(product);
    if (validation.error?.message) {
      throw new ValidationError(validation.error?.message);
    }

    await ProductService.create(product);
    return reply.code(EHTTP.StatusCreated).send({ message: 'created' });
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

    const validation = productSchema.validate(product);
    if (validation.error?.message) {
      throw new ValidationError(validation.error?.message);
    }

    await ProductService.update(product);
    return reply.code(EHTTP.StatusOK).send({ message: 'updated' });
  } catch (err) {
    return reply.send(err);
  }
};

export const remove = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as any;
    if (!id) throw new Error('id required');

    await ProductService.remove(+id);
    return reply.code(EHTTP.StatusOK).send({ message: 'removed' });
  } catch (err) {
    return reply.send(err);
  }
};
