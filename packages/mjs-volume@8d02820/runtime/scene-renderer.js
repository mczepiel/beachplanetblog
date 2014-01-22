require("runtime/dependencies/gl-matrix");var Technique=require("runtime/technique").Technique,ScenePass=require("runtime/pass").ScenePass,BuiltInAssets=require("runtime/builtin-assets").BuiltInAssets,o3dgc=require("runtime/dependencies/o3dgc");exports.SceneRenderer=Object.create(Object.prototype,{loadPickingTechnique:{value:function(){var e=this,t=BuiltInAssets.assetWithName("pickingTechnique");t.then(function(t){e.technique.rootPass.scenePassRenderer.pickingTechnique=t},function(){},function(){})}},createTechniqueIfNeeded:{value:function(){if(!this._technique){this._technique=Object.create(Technique).init();var e=Object.create(ScenePass).init();this._technique.passes={defaultPass:e}}}},_webGLRenderer:{value:null,writable:!0},_technique:{value:null,writable:!0},technique:{get:function(){return this._technique},set:function(e){this._technique=e}},compressedMeshDelegate:{value:{str2ab:function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),i=0,r=e.length;r>i;i++)n[i]=e.charCodeAt(i);return t},decode:function(e,t){if(e){if(t)var n=new o3dgc.BinaryStream(this.str2ab(e));else var n=new o3dgc.BinaryStream(e);var i=new o3dgc.SC3DMCDecoder,r=new o3dgc.Timer,a=new o3dgc.IndexedFaceSet;r.Tic(),i.DecodeHeader(a,n),r.Toc(),console.log("DecodeHeader time (ms) "+r.GetElapsedTime());var s=12*a.GetNCoord()+12*a.GetNNormal(),o=new ArrayBuffer(s),l=new ArrayBuffer(6*a.GetNCoordIndex()),u=0;a.GetNCoordIndex()>0&&a.SetCoordIndex(new Uint16Array(l,0,3*a.GetNCoordIndex())),a.GetNCoord()>0&&(a.SetCoord(new Float32Array(o,u,3*a.GetNCoord())),u+=12*a.GetNCoord()),a.GetNNormal()>0&&(a.SetNormal(new Float32Array(o,u,3*a.GetNNormal())),u+=12*a.GetNNormal());for(var c=a.GetNumFloatAttributes(),h=0;c>h;++h)a.GetNFloatAttribute(h)>0&&a.SetFloatAttribute(h,new Float32Array(a.GetFloatAttributeDim(h)*a.GetNFloatAttribute(h)));return r.Tic(),i.DecodePlayload(a,n),r.Toc(),a}},handleError:function(e,t){console.log("ERROR:vertexAttributeBufferDelegate:"+e+" :"+t)},decompressAttribsInner_:function(e,t,n,i,r,a,s,o){for(var l=0,u=t;n>u;u++){var c=e.charCodeAt(u);l+=c>>1^-(1&c),i[r]=o*(l+s),r+=a}},decompressIndices_:function(e,t,n,i,r){for(var a=0,s=0;n>s;s++){var o=e.charCodeAt(t++);i[r++]=a-o,0==o&&a++}},decompressMesh:function(e,t,n,i){for(var r=n.decodeScales.length,a=n.decodeOffsets,s=n.decodeScales,o=t.attribRange[0],l=t.attribRange[1],u=o,c=new Float32Array(r*l),h=0;r>h;h++){var d=u+l,p=s[h];p&&this.decompressAttribsInner_(e,u,d,c,h,r,a[h],p),u=d}t.indexRange[0];var m=3*t.indexRange[1],f=new Uint16Array(m);this.decompressIndices_(e,u,m,f,0),i(c,f,null,t)},convert:function(e,t,n){var i=n.mesh.compression;if("won-compression"==i.type){var r=i.indexRange;r&&(r[0]+3*r[1],this.decompressMesh(t,i,i,function(e,t){n.renderer.setupCompressedMesh(n.mesh,e,t)}))}else{var a=0;if(n.mesh,i.compressedData){var s=i.compressedData;a=s.verticesCount;var o=this.decode(t,"ascii"===s.mode),l=o.GetCoordIndex(),u=o.GetCoord(),c=o.GetNNormal()>0?o.GetNormal():null;n.renderer.setupCompressedMesh2(n.mesh,a,u,c,o,s.floatAttributesIndexes,l)}}return t},resourceAvailable:function(){}}},scene:{get:function(){return this.technique.rootPass.scene},set:function(e){var t=this,n=this.technique.rootPass.scene;n!=e&&(this.technique.rootPass.scene=e,this.scene.rootNode.apply(function(e){e.meshes&&e.meshes.forEach(function(e){if(e.compression){var n="text";e.compression.compressedData.mode&&"binary"==e.compression.compressedData.mode&&(n="arraybuffer"),e.compression.compressedData.requestType=n,t.webGLRenderer.resourceManager.getResource(e.compression.compressedData,t.compressedMeshDelegate,{mesh:e,renderer:t.webGLRenderer})}},this)},!0,null))}},webGLRenderer:{get:function(){return this._webGLRenderer},set:function(e){this._webGLRenderer=e}},init:{value:function(e){return this.webGLRenderer=e,this.createTechniqueIfNeeded(),this.loadPickingTechnique(),this}},render:{value:function(e,t){this.technique&&this.technique.execute(this.webGLRenderer,e,t)}}});