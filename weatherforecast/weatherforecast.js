function findWeather(){
    // Getting all the weather information using open weather map 
    fetch('https://api.openweathermap.org/data/2.5/forecast?id=2639912&appid=5430eb58bbe8c7a31e32a7c648db0b0e').then(function(response){
        return response.json()
    }).then(function(data){
        displayWeather(data);
    });
}


function displayWeather(weatherData){
    var toAdd = document.createDocumentFragment();

    for (var i = 0; i < 5; i++){
        // Converting temp to celcius 
        var cel = Math.round(parseFloat(weatherData.list[i].main.temp) - 273.15);

        // Icon not used due to HCI choices
        var icon = weatherData.list[i].weather.icon;

        // Creating inner html divs to display the content of the aray
        var container = document.createElement('div');
        container.id = 'container' + i;
    
        // Appending the data to the newly made div elemts
        var newDIV = document.createElement('div');
        newDIV.id='desc' + i;
        var newDiv2 = document.createElement('div');
        newDiv2.id='weather' + i;
        toAdd.appendChild(container);
        toAdd.appendChild(newDIV);
        toAdd.appendChild(newDiv2);

        document.body.appendChild(container);
        document.getElementById('container' + i).appendChild(toAdd);
        document.getElementById('desc' + i).innerHTML = weatherData.list[i].weather[0].description;
        document.getElementById('weather' + i).innerHTML = cel + '&deg;' + '\n';

        // USED FOR TESTING PURPOSES HOWEVER DUE TO HCI FACTORS WERE NOT USED IN FINAL DESIGN
        //var iconURL = "http://openweathermap.org/img/w/" + icon + ".png";
        //$('#weather-icon').attr('src', iconURL);

        //document.getElementById('temp').innerHTML = cel + '&deg;';

    }
}

findWeather();