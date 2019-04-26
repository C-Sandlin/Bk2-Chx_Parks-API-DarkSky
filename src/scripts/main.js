//

function getParksData() {
  fetch(
    "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json"
  )
    .then(parks => parks.json())
    .then(parsedParks => {
      console.table(parsedParks);
      for (var i = 0; i < 10; i++) {
        let parkName = parsedParks.parks[i].name;
        let parkLocation = parsedParks.parks[i].state;
        let visitStatus = parsedParks.parks[i].visited;
        let lat = parsedParks.parks[i].latitude;
        let long = parsedParks.parks[i].longitude;
        getWeatherData(parkName, parkLocation, visitStatus, lat, long);
      }
    });
}

getParksData();

function getWeatherData(parkName, parkLocation, visitStatus, lat, long) {
  fetch(`https://api.darksky.net/forecast/${key}/${lat},${long}`)
    .then(weather => weather.json())
    .then(parsedWeather => {
      let currently = parsedWeather.currently.summary;
      let hourlySum = parsedWeather.hourly.summary;
      let weekSum = parsedWeather.daily.summary;
      publishToDom(
        parkName,
        parkLocation,
        visitStatus,
        currently,
        hourlySum,
        weekSum
      );
    });
}

function publishToDom(
  parkName,
  parkLocation,
  visitStatus,
  currently,
  hourlySum,
  weekSum
) {
  const parksPublishLocations = document.querySelector(
    "#place-parks-list-here"
  );
  const makeArt = document.createElement("article");
  const makeH3 = document.createElement("h3");
  const makeP = document.createElement("p");
  const makeP2 = document.createElement("p");
  const makeUl = document.createElement("ul");
  const makeLi = document.createElement("li");
  const makeLi2 = document.createElement("li");
  const makeLi3 = document.createElement("li");

  makeH3.textContent = `${parkName}`;
  makeP.textContent = `Located in the state of ${parkLocation}`;
  makeP2.textContent = "Weather:";
  makeLi.textContent = `Currently: ${currently}`;
  makeLi2.textContent = `Today: ${hourlySum}`;
  makeLi3.textContent = `This Week: ${weekSum}`;

  parksPublishLocations.appendChild(makeArt);
  makeArt.appendChild(makeH3);
  makeArt.appendChild(makeP);
  makeArt.appendChild(makeP2);
  makeArt.appendChild(makeUl);
  makeUl.appendChild(makeLi);
  makeUl.appendChild(makeLi2);
  makeUl.appendChild(makeLi3);

  if (visitStatus === true) {
    makeArt.classList.add("visited");
  }
  if (visitStatus === false) {
    makeArt.classList.add("not-visited");
  }
}
