montageDefine("bfd16e7","core/meta/property-blueprint",{dependencies:["montage","core/enum","core/logger"],factory:function(e,t){"use strict";var n=e("montage").Montage,i=e("core/enum").Enum;e("core/logger").logger("blueprint"),(new i).initWithMembers("string","number","boolean","date","enum","url","object"),(new i).initWithMembers("list","set","map");var r={name:"default",cardinality:1,mandatory:!1,readOnly:!1,denyDelete:!1,valueType:"string",collectionValueType:"list",valueObjectPrototypeName:"",valueObjectModuleId:"",enumValues:[],helpKey:""};t.PropertyBlueprint=n.specialize({constructor:{value:function(){this.super()}},initWithNameBlueprintAndCardinality:{value:function(e,t,n){return this._name=null!==e?e:r.name,this._owner=t,this.cardinality=n>0?n:r.cardinality,this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),e.setProperty("blueprint",this._owner,"reference"),1/0===this.cardinality?e.setProperty("cardinality",-1):this._setPropertyWithDefaults(e,"cardinality",this.cardinality),this._setPropertyWithDefaults(e,"mandatory",this.mandatory),this._setPropertyWithDefaults(e,"readOnly",this.readOnly),this._setPropertyWithDefaults(e,"denyDelete",this.denyDelete),this._setPropertyWithDefaults(e,"valueType",this.valueType),this._setPropertyWithDefaults(e,"collectionValueType",this.collectionValueType),this._setPropertyWithDefaults(e,"valueObjectPrototypeName",this.valueObjectPrototypeName),this._setPropertyWithDefaults(e,"valueObjectModuleId",this.valueObjectModuleId),this.enumValues.length>0&&this._setPropertyWithDefaults(e,"enumValues",this.enumValues),this._setPropertyWithDefaults(e,"helpKey",this.helpKey)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name"),this._owner=e.getProperty("blueprint"),this.cardinality=this._getPropertyWithDefaults(e,"cardinality"),-1===this.cardinality&&(this.cardinality=1/0),this.mandatory=this._getPropertyWithDefaults(e,"mandatory"),this.readOnly=this._getPropertyWithDefaults(e,"readOnly"),this.denyDelete=this._getPropertyWithDefaults(e,"denyDelete"),this.valueType=this._getPropertyWithDefaults(e,"valueType"),this.collectionValueType=this._getPropertyWithDefaults(e,"collectionValueType"),this.valueObjectPrototypeName=this._getPropertyWithDefaults(e,"valueObjectPrototypeName"),this.valueObjectModuleId=this._getPropertyWithDefaults(e,"valueObjectModuleId"),this.enumValues=this._getPropertyWithDefaults(e,"enumValues"),this.helpKey=this._getPropertyWithDefaults(e,"helpKey")}},_setPropertyWithDefaults:{value:function(e,t,n){n!=r[t]&&e.setProperty(t,n)}},_getPropertyWithDefaults:{value:function(e,t){var n=e.getProperty(t);return n?n:r[t]}},_owner:{value:null},owner:{get:function(){return this._owner}},_name:{value:null},name:{serializable:!1,get:function(){return this._name}},identifier:{get:function(){return[this.owner.identifier,this.name].join("_")}},cardinality:{value:r.cardinality},mandatory:{value:r.mandatory},denyDelete:{value:r.denyDelete},readOnly:{value:r.readOnly},isAssociationBlueprint:{get:function(){return!1}},isToMany:{get:function(){return 1/0===this.cardinality||this.cardinality>1}},isDerived:{get:function(){return!1}},valueType:{value:r.valueType},collectionValueType:{value:r.collectionValueType},valueObjectPrototypeName:{value:r.valueObjectPrototypeName},valueObjectModuleId:{value:r.valueObjectModuleId},_enumValues:{value:null},enumValues:{get:function(){return this._enumValues?this._enumValues:[]},set:function(e){Array.isArray(e)&&(this._enumValues=e)}},helpKey:{value:r.helpKey},blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});