(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e862f38"],{"36a7":function(t,e,i){},"5e23":function(t,e,i){},"611c":function(t,e,i){"use strict";i.r(e);var s=i("b0af"),r=i("99d9"),a=i("169a"),o=i("490a"),n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(a["a"],{attrs:{persistent:"","max-width":"290"},model:{value:t.carregamento,callback:function(e){t.carregamento=e},expression:"carregamento"}},[e(s["a"],{attrs:{loading:"","min-height":"198"}},[e(r["b"],{staticClass:"mt-16"},[e(o["a"],{attrs:{size:70,width:7,color:"purple",indeterminate:""}})],1)],1)],1),e("cabecalho"),e("router-view")],1)},c=[],l=i("9ab4"),h=(i("14d9"),i("8b0d"),i("3c65"),i("5e23"),i("8dd9")),d=(i("8efc"),i("90a2")),p=(i("36a7"),i("24b2")),u=i("58df"),m=i("80d2"),v=Object(u["a"])(p["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(m["n"])(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),g=v,b=i("7560"),f=i("d9f7"),S=i("d9bd");const y="undefined"!==typeof window&&"IntersectionObserver"in window;var O=Object(u["a"])(g,b["a"]).extend({name:"v-img",directives:{intersect:d["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!y||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(S["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=g.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){const t=Object(m["n"])(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=g.options.render.call(this,t),i=Object(f["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:y?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}}),_=h["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...h["a"].options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:Object(m["g"])(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(S["a"])(t,e,this)})},methods:{genBackground(){const t={height:Object(m["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(O,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(m["g"])(this.computedContentHeight)}},Object(m["n"])(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(m["g"])(this.extensionHeight)}},Object(m["n"])(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}});function w(t,e,i){const{self:s=!1}=e.modifiers||{},r=e.value,a="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,n=s?t:e.arg?document.querySelector(e.arg):window;n&&(n.addEventListener("scroll",o,a),t._onScroll=Object(t._onScroll),t._onScroll[i.context._uid]={handler:o,options:a,target:s?void 0:n})}function x(t,e,i){var s;if(!(null===(s=t._onScroll)||void 0===s?void 0:s[i.context._uid]))return;const{handler:r,options:a,target:o=t}=t._onScroll[i.context._uid];o.removeEventListener("scroll",r,a),delete t._onScroll[i.context._uid]}const C={inserted:w,unbind:x};var A=C,$=i("fe6c");function j(t,e=[]){return Object(u["a"])(Object($["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}var B=i("2b0e"),T=B["a"].extend({name:"scrollable",directives:{Scroll:C},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(S["c"])("Unable to locate element with identifier "+this.scrollTarget,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),E=i("d10f"),M=i("f2e7");const k=Object(u["a"])(_,T,E["a"],M["a"],j("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var R=k.extend({name:"v-app-bar",directives:{Scroll:A},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return T.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{..._.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return _.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=_.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:_.options.computed.isCollapsed.call(this)},isProminent(){return _.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{..._.options.computed.styles.call(this),fontSize:Object(m["g"])(this.computedFontSize,"rem"),marginTop:Object(m["g"])(this.computedMarginTop),transform:`translateY(${Object(m["g"])(this.computedTransform)})`,left:Object(m["g"])(this.computedLeft),right:Object(m["g"])(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=_.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=_.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),H=i("9d26"),P=i("8336"),z=B["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:r}){const a=Object.assign(r,{staticClass:("v-app-bar__nav-icon "+(r.staticClass||"")).trim(),props:{...s,icon:!0},on:i}),o=e().default;return t(P["a"],a,o||[t(H["a"],"$menu")])}}),I=i("62ad"),L=i("132d"),N=i("8860"),W=i("da13"),X=i("5d23"),V=i("1baa"),Y=i("34c3"),U=(i("7958"),i("a9ad")),F=i("b848"),D=i("e4cd"),q=i("e707"),J=i("a293"),Z=i("dc22"),G=i("c3f0");const K=Object(u["a"])(j("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),U["a"],F["a"],D["a"],q["a"],E["a"],b["a"]);var Q,tt=K.extend({name:"v-navigation-drawer",directives:{ClickOutside:J["a"],Resize:Z["a"],Touch:G["a"]},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&D["a"].options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:Object(m["g"])(this.height),top:this.isBottom?"auto":Object(m["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${Object(m["g"])(this.computedMaxHeight)})`:void 0,transform:`${t}(${Object(m["g"])(this.computedTransform,"%")})`,width:Object(m["g"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(O,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=Object(m["n"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__"+t},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(m["n"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),et=i("0fd9"),it=i("2fa4"),st=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(R,{attrs:{color:"primary",dark:"",width:"100%"}},[e(z,{attrs:{"x-large":""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e("div",{staticClass:"d-flex align-center"},[e(et["a"],{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e(P["a"],{staticClass:"ml-8",attrs:{text:""},on:{click:function(e){return t.recaregar()}}},[e(I["a"],[t._v(" "+t._s(t.nomePagina)+" ")])],1)],1)],1),e(it["a"]),e(P["a"],{attrs:{color:"#B71C1C"},on:{click:function(e){return t.sair()}}},[t._v("Sair")])],1),e(tt,{staticClass:"navigation",staticStyle:{"padding-top":"60px"},attrs:{absolute:"",left:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(N["a"],[e(V["a"],{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[e(W["a"],{attrs:{to:t.Inicio}},[e(Y["a"],[e(L["a"],{attrs:{color:"primary"}},[t._v("mdi-home")])],1),e(X["a"],[e(X["b"],{staticClass:"text-primary"},[t._v("Inicio")])],1)],1),e(W["a"],{attrs:{to:t.RealizaOrcamento}},[e(Y["a"],[e(L["a"],{attrs:{color:"primary"}},[t._v("mdi-calculator")])],1),e(X["a"],[e(X["b"],{staticClass:"text-primary"},[t._v("Orçamento")])],1)],1),e(W["a"],{attrs:{to:t.Pedidos}},[e(Y["a"],[e(L["a"],{attrs:{color:"primary"}},[t._v("mdi-shape-plus")])],1),e(X["a"],[e(X["b"],{staticClass:"text-primary"},[t._v("Pedidos")])],1)],1),e(W["a"],{attrs:{to:t.cadastroProdutos}},[e(Y["a"],[e(L["a"],{attrs:{color:"primary"}},[t._v("mdi-shape-plus")])],1),e(X["a"],[e(X["b"],{staticClass:"text-primary"},[t._v("Cadastro Produtos")])],1)],1),e(W["a"],{attrs:{to:t.cadastroItens}},[e(Y["a"],[e(L["a"],{attrs:{color:"primary"}},[t._v("mdi-shape-plus")])],1),e(X["a"],[e(X["b"],{staticClass:"text-primary"},[t._v("Cadastro Itens")])],1)],1),e(W["a"],{attrs:{to:t.Ajuda}},[e(Y["a"],[e(L["a"],{attrs:{color:"primary"}},[t._v("mdi-help")])],1),e(X["a"],[e(X["b"],{staticClass:"text-primary"},[t._v("Ajuda")])],1)],1)],1)],1)],1)],1)},rt=[],at=i("da4c"),ot=i("1b40"),nt=i("0805"),ct=i("8640");let lt=class extends ot["c"]{constructor(){super(...arguments),this.drawer=!1,this.group=null,this.cadastroItens=at["a"].Cadastros.CadastroItens,this.cadastroProdutos=at["a"].Cadastros.CadastroProdutos,this.Empresas=[],this.Inicio=at["a"].Inicio,this.CadastroItens=at["a"].Cadastros.CadastroItens,this.Ajuda=at["a"].Ajuda,this.RealizaOrcamento=at["a"].Cadastros.RealizaOrcamento,this.Pedidos=at["a"].Cadastros.Pedidos}sair(){localStorage.removeItem("ocirenegotnemacro"),this.$router.push(at["a"].Visitante.Login)}recaregar(){location.reload()}get nomePagina(){return this.$route.name}};Object(l["a"])([ct["Inject"],Object(l["b"])("design:type","function"===typeof(Q="undefined"!==typeof nt["a"]&&nt["a"])?Q:Object)],lt.prototype,"empresaService",void 0),lt=Object(l["a"])([Object(ot["a"])({components:{}})],lt);var ht=lt,dt=ht,pt=i("2877"),ut=Object(pt["a"])(dt,st,rt,!1,null,null,null),mt=ut.exports,vt=i("4bb5");let gt=class extends ot["c"]{};Object(l["a"])([vt["b"],Object(l["b"])("design:type",Boolean)],gt.prototype,"carregamento",void 0),gt=Object(l["a"])([Object(ot["a"])({components:{Cabecalho:mt}})],gt);var bt=gt,ft=bt,St=Object(pt["a"])(ft,n,c,!1,null,null,null);e["default"]=St.exports},7958:function(t,e,i){},"8b0d":function(t,e,i){},"8efc":function(t,e,i){},c3f0:function(t,e,i){"use strict";var s=i("80d2");const r=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:r}=t,a=.5,o=16;t.offsetX=i-e,t.offsetY=r-s,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&i<e-o&&t.left(t),t.right&&i>e+o&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&r<s-o&&t.up(t),t.down&&r>s+o&&t.down(t))};function a(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),r(e)}function n(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>a(t,e),touchend:t=>o(t,e),touchmove:t=>n(t,e)}}function l(t,e,i){const r=e.value,a=r.parent?t.parentElement:t,o=r.options||{passive:!0};if(!a)return;const n=c(e.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[i.context._uid]=n,Object(s["s"])(n).forEach(t=>{a.addEventListener(t,n[t],o)})}function h(t,e,i){const r=e.value.parent?t.parentElement:t;if(!r||!r._touchHandlers)return;const a=r._touchHandlers[i.context._uid];Object(s["s"])(a).forEach(t=>{r.removeEventListener(t,a[t])}),delete r._touchHandlers[i.context._uid]}const d={inserted:l,unbind:h};e["a"]=d},d10f:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},e4cd:function(t,e,i){"use strict";var s=i("d9bd"),r=i("2b0e");e["a"]=r["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:i,mobileBreakpoint:s}=this.$vuetify.breakpoint;if(s===this.mobileBreakpoint)return t;const r=parseInt(this.mobileBreakpoint,10),a=!isNaN(r);return a?e<r:i===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(s["d"])("mobile-break-point","mobile-breakpoint",this)}})}}]);