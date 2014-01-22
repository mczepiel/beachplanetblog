require("runtime/dependencies/gl-matrix");var GLSLProgram=exports.GLSLProgram=Object.create(Object.prototype,{VERTEX_SHADER:{value:"x-shader/x-vertex"},FRAGMENT_SHADER:{value:"x-shader/x-fragment"},_shaders:{enumerable:!1,value:null,writable:!0},shaders:{enumerable:!1,get:function(){return this._shaders},set:function(e){this._shaders=e}},_errorLogs:{enumerable:!1,value:null,writable:!0},errorLogs:{enumerable:!1,get:function(){return this._errorLogs},set:function(e){this._errorLogs=e}},_pendingCommits:{value:null,writable:!0},pendingCommits:{get:function(){return this._pendingCommits},set:function(e){this._pendingCommits=e}},_symbolToLocation:{value:null,writable:!0},symbolToLocation:{enumerable:!1,get:function(){return this._symbolToLocation},set:function(e){this._symbolToLocation=e}},_symbolToActiveInfo:{enumerable:!1,value:null,writable:!0},symbolToActiveInfo:{get:function(){return this._symbolToActiveInfo},set:function(e){this._symbolToActiveInfo=e}},_semanticToSymbol:{value:null,writable:!0},semanticToSymbol:{enumerable:!1,get:function(){return this._semanticToSymbol},set:function(e){this._semanticToSymbol=e}},_symbolToSemantic:{value:null,writable:!0},symbolToSemantic:{get:function(){return this._symbolToSemantic},set:function(e){this._symbolToSemantic=e}},_symbolToValue:{value:null,writable:!0},symbolToValue:{get:function(){return this._symbolToValue},set:function(e){this._symbolToValue=e}},_uniformSymbols:{value:null,writable:!0},uniformSymbols:{enumerable:!1,get:function(){return this._uniformSymbols},set:function(e){this._uniformSymbols=e}},_attributeSymbols:{value:null,writable:!0},attributeSymbols:{enumerable:!1,get:function(){return this._attributeSymbols},set:function(e){this._attributeSymbols=e}},_GLProgram:{enumerable:!1,value:null,writable:!0},GLProgram:{enumerable:!1,get:function(){return this._GLProgram},set:function(e){this._GLProgram=e}},getTypeForSymbol:{value:function(e){var t=null,n=this.symbolToActiveInfo[e];return n&&(t=n.type),t}},getLocationForSymbol:{value:function(e){return this.symbolToLocation[e]}},getSymbolForSemantic:{value:function(e){return this.semanticToSymbol[e]}},setSymbolForSemantic:{value:function(e,t){if("none"===e&&(e=null),"none"===t&&(t=null),!this.symbolToActiveInfo[e])return!1;if(t&&this.semanticToSymbol[t])return!1;if(e){var n=this.symbolToSemantic[e];n&&n!==t&&(this.semanticToSymbol[n]=null),this.symbolToSemantic[e]=t}return t&&(this.semanticToSymbol[t]=e),!0}},setSemanticForSymbol:{value:function(e,t){this.setSymbolForSemantic(e,t)}},getSemanticForSymbol:{value:function(e){return this.symbolToSemantic[e]}},setValueForSymbol:{value:function(e,t){var n=this.symbolToValue[e],i=this.getTypeForSymbol(e),r=WebGLRenderingContext;if(null!=t&&null!=n){if(i===r.FLOAT){if(t===n)return}else if(i===r.FLOAT_MAT4){if(16==t.length&&mat4.equal(n,t))return}else if(i===r.FLOAT_MAT3){if(9==t.length&&mat3.equal(n,t))return}else if(i===r.FLOAT_VEC3){if(3==t.length&&vec3.equal(n,t))return}else if(i===r.FLOAT_VEC4){if(4==t.length&&vec4.equal(n,t))return}else if(i===r.FLOAT_VEC2&&2==t.length&&vec4.equal(n,t))return}else i===r.FLOAT_MAT4?16===t.length&&(n=mat4.create()):i===r.FLOAT_MAT3?n=mat3.create():i===r.FLOAT_VEC3?n=vec3.create():i===r.FLOAT_VEC4?n=vec4.create():i===r.FLOAT_VEC2&&(n=vec2.create());null!==this.symbolToActiveInfo[e]&&-1===this.pendingCommits.indexOf(e)&&this.pendingCommits.push(e),null!=t&&(i===r.FLOAT_MAT4?16===t.length&&(t=mat4.set(t,n)):i===r.FLOAT_MAT3?t=mat3.set(t,n):i===r.FLOAT_VEC3?t=vec3.set(t,n):i===r.FLOAT_VEC4?t=vec4.set(t,n):i===r.FLOAT_VEC2&&(t=vec2.set(t,n))),this.symbolToValue[e]=t}},getValueForSymbol:{value:function(e){return this.symbolToValue[e]}},_commitSwitch:{value:function(){var e=[];return e[WebGLRenderingContext.FLOAT_MAT2]=function(e,t,n,i){e.uniformMatrix2fv(t,n,i)},e[WebGLRenderingContext.FLOAT_MAT3]=function(e,t,n,i){e.uniformMatrix3fv(t,n,i)},e[WebGLRenderingContext.FLOAT_MAT4]=function(e,t,n,i){e.uniformMatrix4fv(t,n,i)},e[WebGLRenderingContext.FLOAT]=function(e,t,n,i){e.uniform1f(t,i)},e[WebGLRenderingContext.FLOAT_VEC2]=function(e,t,n,i){e.uniform2fv(t,i)},e[WebGLRenderingContext.FLOAT_VEC3]=function(e,t,n,i){e.uniform3fv(t,i)},e[WebGLRenderingContext.FLOAT_VEC4]=function(e,t,n,i){e.uniform4fv(t,i)},e[WebGLRenderingContext.INT]=function(e,t,n,i){e.uniform1i(t,i)},e[WebGLRenderingContext.SAMPLER_2D]=function(e,t,n,i){e.uniform1i(t,i)},e[WebGLRenderingContext.SAMPLER_CUBE]=function(e,t,n,i){e.uniform1i(t,i)},e}()},commit:{value:function(e){if(this.pendingCommits.length){for(var t,n=this.pendingCommits.length-1;t=this.pendingCommits[n--];)this._commitSwitch[this.getTypeForSymbol(t)](e,this.symbolToLocation[t],!1,this.getValueForSymbol(t));this.pendingCommits.length=0}}},use:{value:function(e,t){e.useProgram(this.GLProgram),t&&this.commit(e)}},createShaderWithSourceAndType:{value:function(e,t,n){var i;if("x-shader/x-fragment"===n)i=e.createShader(e.FRAGMENT_SHADER);else{if("x-shader/x-vertex"!==n)return null;i=e.createShader(e.VERTEX_SHADER)}return e.shaderSource(i,t),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(this.errorLogs=e.getShaderInfoLog(i),null)}},build:{value:function(e){var t,n,i=this.shaders[GLSLProgram.VERTEX_SHADER],r=this.shaders[GLSLProgram.FRAGMENT_SHADER],a=!1,o=this.createShaderWithSourceAndType(e,i,GLSLProgram.VERTEX_SHADER);if(null==o)return!1;var s=this.createShaderWithSourceAndType(e,r,GLSLProgram.FRAGMENT_SHADER);if(null==s)return!1;if(this.GLProgram=e.createProgram(),e.attachShader(this.GLProgram,o),e.attachShader(this.GLProgram,s),e.linkProgram(this.GLProgram),e.getProgramParameter(this.GLProgram,e.LINK_STATUS)){this.pendingCommits=[],this.symbolToActiveInfo={},this.symbolToValue={},this.symbolToLocation={},this.uniformSymbols=[],this.attributeSymbols=[],this.symbolToSemantic={},this.semanticToSymbol={};var l=e.getParameter(e.CURRENT_PROGRAM);e.useProgram(this.GLProgram);var u=e.getProgramParameter(this.GLProgram,e.ACTIVE_UNIFORMS);for(t=0;u>t;t++){n=e.getActiveUniform(this.GLProgram,t);var c=n.name,h=c.indexOf("[0]");-1!=h&&(c=c.substring(0,h)),this.symbolToActiveInfo[c]=n,this.symbolToLocation[c]=e.getUniformLocation(this.GLProgram,c),this.uniformSymbols.push(c)}var d=e.getProgramParameter(this.GLProgram,e.ACTIVE_ATTRIBUTES);for(t=0;d>t;t++)n=e.getActiveAttrib(this.GLProgram,t),this.symbolToActiveInfo[n.name]=n,this.symbolToLocation[n.name]=e.getAttribLocation(this.GLProgram,n.name),this.attributeSymbols.push(n.name);a=!0,e.useProgram(l)}return this.errorLogs=e.getProgramInfoLog(this.GLProgram),a}},initWithShaders:{value:function(e){this.shaders=e}},initWithProgram:{value:function(e){this.shaders=e.shaders,this.semanticToSymbol=e.semanticToSymbol,this.symbolToSemantic=e.symbolToSemantic}}});