import { Product, ProductRepository } from 'domain/products';
import { postgres } from '../config/database';

async function getAll(): Promise<Product[]> {
  try {
    const result = await postgres.query(
      'SELECT id, name, type, created_at, updated_at FROM products',
    );
    return result.rows;
  } catch (err) {
    throw err;
  }
}

async function getByID(id: number): Promise<Product> {
  try {
    const result = await postgres.query(
      'SELECT id, name, type, created_at, updated_at FROM products WHERE id = $1',
      [id],
    );
    return result.rows[0] as Product;
  } catch (err) {
    throw err;
  }
}

async function create(product: Product): Promise<void> {
  try {
    const now = new Date();

    postgres.query(
      `INSERT INTO products (name, type, created_at, updated_at) 
       VALUES($1, $2, $3, $4)`,
      [product.name, product.type, now, now],
    );
  } catch (err) {
    throw err;
  }
}

async function update(product: Product): Promise<void> {
  try {
    const now = new Date();

    postgres.query(
      `UPDATE products
       SET
        name=$1,
        type=$2,
        updated_at=$3
       WHERE id = $4
      `,
      [product.name, product.type, now, product.id],
    );
  } catch (err) {
    throw err;
  }
}

async function remove(id: number): Promise<void> {
  try {
    postgres.query('DELETE FROM products WHERE id = $1', [id]);
  } catch (err) {
    throw err;
  }
}

export const productRepository: ProductRepository = {
  getAll,
  getByID,
  create,
  update,
  remove,
};
