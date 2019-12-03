/**
 * @author Vijaykoushik S. {@link https://svijaykoushik.github.io/ | Author}
 * @copyright 2017 Vijaykoushik, S.
 * @license {@link https://github.com/svijaykoushik/device-capabilities.js/blob/master/LICENSE | MIT License}
 */

(function () {
    this.DeviceCapabilities = function () {
        /**
        * @property {boolean} desktop - is device a desktop?
        * @private
        * @default
        * @readonly
        */
        var desktop = false;

        /**
         * @property {boolean} gamepad - does device support gamepad api?
         * @private
         * @default
         * @readonly
         */
        var gamepad = false;

        /**
         * @property {boolean} canvas - is canvas supported?
         * @private
         * @default
         * @readonly
         */
        var canvas = false;

        /**
         * @property {boolean} mobile - is device a mobile device?
         * @private
         * @default
         * @readonly
         */
        var mobile = false;

        /**
         * @property {Object} OS - Object wrapper for device's Operating system. Use the OS object's properties to determine the platform on which the device runs.
         * @property {boolean} OS.linux - is device running linux?
         * @property {boolean} OS.mac - is device running mac?
         * @property {boolean} OS.windowsPhone - is device running windows phone OS?
         * @property {boolean} OS.android - is device running android?
         * @property {boolean} OS.iOS - is device running iOS?
         * @property {boolean} OS.webOS - is device running WebOS?
         * @property {boolean} OS.kindle - is device a Kindle?
         * @property {boolean} OS.blackberry - is device running Blackberry?
         * @property {boolean} OS.firefoxOS -  is device running Firefox OS?
         * @private
         * @default
         * @readonly
         */
        var OS = {
            windows: false,
            linux: false,
            mac: false,
            windowsPhone: false,
            android: false,
            iOS: false,
            webOS: false,
            kindle: false,
            blackberry: false,
            firefoxOS: false,
        };

        /**
         * @property {Object} Browser - Object wrapper for device's browser. Use the Browser object's properties to determine the current browser of the device.
         * @property {boolean} Browser.chrome -   is chrome browser?
         * @property {boolean} Browser.fireFox - is Firefox browser?
         * @property {boolean} Browser.opera - is Opera browser?
         * @property {boolean} Browser.safari - is Safari browser?
         * @property {boolean} Browser.edge - is Edge browser?
         * @property {boolean} Browser.ie - is IE browser?
         * @property {boolean} Browser.chromeMobile - is chrome browser for mobile?
         * @property {boolean} Browser.fireFoxMobile - is Firefox browser for mobile?
         * @property {boolean} Browser.ieMobile - is IE browser for mobile?
         * @property {boolean} Browser.edgeMobile - is edge browser for mobile?
         * @property {boolean} Browser.androidBrowser - is android default browser?
         * @property {boolean} Browser.silk - is silk browser for kinlde?
         * @private
         * @default
         * @readonly
         * @readonly
         */
        var Browser = {
            chrome: false,
            fireFox: false,
            opera: false,
            safari: false,
            edge: false,
            ie: false,
            chromeMobile: false,
            fireFoxMobile: false,
            ieMobile: false,
            edgeMobile: false,
            androidBrowser: false,
            silk: false
        };

        /**
         * @property {boolean} localStorage - is local storage supported?
         * @private
         * @default
         * @readonly
         */
        var localStorage = false;

        /**
         * @member {string} ua
         * @private
         * @readonly
         */
        var ua = navigator.userAgent.toLocaleLowerCase();

        /**
         * @property {Object} Sensors - Object wrapper for device's sensors. Use the Sensors object's properties to determine the different sensor apis suppported b the device.
         * @property {boolean} Sensors.geoLocation - is geolocation supported?
         * @property {boolean} Sensors.touch -  is touch available?
         * @property {boolean} Sensors.orientation -  is orientation sensor available?
         * @property {boolean} Sensors.motion -  is motion sensor available?
         * @property {boolean} Sensors.ambientLight -  is ambient light sensor available?
         * @private
         * @default
         * @readonly
         */
        var Sensors = {
            geolocation: false,
            touch: false,
            orientation: false,
            motion: false,
            ambientLight: false
        };

        // Check for OS of device
        if (/firefox/.test(ua) && !/windows/.test(ua) && !/linux/.test(ua) && !/mac os/.test(ua) && !/android/.test(ua)) {
            OS.firefoxOS = true;
        }
        else if (/windows/.test(ua)) {
            OS.windows = true;
        }
        else if (/kindle/.test(ua) || /kf[a-z][a-z]+/.test(ua) || /silk.*mobile safari/.test(ua)) {
            OS.kindle = true;
        }
        else if (/linux/.test(ua)) {
            OS.linux = true;
        }
        else if (/ip[oa]d|iphone/.test(ua)) {
            OS.iOS = true;
        }
        else if (/mac os/.test(ua)) {
            OS.mac = true;
        }
        else if (/android/.test(ua)) {
            OS.android = true;
        }
        else if (/blackberry|bb/.test(ua)) {
            OS.blackberry = true;
        }
        else if (/webos/.test(ua)) {
            OS.webOS = true;
        }

        //Windows phone gets a seperate check because it conflicts with windows pc check        
        if (/windows phone/.test(ua) || /iemobile/.test(ua)) {
            OS.windowsPhone = true;
            OS.android = false;
            OS.iOS = false;
            OS.windows = false;
            OS.mac = false;
        }

        // Check if device is desktop
        if (OS.windows || OS.linux || OS.mac) {
            desktop = true;
        }
        else {
            mobile = true;
        }

        //Check for browser
        if (/edge/.test(ua) && !OS.windowsPhone) {
            Browser.edge = true;
        }
        else if (/silk/.test(ua)) {
            Browser.silk = true;
        }
        else if (/mozilla\/5\.0/.test(ua) && /android/.test(ua) && /applewebkit/.test(ua) && !/chrome/.test(ua)) {
            Browser.androidBrowser = true;
        }
        else if (/chrome/.test(ua) && !/mobile safari|croios/.test(ua)) {
            Browser.chrome = true;
        }
        else if (/firefox/.test(ua) && !/mobile|tablet/.test(ua)) {
            Browser.fireFox = true;
        }
        else if (/msie|trident/.test(ua)) {
            Browser.ie = true;
        }
        else if (/opera/.test(ua)) {
            Browser.opera = true;
        }
        else if (/safari/.test(ua) && !/mobile safari/.test(ua)) {
            Browser.safari = true;
        }
        else if (/edge/.test(ua) && OS.windowsPhone) {
            Browser.edgeMobile = true;
        }
        else if (/chrome.*mobile safari/.test(ua) || /chrome.*crios/.test(ua)) {
            Browser.chromeMobile = true;
        }
        else if (/firefox|fxios/.test(ua) && /mobile|tablet/.test(ua)) {
            Browser.fireFoxMobile = true;
        }
        else if (/iemobile/.test(ua) && /mobile|tablet/.test(ua)) {
            Browser.ieMobile = true;
        }

        //Check touch support
        if ('ontouchstart' in window || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1) || (window.navigator.msMaxTouchPoints && window.navigator.msMaxTouchPoints > 1)) {
            Sensors.touch = true;
        }

        //Check gamepad support
        if ('getGamepads' in navigator) {
            gamepad = true;
        }

        //Check canvas support
        if ('CanvasRenderingContext2D' in window) {
            canvas = true;
        }

        //Check localStorage support
        if (!!localStorage) {
            localStorage = true;
        }

        //Check geolocation support
        if (!!navigator.geolocation) {
            Sensors.geolocation = true;
        }

        //Check orientation support
        if (!!window.ondeviceorientation) {
            Sensors.orientation = true;
        }

        //Check motion support
        if (!!window.ondevicemotion) {
            Sensors.motion = true;
        }

        //Check light sensor support
        if ('ondevicelight' in window) {
            Sensors.ambientLight = true;
        }

        /**
         * Device detection
         */

        /**
         * @class Device
         * @classdesc
         * Contains the methods to check for the detected device.
         * @private
         */
         var Device = function () {
            /**
             * @public
             * @method
             * Checks if the device is a desktop device.
             * @returns {boolean} true if device is a desktop.
             */
            this.isDesktop = function () {
                return desktop;
            }

            /**
             * @public
             * @method
             * Checks if the device is a mobile device.
             * @returns {boolean} true if device is a mobile device.
             */
            this.isMobile = function () {
                return mobile;
            }
        }

        /**
         * Platform Detection
         */

        /**
         * @class Platform
         * @classdesc
         * Contains the methods to check for the device's platform.
         * @private
         */
         var Platform = function () {

            /**
             * @public
             * @method
             * Checks if the device's platform is Windows.
             * @returns {boolean} true if the device's platform is Windows.
             */
            this.isWindowsOS = function () {
                return OS.windows;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Linux.
             * @returns {boolean} true if the device's platform is Linux.
             */
            this.isLinuxOS = function () {
                return OS.linux;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Mac.
             * @returns {boolean} true if the device's platform is Mac.
             */
            this.isMacOS = function () {
                return OS.mac;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Windows Phone.
             * @returns {boolean} true if the device's platform is Windows Phone.
             */
            this.isWindowsPhoneOS = function () {
                return OS.windowsPhone;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Android.
             * @returns {boolean} true if the device's platform is Android.
             */
            this.isAndroidOS = function () {
                return OS.android;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is iOS.
             * @returns {boolean} true if the device's platform is iOS.
             */
            this.isiOS = function () {
                return OS.iOS;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Web OS.
             * @returns {boolean} true if the device's platform is Web OS.
             */
            this.isWebOS = function () {
                return OS.webOS;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Kindle.
             * @returns {boolean} true if the device's platform is Kindle.
             */
            this.isKindleDevice = function () {
                return OS.kindle;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Blackberry.
             * @returns {boolean} true if the device's platform is Blackberry.
             */
            this.isBlackBerryDevice = function () {
                return OS.blackberry;
            }

            /**
             * @public
             * @method
             * Checks if the device's platform is Firefox OS.
             * @returns {boolean} true if the device's platform is Firefox OS.
             */
            this.isFireFoxOS = function () {
                return OS.firefoxOS;
            }
        }

        /**
         * Browser Detection
         */
        /**
         * @class WebBrowser
         * @classdesc
         * Contains the methods to check for the web browser used to access the app/ page.
         * @private
         */
         var WebBrowser = function () {
            /**
             * @public
             * @method
             * Checks if the web browser is Chrome.
             * @returns {boolean} true if the web browser is Chrome.
             */
            this.isChromeBrowser = function () {
                return Browser.chrome
            }
            
            /**
             * @public
             * @method
             * Checks if the web browser is Firefox.
             * @returns {boolean} true if the web browser is Firefox.
             */
            this.isFireFoxBrowser = function(){
                return Browser.fireFox;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Opera.
             * @returns {boolean} true if the web browser is Opera.
             */
            this.isOperaBrowser = function(){
                return Browser.opera;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Safari.
             * @returns {boolean} true if the web browser is Safari.
             */
            this.isSafariBrowser = function(){
                return Browser.safari;
            }
            
            /**
             * @public
             * @method
             * Checks if the web browser is Edge.
             * @returns {boolean} true if the web browser is Edge.
             */
            this.isEdgeBrowser = function(){
                return Browser.edge;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Internet Explorer.
             * @returns {boolean} true if the web browser is Internet Explorer.
             */
            this.isIEBrowser  = function(){
                return Browser.ie;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Chrome browser for mobile.
             * @returns {boolean} true if the web browser is Chrome browser for mobile.
             */
            this.isChromeMobileBrowser = function(){
                return Browser.chromeMobile;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Firefox for mobile.
             * @returns {boolean} true if the web browser is Firefox for mobile.
             */
            this.isFireFoxMobileBrowser = function(){
                return Browser.fireFoxMobile;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Internet Explorer for mobile.
             * @returns {boolean} true if the web browser is Internet Explorer for mobile.
             */
            this.isIEMobileBrowser  = function(){
                return Browser.ieMobile;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Edge for mobile.
             * @returns {boolean} true if the web browser is Edge for mobile.
             */
            this.isEdgeMobileBrowser = function(){
                return Browser.edgeMobile;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Android's default browser.
             * @returns {boolean} true if the web browser is Android's default browser.
             */
            this.isAndroidDefaultBrowser = function(){
                return Browser.androidBrowser;
            }

            /**
             * @public
             * @method
             * Checks if the web browser is Silk Browser.
             * @returns {boolean} true if the web browser is Silk Browser.
             */
            this.isSilkBrowser =function(){
                return Browser.silk;
            }
        }

        /**
         * API support check.
         */
        /**
         * @class API
         * @classdesc
         * Contains the methods to check for the support of browser APIs.
         * @private
         */
         var API = function(){
            /**
             * @public
             * @method
             * Checks if the browser supports local storage API.
             * @returns {boolean} true if the browser supports local storage API.
             */
            this.hasLocalStorageAPI = function(){
                return localStorage;
            }

            /**
             * @public
             * @method
             * Checks if the browser supports gamepad API.
             * @returns {boolean} true if the browser supports gamepad API.
             */
            this.hasGamepadAPI = function(){
                return gamepad;
            }

            /**
             * @public
             * @method
             * Checks if the browser supports geo-location API.
             * @returns {boolean} true if the browser supports geo-location API.
             */
            this.hasGeolocationAPI = function(){
                return Sensors.geolocation;
            }

            /**
             * @public
             * @method
             * Checks if the browser supports touch API.
             * @returns {boolean} true if the browser supports touch API.
             */
            this.hasTouchAPI = function(){
                return Sensors.touch;
            }

            /**
             * @public
             * @method
             * Checks if the browser supports device orientation API.
             * @returns {boolean} true if the browser supports device orientation API.
             */
            this.hasDeviceOrientationAPI  = function(){
                return Sensors.orientation;
            }

            /**
             * @public
             * @method
             * Checks if the browser supports device motion API.
             * @returns {boolean} true if the browser supports device motion API.
             */
            this.hasDeviceMotionAPI = function(){
                return Sensors.motion;
            }

            /**
             * @public
             * @method
             * Checks if the browser supports device light API.
             * @returns {boolean} true if the browser supports device light API.
             */
            this.hasDeviceLightAPI = function(){
                return Sensors.ambientLight;
            }

            /**
             * @public
             * @method
             * Checks if the browser supports HTML5 canvas API.
             * @returns {boolean} true if the browser supports HTML5 canvas API.
             */
            this.hasCanvasAPI = function(){
                return canvas;
            }
        }

        /**
         * Exposing the objects for the plugin's API
         */

        /**
         * @property {Object} Device - contains methods to detect the type of device (mobile or desktop).
         * @public
         */
         this.Device = new Device();

        /**
         * @property {Object} Platform - contains methods to detect the device's platform.
         * @public
         */
        this.Platform = new Platform();

        /**
         * @property {Object} WebBrowser - contains methods to detect the web browser from which the app/ page is being accessed.
         * @public
         */
        this.WebBrowser = new WebBrowser();

        /**
         * @property {Object} API - contains methods to check if a browser API is supported.
         * @public
         */
        this.API = new API();
    }
}());