'use strict';

const slmpdCfs = require('./lib/slmpd-cfs');

module.exports = {
  getCurrentCfs: slmpdCfs.getCurrentCfs,
};
