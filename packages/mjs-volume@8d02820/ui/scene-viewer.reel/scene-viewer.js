var Montage=require("montage").Montage,Component=require("montage/ui/component").Component,Utilities=require("runtime/utilities").Utilities,SceneHelper=require("runtime/scene-helper").SceneHelper;exports.SceneViewer=Component.specialize({scene:{get:function(){return this._scene},set:function(e){e!=this._scene&&(this._scene=e,this.sceneDidChange())}},sceneView:{get:function(){return this.templateObjects?this.templateObjects.sceneView:null}},automaticallyCyclesThroughViewPoints:{value:!0,writable:!0},play:{value:function(){this.sceneView&&this.sceneView.play()}},pause:{value:function(){this.sceneView&&this.sceneView.pause()}},stop:{value:function(){this.sceneView&&this.sceneView.stop()}},_scene:{value:null,writable:!0},constructor:{value:function(){this.super()}},_sceneDidLoad:{value:function(e){e.glTFElement&&this.scene.glTFElement.animationManager&&this.scene.glTFElement.animationManager&&(this.scene.glTFElement.animationManager.delegate=this)}},handleStatusChange:{value:function(e,t,n){if("loaded"===e){this._sceneDidLoad(n);var i=this;setTimeout(function(){i.scene.removeOwnPropertyChangeListener("status",i)},1)}}},sceneDidChange:{value:function(){this.scene&&(this.scene.isLoaded()?this._sceneDidLoad(this.scene):this.scene.addOwnPropertyChangeListener("status",this)),this.sceneView&&(this.sceneView.scene=this.scene)}},sceneTimeWillChange:{value:function(){}},sceneTimeDidChange:{value:function(){if(null!=this.scene&&null!=this.scene.glTFElement){var e=this.scene.glTFElement.endTime;if(-1!==e&&null!=this.sceneView){var t=this.scene.glTFElement.animationManager;if(t.sceneTime/1e3>e&&1==this.automaticallyCyclesThroughViewPoints){var n=this.sceneView._viewPointIndex,i=SceneHelper.getViewPoints(this.scene);if(i.length>0){var r,a=0;do t.sceneTime=0,a++,n=++n%i.length,r=i[n];while(i.length>a&&0==t.nodeHasAnimatedAncestor(r.glTFElement));this.sceneView.viewPoint=r}}}}}},templateDidLoad:{value:function(){this.sceneDidChange(),this.needsDraw=!0,this.sceneView.needsDraw=!0}},enterDocument:{value:function(){window.addEventListener("resize",this,!0)}},exitDocument:{value:function(){window.removeEventListener("resize",this,!0)}},draw:{value:function(){}},willDraw:{value:function(){this.sceneView&&(this.sceneView.needsDraw=!0)}},captureResize:{value:function(){this.needsDraw=!0;var e=this.element.offsetWidth,t=this.element.offsetHeight;this.sceneView.width=e,this.sceneView.height=t,this.sceneView.needsDraw=!0}}});