montageDefine("8d02820","runtime/primitive",{dependencies:["runtime/dependencies/gl-matrix","runtime/utilities"],factory:function(e,t){e("runtime/dependencies/gl-matrix"),e("runtime/utilities").Utilities,t.Primitive=Object.create(Object.prototype,{_attributesCount:{enumerable:!1,value:0,writable:!0},attributesCount:{enumerable:!1,get:function(){return this._attributesCount}},init:{value:function(){return this.step=0,this.semantics={},this}},_semantics:{enumerable:!1,value:null,writable:!0},semantics:{enumerable:!0,get:function(){return this._semantics},set:function(e){this._semantics=e}},addVertexAttribute:{enumerable:!1,value:function(e){if("POSITION"===e.semantic){var t=null,n=e.attribute;n.min&&n.max&&(t=[n.min,n.max]),this.boundingBox=t}this.semantics[e.semantics]||(this.semantics[e.semantic]=e.attribute,this._attributesCount++)}},_computeBBOXIfNeeded:{enumerable:!1,value:function(){}},_boundingBox:{value:null,writable:!0},boundingBox:{enumerable:!0,get:function(){return this._computeBBOXIfNeeded(),this._boundingBox},set:function(e){this._boundingBox=e}},_indices:{enumerable:!1,value:null,writable:!0},indices:{get:function(){return this._indices},set:function(e){this._indices=e}},_material:{enumerable:!1,value:null,writable:!0},material:{get:function(){return this._material},set:function(e){this._material=e}}})}});