var exec = require("cordova/exec");

function HoneywellScanner() {
};

HoneywellScanner.prototype.enable = function(callback) {
  // set up a global callback that is accessible from the native side
  exec(callback, null, 'HoneywellScanner', 'registerCallback', [] );
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
