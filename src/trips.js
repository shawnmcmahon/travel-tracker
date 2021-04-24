import Destination from './destination';
import sampleTripData from './data/sampleTripData';


class Trip {
  constructor(property) {
    this.tripID = property.tripID;
    this.tripUserID = property.tripUserID;
    this.tripDestinationID = property.tripDestinationID;
    this.tripTravelers = property.tripTravelers;
    this.tripDuration = property.tripDuration;
    this.tripStatus = property.tripStatus;
    this.tripSuggestedActivities = property.tripSuggestedActivities;
    this.tripAgentFee = property.tripAgentFee;
    this.tripTotalCost = property.tripTotalCost;


  }

  calculateTotalCost() {
    // Sum this.tripFlightCost + this.TripLodgeCost and set equal to netCost.
    // Set this.tripAgentFee equal to 10% of netCost.
    // Add netCost to this.tripAgentFee set equal this.tripTotalCost
  }
}


export default Trip;
