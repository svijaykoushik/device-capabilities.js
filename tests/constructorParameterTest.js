QUnit.module("Tests for Constructor parameter");


QUnit.test("Test for absence of navigator property in constructor parameter", function (assert) {
    var window = {
    };

    assert.throws(function(){
        var dc = new DeviceCapabilities(window);
    },"Exception is thrown because the constructor parameter does not have \"navigator\" property");
});


QUnit.test("Test for absence of userAgent property in constructor parameter", function (assert) {
    var window = {
    };

    assert.throws(function(){
        var dc = new DeviceCapabilities(window);
    },"Exception is thrown because the constructor parameter does not have \"navigator.userAgent\" property");
});