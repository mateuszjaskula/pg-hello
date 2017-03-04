function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
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
