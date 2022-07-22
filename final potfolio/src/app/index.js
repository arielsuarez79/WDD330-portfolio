
import Store  from "./Store.js";
import UI  from "./UI.js";
import Weather  from "./Weather.js";


const storage = new Store();
const {city, countryCode}= storage.getLocationData();
const weather = new Weather(city, countryCode);

// User Interface
const ui = new UI();



async function fetchWeather() {
  const data = await weather.getWeather()
  ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value
  weather.changeLocation(city, countryCode);
  storage.setLocationData(city, countryCode);
  fetchWeather();

});

document.addEventListener('DOMContentLoaded', fetchWeather);