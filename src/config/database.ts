import { Pool } from 'pg';

export const postgres = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.POSTGRES_PORT),
  max: Number(process.env.POSTGRES_MAX),
  idleTimeoutMillis: Number(process.env.POSTGRES_IDLE_TIMEOUT),
  connectionTimeoutMillis: Number(process.env.POSTGRES_CONNECTION_TIMEOUT),
});
