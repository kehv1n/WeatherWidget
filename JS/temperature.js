
// ********************************************************************************
// Name: GetCurrentLocation
// Description: Function is used as a getter to interface with the IP API to determine users current location
// Return Value: Location object with (2) keys for latitude and longitude
// When Is Called: Upon the document.ready() callback. Only when everything on the DOM is loaded.
// ********************************************************************************
function GetCurrentLocation(){
  var loc = {};
  // Finding the latitude and longitude, to be able to find the location
  // using IP api
  $.getJSON("https://ipapi.co/json", (data) => {
    // get the lat & long
    loc.latitude = data.latitude;
    loc.longitude = data.longitude;
    // Get the temperatures from
    return loc;
  });
}

function GetTheTemperature(loc){
  // console.log(loc.latitude);
  let api_string = "https://api.openweathermap.org/data/2.5/weather?lat=" + loc.latitude + "&lon=" + loc.longitude + "&appid=059dcee9c15c93a942eb1f38b72876be";
  console.log(api_string);



}
