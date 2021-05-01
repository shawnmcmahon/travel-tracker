const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}

const retrieveSingleTraveler = (id) => {
  return fetch('http://localhost:3001/api/v1/travelers/')
    .then(response => checkForError(response))
    .catch(err => console.log(err))
}

const retrieveTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
    .then(response => checkForError(response))
    .catch(err => console.log(err))

}

const retrieveDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => checkForError(response))
  .catch(err => console.log(err))
}

const retrieveAPIData = (id) => {
  return Promise.all(retrieveSingleTraveler(id), retrieveTrips(), retrieveDestinations())
  .then(data => {
    let apiData = {};
    apiData.singleTraveler = data[0];
    apiData.trips = data[1];
    apiData.destinations = data[2];
    return apiData;
  })
  .catch(err => console.log(err));

}






export {checkForError, retrieveSingleTraveler, retrieveTrips, retrieveDestinations, retrieveAPIData}
