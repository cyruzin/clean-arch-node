import { IProduct } from '../domain/products';
import { ProductService } from './products';
import { ProductRepository } from '../repositories/products';

describe('getAll success', () => {
  test('should return all products', async () => {
    const mockProducts: IProduct[] = [
      {
        id: 1,
        name: 'PlayStation 5',
        type: 'Electronics',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'XBOX Series X',
        type: 'Electronics',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    ProductRepository.getAll = jest.fn(() => Promise.resolve(mockProducts));

    const res = await ProductService.getAll();

    expect(res[0].name).toBe('PlayStation 5');

    expect(ProductRepository.getAll).toBeCalledTimes(1);
  });
});

describe('getAll failure', () => {
  test('should fail to return all products', async () => {
    ProductRepository.getAll = jest.fn(() => {
      throw new Error('failed to retrieve the products');
    });

    try {
      await ProductService.getAll();
    } catch (err: any) {
      expect(err.message).toEqual('failed to retrieve the products');
    }
  });
});
