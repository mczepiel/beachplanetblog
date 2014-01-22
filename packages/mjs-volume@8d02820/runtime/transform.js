require("runtime/dependencies/gl-matrix");var Base=require("runtime/base").Base,Utilities=require("runtime/utilities").Utilities,Transform=exports.Transform=Object.create(Base,{_matrix:{value:null,writable:!0},_dirty:{value:!0,writable:!0},_dirtyTranslation:{value:!1,writable:!0},_dirtyRotation:{value:!1,writable:!0},_dirtyScale:{value:!1,writable:!0},_translation:{value:null,writable:!0},_orientation:{value:null,writable:!0},_rotation:{value:null,writable:!0},_scale:{value:null,writable:!0},_id:{value:0,writable:!0},_AXIS_ANGLE:{value:1,writable:!0},_QUATERNION:{value:2,writable:!0},_rotationMode:{value:1,writable:!0},_fireTransformDidUpdate:{value:function(){if(this._observers)for(var e=0;this._observers.length>e;e++)this._observers[e].transformDidUpdate(this)}},_updateDirtyFlag:{value:function(e){this._dirty=e,this._fireTransformDidUpdate()}},interpolateToTransform:{value:function(e,t,n){if(this._rebuildAffinesIfNeeded(),e._rebuildAffinesIfNeeded(),Utilities.interpolateVec(this._translation,e._translation,t,n._translation),Utilities.interpolateVec(this._scale,e._scale,t,n._scale),e._rotationMode===Transform._AXIS_ANGLE){var i=vec4.create();this._rotationMode==Transform._QUATERNION&&(this.rotation=vec4.createFrom(e._rotation[0],e._rotation[1],e._rotation[2],-this.rotation[3])),Utilities.interpolateVec(this.rotation,e._rotation,t,i),n.rotation=i}else{var r=vec4.create();quat4.slerp(this.orientation,e.orientation,t,r),n.orientation=r}n._updateDirtyFlag(!0)}},matrix:{get:function(){return this._dirty&&(null==this._matrix&&(this._matrix=mat4.create()),null==this._intermediateMatrices&&(this._intermediateMatrices=[],this._intermediateMatrices.push(mat4.identity()),this._intermediateMatrices.push(mat4.identity()),this._intermediateMatrices.push(mat4.identity()),this._intermediateMatrices.push(mat4.identity())),mat4.identity(this._matrix),mat4.identity(this._intermediateMatrices[0]),mat4.set(this._intermediateMatrices[0],this._intermediateMatrices[1]),mat4.set(this._intermediateMatrices[0],this._intermediateMatrices[2]),mat4.set(this._intermediateMatrices[0],this._intermediateMatrices[3]),mat4.translate(this._intermediateMatrices[1],this._translation),mat4.scale(this._intermediateMatrices[2],this._scale),this._rotationMode===Transform._AXIS_ANGLE?(mat4.identity(this._intermediateMatrices[3]),mat4.rotate(this._intermediateMatrices[3],this._rotation[3],this._rotation)):quat4.toMat4(this._orientation,this._intermediateMatrices[3]),mat4.multiply(this._matrix,this._intermediateMatrices[1]),mat4.multiply(this._matrix,this._intermediateMatrices[2]),mat4.multiply(this._matrix,this._intermediateMatrices[3]),this._dirty=!1),this._matrix},set:function(e){null==this._matrix&&(this._matrix=mat4.create()),mat4.set(e,this._matrix),this._updateDirtyFlag(!1),this._dirtyTranslation=this._dirtyRotation=this._dirtyScale=!0,this._rotationMode=this._QUATERNION}},_rebuildAffinesIfNeeded:{value:function(){(this._dirtyTranslation||this._dirtyRotation||this._dirtyScale)&&(Utilities.decomposeMat4(this.matrix,this._dirtyTranslation?this._translation:null,this._dirtyRotation?this._orientation:null,this._dirtyScale?this._scale:null),this._dirtyTranslation=this._dirtyRotation=this._dirtyScale=!1,this._rotationMode==Transform._AXIS_ANGLE?this.rotation=vec4.create(this.rotation):this.orientation=vec4.create(this.orientation))}},translation:{set:function(e){this._translation=e,this._dirtyTranslation=!1,this._updateDirtyFlag(!0)},get:function(){return this._dirtyTranslation&&this._rebuildAffinesIfNeeded(),this._translation}},orientation:{set:function(e){this._dirtyRotation=!1,this._rotationMode=Transform._QUATERNION,this._orientation=e,this._updateDirtyFlag(!0)},get:function(){return this._dirtyRotation&&this._rebuildAffinesIfNeeded(),this._rotationMode!==Transform._QUATERNION&&quat4.fromAngleAxis(this._rotation[3],this._rotation,this._orientation),this._orientation}},rotation:{set:function(e){this._dirtyRotation=!1,this._rotationMode=Transform._AXIS_ANGLE,this._rotation=e,this._updateDirtyFlag(!0)},get:function(){return this._dirtyRotation&&this._rebuildAffinesIfNeeded(),this._rotationMode!==Transform._AXIS_ANGLE&&quat4.toAngleAxis(this._orientation,this._rotation),this._rotation}},scale:{set:function(e){this._dirtyScale=!1,this._scale=e,this._updateDirtyFlag(!0)},get:function(){return this._dirtyScale&&this._rebuildAffinesIfNeeded(),this._scale}},_commonInit:{value:function(){this.translation=vec3.createFrom(0,0,0),this.rotation=vec4.createFrom(0,0,0,0),this.orientation=vec4.createFrom(0,0,0,0),this.scale=vec3.createFrom(1,1,1),this.matrix=mat4.identity(),this._id=Transform.bumpId()}},initWithDescription:{value:function(e){if(this._commonInit(),e.matrix)this.matrix=mat4.create(e.matrix);else if(e.translation||e.rotation||e.scale){if(this.translation=e.translation?vec3.create(e.translation):vec3.createFrom(0,0,0),e.rotation)this.rotation=vec4.create(e.rotation);else if(e.orientation){var t=e.orientation;this.orientation=quat4.fromAngleAxis(t[3],vec3.createFrom(t[0],t[1],t[2]))}this.scale=e.scale?vec3.create(e.scale):vec3.createFrom(1,1,1)}else this.matrix=mat4.identity();return this}},init:{value:function(){return this._commonInit(),this}},bumpId:{value:function(){return Transform._id++,Transform._id}},copy:{value:function(){var e=Object.create(Transform).init();return null!=this._translation&&(e.translation=vec3.create(this._translation)),null!=this._scale&&(e.scale=vec3.create(this._scale)),null!=this._orientation&&(e.orientation=quat4.create(this._orientation)),null!=this._rotation&&(e.rotation=vec4.create(this._rotation)),e.matrix=mat4.create(this.matrix),e}},_observers:{value:null,writable:!0},addObserver:{value:function(e){null==this._observers&&(this._observers=[]),-1===this._observers.indexOf(e)?this._observers.push(e):console.log("WARNING attempt to add 2 times the same observer in transform")}},removeObserver:{value:function(e){if(this._observers){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}}}});