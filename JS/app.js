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
  var location = getCurrentLocation();
  // resolve the promise into the users current location data
  location.then((data) => {
  // get the temp
    const weatherInfo = getTheTemperature(data);
    weatherInfo.then((info) => {
      console.log('Weather Information Below');
      console.log(info);

      // Determine which background to use according to temperature
      // note: the api returns temp in Kelvin
      const backgroundImageUrl = getBg(info.weather);
      backgroundImageUrl.then((url) => {
        console.log('the url is below');

        // take this url and update the background img
        // ** make sure to include author of pic ** 
        console.log(url);



      });







    });
   });



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
