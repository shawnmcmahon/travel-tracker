const retrieveSingleTraveler = (id) => {
  return fetch('http://localhost:3001/api/v1/travelers/')
    .then(response => response.json())
    .catch(err => console.log(err))
}

const retrieveTrips = () => {
  return fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    //Need to replace console.log with displayErrMessage
    .catch(err => console.log(err))

}

const retrieveDestinations = () => {
  return fetch('http://localhost:3001/api/v1/destinations')
  .then(response => response.json())
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






export {retrieveSingleTraveler, retrieveTrips, retrieveDestinations, retrieveAPIData}
