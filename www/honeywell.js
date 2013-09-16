cordova.define("cordova/plugin/HoneywellScanner",

  function (require, exports, module) {

    var exec = require("cordova/exec");

    function HoneywellScanner() {
    };

    HoneywellScanner.prototype.scan = function(onSuccess, onError) {
      exec(onSuccess, onError, 'HoneywellScanner', 'scan' );
    };

    // exports
    var plugin = new HoneywellScanner();
    module.exports = plugin;
  });


