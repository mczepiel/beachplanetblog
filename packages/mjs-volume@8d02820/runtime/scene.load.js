montageDefine("8d02820","runtime/scene",{dependencies:["montage","runtime/node","runtime/runtime-tf-loader","montage/core/url","runtime/scene-resource-loader","q","montage/core/target"],factory:function(e,t){var n=e("montage").Montage,i=e("runtime/node").Node,r=e("runtime/runtime-tf-loader").RuntimeTFLoader,s=e("montage/core/url"),a=e("runtime/scene-resource-loader").SceneResourceLoader,o=e("q"),l=e("montage/core/target").Target;t.Scene=l.specialize({constructor:{value:function(){this.super()}},_resourcesLoaded:{value:!1,writable:!0},_glTFElement:{value:null,writable:!0},_rootNode:{value:null,writable:!0},rootNode:{get:function(){return"loaded"===this.status&&null==this._rootNode&&(this._rootNode=n.create(i),this._rootNode.scene=this,this._rootNode.id=this.glTFElement.rootNode.id),this._rootNode}},sceneResourcesDidPrepare:{value:function(){this._resourcesLoaded||(this._prepareToRenderDefer&&this._prepareToRenderDefer.resolve(),this._resourcesLoaded=!0,this.dispatchEventNamed("resourcesDidLoad",!0,!1,this),this.status="loaded")}},isLoaded:{value:function(){return"loaded"==this.status}},status:{value:0,writable:!0},styleSheetsLoaded:{value:!1,writable:!0},styleSheets:{value:null,writable:!0},loadCSSStyles:{value:function(){if(null!=document.styleSheets){var t,n,i=Object.keys(e.packages),r=0,s=document.styleSheets.length,a=[];for(this.styleSheets={},t=0;s>t;t++)n=document.styleSheets[t],null!=n.href&&-1!=n.href.indexOf(i[0])&&-1==n.href.indexOf(i[0]+"node_modules")&&a.push(n);return s=a.length,0===s?(this.styleSheetsLoaded=!0,void 0):(a.forEach(function(e){var t=this,n=e.href,i=new XMLHttpRequest;i.open("GET",n,!0),i.onreadystatechange=function(){if(4==i.readyState&&200==i.status){var n=CSSOM.parse(i.responseText);t.styleSheets[e.href]=n,r++,r===s&&t.dispatchEventNamed("styleSheetsDidLoad",!0,!1,t)}},i.send(null)},this),!1)}}},path:{set:function(t){if(t){if(-1===t.indexOf(".json"))return;var n=s.parse(t);if(!n.scheme){var i=Object.keys(e.packages);t=s.resolve(i[0],t)}}if(t!==this._path){var a={};if(a.loadCompleted=function(e){this.totalBufferSize=o.totalBufferSize,this.glTFElement=e,this.status="loaded",console.log("scene loaded:"+this._path)}.bind(this),t){var o=Object.create(r);this.status="loading",o.initWithPath(t),o.delegate=a,o.load(null,null)}else this.scene=null;this._path=t}},get:function(){return this._path}},_prepareToRenderDefer:{value:null,writable:!0},prepareToRender:{value:function(e){if(null==this._prepareToRenderDefer){this._prepareToRenderDefer=o.defer();var t=Object.create(a).init(this.glTFElement,e,this);t.loadScene()}return this._prepareToRenderDefer.promise}},init:{value:function(e){return e&&(this.glTFElement=e,this.status="loaded"),this}}})}});