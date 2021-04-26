import { expect } from 'chai';

import TripRepo from '../src/tripRepo.js';
import tripData from '../src/data/sampleTripData.js';
import destinationData from '../src/data/sampleDestinationData.js'




describe('Trip Repo', () => {
  let sampleTripRepo;

  beforeEach(() => {
    //console.log(tripData)
    sampleTripRepo = new TripRepo(tripData, destinationData);

  });

  it('Should be a function', () => {
    //console.log(sampleTripRepo);
    expect(TripRepo).to.be.a('function');
  })

  it('Should have a property that contains an array of trips', () => {

    expect(sampleTripRepo.tripData['trips']).to.an('array');
  })

  it('Should have a property that contains an array of destinations', () => {

    expect(sampleTripRepo.destinationData['destinations']).to.an('array');
  })

  it('Should have a method that retrieves a user\'s trips', () => {
    const user3Trips = sampleTripRepo.findUsersTrips(3)
    expect(user3Trips).to.eql([{id: 3, userID: 3, destinationID: 22, travelers: 4, date: '2020/05/22', duration: 17, status: 'pending', suggestedActivities: []}])
  })

  it('Should have a function that finds destinations the traveler visit', () => {
    const user3destinations = sampleTripRepo.destinationsVisitedByUser(3, destinationData)
    expect(user3destinations).to.eql([{
    "id": 22,
    "destination": "Rome, Italy",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 650,
    "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "people standing inside a colosseum during the day"
  }]);

  })

  it('Should have a method that calculates a users trip expeneses', () => {
    const user3expenses = sampleTripRepo.calculateTripCost(3, destinationData);
    expect(user3expenses).to.eql(9592)
  })

  // it.only('Should have a method that calculatesa user\'s trips', () => {
  //   const user3cost = sampleTripRepo.calculateTripCost()
  //
  // })



  // it('Should have a property that contains all trip data', () => {
  //   expect(sampleTripRepo.tripData).to.eql({
  //     'trips': [
  //         {
  //         "id": 1,
  //         "userID": 44,
  //         "destinationID": 49,
  //         "travelers": 1,
  //         "date": "2019/09/16",
  //         "duration": 8,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 2,
  //         "userID": 35,
  //         "destinationID": 25,
  //         "travelers": 5,
  //         "date": "2020/10/04",
  //         "duration": 18,
  //         "status": "pending",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 3,
  //         "userID": 3,
  //         "destinationID": 22,
  //         "travelers": 4,
  //         "date": "2020/05/22",
  //         "duration": 17,
  //         "status": "pending",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 4,
  //         "userID": 43,
  //         "destinationID": 14,
  //         "travelers": 2,
  //         "date": "2020/02/25",
  //         "duration": 10,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 5,
  //         "userID": 42,
  //         "destinationID": 29,
  //         "travelers": 3,
  //         "date": "2020/04/30",
  //         "duration": 18,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 6,
  //         "userID": 29,
  //         "destinationID": 35,
  //         "travelers": 3,
  //         "date": "2020/06/29",
  //         "duration": 9,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 7,
  //         "userID": 37,
  //         "destinationID": 17,
  //         "travelers": 5,
  //         "date": "2020/5/28",
  //         "duration": 20,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 8,
  //         "userID": 36,
  //         "destinationID": 39,
  //         "travelers": 6,
  //         "date": "2021/02/07",
  //         "duration": 4,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 9,
  //         "userID": 24,
  //         "destinationID": 19,
  //         "travelers": 5,
  //         "date": "2019/12/19",
  //         "duration": 19,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         },
  //         {
  //         "id": 10,
  //         "userID": 9,
  //         "destinationID": 50,
  //         "travelers": 6,
  //         "date": "2020/07/23",
  //         "duration": 17,
  //         "status": "approved",
  //         "suggestedActivities": []
  //         }
  //
  //       ]
  //   })
  // })





})
