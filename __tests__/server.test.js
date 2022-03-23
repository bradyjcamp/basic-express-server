'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server);

describe('Testing Server', () => {

  it('Respond with a status 404 to a GET request with no route', async () => {
    const response = await request.get('/does-not-exist');
    expect(response.status).toEqual(404);
  });

  it('Respond with a status 404 on bad GET request method', async () => {
    const response = await request.get('/person'); 
    expect(response.status).toEqual(404);
  });

  it('Respond with a status 500 if no name in query string', async () => {
    const response = await request.get('/person'); 
    expect(response.status).toEqual(500);
  });

  it('Respond with a status 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=somename'); 
    expect(response.status).toEqual(200);
  });

  it('Respond to a GET request given a name in the query string, the output object is correct', async () => {
    const response = await request.get('/person?name=somename'); 
    expect(response.body).toEqual('obj');
  });

});