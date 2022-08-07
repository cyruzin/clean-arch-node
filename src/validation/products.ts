import Joi from 'joi';
import { IProduct } from 'domain/products';

export const productSchema = Joi.object<IProduct>({
  id: Joi.number(),
  name: Joi.string().min(3).max(30).required(),
  type: Joi.string().min(3).max(30).required(),
  updated_at: Joi.date(),
});
