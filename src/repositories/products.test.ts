import { Pool } from 'pg';
import { ProductRepository } from './products';

jest.mock('pg', () => {
  const mPool = {
    connect: function () {
      return { query: jest.fn() };
    },
    query: jest.fn(),
    end: jest.fn(),
    on: jest.fn(),
  };
  return { Pool: jest.fn(() => mPool) };
});

let pool: any;
beforeEach(() => {
  pool = new Pool();
});
afterEach(() => {
  jest.clearAllMocks();
});

describe('getAll success', () => {
  test('should return all products', async () => {
    pool.query.mockResolvedValue({ rows: [] });
    await ProductRepository.getAll();
    expect(pool.query).toBeCalledTimes(1);
  });
});
