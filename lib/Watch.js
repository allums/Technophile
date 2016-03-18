var Watch = function() {

    this.bodyPart = '';

}

Watch.prototype.wear = function(bodyPart) {
    return this.bodyPart = bodyPart;

};

module.exports = Watch;