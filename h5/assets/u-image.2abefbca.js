<<<<<<< HEAD:h5/assets/u-image.2abefbca.js
import{r as e,a as r,o as t,c as i,w as o,q as a,h as d,G as s,n as l,k as n}from"./index.24de5888.js";import{_ as u}from"./u-icon.b22654a8.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var c=h({name:"u-image",emits:["click","error","load"],props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler(e){e?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle(){let e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition=`opacity ${Number(this.durationTime)/1e3}s ease-in-out`),e}},methods:{onClick(){this.$emit("click")},onErrorHandler(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler(){if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((()=>{this.durationTime=this.duration,this.opacity=1,setTimeout((()=>{this.removeBgColor()}),this.durationTime)}),50)},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}},[["render",function(h,c,g,y,p,m){const f=l,b=e(r("u-icon"),u),w=n;return t(),i(w,{class:"u-image",onClick:m.onClick,style:a([m.wrapStyle,p.backgroundStyle])},{default:o((()=>[p.isError?d("v-if",!0):(t(),i(f,{key:0,src:g.src,mode:g.mode,onError:m.onErrorHandler,onLoad:m.onLoadHandler,"lazy-load":g.lazyLoad,class:"u-image__image",style:a({borderRadius:"circle"==g.shape?"50%":h.$u.addUnit(g.borderRadius)})},null,8,["src","mode","onError","onLoad","lazy-load","style"])),g.showLoading&&p.loading?(t(),i(w,{key:1,class:"u-image__loading",style:a({borderRadius:"circle"==g.shape?"50%":h.$u.addUnit(g.borderRadius),backgroundColor:g.bgColor})},{default:o((()=>[h.$slots.loading?s(h.$slots,"loading",{key:0},void 0,!0):(t(),i(b,{key:1,name:g.loadingIcon,width:g.width,height:g.height},null,8,["name","width","height"]))])),_:3},8,["style"])):d("v-if",!0),g.showError&&p.isError&&!p.loading?(t(),i(w,{key:2,class:"u-image__error",style:a({borderRadius:"circle"==g.shape?"50%":h.$u.addUnit(g.borderRadius)})},{default:o((()=>[h.$slots.error?s(h.$slots,"error",{key:0},void 0,!0):(t(),i(b,{key:1,name:g.errorIcon,width:g.width,height:g.height},null,8,["name","width","height"]))])),_:3},8,["style"])):d("v-if",!0)])),_:3},8,["onClick","style"])}],["__scopeId","data-v-48a6dea4"]]);export{c as _};
=======
import{r as e,a as r,o as t,c as i,w as o,q as a,h as d,G as s,n as l,k as n}from"./index.5ddae38f.js";import{_ as u}from"./u-icon.947d1557.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var c=h({name:"u-image",emits:["click","error","load"],props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler(e){e?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle(){let e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition=`opacity ${Number(this.durationTime)/1e3}s ease-in-out`),e}},methods:{onClick(){this.$emit("click")},onErrorHandler(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler(){if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((()=>{this.durationTime=this.duration,this.opacity=1,setTimeout((()=>{this.removeBgColor()}),this.durationTime)}),50)},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}},[["render",function(h,c,g,y,p,m){const f=l,b=e(r("u-icon"),u),w=n;return t(),i(w,{class:"u-image",onClick:m.onClick,style:a([m.wrapStyle,p.backgroundStyle])},{default:o((()=>[p.isError?d("v-if",!0):(t(),i(f,{key:0,src:g.src,mode:g.mode,onError:m.onErrorHandler,onLoad:m.onLoadHandler,"lazy-load":g.lazyLoad,class:"u-image__image",style:a({borderRadius:"circle"==g.shape?"50%":h.$u.addUnit(g.borderRadius)})},null,8,["src","mode","onError","onLoad","lazy-load","style"])),g.showLoading&&p.loading?(t(),i(w,{key:1,class:"u-image__loading",style:a({borderRadius:"circle"==g.shape?"50%":h.$u.addUnit(g.borderRadius),backgroundColor:g.bgColor})},{default:o((()=>[h.$slots.loading?s(h.$slots,"loading",{key:0},void 0,!0):(t(),i(b,{key:1,name:g.loadingIcon,width:g.width,height:g.height},null,8,["name","width","height"]))])),_:3},8,["style"])):d("v-if",!0),g.showError&&p.isError&&!p.loading?(t(),i(w,{key:2,class:"u-image__error",style:a({borderRadius:"circle"==g.shape?"50%":h.$u.addUnit(g.borderRadius)})},{default:o((()=>[h.$slots.error?s(h.$slots,"error",{key:0},void 0,!0):(t(),i(b,{key:1,name:g.errorIcon,width:g.width,height:g.height},null,8,["name","width","height"]))])),_:3},8,["style"])):d("v-if",!0)])),_:3},8,["onClick","style"])}],["__scopeId","data-v-48a6dea4"]]);export{c as _};
>>>>>>> wjx202209160640:h5/assets/u-image.f03d2bad.js
