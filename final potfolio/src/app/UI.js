export default class UI {

    constructor() {
      this.location = document.getElementById('weather-location');
      this.desc = document.getElementById('weather-description');
      this.icon = document.getElementById('weather-icon');
      this.string = document.getElementById('weather-string');
      this.humidity = document.getElementById('weather-humidity');
      this.wind = document.getElementById('weather-wind');
    }
  
    render(weather) {
      console.log(weather);
      this.location.textContent = weather.name + ' / ' + weather.sys.country;
      this.desc.textContent = weather.weather[0]['description'];
      let imagesrc = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
      this.icon.setAttribute('src', imagesrc)
      this.string.textContent = weather.main.temp + ' °C';
      this.humidity.textContent = 'Humidity: ' + weather.main.humidity + '°C';
      this.wind.textContent = 'Weather Wind: ' + weather.wind.speed + ' m/s';
    }
  
  }