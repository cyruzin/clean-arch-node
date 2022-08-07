export interface IProduct {
  id?: number;
  name: string;
  type: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IProductRepository {
  getAll: () => Promise<IProduct[]>;
  getByID: (id: number) => Promise<IProduct>;
  create: (product: IProduct) => Promise<void>;
  update: (product: IProduct) => Promise<void>;
  remove: (id: number) => Promise<void>;
}

export interface IProductService {
  getAll: () => Promise<IProduct[]>;
  getByID: (id: number) => Promise<IProduct>;
  create: (product: IProduct) => Promise<void>;
  update: (product: IProduct) => Promise<void>;
  remove: (id: number) => Promise<void>;
}
