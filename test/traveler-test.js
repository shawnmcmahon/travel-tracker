import { expect } from 'chai';

import Traveler from '../src/traveler.js'
import sampleTravelerData from '../src/data/sampleTravelerData.js'

let sampleTraveler;

describe('Traveler', () => {
  let traveler1, traveler2, traveler3;

  beforeEach(() => {

    traveler1 =  new Traveler(sampleTravelerData.travelers[0])
  });

  it('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('Should have a traveler ID', () => {
    expect(traveler1.id).to.eql(1);
  })

  it('Should have a traveler name', () => {
    console.log(traveler1);
    expect(traveler1.name).to.eql('Ham Leadbeater')
  })

  it('Should have a traveler type', () => {
    console.log(traveler1);
    expect(traveler1.travelerType).to.eql('relaxer')
  })


})
