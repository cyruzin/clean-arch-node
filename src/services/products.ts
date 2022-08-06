import { Product, ProductService } from '../domain/products';
import { productRepository } from '../repositories/products';

async function getAll(): Promise<Product[]> {
  try {
    return await productRepository.getAll();
  } catch (err) {
    throw err;
  }
}

async function getByID(id: number): Promise<Product> {
  try {
    return await productRepository.getByID(id);
  } catch (err) {
    throw err;
  }
}

async function create(product: Product): Promise<void> {
  try {
    await productRepository.create(product);
  } catch (err) {
    throw err;
  }
}

async function update(product: Product): Promise<void> {
  try {
    const productExists = await productRepository.getByID(Number(product?.id));

    if (!productExists?.id) throw new Error('invalid id');

    await productRepository.update(product);
  } catch (err) {
    throw err;
  }
}

async function remove(id: number): Promise<void> {
  try {
    const product = await productRepository.getByID(id);

    if (!product?.id) throw new Error('invalid id');

    await productRepository.remove(id);
  } catch (err) {
    throw err;
  }
}

export const productService: ProductService = {
  getAll,
  getByID,
  create,
  update,
  remove,
};
