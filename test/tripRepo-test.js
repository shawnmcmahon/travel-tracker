import { expect } from 'chai';

import TripRepo from '../src/tripRepo.js';
import sampleTripData from '../src/data/sampleTripData.js';


let sampleTripRepo;


describe('Trip Repo', () => {
  beforeEach(() => {

    sampleTripRepo = new TripRepo(sampleTripData);

  });

  it('Should be a function', () => {
    expect(sampleTripRepo).to.be.a('function');
  })




})
