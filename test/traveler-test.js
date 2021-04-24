import { expect } from 'chai';

import Traveler from '../src/traveler.js'
// import Trip from './trip';
import travelerData from '../src/data/sampleTravelerData.js';
import tripData from '../src/data/sampleTripData.js';


// let sampleTraveler;

describe('Traveler', () => {
  let traveler1, traveler2, traveler3;

  beforeEach(() => {

    traveler1 =  new Traveler(travelerData.travelers[0])
    traveler2 =  new Traveler(travelerData.travelers[43])
  });

  it('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('Should have a traveler ID', () => {
    expect(traveler1.id).to.eql(1);
  })

  it('Should have a traveler name', () => {
    expect(traveler1.name).to.eql('Ham Leadbeater')
  })

  it('Should have a traveler type', () => {
    expect(traveler1.travelerType).to.eql('relaxer')
  })

  it('Should have a method that retrieves the traveler\'s trip history', () => {
  //  console.log(traveler2.populateTripHistory(tripData['trips']);
    expect(traveler2.populateTripHistory(tripData)).to.eql([{
    "id": 1,
    "userID": 44,
    "destinationID": 49,
    "travelers": 1,
    "date": "2019/09/16",
    "duration": 8,
    "status": "approved",
    "suggestedActivities": []
  }])
  })

  




})
