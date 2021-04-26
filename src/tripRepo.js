import Trip from './trip';


class TripRepo {
  constructor(tripData, destinationData) {
    this.tripData = tripData;
    this.destinationData = destinationData;
  }//console.log(tripData);


  findUsersTrips(userID) {
    //console.log(this.tripData)
    const userTrips = this.tripData['trips'].filter(trip => trip.userID === userID)
    //console.log(userTrips)
    return userTrips

  }

  calculateTripCost() {
    //iterate through destinationData. if destination ID matches an ID within
    //trip Data, use the tripdata.duration to make a calcuation.


  }


}

//Destionations visited




//find userExpensesYTD(userID, destination)



export default TripRepo;
