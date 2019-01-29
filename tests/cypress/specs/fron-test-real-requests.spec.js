describe('Generations loads data', () => {
  /*beforeEach(function() {
       cy.fixture('../fixtures/generations-data/generation-data.json').as('data');

   });*/
  it('check loads data', () => {
    cy.visit('https://explorer.aepps.com/#/generations');
    cy.wait(30000);

    cy.get(' div.table-wrapper > table.transactions > tbody > tr > td > span.height ').should('be.visible');
    cy.get(' div.table-wrapper > table.transactions > tbody > tr > td > span.height ').should('have.class', 'height');

    cy.get(' div.table-wrapper > table.transactions > tbody > tr > td > span.number > span.ae-hash').should('be.visible');
    cy.get(' div.table-wrapper > table.transactions > tbody > tr > td > span.number > span.ae-hash').should('have.class', 'ae-hash');

    cy.get('div.table-wrapper > table.transactions > tbody > tr > td:nth-child(3) > span.number').should('be.visible');
    cy.get('div.table-wrapper > table.transactions > tbody > tr > td:nth-child(3) > span.number').should('have.class', 'number');

    cy.get('div.table-wrapper > table.transactions > tbody > tr > td:nth-child(4) > span.number').should('be.visible');
    cy.get('div.table-wrapper > table.transactions > tbody > tr > td:nth-child(4) > span.number').should('have.class', 'number');

    cy.get('div.table-wrapper > table.transactions > tbody > tr > td > span.account-address').should('be.visible');
    cy.get('div.table-wrapper > table.transactions > tbody > tr > td > span.account-address').should('have.class', 'account-address');

    cy.get('div.table-wrapper > table.transactions > tbody > tr > td > span > span.relative-time').should('be.visible');
    cy.get('div.table-wrapper > table.transactions > tbody > tr > td > span > span.relative-time').should('have.class', 'relative-time');
  })
});
describe('Clicking on a Generation loads Generation Related data', () => {
  it('load Generation Related data and check data', () => {

    cy.visit('https://explorer.aepps.com/#/generations');
    cy.wait(30000);

    cy.get(' div.table-wrapper > table.transactions > tbody > tr:nth-child(1) > td > span.height ').should('be.visible');
    cy.get(' div.table-wrapper > table.transactions > tbody > tr:nth-child(1) > td > span.height ').click();

    cy.wait(20000);
    cy.get('section.generation-header__section > div.basic-gen-info.grid > div.field.field__height > div.field-value > div.number ').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid > div.field.field__height > div.field-value > div.number ').should('have.class', 'number');

    cy.get('section.generation-header__section > div.basic-gen-info.grid > div.field.field__height > div.field-value > div.number ').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid > div.field.field__confirmation > div.field-value > div.number ').should('have.class', 'number');

    cy.get('section.generation-header__section > div.basic-gen-info.grid > div.field.field__hash > div.field-value > span.ae-hash ').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid > div.field.field__hash > div.field-value > span.ae-hash ').should('have.class', 'ae-hash');

    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(3) > div.field.field__transactions > div.field-value > div.number  ').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(3) > div.field.field__transactions > div.field-value > div.number ').should('have.class', 'number');

    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(3) > div.field.field__micro > div.field-value > div.number  ').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(3) > div.field.field__micro > div.field-value > div.number ').should('have.class', 'number');


    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(3) > div.field.field__beneficiary > div.field-value > a.account-address > span.ae-hash ').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(3) > div.field.field__beneficiary > div.field-value > a.account-address > span.ae-hash ').should('have.class', 'ae-hash');

    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(4) > div.field.field__target > div.field-value > div.field-value.number').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(4) > div.field.field__target > div.field-value > div.field-value.number').should('have.class', 'number');

    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(4) > div.field.field__stamp > div.field-value > time.field-value.number').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(4) > div.field.field__stamp > div.field-value > time.field-value.number').should('have.class', 'number');

    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(4) > div.field.field__age > div.field-value > span.relative-time').should('be.visible');
    cy.get('section.generation-header__section > div.basic-gen-info.grid:nth-child(4) > div.field.field__age > div.field-value > span.relative-time').should('have.class', 'relative-time');
  })
});

describe('Click should work', () => {
  it('clicking  on beneficary', () => {

    cy.visit('https://explorer.aepps.com/#/generations');
    cy.wait(20000);
    cy.get('#app > main > div > div > div.table-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(5) > span.account-address').should('be.visible');
    cy.get('#app > main > div > div > div.table-wrapper > table > tbody > tr:nth-child(1) > td:nth-child(5) > span.account-address').click();

  })
});
