import request from 'supertest'
import 'babel-polyfill'
describe('loading express', function () {
    var server;
    beforeEach(function () {
        server = require('./index');
        console.log
    });
    afterEach(function () {
        server.close();
    });
    it('responds to /', function testSlash(done) {
        request(server)
            .get('/')
            .expect(200, done);
    });
    it('responds to popular', function testPath(done) {
        request(server)
            .get('/popular')
            .expect(200, done);
    });
    it('responds to search', function testPath(done) {
        request(server)
            .get('/popular')
            .expect(200, done);
    });
    it('responds to movie', function testPath(done) {
        request(server)
            .get('/movie/100')
            .expect(200, done);
    });
});