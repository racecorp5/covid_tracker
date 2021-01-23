const app = require('./index');
const request = require('supertest');


test('Upload Info Endpoint', async(done) => {
  const { body } = await request(app).get('/v1/covidData');
  expect(body.length).toBe(56);
  done();
});
