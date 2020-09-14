import Homepage from '../../page-objects/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage();
let selectWeekday = ['Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis'];

beforeEach('Login', () => {
    cy.visit('/login-password');
    homepage.getEmail('veronika@pink.vln');
    homepage.getPassword('Panther011');
    cy.get('.v-btn__content').click();
    cy.wait(3000);
});

    for (let i = 0; i < selectWeekday.length; i++) {
        it('Veify if you can order food everyday', () => {
            cy.get('.drawer-days').contains(selectWeekday[i]).click();
            cy.wait(1000);
            cy.get('[style="background-color: rgb(220, 220, 220);"] > .v-list__tile', { multiple: false }).click();
            cy.get(':nth-child(2) > .layout > :nth-child(2) > .v-card__text').click();
            cy.get(':nth-child(4) > .layout > :nth-child(1) > .v-card__text').click();
            cy.get('.orders-list-button', { force: true }).click();
            cy.get('.v-snack__content').should('be.visible');

        });
    };


