// Function to display weather details on the webpage
function showWeatherDetails(weatherData) {
  console.log(weatherData); // Log the weather data for debugging purposes

  // Get the weather icon element by its ID
  const weatherIcon = document.getElementById("weatherIcon");

  // Set the weather icon source based on the weather condition

  switch (weatherData.weather[0].main.toLowerCase()) {
    case "clouds":
      weatherIcon.src = "../media/images/clouds.png";
      break;
    case "clear":
      weatherIcon.src = "../media/images/clear.png";
      break;
    case "mist":
      weatherIcon.src = "../media/images/mist.png";
    case "haze":
      weatherIcon.src = "../media/images/mist.png";
      break;
    case "snow":
      weatherIcon.src = "../media/image/snow.png"; // Possible typo in the path, should be 'images'
      break;
    case "drizzle":
      weatherIcon.src = "../media/src/drizzle.png"; // Possible typo in the path, should be 'images'
      break;
    case "rain":
      weatherIcon.src = "../media/images/rain.png";
      break;
  }

  // Set the temperature, converting from Kelvin to Celsius and rounding to the nearest whole number
  document.getElementById("temperature").innerHTML = `${Math.round(
    weatherData.main.temp - 273
  )} <sup>&#8451;</sup>`;

  // Set the city name
  document.getElementById("cityName").innerHTML = `${weatherData.name}`;

  // Set the humidity information
  document.getElementById(
    "humidityInfo"
  ).lastElementChild.innerHTML = `${weatherData.main.humidity} % <br/> Humidity`;

  // Set the wind speed information
  document.getElementById(
    "windInfo"
  ).lastElementChild.innerHTML = `${weatherData.wind.speed} km/h <br/>Wind`;

  // Display the weather details section
  document.getElementById("weatherDetails").style.display = "block";
}
