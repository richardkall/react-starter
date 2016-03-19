import nock from 'nock';
import request from './request';

describe('request', () => {
  afterEach(() => nock.cleanAll());

  it('catches errors', (done) => {
    nock('http://localhost:3000/api')
      .get('/todos')
      .reply(500);

    request('/todos')
      .then((json) => {
        expect(json.error.status).toEqual(500);
        done();
      });
  });

  it('returns JSON data', (done) => {
    nock('http://localhost:3000/api')
      .get('/todos')
      .reply(200, ['item']);

    request('/todos')
      .then((json) => {
        expect(json.data).toEqual(['item']);
        done();
      });
  });
});
