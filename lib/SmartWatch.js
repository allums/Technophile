var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

var SmartWatch = function() {

	Watch.call(this);
};

function extend(destination, source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            destination[k] = source[k];
        }
    }
    return destination;
}
extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;