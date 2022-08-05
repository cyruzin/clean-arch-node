import { Product, ProductService } from 'domain/products';
import { productRepository } from 'repositories/products';

async function getAll(): Promise<Product[]> {
  try {
    return await productRepository.getAll();
  } catch (err: any) {
    throw err;
  }
}

async function getByID(id: number): Promise<Product> {
  try {
    return await productRepository.getByID(id);
  } catch (err: any) {
    throw err;
  }
}

async function create(product: Product): Promise<void> {}

async function update(product: Product): Promise<void> {}

async function remove(id: string): Promise<void> {}

export const productService: ProductService = {
  getAll,
  getByID,
  create,
  update,
  remove,
};
