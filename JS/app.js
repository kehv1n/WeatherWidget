// Author: Kevin Da Silva
// Date Created: 02/21/2019
// Date Modified: --
// Temperature App
// "Created for a grade, inspired by a passion"

// This APP.JS will serve as the "orchestrator" of the onsomble,
// and this entire app. What functions will be called and when.


// Making use of jQuerys extensive doc.ready()
// &&  ES6 functions
$(document).ready(() => {

  var latitude,
  longitude,
  description,
  weatherid,
  temperature,
  wind;


  // get the location
  var loc = GetCurrentLocation();

  // use location to determine temperature
  // GetTheTemperature(location);

  // use the temperature to determine an appropriate bg

  // bg = GetTheBg(temperature);



});
