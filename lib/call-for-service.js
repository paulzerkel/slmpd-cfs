'use strict';

class CallForService {
  constructor(dateTime, slmpdId, location, type) {
    this.dateTime = dateTime;
    this.slmpdId = slmpdId;
    this.location = location;
    this.type = type;
  }

  fixLocation() {
    return this.location.replace('XX', '50');
  }
}

module.exports = CallForService;
