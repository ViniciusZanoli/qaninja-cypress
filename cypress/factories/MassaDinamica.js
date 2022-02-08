var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    js: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(), // format true = cria um cpf com mascara
            // cpf: '38746281835', // format true = cria um cpf com mascara
            email: faker.internet.email(firstName.toLowerCase()),
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'APT 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}