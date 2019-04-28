//
const parksPublishLocations = document.querySelector("#place-parks-list-here");

function getParksData() {
  fetch(
    "https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json"
  )
    .then(parks => parks.json())
    .then(parsedParks => {
      console.table(parsedParks);
      parsedParks.parks.forEach(park => {
        fetch(
          `https://api.darksky.net/forecast/${key}/${park.latitude},${
            park.longitude
          }`
        )
          .then(weather => weather.json())
          .then(parsedWeather => {
            let currently = parsedWeather.currently.summary;
            let hourlySum = parsedWeather.hourly.summary;
            let weekSum = parsedWeather.daily.summary;

            const parkHTML = `
              <article class="visit-status-${park.visited}">
              <h3>${park.name}</h3>
              <p>${park.state}</p>
              <ul>
              <li>Currently: ${currently}</li>
              <li>Today: ${hourlySum}</li>
              <li>Week: ${weekSum}</li>
              </ul>
              </article>
              `;
            parksPublishLocations.innerHTML += parkHTML;
          });
      });
    });
}

getParksData();
