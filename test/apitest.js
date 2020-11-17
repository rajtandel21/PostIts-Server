// declare supertest
const request = require('supertest')
const expect = require("chai").expect
//Import server
const server = require('../createServer.js')


// Testing
// get all users posts
describe('GET /', function () {
    it('responds to get / with status 200', done => {
        request(server)
            .get('/')
            .expect(200, done);
    });
},

describe('GET /posts', function () {
        it('respond with json containing a list of all posts by users', function (done) {
            request(server)
                .get('/posts')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    }))

describe('Post /posts', function () {
    let data 
    it('should enter a new post into the external file with a status of 201', function (done) {
        request(server)
        .post('/posts')
        .send(data)
        .set ('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err) => {
            if (err) return done(err);
            done();
        })
    })
});

// ERROR TESTING 
// describe ('Post /posts/:id', function () {
//     it ('respond with 400 as user has not been created', function (done) {
//         request(server)
//         .post('/posts')
//         .send(data)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(400)
//     })
// })

describe('Post /posts/:id', function () { 
    let data = 'postdata.json'
    it('should enter a comment under a user post with a status of 201', function (done) {
        request(server)
        .post('/posts/:id')
        .send(data)
        .set ('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(201)
        .end((err) => {
            if (err) return done(err);
            done();
        })
    })
});