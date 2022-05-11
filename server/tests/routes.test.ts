import supertest from 'supertest';
import dotenv from 'dotenv';
import {
  afterAll, beforeEach, describe, test, expect,
} from '@jest/globals';
import app from '../src/app';
import { connection, buildDb } from '../src/database';

dotenv.config();

beforeEach(() => {
  return buildDb();
});

describe('Check route "GET api/v1/projects" ', () => {
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
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Success');
        return done();
      });
  });
});

describe('Check route "GET api/v1/projects" ', () => {
  test('Should return 401 when user Unauthorized', (done) => {
    supertest(app)
      .get('/api/v1/project/1/sections')
      .expect(401)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  test('Should return 200 when the user Authorized', (done) => {
    supertest(app)
      .get('/api/v1/project/1/sections')
      .set('cookie', `token=${process.env.TOKEN}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Project sections retrieved successfully');
        return done();
      });
  });
});

describe('Check route "GET api/v1/project/:projectid/tasks" ', () => {
  test('Should return 401 when user Unauthorized', (done) => {
    supertest(app)
      .get('/api/v1/project/31/tasks')
      .expect(401)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  test('Should return 200 when the user Authorized', (done) => {
    supertest(app)
      .get('/api/v1/project/31/tasks')
      .set('cookie', `token=${process.env.TOKEN}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('Success');
        return done();
      });
  });
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