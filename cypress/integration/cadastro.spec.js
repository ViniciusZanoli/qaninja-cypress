import SignupPage from '../pages/SignupPage'
import massaDinamica from '../factories/MassaDinamica'


describe('Cadastro', () => {

    // beforeEach(function () {
    //     cy.fixture('massa').then((iten) => {
    //         this.massa = iten
    //     })
    // })

    it('Usuário deve se tornar um entregador', function () {
        var md = massaDinamica.js();

        SignupPage.go()
        SignupPage.fillForm(md)
        SignupPage.fillMissingFields(md)
        SignupPage.submit(md)
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShouldBe(expectedMessage)

    });

    it('CEP Invalido', function () {
        var md = massaDinamica.js()
        md.endereco.cep = '123456'

        SignupPage.go()
        SignupPage.fillForm(md)
        const expectedMessage = 'Informe um CEP válido'
        SignupPage.alertMessageErrorShoudBe('CEP', expectedMessage)

    });
})

    // before(function () {
    //     cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function () {
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA casos de testes')
    // })

    // after(function () {
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS de cada os casos de testes')
    // })

    // afterEach(function () {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    // })