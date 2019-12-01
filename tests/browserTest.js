QUnit.test("Test for Chrome Browser on Windows 10", function(assert){
    var window = {
        navigator:{
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36"
        }
    };
    var dc = new Device.deviceCapabilities(window);
    var isChrome = dc.Browser.chrome;
    var isFireFox = dc.Browser.fireFox;
    var isOpera = dc.Browser.opera;
    var isSafari = dc.Browser.safari;
    var isEdge =dc.Browser.edge;
    var isIE = dc.Browser.ie;
    var isChromeMobile = dc.Browser.chromeMobile;
    var isFireFoxMobile = dc.Browser.fireFoxMobile;
    var isIEMobile  = dc.Browser.ieMobile;
    var isEdgeMobile = dc.Browser.edgeMobile;
    var isAndoridStock = dc.Browser.androidBrowser;
    var isSilk = dc.Browser.silk;
    assert.strictEqual(isChrome,true, "\"chrome\" Should be true if Browser chrome.");
    assert.strictEqual(isFireFox,false,"\"fireFox\" Should be false if Browser is not fireFox");
    assert.strictEqual(isOpera,false,"\"opera\" Should be false if Browser is not opera");
    assert.strictEqual(isSafari,false,"\"safari\" Should be false if Browser is not safari");
    assert.strictEqual(isEdge,false,"\"edge\" Should be false if Browser is not edge");
    assert.strictEqual(isIE,false,"\"ie\" Should be false if Browser is not ie");
    assert.strictEqual(isChromeMobile,false,"\"chromeMobile\" Should be false if Browser is not chromeMobile");
    assert.strictEqual(isFireFoxMobile,false,"\"fireFoxMobile\" Should be false if Browser is not fireFoxMobile");
    assert.strictEqual(isIEMobile,false,"\"ieMobile\" Should be false if Browser is not ieMobile");
    assert.strictEqual(isEdgeMobile,false,"\"edgeMobile\" Should be false if Browser is not edgeMobile");
    assert.strictEqual(isAndoridStock,false,"\"androidBrowser\" Should be false if Browser is not androidBrowser");
    assert.strictEqual(isSilk,false,"\"silk\" Should be false if Browser is not silk");
});