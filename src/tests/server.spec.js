(function () {

  'use strict';

  const sinon = require('sinon');
  const chai = require('chai');
  const chaiHttp = require('chai-http');
  const server = require('../../server');
  const expect  = require('chai').expect;

  chai.use(chaiHttp);

  describe('Server.js', () => {

    describe('/GET Index Route', () => {

      let request;

      beforeEach(() => {
        request = chai.request(server).get('/');
      });

      it('Should GET the homepage view', (done) => {
        request.end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          done();
        });
      });

      it('Should return a rendered response', () => {
        const req = {};
        const res = { render: sinon.spy() };

        request.end((err, res) => {
          expect(res.render.calledOnce).to.be.true;
        });
      });

    });

  });

}());
