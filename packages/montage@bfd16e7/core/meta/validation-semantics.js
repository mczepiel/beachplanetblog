"use strict";var Montage=require("montage").Montage,Semantics=Montage,logger=require("core/logger").logger("blueprint"),PropertyValidationSemantics=exports.PropertyValidationSemantics=Semantics.create(Semantics,{constructor:{value:function PropertyValidationSemantics(){this.super()}},initWithBlueprint:{value:function(e){return this._blueprint=e,this}},_blueprint:{value:null},blueprint:{get:function(){return this._blueprint}},compile:{value:function(e,t){Semantics.compile.call(this,e,t)}},operators:{value:{isBound:function(e){return!e}}},evaluators:{value:{isBound:function(e,t){var n=this;return function(i,r){return i=n.count(e(i,r)),t(i,r)}}}}});for(var operator in Semantics.operators)PropertyValidationSemantics.operators[operator]=Semantics.operators[operator];for(var evaluator in Semantics.evaluators)PropertyValidationSemantics.evaluators[evaluator]=Semantics.evaluators[evaluator];