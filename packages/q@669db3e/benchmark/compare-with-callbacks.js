"use strict";var Q=require("../q"),fs=require("fs");suite("A single simple async operation",function(){bench("with an immediately-fulfilled promise",function(e){Q().then(e)}),bench("with direct setImmediate usage",function(e){setImmediate(e)}),bench("with direct setTimeout(…, 0)",function(e){setTimeout(e,0)})}),suite("A fs.readFile",function(){var e=Q.denodeify(fs.readFile);set("iterations",1e3),set("delay",1e3),bench("directly, with callbacks",function(e){fs.readFile(__filename,e)}),bench("with Q.nfcall",function(e){Q.nfcall(fs.readFile,__filename).then(e)}),bench("with a Q.denodeify'ed version",function(t){e(__filename).then(t)}),bench("with manual usage of deferred.makeNodeResolver",function(e){var t=Q.defer();fs.readFile(__filename,t.makeNodeResolver()),t.promise.then(e)})}),suite("1000 operations in parallel",function(){function e(e,t){var n=0;return function(){++n===e&&t()}}var t=1e3;bench("with immediately-fulfilled promises",function(n){for(var i=e(t,n),r=0;t>r;++r)Q().then(i)}),bench("with direct setImmediate usage",function(n){for(var i=e(t,n),r=0;t>r;++r)setImmediate(i)})});