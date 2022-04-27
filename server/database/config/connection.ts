import { Pool } from 'pg';
import * as env2 from 'env2';

const {
  NODE_ENV, DB_URL_DEV, DB_URL_TEST, DATABASE_URL,
} = process.env;

let dbUrl: string;

if (NODE_ENV === 'development') {
  dbUrl = DB_URL_DEV;
} else if (NODE_ENV === 'test') {
  dbUrl = DB_URL_TEST;
} else if (NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
} else {
  throw new Error('DATABSE_URL is not exist');
}

const connection = new Pool({
  connectionString: dbUrl,
  ssl: NODE_ENV === 'production' ? true : { rejectUnauthorized: false },
});

export default connection;
