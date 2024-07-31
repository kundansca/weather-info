// Function to display city name suggestions in a dropdown
function showCitySuggestions(citySuggestionsData) {
  console.log(citySuggestionsData); // Log the city suggestions data for debugging purposes

  let suggestionsListHtml = ""; // Initialize an empty string to build the list of suggestions

  // Iterate over each city suggestion and build the HTML for the suggestions list
  citySuggestionsData.forEach((value) => {
    suggestionsListHtml += `<li onclick="insertCityIntoInput(this)">${value.name}, ${value.state}, ${value.country}</li>`;
  });

  // Get the <ul> element that will contain the list of suggestions by its ID
  let ulElementNode = document.getElementById("cityNameHint");

  // Make the city name suggestions dropdown visible
  document.getElementById("cityNameSuggestions").style.display = "block";

  // Set the innerHTML of the <ul> element to the built list of suggestions
  ulElementNode.innerHTML = suggestionsListHtml;
}
