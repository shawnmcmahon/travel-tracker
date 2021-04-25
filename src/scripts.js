import domUpdates from './domUpdates';
import User from './user';
import './css/base.scss';
// import Trip from './trip';

//Functions







//Fetch requests for trip data
const fetchUserData = () => fetch('http://localhost:3001/api/v1/travelers')
  .then(response => checkForError(response))
  .catch(err => console.log(`User API Error: ${err.message}`));

//Post request to search, book, and cancel trips

const checkForError = response => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}
