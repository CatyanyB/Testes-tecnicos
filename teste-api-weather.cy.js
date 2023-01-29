/// <reference types="Cypress" />

describe('Retornar clima cidade de SP', function () {
    it('Retornar clima da cidade de SP', () => {
    cy.request('api.openweathermap.org/data/2.5/weather?lat=23.36&lon=-46.84&appid=76144beb701f4d3729130042361bd47a&units=metric').should((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.be.an('object')
            expect(response).to.have.property('headers')
            expect(response.headers).to.have.property('content-type')
            expect(response).to.have.property('duration')
            expect(response.body).to.have.property('coord').and.be.an('object')
            expect(response.body).to.have.property('weather').and.be.an('array')
            expect(response.body).to.have.property('base').and.be.an('string')
            expect(response.body).to.have.property('main').and.be.an('object')
            expect(response.body).to.have.property('visibility').and.be.an('number')
            expect(response.body).to.have.property('wind').and.be.an('object')
            //expect(response.body).to.have.property('rain').and.be.an('object') Não contem no response, mesmo o site dizendo que deveria retornar.
            expect(response.body).to.have.property('clouds').and.be.an('object')
            expect(response.body).to.have.property('dt').and.be.an('number')
            expect(response.body).to.have.property('sys').and.be.an('object')
            expect(response.body).to.have.property('timezone').and.be.an('number')
            expect(response.body).to.have.property('id').and.be.an('number')
            expect(response.body).to.have.property('name').and.be.an('string')
            expect(response.body).to.have.property('cod').and.be.an('number')
    });
    });
    });

describe('Clima deve retornar em graus Celsius', function () {
    it('Deve conter todas propriedades de temperatura', () => {
    cy.request('api.openweathermap.org/data/2.5/weather?lat=23.36&lon=-46.84&appid=76144beb701f4d3729130042361bd47a&units=metric').should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.property('main').have.property('temp')
            expect(response.body).to.property('main').have.property('feels_like')
            expect(response.body).to.property('main').have.property('temp_min')
            expect(response.body).to.property('main').have.property('temp_max')
    });
    });

     //Usei a temperatura em Kelvin como base para os testes, se estavam mesmo em Celsius
    it('Deve retornar todas propriedades de temperatura em graus Celsius', () => {
    cy.request('api.openweathermap.org/data/2.5/weather?lat=23.36&lon=-46.84&appid=76144beb701f4d3729130042361bd47a&units=metric').should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.property('main').to.property('temp').be.below(281.63)
        expect(response.body).to.property('main').to.property('feels_like').be.below(516.15)
        expect(response.body).to.property('main').to.property('temp_min').be.below(293.15)
        expect(response.body).to.property('main').to.property('temp_max').be.below(303.15)
    });
    });
    });



