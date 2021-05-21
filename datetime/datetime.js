// JavaScript function to get the current system time and date, then format them properly and display them

function datetime(){
    var date = new Date();

    var hour = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (hour > 12) {
        var suffix = " pm";
    }
    else {
        suffix = " am"
    }

    if (hour > 12 ) {
        hour = hour - 12;
    } else if (hour === 0) {
        hour = 12;
    }

    // formatting the data to make it look better on the page 
    if (mins < 10) {
        mins = "0" + mins;
    }
    else {
        mins = mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }
    else {
        secs = secs;
    }
    // adding in the day and time to the inner html 
    document.getElementById("datetime").innerHTML = (hour + ":" + mins + ":" + secs + suffix);
    document.getElementById("day").innerHTML = day + "/" + month + "/" + year;

}

setInterval('datetime()', 1000);