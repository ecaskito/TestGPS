//Location content
var lc;
//PhoneGap Ready variable
var pgr = false;

window.addEventListener('load', function () {
        document.addEventListener("deviceReady", deviceReady, false);
}, false);

function deviceReady() {
    try {
        //Get a handle we'll use to adjust the accelerometer
        //content
        lc = document.getElementById("locationInfo");
        //Set the variable that lets other parts of the program
        //know that PhoneGap is initialized
        pgr = true;
    }
    catch (ex) {
        alert("deviceReady error: "+ex.message);
    }
}

function getLocation() {
    alert("getLocation");
    if(pgr == true) {
        var locOptions = {
            maximumAge : 0,
            timeout : 5000,
            enableHighAccuracy : false
        };
        //get the current location
        navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, locOptions);
        //Clear the current location while we wait for a reading
        lc.innerHTML = "Reading location...";

    } else {
        alert("Please wait,\nPhoneGap is not ready.");
    }
}
function getLocation1() {
    alert("getLocation1");
    if(pgr == true) {
        var locOptions = {
            maximumAge : 0,
            timeout : 5000,
            enableHighAccuracy : true
        };
        //get the current location
        navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, locOptions);
        //Clear the current location while we wait for a reading
        lc.innerHTML = "Reading location...";

    } else {
        alert("Please wait,\nPhoneGap is not ready.");
    }
}
function getLocation2() {
    alert("getLocation2");
    if(pgr == true) {
        var locOptions = {
            maximumAge : Infinity,
            timeout : 5000,
            enableHighAccuracy : false
        };
        //get the current location
        navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, locOptions);
        //Clear the current location while we wait for a reading
        lc.innerHTML = "Reading location...";

    } else {
        alert("Please wait,\nPhoneGap is not ready.");
    }
}
function getLocation3() {
    alert("getLocation3");
    if(pgr == true) {
        var locOptions = {
            maximumAge : Infinity,
            timeout : 5000,
            enableHighAccuracy : true
        };
        //get the current location
        navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, locOptions);
        //Clear the current location while we wait for a reading
        lc.innerHTML = "Reading location...";

    } else {
        alert("Please wait,\nPhoneGap is not ready.");
    }
}
function getLocation4() {
    alert("getwatchPosition4");
    if(pgr == true) {
        var locOptions = {
            maximumAge : Infinity,
            timeout : 5000,
            enableHighAccuracy : false
        };
        //get the current location
        navigator.geolocation.watchPosition(onLocationSuccess, onLocationError);
        //Clear the current location while we wait for a reading
        lc.innerHTML = "Reading location...";

    } else {
        alert("Please wait,\nPhoneGap is not ready.");
    }
}

function onLocationSuccess(loc) {
    alert("onLocationSuccess");
    //We received something from the API, so first get the
    // timestamp in a date object so we can work with it
    var d = new Date(loc.timestamp);
    //Then replace the page's content with the current
    // location retrieved from the API
    lc.innerHTML = '<b>Current Location</b><hr /><b>Latitude</b>: ' + loc.coords.latitude + '<br /><b>Longitude</b>: ' + loc.coords.longitude + '<br /><b>Altitude</b>: ' + loc.coords.altitude + '<br /><b>Accuracy</b>: ' + loc.coords.accuracy + '<br /><b>Altitude Accuracy</b>: ' + loc.coords.altitudeAccuracy + '<br /><b>Heading</b>: ' + loc.coords.heading + '<br /><b>Speed</b>: ' + loc.coords.speed + '<br /><b>Timestamp</b>: ' + d.toLocaleString();
}

function onLocationError(e) {
    alert("Geolocation error: #" + e.code + "\n" + e.message);
}

