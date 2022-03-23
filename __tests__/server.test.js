'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server);

describe('Testing Server', () => {

  it('Respond with a status 404 to a GET request with no route', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(404);
  });

  it('Respond with a status 404 on bad GET request method', async () => {
    const response = await request.get('/'); 
    expect(response.status).toEqual(404);
  });
});