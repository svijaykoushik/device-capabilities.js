
QUnit.module("Tests for Identifying the Browser");
QUnit.test("Test for Chrome Browser on Windows 10", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,true, "\"isChromeBrowser()\" Should return true if Browser is chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return false if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Firefox Browser on Linux", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (X11; Linux i686; rv:64.0) Gecko/20100101 Firefox/64.0"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser not chrome.");
    assert.strictEqual(isFireFox,true,"\"isFireFoxBrowser()\" Should return true if Browser is fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Opera Browser on Mac OS X", function(assert){
    var window = {
        navigator:{
            userAgent: "Opera/9.80 (Macintosh; Intel Mac OS X 10.14.1) Presto/2.12.388 Version/12.16"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,true,"\"isOperaBrowser()\" Should return true if Browser is opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Safari Browser on Mac OS X", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,true,"\"isSafariBrowser()\" Should return false if Browser is safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Edge Browser on Windows 10", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14931"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,true,"\"isEdgeBrowser()\" Should return false if Browser is edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for IE Browser with trident engine on Windows", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,true,"\"isIEBrowser()\" Should return false if Browser is ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for IE Browser with IE compatible version on Windows", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,true,"\"isIEBrowser()\" Should return false if Browser is ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Chrome for mobile on Android", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,true,"\"isChromeMobileBrowser()\" Should return true if Browser is chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Chrome for mobile on iOS", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,true,"\"isChromeMobileBrowser()\" Should return true if Browser is chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Firefox mobile Browser on Android", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return false if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,true,"\"isFireFoxMobileBrowser()\" Should return true if Browser is Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for IE mobile Browser on Windows Phone", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return false if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,true,"\"isIEMobileBrowser()\" Should return true if Browser is ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Edge Mobile Browser on Windows Phone", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; RM-1152) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return false if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,true,"\"isEdgeMobileBrowser()\" Should return true if Browser is edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Android default Browser on Android", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return false if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,true,"\"isAndroidDefaultBrowser()\" Should return true if Browser is android default Browser");
    assert.strictEqual(isSilk,false,"\"isSilkBrowser()\" Should return false if Browser is not silk");
});

QUnit.test("Test for Silk Browser on Linux", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.54 like Chrome/44.0.2403.63 Safari/537.36"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,true,"\"isSilkBrowser()\" Should return true if Browser is silk");
});

QUnit.test("Test for Silk Browser on Android", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Linux; U; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/44.1.54 like Chrome/44.0.2403.63 Mobile Safari/537.36"
        }
    };
    var dc = new DeviceCapabilities(window);
    var isChrome = dc.Browser.isChromeBrowser();
    var isFireFox = dc.Browser.isFireFoxBrowser();
    var isOpera = dc.Browser.isOperaBrowser();
    var isSafari = dc.Browser.isSafariBrowser();
    var isEdge =dc.Browser.isEdgeBrowser();
    var isIE = dc.Browser.isIEBrowser();
    var isChromeMobile = dc.Browser.isChromeMobileBrowser();
    var isFireFoxMobile = dc.Browser.isFireFoxMobileBrowser();
    var isIEMobile  = dc.Browser.isIEMobileBrowser();
    var isEdgeMobile = dc.Browser.isEdgeMobileBrowser();
    var isAndroidStock = dc.Browser.isAndroidDefaultBrowser();
    var isSilk = dc.Browser.isSilkBrowser();
    assert.strictEqual(isChrome,false, "\"isChromeBrowser()\" Should return false if Browser is not chrome.");
    assert.strictEqual(isFireFox,false,"\"isFireFoxBrowser()\" Should return true if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"isOperaBrowser()\" Should return false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"isSafariBrowser()\" Should return false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"isEdgeBrowser()\" Should return false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"isIEBrowser()\" Should return false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"isChromeMobileBrowser()\" Should return false if Browser is not chrome Mobile");
    assert.strictEqual(isFireFoxMobile,false,"\"isFireFoxMobileBrowser()\" Should return false if Browser is not Firefox Mobile");
    assert.strictEqual(isIEMobile,false,"\"isIEMobileBrowser()\" Should return false if Browser is not ie Mobile");
    assert.strictEqual(isEdgeMobile,false,"\"isEdgeMobileBrowser()\" Should return false if Browser is not edge Mobile");
    assert.strictEqual(isAndroidStock,false,"\"isAndroidDefaultBrowser()\" Should return false if Browser is not android default Browser");
    assert.strictEqual(isSilk,true,"\"isSilkBrowser()\" Should return true if Browser is silk");
});