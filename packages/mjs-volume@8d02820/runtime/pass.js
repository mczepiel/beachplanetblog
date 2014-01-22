require("runtime/dependencies/gl-matrix");var Montage=require("montage").Montage,glTFNode=require("runtime/glTF-node").glTFNode,NodeWrapper=require("runtime/node-wrapper").NodeWrapper,Projection=require("runtime/projection").Projection,Camera=require("runtime/camera").Camera,Utilities=require("runtime/utilities").Utilities,WebGLRenderer=require("runtime/webgl-renderer").WebGLRenderer,Transform=require("runtime/transform").Transform,ResourceDescription=require("runtime/resource-description").ResourceDescription,LinkedListNode=Object.create(Object.prototype,{_content:{value:null,writable:!0},content:{get:function(){return this._content},set:function(e){this._content=e}},_previous:{value:null,writable:!0},previous:{get:function(){return this._previous},set:function(e){this._previous=e}},_next:{value:null,writable:!0},next:{get:function(){return this._next},set:function(e){this._next=e}},init:{value:function(e){this.content=e,this.previous=null,this.next=null}},removeFromList:{value:function(){this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous),this.next=null,this.previous=null}}}),LinkedList=Object.create(Object.prototype,{_tail:{value:null,writable:!0},tail:{get:function(){return this._tail},set:function(e){this._tail=e}},_head:{value:null,writable:!0},head:{get:function(){return this._head},set:function(e){this._head=e}},append:{value:function(e){this.head||(this.head=e),this.tail&&(e.previous=this.tail,this.tail.next=e),this.tail=e}},remove:{value:function(e){e.content.id;var t=!1,n=!1;this.tail===e&&(t=!0,this.tail=e.previous),this.head===e&&(n=!0,this.head=e.next)}}}),RenderTarget=exports.RenderTarget=Object.create(Object.prototype,{_extras:{value:null,writable:!0},_width:{value:0,writable:!0},_height:{value:0,writable:!0},_attachments:{value:null,writable:!0},attachments:{get:function(){return this._attachments},set:function(e){this._attachments=e}},init:{value:function(){return this.attachments=[],this.extras={},this}},width:{get:function(){return this._width},set:function(e){this._width=e}},height:{get:function(){return this._height},set:function(e){this._height=e}},extras:{get:function(){return this._extras},set:function(e){this._extras=e}}}),Pass=Object.create(Object.prototype,{_extras:{value:null,writable:!0},PROGRAM:{value:"program",writable:!1},SCENE:{value:"scene",writable:!1},_type:{value:null,writable:!0},type:{get:function(){return this._type}},extras:{get:function(){return this._extras},set:function(e){this._extras=e}}}),ProgramPass=exports.ProgramPass=Montage.create(Pass,{_attributes:{value:null,writable:!0},_uniforms:{value:null,writable:!0},_states:{value:null,writable:!0},_program:{value:null,writable:!0},states:{get:function(){return this._states},set:function(e){this._states=e}},program:{get:function(){return this._program},set:function(e){this._program=e}},init:{value:function(){return this.attributes={},this.uniforms={},this.states={},this._type=Pass.PROGRAM,this.extras={},this}}}),ScenePassRenderer=Object.create(Object.prototype,{_nodeWrappers:{value:null,writable:!0},_pathIDsForNodeID:{value:null,writable:!0},_primitivesPerPass:{value:null,writable:!0},_viewPoint:{value:null,writable:!0},_scene:{value:null,writable:!0},_observers:{value:null,writable:!0},_viewPointMatrix:{value:null,writable:!0},addObserver:{value:function(e){null==this._observers&&(this._observers=[]),-1===this._observers.indexOf(e)?this._observers.push(e):console.log("WARNING attempt to add 2 times the same observer in sceneRenderer")}},removeObserver:{value:function(e){if(this._observers){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}}},viewPoint:{get:function(){return this._viewPoint},set:function(e){if(this._observers)for(var t=0;this._observers.length>t;t++)this._observers[t].viewPointWillChange(this,this._viewPoint,e);if(this._viewPoint!=e&&(this._viewPoint=e),this._observers)for(var t=0;this._observers.length>t;t++)this._observers[t].viewPointMatrixDidUpdate(this),this._observers[t].viewPointDidChange(this)}},setupNodeAtPath:{value:function(e){var t=this._nodeWrappers[e.id];null==t&&(t=Object.create(NodeWrapper).init(e),this._nodeWrappers[e.id]=t,t.scenePassRenderer=this),e.meshes&&e.meshes.forEach(function(n){n.primitives&&n.primitives.forEach(function(i){if(i.material){var r=i.material.technique;if(r&&r.rootPass){var s,a=r.rootPass.id,o=null;for(s=0;this._primitivesPerPass.length>s;s++)this._primitivesPerPass[s].pass===a&&(o=this._primitivesPerPass[s]);null==o&&(o=this._primitivesPerPass[a]={pass:r.rootPass,primitives:[]},this._primitivesPerPass.push(o));var l={};n.compression&&(l.compressed=!0),l.primitive=i,l.node=e,l.nodeWrapper=t,o.primitives.push(l)}}},this)},this)}},sceneWillChange:{value:function(){this._viewPointMatrix=mat4.identity()}},sceneDidChange:{value:function(){this._primitivesPerPass=[],this._nodeWrappers={};var e=this;this.scene&&this.scene.rootNode.apply(function(t){return e.setupNodeAtPath(t),null},!0,null)}},render:{value:function(e,t,n){if(this.scene&&this.viewPoint){if(null==this.__matrix&&(this.__matrix=mat4.create()),this.viewPoint&&(mat4.set(this.viewPoint.worldMatrix,this.__matrix),mat4.inverse(this.__matrix),mat4.equal(this._viewPointMatrix,this.__matrix)===!1&&(mat4.set(this.__matrix,this._viewPointMatrix),this._observers)))for(var i=0;this._observers.length>i;i++)this._observers[i].viewPointMatrixDidUpdate(this);var r=n?n.picking===!0&&null!=n.coords:!1;r&&(this.pickingRenderTarget.extras.coords=n.coords,e.bindRenderTarget(this.pickingRenderTarget));var s=this.scene.rootNode.nodeWithPropertyNamed("instanceSkin");s&&s.instanceSkin.skin.process(s,e.resourceManager),e.projectionMatrix=this.viewPoint.cameras[0].projection.matrix,null==this.__nonOpaquePassesWithPrimitives&&(this.__nonOpaquePassesWithPrimitives=[]),this.__nonOpaquePassesWithPrimitives.length=0;var a;for(a=0;this._primitivesPerPass.length>a;a++){var o=this._primitivesPerPass[a],l=r?this.pickingPass:o.pass,u=l.states;u.blendEnable&&!r?this.__nonOpaquePassesWithPrimitives.push(o):r&&this.pickingTechnique?e.renderPrimitivesWithPass(o.primitives,l,this.pickingTechnique.parameters,t):e.renderPrimitivesWithPass(o.primitives,l,null,t)}if(r){e.unbindRenderTarget(this.pickingRenderTarget);var h=this.pickingRenderTarget.extras.pickedPixel,c=null,d=Object.keys(this.pickingPass.extras.nodeIDToColor);d.forEach(function(e){var t=this.pickingPass.extras.nodeIDToColor[e];1>=Math.abs(Math.round(255*t[0])-h[0])&&1>=Math.abs(Math.round(255*t[1])-h[1])&&1>=Math.abs(Math.round(255*t[2])-h[2])&&(c=e)},this),n.delegate.handleSelectedNode(c)}else for(a=0;this.__nonOpaquePassesWithPrimitives.length>a;a++){var o=this.__nonOpaquePassesWithPrimitives[a];e.renderPrimitivesWithPass(o.primitives,o.pass,null,t)}}}},scene:{get:function(){return this._scene},set:function(e){this._scene!=e&&(this.sceneWillChange(this._scene,e),this._scene=e,this.sceneDidChange())}},_pickingPass:{value:null,writable:!0},pickingPass:{get:function(){return this._pickingPass},set:function(e){this._pickingPass=e,this._pickingPass.id="__PickingPass",this._pickingPass.extras.nodeIDToColor={}}},_pickingTechnique:{value:null,writable:!0},pickingTechnique:{get:function(){return this._pickingTechnique},set:function(e){this._pickingTechnique=e,this.pickingPass=this._pickingTechnique.rootPass}},_pickingRenderTarget:{value:null,writable:!0},pickingRenderTarget:{get:function(){return this._pickingRenderTarget},set:function(e){this._pickingRenderTarget=e}},createPickingRenderTargetIfNeeded:{value:function(){return this._pickingRenderTarget||(this._pickingRenderTarget=Object.create(RenderTarget).init(),this._pickingRenderTarget.attachments.push({semantic:"COLOR_ATTACHMENT0",parameter:"__pickingTexture"}),this._pickingRenderTarget.attachments.push({semantic:"DEPTH_ATTACHMENT",parameter:"__pickingRenderBuffer"}),this.pickingRenderTarget.extras.picking=!0),this._pickingRenderTarget}},init:{value:function(){return this.pickingRenderTarget=this.createPickingRenderTargetIfNeeded(),this.pickingRenderTarget.width=512,this.pickingRenderTarget.height=512,this._nodeWrappers={},this}}}),ScenePass=exports.ScenePass=Object.create(Pass,{_scenePassRenderer:{value:null,writable:!0},createScenePassRendererIfNeeded:{value:function(){this._scenePassRenderer||(this._scenePassRenderer=Object.create(ScenePassRenderer).init())}},scenePassRenderer:{get:function(){return this.createScenePassRendererIfNeeded(),this._scenePassRenderer},set:function(e){this.createScenePassRendererIfNeeded(),this._scenePassRenderer!=e&&(this._scenePassRenderer=e)}},viewPoint:{get:function(){return this.scenePassRenderer?this.scenePassRenderer.viewPoint:null},set:function(e){this.scenePassRenderer&&(this.scenePassRenderer.viewPoint=e)}},scene:{get:function(){return this.scenePassRenderer.scene},set:function(e){this.scenePassRenderer.scene=e}},execute:{value:function(e,t,n){this.scenePassRenderer.render(e,t,n)}},init:{value:function(){return this._type=Pass.SCENE,this.extras={},this}}});