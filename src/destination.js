import destinationData from '../src/data/sampleDestinationData';


class DestinationRepo {
  constructor(property) {
    this.id = property.id;
    this.destination = property.destination;
    this.estimatedLodgingCostPerDay = property.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = property.estimatedFlightCostPerPerson
    this.image = property.image;
    this.alt = property.alt;

    // convertDataIntoDestinationClass(destinationData) {
    //
    // let arrayOfDestinationClasses = new DestinationRepo(destinationData)
    //
    // console.log(arrayOfDestinationClasses);
    // return arrayOfDestinationClasses;
    // }


  }


}


//Bring in destinationData and make destination data points instantions of
//of the destination class




export default DestinationRepo
