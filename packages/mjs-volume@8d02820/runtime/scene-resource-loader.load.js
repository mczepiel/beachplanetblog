montageDefine("8d02820","runtime/scene-resource-loader",{dependencies:["runtime/resource-loader","runtime/mesh-resource-loader"],factory:function(e,t){var n=e("runtime/resource-loader").ResourceLoader,i=e("runtime/mesh-resource-loader").MeshResourceLoader;t.SceneResourceLoader=Object.create(n,{_scene:{value:null,writable:!0},scene:{get:function(){return this._scene},set:function(e){this._scene=e}},meshesDidLoad:{value:function(){this.delegate&&this.delegate.sceneResourcesDidPrepare(this.scene)}},loadScene:{value:function(){var e=this;if(this.scene){var t=this.scene.rootNode,n={},r=[];t.apply(function(e){return e.meshes&&e.meshes.length&&e.meshes.forEach(function(e){null==n[e.id]&&(r.push(e),n[e.id]=e)},this),null},!0,null);var a=Object.create(i).init(r,e.webGLRenderer,this);a.loadMeshes()}}},init:{value:function(e,t,n){return n&&(this.delegate=n),this.webGLRenderer=t,this.scene=e,t.resourceManager.observers.push(this),this}}})}});