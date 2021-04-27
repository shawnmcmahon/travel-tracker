import domUpdates from './domUpdates';
import User from './user';
import './css/base.scss';
// import Trip from './trip';

//Functions








//Post request to search, book, and cancel trips

const checkForError = response => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}
