import supertest from 'supertest';
import dotenv from 'dotenv';
import {
  afterAll, beforeEach, describe, test,
} from '@jest/globals';
import app from '../src/app';
import { connection, buildDb } from '../src/database';

dotenv.config();

beforeEach(() => {
  return buildDb();
});

describe('Check route api/v1/project/:projectid/section/:id/tasks => get tasks to specific section', () => {
  test('Should return 200 when the user Authorized', (done) => {
    supertest(app)
      .get('/api/v1/project/2/section/2/tasks')
      .set('cookie', `token=${process.env.TOKEN}`)
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  test('Should return 401 when the user Unauthorized', (done) => {
    supertest(app)
      .get('/api/v1/project/1/section/2/tasks')
      .set('cookie', `token=${process.env.TOKEN}`)
      .expect(401)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll(() => {
  return connection.end();
});
