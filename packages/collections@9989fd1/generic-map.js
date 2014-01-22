"use strict";function GenericMap(){throw Error("Can't construct. GenericMap is a mixin.")}function Item(e,t){this.key=e,this.value=t}var Object=require("./shim-object"),MapChanges=require("./listen/map-changes"),PropertyChanges=require("./listen/property-changes");module.exports=GenericMap,Object.addEach(GenericMap.prototype,MapChanges.prototype),Object.addEach(GenericMap.prototype,PropertyChanges.prototype),GenericMap.prototype.isMap=!0,GenericMap.prototype.addEach=function(e){return e&&Object(e)===e&&("function"==typeof e.forEach?e.isMap===!0?e.forEach(function(e,t){this.set(t,e)},this):e.forEach(function(e){this.set(e[0],e[1])},this):Object.keys(e).forEach(function(t){this.set(t,e[t])},this)),this},GenericMap.prototype.get=function(e,t){var i=this.store.get(new this.Item(e));return i?i.value:arguments.length>1?t:this.getDefault(e)},GenericMap.prototype.set=function(e,t){var i=new this.Item(e,t),n=this.store.get(i),s=!1;return n?(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,n.value),n.value=t,this.dispatchesMapChanges&&this.dispatchMapChange(e,t)):(this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,void 0),this.store.add(i)&&(this.length++,s=!0),this.dispatchesMapChanges&&this.dispatchMapChange(e,t)),s},GenericMap.prototype.add=function(e,t){return this.set(t,e)},GenericMap.prototype.has=function(e){return this.store.has(new this.Item(e))},GenericMap.prototype["delete"]=function(e){var t=new this.Item(e);if(this.store.has(t)){var i=this.store.get(t).value;return this.dispatchesMapChanges&&this.dispatchBeforeMapChange(e,i),this.store["delete"](t),this.length--,this.dispatchesMapChanges&&this.dispatchMapChange(e,void 0),!0}return!1},GenericMap.prototype.clear=function(){var e;this.dispatchesMapChanges&&(this.forEach(function(e,t){this.dispatchBeforeMapChange(t,e)},this),e=this.keys()),this.store.clear(),this.length=0,this.dispatchesMapChanges&&e.forEach(function(e){this.dispatchMapChange(e)},this)},GenericMap.prototype.reduce=function(e,t,i){return this.store.reduce(function(t,n){return e.call(i,t,n.value,n.key,this)},t,this)},GenericMap.prototype.reduceRight=function(e,t,i){return this.store.reduceRight(function(t,n){return e.call(i,t,n.value,n.key,this)},t,this)},GenericMap.prototype.keys=function(){return this.map(function(e,t){return t})},GenericMap.prototype.values=function(){return this.map(Function.identity)},GenericMap.prototype.entries=function(){return this.map(function(e,t){return[t,e]})},GenericMap.prototype.items=function(){return this.entries()},GenericMap.prototype.equals=function(e,t){if(t=t||Object.equals,this===e)return!0;if(Object.can(e,"every"))return e.length===this.length&&e.every(function(e,i){return t(this.get(i),e)},this);var i=Object.keys(e);return i.length===this.length&&Object.keys(e).every(function(i){return t(this.get(i),e[i])},this)},GenericMap.prototype.Item=Item,Item.prototype.equals=function(e){return Object.equals(this.key,e.key)&&Object.equals(this.value,e.value)},Item.prototype.compare=function(e){return Object.compare(this.key,e.key)};