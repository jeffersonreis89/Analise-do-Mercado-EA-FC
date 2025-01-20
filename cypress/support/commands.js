import { environment } from "./enviroment";
import locatorEaFC from "./locators";
import { stringify } from 'csv-stringify/sync'; // Dependência para manipular CSV

const webhookUrl = environment.webhookUrl;
const url = environment.url;

function getFormattedDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

function appendToCSV(data) {
  const filename = 'cypress/fixtures/dados-Mercado.csv';
  const csvContent = stringify([data], { header: false });
  cy.writeFile(filename, csvContent, { flag: 'a+' });
}

Cypress.Commands.add('AnaliseMercadoGeral', () => {
  const formattedDateTime = getFormattedDateTime();

  cy.visit(`${url}`, { failOnStatusCode: false });
  cy.get(locatorEaFC.telaPrincipal.menu).click({ force: true });
  cy.get(locatorEaFC.telaPrincipal.optionsMarketWatch).click();
  cy.contains('Overall Live Market Index');

  cy.get(locatorEaFC.marketWatch.percentualMercado).then(($elemento) => {
    const textoCapturado = $elemento.text();
    cy.log(`Texto capturado: ${textoCapturado}`);

    const marketData = [formattedDateTime, 'Mercado Geral', textoCapturado];
    appendToCSV(marketData);

    cy.request({
      method: 'POST',
      url: webhookUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        content: `**Overrall Completo 🎉😊** 
            **Percentual Mercado:** ${textoCapturado}
            **Valores atualizados do dia ** ${formattedDateTime}`,
        username: locatorEaFC.username,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});

Cypress.Commands.add('AnaliseMercadoRating89', () => {
    const formattedDateTime = getFormattedDateTime();
  
    cy.visit(`${url}market/89rated/console/live`, { failOnStatusCode: false });
    cy.contains('89 Rated Live Market Index');
  
    cy.get(locatorEaFC.marketWatch.percentualMercado).then(($elemento) => {
      const textoCapturado = $elemento.text();
      cy.log(`Texto capturado: ${textoCapturado}`);
  
      const marketData = [formattedDateTime, 'Mercado ovr 89', textoCapturado];
      appendToCSV(marketData);
  
      cy.request({
        method: 'POST',
        url: webhookUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
            content: `**Overrall 89 🎉🤑** 
            **Percentual Mercado:** ${textoCapturado}
            **Valores atualizados do dia ** ${formattedDateTime}
            `,          
            username: locatorEaFC.username,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });

Cypress.Commands.add('AnaliseMercadoRating88', () => {
  const formattedDateTime = getFormattedDateTime();

  cy.visit(`${url}market/88rated/console/live`, { failOnStatusCode: false });
  cy.contains('88 Rated Live Market Index');

  cy.get(locatorEaFC.marketWatch.percentualMercado).then(($elemento) => {
    const textoCapturado = $elemento.text();
    cy.log(`Texto capturado: ${textoCapturado}`);

    const marketData = [formattedDateTime, 'Mercado ovr 88', textoCapturado];
    appendToCSV(marketData);

    cy.request({
      method: 'POST',
      url: webhookUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        content: `**Overrall 88 🎉🤩** 
            **Percentual Mercado:** ${textoCapturado}
            **Valores atualizados do dia ** ${formattedDateTime}
            `,        
            username: locatorEaFC.username,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});

Cypress.Commands.add('AnaliseMercadoRating87', () => {
    const formattedDateTime = getFormattedDateTime();
  
    cy.visit(`${url}market/87rated/console/live`, { failOnStatusCode: false });
    cy.contains('87 Rated Live Market Index');
  
    cy.get(locatorEaFC.marketWatch.percentualMercado).then(($elemento) => {
      const textoCapturado = $elemento.text();
      cy.log(`Texto capturado: ${textoCapturado}`);
  
      const marketData = [formattedDateTime, 'Mercado ovr 87', textoCapturado];
      appendToCSV(marketData);
  
      cy.request({
        method: 'POST',
        url: webhookUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
            content: `**Overrall 87 🎉👌** 
            **Percentual Mercado:** ${textoCapturado}
            **Valores atualizados do dia ** ${formattedDateTime}
            `,          
            username: locatorEaFC.username,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });

Cypress.Commands.add('AnaliseMercadoRating86', () => {
  const formattedDateTime = getFormattedDateTime();

  cy.visit(`${url}market/86rated/console/live`, { failOnStatusCode: false });
  cy.contains('86 Rated Live Market Index');

  cy.get(locatorEaFC.marketWatch.percentualMercado).then(($elemento) => {
    const textoCapturado = $elemento.text();
    cy.log(`Texto capturado: ${textoCapturado}`);

    const marketData = [formattedDateTime, 'Mercado ovr 86', textoCapturado];
    appendToCSV(marketData);

    cy.request({
      method: 'POST',
      url: webhookUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        content: `**Overrall 86 🎉🔍** 
            **Percentual Mercado:** ${textoCapturado}
            **Valores atualizados do dia ** ${formattedDateTime}
            `,        
            username: locatorEaFC.username,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});

Cypress.Commands.add('AnaliseMercadoRating85', () => {
    const formattedDateTime = getFormattedDateTime();
  
    cy.visit(`${url}market/85rated/console/live`, { failOnStatusCode: false });
    cy.contains('85 Rated Live Market Index');
  
    cy.get(locatorEaFC.marketWatch.percentualMercado).then(($elemento) => {
      const textoCapturado = $elemento.text();
      cy.log(`Texto capturado: ${textoCapturado}`);
  
      const marketData = [formattedDateTime, 'Mercado ovr 85', textoCapturado];
      appendToCSV(marketData);
  
      cy.request({
        method: 'POST',
        url: webhookUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
            content: `**Overrall 85 🎉😶‍🌫️** 
            **Percentual Mercado:** ${textoCapturado}
            **Valores atualizados do dia ** ${formattedDateTime}
            `,          
            username: locatorEaFC.username,
        },
      }).then((response) => {
        expect(response.status).to.eq(204);
      });
    });
  });

Cypress.Commands.add('AnaliseMercadoRating84', () => {
  const formattedDateTime = getFormattedDateTime();

  cy.visit(`${url}market/84rated/console/live`, { failOnStatusCode: false });
  cy.contains('84 Rated Live Market Index');

  cy.get(locatorEaFC.marketWatch.percentualMercado).then(($elemento) => {
    const textoCapturado = $elemento.text();
    cy.log(`Texto capturado: ${textoCapturado}`);

    const marketData = [formattedDateTime, 'Mercado ovr 84', textoCapturado];
    appendToCSV(marketData);

    cy.request({
      method: 'POST',
      url: webhookUrl,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        content: `**Overrall 84 🎉💙** 
            **Percentual Mercado:** ${textoCapturado}
            **Valores atualizados do dia :** ${formattedDateTime}
            `,        
            username: locatorEaFC.username,
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});

Cypress.Commands.add('Top1MaisVendido', () => {
    const formattedDateTime = getFormattedDateTime();
  
    cy.visit(`${url}market/overall/console/live`, { failOnStatusCode: false });
    cy.contains('Overall Live Market Index');

      cy.get(locatorEaFC.marketWatch.top1).find('a').then(($elemento) => {
        const href = $elemento.attr('href');  // Obtém o valor do atributo href
        cy.log(`HREF capturado: ${href}`);
      
        const formattedDateTime = new Date().toLocaleString();  // Substitua pelo seu formato de data adequado
        const marketData = [formattedDateTime, 'Top 1 Mais Vendido', href];
        appendToCSV(marketData);  // Salva os dados no CSV
      
        cy.request({
          method: 'POST',
          url: webhookUrl,
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            content: `**Jogador que Mais Aumentou TOP 1 🥇**  
                      **Link:** https://www.futwiz.com/${href}  
                      **Valores atualizados do dia:** ${formattedDateTime}`,
            username: locatorEaFC.username,
          },
        }).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
      
});

Cypress.Commands.add('Top2MaisVendido', () => {
    const formattedDateTime = getFormattedDateTime();
  
    cy.visit(`${url}market/overall/console/live`, { failOnStatusCode: false });
    cy.contains('Overall Live Market Index');

      cy.get(locatorEaFC.marketWatch.top2).find('a').then(($elemento) => {
        const href = $elemento.attr('href');  // Obtém o valor do atributo href
        cy.log(`HREF capturado: ${href}`);
      
        const formattedDateTime = new Date().toLocaleString();  // Substitua pelo seu formato de data adequado
        const marketData = [formattedDateTime, 'Top 2 Mais Vendido', href];
        appendToCSV(marketData);  // Salva os dados no CSV
      
        cy.request({
          method: 'POST',
          url: webhookUrl,
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            content: `**Jogador que Mais Aumentou TOP 2 🥈**  
                      **Link:** https://www.futwiz.com/${href}  
                      **Valores atualizados do dia:** ${formattedDateTime}`,
            username: locatorEaFC.username,
          },
        }).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
      
});

Cypress.Commands.add('Top3MaisVendido', () => {
    const formattedDateTime = getFormattedDateTime();
  
    cy.visit(`${url}market/overall/console/live`, { failOnStatusCode: false });
    cy.contains('Overall Live Market Index');

      cy.get(locatorEaFC.marketWatch.top3).find('a').then(($elemento) => {
        const href = $elemento.attr('href');  // Obtém o valor do atributo href
        cy.log(`HREF capturado: ${href}`);
      
        const formattedDateTime = new Date().toLocaleString();  // Substitua pelo seu formato de data adequado
        const marketData = [formattedDateTime, 'Top 3 Mais Vendido', href];
        appendToCSV(marketData);  // Salva os dados no CSV
      
        cy.request({
          method: 'POST',
          url: webhookUrl,
          headers: {
            'Content-Type': 'application/json',
          },
          body: {
            content: `**Jogador que Mais Aumentou TOP 3 🥉**  
                      **Link:** https://www.futwiz.com/${href}  
                      **Valores atualizados do dia:** ${formattedDateTime}`,
            username: locatorEaFC.username,
          },
        }).then((response) => {
          expect(response.status).to.eq(204);
        });
      });
      
});