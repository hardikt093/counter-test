describe('Couner', () => {
  it('Load component', () => {
    cy.visit('http://localhost:3000/')
  });
});

describe('Counter', () => {
  it("Click on increment button",() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="increment-button"]').click()
  })
});

describe('Counter', () => {
  it("Click on decrement button",() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="increment-button"]').click()
    cy.get('[data-testid="decrement-button"]').click()
  })
});

describe('Counter', () => {
  it("Click on reset button",() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="increment-button"]').click()
    cy.get('[data-testid="increment-button"]').click()
    cy.get('[data-testid="reset-button"]').click()
  })
});