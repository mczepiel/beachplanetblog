"use strict";function Iterator(e){if(!(this instanceof Iterator))return new Iterator(e);if(Array.isArray(e)||"string"==typeof e)return Iterator.iterate(e);if(e=Object(e),e instanceof Iterator)return e;if(e.next)this.next=function(){return e.next()};else if(e.iterate){var t=e.iterate();this.next=function(){return t.next()}}else{if("[object Function]"!==Object.prototype.toString.call(e))throw new TypeError("Can't iterate "+e);this.next=e}}module.exports=Iterator;var Object=require("./shim-object"),GenericCollection=require("./generic-collection");Iterator.prototype.forEach=GenericCollection.prototype.forEach,Iterator.prototype.map=GenericCollection.prototype.map,Iterator.prototype.filter=GenericCollection.prototype.filter,Iterator.prototype.every=GenericCollection.prototype.every,Iterator.prototype.some=GenericCollection.prototype.some,Iterator.prototype.any=GenericCollection.prototype.any,Iterator.prototype.all=GenericCollection.prototype.all,Iterator.prototype.min=GenericCollection.prototype.min,Iterator.prototype.max=GenericCollection.prototype.max,Iterator.prototype.sum=GenericCollection.prototype.sum,Iterator.prototype.average=GenericCollection.prototype.average,Iterator.prototype.flatten=GenericCollection.prototype.flatten,Iterator.prototype.zip=GenericCollection.prototype.zip,Iterator.prototype.enumerate=GenericCollection.prototype.enumerate,Iterator.prototype.sorted=GenericCollection.prototype.sorted,Iterator.prototype.group=GenericCollection.prototype.group,Iterator.prototype.reversed=GenericCollection.prototype.reversed,Iterator.prototype.toArray=GenericCollection.prototype.toArray,Iterator.prototype.toObject=GenericCollection.prototype.toObject,Iterator.prototype.iterator=GenericCollection.prototype.iterator,Iterator.prototype.constructClone=function(e){var t=[];return t.addEach(e),t},Iterator.prototype.mapIterator=function(e){var t=Iterator(this),n=arguments[1],i=0;if("[object Function]"!=Object.prototype.toString.call(e))throw new TypeError;return new t.constructor(function(){return e.call(n,t.next(),i++,t)})},Iterator.prototype.filterIterator=function(e){var t=Iterator(this),n=arguments[1],i=0;if("[object Function]"!=Object.prototype.toString.call(e))throw new TypeError;return new t.constructor(function(){for(var s;;)if(s=t.next(),e.call(n,s,i++,t))return s})},Iterator.prototype.reduce=function(e){var t,n=Iterator(this),i=arguments[1],s=arguments[2],a=0;if("[object Function]"!=Object.prototype.toString.call(e))throw new TypeError;try{t=n.next(),i=arguments.length>1?e.call(s,i,t,a,n):t,a++}catch(o){if(isStopIteration(o)){if(arguments.length>1)return arguments[1];throw TypeError("cannot reduce a value from an empty iterator with no initial value")}throw o}try{for(;;)t=n.next(),i=e.call(s,i,t,a,n),a++}catch(o){if(isStopIteration(o))return i;throw o}},Iterator.prototype.concat=function(){return Iterator.concat(Array.prototype.concat.apply(this,arguments))},Iterator.prototype.dropWhile=function(e){var t,n=Iterator(this),i=arguments[1],s=!1;if("[object Function]"!=Object.prototype.toString.call(e))throw new TypeError;return n.forEach(function(a,o){if(!e.call(i,a,o,n))throw s=!0,t=a,StopIteration}),s?n.constructor([t]).concat(n):n.constructor([])},Iterator.prototype.takeWhile=function(e){var t=Iterator(this),n=arguments[1];if("[object Function]"!=Object.prototype.toString.call(e))throw new TypeError;return t.mapIterator(function(i,s){if(!e.call(n,i,s,t))throw StopIteration;return i})},Iterator.prototype.zipIterator=function(){return Iterator.unzip(Array.prototype.concat.apply(this,arguments))},Iterator.prototype.enumerateIterator=function(e){return Iterator.count(e).zipIterator(this)},Iterator.iterate=function(e){var t;return t=0,new Iterator(function(){if("object"==typeof e)for(;!(t in e);){if(t>=e.length)throw StopIteration;t+=1}else if(t>=e.length)throw StopIteration;var n=e[t];return t+=1,n})},Iterator.cycle=function(e,t){2>arguments.length&&(t=1/0);var n=function(){throw StopIteration};return new Iterator(function(){var i;try{return n()}catch(s){if(isStopIteration(s)){if(0>=t)throw s;return t--,i=Iterator.iterate(e),n=i.next.bind(i),n()}throw s}})},Iterator.concat=function(e){e=Iterator(e);var t=function(){throw StopIteration};return new Iterator(function(){var n;try{return t()}catch(i){if(isStopIteration(i))return n=Iterator(e.next()),t=n.next.bind(n),t();throw i}})},Iterator.unzip=function(e){return e=Iterator(e).map(Iterator),0===e.length?new Iterator([]):new Iterator(function(){var t,n=e.map(function(e){try{return e.next()}catch(n){if(!isStopIteration(n))throw n;t=!0}});if(t)throw StopIteration;return n})},Iterator.zip=function(){return Iterator.unzip(Array.prototype.slice.call(arguments))},Iterator.chain=function(){return Iterator.concat(Array.prototype.slice.call(arguments))},Iterator.range=function(e,t,n){return 3>arguments.length&&(n=1),2>arguments.length&&(t=e,e=0),e=e||0,n=n||1,new Iterator(function(){if(e>=t)throw StopIteration;var i=e;return e+=n,i})},Iterator.count=function(e,t){return Iterator.range(e,1/0,t)},Iterator.repeat=function(e,t){return new Iterator.range(t).mapIterator(function(){return e})},"undefined"==typeof isStopIteration&&(global.isStopIteration=function(e){return"[object StopIteration]"===Object.prototype.toString.call(e)}),"undefined"==typeof StopIteration&&(global.StopIteration={},Object.prototype.toString=function(e){return function(){return this===global.StopIteration||this instanceof global.ReturnValue?"[object StopIteration]":e.call(this,arguments)}}(Object.prototype.toString)),ReturnValue===void 0&&(global.ReturnValue=function ReturnValue(e){return this.message="Iteration stopped with "+e,Error.captureStackTrace&&Error.captureStackTrace(this,ReturnValue),this instanceof global.ReturnValue?(this.value=e,void 0):new global.ReturnValue(e)},ReturnValue.prototype=Error.prototype);