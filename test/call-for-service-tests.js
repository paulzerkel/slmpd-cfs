'use strict';

const should = require('should'),
  CallForService = require('../lib/call-for-service');

describe('CallForService', () => {
  describe('constructor', () => {
    it('should create a new CallForService', () => {
      const callForService = new CallForService();

      should.exist(callForService);
    });
    it('should accept values', () => {
      const dateTime = Date.now(),
        slmpdId = '1',
        location = 'location',
        type = 'type';
      const callForService = new CallForService(
        dateTime, slmpdId, location, type);

      callForService.dateTime.should.be.equal(dateTime);
      callForService.slmpdId.should.be.equal(slmpdId);
      callForService.location.should.be.equal(location);
      callForService.type.should.be.equal(type);
    });
  });

  describe('dateTime', () => {
    it('should exist', () => {
      const callForService = new CallForService();

      callForService.should.have.property('dateTime');
    });
  });

  describe('slmpdId', () => {
    it('should exist', () => {
      const callForService = new CallForService();

      callForService.should.have.property('slmpdId');
    });
  });

  describe('location', () => {
    it('should exist', () => {
      const callForService = new CallForService();

      callForService.should.have.property('location');
    });
  });

  describe('type', () => {
    it('should exist', () => {
      const callForService = new CallForService();

      callForService.should.have.property('type');
    });
  });

  describe('fixLocation', () => {
    it('should not modify an intersection', () => {
      const address = 'Main / First';
      const callForService = new CallForService(
        Date.now(), '1', address, 'type');

      callForService.fixLocation().should.be.equal(address);
    });
    it('should fix an address', () => {
      const address = '50XX Main',
        expected = '5050 Main';
      const callForService = new CallForService(
        Date.now(), '1', address, 'type');

      callForService.fixLocation().should.be.equal(expected);
    });
  });
});
