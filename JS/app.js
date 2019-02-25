// Author: Kevin Da Silva
// Date Created: 02/21/2019
// Date Modified: --
// Temperature App

// This APP.JS will serve as the "orchestrator" of the onsomble,
// and this entire app. What functions will be called and when.


// Making use of jQuerys extensive doc.ready()
// &&  ES6 functions
$(document).ready(() => {

  const todaysDate =  new Date().toDateString();


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
      // note: the api returns temp in Kelvin....yikes.
      const backgroundImageUrl = getBg(info.weather);
      backgroundImageUrl.then((url) => {
        // take this url and update the background img
        // ** make sure to include author of pic **
        changeBackgroundCover(url);

        // only when you change the background,
        // do we do the injections (looks 'seamless-er')

        // All of these injections can be simplified by using a simple
        // templating framework ie React, Angular, View, etc.
        injectById("city-location", info.name);
        injectById("curr-date", todaysDate);
        injectById("curr-temp", info.main.temp);
        injectById('temp-desc', info.weather[0].description);
        injectById("wind-speed", info.wind.speed);
        injectById("humidity", info.main.humidity);


        // Adding the icon is annoying cause it only works w <img> tags :(
        let icon_src = `http://openweathermap.org/img/w/${info.weather[0].icon}.png`;
        let icon = document.createElement('img');
        icon.src = icon_src;
        document.getElementsByClassName("locations")[0].appendChild(icon);


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
