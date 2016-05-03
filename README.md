[![npm version](https://badge.fury.io/js/mini-rest-monitoring-os.svg)](http://badge.fury.io/js/mini-rest-monitoring-os)
[![Build Status](https://travis-ci.org/alykoshin/mini-rest-monitoring-os.svg)](https://travis-ci.org/alykoshin/mini-rest-monitoring-os)
[![Coverage Status](https://coveralls.io/repos/alykoshin/mini-rest-monitoring-os/badge.svg?branch=master&service=github)](https://coveralls.io/github/alykoshin/mini-rest-monitoring-os?branch=master)
[![Code Climate](https://codeclimate.com/github/alykoshin/mini-rest-monitoring-os/badges/gpa.svg)](https://codeclimate.com/github/alykoshin/mini-rest-monitoring-os)
[![Inch CI](https://inch-ci.org/github/alykoshin/mini-rest-monitoring-os.svg?branch=master)](https://inch-ci.org/github/alykoshin/mini-rest-monitoring-os)

[![Dependency Status](https://david-dm.org/alykoshin/mini-rest-monitoring-os/status.svg)](https://david-dm.org/alykoshin/mini-rest-monitoring-os#info=dependencies)
[![devDependency Status](https://david-dm.org/alykoshin/mini-rest-monitoring-os/dev-status.svg)](https://david-dm.org/alykoshin/mini-rest-monitoring-os#info=devDependencies)


# mini-rest-monitoring-os

Simple monitoring of OS status for mini-rest.
 
Makes OS info available using `os` module accessible via `express` `Router`. 


If you have different needs regarding the functionality, please add a [feature request](https://github.com/alykoshin/mini-rest-monitoring-os/issues).


## Installation

```sh
npm install --save mini-rest-monitoring-os
```


## Usage

``` 
  //var MiniRestMonitoringOs = require('../lib/');
  var MiniRestMonitoringOs = require('mini-rest-monitoring-os');
  var express = require('express');
  
  app.use('/monitoring/os', MiniRestMonitoringOs());
```

Request `GET` to `/monitoring/os/` will return following: 

```
{
  "EOL": "\n",
  "arch": "x64",
  "cpus": [
    {
      "model": "Intel(R) Core(TM) i7-3520M CPU @ 2.90GHz",
      "speed": 3399,
      "times": {
        "user": 12739700,
        "nice": 78600,
        "sys": 2434700,
        "idle": 64556200,
        "irq": 0
      }
    },
    {
      "model": "Intel(R) Core(TM) i7-3520M CPU @ 2.90GHz",
      "speed": 3399,
      "times": {
        "user": 13120100,
        "nice": 52500,
        "sys": 1946500,
        "idle": 64571900,
        "irq": 0
      }
    },
    {
      "model": "Intel(R) Core(TM) i7-3520M CPU @ 2.90GHz",
      "speed": 3399,
      "times": {
        "user": 12243900,
        "nice": 64300,
        "sys": 2692700,
        "idle": 64837200,
        "irq": 0
      }
    },
    {
      "model": "Intel(R) Core(TM) i7-3520M CPU @ 2.90GHz",
      "speed": 3399,
      "times": {
        "user": 13440800,
        "nice": 44200,
        "sys": 1918500,
        "idle": 64645100,
        "irq": 0
      }
    }
  ],
  "endianness": "LE",
  "freemem": 5940674560,
  "homedir": "/home/alykoshin",
  "hostname": "al-nb-02",
  "loadavg": [
    1.01904296875,
    0.85791015625,
    0.94921875
  ],
  "networkInterfaces": {
    "lo": [
      {
        "address": "127.0.0.1",
        "netmask": "255.0.0.0",
        "family": "IPv4",
        "mac": "00:00:00:00:00:00",
        "internal": true
      },
      {
        "address": "::1",
        "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
        "family": "IPv6",
        "mac": "00:00:00:00:00:00",
        "scopeid": 0,
        "internal": true
      }
    ],
    "wlan0": [
      {
        "address": "192.168.1.32",
        "netmask": "255.255.255.0",
        "family": "IPv4",
        "mac": "6c:88:14:8c:39:08",
        "internal": false
      },
      {
        "address": "fe80::6e88:14ff:fe8c:3908",
        "netmask": "ffff:ffff:ffff:ffff::",
        "family": "IPv6",
        "mac": "6c:88:14:8c:39:08",
        "scopeid": 3,
        "internal": false
      }
    ]
  },
  "platform": "linux",
  "release": "4.2.0-35-generic",
  "tmpdir": "/tmp",
  "totalmem": 16512585728,
  "type": "Linux",
  "uptime": 8140
}
```

Request `GET` to `/monitoring/os/uptime` will return following: 
```
  8140
```

## Credits
[Alexander](https://github.com/alykoshin/)


# Links to package pages:

[github.com](https://github.com/alykoshin/mini-rest-monitoring-os) &nbsp; [npmjs.com](https://www.npmjs.com/package/mini-rest-monitoring-os) &nbsp; [travis-ci.org](https://travis-ci.org/alykoshin/mini-rest-monitoring-os) &nbsp; [coveralls.io](https://coveralls.io/github/alykoshin/mini-rest-monitoring-os) &nbsp; [inch-ci.org](https://inch-ci.org/github/alykoshin/mini-rest-monitoring-os)


## License

MIT
