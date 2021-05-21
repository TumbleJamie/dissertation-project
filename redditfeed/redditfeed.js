var count = 0;

var titles = [];

var titleDiv = document.getElementById('title');

// URL from where the data will be taken
let url = 'http://www.reddit.com/r/UpliftingNews.json';

// Checking data is present, if so it is added to an array 
if(url){
    fetch(url, { mode: 'no-cors', credentials: 'include' })
    .then(function(data){
        return data.json()
    })
    .then(body=>
    {
        for (var i = 1; i < body.data.children.length; i++)
        {
            if(body.data.children[i].data.title!='null')
            {
                titles.push(body.data.children[i].data.title);     
                
                // used for testing purposes
                console.log(titles);   
            }

        }
        loopTitles();
    })
} 

// Looping through the array and displaying in the inner html 
function loopTitles(){
titleDiv.innerText = titles[count % titles.length];
count += 1;
}

setInterval(loopTitles, 30000);
