// import Trip from './trip';
// import TripRepo from './tripRepo'
//
// let tripHistory = new TripRepo();

class Traveler {
  constructor(property) {
    this.id =  property.id;
    this.name = property.name;
    this.travelerType = property.travelerType;
    this.travelerTripHistory = [];
    this.travelerExpensesYTD = 0;
    this.loginAccepted = false;
    // this.allTripHistory = new TripRepo(property.allTripHistory);

  }

  populateTripHistory(tripData, id) {
    //console.log(tripData);
    console.log("im here")
    const travelerTripHistory = tripData['trips'].filter(trip => trip.userID === this.id)
    console.log(travelerTripHistory)
    //this.travelerTripHistory = travelerTripHistory;
    //console.log(this.travelerTripHistory);
    return(travelerTripHistory)

  }


  calculateTravelerExpensesYTD(destinationData) {
    //





    // filter through this.TripHistory, find the total cost,
    // and push to a new array. In that new array,
    // sum up all the total cost for each trip,
    // send this integer to this.ExpensesYTD.
  }


  searchTrips(checkInData, checkOutDate, partySize, tripDestination) {
    // Look at the available destinations API,
    // filter the available trips by the parameters given, return that array

  }


  bookTrip(checkInData, checkOutDate, partySize, tripDestination) {
    //Take the selected trip and push to the this.travelerTripHistory array

  }



  cancelTrip(checkInData, checkOutDate, partySize, tripDestination) {
    // Filter through the this.travelerTripHistory property, find the matching trip ID,
    //  and splice the matching trip out of the array
  }

  login(travelername, password) {
    // if it returns false, display error on dom.
    // If it returns true, take the traveler to the home page
  }

  // populatetraveler() {
  //   // Go into traveler API, traveler a find method to find the id or the travelerName,
  //   // save traveler trip history to a variable, send that variable to
  //   // this.travelerTripHistory.
  //
  // }

}

export default Traveler;
