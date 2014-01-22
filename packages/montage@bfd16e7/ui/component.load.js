montageDefine("bfd16e7","ui/component",{dependencies:["montage","core/target","core/bindings","core/template","core/document-resources","core/gate","core/promise","core/logger","core/event/event-manager","collections/set","core/application"],factory:function(e,t){var n=e("montage").Montage,i=e("core/target").Target,r=e("core/bindings").Bindings,a=e("core/template").Template,s=e("core/document-resources").DocumentResources,o=e("core/gate").Gate,l=e("core/promise").Promise,u=e("core/logger").logger("component"),c=e("core/logger").logger("Drawing performance"),h=e("core/logger").logger("drawing"),d=e("core/event/event-manager").defaultEventManager,p=e("collections/set"),m=t.Component=i.specialize({DOM_ARG_ATTRIBUTE:{value:"data-arg"},constructor:{value:function m(){this.super(),this._isComponentExpanded=!1,this._isTemplateLoaded=!1,this._isTemplateInstantiated=!1,this._isComponentTreeLoaded=!1}},delegate:{value:null},templateObjects:{serializable:!1,value:null},_nextTarget:{value:null},nextTarget:{get:function(){return this._nextTarget||this.parentComponent},set:function(e){this._nextTarget=e}},_ownerDocumentPart:{value:null},_templateDocumentPart:{value:null},_domArguments:{value:null},_dispatchActionEvent:{value:function(){this.dispatchEvent(this.createActionEvent())},enumerable:!1},createActionEvent:{value:function(){var e=document.createEvent("CustomEvent");return e.initCustomEvent("action",!0,!0,null),e}},canDrawGate:{get:function(){return this._canDrawGate||(this._canDrawGate=(new o).initWithDelegate(this),this._canDrawGate.setField("componentTreeLoaded",!1)),this._canDrawGate},enumerable:!1},_blockDrawGate:{value:null},blockDrawGate:{enumerable:!1,get:function(){return this._blockDrawGate||(this._blockDrawGate=(new o).initWithDelegate(this),this._blockDrawGate.setField("element",!1),this._blockDrawGate.setField("drawRequested",!1)),this._blockDrawGate}},_firstDraw:{enumerable:!1,value:!0},_completedFirstDraw:{enumerable:!1,value:!1},originalElement:{value:null},_element:{enumerable:!1,value:null},element:{get:function(){return this._element},set:function(e){if(null==e)return console.warn("Tried to set element of ",this," to ",e),void 0;if(this.isDeserializing)this.eventManager.registerEventHandlerForElement(this,e),this._isTemplateInstantiated?this._templateElement||(this._templateElement=e):(this._element=e,!this.blockDrawGate.value&&this._element&&this.blockDrawGate.setField("element",!0));else{if(!this._firstDraw)return console.error("Cannot change element of ",this," after it has been set"),void 0;this.eventManager.registerEventHandlerForElement(this,e),this._element=e,!this.blockDrawGate.value&&this._element&&this.blockDrawGate.setField("element",!0)}this._initializeClassListFromElement(e)}},getElementId:{value:function(){var e=this._element;return e?e.getAttribute("data-montage-id"):void 0}},_initDomArguments:{value:function(){var e,t,n,i={},r=this.element;e=r.querySelectorAll("*["+this.DOM_ARG_ATTRIBUTE+"]");e:for(var a,s=0;a=e[s];s++){for(n=a;(n=n.parentNode)!==r;)if(n.component)continue e;this._findAndDetachComponents(a),a.parentNode.removeChild(a),t=a.getAttribute(this.DOM_ARG_ATTRIBUTE),a.removeAttribute(this.DOM_ARG_ATTRIBUTE),i[t]=a}this._domArguments=i}},getDomArgumentNames:{value:function(){return Object.keys(this._domArguments)}},extractDomArgument:{value:function(e){var t;return t=this._domArguments[e],delete this._domArguments[e],t}},_getDomArgument:{value:function(e,t){var n,i,r,a,s;n=e.querySelectorAll("*["+this.DOM_ARG_ATTRIBUTE+"='"+t+"']");e:for(var o,l=0;o=n[l];l++){for(i=o;(i=i.parentNode)!==e;)if(r=this._template.getElementId(i),r&&(a=this._template.getSerialization(),s=a.getSerializationLabelsWithElements(r),s.length>0))continue e;return o}}},getTemplateParameterArgument:{value:function(e,t){var n,i,r;return n=e.getElementById(this.getElementId()),"*"===t?(i=e.document.createRange(),i.selectNodeContents(n),r=i.cloneContents()):(r=this._getDomArgument(n,t).cloneNode(!0),r.removeAttribute(this.DOM_ARG_ATTRIBUTE)),r}},setElementWithParentComponent:{value:function(e,t){this._alternateParentComponent=t,this.element!==e&&(this.element=e)}},application:{enumerable:!1,get:function(){return e("core/application").application}},eventManager:{enumerable:!1,get:function(){return d}},rootComponent:{enumerable:!1,get:function(){return v}},elementControllerFromEvent:{enumerable:!1,value:function(e,t){return t}},_alternateParentComponent:{value:null},__parentComponent:{value:null},_parentComponent:{set:function(e){this.__parentComponent=e,this.dispatchOwnPropertyChange("parentComponent",e)},get:function(){return this.__parentComponent}},parentComponent:{enumerable:!1,get:function(){return this._parentComponent}},findParentComponent:{value:function(){var e,t=this.element,n=this.eventManager;if(t){for(;null!=(e=t.parentNode)&&null==n.eventHandlerForElement(e);)t=e;return e?n.eventHandlerForElement(e):this._alternateParentComponent}}},querySelectorComponent:{value:function(e){if("string"!=typeof e)throw"querySelectorComponent: Selector needs to be a string.";var t=e.match(/^\s*(?:@([^>\s]+))?(?:\s*(>)?\s*@([^>\s]+)(.*))?$/);if(!t)throw'querySelectorComponent: Syntax error "'+e+'"';var i,r,a,s=this.childComponents,o=t[1],l=(t[2]||" ",t[3]),u=t[4];if(o)for(u=l?"@"+l+u:"",r=0,a;a=s[r];r++){if(o===n.getInfoForObject(a).label)return u?a.querySelectorComponent(u):a;if(i=a.querySelectorComponent(e))return i}else for(r=0,a;a=s[r];r++)if(l===n.getInfoForObject(a).label)return u?a.querySelectorComponent(u):a;return null}},querySelectorAllComponent:{value:function(e,t){if("string"!=typeof e)throw"querySelectorComponent: Selector needs to be a string.";var i=e.match(/^\s*(?:@([^>\s]+))?(?:\s*(>)?\s*@([^>\s]+)(.*))?$/);if(!i)throw'querySelectorComponent: Syntax error "'+e+'"';var r,a,s=this.childComponents,o=i[1],l=(i[2]||" ",i[3]),u=i[4],c=[];if(o)for(u=l?"@"+l+u:"",r=0,a;a=s[r];r++)o!==n.getInfoForObject(a).label||t&&t!==a.ownerComponent?c=c.concat(a.querySelectorAllComponent(e,t)):u?c=c.concat(a.querySelectorAllComponent(u)):c.push(a);else for(r=0,a;a=s[r];r++)l!==n.getInfoForObject(a).label||t&&t!==a.ownerComponent||(u?c=c.concat(a.querySelectorAllComponent(u,t)):c.push(a));return c}},template:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!0},_templateModuleId:{serializable:!1,value:null},_template:{value:null},_treeLevel:{value:0},_addChildComponent:{value:function(e){return this.addChildComponent(e)}},addChildComponent:{value:function(e){-1===this.childComponents.indexOf(e)&&(this.childComponents.push(e),e._prepareForEnterDocument(),e._parentComponent=this,e.needsDraw&&e._addToParentsDrawList())}},attachToParentComponent:{value:function(){this.detachFromParentComponent(),this._parentComponent=null;var e,t,n=this.findParentComponent();if(n){e=n.childComponents;for(var i=0;t=e[i];i++){var r=t.findParentComponent();r===this&&(n.removeChildComponent(t),r.addChildComponent(t))}n.addChildComponent(this)}}},detachFromParentComponent:{value:function(){var e=this.parentComponent;e&&e.removeChildComponent(this)}},removeChildComponent:{value:function(e){var t=this.childComponents,n=t.indexOf(e);n>-1&&(e._exitDocument(),t.splice(n,1),e._parentComponent=null,e._alternateParentComponent=null,e._addedToDrawList&&(e._addedToDrawList=!1,n=this._drawList.indexOf(e),this._drawList.splice(n,1)),this.rootComponent.removeFromCannotDrawList(e))}},childComponents:{enumerable:!1,distinct:!0,value:[]},_needsEnterDocument:{value:!1},_inDocument:{value:!1},__exitDocument:{value:function(){this._inDocument&&"function"==typeof this.exitDocument&&(this.exitDocument(),this._inDocument=!1)}},_exitDocument:{value:function(){var e;this._needsEnterDocument?this._needsEnterDocument=!1:(e=function(t){for(var n,i=t.childComponents,r=0;n=i[r];r++)n._isComponentExpanded&&e(n);t._inDocument&&t.__exitDocument()},e(this))}},exitDocument:{value:function(){this.isActiveTarget&&(d.activeTarget=this.nextTarget)}},_prepareForEnterDocument:{value:function(){this._firstDraw?this._needsEnterDocument=!0:(this.needsDraw=!0,this.traverseComponentTree(function(e){return e._needsEnterDocument?!1:(e._needsEnterDocument=!0,e.needsDraw=!0,void 0)}))}},ownerComponent:{enumerable:!1,value:null},components:{enumerable:!1,value:{}},_isComponentExpanded:{enumerable:!1,value:null},_isTemplateLoaded:{enumerable:!1,value:null},_isTemplateInstantiated:{enumerable:!1,value:null},cleanupDeletedComponentTree:{value:function(e){e&&r.cancelBindings(this),this.needsDraw=!1,this.traverseComponentTree(function(t){e&&r.cancelBindings(t),t.needsDraw=!1})}},_newDomContent:{enumerable:!1,value:null},domContent:{serializable:!1,get:function(){return this._element?Array.prototype.slice.call(this._element.childNodes,0):null},set:function(e){var t,n,i,r=[];for(this._newDomContent=e,this.needsDraw=!0,null===this._newDomContent&&(this._shouldClearDomContentOnNextDraw=!0),"function"==typeof this.contentWillChange&&this.contentWillChange(e),t=this.childComponents,n=0,i;i=t[n];n++)i.detachFromParentComponent();if(e instanceof Element)this._findAndDetachComponents(e,r);else if(e&&e[0])for(n=0;e.length>n;n++)this._findAndDetachComponents(e[n],r);for(n=0,i;i=r[n];n++)this.addChildComponent(i)}},_shouldClearDomContentOnNextDraw:{value:!1},_findAndDetachComponents:{value:function(e,t){var n,i=e.component;if(t||(t=[]),i)i.detachFromParentComponent(),t.push(i);else{n=e.children||e.childNodes;for(var r,a=0;r=n[a];a++)this._findAndDetachComponents(r,t)}return t}},clonesChildComponents:{writable:!1,value:!1},_innerTemplate:{value:null},innerTemplate:{serializable:!1,get:function(){var e,t,n,i,r,a,s,o=this._innerTemplate;if(!o&&(e=this._ownerDocumentPart)){t=e.template,n=this.getElementId(),o=t.createTemplateFromElementContents(n),i=o.getSerialization(),r=i.getExternalObjectLabels(),a=e.objects,s=Object.create(null);for(var l,u=0;l=r[u];u++)s[l]=a[l];o.setInstances(s),this._innerTemplate=o}return o},set:function(e){this._innerTemplate=e}},canDraw:{value:function(){return this._canDraw}},_canDraw:{get:function(){return!this._canDrawGate||this._canDrawGate.value},set:function(e){v.componentCanDraw(this,e)},enumerable:!1},_prepareCanDraw:{enumerable:!1,value:function(){this._isComponentTreeLoaded||this.loadComponentTree().done()}},_isComponentTreeLoaded:{value:null},shouldLoadComponentTree:{value:!0},_loadComponentTreeDeferred:{value:null},loadComponentTree:{value:function(){var e=this,t=this.canDrawGate,n=this._loadComponentTreeDeferred;return n||(n=l.defer(),this._loadComponentTreeDeferred=n,t.setField("componentTreeLoaded",!1),(this.needsDraw||this.hasTemplate)&&(this._canDraw=!1),this.expandComponent().then(function(){if(e.hasTemplate||e.shouldLoadComponentTree){for(var t,n=[],i=e.childComponents,r=0;t=i[r];r++)n.push(t.loadComponentTree());return l.all(n)}}).then(function(){e._isComponentTreeLoaded=!0,e._needsEnterDocument&&(e.needsDraw=!0),t.setField("componentTreeLoaded",!0),n.resolve()},n.reject).done()),n.promise}},traverseComponentTree:{value:function(e,t){function n(){var n,r,a=i.childComponents;if(e&&e(i)===!1)return t&&t(),void 0;if(0===(r=a.length))return t&&t(),void 0;for(var s=function(){0===--r&&t&&t()},o=0;n=a[o];o++)n.traverseComponentTree(e,s)}var i=this;this._isComponentExpanded?n():t&&t()}},_expandComponentDeferred:{value:null},expandComponent:{value:function(){var e=this,t=this._expandComponentDeferred;return t||(t=l.defer(),this._expandComponentDeferred=t,this.hasTemplate?this._instantiateTemplate().then(function(){e._isComponentExpanded=!0,e._addTemplateStyles(),e.needsDraw=!0,t.resolve()},t.reject):(this._isComponentExpanded=!0,t.resolve())),t.promise}},_templateObjectDescriptor:{value:{enumerable:!0,configurable:!0}},_setupTemplateObjects:{value:function(e){var t=this._templateObjectDescriptor,n=Object.create(null);for(var i in e){var r=e[i];"object"==typeof r&&null!=r&&(m.prototype.isPrototypeOf(r)&&r!==this&&r.parentComponent!==this?(t.get=this._makeTemplateObjectGetter(this,i,r),Object.defineProperty(n,i,t)):n[i]=r)}this.templateObjects=n}},_makeTemplateObjectGetter:{value:function(e,t,n){var i,r,a,s="@"+t;return function(){if(i)return e.querySelectorAllComponent(s,e);if(r=e.querySelectorAllComponent(s,e),1===r.length)for(a=r[0];a=a.parentComponent;){if(a===e)return Object.defineProperty(this,t,{value:r[0]}),r[0];if(a.clonesChildComponents)break}else if(0===r.length)return n;return i=!0,r}}},_instantiateTemplate:{value:function(){var e=this;return this._loadTemplate().then(function(t){if(!e._element)return console.error("Cannot instantiate template without an element.",e),l.reject(Error("Cannot instantiate template without an element.",e));var n=e.templateObjects,i=e._element.ownerDocument;return n||(n=Object.create(null)),n.owner=e,e._isTemplateInstantiated=!0,t.instantiateWithInstances(n,i).then(function(t){e._templateDocumentPart=t,t.fragment=null}).fail(function(e){var n=e.stack||e;throw console.error("Error in",t.getBaseUrl()+":",n),e})})}},_templateDidLoad:{value:function(e){this._setupTemplateObjects(e.objects)}},_loadTemplatePromise:{value:null},_loadTemplate:{value:function(){var e,t=this,i=this._loadTemplatePromise;return i||(e=n.getInfoForObject(this),i=this._loadTemplatePromise=a.getTemplateWithModuleId(this.templateModuleId,e.require).then(function(e){return t._template=e,t._isTemplateLoaded=!0,e})),i}},templateModuleId:{get:function(){return this._templateModuleId||this._getDefaultTemplateModuleId()}},_getDefaultTemplateModuleId:{value:function(){var e,t,i,r;return r=n.getInfoForObject(this),i=r.moduleId,t=i.lastIndexOf("/"),e=i+"/"+i.slice(-1===t?0:t+1,-5)+".html"}},deserializedFromSerialization:{value:function(){this.attachToParentComponent()}},_deserializedFromTemplate:{value:function(e,t,i){n.getInfoForObject(this).label=t,this._ownerDocumentPart=i,this.hasOwnProperty("identifier")||(this.identifier=t),this.ownerComponent||(this.ownerComponent=m.prototype.isPrototypeOf(e)?e:this.rootComponent),this._needsDrawInDeserialization&&(this.needsDraw=!0)}},blueprintModuleId:{serializable:!1,enumerable:!1,get:function(){var e=n.getInfoForObject(this),t=e&&!e.isInstance?this:Object.getPrototypeOf(this);if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=n.getInfoForObject(t);var i=e.moduleId,r=i.lastIndexOf("/"),a=i.lastIndexOf(".");r=-1===r?0:r+1,a=-1===a?i.length:a,a=r>a?i.length:a;var s;s=i.length>a&&".reel"===i.slice(a,i.length)?i+"/"+i.slice(r,a)+".meta":i.slice(0,a)+".meta",n.defineProperty(t,"_blueprintModuleId",{value:s})}return t._blueprintModuleId}},blueprint:e("montage")._blueprintDescriptor,gateDidBecomeTrue:{value:function(e){e===this._canDrawGate?this._canDraw=!0:e===this._blockDrawGate&&(v.componentBlockDraw(this),this._prepareCanDraw())},enumerable:!1},_canDrawGate:{enumerable:!1,value:null},_preparedForActivationEvents:{enumerable:!1,value:!1},_drawIfNeeded:{enumerable:!1,value:function(e){var t,i,r,a,s=this._firstDraw;if(this._treeLevel=e,s&&(this.originalElement=this.element),this.needsDraw&&v.addToDrawCycle(this),s&&this.prepareForDraw&&n.callDeprecatedFunction(this,this.prepareForDraw,"prepareForDraw","enterDocument(firstTime)"),this._needsEnterDocument&&(this._needsEnterDocument=!1,this._inDocument=!0,"function"==typeof this.enterDocument&&this.enterDocument(s),this._enterDocument(s)),s&&(this.originalElement=null),h.isDebug&&h.debug(this,"drawList: "+(this._drawList||[]).length+" of "+this.childComponents.length),null!==this._drawList&&this._drawList.length>0)for(i=this._drawList,this._drawList=[],a=i.length,r=0;a>r;r++)t=i[r],h.isDebug&&h.debug("Parent Component "+(null!=this.element?this.element.id:"")+" drawList length: "+i.length),t._addedToDrawList=!1,h.isDebug&&h.debug(this,"childComponent: "+t.element+"; canDraw: "+t.canDraw()),t.canDraw()&&t._drawIfNeeded(e+1)}},_updateComponentDom:{value:function(){var e,t,n;if(this._firstDraw){for(this._prepareForDraw(),t=this.composerList.length,n=0;t>n;n++)e=this.composerList[n],e.lazyLoad||e._load();this._firstDraw=!1}(null!==this._newDomContent||this._shouldClearDomContentOnNextDraw)&&(h.isDebug&&u.debug("Component content changed: component ",this._montage_metadata.objectName,this.identifier," newDomContent",this._newDomContent),this._performDomContentChanges())}},_replaceElementWithTemplate:{enumerable:!1,value:function(){var e,t,n,i,r=this.element,a=this._templateElement,s=this.element.attributes;for(n=0;i=s[n];n++)e=i.nodeName,t="id"===e||"data-montage-id"===e?i.nodeValue:(a.getAttribute(e)||"")+("style"===e?"; ":" ")+i.nodeValue,a.setAttribute(e,t);this._initializeClassListFromElement(a),r.parentNode?r.parentNode.replaceChild(a,r):this._canDrawOutsideDocument||console.warn("Warning: Trying to replace element ",r," which has no parentNode"),this.eventManager.unregisterEventHandlerForElement(r),this.eventManager.registerEventHandlerForElement(this,a),this._element=a,this._templateElement=null,this._newDomContent&&(this._newDomContent=null,this._shouldClearDomContentOnNextDraw=!1)}},_addTemplateStyles:{value:function(){var e,t,n,i=this._templateDocumentPart;if(i){e=i.template.getResources(),n=this.element.ownerDocument,t=e.createStylesForDocument(n);for(var r,a=0;r=t[a];a++)this.rootComponent.addStylesheet(r)}}},_prepareForDraw:{value:function(){u.isDebug&&u.debug(this,"_templateElement: "+this._templateElement),this._initDomArguments(),this._templateElement&&(this._bindTemplateParametersToArguments(),this._replaceElementWithTemplate())},enumerable:!1},_bindTemplateParametersToArguments:{value:function(){var e,t,n,i,r,a,s,o,l=this._templateDocumentPart.parameters;if(t=this._domArguments,this._template.hasParameters()||1!==t.length){if(i=this._validateTemplateArguments(t,l))throw i;for(var u in l){e=l[u],n=t[u],"*"===u?(s=this._element.ownerDocument.createRange(),s.selectNodeContents(this._element),r=s.extractContents()):r=n,a=this._findAndDetachComponents(r),e.parentNode.replaceChild(r,e);for(var c=0;o=a[c];c++)o.attachToParentComponent()}}}},_validateTemplateArguments:{value:function(e,t){var n,i,r=Object.keys(t);if(0!==r.length)if(null==e){if(r.length>0)return Error("No arguments provided for "+this.templateModuleId+". Arguments needed: "+r+".")}else if("*"in t){if(n=Object.keys(e),n.length>0)return Error('Arguments "'+n+'" were given to component but no named parameters '+"are defined in "+this.templateModuleId)}else{for(i in t)if(!(i in e))return Error('"'+i+'" argument not '+"given in "+this.templateModuleId);for(i in e)if("*"!==i&&!(i in t))return Error('"'+i+'" parameter does '+"not exist in "+this.templateModuleId)}}},prepareForActivationEvents:{enumerable:!1,value:null},_prepareForActivationEvents:{value:function(){var e,t=this.composerList.length;for(t=0;this.composerList.length>t;t++)e=this.composerList[t],e.lazyLoad&&e._load();"function"==typeof this.prepareForActivationEvents&&this.prepareForActivationEvents()}},_performDomContentChanges:{value:function(){var e,t=this._newDomContent,n=this._element.childNodes[0];if(t||this._shouldClearDomContentOnNextDraw){if(e=this._element,e.innerHTML="",Element.isElement(t))e.appendChild(t);else if(null!=t)for(var i,r=0;i=t[r];r++)e.appendChild(i);this._newDomContent=null,"function"==typeof this.contentDidChange&&this.contentDidChange(this._element.childNodes[0],n),this._shouldClearDomContentOnNextDraw=!1}}},prepareForDraw:{enumerable:!1,value:null},draw:{enumerable:!1,value:function(){}},willDraw:{enumerable:!1,value:null},didDraw:{enumerable:!1,value:function(){}},_addedToDrawList:{value:!1},_addToParentsDrawList:{enumerable:!1,value:function(){if(!this._addedToDrawList){var e=this.parentComponent;e?(e._addToDrawList(this),h.isDebug&&h.debug("drawList -- childComponent",this._montage_metadata.objectName," added to ",e._montage_metadata.objectName)):h.isDebug&&h.debug(this,"parentComponent is null")}}},_needsDraw:{value:!1},_needsDrawInDeserialization:{value:!1},needsDraw:{enumerable:!1,get:function(){return!!this._needsDraw},set:function(e){return this.isDeserializing?(this._needsDrawInDeserialization=!0,void 0):(this._needsDraw!==e&&(h.isDebug&&h.debug("NEEDS DRAW TOGGLED "+e+" FOR "+this._montage_metadata.objectName),this._needsDraw=!!e,e&&(this.canDrawGate.value?this._addToParentsDrawList():this.blockDrawGate.setField("drawRequested",!0))),void 0)}},_drawList:{value:null},__addToDrawList:{enumerable:!1,value:function(e){null===this._drawList?(this._drawList=[e],e._addedToDrawList=!0):-1===this._drawList.indexOf(e)&&(this._drawList.push(e),e._addedToDrawList=!0)}},_addToDrawList:{enumerable:!1,value:function(e){this.__addToDrawList(e),this._addToParentsDrawList()}},_templateElement:{enumerable:!1,value:null},surrenderPointer:{value:function(){return!0}},composerList:{value:[],distinct:!0,serializable:!1},addComposer:{value:function(e){this.addComposerForElement(e,e.element)}},addComposerForElement:{value:function(e,t){e.component=this,e.element=t,this.composerList.push(e),this._firstDraw||(e.lazyLoad?this._preparedForActivationEvents&&e._load():e._load())}},scheduleComposer:{value:function(e){this.rootComponent.addToComposerList(e)}},removeComposer:{value:function(e){var t,n;for(n=this.composerList.length,t=0;n>t;t++)if(this.composerList[t].uuid===e.uuid){this.composerList[t].unload(),this.composerList.splice(t,1);break}}},clearAllComposers:{value:function(){var e,t,n=this.composerList;for(t=n.length,e=0;t>e;e++)n[e].unload();n.splice(0,t)}},localizer:{value:null},_waitForLocalizerMessages:{value:!1},waitForLocalizerMessages:{enumerable:!1,get:function(){return this._waitForLocalizerMessages},set:function(e){if(this._waitForLocalizerMessages!==e)if(e!==!0||this.localizer.messages)this._waitForLocalizerMessages=!1,this.canDrawGate.setField("messages",!0);else{if(!this.localizer)throw"Cannot wait for messages on localizer if it is not set";this._waitForLocalizerMessages=!0;var t=this;u.debug(this,"waiting for messages from localizer"),this.canDrawGate.setField("messages",!1),this.localizer.messagesPromise.then(function(){u.isDebug&&u.debug(t,"got messages from localizer"),t.canDrawGate.setField("messages",!0)})}}},_elementAttributeValues:{value:null},_elementAttributeDescriptors:{value:null},_getElementAttributeDescriptor:{value:function(e){for(var t,n=this;n&&n._elementAttributeDescriptors&&!(t=n._elementAttributeDescriptors[e]);)n=Object.getPrototypeOf(n);return t}},defineAttribute:{value:function(e,t){t=t||{};var i="_"+e,r={configurable:t.configurable===void 0?!0:t.configurable,enumerable:t.enumerable===void 0?!0:t.enumerable,set:function(e,t){return function(n){var i=this._getElementAttributeDescriptor(e,this);i&&"boolean"===i.dataType&&(n=n||""===n?!0:!1),n!==void 0&&this[t]!==n&&(this[t]=n,null===this._elementAttributeValues&&(this._elementAttributeValues={}),this._elementAttributeValues[e]=n,this.needsDraw=!0)}}(e,i),get:function(e,t){return function(){return this[t]}}(e,i)};n.defineProperty(this.prototype,i,{value:null}),n.defineProperty(this.prototype,e,r)}},addAttributes:{value:function(e){var t,n,i;this.prototype._elementAttributeDescriptors=e;for(n in e)e.hasOwnProperty(n)&&(i=e[n],null===i||"string"==typeof i?(t={value:i,dataType:"string"},e[n]=t):t=i,this[n]===void 0&&this.defineAttribute(n,t))}},_enterDocument:{value:function(e){var t;if(e){t=this.originalElement;var n,i,r,a,s,o,l;if(n=t.attributes)for(r=n.length,i=0;r>i;i++)a=n[i].name,s=n[i].value,l=this._getElementAttributeDescriptor(a,this),(l||this[a]!==void 0)&&(null===this._elementAttributeValues&&(this._elementAttributeValues={}),this._elementAttributeValues[a]===void 0&&(this._elementAttributeValues[a]=s,(this[a]===void 0||null==this[a])&&(this[a]=s)));if(l=this._getElementAttributeDescriptor("textContent",this)){var u=t.textContent;this._elementAttributeValues.textContent===void 0&&(this._elementAttributeValues.textContent=u,null==this.textContent&&(this.textContent=u))}if(this._elementAttributeDescriptors)for(o in this._elementAttributeDescriptors){l=this._elementAttributeDescriptors[o];var c="_"+o;null===this[c]&&null!==l&&"value"in l&&(this[c]=this._elementAttributeDescriptors[o].value)}}}},_draw:{value:function(){var e,t=this.element;for(var n in this._elementAttributeValues)if(this._elementAttributeValues.hasOwnProperty(n)){var i=this[n];e=this._getElementAttributeDescriptor(n,this),e&&("boolean"===e.dataType?i===!0?(t[n]=!0,t.setAttribute(n,n.toLowerCase())):(t[n]=!1,t.removeAttribute(n)):i!==void 0&&("textContent"===n?t.textContent=i:t.setAttribute(n,i))),delete this._elementAttributeValues[n]}this._drawClassListIntoComponent()}},_classList:{value:null},_classListDirty:{value:!1},classList:{get:function(){return null===this._classList&&(this._classList=new p,this._subscribeToToClassListChanges(),this._initializeClassListFromElement(this.element)),this._classList}},_initializeClassListFromElement:{value:function(e){var t;if(e&&e.className&&(t=e.className.trim())&&0!==t.length){var n=this.classList;this._unsubscribeToClassListChanges&&this._unsubscribeToClassListChanges(),n.addEach(t.split(/\s+/)),this._subscribeToToClassListChanges()}}},_unsubscribeToClassListChanges:{value:null},_subscribeToToClassListChanges:{value:function(){this._unsubscribeToClassListChanges=this._classList.addRangeChangeListener(this,"classList")}},handleClassListRangeChange:{value:function(){this._classListDirty=!0,this.needsDraw=!0}},_drawClassListIntoComponent:{value:function(){if(this._classListDirty){for(var e,t=this.element.classList,n=this._classList,i=0,r=t.length;r>i;i++)e=t.item(i),n.has(e)||(t.remove(e),i--,r--);this._classList.forEach(function(e){t.add(e)}),this._classListDirty=!1}}},dispose:{value:function(){this.cancelBindings(),this.detachFromParentComponent(),d.unregisterEventHandlerForElement(this,this._element),this._element=null,this.childComponents.forEach(function(e){e.dispose()})}}}),f=m.specialize({constructor:{value:function f(){this.super()}},init:{value:function(){return this}},needsDraw:{enumerable:!0,get:function(){return!1},set:function(e){if(this._needsDraw!==e&&(this._needsDraw=!!e,e))for(var t,n=this.childComponents,i=0;t=n[i];i++)h.isDebug&&h.debug(this,"needsDraw = true for: "+t._montage_metadata.exportedSymbol),t.needsDraw=!0}},canDrawGate:{get:function(){return this._canDrawGate||(this._canDrawGate=(new o).initWithDelegate(this))}},_clearNeedsDrawTimeOut:{value:null},_needsDrawList:{value:[]},_cannotDrawList:{value:null},componentBlockDraw:{value:function(e){this._cannotDrawList=this._cannotDrawList?this._cannotDrawList:{},this._cannotDrawList[e.uuid]=e,this._clearNeedsDrawTimeOut&&(window.clearTimeout(this._clearNeedsDrawTimeOut),this._clearNeedsDrawTimeOut=null)}},componentCanDraw:{value:function(e,t){if(t){if(!this._cannotDrawList)return;if(delete this._cannotDrawList[e.uuid],this._needsDrawList.push(e),0===Object.keys(this._cannotDrawList).length&&this._needsDrawList.length>0&&!this._clearNeedsDrawTimeOut){var n=this;this._clearNeedsDrawTimeOut=window.setTimeout(function(){n._clearNeedsDrawList()},0)}}else this._clearNeedsDrawTimeOut&&(window.clearTimeout(this._clearNeedsDrawTimeOut),this._clearNeedsDrawTimeOut=null)}},_clearNeedsDrawList:{value:function(){var e,t,n,i=this._needsDrawList;for(n=i.length,t=0;n>t;t++)e=i[t],e.needsDraw&&e._addToParentsDrawList();this._clearNeedsDrawTimeOut=null,i.splice(0,n)}},removeFromCannotDrawList:{value:function(e){if(this._cannotDrawList&&(delete this._cannotDrawList[e.uuid],0===Object.keys(this._cannotDrawList).length&&this._needsDrawList.length>0&&!this._clearNeedsDrawTimeOut)){var t=this;this._clearNeedsDrawTimeOut=window.setTimeout(function(){t._clearNeedsDrawList()},0)}}},_cancelDrawIfScheduled:{value:function(){var e=this.requestedAnimationFrame,t=this.cancelAnimationFrame;null!==e&&(this._frameTime||(u.isDebug&&u.debug(this,"clearing draw"),t?t.call(window,e):window.clearTimeout(e),this.requestedAnimationFrame=null))}},_addToDrawList:{value:function(e){this.__addToDrawList(e),h.isDebug&&h.debug(this,this.canDrawGate.value,this.requestedAnimationFrame),this.drawTree()},enumerable:!1},addToComposerList:{value:function(e){this.composerList.push(e),h.isDebug&&h.debug(this,e,"Added to composer list"),this._scheduleComposerRequest=!0,this.drawTree()}},composerListSwap:{value:[],distinct:!0},_scheduleComposerRequest:{value:!1},requestedAnimationFrame:{value:null,enumerable:!1},requestAnimationFrame:{value:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,enumerable:!1},cancelAnimationFrame:{value:window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame,enumerable:!1},_frameTime:{value:null},_oldSource:{value:null},_diff:{value:function(e,t){for(var n={},i={},r=0;t.length>r;r++)null==n[t[r]]&&(n[t[r]]={rows:[],o:null}),n[t[r]].rows.push(r);for(r=0;e.length>r;r++)null==i[e[r]]&&(i[e[r]]={rows:[],n:null}),i[e[r]].rows.push(r);for(r in n)1===n[r].rows.length&&i[r]!==void 0&&1===i[r].rows.length&&(t[n[r].rows[0]]={text:t[n[r].rows[0]],row:i[r].rows[0]},e[i[r].rows[0]]={text:e[i[r].rows[0]],row:n[r].rows[0]});for(r=0;t.length-1>r;r++)null!=t[r].text&&null==t[r+1].text&&t[r].row+1<e.length&&null==e[t[r].row+1].text&&t[r+1]==e[t[r].row+1]&&(t[r+1]={text:t[r+1],row:t[r].row+1},e[t[r].row+1]={text:e[t[r].row+1],row:r+1});for(r=t.length-1;r>0;r--)null!=t[r].text&&null==t[r-1].text&&t[r].row>0&&null==e[t[r].row-1].text&&t[r-1]==e[t[r].row-1]&&(t[r-1]={text:t[r-1],row:t[r].row-1},e[t[r].row-1]={text:e[t[r].row-1],row:r-1});return{o:e,n:t}}},_previousDrawDate:{enumerable:!1,value:0},_documentResources:{value:null},_needsStylesheetsDraw:{value:!1},_stylesheets:{value:[]},addStylesheet:{value:function(e){this._stylesheets.push(e),this._needsStylesheetsDraw=!0}},drawStylesheets:{value:function(){for(var e,t=this._documentResources,n=this._stylesheets;e=n.shift();)t.addStyle(e);this._needsStylesheetsDraw=!1}},drawTree:{value:function(){if(null===this.requestedAnimationFrame){h.isDebug&&h.debug(this,"requesting a draw");var e=this,t=this.requestAnimationFrame,n=function(t){var n;if(e._needsStylesheetsDraw&&e.drawStylesheets(),!e._documentResources.areStylesLoaded)return c.isDebug&&console.log("Draw Cycle Waiting Stylesheets: ",e._documentResources._expectedStyles.length),e.requestedAnimationFrame=null,e.drawTree(),void 0;if(c.isDebug&&(n=window.performance?window.performance.now():Date.now()),e._frameTime=t?t:Date.now(),e._clearNeedsDrawTimeOut&&e._clearNeedsDrawList(),h.isDebug){var i=document.documentElement.innerHTML;if(e._oldSource&&i!==e._oldSource){for(var r=["DOM modified outside of the draw loop"],a=e._diff(e._oldSource.split("\n"),i.split("\n")),s=0;a.n.length>s;s++)if(null==a.n[s].text)r.push("+ "+a.n[s]);else for(var o=a.n[s].row+1;a.o.length>o&&null==a.o[o].text;o++)r.push("- "+a.o[o]);console.warn(r.join("\n"))}console.group((t?h.toTimeString(new Date(t))+" ":"")+"Draw Fired")}if(e.drawIfNeeded(),c.isDebug){if(window.performance)var l=window.performance.now();else var l=Date.now();console.log("Draw Cycle Time: ",l-n,", Components: ",e._lastDrawComponentsCount)}h.isDebug&&(console.groupEnd(),e._oldSource=document.documentElement.innerHTML),e._frameTime=null,e._scheduleComposerRequest&&e.drawTree()};if(t)this.requestedAnimationFrame=t.call(window,n);else{var i=Date.now(),r=17-i+this._previousDrawDate;0>r&&(r=0),this.requestedAnimationFrame=setTimeout(n,r),this._previousDrawDate=i+r}this._scheduleComposerRequest=!1}},enumerable:!1},_readyToDrawList:{enumerable:!1,value:[]},_readyToDrawListIndex:{enumerable:!1,value:null},addToDrawCycle:{value:function(e){var t=this._readyToDrawListIndex;return t.hasOwnProperty(e.uuid)?(h.isDebug&&h.debug("components should not be added to the draw cycle twice"),void 0):(this._readyToDrawList.push(e),this._readyToDrawListIndex[e.uuid]=!0,e._updateComponentDom(),void 0)}},_lastDrawComponentsCount:{value:null},drawIfNeeded:{value:function(){var e,t,n,i,r,a,s=this._readyToDrawList,o=0,l=this.composerList;if(s.length=0,a=l.length,this._readyToDrawListIndex={},a>0){for(this.composerList=this.composerListSwap,t=0;a>t;t++)r=l[t],r.needsFrame=!1,r.frame(this._frameTime);
l.splice(0,a),this.composerListSwap=l}for(this._drawIfNeeded(0),n=s.length;n>o;){for(t=o;n>t;t++)e=s[t],"function"==typeof e.willDraw&&e.willDraw(this._frameTime),h.isDebug&&h.debug(e._montage_metadata.objectName," willDraw treeLevel ",e._treeLevel);this._drawIfNeeded(0),o=n,n=s.length}var u=function(e,t){return e._treeLevel-t._treeLevel};for(s.sort(u),t=0;n>t;t++)e=s[t],e.needsDraw=!1;for(this.requestedAnimationFrame=null,t=n-1;t>=0;t--)e=s[t],e._draw(this._frameTime),e.draw(this._frameTime),h.isDebug&&h.debug(e._montage_metadata.objectName," draw treeLevel ",e._treeLevel);for(t=0;n>t;t++)e=s[t],e.didDraw(this._frameTime),e._completedFirstDraw||(i=document.createEvent("CustomEvent"),i.initCustomEvent("firstDraw",!0,!1,null),e.dispatchEvent(i),e._completedFirstDraw=!0),h.isDebug&&h.debug(e._montage_metadata.objectName," didDraw treeLevel ",e._treeLevel);return c.isDebug&&(this._lastDrawComponentsCount=s.length),!!s.length}},element:{get:function(){return this._element},set:function(e){d.registerEventHandlerForElement(this,e),this._element=e,this._documentResources=s.getInstanceForDocument(e)}}}),v=(new f).init();t.__root__=v}});