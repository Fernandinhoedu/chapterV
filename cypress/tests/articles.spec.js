/// <reference types="cypress"  />

import articles from '../support/pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    // Arrange
    cy.login()

    cy.visit('/')
  })
  it('Cadastro de novo artigo com sucesso', () => {
    // acesso ao form
    articles.acessarFormulario()

    // preencher formulario
    articles.preencherFormulario()

    // submeter formulario
    articles.submeterFormulario()

    // verificar se o artigo foi criado com sucesso
    articles.verificarSeOArtigoFoiCriado()
  })
})
