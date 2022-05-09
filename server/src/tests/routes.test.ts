// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import { buildDb } from '../database';
import { projectsRoute } from '../routes';

test('get projects', (done) => {
  supertest(projectsRoute)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      return done();
    });
});
