import { Pool } from 'pg';

export const postgres = new Pool({
  host: 'localhost',
  user: 'clean-arch',
  password: 'clean-arch',
  database: 'clean-arch',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
