class SignupPage {


    
    go() {
        // AJUSTA TAMANHA DA PAGINA
        // cy.viewport(1400, 800)

        // ABRE PAGINA A SER TESTADA
        cy.visit('/')

        // CLICA NO BOTÃO CADASTRE-SE PARA FAZER ENTREGAS
        cy.get('a[href="/deliver"]').click()

        // VALIDA SE BOTÃO DIRECIONOU PARA A PAGINA CORRETA
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(massa) {
        // PREENCHE DADOS NO CAMPOS DO FORMULÁRIO
        cy.get('input[name="name"]').type(massa.nome)
        cy.get('input[name="cpf"]').type(massa.cpf)
        cy.get('input[name="email"]').type(massa.email)
        cy.get('input[name="whatsapp"]').type(massa.whatsapp)
        cy.get('input[name="postalcode"]').type(massa.endereco.cep)

        // CLICK NO BOTÃO BUSCAR CEP
        cy.get('input[type="button"][value="Buscar CEP"]').click()
    }

    fillMissingFields(massa) {
        // PREENCHE CAMPOS FALNTANTES NO FOMULÁRIO
        cy.get('input[name="address-number"]').type(massa.endereco.numero)
        cy.get('input[name="address-details"]').type(massa.endereco.complemento)

        // VALIDA SE INFORMAÇÕES PREENCIDAS COM O CPF ESTÃO CORRETAS CONFORME MASSA DE DADOS
        cy.get('input[name="address"]').should('have.value', massa.endereco.rua)
        cy.get('input[name="district"]').should('have.value', massa.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', massa.endereco.cidade_uf)
    }

    submit(massa) {
        // UTILIZANDO CONTAINS PARA BUSCAR UM COMPONENTE DE UMA LISTA
        cy.contains('.delivery-method li', massa.metodo_entrega).click()

        // ^= COMEÇA COM 
        // $= TERMINA COM
        // *= CONTAIS
        // REALIZA UPLOAD DA FOTO
        cy.get('input[accept^="image"]').attachFile('/images/pageDeliver/' + massa.cnh)

        // CLICK NO BOTÃO CADASTE-SE PARA FAZER ENTREGAS
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage) {
        // VALIDA MENSAGEM DO MODAL DE SUCESSO
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)
    }

    alertMessageErrorShoudBe(contains, expectedMessage) {
        // VALIDA ERRO NO PREENCHIMENTO DO CEP
        cy.contains('.alert-error', contains).should('have.text', expectedMessage)
    }
}

export default new SignupPage;

