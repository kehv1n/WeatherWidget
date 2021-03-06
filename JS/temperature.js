
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
  const query = weather[0].description;
  const orientation = "landscape";
  const per_page = 5;

  const api_str = `https://api.unsplash.com/search/photos/?page=1&per_page=${per_page}&query=${query}&orientation=${orientation}&client_id=33afff334fb4c4d283b8024ff44ce083c32717687eb8b764f5d816bf5f108236`;
  const response = await fetch(api_str);

  let imgUrl = await response.json();

  // credit the author here
  let user = imgUrl.results[0].user;
  user = user.first_name +' '+  user.last_name;
  let creds = `Picture By: ${user}`;

  // this is the direct url for the background
  imgUrl = imgUrl.results[0].links.download;

  // credit the author of pic
  injectById("author-creds", creds);

  // return the imageUrl as a promise
  return imgUrl;
}

// *****************************************************************************
// ***************************** END OF API HOOKS ******************************

function changeBackgroundCover(link){
  document.getElementById("bgCover").style.backgroundImage = `url(${link})`;

}

// Must be inputted w Kelvin
function changeTempUnits(unit, temp){
  // We know the temp comes in Kelvin so
  // all the conversions will be done assuming thus
  if (unit === "F"){
    temp = 1.8 * (temp - 273) + 32;
  }

  if (unit === "C"){
    temp = temp - 273.15;
  }

  if (unit === "K"){
    return temp;
  }

  return temp;


}


function injectById(id, content) {
  const kTemp = content;
  let element = document.getElementById(id);
  let unit = "F";
  // first check to see if we're injecting the temp
  if (id === "curr-temp"){
    // if so, change the units to F cause 'Mericaa


    element.addEventListener('click', () => {
      let temp;

      if (unit === "F"){
        // change to C
        temp = Math.floor(changeTempUnits("C", kTemp));
        console.log(`changed temp from ${kTemp} to ${temp}`);
        unit = "C";
        element.innerHTML = temp.toString() + "&deg;" +unit;
      }

      else if (unit == "C"){
        // change to K
        temp = Math.floor(kTemp);
        console.log(`changed temp from ${kTemp} to ${temp}`);
        unit = "K";
        element.innerHTML = temp.toString() + "&deg;" +unit;
      }
      else if (unit == "K"){
        // change to F
        temp = Math.floor(changeTempUnits("F", kTemp));
        console.log(`changed temp from ${kTemp} to ${temp}`);
        unit = "F";
        element.innerHTML = temp.toString() + "&deg;" +unit;
      }

    });
    content = changeTempUnits(unit, content);
    // make the # pretty
    content = Math.floor(content);
    content = content.toString() + "&deg;" +unit;


  }

  // if the content is of type number
  if (typeof content === "number") {
    // floor the number to something more UX friendly
    content = Math.floor(content);
  }
  // inject it into the appropriate DOM element

    element.innerHTML = content;

}
