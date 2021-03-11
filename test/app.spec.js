const app = require('../src/app');

describe('app', () => {
    it('GET / responds with 200 containing "Hello, restaurant finder"', () => {
        return supertest(app)
            .get('/')
            .expect(200, "Hello, restaurant finder!")
    })
})