montageDefine("bfd16e7","core/converter/upper-case-converter",{dependencies:["montage","core/converter/converter"],factory:function(e,t){e("montage").Montage;var n=e("core/converter/converter").Converter;t.UpperCaseConverter=n.specialize({_convert:{value:function(e){return e&&"string"==typeof e?e.toUpperCase?e.toUpperCase():e:e}},convert:{value:function(e){return this._convert(e)}},revert:{value:function(e){return this._convert(e)}}})}});