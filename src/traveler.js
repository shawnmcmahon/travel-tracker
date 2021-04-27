import Trip from './trip.js';
import TripRepo from './tripRepo.js'

// let tripHistory = new TripRepo();

class Traveler {
  constructor(property) {
    this.id =  property.id;
    this.name = property.name;
    this.travelerType = property.travelerType;
    this.travelerTripHistory = [];
    this.searchedTrips = [];

  }

  populateTripHistory(tripData, id) {
    const travelerTripHistory = tripData['trips'].filter(trip => trip.userID === this.id)
    this.travelerTripHistory = travelerTripHistory;
    return travelerTripHistory

  }


  searchTrips(date, duration, partySize, tripDestination, destinationData) {
    this.searchedTrips = availableDestinations
    return availableDestinations;

  }



}

export default Traveler;
