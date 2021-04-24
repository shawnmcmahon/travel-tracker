import { expect } from 'chai';

import Traveler from '../src/traveler.js'
import sampleUserData from '../src/data/sampleTravelerData.js'

let sampleTraveler;

describe('User', () => {
  let traveler1, traveler2, traveler3;

  beforeEach(() => {

    traveler1 =  new Traveler(sampleTraveler.travelers[0])
  });

  it('Should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('Should have a user ID', () => {
    //console.log(sampleUserData.travelers[0].id)
    //console.log(user1.userID);
    expect(traveler1.userID).to.eql(1);
  })

  // it('Should')


})
