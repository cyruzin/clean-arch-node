import { Client } from 'pg';

export const postgres = new Client({
  host: 'localhost',
  user: 'clean-arch',
  password: 'clean-arch',
  database: 'clean-arch',
  port: 5432,
});
