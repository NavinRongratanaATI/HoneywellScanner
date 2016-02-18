var exec = require("cordova/exec");

function HoneywellScanner() {
};

HoneywellScanner.prototype.enable = function(callback) {
  var sendResult = function(result) {
    var data = JSON.parse(result);
    callback(data);
  }
  // set up a global callback that is accessible from the native side
  exec(sendResult, null, 'HoneywellScanner', 'registerCallback', [] );
};

HoneywellScanner.prototype.disable = function() {
  delete cordova._captuvoCallback;
  exec(null, null, 'HoneywellScanner', 'disable', [] );
};

HoneywellScanner.prototype.trigger = function() {
  exec(null, null, 'HoneywellScanner', 'trigger', [] );
};

// exports
var plugin = new HoneywellScanner();
module.exports = plugin;
