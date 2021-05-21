var count = 0;

var titles = [];

// Inner HTML 
var imageDiv = document.getElementById('image');

// URL where the images are taken from 
let url = 'http://www.reddit.com/r/EarthPorn.json';

// Ensuring data is not empty, then adding it into an array
if(url){
    fetch(url, { mode: 'no-cors', credentials: 'include' })
    .then(function(data){
        return data.json()
    })
    .then(body=>
    {
        for (var i = 2; i < body.data.children.length; i++)
        {
            if(body.data.children[i].data.image!='null')
            {
                titles.push(body.data.children[i].data.url_overridden_by_dest);       
                 
            }

        }
        loopTitles();
    })
} 

// Looping through the array of images
function loopTitles(){
imageDiv.src = titles[count % titles.length];
count += 1;
}

setInterval(loopTitles, 30000);
