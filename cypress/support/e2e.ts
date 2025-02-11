

beforeEach(() => {
  cy.visit('https://the-internet.herokuapp.com/login'); // Visit the login page before each test
});

afterEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});
