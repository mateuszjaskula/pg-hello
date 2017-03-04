function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
//        navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function deviceInfo() {

//	info =  'Hi, I am your smartphone :-)' + '\n' +
//			'=====' + '\n' +
//			'Device Name    : '     + device.name     + '\n' + 
//			'Device Cordova : '  + device.cordova + '\n' + 
//			'Device Platform: ' + device.platform + '\n' + 
//			'Device UUID    : '     + device.uuid     + '\n' + 
//			'Device Model   : '    + device.model     + '\n' + 
//			'Device Version : '  + device.version  + '\n';
        info =  'Hi, its my business card' + '\n' +
		'Name    : Mateusz' + '\n' +
	        'Surname : Jaskula' + '\n' +
	        'email   : jaskula92@gmail.com' + '\n' +
	        'Field of study: Applied Informatics' + '\n';	

	navigator.notification.alert(info);
	
}

function checkConnection() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
 
    alert('Connection type: ' + states[networkState]);
}
 
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

var options = { frequency: 3000 };  // Update every 3 seconds

// display the address information for all contacts 
 
function onSuccess(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        for (var j = 0; j < contacts[i].addresses.length; j++) {
            alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                "Type: "           + contacts[i].addresses[j].type          + "\n" +
                "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                "Region: "         + contacts[i].addresses[j].region        + "\n" +
                "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                "Country: "        + contacts[i].addresses[j].country);
        }
    }
};
 
function onError(contactError) {
    alert('onError!');
};
 


function deviceInfo() {

	// find all contacts 
	var options = new ContactFindOptions();
	options.filter = "";
	options.multiple = true;
	Var filter = ["displayName", "addresses"];
	navigator.contacts.find(filter, onSuccess, onError, options);
	
}