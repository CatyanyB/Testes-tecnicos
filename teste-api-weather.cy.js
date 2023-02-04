describe('API de clima de São Paulo', () => {
  const url = 'api.openweathermap.org/data/2.5/weather?lat=23.36&lon=-46.84&appid=76144beb701f4d3729130042361bd47a&units=metric';

  it('Deve retornar 200 OK', () => {
    cy.request(url).its('status').should('equal', 200);
  });

  it('Deve retornar objeto com propriedades esperadas', () => {
    cy.request(url).its('body').should((body) => {
      expect(body).to.have.all.keys(
        'coord',
        'weather',
        'base',
        'main',
        'visibility',
        'wind',
        'clouds',
        'dt',
        'sys',
        'timezone',
        'id',
        'name',
        'cod'
      );

      expect(body.coord).to.be.an('object');
      expect(body.weather).to.be.an('array');
      expect(body.base).to.be.a('string');
      expect(body.main).to.be.an('object');
      expect(body.visibility).to.be.a('number');
      expect(body.wind).to.be.an('object');
      expect(body.clouds).to.be.an('object');
      expect(body.dt).to.be.a('number');
      expect(body.sys).to.be.an('object');
      expect(body.timezone).to.be.a('number');
      expect(body.id).to.be.a('number');
      expect(body.name).to.be.a('string');
      expect(body.cod).to.be.a('number');
    });
  });

  describe('Propriedades de temperatura', () => {
    it('Deve conter propriedades de temperatura', () => {
      cy.request(url).its('body.main').should((main) => {
        expect(main).to.have.all.keys(
          'temp',
          'feels_like',
          'temp_min',
          'temp_max'
        );
      });
    });

    it('Deve retornar temperaturas em graus Celsius', () => {
      cy.request(url).its('body.main').should((main) => {
        expect(main.temp).to.be.below(281.63);
        expect(main.feels_like).to.be.below(516.15);
        expect(main.temp_min).to.be.below(293.15);
        expect(main.temp_max).to.be.below(303.15);
      });
    });
  });
});
