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
    //console.log("im here")
    const travelerTripHistory = tripData['trips'].filter(trip => trip.userID === this.id)
    //console.log(travelerTripHistory)
    this.travelerTripHistory = travelerTripHistory;
    console.log(this.travelerTripHistory);
    return(travelerTripHistory)

  }


  calculateExpenses(tripData, destinationData) {
    //times the destination lo
    // let currentDate = "2021/02/28";
    // let oneYearAgo = "2020/02/28";
    //
    //console.log(destinationData);
    //console.log(tripData)

    const travelerTripHistory = tripData['trips'].filter(trip => trip.userID === this.id);
    const mapDestinationIDs = travelerTripHistory.map(trip => trip.destinationID);
    const findDestinations = destinationData['destinations'].filter(destination => destination.id === mapDestinationIDs);
    //console.log(findDestinations);
    console.log(mapDestinationIDs)
    //console.log(travelerTripHistory)
    console.log("im here")
    //look through the this.travelerTripHistory array, if the trip.destination ID
    //matches an destination id, store that destination
      //const destinationsTraveled =



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
