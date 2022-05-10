/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import supertest from 'supertest';
import dotenv from 'dotenv';
import {
  afterAll, beforeAll, describe, test,
} from '@jest/globals';
import app from '../src/app';
import { connection, buildDb } from '../src/database';

dotenv.config();

beforeAll(() => {
  return buildDb();
});

describe('Check route "api/v1/projects" ', () => {
  test('Should return 401 when user Unauthorized', (done) => {
    supertest(app)
      .get('/api/v1/projects')
      .expect(401)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  test('Should return 200 when the user Authorized', (done) => {
    supertest(app)
      .get('/api/v1/projects')
      .set('cookie', `token=${process.env.TOKEN}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

afterAll(() => {
  return connection.end();
});
