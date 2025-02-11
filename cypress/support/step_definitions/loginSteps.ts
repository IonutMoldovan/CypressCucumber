import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the login page', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
});

When('I enter valid credentials', () => {
  // Load credentials from the loginData.json file
  cy.fixture('loginData.json').then((loginData) => {
    cy.get('input[name="username"]').type(loginData.username);
    cy.get('input[name="password"]').type(loginData.password);
    cy.get('button[type="submit"]').click();
  });
});

Then('I should see the dashboard page', () => {
  cy.url().should('include', '/secure');
  cy.get('h2').should('contain', 'Secure Area');
});
