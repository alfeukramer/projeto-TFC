import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import allMatches from './mocks';
import { Model } from 'sequelize/types';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST na rota /login', () => {

  it('resposta ao não informar o email - resposta STATUS 400', async () => {
    const httpResponse = await chai
    .request(app)
    .post('/login')
    .send({ password: 'test'})   
    expect(httpResponse.status).to.equal(400)
    expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled'})
  });

  it('resposta ao não informar o password - resposta STATUS 400', async () => {
    const httpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: 'test'})   
    expect(httpResponse.status).to.equal(400)
    expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled'})
  });

  it('resposta ao não informar o password - resposta STATUS 400', async () => {
    sinon.stub(Model, 'findAll').resolves();
    const httpResponse = await chai
    .request(app)
    .get('/matches')
    expect(httpResponse.status).to.equal(200)
  });
});


  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });