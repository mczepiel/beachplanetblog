montageDefine("bfd16e7","core/serialization/deserializer/unit-deserializer",{dependencies:["core/core","core/promise"],factory:function(e,t){var n=e("core/core").Montage,i=e("core/promise").Promise,r=n.specialize({_context:{value:null},create:{value:function(){return new this}},initWithContext:{value:function(e){return this._context=e,this}},getObjectByLabel:{value:function(e){var t=this._context.getObject(e);return i.isPromise(t)?void 0:t}}});t.UnitDeserializer=r}});