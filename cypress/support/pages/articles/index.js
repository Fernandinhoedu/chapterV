const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {
  // acesso ao form
  acessarFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // preencher formulario
  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Criação de execução de teste E2E')
    cy.get(el.inputBody).type('Conceitos de testes e2e')
    cy.get(el.inputTagField).type('cypress')
  }

  // submeter formulario
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  // verificar se o artigo foi criado com sucesso
  verificarSeOArtigoFoiCriado () {
    cy.contains(articleName).should('be.visible')
    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
