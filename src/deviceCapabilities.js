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
     * Identifies the device's capabilities.
     * @class
     * @public
     */
    deviceCapabilities : function(){
        /**
         * @property {boolean} is device a desktop?
         * @default
         */
        this.desktop = false;
        /**
         * @property {boolean} is touch available?
         * @default
         */
        this.touch = false;
        /**
         * @property {boolean} does device support gamepad api?
         * @default
         */
        this.gamepad = false;
        /**
         * @property {boolean} is canvas supported?
         * @default
         */
        this.canvas = false;
        /**
         * @property {boolean} is device a mobile device?
         * @default
         */
        this.mobile = false;
        /**
         * @property {boolean} is device running windows?
         * @default
         */
        this.windows = false;
        /**
         * @property {boolean} is device running linux?
         * @default
         */
        this.linux = false;
        /**
         * @property {boolean} is device running mac?
         * @default
         */
        this.mac = false;
        /**
         * @property {boolean} is device running windows phone OS?
         * @default
         */
        this.windowsPhone = false;
        /**
         * @property {boolean} is device running android?
         * @default
         */
        this.android = false;
        /**
         * @property {boolean} is device running iOS?
         * @default
         */
        this.iOS = false;
        /**
         * @property {boolean} is device running WebOS?
         * @default
         */
        this.webOS = false;
        /**
         * @property {boolean} is device a Kindle?
         * @default
         */
        this.kindle = false;
        /**
         * @property {boolean} is device running Blackberry?
         * @default
         */
        this.blackberry = false;
        /**
         * @property is chrome browser?
         * @default
         */
        this.chrome = false;
        /**
         * @property is Firefox browser?
         * @default
         */
        this.fireFox = false;
        /**
         * @property is Opera browser?
         * @default
         */
        this.opera = false;
        /**
         * @property is Safari browser?
         * @default
         */
        this.safari = false;
        /**
         * @property is Edge browser?
         * @default
         */
        this.edge = false;
        /**
         * @property is IE browser?
         * @default
         */
        this.ie = false;
        /**
         * @property is chrome browser for mobile?
         * @default
         */
        this.chromeMobile = false;
        /**
         * @property is Firefox browser for mobile?
         * @default
         */
        this.fireFoxMobile = false;
        /**
         * @property is IE browser for mobile?
         * @default
         */
        this.ieMobile = false;
        /**
         * @property is edge browser for mobile?
         * @default
         */
        this.edgeMobile = false;
        /**
         * @property is android default browser?
         * @default
         */
        this.androidBrowser = false;
        /**
         * @property is silk browser for kinlde?
         * @default
         */
        this.silk = false;
        /**
         * @property is localstorage supported?
         * @default
         */
        this.localStorage = false;
        /**
         * @member {string} ua
         * @private
         */
        this.ua = navigator.userAgent.toLocaleLowerCase();

        // Check for OS of device
        if(/windows/.test(this.ua)){
            this.windows = true;
        }
        else if(/linux/.test(this.ua)){
            this.linux = true;
        }
        else if(/mac os/.test(this.ua)){
            this.mac = true;
        }
        else if(/android/.test(this.ua)){
            this.android = true;
        }
        else if(/ip[oa]d|iphone/.test(this.ua)){
            this.iOS = true;
        }
        else if(/kindle/.test(this.ua) ||/kf[a-z][a-z]+/.test(this.ua) || /silk.*mobile safari/.test(this.ua)){
            this.kindle = true;
        }
        else if(/blackberry|bb/.test(this.ua)){
            this.blackberry = true;
        }
        else if(/webos/.test(this.ua)){
            this.webOS = true;
        }

        //Windows phone gets a seperate check because it conflicts with windows pc check        
        if(/windows phone/.test(this.ua) || /iemobile/.test(this.ua)){
            this.windowsPhone = true;
            this.android = false;
            this.iOS = false;
            this.windows = false;
            this.mac = false;
        }

        // Check if device is desktop
        if(this.windows || this.linux || this.mac){
            this.desktop = true;
        }
        else{
            this.mobile = true;
        }

        //Check for browser
        if(/edge/.test(this.ua) && !this.windowsPhone){
            this.edge = true;
        }
        else if(/silk/.test(this.ua)){
            this.silk = true;
        }
        else if(/mozilla\/5\.0/.test(this.ua) && /android/.test(this.ua) && /applewebkit/.test(this.ua) && !/chrome/.test(this.ua)){
            this.androidBrowser = true;
        }
        else if(/chrome/.test(this.ua) && !/mobile safari|croios/.test(this.ua)){
            this.chrome = true;
        }
        else if(/firefox/.test(this.ua) && !/mobile|tablet/.test(this.ua)){
            this.fireFox = true;
        }
        else if(/msie|trident/.test(this.ua)){
            this.ie = true;
        }
        else if(/opera/.test(this.ua)){
            this.opera = true;
        }
        else if(/safari/.test(this.ua) && !/mobile safari/.test(this.ua)){
            this.safari = true;
        }
        else if(/edge/.test(this.ua) && this.windowsPhone){
            this.edgeMobile = true;
        }
        else if(/chrome.*mobile safari/.test(this.ua) || /chrome.*crios/.test(this.ua)){
            this.chromeMobile = true;
        }
        else if(/firefox/.test(this.ua) && /mobile|tablet/.test(this.ua)){
            this.fireFoxMobile = true;
        }
        else if(/iemobile/.test(this.ua) && /mobile|tablet/.test(this.ua)){
            this.ieMobile = true;
        }

        //Check touch support
        if('ontouchstart' in window || (window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1) || (window.navigator.msMaxTouchPoints && window.navigator.msMaxTouchPoints > 1)){
            this.touch = true;
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
    }
};