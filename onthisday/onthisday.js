// Getting the system date and month

var date = new Date();
var count = 0;

var day = date.getDate();
var month = date.getMonth() + 1;

var titles = [];

var titleDiv = document.getElementById('title');

// URL used to get the historical data
let url = "https://history.muffinlabs.com/date" + '/' + month + '/' + day;


// fetching the data, ensuring the data isn't empty, then adding it into an array
if(url){
    fetch(url, { mode: 'no-cors', credentials: 'include' })
    .then(function(data){
        return data.json()
    })
    .then(body=>
    {
        for (var i = 0; i < body.data.Events.length; i++)
        {
            if(body.data.Events[i].text!='null')
            {
                titles.push(body.data.Events[i].text + " " + body.data.Events[i].year);   
                                              
            }

        }
        loopTitles();
    })
} 

// loops through the array of historial data
function loopTitles(){
titleDiv.innerText = titles[count % titles.length];
count += 1;
}

// displays a new index of the array after a certain amount of time 
setInterval(loopTitles, 30000);
