var exec = require("cordova/exec"),
cordova = require('cordova');

var HoneywellScanner = function() {
};

HoneywellScanner.prototype.enable = function(callback) {
  var sendResult = function(result) {
    var data = JSON.parse(result);
    callback(data);
  }
  // set up a global callback that is accessible from the native side
  cordova.exec(sendResult, null, 'HoneywellScanner', 'registerCallback', []);
};

HoneywellScanner.prototype.disable = function() {
  delete cordova._captuvoCallback;
  cordova.exec(null, null, 'HoneywellScanner', 'disable', []);
};

HoneywellScanner.prototype.trigger = function() {
  cordova.exec(null, null, 'HoneywellScanner', 'trigger', []);
};

// exports
var honeyScanner = new HoneywellScanner();
module.exports = honeyScanner;
