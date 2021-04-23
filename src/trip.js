import User from './trip';

class Trip {
  constructor(property) {
    this.tripID = property.tripID;
    this.tripDestination = property.tripDestination;
    this.tripFlightCost = property.tripFlightCost;
    this.tripLodgeCost = property.tripLodgeCost;
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
