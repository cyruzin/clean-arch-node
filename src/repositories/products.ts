import { Product, ProductRepository } from 'domain/products';
import { postgres } from '../config/database';

async function getAll(): Promise<Product[]> {
  try {
    const result = await postgres.query('SELECT * FROM products');
    return result.rows;
  } catch (err) {
    throw err;
  }
}

async function getByID(id: number): Promise<Product> {
  try {
    const result = await postgres.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0] as Product;
  } catch (err) {
    throw err;
  }
}

async function create(product: Product): Promise<void> {}

async function update(product: Product): Promise<void> {}

async function remove(id: string): Promise<void> {}

export const productRepository: ProductRepository = {
  getAll,
  getByID,
  create,
  update,
  remove,
};
