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
    this.tripAgentFee = 0;
    this.tripTotalCost = 0;


  }

  calculateTotalCost(tripData) {
    // Sum this.tripFlightCost + this.TripLodgeCost and set equal to netCost.
    // Set this.tripAgentFee equal to 10% of netCost.
    // Add netCost to this.tripAgentFee set equal this.tripTotalCost
  }

  
}


export default Trip;
