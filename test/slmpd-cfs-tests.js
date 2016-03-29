'use strict';

const fs = require('fs'),
  path = require('path'),
  should = require('should'),
  slmpdCfs = require('../lib/slmpd-cfs');

describe('slmpdCfs', () => {
  let html = '';

  before(done => {
    const htmlPath = path.join(__dirname, '/html/cfs-test.html');

    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      html = data;
      done();
    });
  });

  describe('parseCfs', () => {
    it('should have 5 items', () => {
      const cfs = slmpdCfs.parseCfs(html);

      cfs.length.should.be.equal(5);
    });
    it('should parse out the correct fields', () => {
      const cfs = slmpdCfs.parseCfs(html),
        first = cfs[0],
        expectedDate = new Date('2016-03-28 23:48:07'),
        expectedId = 'P1000000001',
        expectedLocation = '31XX MAIN ST',
        expectedType = 'Littering';

      first.dateTime.getTime().should.be.equal(expectedDate.getTime());
      first.slmpdId.should.be.equal(expectedId);
      first.location.should.be.equal(expectedLocation);
      first.type.should.be.equal(expectedType);
    });
  });
});
