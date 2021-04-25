import { expect } from 'chai';

import Trip from '../src/Trip.js'
import TripRepo from '../src/TripRepo.js';
import sampleTripData from '../src/data/sampleTripData.js';


describe('Trip', () => {
  let sampleTrip;

  beforeEach(() => {

    sampleTrip = new Trip(sampleTripData['trips'][0]);

  })

  it('Should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('Should have a trip id', () => {
    expect(sampleTrip.id).to.eql(1);
  })

  it('Should have a userID of who took the trip', () => {
    expect(sampleTrip.userID).to.equal(44);
  })

  it('Should have a destinationID', () => {
    expect(sampleTrip.destinationID).to.eql(49);
  })


  it('Should have a number of travelers', () => {
    expect(sampleTrip.travelers).to.eql(1);
  })

  it('Should have a duration', () => {
    expect(sampleTrip.duration).to.eql(8);
  })



  });
