/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');
const connection = require('../src/database/config/connection');
const buildDB = require('../src/database/config/build');

beforeAll(() => {
  buildDB('build');
  buildDB('test');
});
test('GET /user/getData', (done) => request(app)
  .get('/user/getData')
  .expect(200)
  .expect('Content-Type', /json/)
  .end((err, data) => {
    if (err) return done(err);
    // export()
    done();
  }));

afterAll(() => connection.end());
