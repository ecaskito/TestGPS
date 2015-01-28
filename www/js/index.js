//Location content
var lc;
//PhoneGap Ready variable
var pgr = false;

window.addEventListener('load', function () {
        document.addEventListener("deviceReady", deviceReady, false);
}, false);

function deviceReady() {
    try {
        localStorage.clear();

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
        navigator.geolocation.getCurrentPosition(onLocationSuccess1, onLocationError1, locOptions);
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
        navigator.geolocation.getCurrentPosition(onLocationSuccess2, onLocationError2, locOptions);
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
        navigator.geolocation.getCurrentPosition(onLocationSuccess3, onLocationError3, locOptions);
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
            //maximumAge : Infinity,
            //timeout : 5000,
            enableHighAccuracy : true
        };
        //get the current location
        navigator.geolocation.watchPosition(onLocationSuccess4, onLocationError4,locOptions);
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
function onLocationSuccess1(loc) {
    alert("onLocationSuccess1");
    //We received something from the API, so first get the
    // timestamp in a date object so we can work with it
    var d = new Date(loc.timestamp);
    //Then replace the page's content with the current
    // location retrieved from the API
    lc.innerHTML = '<b>Current Location</b><hr /><b>Latitude</b>: ' + loc.coords.latitude + '<br /><b>Longitude</b>: ' + loc.coords.longitude + '<br /><b>Altitude</b>: ' + loc.coords.altitude + '<br /><b>Accuracy</b>: ' + loc.coords.accuracy + '<br /><b>Altitude Accuracy</b>: ' + loc.coords.altitudeAccuracy + '<br /><b>Heading</b>: ' + loc.coords.heading + '<br /><b>Speed</b>: ' + loc.coords.speed + '<br /><b>Timestamp</b>: ' + d.toLocaleString();
}
function onLocationSuccess2(loc) {
    alert("onLocationSuccess2");
    //We received something from the API, so first get the
    // timestamp in a date object so we can work with it
    var d = new Date(loc.timestamp);
    //Then replace the page's content with the current
    // location retrieved from the API
    lc.innerHTML = '<b>Current Location</b><hr /><b>Latitude</b>: ' + loc.coords.latitude + '<br /><b>Longitude</b>: ' + loc.coords.longitude + '<br /><b>Altitude</b>: ' + loc.coords.altitude + '<br /><b>Accuracy</b>: ' + loc.coords.accuracy + '<br /><b>Altitude Accuracy</b>: ' + loc.coords.altitudeAccuracy + '<br /><b>Heading</b>: ' + loc.coords.heading + '<br /><b>Speed</b>: ' + loc.coords.speed + '<br /><b>Timestamp</b>: ' + d.toLocaleString();
}
function onLocationSuccess3(loc) {
    alert("onLocationSuccess3");
    //We received something from the API, so first get the
    // timestamp in a date object so we can work with it
    var d = new Date(loc.timestamp);
    //Then replace the page's content with the current
    // location retrieved from the API
    lc.innerHTML = '<b>Current Location</b><hr /><b>Latitude</b>: ' + loc.coords.latitude + '<br /><b>Longitude</b>: ' + loc.coords.longitude + '<br /><b>Altitude</b>: ' + loc.coords.altitude + '<br /><b>Accuracy</b>: ' + loc.coords.accuracy + '<br /><b>Altitude Accuracy</b>: ' + loc.coords.altitudeAccuracy + '<br /><b>Heading</b>: ' + loc.coords.heading + '<br /><b>Speed</b>: ' + loc.coords.speed + '<br /><b>Timestamp</b>: ' + d.toLocaleString();
}
function onLocationSuccess4(loc) {
    alert("onLocationSuccess4");
    //We received something from the API, so first get the
    // timestamp in a date object so we can work with it
    var d = new Date(loc.timestamp);
    //Then replace the page's content with the current
    // location retrieved from the API
    lc.innerHTML = '<b>Current Location</b><hr /><b>Latitude</b>: ' + loc.coords.latitude + '<br /><b>Longitude</b>: ' + loc.coords.longitude + '<br /><b>Altitude</b>: ' + loc.coords.altitude + '<br /><b>Accuracy</b>: ' + loc.coords.accuracy + '<br /><b>Altitude Accuracy</b>: ' + loc.coords.altitudeAccuracy + '<br /><b>Heading</b>: ' + loc.coords.heading + '<br /><b>Speed</b>: ' + loc.coords.speed + '<br /><b>Timestamp</b>: ' + d.toLocaleString();
}

function onLocationError(e) {
    alert("onLocationError error: #" + e.code + "\n" + e.message);
}

function onLocationError1(e) {
    alert("onLocationError1 error: #" + e.code + "\n" + e.message);
}
function onLocationError2(e) {
    alert("onLocationError2 error: #" + e.code + "\n" + e.message);
}
function onLocationError3(e) {
    alert("onLocationError3 error: #" + e.code + "\n" + e.message);
}
function onLocationError4(e) {
    alert("onLocationError4 error: #" + e.code + "\n" + e.message);
}

function callSuccess(data) {
    var swicthSuccess;
    if (data.success == true) {
        alert("GPS is enabled");
    } else {
        alert("GPS is not enabled");
    }
};

function callFailure(data) {
    alert("fail to call plugin:"+data.message);
};


function test(){
    try{
       Diagnostic = cordova.require('cordova/plugin/Diagnostic');
    }
    catch (ex){
        alert("test error 1: "+ex.message);
    }
    try{
        Diagnostic.prototype.isLocationEnabled(callSuccess,callFailure)
    }
    catch (ex){
        alert("test error 2: "+ex.message);
    }
    try{
        Diagnostic.isLocationEnabled(callSuccess,callFailure)
    }
    catch (ex){
        alert("test error 3: "+ex.message);
    }
    try{
        cordova.exec(callSuccess,
            callFailure,
            'Diagnostic',
            'isLocationEnabled',
            []);    }
    catch (ex){
        alert("test error 4: "+ex.message);
    }
}
    function test1() {
    try {

        alert("test")
        // To know if the location is turned ON/OFF and if the app is allowed to use it.
        window.plugins.diagnostic.isLocationEnabled(locationEnabledSuccessCallback, locationEnabledErrorCallback);

        function locationEnabledSuccessCallback(result) {
            alert("locationEnabledSuccessCallback");
            if (result) {
                //alert("Location ON");
                document.getElementById('location').innerHTML = 'ON';

                //alert("Location Setting ON");
                document.getElementById('locationSetting').innerHTML = 'ON';

                //alert("Auth Location ON");
                document.getElementById('locationAuthorization').innerHTML = 'ON';

                function locationAuthorizedErrorCallback(error) {
                    alert("locationAuthorizedErrorCallback error: #" + error);
                }
            }
            else {
                //alert("Location OFF");
                document.getElementById('location').innerHTML = 'OFF';
                // To know if the location is turned ON/OFF.
                window.plugins.diagnostic.isLocationEnabledSetting(locationEnabledSettingSuccessCallback, locationEnabledSettingErrorCallback);

                function locationEnabledSettingSuccessCallback(result) {
                    if (result) {
                        //alert("Location Setting ON");
                        document.getElementById('locationSetting').innerHTML = 'ON';
                    }
                    else {
                        //alert("Location Setting OFF");
                        document.getElementById('locationSetting').innerHTML = 'OFF';
                    }
                }

                function locationEnabledSettingErrorCallback(error) {
                    alert("locationEnabledSettingErrorCallback error: #" + error);
                }

                // To know if the app is allowed to use it.
                window.plugins.diagnostic.isLocationAuthorized(locationAuthorizedSuccessCallback, locationAuthorizedErrorCallback);

                function locationAuthorizedSuccessCallback(result) {
                    if (result) {
                        //alert("Auth Location ON");
                        document.getElementById('locationAuthorization').innerHTML = 'ON';
                    }
                    else {
                        //alert("Auth Location OFF");
                        document.getElementById('locationAuthorization').innerHTML = 'OFF';
                    }
                }

                function locationAuthorizedErrorCallback(error) {
                    alert("locationAuthorizedErrorCallback error: #" + error);
                }
            }
        }

        function locationEnabledErrorCallback(error) {
            alert("locationEnabledErrorCallback error: #" + error);
        }


        // To know if the WiFi is turned ON/OFF.
        window.plugins.diagnostic.isWifiEnabled(wifiEnabledSuccessCallback, wifiEnabledErrorCallback);

        function wifiEnabledSuccessCallback(result) {
            if (result) {
                //alert("WiFi ON");
                document.getElementById('wifi').innerHTML = 'ON';
            }
            else {
                //alert("WiFi OFF");
                document.getElementById('wifi').innerHTML = 'OFF';
            }
        }

        function wifiEnabledErrorCallback(error) {
            alert("wifiEnabledErrorCallback error: #" + error);
        }

        // To know if the camera is enabled.
        window.plugins.diagnostic.isCameraEnabled(cameraEnabledSuccessCallback, cameraEnabledErrorCallback);

        function cameraEnabledSuccessCallback(result) {
            if (result) {
                //alert("Camera ON");
                document.getElementById('camera').innerHTML = 'ON';
            }
            else {
                //alert("Camera OFF");
                document.getElementById('camera').innerHTML = 'OFF';
            }
        }

        function cameraEnabledErrorCallback(error) {
            alert("cameraEnabledErrorCallback error: #" + error);
        }
    }
    catch(ex) {
        alert("test error: #" +ex.message);
    }

}

function ObtenerTelefono()
{
    try{
        var telephoneNumber = cordova.require("cordova/plugin/telephonenumber");
        telephoneNumber.get(ObtenerTelefonoOK, function() {
            console.log("error");
        });
    }
    catch(ex) {
        alert("ObtenerTelefono error: " +ex.message);
    }
}
function ObtenerTelefonoOK(result)
{
    try{
        alert(result);
    }
    catch(ex) {
        alert("ObtenerTelefonoOK error: " +ex.message);
    }
}
function ObtenerTelefonoError(error)
{
    try{
        alert(error);
    }
    catch(ex) {
        alert("ObtenerTelefonoError error: " +ex.message);
    }
}