const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server');
const expect  = require('chai').expect;

chai.use(chaiHttp);

describe('Server.js', () => {

  describe('/GET "/"', () => {
    it('it should GET the homepage view', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('object');
            done();
          });
    });
  });

});
