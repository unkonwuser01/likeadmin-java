import{d as e,X as a,z as o,aa as l,m as t,o as r,c as s,w as d,b as u,l as i,t as m,af as n,az as c,ae as b,r as f,a as p,k as _}from"./index.a0d3e9bc.js";import{_ as x,a as v}from"./u-form-item.b77e911f.js";import{_ as h}from"./u-verification-code.bc1f7d4a.js";import{_ as j}from"./u-form.119d728a.js";import{_ as g}from"./u-button.ed70d790.js";import{S as k}from"./appEnums.a2ba827b.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.c61604db.js";var y=w(e({__name:"bind_mobile",setup(e){const w=a(),y=o(""),V=l(),B=e=>{y.value=e},C=t({type:"bind",mobile:"",code:""}),$=async()=>{var e,a;if(!C.mobile)return uni.$u.toast("请输入手机号码");(null==(e=w.value)?void 0:e.canGetCode)&&(await n({scene:k.BIND_MOBILE,mobile:C.mobile}),uni.$u.toast("发送成功"),null==(a=w.value)||a.start())},I=async()=>C.mobile?C.code?(await c(C,{token:V.temToken}),uni.$u.toast("绑定成功"),V.login(V.temToken),void b()):uni.$u.toast("请输入验证码"):uni.$u.toast("请输入手机号码");return(e,a)=>{const o=f(p("u-input"),x),l=f(p("u-form-item"),v),t=f(p("u-verification-code"),h),n=_,c=f(p("u-form"),j),b=f(p("u-button"),g);return r(),s(n,{class:"bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"},{default:d((()=>[u(n,{class:"w-full"},{default:d((()=>[u(c,{borderBottom:"","label-width":150},{default:d((()=>[u(l,{label:"手机号",borderBottom:""},{default:d((()=>[u(o,{class:"flex-1",modelValue:C.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>C.mobile=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),u(l,{label:"验证码",borderBottom:""},{default:d((()=>[u(o,{class:"flex-1",modelValue:C.code,"onUpdate:modelValue":a[1]||(a[1]=e=>C.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),u(n,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3 w-[180rpx]",onClick:$},{default:d((()=>[u(t,{ref_key:"uCodeRef",ref:w,seconds:60,onChange:B,"change-text":"x秒"},null,512),i(" "+m(y.value),1)])),_:1})])),_:1})])),_:1}),u(n,{class:"mt-[40rpx]"},{default:d((()=>[u(b,{type:"primary",shape:"circle",onClick:I},{default:d((()=>[i(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-3b29402b"]]);export{y as default};
