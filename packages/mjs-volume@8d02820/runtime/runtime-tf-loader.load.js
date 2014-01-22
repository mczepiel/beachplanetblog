montageDefine("8d02820","runtime/runtime-tf-loader",{dependencies:["runtime/dependencies/gl-matrix","runtime/glTF-parser","runtime/resource-description","runtime/technique","runtime/pass","runtime/glsl-program","runtime/glTF-material","runtime/mesh","runtime/glTF-node","runtime/primitive","runtime/projection","runtime/camera","runtime/skin","runtime/glTF-scene","runtime/transform","runtime/animation","runtime/animation-manager"],factory:function(e,t){e("runtime/dependencies/gl-matrix");var n=e("runtime/glTF-parser").glTFParser,i=e("runtime/resource-description").ResourceDescription,r=e("runtime/technique").Technique,s=e("runtime/pass").ProgramPass;e("runtime/pass").Pass,e("runtime/pass").ScenePass;var a=e("runtime/glsl-program").GLSLProgram,o=e("runtime/glTF-material").glTFMaterial,l=e("runtime/mesh").Mesh,u=e("runtime/glTF-node").glTFNode,h=e("runtime/primitive").Primitive,c=e("runtime/projection").Projection,d=e("runtime/camera").Camera,m=e("runtime/skin").Skin,p=e("runtime/glTF-scene").glTFScene,f=e("runtime/transform").Transform,_=e("runtime/animation").KeyframeAnimation,g=e("runtime/animation-manager").AnimationManager;t.RuntimeTFLoader=Object.create(n,{_materials:{writable:!0,value:null},_scenes:{writable:!0,value:null},_animations:{writable:!0,value:null},totalBufferSize:{value:0,writable:!0},handleBuffer:{value:function(e,t){var n=Object.create(i).init(e,t);return n.id=e,this.storeEntry(e,n,t),this.totalBufferSize+=t.byteLength,!0}},handleBufferView:{value:function(e,t){var n=Object.create(i).init(e,t);n.id=e;var r=this.getEntry(n.description.buffer);return t.type="ArrayBufferView",n.buffer=r,this.storeEntry(e,n,t),!0}},handleShader:{value:function(e,t){var n=Object.create(i).init(e,t);return n.id=e,n.type="shader",this.storeEntry(e,n,t),!0}},handleProgram:{value:function(e,t){var n=Object.create(i).init(e,t);n.id=e,n.type="program";var r=this.getEntry(n.description.vertexShader),s=this.getEntry(n.description.fragmentShader);return n[a.VERTEX_SHADER]=r.entry,n[a.FRAGMENT_SHADER]=s.entry,this.storeEntry(e,n,t),!0}},handleImage:{value:function(e,t){var n=t.path,r=Object.create(i).init(n,{path:n});return r.type="image",this.storeEntry(e,r,t),!0}},handleVideo:{value:function(e,t){var n=t.path,r=Object.create(i).init(n,{path:n});return r.type="video",this.storeEntry(e,r,t),!0}},handleTechnique:{value:function(e,t){var n=Object.create(r);n.id=e;var i=this.storeEntry(e,n,t),a=t.pass;n.passName=a;var o=t.passes;if(!o)return console.log("ERROR: technique does not contain pass"),!1;var l={},u=Object.keys(t.passes);return u.forEach(function(e){var t=o[e],n=t.instanceProgram;if(!n)return console.log("ERROR: A Pass with type=program must have a program property"),!1;var r=Object.create(s).init();r.id=i+"_"+a,r.instanceProgram=t.instanceProgram,r.instanceProgram.program=this.getEntry(n.program).entry,r.states=t.states,l[e]=r},this),n.parameters=t.parameters,n.passes=l,!0}},handleMaterial:{value:function(e,t){var n=Object.create(o).init(e);this.storeEntry(e,n,t);var i=t.instanceTechnique,r=i.values;n.name=t.name;var s=this.getEntry(i.technique);if(!s)return console.log("ERROR: invalid file, cannot find referenced technique:"+t.technique),!1;n.technique=s.entry;var a=n.technique.parameters;if(n.parameters=JSON.parse(JSON.stringify(a)),r){var l;for(l in r){var u=n.parameters[l];if(u)switch(u.value=r[l],u.type){case WebGLRenderingContext.SAMPLER_CUBE:case WebGLRenderingContext.SAMPLER_2D:var h=this.getEntry(u.value);h&&(u.value=h.entry);break;default:}}}return this._materials||(this._materials=[]),this._materials.push(n),!0}},handleLight:{value:function(){return!0}},handleAccessor:{value:function(e,t){t.id=e;var n=this.getEntry(t.bufferView);t.bufferView=n.entry,t.byteOffset||(t.byteOffset=0),this.storeEntry(e,t,t)}},handleMesh:{value:function(e,t){var n=Object.create(l).init();n.id=e,n.name=t.name;var i=!1,r=t.extensions;r&&(r["won-compression"]&&(i=!0,n.compression=r["won-compression"],n.compression.type="won-compression",n.compression.compressedData.bufferView=this.getEntry(n.compression.compressedData.bufferView).entry,n.compression.compressedData.id=e+"_compressedData"),r["Open3DGC-compression"]&&(i=!0,n.compression=r["Open3DGC-compression"],n.compression.type="Open3DGC-compression",n.compression.compressedData.bufferView=this.getEntry(n.compression.compressedData.bufferView).entry,n.compression.compressedData.id=e+"_compressedData")),this.storeEntry(e,n,t);var s=t[l.PRIMITIVES];if(!s)return console.log("MISSING_PRIMITIVES for mesh:"+e),!1;for(var a=0;s.length>a;a++){var o=s[a];if(o.primitive===WebGLRenderingContext.TRIANGLES){var u=Object.create(h).init(),c=this.getEntry(o.material);u.material=c.entry,n.primitives.push(u);var d=o.attributes,m=Object.keys(d);m.forEach(function(e){var t=d[e],n=this.getEntry(t);u.addVertexAttribute({semantic:e,attribute:n.entry})},this);var p=o.indices,f=this.getEntry(p);u.indices=f.entry}}return!0}},handleCamera:{value:function(e,t){var n=Object.create(d).init();n.id=e,this.storeEntry(e,n,t);var i=Object.create(c);return i.initWithDescription(t),n.projection=i,!0}},handleLight:{value:function(){return!0}},buildNodeHirerachy:{value:function(e){var t=e.entry,n=e.description.children;n&&n.forEach(function(e){var n=this.getEntry(e),i=n.entry;null==i.parent?t.children.push(i):t.children.push(i.copy()),this.buildNodeHirerachy(n)},this)}},resolveParameterSources:{value:function(){this._materials&&this._materials.forEach(function(e){if(e.parameters){var t=Object.keys(e.parameters);t.forEach(function(t){var n=e.parameters[t];n&&n.source&&(n.source=this.getEntry(n.source).entry)},this)}},this)}},buildSkeletons:{value:function(e){if(e.instanceSkin){var t=e.instanceSkin.skin;if(t){e.instanceSkin.skeletons.forEach(function(e){var n=this.getEntry(e);if(n){var i=n.entry,r=t.jointsIds,s=[];r.forEach(function(t){var n=i.nodeWithJointID(t);n?s.push(n):console.log("WARNING: jointId:"+t+" cannot be found in skeleton:"+e)},this),t.nodesForSkeleton[e]=s}},this);var n=[];e.instanceSkin.sources.forEach(function(e){var t=this.getEntry(e);t&&n.push(t.entry)},this),t.sources=n}}var i=e.children;i&&i.forEach(function(e){this.buildSkeletons(e)},this)}},handleScene:{value:function(e,t){if(this._scenes||(this._scenes=[]),!t.nodes)return console.log("ERROR: invalid file required nodes property is missing from scene"),!1;var n=Object.create(p).init();n.ids=this._ids,n.id=e,n.name=t.name,n.baseURL=this.baseURL,this.storeEntry(e,n,t);var i=Object.create(u).initWithID();return t.nodes&&t.nodes.forEach(function(e){var t=this.getEntry(e);i.children.push(t.entry),this.buildNodeHirerachy(t)},this),this.resolveParameterSources(),this.buildSkeletons(i),n.rootNode=i,this._scenes.push(n),!0}},handleSkin:{value:function(e,t){var n=Object.create(m).init();n.bindShapeMatrix=mat4.create(t.bindShapeMatrix),n.jointsIds=t.joints,n.inverseBindMatricesDescription=t.inverseBindMatrices,n.inverseBindMatricesDescription.id=e+"_inverseBindMatrices",n.inverseBindMatricesDescription.bufferView=this.getEntry(n.inverseBindMatricesDescription.bufferView).entry,this.storeEntry(e,n,t)}},handleNode:{value:function(e,t){var n=Object.create(u).init();n.id=e,n.jointId=t.jointId,n.name=t.name,this.storeEntry(e,n,t),n.transform=Object.create(f).initWithDescription(t);var i;if(t.mesh&&(i=this.getEntry(t.mesh),n.meshes.push(i.entry)),t.meshes&&t.meshes.forEach(function(e){i=this.getEntry(e),i&&n.meshes.push(i.entry)},this),t.camera){var r=this.getEntry(t.camera);r&&n.cameras.push(r.entry)}if(t.instanceSkin){t.instanceSkin.skin=this.getEntry(t.instanceSkin.skin).entry,n.instanceSkin=t.instanceSkin;var s=n.instanceSkin.sources;s&&s.forEach(function(e){i=this.getEntry(e),i&&n.meshes.push(i.entry)},this)}return!0}},handleLoadCompleted:{value:function(){if(this.delegate){var e=null;if(this._state.options&&(e=this._state.options.ids),e)e.forEach(function(e){var t=this.getEntry(e);t&&this.delegate.loadCompleted(t.entry)},this);else if(this._scenes&&this.delegate&&this._scenes.length>0){var t=Object.create(g).init();t.animations=this._animations,this._scenes[0].animationManager=t,this.delegate.loadCompleted(this._scenes[0])}}}},handleAnimation:{value:function(e,t){this._animations||(this._animations=[]);var n=Object.create(_).initWithDescription(t);n.id=e,this.storeEntry(e,n,t);var i={};Object.keys(t.parameters).forEach(function(r){var s=t.parameters[r];switch(parameterDescription=this.getEntry(s).entry,parameterDescription.type){case WebGLRenderingContext.FLOAT_VEC4:componentsPerAttribute=4;break;case WebGLRenderingContext.FLOAT_VEC3:componentsPerAttribute=3;break;case WebGLRenderingContext.FLOAT_VEC2:componentsPerAttribute=2;break;case WebGLRenderingContext.FLOAT:componentsPerAttribute=1;break;default:console.log("type:"+parameterDescription.type+" byteStride not handled")}if(parameterDescription.extensions){var a=parameterDescription.extensions;if(a){var o=a["Open3DGC-compression"];if(o){var l=o.compressedData;l&&(l.bufferView=this.getEntry(l.bufferView).entry,l.id=e+r+"_compressedData")}}}parameterDescription.byteStride=4*componentsPerAttribute,parameterDescription.componentsPerAttribute=componentsPerAttribute,parameterDescription.id=n.id+r,i[r]=parameterDescription},this),n.parameters=i,n.channels.forEach(function(e){var t=e.target.id;e.path=e.target.path,e.target=this.getEntry(t).entry},this),Object.keys(n.samplers).forEach(function(e){var r=t.samplers[e],s=n.samplers[e],a=r.input,o=r.output;s.input=i[a],s.output=i[o]},this),this._animations.push(n)}},handleTexture:{value:function(e,t){if(t.source&&t.sampler)t.type="texture",t.source=this.getEntry(t.source).entry,t.sampler=this.getEntry(t.sampler).entry,t.id=e,this.storeEntry(e,t,t);else if(t.sources&&t.sampler){t.type="texture";for(var n=0;t.sources.length>n;n++)t.sources[n]=this.getEntry(t.sources[n]).entry;t.sampler=this.getEntry(t.sampler).entry,t.id=e,this.storeEntry(e,t,t)}else console.log("ERROR: texture"+e+" must contain both source and sampler properties")}},handleSampler:{value:function(e,t){t.id=t,this.storeEntry(e,t,t)}},handleError:{value:function(){}},_delegate:{value:null,writable:!0},delegate:{enumerable:!0,get:function(){return this._delegate},set:function(e){this._delegate=e}},_entries:{enumerable:!1,value:null,writable:!0},removeAllEntries:{value:function(){this._entries={}}},containsEntry:{enumerable:!1,value:function(e){return this._entries?this._entries[e]?!0:!1:!1}},storeEntry:{enumerable:!1,value:function(e,t,n){return null==this._entries&&(this._entries={}),null==this._ids&&(this._ids={}),t.baseId=e,this._ids[e]=t,(e+=this.loaderContext())?(t.id=e,this.containsEntry[e]&&console.log("WARNING: entry:"+e+" is already stored, overriding"),this._entries[e]={id:e,entry:t,description:n},e):(console.log("ERROR: not id provided, cannot store"),void 0)}},getEntry:{enumerable:!1,value:function(e){return e+=this.loaderContext(),this._entries?this._entries[e]:null}}})}});