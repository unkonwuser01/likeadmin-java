<<<<<<< HEAD:h5/assets/tabbar.5a261344.js
import{o as t,c as e,w as o,l as a,t as s,p as i,q as l,h as r,k as n,s as u,v as c,x as d,r as f,a as h,b as p,e as b,f as m,y as g,F as y,z as _,d as C,A as v,u as S,B,C as w,g as x}from"./index.24de5888.js";import{_ as k}from"./u-icon.b22654a8.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import{n as z}from"./util.7b793930.js";var P=T({name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:()=>[20,20]},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle(){let t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText(){return this.isDot?"":this.count>this.overflowCount?`${this.overflowCount}+`:this.count},show(){return 0!=this.count||0!=this.showZero}}},[["render",function(u,c,d,f,h,p){const b=n;return p.show?(t(),e(b,{key:0,class:i(["u-badge",[d.isDot?"u-badge-dot":"","mini"==d.size?"u-badge-mini":"",d.type?"u-badge--bg--"+d.type:""]]),style:l([{top:d.offset[0]+"rpx",right:d.offset[1]+"rpx",fontSize:d.fontSize+"rpx",position:d.absolute?"absolute":"static",color:d.color,backgroundColor:d.bgColor},p.boxStyle])},{default:o((()=>[a(s(p.showText),1)])),_:1},8,["class","style"])):r("v-if",!0)}],["__scopeId","data-v-11d03f21"]]);var $=T({emits:["update:modelValue","input","change"],props:{value:{type:[String,Number],default:0},modelValue:{type:[String,Number],default:0},show:{type:Boolean,default:!0},bgColor:{type:String,default:"#ffffff"},height:{type:[String,Number],default:"50px"},iconSize:{type:[String,Number],default:40},midButtonSize:{type:[String,Number],default:90},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},midButton:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},beforeSwitch:{type:Function,default:null},borderTop:{type:Boolean,default:!0},hideTabBar:{type:Boolean,default:!0}},data:()=>({midButtonLeft:"50%",pageUrl:""}),created(){this.hideTabBar&&u();let t=c();this.pageUrl=t[t.length-1].route},computed:{valueCom(){return this.modelValue},elIconPath(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.list[t].selectedIconPath:this.list[t].iconPath:t==this.valueCom?this.list[t].selectedIconPath:this.list[t].iconPath}},elColor(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.activeColor:this.inactiveColor:t==this.valueCom?this.activeColor:this.inactiveColor}}},mounted(){this.midButton&&this.getMidButtonLeft()},methods:{async clickHandler(t){if(this.beforeSwitch&&"function"==typeof this.beforeSwitch){let e=this.beforeSwitch.bind(this.$u.$parent.call(this))(t);e&&"function"==typeof e.then?await e.then((e=>{this.switchTab(t)})).catch((t=>{})):!0===e&&this.switchTab(t)}else this.switchTab(t)},switchTab(t){let e=this.list[t].pagePath;if(e){if(e==this.pageUrl||e=="/"+this.pageUrl)return;this.$emit("change",t),d({url:e})}else this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t)},getOffsetRight:(t,e)=>e?-20:t>9?-40:-30,getMidButtonLeft(){let t=this.$u.sys().windowWidth;this.midButtonLeft=t/2+"px"}}},[["render",function(u,c,d,C,v,S){const B=f(h("u-icon"),k),w=f(h("u-badge"),P),x=n,T=_;return d.show?(t(),e(x,{key:0,class:"u-tabbar",onTouchmove:c[0]||(c[0]=g((()=>{}),["stop","prevent"]))},{default:o((()=>[p(x,{class:i(["u-tabbar__content safe-area-inset-bottom",{"u-border-top":d.borderTop}]),style:l({height:u.$u.addUnit(d.height),backgroundColor:d.bgColor})},{default:o((()=>[(t(!0),b(y,null,m(d.list,((n,u)=>(t(),e(x,{class:i(["u-tabbar__content__item",{"u-tabbar__content__circle":d.midButton&&n.midButton}]),key:u,onClick:g((t=>S.clickHandler(u)),["stop"]),style:l({backgroundColor:d.bgColor})},{default:o((()=>[p(x,{class:i([d.midButton&&n.midButton?"u-tabbar__content__circle__button":"u-tabbar__content__item__button"])},{default:o((()=>[p(B,{size:d.midButton&&n.midButton?d.midButtonSize:d.iconSize,name:S.elIconPath(u),"img-mode":"scaleToFill",color:S.elColor(u),"custom-prefix":n.customIcon?"custom-icon":"uicon"},null,8,["size","name","color","custom-prefix"]),n.count?(t(),e(w,{key:0,count:n.count,"is-dot":n.isDot,offset:[-2,S.getOffsetRight(n.count,n.isDot)]},null,8,["count","is-dot","offset"])):r("v-if",!0)])),_:2},1032,["class"]),p(x,{class:"u-tabbar__content__item__text",style:l({color:S.elColor(u)})},{default:o((()=>[p(T,{class:"u-line-1"},{default:o((()=>[a(s(n.text),1)])),_:2},1024)])),_:2},1032,["style"])])),_:2},1032,["class","onClick","style"])))),128)),d.midButton?(t(),e(x,{key:0,class:i(["u-tabbar__content__circle__border",{"u-border":d.borderTop}]),style:l({backgroundColor:d.bgColor,left:v.midButtonLeft})},null,8,["class","style"])):r("v-if",!0)])),_:1},8,["style","class"]),r(" 这里加上一个48rpx的高度,是为了增高有凸起按钮时的防塌陷高度(也即按钮凸出来部分的高度) "),p(x,{class:"u-fixed-placeholder safe-area-inset-bottom",style:l({height:`calc(${u.$u.addUnit(d.height)} + ${d.midButton?48:0}rpx)`})},null,8,["style"])])),_:1})):r("v-if",!0)}],["__scopeId","data-v-c5941cb2"]]);const U=C({__name:"tabbar",setup(o){const a=v(),s=S(),i=B((()=>s.getTabbarConfig.map((t=>{const e=JSON.parse(t.link);return{iconPath:t.unselected,selectedIconPath:t.selected,text:t.name,link:e,pagePath:e.path}})))),l=B((()=>({activeColor:s.getStyleConfig.selectedColor,inactiveColor:s.getStyleConfig.defaultColor}))),r=t=>{const e=i.value[t];z(e.link,"reLaunch")};return(o,s)=>{const n=f(h("u-tabbar"),$);return t(),e(n,w({modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t)},x(l),{list:x(i),onChange:r,"hide-tab-bar":!1}),null,16,["modelValue","list"])}}});export{U as _,P as a};
=======
import{o as t,c as e,w as o,l as a,t as s,p as i,q as l,h as r,k as n,s as u,v as c,x as d,r as f,a as h,b as p,e as b,f as m,y as g,F as y,z as _,d as C,A as v,u as S,B,C as w,g as x}from"./index.5ddae38f.js";import{_ as k}from"./u-icon.947d1557.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import{n as z}from"./util.4ba637ba.js";var P=T({name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:()=>[20,20]},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle(){let t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText(){return this.isDot?"":this.count>this.overflowCount?`${this.overflowCount}+`:this.count},show(){return 0!=this.count||0!=this.showZero}}},[["render",function(u,c,d,f,h,p){const b=n;return p.show?(t(),e(b,{key:0,class:i(["u-badge",[d.isDot?"u-badge-dot":"","mini"==d.size?"u-badge-mini":"",d.type?"u-badge--bg--"+d.type:""]]),style:l([{top:d.offset[0]+"rpx",right:d.offset[1]+"rpx",fontSize:d.fontSize+"rpx",position:d.absolute?"absolute":"static",color:d.color,backgroundColor:d.bgColor},p.boxStyle])},{default:o((()=>[a(s(p.showText),1)])),_:1},8,["class","style"])):r("v-if",!0)}],["__scopeId","data-v-11d03f21"]]);var $=T({emits:["update:modelValue","input","change"],props:{value:{type:[String,Number],default:0},modelValue:{type:[String,Number],default:0},show:{type:Boolean,default:!0},bgColor:{type:String,default:"#ffffff"},height:{type:[String,Number],default:"50px"},iconSize:{type:[String,Number],default:40},midButtonSize:{type:[String,Number],default:90},activeColor:{type:String,default:"#303133"},inactiveColor:{type:String,default:"#606266"},midButton:{type:Boolean,default:!1},list:{type:Array,default:()=>[]},beforeSwitch:{type:Function,default:null},borderTop:{type:Boolean,default:!0},hideTabBar:{type:Boolean,default:!0}},data:()=>({midButtonLeft:"50%",pageUrl:""}),created(){this.hideTabBar&&u();let t=c();this.pageUrl=t[t.length-1].route},computed:{valueCom(){return this.modelValue},elIconPath(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.list[t].selectedIconPath:this.list[t].iconPath:t==this.valueCom?this.list[t].selectedIconPath:this.list[t].iconPath}},elColor(){return t=>{let e=this.list[t].pagePath;return e?e==this.pageUrl||e=="/"+this.pageUrl?this.activeColor:this.inactiveColor:t==this.valueCom?this.activeColor:this.inactiveColor}}},mounted(){this.midButton&&this.getMidButtonLeft()},methods:{async clickHandler(t){if(this.beforeSwitch&&"function"==typeof this.beforeSwitch){let e=this.beforeSwitch.bind(this.$u.$parent.call(this))(t);e&&"function"==typeof e.then?await e.then((e=>{this.switchTab(t)})).catch((t=>{})):!0===e&&this.switchTab(t)}else this.switchTab(t)},switchTab(t){let e=this.list[t].pagePath;if(e){if(e==this.pageUrl||e=="/"+this.pageUrl)return;this.$emit("change",t),d({url:e})}else this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t)},getOffsetRight:(t,e)=>e?-20:t>9?-40:-30,getMidButtonLeft(){let t=this.$u.sys().windowWidth;this.midButtonLeft=t/2+"px"}}},[["render",function(u,c,d,C,v,S){const B=f(h("u-icon"),k),w=f(h("u-badge"),P),x=n,T=_;return d.show?(t(),e(x,{key:0,class:"u-tabbar",onTouchmove:c[0]||(c[0]=g((()=>{}),["stop","prevent"]))},{default:o((()=>[p(x,{class:i(["u-tabbar__content safe-area-inset-bottom",{"u-border-top":d.borderTop}]),style:l({height:u.$u.addUnit(d.height),backgroundColor:d.bgColor})},{default:o((()=>[(t(!0),b(y,null,m(d.list,((n,u)=>(t(),e(x,{class:i(["u-tabbar__content__item",{"u-tabbar__content__circle":d.midButton&&n.midButton}]),key:u,onClick:g((t=>S.clickHandler(u)),["stop"]),style:l({backgroundColor:d.bgColor})},{default:o((()=>[p(x,{class:i([d.midButton&&n.midButton?"u-tabbar__content__circle__button":"u-tabbar__content__item__button"])},{default:o((()=>[p(B,{size:d.midButton&&n.midButton?d.midButtonSize:d.iconSize,name:S.elIconPath(u),"img-mode":"scaleToFill",color:S.elColor(u),"custom-prefix":n.customIcon?"custom-icon":"uicon"},null,8,["size","name","color","custom-prefix"]),n.count?(t(),e(w,{key:0,count:n.count,"is-dot":n.isDot,offset:[-2,S.getOffsetRight(n.count,n.isDot)]},null,8,["count","is-dot","offset"])):r("v-if",!0)])),_:2},1032,["class"]),p(x,{class:"u-tabbar__content__item__text",style:l({color:S.elColor(u)})},{default:o((()=>[p(T,{class:"u-line-1"},{default:o((()=>[a(s(n.text),1)])),_:2},1024)])),_:2},1032,["style"])])),_:2},1032,["class","onClick","style"])))),128)),d.midButton?(t(),e(x,{key:0,class:i(["u-tabbar__content__circle__border",{"u-border":d.borderTop}]),style:l({backgroundColor:d.bgColor,left:v.midButtonLeft})},null,8,["class","style"])):r("v-if",!0)])),_:1},8,["style","class"]),r(" 这里加上一个48rpx的高度,是为了增高有凸起按钮时的防塌陷高度(也即按钮凸出来部分的高度) "),p(x,{class:"u-fixed-placeholder safe-area-inset-bottom",style:l({height:`calc(${u.$u.addUnit(d.height)} + ${d.midButton?48:0}rpx)`})},null,8,["style"])])),_:1})):r("v-if",!0)}],["__scopeId","data-v-c5941cb2"]]);const U=C({__name:"tabbar",setup(o){const a=v(),s=S(),i=B((()=>s.getTabbarConfig.map((t=>{const e=JSON.parse(t.link);return{iconPath:t.unselected,selectedIconPath:t.selected,text:t.name,link:e,pagePath:e.path}})))),l=B((()=>({activeColor:s.getStyleConfig.selectedColor,inactiveColor:s.getStyleConfig.defaultColor}))),r=t=>{const e=i.value[t];z(e.link,"reLaunch")};return(o,s)=>{const n=f(h("u-tabbar"),$);return t(),e(n,w({modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t)},x(l),{list:x(i),onChange:r,"hide-tab-bar":!1}),null,16,["modelValue","list"])}}});export{U as _,P as a};
>>>>>>> wjx202209160640:h5/assets/tabbar.3ac4b4ec.js
