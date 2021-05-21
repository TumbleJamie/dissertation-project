function findWeather(){

    // Current weather using open weather map 
    fetch('https://api.openweathermap.org/data/2.5/weather?id=2639912&appid=5430eb58bbe8c7a31e32a7c648db0b0e').then(function(response){
        return response.json()
    }).then(function(data){
        displayWeather(data);
    });
}

function displayWeather(weatherData){
    // Getting the icons and the temp
    var cel = Math.round(parseFloat(weatherData.main.temp) - 273.15);

    var icon = weatherData.weather[0].icon;

    var iconURL = "http://openweathermap.org/img/w/" + icon + ".png";

    // Adding to various inner HTML elements
    
    document.getElementById('desc').innerHTML = weatherData.weather[0].description;

    $('#weather-icon').attr('src', iconURL);

    document.getElementById('temp').innerHTML = cel + '&deg;';

    document.getElementById('loc').innerHTML = weatherData.name;

}

// Used for testing purposes - left in just in case

function findWeatherForecast(){

    fetch('https://api.openweathermap.org/data/2.5/forecast?id=2639912&appid=5430eb58bbe8c7a31e32a7c648db0b0e').then(function(response){
        return response.json()
    }).then(function(data2){
        displayWeatherForecast(data2);
    });
}

findWeather();