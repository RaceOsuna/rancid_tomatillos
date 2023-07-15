describe('template spec', () => {
  it('visits web page', () => {
    cy.visit('https://rancid-tomatillos-topaz.vercel.app')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mockMovies'
    }).as('getMovieData')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie' 
    }).as('getFirstMovie')

    cy.contains('h1', 'Rancid Tomatillos')
    cy.get('.movie_card_section')
    cy.get('.card').should('have.length', 40)
    cy.get('.card').first().contains('h1', 'Black Adam')
    cy.get('.card').first().contains('p', '4')
    cy.get('.card').last().contains('h1', 'X')
    cy.get('.card').last().contains('p', '1')
    cy.get('.card').first().click()
    cy.url().should('include', '/436270')
  })
});