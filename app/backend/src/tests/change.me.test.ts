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

  it('quando requisição é feita com sucesso - resposta STATUS 200', async () => {
    const httpResponse = await chai
    .request(app)
    .post('/login')
    .send({ email: 'user@user.com', password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO' })   
    expect(httpResponse.status).to.equal(200)
  });
});

// forçando push
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