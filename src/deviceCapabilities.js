/**
 * @author Vijaykoushik S. {@link https://svijaykoushik.github.io/ | Author}
 * @copyright 2017 Vijaykoushik, S.
 * @license {@link https://github.com/svijaykoushik/device-capabilities.js/blob/master/LICENSE | MIT License}
 */
/**
 * Device namespace.
 * Holds the device capabilities class.
 * @namespace
 */
var Device = {
    /**
     * @classdesc
     * Detects the device and Identifies the device's capabilities.
     * @class
     * @public
     */
    deviceCapabilities : function(){
        /**
         * @property {boolean} desktop - is device a desktop?
         * @public
         * @default
         * @readonly
         */
        this.desktop = false;
        /**
         * @property {boolean} gamepad - does device support gamepad api?
         * @public
         * @default
         * @readonly
         */
        this.gamepad = false;
        /**
         * @property {boolean} canvas - is canvas supported?
         * @public
         * @default
         * @readonly
         */
        this.canvas = false;
        /**
         * @property {boolean} mobile - is device a mobile device?
         * @public
         * @default
         * @readonly
         */
        this.mobile = false;
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
         * @public
         * @default
         * @readonly
         */
        this.OS = {
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
         * @public
         * @default
         * @readonly
         * @readonly
         */
        this.Browser = {
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
         * @property {boolean} localStorage - is localstorage supported?
         * @public
         * @default
         * @readonly
         */
        this.localStorage = false;
        /**
         * @member {string} ua
         * @private
         * @readonly
         */
        this.ua = navigator.userAgent.toLocaleLowerCase();
        /**
         * @property {Object} Sensors - Object wrapper for device's sensors. Use the Sensors object's properties to determine the different sensor apis suppported b the device.
         * @property {boolean} Sensors.geoLocation - is geolocation supported?
         * @property {boolean} Sensors.touch -  is touch available?
         * @property {boolean} Sensors.orientation -  is orientation sensor available?
         * @property {boolean} Sensors.motion -  is motion sensor available?
         * @property {boolean} Sensors.ambientlight -  is ambient light sensor available?
         * @public
         * @default
         * @readonly
         */
        this.Sensors = {
            geolocation: false,
            touch: false,
            orientation: false,
            motion: false,
            ambientlight: false
        };

        // Check for OS of device
        if(/firefox/.test(this.ua) && !/windows/.test(this.ua) && !/linux/.test(this.ua) && !/mac os/.test(this.ua) &&!/android/.test(this.ua)){
            this.OS.firefoxOS = true;
        }
        else if(/windows/.test(this.ua)){
            this.OS.windows = true;
        }
        else if(/kindle/.test(this.ua) ||/kf[a-z][a-z]+/.test(this.ua) || /silk.*mobile safari/.test(this.ua)){
            this.OS.kindle = true;
        }
        else if(/linux/.test(this.ua)){
            this.OS.linux = true;
        }
        else if(/ip[oa]d|iphone/.test(this.ua)){
            this.OS.iOS = true;
        }
        else if(/mac os/.test(this.ua)){
            this.OS.mac = true;
        }
        else if(/android/.test(this.ua)){
            this.OS.android = true;
        }
        else if(/blackberry|bb/.test(this.ua)){
            this.OS.blackberry = true;
        }
        else if(/webos/.test(this.ua)){
            this.OS.webOS = true;
        }

        //Windows phone gets a seperate check because it conflicts with windows pc check        
        if(/windows phone/.test(this.ua) || /iemobile/.test(this.ua)){
            this.OS.windowsPhone = true;
            this.OS.android = false;
            this.OS.iOS = false;
            this.OS.windows = false;
            this.OS.mac = false;
        }

        // Check if device is desktop
        if(this.OS.windows || this.OS.linux || this.OS.mac){
            this.desktop = true;
        }
        else{
            this.mobile = true;
        }

        //Check for browser
        if(/edge/.test(this.ua) && !this.OS.windowsPhone){
            this.Browser.edge = true;
        }
        else if(/silk/.test(this.ua)){
            this.Browser.silk = true;
        }
        else if(/mozilla\/5\.0/.test(this.ua) && /android/.test(this.ua) && /applewebkit/.test(this.ua) && !/chrome/.test(this.ua)){
            this.Browser.androidBrowser = true;
        }
        else if(/chrome/.test(this.ua) && !/mobile safari|croios/.test(this.ua)){
            this.Browser.chrome = true;
        }
        else if(/firefox/.test(this.ua) && !/mobile|tablet/.test(this.ua)){
            this.Browser.fireFox = true;
        }
        else if(/msie|trident/.test(this.ua)){
            this.Browser.ie = true;
        }
        else if(/opera/.test(this.ua)){
            this.Browser.opera = true;
        }
        else if(/safari/.test(this.ua) && !/mobile safari/.test(this.ua)){
            this.Browser.safari = true;
        }
        else if(/edge/.test(this.ua) && this.OS.windowsPhone){
            this.Browser.edgeMobile = true;
        }
        else if(/chrome.*mobile safari/.test(this.ua) || /chrome.*crios/.test(this.ua)){
            this.Browser.chromeMobile = true;
        }
        else if(/firefox|fxios/.test(this.ua) && /mobile|tablet/.test(this.ua)){
            this.Browser.fireFoxMobile = true;
        }
        else if(/iemobile/.test(this.ua) && /mobile|tablet/.test(this.ua)){
            this.Browser.ieMobile = true;
        }

        //Check touch support
        if('ontouchstart' in window || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1) || (window.navigator.msMaxTouchPoints && window.navigator.msMaxTouchPoints > 1)){
            this.Sensors.touch = true;
        }

        //Check gamepad support
        if('getGamepads' in navigator){
            this.gamepad = true;
        }

        //Check canvas support
        if('CanvasRenderingContext2D' in window){
            this.canvas = true;
        }

        //Check localStorage support
        if(!!localStorage){
            this.localStorage = true;
        }

        //Check geolocation support
        if(!!navigator.geolocation){
            this.Sensors.geolocation = true;
        }

        //Check orientation support
        if(!!window.ondevicemotion){
            this.Sensors.orientation = true;
        }
        
        //Check motion support
        if(!!window.ondevicemotion){
            this.Sensors.motion = true;
        }
        
        //Check light sensor support
        if('ondevicelight' in window){
            this.Sensors.ambientlight = true;
        }
    }
};
//# sourceURL = devicecapabilites.js