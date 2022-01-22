// Init LocalStorage
const storage = new Storage()

// Get stored location data
const weatherlocation = storage.getLocationdata()

// Init class Weather
const weather = new Weather(weatherlocation.city);

// Init class UI
const ui = new UI()

// Get Weather on Dom Load
document.addEventListener('DOMContentLoaded', getweather)

// Change Location
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const city = document.getElementById('city').value;

    //Change Loaction 
    weather.changeLocation(city);

    // Set Loaction in Ls
    storage.setLocationdata(city);

    // get and display weather
    getweather();

    // close the modal
    $('#locModal').modal('hide');
})


function getweather(){
    weather.getWeather()
     .then(results => {
         ui.paint(results);
     })
     .catch(err => console.log(err))
}