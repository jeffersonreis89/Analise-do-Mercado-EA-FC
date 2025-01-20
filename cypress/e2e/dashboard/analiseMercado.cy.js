describe('Analise de mercado', () => {

  it('Analise de mercado', () => {
    cy.AnaliseMercadoGeral();
  });

  it('Analise de mercado 89', () => {
    cy.AnaliseMercadoRating89();
  });

  it('Analise de mercado 88', () => {
    cy.AnaliseMercadoRating88();
  });

  it('Analise de mercado 87', () => {
    cy.AnaliseMercadoRating87();
  });

  it('Analise de mercado 86', () => {
    cy.AnaliseMercadoRating86();
  });

  it('Analise de mercado 85', () => {
    cy.AnaliseMercadoRating85();
  });

  it('Analise de mercado 84', () => {
    cy.AnaliseMercadoRating84();
  });

  it('Analise jogador Mais vendido TOP 1', () => {
    cy.Top1MaisVendido();
  });

  it('Analise jogador Mais vendido TOP 2', () => {
    cy.Top2MaisVendido();
  });

  it('Analise jogador Mais vendido TOP 3', () => {
    cy.Top3MaisVendido();
  });

});