'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Testing Validator', () => {
  it('Respond with a status 500 if no name in query string', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });

  it('Respond with a status 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=Brady');
    expect(response.status).toEqual(200);
  });

  it('Respond to a GET request given a name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=Brady');
    expect(response.body.name).toEqual('Brady');
  });
});
