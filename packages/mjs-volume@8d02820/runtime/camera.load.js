montageDefine("8d02820","runtime/camera",{dependencies:["runtime/base"],factory:function(e,t){var n=e("runtime/base").Base;t.Camera=Object.create(n,{_projection:{value:null,writable:!0},projection:{get:function(){return this._projection},set:function(e){this._projection=e}},init:{value:function(){return this.__Base_init(),this}}})}});