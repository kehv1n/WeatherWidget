// Author: Kevin Da Silva
// Date Created: 02/21/2019
// Date Modified: --
// Temperature App

// This APP.JS will serve as the "orchestrator" of the onsomble,
// and this entire app. What functions will be called and when.


// Making use of jQuerys extensive doc.ready()
// &&  ES6 functions
$(document).ready(() => {




  // get the location
  var location = GetCurrentLocation();

  // LOCATION keys [location.latitude location.longitude] are currently going undefined.


  // use location to determine temperature
  // lat = location.latitude;
  // long = location.longitude;
  // console.log(lat);
  // console.log(long);
  // GetTheTemperature(lat, long);

  // use the temperature to determine an appropriate bg

  // bg = GetTheBg(temperature);



});
