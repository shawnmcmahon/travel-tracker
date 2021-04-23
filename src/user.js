import Trip from './trip';

class User {
  constructor(property) {
    this.userID =  property.userID;
    this.userName = property.userName;
    this.travelerType = property.travelerType;
    this.userTripHistory = [];
    this.userExpensesYTD = 0;
    this.loginAccepted = false;

  }

  populateUser() {
    // Go into user API, user a find method to find the id or the userName,
    // save user trip history to a variable, send that variable to
    // this.userTripHistory.

  }

  calculateUserExpensesYTD() {
    // filter through this.userTripHistory, find the total cost,
    // and push to a new array. In that new array,
    // sum up all the total cost for each trip,
    // send this integer to this.userExpensesYTD.
  }


  searchTrips(checkInData, checkOutDate, partySize, tripDestination) {
    // Look at the available destinations API,
    // filter the available trips by the parameters given, return that array

  }


  bookTrip(checkInData, checkOutDate, partySize, tripDestination) {
    //Take the selected trip and push to the this.userTripHistory array

  }



  cancelTrip(checkInData, checkOutDate, partySize, tripDestination) {
    // Filter through the this.userTripHistory property, find the matching trip ID,
    //  and splice the matching trip out of the array
  }

  login(username, password) {
    // if it returns false, display error on dom.
    // If it returns true, take the user to the home page
  }

}

export default User;
