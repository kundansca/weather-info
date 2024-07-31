async function fetchWeatherData(url) {
  try {
    let response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("invalid url or city name");
    }
    let weatherData = await response.json();
    showWeatherDetails(weatherData);
  } catch (error) {
    alert(error.message);
  }
}
function handleSearchClick() {
  document.getElementById("cityNameSuggestions").style.display = "none";

  let cityName = document.querySelector("#cityNameInput").value;

  if (cityName.trim().length > 3) {
    if (cityName.indexOf(",") !== -1) {
      cityName = cityName.substring(0, cityName.indexOf(",")).trim();

      if (cityName !== "") {
        let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29703242dea4002588c7f364307e27d7`;
        fetchWeatherData(endpoint);
      } else {
        alert("invalid city name");
      }
    } else {
      let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.trim()}&appid=29703242dea4002588c7f364307e27d7`;
      fetchWeatherData(endpoint);
    }
  }
}

document
  .getElementById("searchButton")
  .addEventListener("click", handleSearchClick);
