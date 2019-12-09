
QUnit.module("Tests for Device's Platform Identification")

QUnit.test("Test for windows Platform", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isWindows,true, "\"isWindowsOS()\" Should return true if device is windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for Linux", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isLinux,true,"\"isLinuxOS()\" Should return true if device is Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for Mac Platform", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac Platform X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isMac,true,"\"isMacOS()\" Should return true if device  Mac");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for windows phone Platform with Microsoft Lumia 950", function(assert){
        var window = {
            navigator:{
                userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058"
            }
        };
        var dc = new DeviceCapabilities(window);
        var isWindows = dc.Platform.isWindowsOS();
        var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
        var isLinux = dc.Platform.isLinuxOS();
        var isMac = dc.Platform.isMacOS();
        var isAndroid =dc.Platform.isAndroidOS();
        var isIOS = dc.Platform.isiOS();
        var isWebOS = dc.Platform.isWebOS();
        var isKindle = dc.Platform.isKindleDevice();
        var isBB  = dc.Platform.isBlackBerryDevice();
        var isFireFoxOS = dc.Platform.isFireFoxOS();
        assert.strictEqual(isWindowsPhone,true,"\"isWindowsPhoneOS()\" Should return false if device is windows phone");
        assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return true if device is not windows.");
        assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
        assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
        assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
        assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
        assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
        assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
        assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
        assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for windows phone Platform with Microsoft Lumia 550", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; RM-1127_16056) AppleWebKit/537.36(KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.10536"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isWindowsPhone,true,"\"isWindowsPhoneOS()\" Should return false if device is windows phone");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return true if device is not windows.");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for windows phone Platform with Microsoft Lumia 650", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; RM-1152) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isWindowsPhone,true,"\"isWindowsPhoneOS()\" Should return false if device is windows phone");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return true if device is not windows.");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for Android with HTC One M9", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; Android 6.0; HTC One M9 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.3"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isAndroid,true,"\"isAndroidOS()\" Should return true if device is Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for Android with Sony Xperia Z5", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; E6653 Build/32.2.A.0.253) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isAndroid,true,"\"isAndroidOS()\" Should return true if device is Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for Android with Nexus 6P", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isAndroid,true,"\"isAndroidOS()\" Should return true if device is Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for Android with Samsung Galaxy S6 Edge Plus", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isAndroid,true,"\"isAndroidOS()\" Should return true if device is Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for iOS with Apple iPhone 6", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Apple-iPhone7C2/1202.466; U; CPU like Mac Platform X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isIOS,true,"\"isiOS()\" Should return true if device is iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for iOS with Apple iPhone 7", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (iPhone9,3; U; CPU iPhone Platform 10_0_1 like Mac Platform X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14A403 Safari/602.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isIOS,true,"\"isiOS()\" Should return true if device is iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for iOS with Apple iPhone 8", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone Platform 11_0 like Mac Platform X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isIOS,true,"\"isiOS()\" Should return true if device is iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for iOS with Apple iPhone X", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone Platform 11_0 like Mac Platform X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isIOS,true,"\"isiOS()\" Should return true if device is iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for iOS with Apple iPhone XS Max (Firefox)", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone Platform 12_0 like Mac Platform X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/13.2b11866 Mobile/16A366 Safari/605.1.15"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isIOS,true,"\"isiOS()\" Should return true if device is iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for iOS with Apple iPhone XS (Chrome)", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone Platform 12_0 like Mac Platform X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/69.0.3497.105 Mobile/15E148 Safari/605.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isIOS,true,"\"isiOS()\" Should return true if device is iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});
    
QUnit.test("Test for iOS with Apple iPhone XR (Safari)", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone Platform 12_0 like Mac Platform X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isIOS,true,"\"isiOS()\" Should return true if device is iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for webOS", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; webOS/2.2.4; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.56 Safari/534.6 P160UNA/1.0"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isWebOS,true,"\"isWebOS()\" Should return true if device is web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for webOS with HP Tablet", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isWebOS,true,"\"isWebOS()\" Should return true if device is web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for Kindle with Monochrome Kindle", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate)"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isKindle,true,"\"isKindleDevice()\" Should return true if device is Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for Kindle with Kindle Fire in Silk mode", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate)"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isKindle,true,"\"isKindleDevice()\" Should return true if device is Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for Kindle with Kindle Fire", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Kindle Fire Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isKindle,true,"\"isKindleDevice()\" Should return true if device is Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for Kindle with Kindle Fire in Silk mode", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate)"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isKindle,true,"\"isKindleDevice()\" Should return true if device is Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for BlackBerry with BlackBerry 9900", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isBB,true,"\"isBlackBerryDevice()\" Should return true if device is Black Berry Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for BlackBerry with BlackBerry 9000", function(assert){
    var window = {
        navigator:{
            userAgent: "BlackBerry 9000: BlackBerry9000/4.6.0.65 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isBB,true,"\"isBlackBerryDevice()\" Should return true if device is Black Berry Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for BlackBerry with BlackBerry 10 Platform", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (BB10; <Device Model>) AppleWebKit/<WebKit Version> (KHTML, like Gecko) Version/<BB Version #> Mobile Safari/<WebKit Version>"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isBB,true,"\"isBlackBerryDevice()\" Should return true if device is Black Berry Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
    assert.strictEqual(isFireFoxOS,false,"\"isFireFoxOS()\" Should return false if device is not FireFox Platform");
});

QUnit.test("Test for Firefox Platform", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isWindows = dc.Platform.isWindowsOS();
    var isWindowsPhone = dc.Platform.isWindowsPhoneOS();
    var isLinux = dc.Platform.isLinuxOS();
    var isMac = dc.Platform.isMacOS();
    var isAndroid =dc.Platform.isAndroidOS();
    var isIOS = dc.Platform.isiOS();
    var isWebOS = dc.Platform.isWebOS();
    var isKindle = dc.Platform.isKindleDevice();
    var isBB  = dc.Platform.isBlackBerryDevice();
    var isFireFoxOS = dc.Platform.isFireFoxOS();
    assert.strictEqual(isFireFoxOS,true,"\"isFireFoxOS()\" Should return true if device is FireFox Platform");
    assert.strictEqual(isBB,false,"\"isBlackBerryDevice()\" Should return false if device is not Black Berry Platform");
    assert.strictEqual(isKindle,false,"\"isKindleDevice()\" Should return false if device is not Kindle device");
    assert.strictEqual(isWebOS,false,"\"isWebOS()\" Should return false if device is not web Platform");
    assert.strictEqual(isIOS,false,"\"isiOS()\" Should return false if device is not iOS");
    assert.strictEqual(isAndroid,false,"\"isAndroidOS()\" Should return false if device is not Android");
    assert.strictEqual(isLinux,false,"\"isLinuxOS()\" Should return false if device is not Linux distro");
    assert.strictEqual(isWindows,false, "\"isWindowsOS()\" Should return false if device is not windows.");
    assert.strictEqual(isWindowsPhone,false,"\"isWindowsPhoneOS()\" Should return false if device is not windows phone");
    assert.strictEqual(isMac,false,"\"isMacOS()\" Should return false if device is not Mac");
});