QUnit.module("Tests for Browser API support");
QUnit.test("Test for Local storage API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        },
        localStorage: {
            get: function () { },
            set: function () { }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasLocalStorageAPI();
    assert.strictEqual(hasAPI, true, "\"hasLocalStorageAPI()\" returns true if local storage is supported");
});


QUnit.test("Test for Gamepad API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
            getGamepads: {
                get: function () { },
                set: function () { }
            }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasGamepadAPI();
    assert.strictEqual(hasAPI, true, "\"hasGamepadAPI()\" returns true if Gamepad API is supported");
});


QUnit.test("Test for Geo-location API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
            geolocation: {
                get: function () { },
                set: function () { }
            }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasGeolocationAPI();
    assert.strictEqual(hasAPI, true, "\"hasGeolocationAPI()\" returns true if Geo-location API is supported");
});


QUnit.test("Test for touch API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        },
        ontouchstart: {
            get: function () { },
            set: function () { }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasTouchAPI();
    assert.strictEqual(hasAPI, true, "\"hasTouchAPI()\" returns true if touch API is supported");
});


QUnit.test("Test for device Orientation API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        },
        ondeviceorientation: {
            get: function () { },
            set: function () { }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasDeviceOrientationAPI();
    assert.strictEqual(hasAPI, true, "\"hasDeviceOrientationAPI()\" returns true if Device orientation API is supported");
});


QUnit.test("Test for device motion API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        },
        ondevicemotion: {
            get: function () { },
            set: function () { }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasDeviceMotionAPI();
    assert.strictEqual(hasAPI, true, "\"hasTouchAPI()\" returns true if device motion API is supported");
});


QUnit.test("Test for Device light API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        },
        ondevicelight: {
            get: function () { },
            set: function () { }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasDeviceLightAPI();
    assert.strictEqual(hasAPI, true, "\"hasDeviceLightAPI()\" returns true if device API is supported");
});


QUnit.test("Test for canvas API", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        },
        CanvasRenderingContext2D: {
            get: function () { },
            set: function () { }
        }
    };

    var dc = new DeviceCapabilities(window);
    var hasAPI = dc.API.hasCanvasAPI();
    assert.strictEqual(hasAPI, true, "\"hasCanvasAPI()\" returns true if canvas API is supported");
});


QUnit.test("Testing support for all APIs available in the plugin", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36",
            geolocation: {
                get: function () { },
                set: function () { }
            },
            getGamepads: {
                get: function () { },
                set: function () { }
            }
        },
        CanvasRenderingContext2D: {
            get: function () { },
            set: function () { }
        },
        ondevicelight: {
            get: function () { },
            set: function () { }
        },
        ondevicemotion: {
            get: function () { },
            set: function () { }
        },
        ondeviceorientation: {
            get: function () { },
            set: function () { }
        },
        ontouchstart: {
            get: function () { },
            set: function () { }
        },
        localStorage: {
            get: function () { },
            set: function () { }
        }
    };

    var dc = new DeviceCapabilities(window); 
    var hasAPI = dc.API.hasLocalStorageAPI();
    assert.strictEqual(hasAPI, true, "\"hasLocalStorageAPI()\" returns true if local storage is supported");
    hasAPI = dc.API.hasGamepadAPI();
    assert.strictEqual(hasAPI, true, "\"hasGamepadAPI()\" returns true if Gamepad API is supported");
    hasAPI = dc.API.hasGeolocationAPI();
    assert.strictEqual(hasAPI, true, "\"hasGeolocationAPI()\" returns true if Geo-location API is supported");
    hasAPI = dc.API.hasTouchAPI();
    assert.strictEqual(hasAPI, true, "\"hasTouchAPI()\" returns true if touch API is supported");
    hasAPI = dc.API.hasDeviceOrientationAPI();
    assert.strictEqual(hasAPI, true, "\"hasDeviceOrientationAPI()\" returns true if Device orientation API is supported");
    hasAPI = dc.API.hasDeviceMotionAPI();
    assert.strictEqual(hasAPI, true, "\"hasTouchAPI()\" returns true if device motion API is supported");
    hasAPI = dc.API.hasDeviceLightAPI();
    assert.strictEqual(hasAPI, true, "\"hasDeviceLightAPI()\" returns true if device API is supported");
    hasAPI = dc.API.hasCanvasAPI();
    assert.strictEqual(hasAPI, true, "\"hasCanvasAPI()\" returns true if canvas API is supported");
});


QUnit.test("Testing support for unavailability of API support", function (assert) {
    var window = {
        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        }
    };

    var dc = new DeviceCapabilities(window); 
    var hasAPI = dc.API.hasLocalStorageAPI();
    assert.strictEqual(hasAPI, false, "\"hasLocalStorageAPI()\" returns false if local storage is not supported");
    hasAPI = dc.API.hasGamepadAPI();
    assert.strictEqual(hasAPI, false, "\"hasGamepadAPI()\" returns false if Gamepad API is not supported");
    hasAPI = dc.API.hasGeolocationAPI();
    assert.strictEqual(hasAPI, false, "\"hasGeolocationAPI()\" returns false if Geo-location API is not supported");
    hasAPI = dc.API.hasTouchAPI();
    assert.strictEqual(hasAPI, false, "\"hasTouchAPI()\" returns false if touch API is not supported");
    hasAPI = dc.API.hasDeviceOrientationAPI();
    assert.strictEqual(hasAPI, false, "\"hasDeviceOrientationAPI()\" returns false if Device orientation API is not supported");
    hasAPI = dc.API.hasDeviceMotionAPI();
    assert.strictEqual(hasAPI, false, "\"hasTouchAPI()\" returns false if device motion API is not supported");
    hasAPI = dc.API.hasDeviceLightAPI();
    assert.strictEqual(hasAPI, false, "\"hasDeviceLightAPI()\" returns false if device API is not supported");
    hasAPI = dc.API.hasCanvasAPI();
    assert.strictEqual(hasAPI, false, "\"hasCanvasAPI()\" returns false if canvas API is not supported");
});
