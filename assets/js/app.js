var IMGURER = IMGURER || {};

// this function runs at startup and attaches to the 'deviceready' event
// which is fired by PhoneGap when the hardware is ready for native API
// calls. It is self invoking and will run immediately when this script file is 
// loaded.
(function(application) {
    if (navigator.userAgent.indexOf('Browzr') > -1) {
        // blackberry
        setTimeout(application, 250)	
    } else {
        // attach to deviceready event, which is fired when phonegap is all good to go.
        $(document).bind('deviceready', IMGURER.run);
    }
})();

IMGURER.run = function() {

    var app = new kendo.mobile.Application(document.body);

    $("#imgur-key-request").data("kendoMobileModalView").open();

};