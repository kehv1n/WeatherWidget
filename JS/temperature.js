
function GetCurrentLocation(){
  loc = [];
  // Finding the latitude and longitude, to be able to find the location
  // using IP api  
  $.getJSON("https://ipapi.co/json", (data) => {
    // get the lat & long
    loc.push(data.latitude, data.longitude);
  });
  // return the loc
  return loc;
}

function GetTheTemperature(loc){
   $.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=44bebd8c8c0a7e6f1191c819f14d195c",
   (data) => {
     console.log(data);

   });



}
