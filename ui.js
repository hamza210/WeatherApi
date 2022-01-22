class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.string = document.getElementById('w-string');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feels-like');
      this.dewpoint= document.getElementById('w-dewpoint');
      this.wind = document.getElementById('w-wind');
    }
  
    paint(results) {
      this.location.textContent = results.name;
      this.desc.textContent = `${results.weather[0].main} (${results.weather[0].description})`;
      this.string.textContent = `${results.main.temp} C`;
      this.icon.setAttribute('src',` http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`)
      this.humidity.textContent = `Relative Humidity: ${results.main.humidity}%`;
      this.feelsLike.textContent = `Feels Like: ${results.main.feels_like} C`;
      this.dewpoint.textContent = `DewPoint: ${results.main.temp_min} C`;
      this.wind.textContent = `Wind: ${results.wind.speed} MPh`;
    }
}