import Destination from '../src/destination.js';
import TripRepo from '../src/tripRepo.js';
import tripData from './data/sampleTripData';
//import destinationData from '../data/sampleDestinationData.js';

class Trip {
  constructor(property) {
    this.id = property.id;
    this.userID = property.userID;
    this.destinationID = property.destinationID;
    this.travelers = property.travelers;
    this.duration = property.duration;
    this.tripStatus = property.tripStatus;
    this.suggestedActivities = property.suggestedActivities;
  }

  calculateCostForOneTrip(travelers, duration, destinationID, destinationData) {
    const destinationVisited = destinationData['destinations'].filter(destination => destination.id === destinationID)
    const lodgeCost = (duration * destinationVisited[0].estimatedLodgingCostPerDay) * travelers;
    const flightCost = travelers * destinationVisited[0].estimatedFlightCostPerPerson
    const agentFee = (lodgeCost + flightCost) * .1
    const totalCost = lodgeCost + flightCost + agentFee
    return totalCost
  }

  // bookTrip(date, duration, partySize, tripDestination, destinationData) {
  //   //Take the selected trip and push to the this.travelerTripHistory array
  //   this.searchTrips.find()
  // }

  // //this goes in index.js as a post request
  // bookTrip(travelers, duration, destinationID, destinationData, tripData) {
  //   //let newTrip = new Trip();
  //   //newTrip.id = tripData['trips'].length + 1
  //   console.log(newTrip.id)
  //
  // }


}


export default Trip;
