const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    it('responds with hello world message in JSON format', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Hello, Educacionit!' });
    });
});
