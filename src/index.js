// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
// import domUpdates from './domUpdates';
// import scripts from './scripts';
import Traveler from './traveler';
import Trip from './trip';
import TripRepo from './tripRepo';
import Destination from './destination'
import './css/base.scss';
import api from './api'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


let newTraveler;

function loadPage() {
  retrieveAPIData(12)
    .then(data => {
      newTraveler = new Traveler(data.singleTraveler, data.trips, data.destinations )
      //method that updates the userName and Welcome
      //method that populates the tripHistory on the dom
      //method that populates the destination choices 

    })
    .catch(err => err.message);
}

//book trip function


//


// console.log('This is the JavaScript entry file - your code begins here.');
