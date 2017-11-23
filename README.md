# device-capabilities.js
A JavaScript library that detects the client device's capabilities for support of several sensors like touch, motion and orientation sesnors and also provides out of the box support for browser detection and OS detection.

## Description
Device capabilites.js is a pure javascript library loosely based on the device module in Photonstrom's Phaser framework. The library is quick and simple to use. It can identify if the device is a desktop or mobile, detect the platform the device is running on and find out the name of the browser the library is running on.

## Features
* Browser detection
* Platform detection
* Device detection
* Feature detection

**Note:** Other than "Feature detection" all other detections are based on the browser's **_User Agent String_**

### Device Detection
Device capabilities.js libray is able to detect and diffrentiate between *Desktop* and *Mobile* (Tablets are also detected as mobiles)

### Browser Detection
The library can detect the name of the current browser.

Identifiable browsers are:

**Desktop**
1. Chrome
2. Firefox
3. Internet Explorer
4. Edge
5. Opera
6. Safari

**Mobile Devices**
1. Chrome for Android and iOS.
2. Firefox for mobile.
3. IE Mobile.
4. Edge Mobile.
5. Android Native browser.
6. Silk browser for Kindle.

### Platform Detection
The library is also able to detect the platform or operating system on which device is running.

Detectable Platforms are:

1. Windows
2. Linux
3. Mac OS
4. Windows Phone
5. Android
6. iOS
7. WebOS
8. Kindle
9. Blackberry
10. Firefox OS

### Feature Detection
The library has the ability to detect the following features supported by the browser and the device.

1. HTML5 Local storage
2. HTML5 Canvas
3. Touch sensor
4. Geolocation sensor
5. Motion sensor
6. Orientation sensor
7. Ambient light sensor

## Usage
First, Download the device-capabilites.js library and include it in the html file
```html
<script src="path/to/device-capabilities.js"></script>
```
Then instantiate the deviceCapabilities class and use its properties for examining the device's capabilities.

Example:

```javascript
/* create an instace of the deviceCapabilites class*/
var devAbility = new Device.deviceCapabilities();

// Find out if the device is a desktop
if(devAbility.desktop){
    console.log("The device is a desktop");
}

// Check if the browser is chrome on a mobile device
if(devAbility.Browser.chromeMobile){
    console.log("The browser is chrome for mobile");
}

// Know if device supports touch
if(devAbility.Sensors.touch){
    console.log("The device supports touch interface");
}
```