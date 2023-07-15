describe('Search Ba r', () => {
  beforeEach(() => {
    cy.visit('https://rancid-tomatillos-topaz.vercel.app')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2//movies', {
      status: 200,
      fixture: 'mockMovies'
    }).as('getMovies')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2//movies/436270', {
      status: 200,
      fixture: 'movie'
    }).as('getMovies')
  })

  it('user should be able to search', () => {
    cy.contains('Clear Results')
    cy.get('input[placeholder="Search Titles"]')
    .type('black', {force: true})
    cy.url().should('includes', '?search=black')
    cy.get('.card').first().as('firstCard')
    cy.get('.card').should('have.length', 2)
    
    cy.get('@firstCard').contains('h1', 'Black Adam')
    cy.get('@firstCard').find('img').should('be.visible')
    cy.get('@firstCard').contains('p', '4 ⭐️')

    cy.get('.card').last().as('lastCard')
    cy.get('@lastCard').contains('h1', 'Black Panther: Wakanda Forever')
    cy.get('@lastCard').find('img').should('be.visible')
    cy.get('@lastCard').contains('p', '4 ⭐️')

    cy.get('@firstCard').click({multiple: true})
    cy.url().should('includes', '/436270')
  })

  it('user should see a failure message, if the keyword does not match any movie title', () => {
    cy.get('input[placeholder="Search Titles"]')
    .type('jj', {force: true})

    cy.url().should('includes', '/?search=jj')
    cy.contains('Sorry, no matched movie was found. Please try a different keyword.')
  })

  it('user should be able to click the clear result button', () => {
    cy.contains('Clear Results').click()
    cy.url().should('eq', 'https://rancid-tomatillos-topaz.vercel.app/')
  })

})