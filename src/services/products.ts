import { IProduct, IProductService } from '../domain/products';
import { ProductRepository } from '../repositories/products';

async function getAll(): Promise<IProduct[]> {
  try {
    return await ProductRepository.getAll();
  } catch (err) {
    throw err;
  }
}

async function getByID(id: number): Promise<IProduct> {
  try {
    return await ProductRepository.getByID(id);
  } catch (err) {
    throw err;
  }
}

async function create(product: IProduct): Promise<void> {
  try {
    await ProductRepository.create(product);
  } catch (err) {
    throw err;
  }
}

async function update(product: IProduct): Promise<void> {
  try {
    await ProductRepository.getByID(Number(product?.id));
    await ProductRepository.update(product);
  } catch (err) {
    throw err;
  }
}

async function remove(id: number): Promise<void> {
  try {
    await ProductRepository.getByID(id);
    await ProductRepository.remove(id);
  } catch (err) {
    throw err;
  }
}

export const ProductService: IProductService = {
  getAll,
  getByID,
  create,
  update,
  remove,
};
