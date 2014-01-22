montageDefine("bfd16e7","core/meta/binder-reference",{dependencies:["montage","core/promise","core/meta/remote-reference","core/meta/binder","core/logger"],factory:function(e,t){"use strict";e("montage").Montage;var n=e("core/promise").Promise,i=e("core/meta/remote-reference").RemoteReference,r=e("core/meta/binder");e("core/logger").logger("blueprint"),t.BinderReference=i.create(i,{constructor:{value:function(){this.super()}},identifier:{get:function(){return this._reference||(this._reference=this.referenceFromValue(this._value)),["binder",this._reference.binderName.toLowerCase(),"reference"].join("_")}},valueFromReference:{value:function(e,t){var i=e.binderName,a=e.binderModuleId,s=n.defer(),o=r.Binder.manager.binderForName(i);if(o)s.resolve(o);else try{var l=t,u=a.indexOf("/");if(u>0){var c=a.substring(0,u),h=t.mappings;c in h&&(a=a.substring(u+1),l=l.getPackage(h[c].location))}s=r.Binder.getBinderWithModuleId(a,l)}catch(d){s.reject(Error("Error cannot find Blueprint Binder "+a))}return s.promise}},referenceFromValue:{value:function(e){var t={};return t.binderName=e.name,t.binderModuleId=e.binderModuleId,t}}})}});