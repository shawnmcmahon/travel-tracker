import Trip from './trip';


class TripRepo {
  constructor(tripData, destinationData) {
    this.tripData = tripData;
    this.destinationData = destinationData;
  }


  findUsersTrips(travelerID) {
    const userTrips = this.tripData['trips'].filter(trip => trip.userID === travelerID)
    return userTrips

  }

  //make function below work with my data to return all destinations that have been visited
  destinationsVisitedByUser(travelerID, destinationData) {
    const allTrips = this.findUsersTrips(travelerID);
    return destinationData['destinations'].filter(destination => allTrips.find(trip => trip.destinationID === destination.id))
  }


  //calculates for all of user's trips, not just one year. need to fix
  calculateTripCostYTD(travelerID, destinationData) {
    const totalCost = this.findUsersTrips(travelerID).reduce((sum, trip) => {
      const destinationVisited = this.destinationsVisitedByUser(trip.userID, destinationData);
      destinationVisited.forEach((destination, index) => {
        if (trip.destinationID === destination.id) {
          sum += trip.travelers * destination.estimatedFlightCostPerPerson;
          sum += (trip.duration * destination.estimatedLodgingCostPerDay) * trip.travelers;
        }
      })
        return sum
    }, 0);
    return totalCost * 1.1
  }

  calculateCostForOneTrip(travelers, duration, destinationID, destinationData) {
    const destinationVisited = destinationData['destinations'].filter(destination => destination.id === destinationID)
    const lodgeCost = (duration * destinationVisited[0].estimatedLodgingCostPerDay) * travelers;
    const flightCost = travelers * destinationVisited[0].estimatedFlightCostPerPerson
    const agentFee = (lodgeCost + flightCost) * .1
    const totalCost = lodgeCost + flightCost + agentFee
    return totalCost
  }






}




export default TripRepo;
