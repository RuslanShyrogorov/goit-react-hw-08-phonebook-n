"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[866],{866:function(e,n,o){o.r(n),o.d(n,{default:function(){return R}});var r=o(6015),t=o(9434),i=o(1087),a=o(277),l=o(2617),s=o(4565),u=o(2982),c=o(885),d=o(4942),p=o(3366),m=o(7462),v=o(2791),h=o(8182),f=o(4419),b=o(9853),x=o(5513),y=o(2763),Z=o(7933),g=o(5878),w=o(1217);function k(e){return(0,w.Z)("MuiLink",e)}var j=(0,g.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),C=o(8529),S=o(2065),D={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},W=function(e){var n=e.theme,o=e.ownerState,r=function(e){return D[e]||e}(o.color),t=(0,C.D)(n,"palette.".concat(r),!1)||o.color,i=(0,C.D)(n,"palette.".concat(r,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,S.Fq)(t,.4)},_=o(3329),A=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],N=(0,a.ZP)(s.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,b.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState;return(0,m.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,m.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:W({theme:n,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,d.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(j.focusVisible),{outline:"auto"}))})),F=v.forwardRef((function(e,n){var o=(0,x.Z)({props:e,name:"MuiLink"}),r=o.className,t=o.color,i=void 0===t?"primary":t,a=o.component,l=void 0===a?"a":a,s=o.onBlur,d=o.onFocus,g=o.TypographyClasses,w=o.underline,j=void 0===w?"always":w,C=o.variant,S=void 0===C?"inherit":C,W=o.sx,F=(0,p.Z)(o,A),L=(0,y.Z)(),P=L.isFocusVisibleRef,V=L.onBlur,M=L.onFocus,R=L.ref,T=v.useState(!1),q=(0,c.Z)(T,2),B=q[0],z=q[1],U=(0,Z.Z)(n,R),E=(0,m.Z)({},o,{color:i,component:l,focusVisible:B,underline:j,variant:S}),H=function(e){var n=e.classes,o=e.component,r=e.focusVisible,t=e.underline,i={root:["root","underline".concat((0,b.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,f.Z)(i,k,n)}(E);return(0,_.jsx)(N,(0,m.Z)({color:i,className:(0,h.Z)(H.root,r),classes:g,component:l,onBlur:function(e){V(e),!1===P.current&&z(!1),s&&s(e)},onFocus:function(e){M(e),!0===P.current&&z(!0),d&&d(e)},ref:U,ownerState:E,variant:S,sx:[].concat((0,u.Z)(Object.keys(D).includes(i)?[]:[{color:i}]),(0,u.Z)(Array.isArray(W)?W:[W]))},F))})),L=o(7205),P=o(5822),V=(0,a.ZP)(l.Z)({"& input:valid + fieldset":{borderColor:"green",borderWidth:1},"& input:invalid + fieldset":{borderColor:"red",borderWidth:1},"& input:valid:focus + fieldset":{borderLeftWidth:4,padding:"4px !important"}});function M(){var e=(0,t.I0)();return(0,_.jsxs)(r.Z,{component:"form",sx:{maxWidth:"sm",display:"grid",gridTemplateColumns:{sm:"1fr"},gap:2,m:"auto",pt:12},onSubmit:function(n){n.preventDefault();var o=n.currentTarget;e((0,P.z2)({name:o.elements.name.value,email:o.elements.email.value,password:o.elements.password.value})),o.reset()},children:[(0,_.jsx)(s.Z,{variant:"h3",component:"h3",m:"auto",color:"text.secondary",children:"SIGNUP"}),(0,_.jsxs)(s.Z,{variant:"subtitle2",component:"p",sx:{fontWeight:500,color:"text.primary"},children:["Already have an account?",(0,_.jsx)(F,{component:i.rU,to:"/login",underline:"none",sx:{px:1},children:"Login"})]}),(0,_.jsx)(V,{label:"Name",type:"text",name:"name",required:!0,variant:"outlined",placeholder:"Name",id:"validation-outlined-input-name"}),(0,_.jsx)(V,{label:"Email",name:"email",type:"email",required:!0,variant:"outlined",placeholder:"Email",id:"validation-outlined-input-email"}),(0,_.jsx)(V,{label:"Password",name:"password",type:"password",required:!0,variant:"outlined",placeholder:"Password",id:"validation-outlined-input-password"}),(0,_.jsx)(L.Z,{variant:"contained",sx:{maxWidth:"8rem",ml:"auto",mr:"auto"},type:"submit",children:"SignUp"})]})}function R(){return(0,_.jsx)(r.Z,{children:(0,_.jsx)(M,{})})}}}]);
//# sourceMappingURL=866.10934012.chunk.js.map