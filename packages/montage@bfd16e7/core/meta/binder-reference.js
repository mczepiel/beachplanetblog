"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,RemoteReference=require("core/meta/remote-reference").RemoteReference,BinderModule=require("core/meta/binder"),logger=require("core/logger").logger("blueprint");exports.BinderReference=RemoteReference.create(RemoteReference,{constructor:{value:function(){this.super()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,t){var n=e.binderName,i=e.binderModuleId,r=Promise.defer(),a=BinderModule.Binder.manager.binderForName(n);if(a)r.resolve(a);else try{var o=t,s=i.indexOf("/");if(s>0){var l=i.substring(0,s),u=t.mappings;l in u&&(i=i.substring(s+1),o=o.getPackage(u[l].location))}r=BinderModule.Binder.getBinderWithModuleId(i,o)}catch(c){r.reject(Error("Error cannot find Blueprint Binder "+i))}return r.promise}},referenceFromValue:{value:function(e){var t={};return t.binderName=e.name,t.binderModuleId=e.binderModuleId,t}}});