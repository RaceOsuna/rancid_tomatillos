describe('visit error page', () => {
  it('visits the url', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1', {
      statusCode: 404,
      fixture: 'movie' 
    })

    cy.visit('http://rancid-tomatillos-topaz.vercel.app/1')
    cy.get('img').should('be.visible')
    cy.get('h1').contains('404')
    cy.get('p').contains('Not Found! This Page does not exist, please try a differnt url...')
  })

})