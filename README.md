# Rancid Tomatillos React App

Welcome to the Rancid Tomatillos React App! This application is designed to help movie enthusiasts search for movies, view their details, and rate them. It includes dynamic and asynchronous search functionality and utilizes Cypress for testing purposes.

## Features

1. **Movie Search:** Users can search for movies by title. The search functionality is dynamic and asynchronous, providing instant results as the user types.

2. **Movie Details:** Clicking on a movie in the search results displays detailed information about the selected movie, including the synopsis, release date, director, and ratings.
   
3. **Responsive Design:** The app's user interface is designed to be responsive and adapt to various screen sizes, ensuring a consistent and enjoyable experience on desktops, tablets, and mobile devices.
   
4. **Testing with Cypress:** The app includes automated tests using Cypress, a JavaScript-based end-to-end testing framework. These tests ensure that the app functions correctly and reliably.

## Preview
- Search existing movies

  ![successful search](https://user-images.githubusercontent.com/123802263/253761238-ca69c5fa-302a-4de9-91cc-c6b7b4de6862.gif)

- Search non-existing movies

  ![failed search](https://user-images.githubusercontent.com/123802263/253761248-17e16fa4-52a8-46c6-93ff-827be158f59b.gif)

## Installation

To run the Rancid Tomatillos React App and perform tests using Cypress, follow these steps:

1. Make sure you have [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed in your local environment.
2. Clone this repository to your local machine by running `git clone git@github.com:Jade-ZS/rancid_tomatillos.git`.
3. Navigate to the project directory using the command line `cd rancid_tomatillos`.
4. Start the development server by running command `npm start`
6. Open your web browser and navigate to `http://localhost:3000` to access the Rancid Tomatillos React App.
7. To terminate the app, go to your terminal and press `ctrl` + `c`.

## Testing

To run the automated tests using Cypress, ensure that the development server is running. Then, follow these steps:
1. In a new terminal window, navigate to the project directory by running `cd rancid_tomatillos`.
2. Run `npm install cypress` to install cypress.
3. Run the command `npm cypress open` to open the Cypress test runner.
4. The Cypress Test Runner window will open, displaying the available test files. Click on a test file to run the associated tests.
5. The tests will execute in a new browser window. You can observe the test execution and check the test results in the Cypress Test Runner window.

## Contributors
[Jade Shi](https://github.com/Jade-ZS) and [Race Osuna](https://github.com/RaceOsuna)

## Technologies Used

The Rancid Tomatillos React App and its testing framework use the following technologies:
- React: A JavaScript library for building user interfaces.
- Cypress: A JavaScript-based end-to-end testing framework for web applications.
- HTML/CSS: Used for structuring and styling the web pages.


