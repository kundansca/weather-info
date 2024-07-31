// Function to insert the selected city name into the input field and hide suggestions
function insertCityIntoInput(evt) {
  // Set the value of the cityNameInput field to the innerText of the clicked suggestion, trimmed of whitespace
  document.getElementById("cityNameInput").value = evt.innerText.trim();
  // Hide the city name suggestions dropdown
  document.getElementById("cityNameSuggestions").style.display = "none";
}

// Async function to fetch city name suggestions from the given URL
async function fetchCityNameSuggestions(url) {
  try {
    // Make a fetch request to the provided URL
    let response = await fetch(url);
    // Check if the response status is not 200 (OK), and throw an error if so
    if (response.status !== 200) {
      throw new Error("Invalid city name or URL");
    }
    // Parse the response JSON data
    let citySuggestionsData = await response.json();
    // Call a function to display the city suggestions (assuming this function is defined elsewhere)
    showCitySuggestions(citySuggestionsData);
  } catch (error) {
    // Alert the user if an error occurs during fetch
    alert(error.message);
  }
}

// Variable to store the timeout ID for debouncing
let timeout = null;

// Function to handle key down events on the city name input field
function handleCityInputKeyDown() {
  // Get the value of the cityNameInput field
  let cityNameInputValue = document.querySelector("#cityNameInput").value;

  // Construct the API endpoint URL with the city name input value
  let cityNameSuggestionsEndpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${cityNameInputValue}&limit=5&appid=29703242dea4002588c7f364307e27d7`;

  // Check if the input value length is greater than 3
  if (cityNameInputValue.length > 3) {
    // If a timeout is already set, clear it to debounce
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    // Set a new timeout to fetch city name suggestions after 700ms
    timeout = setTimeout(() => {
      fetchCityNameSuggestions(cityNameSuggestionsEndpoint);
    }, 700);
  } else {
    // If input value length is 3 or less, hide the city name suggestions dropdown
    let cityNameSuggestionsElement = document.getElementById(
      "cityNameSuggestions"
    );
    cityNameSuggestionsElement.style.display = "none";
  }
}

// Add an event listener to the cityNameInput field to handle keyup events
document
  .getElementById("cityNameInput")
  .addEventListener("keyup", handleCityInputKeyDown);
