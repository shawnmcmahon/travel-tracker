import Trip from './trip';

class User {
  constructor(property) {
    this.userID =  property.userID;
    this.userName = property.userName;
    this.travelerType = property.travelerType;
    this.userTripHistory = [];
    this.userExpensesYTD = 0;
    this.loginAccepted = false;

  }
}

export default User;
