import Trip from './trip';


class TripRepo {
  constructor(tripData, destinationData) {
    this.tripData = tripData;
    this.destinationData = destinationData;
  }//console.log(tripData);


  findUsersTrips(travelerID) {
    //console.log(this.tripData)
    const userTrips = this.tripData['trips'].filter(trip => trip.userID === travelerID)
    //console.log(userTrips)
    return userTrips

  }

  // travelerTrips(travelerID) {
  //   return this.allTrips.filter(trip => trip.userID === travelerID)
  // }

  //make function below work with my data to return all destinations that have been visited
  destinationsVisitedByUser(travelerID, destinationData) {
    const allTrips = this.findUsersTrips(travelerID);
    //console.log(allTrips)
    return destinationData['destinations'].filter(destination => allTrips.find(trip => trip.destinationID === destination.id))
  }
  //trips - reduce, destinations for each, if condition inside the forEach that only has a condition that matches the destinationIDs

  // destinationsVisited(travelerID, destinations) {
  //   const allTrips = this.travelerTrips(travelerID);
  //   return destinations.filter(destination => allTrips.find(trip => trip.destinationID === destination.id))
  // }
  //

  //calculates for all of user's trips, not just one
  calculateTripCost(travelerID, destinationData) {
    // console.log(this.findUsersTrips(travelerID));
    // const tripsThisYear = this.findUsersTrips(travelerID)
    const totalCost = this.findUsersTrips(travelerID).reduce((sum, trip) => {
      const destinationVisited = this.destinationsVisitedByUser(trip.userID, destinationData);
    //  console.log(destinationVisited);
      destinationVisited.forEach((destination, index) => {
        if (trip.destinationID === destination.id) {
          //console.log(trip.travelers);
          //console.log("flight cost",  destination.estimatedFlightCostPerPerson)
          //console.log("duration", trip.duration)
          sum += trip.travelers * destination.estimatedFlightCostPerPerson;
          sum += (trip.duration * destination.estimatedLodgingCostPerDay) * trip.travelers;

        }

      })
        return sum

    }, 0);

    return totalCost * 1.1

  }

  calculateTripCostForOneTrip(travelerID, tripID, destinationData) {
    const tripToBeCalculated = this.findUsersTrips(travelerID).find(trip => trip.destinationID === tripID)
    const destinationVisited = destinationData['destinations'].filter(destination => destination.id === tripToBeCalculated.destinationID)
    const lodgeCost = (tripToBeCalculated.duration * destinationVisited[0].estimatedLodgingCostPerDay) * tripToBeCalculated.travelers;
    const flightCost = tripToBeCalculated.travelers * destinationVisited[0].estimatedFlightCostPerPerson
    const agentFee = (lodgeCost + flightCost) * .1
    const totalCost = lodgeCost + flightCost + agentFee
    //console.log(flightCost)
    //console.log(lodgeCost);
    //console.log(tripToBeCalculated.duration);
    //console.log(destinationVisited);
    //console.log(destinationVisited[0].estimatedLodgingCostPerDay);
    //console.log(tripToBeCalculated);
    //console.log(findDestinationVisited);
    //console.log(this.tripData)
    //console.log(this.findUsersTrips(3));
    return totalCost
  }




}







export default TripRepo;
