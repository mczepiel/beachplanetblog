require("runtime/dependencies/gl-matrix");var Utilities=require("runtime/utilities").Utilities,Transform=require("runtime/transform").Transform,Montage=require("montage").Montage;exports.CameraController=Montage.specialize({constructor:{value:function(){this.super(),this._lastPosition=[0,0]}},_deltaForEvent:{value:function(e){return null!=e.wheelDeltaY?e.wheelDeltaY:-e.deltaY}},_minimalDistance:{value:0,writable:!0},_computeInitialDistance:{value:function(){if(this.sceneBBox){var e=this.sceneBBox,t=vec3.createFrom((e[1][0]-e[0][0])/2,(e[1][1]-e[0][1])/2,(e[1][2]-e[0][2])/2),n=vec3.length(t),i=[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2,(e[0][2]+e[1][2])/2],r=vec3.create(this.viewPoint.glTFElement.transform.translation),o=vec3.create();o[0]=i[0]-r[0],o[1]=i[1]-r[1],o[2]=i[2]-r[2];var a=vec3.length(o);this._minimalDistance=n>a?a:n,this.zoomStep=1e-4*n}}},viewPointDidChange:{value:function(){this._computeInitialDistance()}},_viewPoint:{value:null,writable:!0},viewPoint:{get:function(){return this._viewPoint},set:function(e){this._viewPoint!=e&&(this._viewPoint=e,this.viewPointDidChange())}},_node:{value:null,writable:!0},zoomStep:{value:0,writable:!0},sceneBBox:{value:null,writable:!0},nodeDidChange:{value:function(){var e=this.node.glTFElement;this.sceneBBox=e.getBoundingBox(!0),this._computeInitialDistance()}},node:{get:function(){return this._node},set:function(e){this._node!=e&&(this._node=e,this.nodeDidChange())}},_lastPosition:{value:null,writable:!0},_transform:{value:null,writable:!0},_axisUp:{value:null,writable:!0},zoom:{value:function(e){if(!this.moving){var t,n=vec3.create(),i=vec3.create(this.viewPoint.glTFElement.transform.translation);this.node.glTFElement;var r=this.sceneBBox;t=[(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2,(r[0][2]+r[1][2])/2],n[0]=t[0]-i[0],n[1]=t[1]-i[1],n[2]=t[2]-i[2],vec3.normalize(n);var o=this._deltaForEvent(e),a=this.zoomStep*o;i[0]+=a*n[0],i[1]+=a*n[1],i[2]+=a*n[2];var s=vec3.create();s[0]=t[0]-i[0],s[1]=t[1]-i[1],s[2]=t[2]-i[2];var l=vec3.length(s);if(l>this._minimalDistance)this.viewPoint.glTFElement.transform.translation=i;else{var u=o>0?-this._minimalDistance:this._minimalDistance;i[0]=t[0]+n[0]*u,i[1]=t[1]+n[1]*u,i[2]=t[2]+n[2]*u,this.viewPoint.glTFElement.transform.translation=i}}}},translate:{value:function(e){if(this._transform.matrix=this.viewPoint.glTFElement.worldMatrix,0!=this.moving){var t=e.translateX-this._lastPosition[0],n=e.translateY-this._lastPosition[1];this._lastPosition[0]=e.translateX,this._lastPosition[1]=e.translateY,t*=.05,n*=-.05,this._axisUp=vec3.createFrom(0,1,0),mat4.rotateVec3(this._transform.matrix,this._axisUp);var i,r=!1;if(0==r){this.node.glTFElement;var o=this.sceneBBox;i=[(o[0][0]+o[1][0])/2,(o[0][1]+o[1][1])/2,(o[0][2]+o[1][2])/2]}var a=vec3.create(),s=vec3.create(this._transform.translation);a[0]=i[0]-s[0],a[1]=i[1]-s[1],a[2]=i[2]-s[2];var l=vec3.create(this._axisUp),u=vec3.create();vec3.normalize(a),vec3.cross(a,this._axisUp,u),vec3.normalize(u),vec3.cross(a,u,l),vec3.normalize(l);var h=mat4.identity(),c=0;c=Math.abs(n)>Math.abs(t)?Math.abs(n)/Math.abs(t):Math.abs(t)/Math.abs(n),c>.5?(mat4.rotate(h,t,l),mat4.rotate(h,n,u)):Math.abs(n)>Math.abs(t)?mat4.rotate(h,n,u):mat4.rotate(h,t,l),s[0]-=i[0],s[1]-=i[1],s[2]-=i[2],mat4.rotateVec3(h,s),s[0]+=i[0],s[1]+=i[1],s[2]+=i[2];var p=mat4.identity();mat4.multiply3(h,this._transform.matrix,p);var d=mat4.identity();mat4.translate(d,s);var f=mat4.identity();mat4.multiply(d,p,f),this.viewPoint.glTFElement.transform.matrix=f}}},beginTranslate:{value:function(){this.moving=!0,null==this._transform&&(this._transform=Object.create(Transform).init()),this._transform.matrix=this.viewPoint.glTFElement.worldMatrix}},endTranslate:{value:function(){this.moving=!1,this._axisUp=null}}});