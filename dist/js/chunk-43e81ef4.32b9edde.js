(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43e81ef4"],{"0393":function(e,t,a){"use strict";a("210b");var i=a("604c"),o=a("d9bd");t["a"]=i["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(o["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(o["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const a=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(a),e.nextIsActive=this.toggleMethod(i)}}})},"166a":function(e,t,a){},"210b":function(e,t,a){},"2fa4":function(e,t,a){"use strict";a("20f6");var i=a("80d2");t["a"]=Object(i["h"])("spacer","div","v-spacer")},"49e2":function(e,t,a){"use strict";var i=a("0789"),o=a("9d65"),s=a("a9ad"),n=a("3206"),r=a("80d2"),l=a("58df");const d=Object(l["a"])(o["a"],s["a"],Object(n["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=d.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(i["a"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(r["n"])(this,"default",{open:this.isActive}))])]))}})},"604c":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("14d9"),a("166a");var i=a("8547"),o=a("a452"),s=a("7560"),n=a("58df"),r=a("d9bd");const l=Object(n["a"])(i["a"],o["a"],s["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((e,t)=>this.toggleMethod(this.getValue(e,t)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some(e=>this.valueComparator(e,t)):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(r["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",()=>this.onClick(e)),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),a=this.getValue(e,t);this.items.splice(t,1);const i=this.selectedValues.indexOf(a);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(a);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(e=>e!==a):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const a=this.getValue(e,t);e.isActive=this.toggleMethod(a)},updateItemsState(){this.$nextTick(()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)})},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const a=t.find(e=>!e.disabled);if(!a)return;const i=this.items.indexOf(a);this.updateInternalValue(this.getValue(a,i))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],a=t.slice(),i=a.findIndex(t=>this.valueComparator(t,e));this.mandatory&&i>-1&&a.length-1<1||null!=this.max&&i<0&&a.length+1>this.max||(i>-1?a.splice(i,1):a.push(e),this.internalValue=a)},updateSingle(e){const t=this.valueComparator(this.internalValue,e);this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},6969:function(e,t,a){"use strict";a.r(t);var i=a("8336"),o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"Pedidos"}},[0===e.etapa?t("ListagemPedido",{on:{"pedido-selecionado":function(t){e.etapa=1}}}):e._e(),0===e.etapa?t(i["a"],{attrs:{color:"primary",rounded:""},on:{click:function(t){e.etapa=1}}},[t("h6",[e._v("Cadastrar pedido")])]):e._e(),1===e.etapa?t("EtapasCadastroPedido",{on:{"etapa-selecao-pedido":function(t){e.etapa=0}}}):e._e()],1)},s=[],n=a("9ab4"),r=a("1b40"),l=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"etapasCadastroPedido"}},[e.etapasPedido===e.enumEtapas.DescricaoPedido?t("InserirPedido",{on:{"inserindo-pedido":function(t){return e.preencheDescricaoPedido(t)}}}):e._e(),e.etapasPedido===e.enumEtapas.SelecaoOuCriacaoCliente?t("ListagemCliente",{on:{"selecionou-cliente":function(t){return e.clienteSelecionado(t)}}}):e._e(),e.etapasPedido===e.enumEtapas.InsercaoProdutoAoPedido?t("InserirProdutoPedido",{attrs:{pedido:e.pedido},on:{"solicitar-finaliacao-pedido":function(t){return e.finalizacaoPedido()}}}):e._e()],1)},d=[],c=a("62ad"),u=a("0fd9"),p=a("8654"),h=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"InserirPedido"}},[t(i["a"],{attrs:{color:"primary",rounded:"",disabled:e.btnFalse},on:{click:function(t){return e.acionarInsercao()}}},[t("h6",[e._v("Inserir pedido")])]),t(u["a"],[t(c["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(p["a"],{attrs:{label:"Nome da categoria*",required:""},model:{value:e.descricao,callback:function(t){e.descricao=t},expression:"descricao"}})],1)],1)],1)},m=[];let b=class extends r["c"]{constructor(){super(...arguments),this.tab=null,this.descricao=""}get btnFalse(){return this.descricao.length<4}acionarInsercao(){this.$emit("inserindo-pedido",this.descricao)}};b=Object(n["a"])([Object(r["a"])({components:{}})],b);var v=b,f=v,P=a("2877"),O=Object(P["a"])(f,h,m,!1,null,null,null),x=O.exports,y=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"InserirProdutoPedido"}},[t(i["a"],{staticClass:"my-6",attrs:{color:"primary",rounded:"",disabled:!e.pedidoProdutos.length},on:{click:function(t){return e.finalizarPedido()}}},[t("h6",[e._v("Finalizar o pedido")])]),t("PedidoProdutosSelecionados"),t(i["a"],{on:{click:function(t){e.tab=1}}},[e._v("selecionar outro cliente")]),t("ListagemSelecaoPedidoProduto"),t("div")],1)},g=[],C=a("ce7e"),_=a("cd55"),j=a("49e2"),A=a("c865"),I=a("0393"),k=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.dialog?t(I["a"],{attrs:{focusable:""}},e._l(e.produtosComItensCadastrados,(function(a,o){return t(_["a"],{key:a.id,staticClass:"mb-2"},[t(A["a"],[t("h3",[e._v(" "+e._s(a.nome))]),t(C["a"],{staticClass:"mx-2",attrs:{vertical:""}}),t("h4",[e._v("Categoria Produto: "),t("h5",[e._v(e._s(a.categoriaProduto.descricao))])])],1),t(j["a"],{staticClass:"mt-10"},[t(u["a"],{attrs:{justify:"center"}},[a.possuiLargura?t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Largura"},model:{value:e.pedidoProduto.largura,callback:function(t){e.$set(e.pedidoProduto,"largura",t)},expression:"pedidoProduto.largura"}})],1):e._e(),a.possuiAltura?t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Altura"},model:{value:e.pedidoProduto.altura,callback:function(t){e.$set(e.pedidoProduto,"altura",t)},expression:"pedidoProduto.altura"}})],1):e._e(),a.possuiComprimento?t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Comprimento"},model:{value:e.pedidoProduto.comprimento,callback:function(t){e.$set(e.pedidoProduto,"comprimento",t)},expression:"pedidoProduto.comprimento"}})],1):e._e(),t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Quantidade"},model:{value:e.pedidoProduto.quantidade,callback:function(t){e.$set(e.pedidoProduto,"quantidade",t)},expression:"pedidoProduto.quantidade"}})],1),t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Valor Adicional"},model:{value:e.pedidoProduto.valorAdicional,callback:function(t){e.$set(e.pedidoProduto,"valorAdicional",t)},expression:"pedidoProduto.valorAdicional"}})],1),t(i["a"],{staticClass:"mt-9 mx-auto d-block text-none blue--text text--darken-3",attrs:{depressed:"",color:"amber","min-width":"300"},on:{click:function(t){return e.selecionarProduto(a)}}},[t("h2",[e._v("Inserir produto")])])],1)],1)],1)})),1):e._e()},D=[],E=a("0613"),S=a("4bb5"),V=a("cce0");class ${constructor(){this.valorAdicional=0,this.quantidade=1,this.possuiLargura=!1,this.possuiComprimento=!1,this.possuiAltura=!1}}var R,w=a("f0fa");class T{}const F=Object(S["c"])(E["a"].PRODUTO),B=Object(S["c"])(E["a"].PEDIDO);let M=class extends r["c"]{constructor(){super(...arguments),this.dialog=!0,this.pedidoProduto=new $}async mounted(){await this.obterProdutosComItensCadastrados()}async selecionarProduto(e){this.pedidoProduto.pedidoId=this.pedidoSolicitacao.id,this.pedidoProduto.produtoId=e.id,this.adicionarPedidoProduto(this.pedidoProduto)}};Object(n["a"])([F.Action(V["a"].OBTER_PRODUTOS_COM_ITENS_CADASTRADOS),Object(n["b"])("design:type",Function)],M.prototype,"obterProdutosComItensCadastrados",void 0),Object(n["a"])([B.State,Object(n["b"])("design:type","function"===typeof(R="undefined"!==typeof T&&T)?R:Object)],M.prototype,"pedidoSolicitacao",void 0),Object(n["a"])([F.State,Object(n["b"])("design:type",Array)],M.prototype,"produtosComItensCadastrados",void 0),Object(n["a"])([B.Action(w["a"].SALVAR_PEDIDO_PRODUTO),Object(n["b"])("design:type",Function)],M.prototype,"adicionarPedidoProduto",void 0),M=Object(n["a"])([Object(r["a"])({components:{}})],M);var L,q=M,z=q,N=Object(P["a"])(z,k,D,!1,null,null,null),U=N.exports,H=a("0a4f"),G=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.dialog?t(I["a"],{attrs:{focusable:""}},e._l(e.pedidoProdutos,(function(a,o){return t(_["a"],{key:o,staticClass:"mb-2"},[t(A["a"],[t("h3",[e._v(" "+e._s(a.nomeProduto))])]),t(j["a"],{staticClass:"mt-10"},[t(u["a"],{attrs:{justify:"center"}},[a.possuiLargura?t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Largura"},model:{value:a.largura,callback:function(t){e.$set(a,"largura",t)},expression:"produto.largura"}})],1):e._e(),a.possuiAltura?t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Altura"},model:{value:a.altura,callback:function(t){e.$set(a,"altura",t)},expression:"produto.altura"}})],1):e._e(),a.possuiComprimento?t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Comprimento"},model:{value:a.comprimento,callback:function(t){e.$set(a,"comprimento",t)},expression:"produto.comprimento"}})],1):e._e(),t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Quantidade"},model:{value:a.quantidade,callback:function(t){e.$set(a,"quantidade",t)},expression:"produto.quantidade"}})],1),t(c["a"],{attrs:{cols:"6",md:"4",sm:"2"}},[t(p["a"],{attrs:{type:"number",label:"Valor Adicional"},model:{value:a.valorAdicional,callback:function(t){e.$set(a,"valorAdicional",t)},expression:"produto.valorAdicional"}})],1),t(i["a"],{staticClass:"mt-9 mx-auto d-block text-none blue--text text--darken-3",attrs:{depressed:"",color:"amber","min-width":"300"},on:{click:function(t){return e.removerProdutoPedido(a)}}},[t("h2",[e._v("Excluir produto")])])],1)],1)],1)})),1):e._e()},J=[];const Q=Object(S["c"])(E["a"].PRODUTO),K=Object(S["c"])(E["a"].PEDIDO);let W=class extends r["c"]{constructor(){super(...arguments),this.dialog=!0}async mounted(){await this.obterProdutosDoPedido(this.pedidoSolicitacao.id)}async removerProdutoPedido(e){this.removePedidoProduto(e.id)}};Object(n["a"])([K.Action(w["a"].OBTER_PEDIDO_PRODUTOS),Object(n["b"])("design:type",Function)],W.prototype,"obterProdutosDoPedido",void 0),Object(n["a"])([K.State,Object(n["b"])("design:type",Array)],W.prototype,"pedidoProdutos",void 0),Object(n["a"])([Q.State,Object(n["b"])("design:type",Array)],W.prototype,"produtos",void 0),Object(n["a"])([K.Action(w["a"].REMOVER_PEDIDO_PRODUTO),Object(n["b"])("design:type",Function)],W.prototype,"removePedidoProduto",void 0),Object(n["a"])([K.State,Object(n["b"])("design:type","function"===typeof(L="undefined"!==typeof T&&T)?L:Object)],W.prototype,"pedidoSolicitacao",void 0),W=Object(n["a"])([Object(r["a"])({components:{}})],W);var X=W,Y=X,Z=Object(P["a"])(Y,G,J,!1,null,null,null),ee=Z.exports;const te=Object(S["c"])(H["a"].PEDIDO);let ae=class extends r["c"]{constructor(){super(...arguments),this.tab=1}finalizarPedido(){this.$emit("solicitar-finaliacao-pedido")}};Object(n["a"])([te.State,Object(n["b"])("design:type",Array)],ae.prototype,"pedidoProdutos",void 0),ae=Object(n["a"])([Object(r["a"])({components:{ListagemSelecaoPedidoProduto:U,PedidoProdutosSelecionados:ee}})],ae);var ie,oe=ae,se=oe,ne=Object(P["a"])(se,y,g,!1,null,null,null),re=ne.exports,le=a("132d"),de=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[e.selecao?t("div",[t(I["a"],{attrs:{focusable:""}},e._l(e.selecaoClientes,(function(a){return t(_["a"],{key:a.id,staticClass:"mb-2"},[t(A["a"],[t("h1",[e._v(e._s(a.nome))])]),t(j["a"],[t(u["a"],[t(c["a"],{attrs:{cols:"5"}},[t("edicao-cliente",{attrs:{cliente:a}}),t("h3",{staticClass:"text-center"},[e._v("Editar")])],1),e.eRotaSelecao?t(c["a"],{attrs:{cols:"2"}},[t(i["a"],{on:{click:function(t){return e.selecionarCliente(a)}}},[t(le["a"],{attrs:{large:""}},[e._v("mdi-account-plus")])],1)],1):e._e(),t(c["a"],{attrs:{cols:"5"}},[t(i["a"],{attrs:{text:""},on:{click:function(t){return e.excluirCategoriaProduto(a.id)}}},[t(le["a"],[e._v("mdi-trash-can-outline")])],1),t("h3",{staticClass:"text-center"},[e._v("Escluir")])],1)],1)],1)],1)})),1)],1):e._e(),e.selecao?e._e():t("div",[t(i["a"],{attrs:{color:"primary",rounded:""},on:{click:function(t){e.selecao=!0}}},[e._v(" selecionar cliente")])],1),t("CadastroCliente")],1)},ce=[],ue=a("b0af"),pe=a("99d9"),he=a("a523"),me=a("169a"),be=a("2fa4"),ve=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{justify:"center"}},[t(me["a"],{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(ue["a"],[t(pe["c"],[t("span",{staticClass:"text-h5"},[e._v("Criar Categoria")])]),t(pe["b"],[t(he["a"],[t(u["a"],[t(c["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(p["a"],{attrs:{label:"Nome*",required:""},model:{value:e.Cliente.nome,callback:function(t){e.$set(e.Cliente,"nome",t)},expression:"Cliente.nome"}})],1),t(c["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(p["a"],{attrs:{label:"CPF*",required:""},model:{value:e.Cliente.cpf,callback:function(t){e.$set(e.Cliente,"cpf",t)},expression:"Cliente.cpf"}})],1),t(c["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(p["a"],{attrs:{label:"telefone*",required:""},model:{value:e.Cliente.telefone,callback:function(t){e.$set(e.Cliente,"telefone",t)},expression:"Cliente.telefone"}})],1)],1)],1),t("small",[e._v("*indica campo obrigatorio")])],1),t(pe["a"],[t(be["a"]),t(i["a"],{attrs:{dark:""},on:{click:function(t){return e.processarEdicao(e.exibeCliente)}}},[e._v(" Salvar ")]),t(i["a"],{attrs:{color:"blue",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")])],1)],1)],1),t(i["a"],{attrs:{text:""},on:{click:function(t){e.dialog=!0}}},[t(le["a"],[e._v("mdi-circle-edit-outline")])],1)],1)},fe=[],Pe=a("fc60");class Oe{}const xe=Object(S["c"])(E["a"].PEDIDO);let ye=class extends r["c"]{constructor(){super(...arguments),this.dialog=!1}get exibeCliente(){return this.Cliente}processarEdicao(e){this.AtivarCarregamento(),this.editarCliente(e).then(()=>{this.DesativarCarregamento(),this.dialog=!1,this.$emit("categoriaAlterada",this.Cliente)}).catch(()=>{this.DesativarCarregamento(),alert("Algo deu errado nesta operação")})}};Object(n["a"])([xe.Action(w["a"].EDITAR_CLIENTE),Object(n["b"])("design:type",Function)],ye.prototype,"editarCliente",void 0),Object(n["a"])([Object(S["a"])(Pe["a"].ATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],ye.prototype,"AtivarCarregamento",void 0),Object(n["a"])([Object(S["a"])(Pe["a"].DESATIVAR_CARREGAMENTO),Object(n["b"])("design:type",Function)],ye.prototype,"DesativarCarregamento",void 0),Object(n["a"])([Object(r["b"])(),Object(n["b"])("design:type","function"===typeof(ie="undefined"!==typeof Oe&&Oe)?ie:Object)],ye.prototype,"Cliente",void 0),ye=Object(n["a"])([Object(r["a"])({})],ye);var ge=ye,Ce=ge,_e=Object(P["a"])(Ce,ve,fe,!1,null,null,null),je=_e.exports,Ae=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{justify:"center"}},[t(me["a"],{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(ue["a"],[t(pe["c"],[t("span",{staticClass:"text-h5"},[e._v("Criar Cliente")])]),t(pe["b"],[t(he["a"],[t(u["a"],[t(c["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(p["a"],{attrs:{label:"Nome*",required:""},model:{value:e.Cliente.nome,callback:function(t){e.$set(e.Cliente,"nome",t)},expression:"Cliente.nome"}})],1),t(c["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(p["a"],{attrs:{label:"CPF*",required:""},model:{value:e.Cliente.cpf,callback:function(t){e.$set(e.Cliente,"cpf",t)},expression:"Cliente.cpf"}})],1),t(c["a"],{attrs:{cols:"12",sm:"6",md:"4"}},[t(p["a"],{attrs:{label:"telefone*",required:""},model:{value:e.Cliente.telefone,callback:function(t){e.$set(e.Cliente,"telefone",t)},expression:"Cliente.telefone"}})],1)],1)],1),t("small",[e._v("*indica campo obrigatorio")])],1),t(pe["a"],[t(be["a"]),t(i["a"],{attrs:{dark:""},on:{click:function(t){return e.adicionarCliente()}}},[e._v(" Salvar ")]),t(i["a"],{attrs:{color:"blue",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")])],1)],1)],1),t(i["a"],{attrs:{color:"primary",rounded:!0},on:{click:function(t){e.dialog=!0}}},[t(le["a"],[e._v("mdi-format-list-group-plus")]),e._v(" Cadastrar Cliente ")],1)],1)},Ie=[];const ke=Object(S["c"])(E["a"].PEDIDO);let De=class extends r["c"]{constructor(){super(...arguments),this.dialog=!1,this.Cliente=new Oe}async adicionarCliente(){this.salvarCliente(this.Cliente),this.dialog=!1}};Object(n["a"])([ke.Action(w["a"].SALVAR_CLIENTE),Object(n["b"])("design:type",Function)],De.prototype,"salvarCliente",void 0),De=Object(n["a"])([Object(r["a"])({})],De);var Ee=De,Se=Ee,Ve=Object(P["a"])(Se,Ae,Ie,!1,null,null,null),$e=Ve.exports;const Re=Object(S["c"])(E["a"].PEDIDO);let we=class extends r["c"]{constructor(){super(...arguments),this.selecao=!1}get selecaoClientes(){return this.clientes}async created(){await this.obterTodosClientes()}async excluirCategoriaProduto(e){await this.removerCategoriaProduto(e).then(()=>{})}get eRotaSelecao(){return"Pedidos"===this.$route.name}selecionarCliente(e){this.selecao=!this.selecao,this.$emit("selecionou-cliente",e)}};Object(n["a"])([Re.State,Object(n["b"])("design:type",Array)],we.prototype,"clientes",void 0),Object(n["a"])([Re.Action(w["a"].OBTER_CLIENTES),Object(n["b"])("design:type",Function)],we.prototype,"obterTodosClientes",void 0),Object(n["a"])([Re.Action(w["a"].REMOVER_CLIENTE),Object(n["b"])("design:type",Function)],we.prototype,"removerCategoriaProduto",void 0),we=Object(n["a"])([Object(r["a"])({components:{EdicaoCliente:je,CadastroCliente:$e}})],we);var Te,Fe,Be=we,Me=Be,Le=Object(P["a"])(Me,de,ce,!1,null,null,null),qe=Le.exports;(function(e){e[e["DescricaoPedido"]=1]="DescricaoPedido",e[e["SelecaoOuCriacaoCliente"]=2]="SelecaoOuCriacaoCliente",e[e["InsercaoProdutoAoPedido"]=3]="InsercaoProdutoAoPedido"})(Te||(Te={}));const ze=Object(S["c"])(H["a"].PEDIDO);let Ne=class extends r["c"]{constructor(){super(...arguments),this.etapasPedido=1,this.pedido=new T,this.enumEtapas=Te}preencheDescricaoPedido(e){this.pedido.descricao=e,this.etapasPedido=2}selecinouPedido(e){this.pedido.pedidoProdutos=e}mounted(){this.pedidoSolicitacao&&(this.etapasPedido=this.enumEtapas.InsercaoProdutoAoPedido)}finalizacaoPedido(){this.finalizaPedido(this.pedidoSolicitacao.id).then(()=>{this.$emit("etapa-selecao-pedido")})}clienteSelecionado(e){console.log(this.etapasPedido),this.pedido.clienteId=e.id,this.salvarPedido(this.pedido).then(()=>{this.etapasPedido=this.enumEtapas.InsercaoProdutoAoPedido}).catch(()=>{alert("Não é possivel adicionar o pedido"+this.pedido.descricao)})}};Object(n["a"])([ze.State,Object(n["b"])("design:type","function"===typeof(Fe="undefined"!==typeof T&&T)?Fe:Object)],Ne.prototype,"pedidoSolicitacao",void 0),Object(n["a"])([ze.Action(w["a"].SALVAR_PEDIDO),Object(n["b"])("design:type",Function)],Ne.prototype,"salvarPedido",void 0),Object(n["a"])([ze.Action(w["a"].PEDIDO_FINALIACAO),Object(n["b"])("design:type",Function)],Ne.prototype,"finalizaPedido",void 0),Ne=Object(n["a"])([Object(r["a"])({components:{ListagemCliente:qe,InserirPedido:x,InserirProdutoPedido:re}})],Ne);var Ue=Ne,He=Ue,Ge=Object(P["a"])(He,l,d,!1,null,null,null),Je=Ge.exports,Qe=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.dialog?t(I["a"],{attrs:{focusable:""}},e._l(e.pedidos,(function(a,o){var s;return t(_["a"],{key:a.id,staticClass:"mb-2"},[t(A["a"],[t("h3",[e._v(" "+e._s(a.descricao))]),t(C["a"],{staticClass:"mx-2",attrs:{vertical:""}}),t("h4",[e._v("Cliente: "),t("h5",[e._v(e._s(null===(s=a.cliente)||void 0===s?void 0:s.nome))])])],1),t(j["a"],{staticClass:"mt-10"},[a.indicaFinaliado&&!a.indicaVenda?t(i["a"],{attrs:{color:"orange"}},[t(le["a"],{attrs:{color:"success",size:"x-large"}},[e._v("mdi-cash-sync")]),e._v(" Realizar venda ")],1):e._e(),a.indicaVenda?e._e():t(c["a"],{attrs:{cols:"5"}},[t(i["a"],{attrs:{text:""},on:{click:function(t){return e.excluirPedido(a.id)}}},[t(le["a"],[e._v("mdi-trash-can-outline")])],1),t("h3",{staticClass:"text-center"},[e._v("Escluir")])],1),t(i["a"],{staticClass:"mt-9 mx-auto d-block text-none blue--text text--darken-3",attrs:{depressed:"",color:"amber","min-width":"300"},on:{click:function(t){return e.editarPedido(a)}}},[t("h2",[e._v(e._s(a.indicaFinaliado?"Editar pedido":"Finalize o pedido"))])]),a.indicaFinaliado?t("div",[t("h3",[e._v("R$ "+e._s(a.valorTotal))])]):e._e()],1)],1)})),1):e._e()},Ke=[];Object(S["c"])(E["a"].PRODUTO);const We=Object(S["c"])(E["a"].PEDIDO);let Xe=class extends r["c"]{constructor(){super(...arguments),this.dialog=!0,this.pedidoProduto=new $}async mounted(){await this.obterPedidos()}excluirPedido(e){this.excluiPedido(e)}async editarPedido(e){this.selecionaPedido(e),this.$emit("pedido-selecionado")}};Object(n["a"])([We.Action(w["a"].OBTER_PEDIDOS),Object(n["b"])("design:type",Function)],Xe.prototype,"obterPedidos",void 0),Object(n["a"])([We.Action(w["a"].REMOVER_PEDIDO),Object(n["b"])("design:type",Function)],Xe.prototype,"excluiPedido",void 0),Object(n["a"])([We.State,Object(n["b"])("design:type",Array)],Xe.prototype,"pedidos",void 0),Object(n["a"])([We.Action(w["a"].SET_PEDIDO_STORE),Object(n["b"])("design:type",Function)],Xe.prototype,"selecionaPedido",void 0),Xe=Object(n["a"])([Object(r["a"])({components:{}})],Xe);var Ye=Xe,Ze=Ye,et=Object(P["a"])(Ze,Qe,Ke,!1,null,null,null),tt=et.exports;let at=class extends r["c"]{constructor(){super(...arguments),this.etapa=0}};at=Object(n["a"])([Object(r["a"])({components:{EtapasCadastroPedido:Je,ListagemPedido:tt}})],at);var it=at,ot=it,st=Object(P["a"])(ot,o,s,!1,null,null,null);t["default"]=st.exports},8547:function(e,t,a){"use strict";var i=a("2b0e"),o=a("80d2");t["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:o["i"]}}})},"8ce9":function(e,t,a){},c865:function(e,t,a){"use strict";var i=a("0789"),o=a("9d26"),s=a("a9ad"),n=a("3206"),r=a("5607"),l=a("80d2"),d=a("58df");const c=Object(d["a"])(s["a"],Object(n["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=c.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(l["n"])(this,"actions",{open:this.isActive})||[this.$createElement(o["a"],this.expandIcon)];return this.$createElement(i["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l["n"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,a){"use strict";var i=a("4e82"),o=a("3206"),s=a("80d2"),n=a("58df");t["a"]=Object(n["a"])(Object(i["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(o["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(s["n"])(this))}})},ce7e:function(e,t,a){"use strict";a("8ce9");var i=a("7560");t["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})}}]);