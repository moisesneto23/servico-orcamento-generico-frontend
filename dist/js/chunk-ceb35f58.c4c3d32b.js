(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ceb35f58"],{"0393":function(e,t,a){"use strict";a("210b");var i=a("604c"),s=a("d9bd");t["a"]=i["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const a=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(a),e.nextIsActive=this.toggleMethod(i)}}})},"166a":function(e,t,a){},1681:function(e,t,a){},"210b":function(e,t,a){},"30f8":function(e,t,a){"use strict";a("43d3")},4127:function(e,t,a){"use strict";var i=a("d233"),s=a("b313"),n={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},r=Array.isArray,o=Array.prototype.push,l=function(e,t){o.apply(e,r(t)?t:[t])},c=Date.prototype.toISOString,u={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(e){return c.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,a,s,n,o,c,d,h,p,f,v,m){var b=t;if("function"===typeof d?b=d(a,b):b instanceof Date&&(b=f(b)),null===b){if(n)return c&&!m?c(a,u.encoder):a;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||i.isBuffer(b)){if(c){var y=m?a:c(a,u.encoder);return[v(y)+"="+v(c(b,u.encoder))]}return[v(a)+"="+v(String(b))]}var g,O=[];if("undefined"===typeof b)return O;if(r(d))g=d;else{var x=Object.keys(b);g=h?x.sort(h):x}for(var A=0;A<g.length;++A){var C=g[A];o&&null===b[C]||(r(b)?l(O,e(b[C],s(a,C),s,n,o,c,d,h,p,f,v,m)):l(O,e(b[C],a+(p?"."+C:"["+C+"]"),s,n,o,c,d,h,p,f,v,m)))}return O};e.exports=function(e,t){var a=e,o=t?i.assign({},t):{};if(null!==o.encoder&&"undefined"!==typeof o.encoder&&"function"!==typeof o.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof o.delimiter?u.delimiter:o.delimiter,h="boolean"===typeof o.strictNullHandling?o.strictNullHandling:u.strictNullHandling,p="boolean"===typeof o.skipNulls?o.skipNulls:u.skipNulls,f="boolean"===typeof o.encode?o.encode:u.encode,v="function"===typeof o.encoder?o.encoder:u.encoder,m="function"===typeof o.sort?o.sort:null,b="undefined"!==typeof o.allowDots&&o.allowDots,y="function"===typeof o.serializeDate?o.serializeDate:u.serializeDate,g="boolean"===typeof o.encodeValuesOnly?o.encodeValuesOnly:u.encodeValuesOnly;if("undefined"===typeof o.format)o.format=s["default"];else if(!Object.prototype.hasOwnProperty.call(s.formatters,o.format))throw new TypeError("Unknown format option provided.");var O,x,A=s.formatters[o.format];"function"===typeof o.filter?(x=o.filter,a=x("",a)):r(o.filter)&&(x=o.filter,O=x);var C,j=[];if("object"!==typeof a||null===a)return"";C=o.arrayFormat in n?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var w=n[C];O||(O=Object.keys(a)),m&&O.sort(m);for(var V=0;V<O.length;++V){var k=O[V];p&&null===a[k]||l(j,d(a[k],k,w,h,p,f?v:null,x,m,b,y,A,g))}var I=j.join(c),_=!0===o.addQueryPrefix?"?":"";return I.length>0?_+I:""}},4328:function(e,t,a){"use strict";var i=a("4127"),s=a("9e6a"),n=a("b313");e.exports={formats:n,parse:s,stringify:i}},"43d3":function(e,t,a){},"49e2":function(e,t,a){"use strict";var i=a("0789"),s=a("9d65"),n=a("a9ad"),r=a("3206"),o=a("80d2"),l=a("58df");const c=Object(l["a"])(s["a"],n["a"],Object(r["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(i["a"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(o["n"])(this,"default",{open:this.isActive}))])]))}})},"4f06":function(e,t,a){"use strict";a("72e9")},"604c":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("14d9"),a("166a");var i=a("8547"),s=a("a452"),n=a("7560"),r=a("58df"),o=a("d9bd");const l=Object(r["a"])(i["a"],s["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((e,t)=>this.toggleMethod(this.getValue(e,t)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some(e=>this.valueComparator(e,t)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",()=>this.onClick(e)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),a=this.getValue(e,t);this.items.splice(t,1);const i=this.selectedValues.indexOf(a);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(e=>e!==a):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const a=this.getValue(e,t);e.isActive=this.toggleMethod(a)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const a=t.find(e=>!e.disabled);if(!a)return;const i=this.items.indexOf(a);this.updateInternalValue(this.getValue(a,i))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],a=t.slice(),i=a.findIndex(t=>this.valueComparator(t,e));this.mandatory&&i>-1&&a.length-1<1||null!=this.max&&i<0&&a.length+1>this.max||(i>-1?a.splice(i,1):a.push(e),this.internalValue=a)},updateSingle(e){const t=this.valueComparator(this.internalValue,e);this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},"72e9":function(e,t,a){},8547:function(e,t,a){"use strict";var i=a("2b0e"),s=a("80d2");t["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["i"]}}})},"89be":function(e,t,a){"use strict";a("f55d")},"9d01":function(e,t,a){},"9d65":function(e,t,a){"use strict";var i=a("d9bd"),s=a("2b0e");t["a"]=s["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(i["e"])("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}})},"9e6a":function(e,t,a){"use strict";var i=a("d233"),s=Object.prototype.hasOwnProperty,n={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},r=function(e,t){for(var a={},i=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,r=t.parameterLimit===1/0?void 0:t.parameterLimit,o=i.split(t.delimiter,r),l=0;l<o.length;++l){var c,u,d=o[l],h=d.indexOf("]="),p=-1===h?d.indexOf("="):h+1;-1===p?(c=t.decoder(d,n.decoder),u=t.strictNullHandling?null:""):(c=t.decoder(d.slice(0,p),n.decoder),u=t.decoder(d.slice(p+1),n.decoder)),s.call(a,c)?a[c]=[].concat(a[c]).concat(u):a[c]=u}return a},o=function(e,t,a){for(var i=t,s=e.length-1;s>=0;--s){var n,r=e[s];if("[]"===r&&a.parseArrays)n=[].concat(i);else{n=a.plainObjects?Object.create(null):{};var o="["===r.charAt(0)&&"]"===r.charAt(r.length-1)?r.slice(1,-1):r,l=parseInt(o,10);a.parseArrays||""!==o?!isNaN(l)&&r!==o&&String(l)===o&&l>=0&&a.parseArrays&&l<=a.arrayLimit?(n=[],n[l]=i):"__proto__"!==o&&(n[o]=i):n={0:i}}i=n}return i},l=function(e,t,a){if(e){var i=a.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/,r=/(\[[^[\]]*])/g,l=n.exec(i),c=l?i.slice(0,l.index):i,u=[];if(c){if(!a.plainObjects&&s.call(Object.prototype,c)&&!a.allowPrototypes)return;u.push(c)}var d=0;while(null!==(l=r.exec(i))&&d<a.depth){if(d+=1,!a.plainObjects&&s.call(Object.prototype,l[1].slice(1,-1))&&!a.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+i.slice(l.index)+"]"),o(u,t,a)}};e.exports=function(e,t){var a=t?i.assign({},t):{};if(null!==a.decoder&&void 0!==a.decoder&&"function"!==typeof a.decoder)throw new TypeError("Decoder has to be a function.");if(a.ignoreQueryPrefix=!0===a.ignoreQueryPrefix,a.delimiter="string"===typeof a.delimiter||i.isRegExp(a.delimiter)?a.delimiter:n.delimiter,a.depth="number"===typeof a.depth?a.depth:n.depth,a.arrayLimit="number"===typeof a.arrayLimit?a.arrayLimit:n.arrayLimit,a.parseArrays=!1!==a.parseArrays,a.decoder="function"===typeof a.decoder?a.decoder:n.decoder,a.allowDots="boolean"===typeof a.allowDots?a.allowDots:n.allowDots,a.plainObjects="boolean"===typeof a.plainObjects?a.plainObjects:n.plainObjects,a.allowPrototypes="boolean"===typeof a.allowPrototypes?a.allowPrototypes:n.allowPrototypes,a.parameterLimit="number"===typeof a.parameterLimit?a.parameterLimit:n.parameterLimit,a.strictNullHandling="boolean"===typeof a.strictNullHandling?a.strictNullHandling:n.strictNullHandling,""===e||null===e||"undefined"===typeof e)return a.plainObjects?Object.create(null):{};for(var s="string"===typeof e?r(e,a):e,o=a.plainObjects?Object.create(null):{},c=Object.keys(s),u=0;u<c.length;++u){var d=c[u],h=l(d,s[d],a);o=i.merge(o,h,a)}return i.compact(o)}},b313:function(e,t,a){"use strict";var i=String.prototype.replace,s=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return i.call(e,s,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c3f0:function(e,t,a){"use strict";var i=a("80d2");const s=e=>{const{touchstartX:t,touchendX:a,touchstartY:i,touchendY:s}=e,n=.5,r=16;e.offsetX=a-t,e.offsetY=s-i,Math.abs(e.offsetY)<n*Math.abs(e.offsetX)&&(e.left&&a<t-r&&e.left(e),e.right&&a>t+r&&e.right(e)),Math.abs(e.offsetX)<n*Math.abs(e.offsetY)&&(e.up&&s<i-r&&e.up(e),e.down&&s>i+r&&e.down(e))};function n(e,t){const a=e.changedTouches[0];t.touchstartX=a.clientX,t.touchstartY=a.clientY,t.start&&t.start(Object.assign(e,t))}function r(e,t){const a=e.changedTouches[0];t.touchendX=a.clientX,t.touchendY=a.clientY,t.end&&t.end(Object.assign(e,t)),s(t)}function o(e,t){const a=e.changedTouches[0];t.touchmoveX=a.clientX,t.touchmoveY=a.clientY,t.move&&t.move(Object.assign(e,t))}function l(e){const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>n(e,t),touchend:e=>r(e,t),touchmove:e=>o(e,t)}}function c(e,t,a){const s=t.value,n=s.parent?e.parentElement:e,r=s.options||{passive:!0};if(!n)return;const o=l(t.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[a.context._uid]=o,Object(i["s"])(o).forEach(e=>{n.addEventListener(e,o[e],r)})}function u(e,t,a){const s=t.value.parent?e.parentElement:e;if(!s||!s._touchHandlers)return;const n=s._touchHandlers[a.context._uid];Object(i["s"])(n).forEach(e=>{s.removeEventListener(e,n[e])}),delete s._touchHandlers[a.context._uid]}const d={inserted:c,unbind:u};t["a"]=d},c865:function(e,t,a){"use strict";var i=a("0789"),s=a("9d26"),n=a("a9ad"),r=a("3206"),o=a("5607"),l=a("80d2"),c=a("58df");const u=Object(c["a"])(n["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:o["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(l["n"])(this,"actions",{open:this.isActive})||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l["n"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,a){"use strict";var i=a("4e82"),s=a("3206"),n=a("80d2"),r=a("58df");t["a"]=Object(r["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(n["n"])(this))}})},cfef:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("CategoriasProdutoOrcamento")],1)},s=[],n=a("9ab4"),r=a("1b40"),o=a("cd55"),l=a("49e2"),c=a("c865"),u=a("0393"),d=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t(u["a"],{attrs:{focusable:""}},e._l(e.categoriasProduto,(function(a){return t(o["a"],{key:a.id,staticClass:"mb-1"},[t(c["a"],[t("h3",{staticClass:"text-center"},[e._v(" "+e._s(a.descricao))])]),t(l["a"],{staticClass:"jus",attrs:{color:"#FCE4"}},[t("GeracaoOrcamentoProduto",{attrs:{CategoriaId:a.id}})],1)],1)})),1)],1)},h=[],p=a("cce0"),f=a("fc60"),v=a("0a4f"),m=a("4bb5"),b=a("8336"),y=a("62ad"),g=a("0fd9"),O=(a("ec29"),a("9d01"),a("14d9"),a("c37a")),x=a("5607"),A=a("2b0e"),C=A["a"].extend({name:"rippleable",directives:{ripple:x["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),j=a("8547"),w=a("58df");function V(e){e.preventDefault()}var k=Object(w["a"])(O["a"],C,j["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=O["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:V},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:V},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const a=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===a&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}}),I=a("c3f0"),_=a("0789"),P=a("490a"),D=a("80d2"),R=k.extend({name:"v-switch",directives:{Touch:I["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...O["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...t}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(_["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(P["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(e){(e.keyCode===D["r"].left&&this.isActive||e.keyCode===D["r"].right&&!this.isActive)&&this.onChange()}}}),S=a("8654");a("1681");const $=Object(w["a"])(S["a"]);var E,B=$.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...S["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick(()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"},genInput(){const e=S["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){S["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),T=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{attrs:{id:"orcamento-produto"}},[t("h1",[e._v(" Escolha um produto para fazer orçamento ")]),e._e()]),t("div",[t(u["a"],{attrs:{focusable:""}},e._l(e.produtosCategoria,(function(a){return t(o["a"],{key:a.id,staticClass:"mb-1"},[t(c["a"],[t("h3",{staticClass:"text-center"},[e._v(" "+e._s(a.nome))])]),t(l["a"],{staticClass:"jus",attrs:{color:"deep-purple lighten-4"}},[t(g["a"],{attrs:{justify:"center"}},[t(y["a"],{attrs:{cols:"4",sm:"4",md:"4"}},[t(S["a"],{attrs:{type:"number",label:"Largura"},model:{value:e.request.Largura,callback:function(t){e.$set(e.request,"Largura",t)},expression:"request.Largura"}}),t(S["a"],{attrs:{type:"number",label:"Altura"},model:{value:e.request.Altura,callback:function(t){e.$set(e.request,"Altura",t)},expression:"request.Altura"}}),t(S["a"],{attrs:{type:"number",label:"Comprimento"},model:{value:e.request.Comprimento,callback:function(t){e.$set(e.request,"Comprimento",t)},expression:"request.Comprimento"}})],1)],1),t(g["a"],[t(y["a"],{attrs:{cols:"6",sm:"6",md:"6"}},[t(R,{attrs:{label:"Adicionar Observações"},model:{value:e.habilitaObs,callback:function(t){e.habilitaObs=t},expression:"habilitaObs"}}),e.habilitaObs?t(B,{attrs:{background:"white",type:"number",label:"Observações do orçamento"},model:{value:e.observacoes,callback:function(t){e.observacoes=t},expression:"observacoes"}}):e._e()],1)],1),t(b["a"],{staticClass:"mt-9 mx-auto d-block text-none blue--text text--darken-3",attrs:{disabled:!e.request.Largura||!e.request.Altura||!e.request.Comprimento,depressed:"",color:"amber","min-width":"382"},on:{click:function(t){return e.baixarContrato(a.id,a.nome)}}},[t("h2",[e._v("Visualizar orçamento")])])],1)],1)})),1)],1)])},H=[],L=a("568b"),M=a("8640"),N=a("4328"),F=a.n(N);class q{async ObterOrcamentoProduto(e){const t=F.a.stringify(e),a=await this.$http.get("orcamento/?"+t,{responseType:"blob",timeout:12e4});return URL.createObjectURL(a.data)}}Object(n["a"])([M["Inject"],Object(n["b"])("design:type","function"===typeof(E="undefined"!==typeof L["a"]&&L["a"])?E:Object)],q.prototype,"$http",void 0);class z{}const G=Object(m["c"])(v["a"].PRODUTO);let X=class extends r["c"]{constructor(){super(...arguments),this.pdf="",this.request=new z,this.observacoes=" ",this.habilitaObs=!1}get eMobile(){return this.$vuetify.breakpoint.xsOnly}async mounted(){this.AtivarCarregamento(),await this.obterTodosProdutosPorCategoria(this.CategoriaId),this.DesativarCarregamento()}get produtosCategoria(){return this.produtos.filter(e=>e.categoriaProdutoId===this.CategoriaId)}async obterArquivo(){const e=M["Container"].get(q);this.pdf=await e.ObterOrcamentoProduto(this.request)}async baixarContrato(e,t){this.request.ProdutoId=e,this.request.NomeProduto=t,this.request.Observacoes=this.observacoes,this.AtivarCarregamento(),await this.obterArquivo().then(()=>{this.DesativarCarregamento();const t=document.createElement("a");t.href=this.pdf;const a="Orcamento_"+e+"la_"+this.request.Largura+"alt_"+this.request.Altura+"com_"+this.request.Comprimento;t.setAttribute("download",a),document.body.appendChild(t),t.click(),document.body.removeChild(t)}).catch(()=>{this.DesativarCarregamento(),alert("Algo deu errado nesta operação")})}};Object(n["a"])([Object(r["b"])(),Object(n["b"])("design:type",Number)],X.prototype,"CategoriaId",void 0),Object(n["a"])([G.Action(p["a"].OBTER_PRODUTOS_POR_CATEGORIA),Object(n["b"])("design:type",Function)],X.prototype,"obterTodosProdutosPorCategoria",void 0),Object(n["a"])([G.State,Object(n["b"])("design:type",Array)],X.prototype,"produtos",void 0),Object(n["a"])([Object(m["a"])(f["a"].ATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],X.prototype,"AtivarCarregamento",void 0),Object(n["a"])([Object(m["a"])(f["a"].DESATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],X.prototype,"DesativarCarregamento",void 0),X=Object(n["a"])([Object(r["a"])({})],X);var Y=X,U=Y,K=(a("4f06"),a("2877")),Q=Object(K["a"])(U,T,H,!1,null,"6a0b99b2",null),J=Q.exports;const W=Object(m["c"])(v["a"].PRODUTO);let Z=class extends r["c"]{get eMobile(){return this.$vuetify.breakpoint.xsOnly}async mounted(){this.AtivarCarregamento(),await this.obterTodasCategoriasProduto(),this.DesativarCarregamento()}};Object(n["a"])([W.Action(p["a"].OBTER_CATEGORIAS_PRODUTO),Object(n["b"])("design:type",Function)],Z.prototype,"obterTodasCategoriasProduto",void 0),Object(n["a"])([W.State,Object(n["b"])("design:type",Array)],Z.prototype,"categoriasProduto",void 0),Object(n["a"])([Object(m["a"])(f["a"].ATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],Z.prototype,"AtivarCarregamento",void 0),Object(n["a"])([Object(m["a"])(f["a"].DESATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],Z.prototype,"DesativarCarregamento",void 0),Z=Object(n["a"])([Object(r["a"])({components:{GeracaoOrcamentoProduto:J}})],Z);var ee=Z,te=ee,ae=(a("30f8"),Object(K["a"])(te,d,h,!1,null,"939df390",null)),ie=ae.exports;let se=class extends r["c"]{get eMobile(){return this.$vuetify.breakpoint.xsOnly}};se=Object(n["a"])([Object(r["a"])({components:{CategoriasProdutoOrcamento:ie}})],se);var ne=se,re=ne,oe=(a("89be"),Object(K["a"])(re,i,s,!1,null,"f2d57090",null));t["default"]=oe.exports},d233:function(e,t,a){"use strict";var i=Object.prototype.hasOwnProperty,s=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),n=function(e){var t;while(e.length){var a=e.pop();if(t=a.obj[a.prop],Array.isArray(t)){for(var i=[],s=0;s<t.length;++s)"undefined"!==typeof t[s]&&i.push(t[s]);a.obj[a.prop]=i}}return t},r=function(e,t){for(var a=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)"undefined"!==typeof e[i]&&(a[i]=e[i]);return a},o=function e(t,a,s){if(!a)return t;if("object"!==typeof a){if(Array.isArray(t))t.push(a);else{if(!t||"object"!==typeof t)return[t,a];(s&&(s.plainObjects||s.allowPrototypes)||!i.call(Object.prototype,a))&&(t[a]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(a);var n=t;return Array.isArray(t)&&!Array.isArray(a)&&(n=r(t,s)),Array.isArray(t)&&Array.isArray(a)?(a.forEach((function(a,n){if(i.call(t,n)){var r=t[n];r&&"object"===typeof r&&a&&"object"===typeof a?t[n]=e(r,a,s):t.push(a)}else t[n]=a})),t):Object.keys(a).reduce((function(t,n){var r=a[n];return i.call(t,n)?t[n]=e(t[n],r,s):t[n]=r,t}),n)},l=function(e,t){return Object.keys(t).reduce((function(e,a){return e[a]=t[a],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},u=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),a="",i=0;i<t.length;++i){var n=t.charCodeAt(i);45===n||46===n||95===n||126===n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?a+=t.charAt(i):n<128?a+=s[n]:n<2048?a+=s[192|n>>6]+s[128|63&n]:n<55296||n>=57344?a+=s[224|n>>12]+s[128|n>>6&63]+s[128|63&n]:(i+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(i)),a+=s[240|n>>18]+s[128|n>>12&63]+s[128|n>>6&63]+s[128|63&n])}return a},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],a=[],i=0;i<t.length;++i)for(var s=t[i],r=s.obj[s.prop],o=Object.keys(r),l=0;l<o.length;++l){var c=o[l],u=r[c];"object"===typeof u&&null!==u&&-1===a.indexOf(u)&&(t.push({obj:r,prop:c}),a.push(u))}return n(t)},h=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:r,assign:l,compact:d,decode:c,encode:u,isBuffer:p,isRegExp:h,merge:o}},ec29:function(e,t,a){},f55d:function(e,t,a){}}]);
//# sourceMappingURL=chunk-ceb35f58.c4c3d32b.js.map