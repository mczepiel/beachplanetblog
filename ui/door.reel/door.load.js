montageDefine("15dc556","ui/door.reel/door",{dependencies:["montage/ui/component"],factory:function(e,t){var i;i=e("montage/ui/component").Component,t.Door=i.specialize({doorOpen:{value:!1},handleDoorAction:{value:function(){this.doorOpen=~this.doorOpen}},_supportsWebGL:{value:null},supportsWebGL:{get:function(){if(null===this._supportsWebGL){var e={premultipliedAlpha:!1,antialias:!0,preserveDrawingBuffer:!1},t=document.createElement("canvas"),i=t.getContext("experimental-webgl",e)||t.getContext("webgl",e);this._supportsWebGL=!!i}return this._supportsWebGL}},viewKey:{value:null},templateDidLoad:{value:function(){this.viewKey=this.supportsWebGL?"webgl":"static"}}})}});