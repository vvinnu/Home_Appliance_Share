"use strict";(self.webpackChunkhomeservices=self.webpackChunkhomeservices||[]).push([[432],{177:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});var o=t(152),n=t(791),i=t(226),r=t(885),a=t.n(r),c=t(871),l=t(184);var u=function(){var e=(0,c.s0)(),s=new(a()),t=(0,n.useState)(""),r=(0,o.Z)(t,2),u=r[0],p=r[1];return(0,n.useEffect)((function(){console.log(localStorage.getItem("otp"))}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"container height-100 d-flex justify-content-center align-items-center",children:(0,l.jsx)("div",{className:"position-relative",children:(0,l.jsxs)("div",{className:"card p-2 text-center",children:[(0,l.jsxs)("h6",{children:["Please enter the one time password ",(0,l.jsx)("br",{})," to verify your account"]}),(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"text",name:"otp",placeholder:"Enter OTP",className:"form-control",style:{width:"82%"},onChange:function(e){return p(e.target.value)}}),(0,l.jsx)("input",{className:"button1",type:"button",value:"Validate",onClick:function(){s.allValid()?(console.log("ENTER OTP"),console.log(u),localStorage.getItem("otp")==u?((0,i.Z)({message:"Valid OTP",position:"right",type:"success"}),e("/Resetpass")):(0,i.Z)({message:"Please Enter valid OTP",position:"right",type:"error"})):(0,i.Z)({message:"Please fill data",position:"right",type:"error"})},style:{color:"black"}})]})})})})}},226:function(e,s,t){t(791);var o=t(577);t(462);o.Am.configure();s.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:"yes",position:"center",type:"success"};void 0==e.message&&(e.message="ok yes");var s={position:o.Am.POSITION.BOTTOM_LEFT};return"center"==e.position&&(s.position=o.Am.POSITION.BOTTOM_CENTER),"right"==e.position&&(s.position=o.Am.POSITION.BOTTOM_RIGHT),"success"==e.type?o.Am.success(e.message,s):"error"==e.type?o.Am.error(e.message,s):"info"==e.type?o.Am.info(e.message,s):void 0}}}]);
//# sourceMappingURL=432.4623066c.chunk.js.map