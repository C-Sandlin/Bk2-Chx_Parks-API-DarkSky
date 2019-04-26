# Bk2-Chx_Parks-API-DarkSky

# Parks-And-Rec

## Part One
Build an application using grunt to get data from the following API: https://raw.githubusercontent.com/nss-day-cohort-31/national-parks/master/database.json.

1. display the list of national parks on the DOM. 
1. Each national park should be formatted in HTML like below:

```
<article>
      <h3>Park Name</h3>
      <p>State the park in located in</p>
    </article>
 ```
1. If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.

## Part Two
1. For each of the national parks, use the latitude and longitude to get the weather.
1. Use this API: https://darksky.net/dev.
1. From the data coming back from the Dark Sky API, you are going to use `summary` listed under `currently`, `hourly` and `daily`. 

Change your original html to look like this:

```
<article>
      <h3>Park Name</h3>
      <p>State the park</p>
      <p>Weather:</p>
      <ul>
        <li>Currently: Summary from currently in API Data</li>
        <li>Today: Summary from hourly in API Data</li>
        <li>Week: Summary from daily in API Data</li>
      </ul>
</article>
```

If you encounter CORS issues with the Dark Sky API, you can either get an extension for Chrome to work around it here:
* https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc 
* OR you can use this url instead: ` https://blooming-mesa-53816.herokuapp.com/37.8267,-122.4233` (be sure to replace the lat and lon values in the url with your own)


Dark Sky
The Dark Sky API allows you to request weather forecasts and historical weather data programmatically. It is the easiest, most advanced weather API on the web.

