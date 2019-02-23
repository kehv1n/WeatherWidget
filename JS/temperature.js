
// ********************************************************************************
// Name: GetCurrentLocation
// Description: Function is used as a getter to interface with the IP API to determine users current location.
// Using Es7 Async Await to handle the API promise
// Return Value: Returns a promise object that can be resolved using .then()
// When Is Called: Upon the document.ready() callback. Only when everything on the DOM is loaded.
// ********************************************************************************
async function getCurrentLocation(){
  // hit the api, await for the response to return and save the response object from fetch()
  const response = await fetch("https://ipapi.co/json");
  // return data as a promise
  return data = await response.json();
}

// ********************************************************************************

// ********************************************************************************



async function getTheTemperature(loc){
  const api_string = "https://api.openweathermap.org/data/2.5/weather?lat=" + loc.latitude + "&lon=" + loc.longitude + "&appid=059dcee9c15c93a942eb1f38b72876be";

  const response = await fetch(api_string);
  return data = await response.json();

}

// ********************************************************************************

// ********************************************************************************

async function getBg(weather){
  // take the weather info desciption and use it to find an appropriate background
  // const query = weather[0].description;
  const query = "cloudy skies"
  const orientation = "landscape";
  const per_page = 5;

  const api_str = `https://api.unsplash.com/search/photos/?page=1&per_page=${per_page}&query=${query}&orientation=${orientation}&client_id=33afff334fb4c4d283b8024ff44ce083c32717687eb8b764f5d816bf5f108236`;
  const response = await fetch(api_str);

  let imgUrl = await response.json();
  imgUrl = imgUrl.results[0].links.download;
  // return the imageUrl as a promise
  return imgUrl;
}
