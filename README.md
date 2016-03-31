# slmpd-cfs
Retrieve calls for service from the St. Louis Metropolitan Police Department.

## Overview
This library makes it simple to consume recenct calls for service (CFS) from the St. Louis Metropolitan Police Department website. There is no official API so this library depends on scraping the [CFS page](http://www.slmpd.org/cfs.aspx). The page is updated every 10 minutes so please be courteous and do not retrieve the calls more often than you have to.

## Usage
The library should be included by requiring `slmpd-cfs`. This exposes the function `getCurrentCfs()` which returns a promise that resolves to an array of `CallForService` objects. The `CallForService` object has the following properties:

* `dateTime` - date and time of the call
* `slmpdId` - internal ID
* `location` - location as an intersection or obfuscated address
* `type` - category of the call

The `CallForService` object exposes the function `fixLocation` which simply changes an address in the form of `1XX Main St.` to `150 Main St.`.

## Example
```
const slmpdCfs = require('slmpd-cfs');

slmpdCfs.getCurrentCfs()
.then(cfs => {
  console.log(`count: ${cfs.length}`);
  cfs.forEach(call => {
    console.log(`${call.location} - ${call.type}`);
  });
});
```