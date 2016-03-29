'use strict';

const got = require('got'),
  cheerio = require('cheerio'),
  CallForService = require('./call-for-service');

function getCurrentCfs() {
  return got('http://www.slmpd.org/cfs.aspx')
  .then(response => parseCfs(response.body));
}

function parseCfs(body) {
  const $ = cheerio.load(body);
  const cfs = [];

  $('#gvData tr').each((index, element) => {
    const $element = $(element),
      $tds = $element.find('td'),
      cfsTime = new Date($tds.eq(0).text()),
      slmpdId = $tds.eq(1).text(),
      location = $tds.eq(2).text(),
      type = $tds.eq(3).text();

    cfs.push(
      new CallForService(cfsTime, slmpdId, location, type));
  });

  return cfs;
}

module.exports = {
  getCurrentCfs,
  parseCfs,
};
