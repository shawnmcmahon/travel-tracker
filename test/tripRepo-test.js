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

    const user3expenses = sampleTripRepo.calculateTripCostYTD(3, destinationData);
    expect(user3expenses).to.eql(9592)
  })






})
