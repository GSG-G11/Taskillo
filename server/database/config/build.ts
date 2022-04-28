import { readFileSync } from 'fs';
import { join } from 'path';
import connection from './connection';

const buildDb = async () => {
  const buildFile = readFileSync(join(__dirname, 'build.sql')).toString();
  const fakeDataFile = readFileSync(join(__dirname, 'fakedata.sql')).toString();
  try {
    await connection.query(buildFile + fakeDataFile);
  } catch (err) {
    console.log(err);
  }
};

export default buildDb;
