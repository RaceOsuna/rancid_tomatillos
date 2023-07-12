describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/436270')

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'mockMovies'
    }).as('getMovieData')
    
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie' 
    }).as('getFirstMovie')
  })
  
  it("should display a single movie's details", () => {

    cy.get('.single_movie_view').should('have.length', 1)
    cy.contains('p', '"The world needed a hero. It got Black Adam."')
    cy.contains('h1', 'Black Adam')
    cy.contains('p', 'Overview: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    cy.contains('p', 'Length: 125 minutes.')
    cy.get('button').contains('⬅')
    cy.contains('p', 'Average Rating: 4 ⭐️')
    cy.contains('p', 'Release Date: 2022-10-19')
    cy.contains('p', 'Movie Budget: $200000000')
    cy.contains('p', 'Movie Revenue: $384571691')

  })

  it("should go back to home page", () => {

    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

})