export interface Product {
  id?: number;
  name: string;
  type: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProductRepository {
  getAll: () => Promise<Product[]>;
  getByID: (id: number) => Promise<Product>;
  create: (product: Product) => Promise<void>;
  update: (product: Product) => Promise<void>;
  remove: (id: number) => Promise<void>;
}

export interface ProductService {
  getAll: () => Promise<Product[]>;
  getByID: (id: number) => Promise<Product>;
  create: (product: Product) => Promise<void>;
  update: (product: Product) => Promise<void>;
  remove: (id: number) => Promise<void>;
}
