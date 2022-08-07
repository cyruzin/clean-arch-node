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

describe('getByID success', () => {
  test('should return a product by id', async () => {
    const mockProduct: IProduct = {
      id: 1,
      name: 'PlayStation 5',
      type: 'Electronics',
      created_at: new Date(),
      updated_at: new Date(),
    };

    ProductRepository.getByID = jest.fn(() => Promise.resolve(mockProduct));

    const res = await ProductService.getByID(1);

    expect(res.name).toBe('PlayStation 5');

    expect(ProductRepository.getByID).toBeCalledTimes(1);
  });
});

describe('getByID failure', () => {
  test('should fail to return a product by id', async () => {
    ProductRepository.getByID = jest.fn(() => {
      throw new Error('failed to retrieve the product');
    });

    try {
      await ProductService.getByID(1);
    } catch (err: any) {
      expect(err.message).toEqual('failed to retrieve the product');
    }
  });
});

describe('create success', () => {
  test('should create a new product', async () => {
    const mockProduct: IProduct = {
      name: 'PlayStation 5',
      type: 'Electronics',
    };

    ProductRepository.create = jest.fn(() => Promise.resolve());

    await ProductService.create(mockProduct);

    expect(ProductRepository.create).toBeCalledTimes(1);
  });
});

describe('create failure', () => {
  test('should fail to create a new product', async () => {
    const mockProduct: IProduct = {
      name: 'PlayStation 5',
      type: 'Electronics',
    };

    ProductRepository.create = jest.fn(() => {
      throw new Error('failed to create the product');
    });

    try {
      await ProductService.create(mockProduct);
    } catch (err: any) {
      expect(err.message).toEqual('failed to create the product');
    }
  });
});

describe('update success', () => {
  test('should update a product', async () => {
    const mockProduct: IProduct = {
      id: 1,
      name: 'PlayStation 5',
      type: 'Electronics',
      created_at: new Date(),
      updated_at: new Date(),
    };

    ProductRepository.getByID = jest.fn(() => Promise.resolve(mockProduct));
    ProductRepository.update = jest.fn(() => Promise.resolve());

    await ProductService.update(mockProduct);

    expect(ProductRepository.update).toBeCalledTimes(1);
  });
});

describe('update failure', () => {
  test('should fail to update a product', async () => {
    const mockProduct: IProduct = {
      name: 'PlayStation 5',
      type: 'Electronics',
    };

    ProductRepository.update = jest.fn(() => {
      throw new Error('failed to update the product');
    });

    try {
      await ProductService.update(mockProduct);
    } catch (err: any) {
      expect(err.message).toEqual('failed to update the product');
    }
  });
});

describe('delete success', () => {
  test('should delete a product', async () => {
    const mockProduct: IProduct = {
      id: 1,
      name: 'PlayStation 5',
      type: 'Electronics',
      created_at: new Date(),
      updated_at: new Date(),
    };

    ProductRepository.getByID = jest.fn(() => Promise.resolve(mockProduct));
    ProductRepository.remove = jest.fn(() => Promise.resolve());

    await ProductService.remove(1);

    expect(ProductRepository.remove).toBeCalledTimes(1);
  });
});

describe('remove failure', () => {
  test('should fail to remove a product', async () => {
    ProductRepository.remove = jest.fn(() => {
      throw new Error('failed to remove the product');
    });

    try {
      await ProductService.remove(1);
    } catch (err: any) {
      expect(err.message).toEqual('failed to remove the product');
    }
  });
});
