(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b112587"],{"0393":function(t,e,a){"use strict";a("210b");var i=a("604c"),s=a("d9bd");e["a"]=i["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(t,e){const a=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(a),t.nextIsActive=this.toggleMethod(i)}}})},"166a":function(t,e,a){},1681:function(t,e,a){},"210b":function(t,e,a){},4127:function(t,e,a){"use strict";var i=a("d233"),s=a("b313"),r={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},n=Array.isArray,o=Array.prototype.push,l=function(t,e){o.apply(t,n(e)?e:[e])},c=Date.prototype.toISOString,u={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(t){return c.call(t)},skipNulls:!1,strictNullHandling:!1},d=function t(e,a,s,r,o,c,d,h,p,f,m,v){var b=e;if("function"===typeof d?b=d(a,b):b instanceof Date&&(b=f(b)),null===b){if(r)return c&&!v?c(a,u.encoder):a;b=""}if("string"===typeof b||"number"===typeof b||"boolean"===typeof b||i.isBuffer(b)){if(c){var g=v?a:c(a,u.encoder);return[m(g)+"="+m(c(b,u.encoder))]}return[m(a)+"="+m(String(b))]}var y,O=[];if("undefined"===typeof b)return O;if(n(d))y=d;else{var x=Object.keys(b);y=h?x.sort(h):x}for(var A=0;A<y.length;++A){var C=y[A];o&&null===b[C]||(n(b)?l(O,t(b[C],s(a,C),s,r,o,c,d,h,p,f,m,v)):l(O,t(b[C],a+(p?"."+C:"["+C+"]"),s,r,o,c,d,h,p,f,m,v)))}return O};t.exports=function(t,e){var a=t,o=e?i.assign({},e):{};if(null!==o.encoder&&"undefined"!==typeof o.encoder&&"function"!==typeof o.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof o.delimiter?u.delimiter:o.delimiter,h="boolean"===typeof o.strictNullHandling?o.strictNullHandling:u.strictNullHandling,p="boolean"===typeof o.skipNulls?o.skipNulls:u.skipNulls,f="boolean"===typeof o.encode?o.encode:u.encode,m="function"===typeof o.encoder?o.encoder:u.encoder,v="function"===typeof o.sort?o.sort:null,b="undefined"!==typeof o.allowDots&&o.allowDots,g="function"===typeof o.serializeDate?o.serializeDate:u.serializeDate,y="boolean"===typeof o.encodeValuesOnly?o.encodeValuesOnly:u.encodeValuesOnly;if("undefined"===typeof o.format)o.format=s["default"];else if(!Object.prototype.hasOwnProperty.call(s.formatters,o.format))throw new TypeError("Unknown format option provided.");var O,x,A=s.formatters[o.format];"function"===typeof o.filter?(x=o.filter,a=x("",a)):n(o.filter)&&(x=o.filter,O=x);var C,j=[];if("object"!==typeof a||null===a)return"";C=o.arrayFormat in r?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var w=r[C];O||(O=Object.keys(a)),v&&O.sort(v);for(var _=0;_<O.length;++_){var k=O[_];p&&null===a[k]||l(j,d(a[k],k,w,h,p,f?m:null,x,v,b,g,A,y))}var V=j.join(c),I=!0===o.addQueryPrefix?"?":"";return V.length>0?I+V:""}},4328:function(t,e,a){"use strict";var i=a("4127"),s=a("9e6a"),r=a("b313");t.exports={formats:r,parse:s,stringify:i}},"49e2":function(t,e,a){"use strict";var i=a("0789"),s=a("9d65"),r=a("a9ad"),n=a("3206"),o=a("80d2"),l=a("58df");const c=Object(l["a"])(s["a"],r["a"],Object(n["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e["a"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(t,e){t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick(()=>this.isActive=t)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(t){return t(i["a"],this.showLazyContent(()=>[t("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(o["n"])(this,"default",{open:this.isActive}))])]))}})},"4f72":function(t,e,a){},"604c":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a("14d9"),a("166a");var i=a("8547"),s=a("a452"),r=a("7560"),n=a("58df"),o=a("d9bd");const l=Object(n["a"])(i["a"],s["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some(t=>this.valueComparator(t,e)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),a=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(a);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==a):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const a=this.getValue(t,e);t.isActive=this.toggleMethod(a)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const a=e.find(t=>!t.disabled);if(!a)return;const i=this.items.indexOf(a);this.updateInternalValue(this.getValue(a,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],a=e.slice(),i=a.findIndex(e=>this.valueComparator(e,t));this.mandatory&&i>-1&&a.length-1<1||null!=this.max&&i<0&&a.length+1>this.max||(i>-1?a.splice(i,1):a.push(t),this.internalValue=a)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},8547:function(t,e,a){"use strict";var i=a("2b0e"),s=a("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["i"]}}})},"865e":function(t,e,a){"use strict";a("9185")},"867f":function(t,e,a){"use strict";a("4f72")},9185:function(t,e,a){},"9d01":function(t,e,a){},"9d65":function(t,e,a){"use strict";var i=a("d9bd"),s=a("2b0e");e["a"]=s["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(i["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},"9e6a":function(t,e,a){"use strict";var i=a("d233"),s=Object.prototype.hasOwnProperty,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},n=function(t,e){for(var a={},i=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,n=e.parameterLimit===1/0?void 0:e.parameterLimit,o=i.split(e.delimiter,n),l=0;l<o.length;++l){var c,u,d=o[l],h=d.indexOf("]="),p=-1===h?d.indexOf("="):h+1;-1===p?(c=e.decoder(d,r.decoder),u=e.strictNullHandling?null:""):(c=e.decoder(d.slice(0,p),r.decoder),u=e.decoder(d.slice(p+1),r.decoder)),s.call(a,c)?a[c]=[].concat(a[c]).concat(u):a[c]=u}return a},o=function(t,e,a){for(var i=e,s=t.length-1;s>=0;--s){var r,n=t[s];if("[]"===n&&a.parseArrays)r=[].concat(i);else{r=a.plainObjects?Object.create(null):{};var o="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,l=parseInt(o,10);a.parseArrays||""!==o?!isNaN(l)&&n!==o&&String(l)===o&&l>=0&&a.parseArrays&&l<=a.arrayLimit?(r=[],r[l]=i):"__proto__"!==o&&(r[o]=i):r={0:i}}i=r}return i},l=function(t,e,a){if(t){var i=a.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,r=/(\[[^[\]]*])/,n=/(\[[^[\]]*])/g,l=r.exec(i),c=l?i.slice(0,l.index):i,u=[];if(c){if(!a.plainObjects&&s.call(Object.prototype,c)&&!a.allowPrototypes)return;u.push(c)}var d=0;while(null!==(l=n.exec(i))&&d<a.depth){if(d+=1,!a.plainObjects&&s.call(Object.prototype,l[1].slice(1,-1))&&!a.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+i.slice(l.index)+"]"),o(u,e,a)}};t.exports=function(t,e){var a=e?i.assign({},e):{};if(null!==a.decoder&&void 0!==a.decoder&&"function"!==typeof a.decoder)throw new TypeError("Decoder has to be a function.");if(a.ignoreQueryPrefix=!0===a.ignoreQueryPrefix,a.delimiter="string"===typeof a.delimiter||i.isRegExp(a.delimiter)?a.delimiter:r.delimiter,a.depth="number"===typeof a.depth?a.depth:r.depth,a.arrayLimit="number"===typeof a.arrayLimit?a.arrayLimit:r.arrayLimit,a.parseArrays=!1!==a.parseArrays,a.decoder="function"===typeof a.decoder?a.decoder:r.decoder,a.allowDots="boolean"===typeof a.allowDots?a.allowDots:r.allowDots,a.plainObjects="boolean"===typeof a.plainObjects?a.plainObjects:r.plainObjects,a.allowPrototypes="boolean"===typeof a.allowPrototypes?a.allowPrototypes:r.allowPrototypes,a.parameterLimit="number"===typeof a.parameterLimit?a.parameterLimit:r.parameterLimit,a.strictNullHandling="boolean"===typeof a.strictNullHandling?a.strictNullHandling:r.strictNullHandling,""===t||null===t||"undefined"===typeof t)return a.plainObjects?Object.create(null):{};for(var s="string"===typeof t?n(t,a):t,o=a.plainObjects?Object.create(null):{},c=Object.keys(s),u=0;u<c.length;++u){var d=c[u],h=l(d,s[d],a);o=i.merge(o,h,a)}return i.compact(o)}},a759:function(t,e,a){},b313:function(t,e,a){"use strict";var i=String.prototype.replace,s=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return i.call(t,s,"+")},RFC3986:function(t){return String(t)}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c3f0:function(t,e,a){"use strict";var i=a("80d2");const s=t=>{const{touchstartX:e,touchendX:a,touchstartY:i,touchendY:s}=t,r=.5,n=16;t.offsetX=a-e,t.offsetY=s-i,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&a<e-n&&t.left(t),t.right&&a>e+n&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&s<i-n&&t.up(t),t.down&&s>i+n&&t.down(t))};function r(t,e){const a=t.changedTouches[0];e.touchstartX=a.clientX,e.touchstartY=a.clientY,e.start&&e.start(Object.assign(t,e))}function n(t,e){const a=t.changedTouches[0];e.touchendX=a.clientX,e.touchendY=a.clientY,e.end&&e.end(Object.assign(t,e)),s(e)}function o(t,e){const a=t.changedTouches[0];e.touchmoveX=a.clientX,e.touchmoveY=a.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>n(t,e),touchmove:t=>o(t,e)}}function c(t,e,a){const s=e.value,r=s.parent?t.parentElement:t,n=s.options||{passive:!0};if(!r)return;const o=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[a.context._uid]=o,Object(i["s"])(o).forEach(t=>{r.addEventListener(t,o[t],n)})}function u(t,e,a){const s=e.value.parent?t.parentElement:t;if(!s||!s._touchHandlers)return;const r=s._touchHandlers[a.context._uid];Object(i["s"])(r).forEach(t=>{s.removeEventListener(t,r[t])}),delete s._touchHandlers[a.context._uid]}const d={inserted:c,unbind:u};e["a"]=d},c865:function(t,e,a){"use strict";var i=a("0789"),s=a("9d26"),r=a("a9ad"),n=a("3206"),o=a("5607"),l=a("80d2"),c=a("58df");const u=Object(c["a"])(r["a"],Object(n["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:o["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(t){this.$emit("click",t)},genIcon(){const t=Object(l["n"])(this,"actions",{open:this.isActive})||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render(t){return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l["n"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(t,e,a){"use strict";var i=a("4e82"),s=a("3206"),r=a("80d2"),n=a("58df");e["a"]=Object(n["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(t){this.content=t},unregisterContent(){this.content=null},registerHeader(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(r["n"])(this))}})},d233:function(t,e,a){"use strict";var i=Object.prototype.hasOwnProperty,s=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),r=function(t){var e;while(t.length){var a=t.pop();if(e=a.obj[a.prop],Array.isArray(e)){for(var i=[],s=0;s<e.length;++s)"undefined"!==typeof e[s]&&i.push(e[s]);a.obj[a.prop]=i}}return e},n=function(t,e){for(var a=e&&e.plainObjects?Object.create(null):{},i=0;i<t.length;++i)"undefined"!==typeof t[i]&&(a[i]=t[i]);return a},o=function t(e,a,s){if(!a)return e;if("object"!==typeof a){if(Array.isArray(e))e.push(a);else{if(!e||"object"!==typeof e)return[e,a];(s&&(s.plainObjects||s.allowPrototypes)||!i.call(Object.prototype,a))&&(e[a]=!0)}return e}if(!e||"object"!==typeof e)return[e].concat(a);var r=e;return Array.isArray(e)&&!Array.isArray(a)&&(r=n(e,s)),Array.isArray(e)&&Array.isArray(a)?(a.forEach((function(a,r){if(i.call(e,r)){var n=e[r];n&&"object"===typeof n&&a&&"object"===typeof a?e[r]=t(n,a,s):e.push(a)}else e[r]=a})),e):Object.keys(a).reduce((function(e,r){var n=a[r];return i.call(e,r)?e[r]=t(e[r],n,s):e[r]=n,e}),r)},l=function(t,e){return Object.keys(e).reduce((function(t,a){return t[a]=e[a],t}),t)},c=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),a="",i=0;i<e.length;++i){var r=e.charCodeAt(i);45===r||46===r||95===r||126===r||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122?a+=e.charAt(i):r<128?a+=s[r]:r<2048?a+=s[192|r>>6]+s[128|63&r]:r<55296||r>=57344?a+=s[224|r>>12]+s[128|r>>6&63]+s[128|63&r]:(i+=1,r=65536+((1023&r)<<10|1023&e.charCodeAt(i)),a+=s[240|r>>18]+s[128|r>>12&63]+s[128|r>>6&63]+s[128|63&r])}return a},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],a=[],i=0;i<e.length;++i)for(var s=e[i],n=s.obj[s.prop],o=Object.keys(n),l=0;l<o.length;++l){var c=o[l],u=n[c];"object"===typeof u&&null!==u&&-1===a.indexOf(u)&&(e.push({obj:n,prop:c}),a.push(u))}return r(e)},h=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:n,assign:l,compact:d,decode:c,encode:u,isBuffer:p,isRegExp:h,merge:o}},e251:function(t,e,a){"use strict";a("a759")},ec29:function(t,e,a){},ffe0:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{attrs:{id:"cadastroOrcamento"}},[e("h1",[t._v("tela em construção")]),e("CategoriasProdutoOrcamento")],1)},s=[],r=a("9ab4"),n=a("1b40"),o=a("cd55"),l=a("49e2"),c=a("c865"),u=a("0393"),d=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(u["a"],{attrs:{focusable:""}},t._l(t.categoriasProduto,(function(a){return e(o["a"],{key:a.id,staticClass:"mb-1"},[e(c["a"],[e("h3",{staticClass:"text-center"},[t._v(" "+t._s(a.descricao))])]),e(l["a"],{staticClass:"jus",attrs:{color:"#FCE4"}},[e("GeracaoOrcamentoProduto",{attrs:{CategoriaId:a.id}})],1)],1)})),1)],1)},h=[],p=a("cce0"),f=a("fc60"),m=a("0a4f"),v=a("4bb5"),b=a("8336"),g=a("62ad"),y=a("0fd9"),O=(a("ec29"),a("9d01"),a("14d9"),a("c37a")),x=a("5607"),A=a("2b0e"),C=A["a"].extend({name:"rippleable",directives:{ripple:x["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),j=a("8547"),w=a("58df");function _(t){t.preventDefault()}var k=Object(w["a"])(O["a"],C,j["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=O["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:_},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:_},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}}),V=a("c3f0"),I=a("0789"),P=a("490a"),D=a("80d2"),E=k.extend({name:"v-switch",directives:{Touch:V["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...O["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(I["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(P["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===D["r"].left&&this.isActive||t.keyCode===D["r"].right&&!this.isActive)&&this.onChange()}}}),R=a("8654");a("1681");const S=Object(w["a"])(R["a"]);var $,B=S.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...R["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=R["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){R["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),T=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("div",{attrs:{id:"orcamento-produto"}},[e("h1",[t._v(" Escolha um produto para fazer orçamento ")]),t._e()]),e("div",[e(u["a"],{attrs:{focusable:""}},t._l(t.produtosCategoria,(function(a){return e(o["a"],{key:a.id,staticClass:"mb-1"},[e(c["a"],[e("h3",{staticClass:"text-center"},[t._v(" "+t._s(a.nome))])]),e(l["a"],{staticClass:"jus",attrs:{color:"deep-purple lighten-4"}},[e(y["a"],{attrs:{justify:"center"}},[e(g["a"],{attrs:{cols:"4",sm:"4",md:"4"}},[e(R["a"],{attrs:{type:"number",label:"Largura"},model:{value:t.request.Largura,callback:function(e){t.$set(t.request,"Largura",e)},expression:"request.Largura"}}),e(R["a"],{attrs:{type:"number",label:"Altura"},model:{value:t.request.Altura,callback:function(e){t.$set(t.request,"Altura",e)},expression:"request.Altura"}}),e(R["a"],{attrs:{type:"number",label:"Comprimento"},model:{value:t.request.Comprimento,callback:function(e){t.$set(t.request,"Comprimento",e)},expression:"request.Comprimento"}})],1)],1),e(y["a"],[e(g["a"],{attrs:{cols:"6",sm:"6",md:"6"}},[e(E,{attrs:{label:"Adicionar Observações"},model:{value:t.habilitaObs,callback:function(e){t.habilitaObs=e},expression:"habilitaObs"}}),t.habilitaObs?e(B,{attrs:{background:"white",type:"number",label:"Observações do orçamento"},model:{value:t.observacoes,callback:function(e){t.observacoes=e},expression:"observacoes"}}):t._e()],1)],1),e(b["a"],{staticClass:"mt-9 mx-auto d-block text-none blue--text text--darken-3",attrs:{disabled:!t.request.Largura||!t.request.Altura||!t.request.Comprimento,depressed:"",color:"amber","min-width":"300"},on:{click:function(e){return t.baixarOrcamentoQuantidadeCompra(a.id,a.nome)}}},[e("h2",[t._v("Visualizar orçamento de compra")])]),e(b["a"],{staticClass:"mt-9 mx-auto d-block text-none blue--text text--darken-3",attrs:{disabled:!t.request.Largura||!t.request.Altura||!t.request.Comprimento,depressed:"",color:"amber","min-width":"300"},on:{click:function(e){return t.baixarOrcamentoQuantidadeExata(a.id,a.nome)}}},[e("h2",[t._v("Visualizar orçamento exato")])])],1)],1)})),1)],1)])},L=[],q=a("568b"),H=a("8640"),M=a("4328"),N=a.n(M);class F{async ObterOrcamentoProduto(t){const e=N.a.stringify(t),a=await this.$http.get("orcamento/?"+e,{responseType:"blob",timeout:12e4});return URL.createObjectURL(a.data)}async ObterOrcamentoProdutoExato(t){const e=N.a.stringify(t),a=await this.$http.get("orcamento/?"+e,{responseType:"blob",timeout:12e4});return URL.createObjectURL(a.data)}}Object(r["a"])([H["Inject"],Object(r["b"])("design:type","function"===typeof($="undefined"!==typeof q["a"]&&q["a"])?$:Object)],F.prototype,"$http",void 0);class z{}const G=Object(v["c"])(m["a"].PRODUTO);let X=class extends n["c"]{constructor(){super(...arguments),this.pdf="",this.request=new z,this.observacoes=" ",this.habilitaObs=!1}get eMobile(){return this.$vuetify.breakpoint.xsOnly}async mounted(){this.AtivarCarregamento(),await this.obterTodosProdutosPorCategoria(this.CategoriaId),this.DesativarCarregamento()}get produtosCategoria(){return this.produtos.filter(t=>t.categoriaProdutoId===this.CategoriaId)}async obterArquivo(){const t=H["Container"].get(F);this.pdf=await t.ObterOrcamentoProduto(this.request)}async obterArquivoOrcamentoExato(){const t=H["Container"].get(F);this.pdf=await t.ObterOrcamentoProdutoExato(this.request)}async baixarOrcamentoQuantidadeCompra(t,e){this.request.ProdutoId=t,this.request.NomeProduto=e,this.request.Observacoes=this.observacoes,this.AtivarCarregamento(),await this.obterArquivo().then(()=>{this.DesativarCarregamento();const e=document.createElement("a");e.href=this.pdf;const a="Orcamento_"+t+"la_"+this.request.Largura+"alt_"+this.request.Altura+"com_"+this.request.Comprimento;e.setAttribute("download",a),document.body.appendChild(e),e.click(),document.body.removeChild(e)}).catch(()=>{this.DesativarCarregamento(),alert("Algo deu errado nesta operação")})}async baixarOrcamentoQuantidadeExata(t,e){this.request.ProdutoId=t,this.request.NomeProduto=e,this.request.Observacoes=this.observacoes,this.AtivarCarregamento(),await this.obterArquivoOrcamentoExato().then(()=>{this.DesativarCarregamento();const e=document.createElement("a");e.href=this.pdf;const a="Orcamento_"+t+"la_"+this.request.Largura+"alt_"+this.request.Altura+"com_"+this.request.Comprimento;e.setAttribute("download",a),document.body.appendChild(e),e.click(),document.body.removeChild(e)}).catch(()=>{this.DesativarCarregamento(),alert("Algo deu errado nesta operação")})}};Object(r["a"])([Object(n["b"])(),Object(r["b"])("design:type",Number)],X.prototype,"CategoriaId",void 0),Object(r["a"])([G.Action(p["a"].OBTER_PRODUTOS_POR_CATEGORIA),Object(r["b"])("design:type",Function)],X.prototype,"obterTodosProdutosPorCategoria",void 0),Object(r["a"])([G.State,Object(r["b"])("design:type",Array)],X.prototype,"produtos",void 0),Object(r["a"])([Object(v["a"])(f["a"].ATIVAR_CARREGAMENTO),Object(r["b"])("design:type",Function)],X.prototype,"AtivarCarregamento",void 0),Object(r["a"])([Object(v["a"])(f["a"].DESATIVAR_CARREGAMENTO),Object(r["b"])("design:type",Function)],X.prototype,"DesativarCarregamento",void 0),X=Object(r["a"])([Object(n["a"])({})],X);var Y=X,U=Y,Q=(a("867f"),a("2877")),K=Object(Q["a"])(U,T,L,!1,null,"a415a2f6",null),J=K.exports;const W=Object(v["c"])(m["a"].PRODUTO);let Z=class extends n["c"]{get eMobile(){return this.$vuetify.breakpoint.xsOnly}async mounted(){this.AtivarCarregamento(),await this.obterTodasCategoriasProduto().then(()=>{this.DesativarCarregamento()}).catch(()=>{alert("Algo deu errado nesta operação"),this.DesativarCarregamento()})}};Object(r["a"])([W.Action(p["a"].OBTER_CATEGORIAS_PRODUTO),Object(r["b"])("design:type",Function)],Z.prototype,"obterTodasCategoriasProduto",void 0),Object(r["a"])([W.State,Object(r["b"])("design:type",Array)],Z.prototype,"categoriasProduto",void 0),Object(r["a"])([Object(v["a"])(f["a"].ATIVAR_CARREGAMENTO),Object(r["b"])("design:type",Function)],Z.prototype,"AtivarCarregamento",void 0),Object(r["a"])([Object(v["a"])(f["a"].DESATIVAR_CARREGAMENTO),Object(r["b"])("design:type",Function)],Z.prototype,"DesativarCarregamento",void 0),Z=Object(r["a"])([Object(n["a"])({components:{GeracaoOrcamentoProduto:J}})],Z);var tt=Z,et=tt,at=(a("865e"),Object(Q["a"])(et,d,h,!1,null,"19e66774",null)),it=at.exports;let st=class extends n["c"]{constructor(){super(...arguments),this.tab=null}};st=Object(r["a"])([Object(n["a"])({components:{CategoriasProdutoOrcamento:it}})],st);var rt=st,nt=rt,ot=(a("e251"),Object(Q["a"])(nt,i,s,!1,null,"36a56226",null));e["default"]=ot.exports}}]);