(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1167db2e"],{"0393":function(e,t,a){"use strict";a("210b");var i=a("604c"),s=a("d9bd");t["a"]=i["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const a=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(a),e.nextIsActive=this.toggleMethod(i)}}})},1471:function(e,t,a){"use strict";a("45b4")},"166a":function(e,t,a){},"171c":function(e,t,a){},"210b":function(e,t,a){},"2fa4":function(e,t,a){"use strict";a("20f6");var i=a("80d2");t["a"]=Object(i["h"])("spacer","div","v-spacer")},"39d2":function(e,t,a){"use strict";a("171c")},"45b4":function(e,t,a){},"49e2":function(e,t,a){"use strict";var i=a("0789"),s=a("9d65"),n=a("a9ad"),r=a("3206"),o=a("80d2"),l=a("58df");const c=Object(l["a"])(s["a"],n["a"],Object(r["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(i["a"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(o["n"])(this,"default",{open:this.isActive}))])]))}})},"604c":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("14d9"),a("166a");var i=a("8547"),s=a("a452"),n=a("7560"),r=a("58df"),o=a("d9bd");const l=Object(r["a"])(i["a"],s["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((e,t)=>this.toggleMethod(this.getValue(e,t)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some(e=>this.valueComparator(e,t)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",()=>this.onClick(e)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),a=this.getValue(e,t);this.items.splice(t,1);const i=this.selectedValues.indexOf(a);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(e=>e!==a):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const a=this.getValue(e,t);e.isActive=this.toggleMethod(a)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const a=t.find(e=>!e.disabled);if(!a)return;const i=this.items.indexOf(a);this.updateInternalValue(this.getValue(a,i))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],a=t.slice(),i=a.findIndex(t=>this.valueComparator(t,e));this.mandatory&&i>-1&&a.length-1<1||null!=this.max&&i<0&&a.length+1>this.max||(i>-1?a.splice(i,1):a.push(e),this.internalValue=a)},updateSingle(e){const t=this.valueComparator(this.internalValue,e);this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},"708d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"cadastroOrcamento"}},[t("cadastro-item",{staticClass:"mb-8"}),t("listagem-item")],1)},s=[],n=a("9ab4"),r=a("1b40"),o=a("8336"),l=a("62ad"),c=a("ce7e"),d=a("cd55"),u=a("49e2"),p=a("c865"),h=a("0393"),m=a("132d"),v=a("0fd9"),b=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(h["a"],{attrs:{focusable:""}},e._l(e.obterItensUnitarios,(function(a,i){return t(d["a"],{key:i,staticClass:"mb-2"},[t(p["a"],[t("h3",[e._v(" "+e._s(a.nome))]),t(c["a"],{staticClass:"mx-2",attrs:{vertical:""}}),t("h4",[e._v("Categoria: "),t("h5",[e._v(" "+e._s(a.nome)+" ")])])],1),t(u["a"],[t(v["a"],[t(l["a"],{attrs:{cols:"6"}},[t("edicao-item",{attrs:{itemEdicao:a}}),t("h3",{staticClass:"text-center"},[e._v("Editar")])],1),t(l["a"],{attrs:{cols:"6"}},[t(o["a"],{attrs:{text:""}},[t(m["a"],{attrs:{"x-large":""},on:{click:function(t){return e.excluirItem(a.id)}}},[e._v("mdi-trash-can-outline")])],1),t("h3",{staticClass:"text-center"},[e._v("Escluir")])],1)],1)],1)],1)})),1)},g=[],x=a("0613"),f=a("af01"),A=a("4bb5"),y=a("b0af"),O=a("99d9"),C=a("a523"),I=a("169a"),j=a("2fa4"),V=a("8654"),_=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{justify:"center"}},[t(I["a"],{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(y["a"],[t(O["c"],[t("span",{staticClass:"text-h5"},[e._v("Editar Item")])]),t(O["b"],[t(C["a"],[t(v["a"],[t(l["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(V["a"],{attrs:{label:"Nome da categoria*",required:""},model:{value:e.itemEdicao.nome,callback:function(t){e.$set(e.itemEdicao,"nome",t)},expression:"itemEdicao.nome"}})],1),t(l["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(V["a"],{attrs:{label:"Valor de compra",hint:"custo de compra do item",type:"number"},model:{value:e.itemEdicao.valorCompra,callback:function(t){e.$set(e.itemEdicao,"valorCompra",t)},expression:"itemEdicao.valorCompra"}})],1),t(l["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(V["a"],{attrs:{label:"Valor de venda",hint:"pretenção de venda do item",type:"number"},model:{value:e.itemEdicao.valorVenda,callback:function(t){e.$set(e.itemEdicao,"valorVenda",t)},expression:"itemEdicao.valorVenda"}})],1)],1)],1),t("small",[e._v("*indica campo obrigatorio")])],1),t(O["a"],[t(j["a"]),t(o["a"],{staticClass:"mt-8",attrs:{dark:""},on:{click:function(t){return e.editarItem(e.itemEdicao)}}},[e._v(" Salvar Edição ")]),t(o["a"],{attrs:{color:"blue",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")])],1)],1)],1),t(o["a"],{attrs:{text:""},on:{click:function(t){e.dialog=!0}}},[t(m["a"],{attrs:{"x-large":""}},[e._v("mdi-circle-edit-outline")])],1)],1)},E=[];class R{}var k,S=a("fc60");const M=Object(A["c"])(x["a"].ITEM);let T=class extends r["c"]{constructor(){super(...arguments),this.dialog=!1}async editarItem(e){this.AtivarCarregamento(),await this.editaItem(e).then(()=>{this.DesativarCarregamento(),this.dialog=!1}).catch(()=>{this.DesativarCarregamento(),alert("Algo deu errado nesta operação")})}};Object(n["a"])([M.Action(f["a"].EDITAR_ITEM),Object(n["b"])("design:type",Function)],T.prototype,"editaItem",void 0),Object(n["a"])([Object(A["a"])(S["a"].ATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],T.prototype,"AtivarCarregamento",void 0),Object(n["a"])([Object(A["a"])(S["a"].DESATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],T.prototype,"DesativarCarregamento",void 0),Object(n["a"])([Object(r["b"])(),Object(n["b"])("design:type","function"===typeof(k="undefined"!==typeof R&&R)?k:Object)],T.prototype,"itemEdicao",void 0),T=Object(n["a"])([Object(r["a"])({})],T);var D=T,P=D,$=a("2877"),w=Object($["a"])(P,_,E,!1,null,null,null),B=w.exports;const L=Object(A["c"])(x["a"].ITEM);let F=class extends r["c"]{get obterItensUnitarios(){const e=this.itens;return e}async excluirItem(e){this.AtivarCarregamento();try{await this.removerItem(e)}finally{this.DesativarCarregamento()}}};Object(n["a"])([L.Action(f["a"].REMOVER_ITEM),Object(n["b"])("design:type",Function)],F.prototype,"removerItem",void 0),Object(n["a"])([Object(A["a"])(S["a"].ATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],F.prototype,"AtivarCarregamento",void 0),Object(n["a"])([Object(A["a"])(S["a"].DESATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],F.prototype,"DesativarCarregamento",void 0),Object(n["a"])([L.State,Object(n["b"])("design:type",Array)],F.prototype,"itens",void 0),F=Object(n["a"])([Object(r["a"])({components:{EdicaoItem:B}})],F);var N,G=F,H=G,U=Object($["a"])(H,b,g,!1,null,null,null),q=U.exports,z=a("0a4f"),J=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{justify:"center",id:"cadastroItem"}},[t(I["a"],{attrs:{persistent:"","max-width":"800px"},model:{value:e.dialogItem,callback:function(t){e.dialogItem=t},expression:"dialogItem"}},[t(y["a"],[t(O["c"],[t("span",{staticClass:"text-h5"},[e._v("Criar Item de Área")])]),t(O["b"],[t(C["a"],[t(v["a"],[t(l["a"],{attrs:{cols:"12",sm:"12",md:"4"}},[t(V["a"],{attrs:{label:"Nome do Item*",required:"",color:"teal",outlined:""},model:{value:e.item.nome,callback:function(t){e.$set(e.item,"nome",t)},expression:"item.nome"}})],1)],1),t(v["a"],[t(l["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(V["a"],{attrs:{variant:"outlined",label:"Valor de compra",hint:"custo de compra do item",rules:e.valorRules,color:"teal",type:"number",prefix:"R$",outlined:""},model:{value:e.valorCompraStr,callback:function(t){e.valorCompraStr=t},expression:"valorCompraStr"}})],1),t(l["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(V["a"],{attrs:{label:"Valor de venda",hint:"pretenção de venda do item",color:"teal",prefix:"R$",type:"number",rules:e.valorRules,outlined:""},model:{value:e.valorVendaStr,callback:function(t){e.valorVendaStr=t},expression:"valorVendaStr"}})],1)],1)],1),t("small",[e._v("*indica campo obrigatorio")])],1),t(O["a"],[t(j["a"]),t(o["a"],{attrs:{dark:""},on:{click:function(t){e.selecuinaIdSelect(),e.salvarItem()}}},[e._v(" Salvar ")]),t(o["a"],{attrs:{color:"blue",text:""},on:{click:function(t){e.dialogItem=!1}}},[e._v(" Cancelar ")])],1)],1)],1),t(o["a"],{attrs:{color:"primary",rounded:!0},on:{click:function(t){e.dialogItem=!0}}},[t(m["a"],[e._v("mdi-shape-square-plus")]),e._v(" Criar Item de perímetro ok ")],1)],1)},K=[];(function(e){e[e["Unidade"]=1]="Unidade",e[e["LnearLargura"]=2]="LnearLargura",e[e["LinearAltura"]=3]="LinearAltura",e[e["LinearComprimento"]=4]="LinearComprimento",e[e["PerimetroLarguraAltura"]=5]="PerimetroLarguraAltura",e[e["PerimetroLarguraComprimento"]=7]="PerimetroLarguraComprimento",e[e["PerimetroComprimentoAltura"]=6]="PerimetroComprimentoAltura",e[e["AreaLarguraAltura"]=8]="AreaLarguraAltura",e[e["AreaLarguraComprimento"]=10]="AreaLarguraComprimento",e[e["AreaAlturaComprimento"]=9]="AreaAlturaComprimento",e[e["Volume"]=11]="Volume"})(N||(N={}));const Q=Object(A["c"])(x["a"].ITEM);let W=class extends r["c"]{constructor(){super(...arguments),this.cauculoPerimetro=Object.values(N),this.item=new R,this.comprimentoBarraStr="1",this.valorVendaStr="",this.valorCompraStr="",this.select="",this.dialogItem=!1}selecuinaIdSelect(){var e;this.idSelect=null===(e=this.tipos.find(e=>e.descricao==this.select))||void 0===e?void 0:e.id}async salvarItem(){parseFloat(this.comprimentoBarraStr);this.item.valorCompra=parseFloat(this.valorCompraStr),this.item.valorVenda=parseFloat(this.valorVendaStr),this.AtivarCarregamento(),await this.salvaItem(this.item).then(()=>{this.DesativarCarregamento(),this.dialogItem=!1}).catch(()=>{this.DesativarCarregamento(),alert("Algo deu errado nesta operação")})}get descricaoTipos(){return this.tipos.map(e=>e.descricao)}get valorRules(){return[e=>!!e||"Valor é obrigatório",e=>/^\d+(\.\d{1,2})?$/.test(e)||"Valor inválido"]}};Object(n["a"])([Q.Action(f["a"].SALVAR_ITEM),Object(n["b"])("design:type",Function)],W.prototype,"salvaItem",void 0),Object(n["a"])([Q.State,Object(n["b"])("design:type",Array)],W.prototype,"tipos",void 0),Object(n["a"])([Object(A["a"])(S["a"].ATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],W.prototype,"AtivarCarregamento",void 0),Object(n["a"])([Object(A["a"])(S["a"].DESATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],W.prototype,"DesativarCarregamento",void 0),W=Object(n["a"])([Object(r["a"])({})],W);var X=W,Y=X,Z=(a("1471"),Object($["a"])(Y,J,K,!1,null,"4fb0517b",null)),ee=Z.exports;const te=Object(A["c"])(z["a"].ITEM);let ae=class extends r["c"]{constructor(){super(...arguments),this.tab=null}async mounted(){this.AtivarCarregamento(),this.obterTodosItens().then(()=>{this.DesativarCarregamento()}).catch(()=>this.DesativarCarregamento())}};Object(n["a"])([te.Action(f["a"].OBTER_ITENS),Object(n["b"])("design:type",Function)],ae.prototype,"obterTodosItens",void 0),Object(n["a"])([Object(A["a"])(S["a"].ATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],ae.prototype,"AtivarCarregamento",void 0),Object(n["a"])([Object(A["a"])(S["a"].DESATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],ae.prototype,"DesativarCarregamento",void 0),ae=Object(n["a"])([Object(r["a"])({components:{ListagemItem:q,CadastroItem:ee}})],ae);var ie=ae,se=ie,ne=(a("39d2"),Object($["a"])(se,i,s,!1,null,"19cd5452",null));t["default"]=ne.exports},8547:function(e,t,a){"use strict";var i=a("2b0e"),s=a("80d2");t["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["i"]}}})},"8ce9":function(e,t,a){},c865:function(e,t,a){"use strict";var i=a("0789"),s=a("9d26"),n=a("a9ad"),r=a("3206"),o=a("5607"),l=a("80d2"),c=a("58df");const d=Object(c["a"])(n["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:o["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(l["n"])(this,"actions",{open:this.isActive})||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(i["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l["n"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,a){"use strict";var i=a("4e82"),s=a("3206"),n=a("80d2"),r=a("58df");t["a"]=Object(r["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(n["n"])(this))}})},ce7e:function(e,t,a){"use strict";a("8ce9");var i=a("7560");t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-1167db2e.d2e6f7b8.js.map