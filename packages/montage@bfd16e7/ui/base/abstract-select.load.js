montageDefine("bfd16e7","ui/base/abstract-select",{dependencies:["montage","ui/base/abstract-control","composer/press-composer","core/range-controller","collections/dict"],factory:function(e,t){var n=(e("montage").Montage,e("ui/base/abstract-control").AbstractControl),i=e("composer/press-composer").PressComposer,r=e("core/range-controller").RangeController;e("collections/dict");var a=t.AbstractSelect=n.specialize({constructor:{value:function a(){if(this.constructor===a)throw Error("AbstractSelect cannot be instantiated.");n.constructor.call(this),this._pressComposer=new i,this.addComposer(this._pressComposer),this.contentController=new r,this._values=[],this.defineBindings({content:{"<->":"contentController.content"},values:{"<->":"contentController.selection"},value:{"<->":"values.0"},"contentController.multiSelect":{"<-":"multiSelect"},"classList.has('montage--disabled')":{"<-":"!enabled"},"classList.has('montage--active')":{"<-":"active"}}),this.addRangeAtPathChangeListener("content",this,"handleContentRangeChange"),this.addRangeAtPathChangeListener("values",this,"handleValuesRangeChange"),this.classList.add("matte-Select")}},enabled:{value:!0},acceptsActiveTarget:{value:!0},_pressComposer:{value:null},active:{value:!1},content:{value:null},contentController:{value:null},_labelPropertyName:{value:"label"},labelPropertyName:{set:function(e){this._labelPropertyName=e?e:"label",this._contentIsDirty=!0,this.needsDraw=!0},get:function(){return this._labelPropertyName}},_value:{value:null},value:{get:function(){return this._value},set:function(e){e!==this._value&&(this._value=e,this.needsDraw=!0)}},_values:{value:null},values:{get:function(){return this._values},set:function(e){this._values=e,this.needsDraw=!0}},multiSelect:{value:!1},_contentIsDirty:{value:!0},prepareForActivationEvents:{value:function(){this._pressComposer.addEventListener("pressStart",this,!1),this._pressComposer.addEventListener("press",this,!1),this._pressComposer.addEventListener("pressCancel",this,!1)}},handlePressStart:{value:function(e){this.active=!0,e.touch&&document.addEventListener("touchmove",this,!1)}},handlePress:{value:function(){this.active=!1,this.enabled&&(this.dispatchActionEvent(),document.removeEventListener("touchmove",this,!1))}},handlePressCancel:{value:function(){this.active=!1,document.removeEventListener("touchmove",this,!1)}},handleTouchmove:{value:function(e){e.preventDefault()}},handleContentRangeChange:{value:function(){this._contentIsDirty=!0,this.needsDraw=!0}},handleValuesRangeChange:{value:function(){this.needsDraw=!0}},enterDocument:{value:function(e){e&&this.element.setAttribute("role","listbox")}}})}});