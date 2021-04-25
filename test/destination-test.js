import { expect } from 'chai';

import Destination from '../src/destination.js';
import data from '../src/data/sampleDestinationData.js'


describe('Destination', () => {
  let lima;


  beforeEach(() => {
    lima = new Destination(data.destinations[0])
  })

  it('Should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('Should have a destination ID' , () => {
    // console.log(lima)
    expect(lima.id).to.be.eql(1);
  })

  it('Should have a destination location' , () => {
    // console.log(lima)
    expect(lima.destination).to.be.eql('Lima, Peru');
  })

  it('Should have an estimated lodging cost per day' , () => {
    // console.log(lima)
    expect(lima.estimatedLodgingCostPerDay).to.be.eql(70);
  })

  it('Should have an estimated flight cost per day' , () => {
    // console.log(lima)
    expect(lima.estimatedFlightCostPerPerson).to.be.eql(400);
  })

  it('Should have image alt statement for the screen reader' , () => {
    // console.log(lima)
    expect(lima.alt).to.be.eql('overview of city buildings with a clear sky')
  })


})
