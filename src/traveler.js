// import Trip from './trip';
import TripRepo from './tripRepo.js'
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
    this.searchedTrips = [];
    // this.allTripHistory = new TripRepo(property.allTripHistory);

  }

  populateTripHistory(tripData, id) {
    //console.log(tripData);
    //console.log("im here")
    const travelerTripHistory = tripData['trips'].filter(trip => trip.userID === this.id)
    //console.log(travelerTripHistory)
    this.travelerTripHistory = travelerTripHistory;
    //console.log(this.travelerTripHistory);
    return(travelerTripHistory)

  }

  // calculateExpenses(tripData, destinationData) {
  //
  //   // //console.log(this.populateHistory)
  //   // const tripHistory = this.populateTripHistory(tripData, this.id);
  //   // const mapDestinationIDs = tripHistory.map(trip => trip.destinationID);
  //   // const findDestinations = destinationData['destinations'].filter(destination => destination.id === mapDestinationIDs);
  //   // //console.log(findDestinations);
  //   // //console.log(mapDestinationIDs)
  //   // //console.log(travelerTripHistory)
  //   // console.log("im here")
  //   // //look through the this.travelerTripHistory array, if the trip.destination ID
  //   // //matches an destination id, store that destination
  //   // //const destinationsTraveled =
  //
  // }


  searchTrips(date, duration, partySize, tripDestination, destinationData) {
    const availableDestinations = destinationData['destinations'].filter(destination => destination.id === tripDestination)
    console.log(availableDestinations);
    //this list is only destinations available, not trips. Need to understand how to
    //convert possible destiantions into trips
    // const calculateCost = availableDestinations.map(destination =>

    this.searchedTrips = availableTrips;
    return availableTrips;
  }


  bookTrip(date, duration, partySize, tripDestination, destinationData) {
    //Take the selected trip and push to the this.travelerTripHistory array
    this.searchTrips.find()
  }



  cancelTrip(checkInData, checkOutDate, partySize, tripDestination) {
    // Filter through the this.travelerTripHistory property, find the matching trip ID,
    //  and splice the matching trip out of the array
  }

  login(travelername, password) {
    // if it returns false, display error on dom.
    // If it returns true, take the traveler to the home page
  }



}

export default Traveler;
