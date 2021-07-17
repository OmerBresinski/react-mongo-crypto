(this["webpackJsonpreact-9178"]=this["webpackJsonpreact-9178"]||[]).push([[0],{175:function(e,n,t){"use strict";(function(e){var a=t(19),i=t(0),c=t(119),l=t(31),r=t(189),o=t(184),s=t(185),d=t(59),u=t(37),b=t(2),j={sign:"sign",verify:"verify"};n.a=function(){var n=Object(i.useState)(0),t=Object(a.a)(n,2),v=t[0],f=t[1],x=Object(i.useState)(""),h=Object(a.a)(x,2),O=h[0],g=h[1],p=Object(i.useContext)(d.a),m=p.privateKey,y=p.publicKey,C=p.handlePrivateKeyChange,k=p.handlePublicKeyChange,w=p.ec,S=Object(i.useState)(""),K=Object(a.a)(S,2),N=K[0],H=K[1],P=Object(i.useState)(j.sign),z=Object(a.a)(P,2),D=z[0],V=z[1],E=Object(i.useState)(!1),R=Object(a.a)(E,2),M=R[0],B=R[1];Object(i.useEffect)((function(){V(1===v?j.verify:j.sign)}),[v]);var F=function(){if(m){var n=e.from(Object(c.SHA256)(O).toString()).toString("hex");H(e.from(w.sign(n,w.keyFromPrivate(m)).toDER()).toString("hex"))}},T=function(e){var n=e.value;g(n)};return Object(b.jsx)(u.f,{children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.b,{children:Object(b.jsx)(l.a,{size:"64px",bold:!0,children:"Signatures"})}),Object(b.jsxs)(u.e,{children:[Object(b.jsx)(u.c,{children:Object(b.jsx)(r.a,{items:["Sign","Verify"],activeTab:v,onChange:function(e){f(e)}})}),D===j.sign?Object(b.jsx)(o.a,{message:O,privateKey:m,messageSignature:N,onMessageChange:T,onPrivateKeyChange:C,onSignClick:F}):Object(b.jsx)(s.a,{message:O,publicKey:y,messageSignature:N,onMessageChange:T,onPublicKeyChange:k,onSignClick:F,onVerifyClick:function(){if(y){var n=w.keyFromPublic(y,"hex"),t=e.from(Object(c.SHA256)(O).toString()).toString("hex");B(n.verify(t,N))}},isVerified:M})]})]})})}}).call(this,t(25).Buffer)},184:function(e,n,t){"use strict";t(0);var a=t(22),i=t(45),c=t(9),l=t(37),r=t(2);n.a=function(e){var n=e.message,t=e.privateKey,o=e.messageSignature,s=e.onMessageChange,d=e.onPrivateKeyChange,u=e.onSignClick;return Object(r.jsxs)(l.d,{children:[Object(r.jsx)(a.a,{fieldName:"message",variant:c.e.outlined,onChange:s,label:"Message",multiline:!0,rows:12,value:n}),Object(r.jsx)(a.a,{fieldName:"privateKey",variant:c.e.outlined,onChange:d,label:"Private Key",value:t}),Object(r.jsx)(i.a,{label:"Sign",onClick:u,color:"primary",variant:"outlined"}),Object(r.jsx)(a.a,{fieldName:"messageSignature",variant:c.e.outlined,onChange:function(){},label:"Message Signature",value:o,disabled:!0})]})}},185:function(e,n,t){"use strict";var a=t(19),i=t(27),c=t(0),l=t(326),r=t(325),o=t(22),s=t(45),d=t(9),u=t(37),b=t(2),j=function(e){return Object(b.jsx)(r.a,Object(i.a)({elevation:6,variant:d.e.filled},e))};n.a=function(e){var n=e.message,t=e.publicKey,i=e.messageSignature,r=e.onMessageChange,v=e.onPublicKeyChange,f=e.onVerifyClick,x=e.isVerified,h=Object(c.useState)(!1),O=Object(a.a)(h,2),g=O[0],p=O[1];return Object(b.jsxs)(u.g,{children:[Object(b.jsx)(o.a,{fieldName:"message",variant:d.e.outlined,onChange:r,label:"Message",multiline:!0,rows:12,value:n}),Object(b.jsx)(o.a,{fieldName:"publicKey",variant:d.e.outlined,onChange:v,label:"Public Key",value:t}),Object(b.jsx)(o.a,{fieldName:"signature",variant:d.e.outlined,onChange:function(){},label:"Signature",value:i}),Object(b.jsx)(s.a,{label:"Verify",onClick:function(){p(!0),f()},color:"primary",variant:"outlined"}),Object(b.jsx)(l.a,{open:g,autoHideDuration:2e3,onClose:function(){p(!1)},children:Object(b.jsx)(j,{severity:x?"success":"error",children:x?"The message has been verified successfully":"The message is not verified"})})]})}},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(0);var a,i=t(371),c=t(366),l=t(7),r=(t(8).a.div(a||(a=Object(l.a)([""]))),t(2)),o=function(e){var n=e.items,t=e.onChange,a=e.activeTab;return Object(r.jsx)(i.a,{value:a,onChange:function(e,n){t(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:n.map((function(e,n){return Object(r.jsx)(c.a,{label:e,index:n},n)}))})}},203:function(e,n){},204:function(e,n){},22:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(0),i=t(9),c=t(370),l=t(2),r=function(e){var n=e.rows,t=e.type,r=e.label,o=e.isDirty,s=e.isValid,d=e.required,u=e.disabled,b=e.onChange,j=e.multiline,v=e.fieldName,f=e.value,x=void 0===f?"":f,h=e.placeholder,O=e.autoFocus,g=void 0!==O&&O,p=e.variant,m=void 0===p?i.e.standard:p,y=e.size,C=void 0===y?i.d.small:y;Object(a.useEffect)((function(){b({fieldName:v,value:x,isValid:k(x)})}),[]);var k=function(e){return(null===e||void 0===e?void 0:e.length)>0};return Object(l.jsx)(c.a,{fullWidth:!0,type:t,size:C,rows:n,label:r,value:x,variant:m,required:d,disabled:u,autoFocus:g,multiline:j,onChange:function(e){var n=e.target.value,t=k(n);b({fieldName:v,value:n,isValid:t})},placeholder:h,error:!u&&o&&!s})}},230:function(e,n){},232:function(e,n){},243:function(e,n){},245:function(e,n){},272:function(e,n){},274:function(e,n){},279:function(e,n){},281:function(e,n){},293:function(e,n){},296:function(e,n){},31:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(0);var a,i=t(361),c=t(7),l=t(8).a.span(a||(a=Object(c.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),r=t(2),o=function(e){var n=e.size,t=void 0===n?"14px":n,a=e.children,c=e.bold;return Object(r.jsx)(i.a,{children:Object(r.jsx)(l,{size:t,bold:c,children:a})})}},323:function(e,n,t){"use strict";t.r(n);var a,i,c,l,r,o,s,d,u,b,j,v,f,x,h,O,g,p,m,y,C,k,w,S,K,N,H=t(0),P=t.n(H),z=t(16),D=t.n(z),V=t(186),E=t(18),R=t(59),M=t(31),B=t(7),F=t(8),T=F.a.div(a||(a=Object(B.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),A=F.a.div(i||(i=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),I=F.a.div(c||(c=Object(B.a)(["\n  display: flex;\n"]))),q=t(2),L=function(){return Object(q.jsx)(T,{children:Object(q.jsx)(A,{children:Object(q.jsx)(I,{children:Object(q.jsx)(M.a,{size:"64px",bold:!0,children:"Blockchain Demo"})})})})},J=t(27),W=t(92),G=t(19),Q=function(e){var n=Object(H.useState)({}),t=Object(G.a)(n,2),a=t[0],i=t[1],c=Object(H.useCallback)((function(e){var n=e.fieldName,t=e.value,a=e.isValid;i((function(e){return Object(J.a)(Object(J.a)({},e),{},Object(W.a)({},n,Object(J.a)(Object(J.a)({},e[n]),{},{value:t,isValid:a})))}))}),[]),l=Object(H.useCallback)((function(e){var n=e.fieldName,t=e.value,a=e.isValid;isNaN(t)||c({fieldName:n,value:t,isValid:a})}),[]),r=function(){i((function(e){var n={};return Object.keys(e).forEach((function(t){n[t]=Object(J.a)(Object(J.a)({},e[t]),{},{isDirty:!0})})),n}))},o=function(){var e=!0;return Object.values(a).forEach((function(n){n.isValid||(e=!1)})),e};return{form:a,handleChange:c,handleNumberFieldChange:l,handleSubmit:function(){r(),o()&&e()},editEntry:function(e,n){i((function(t){var a=Object(J.a)({},t);return a[e]={isValid:!0,value:n},a}))}}},U=t(74),X=t.n(U),Y=function(e){var n=Object(H.useState)(""),t=Object(G.a)(n,2),a=t[0],i=t[1];Object(H.useEffect)((function(){i(X()(e).toString())}),[]);return{hash:a,calculateHash:function(e){return X()(e).toString()},setHash:i}},Z=t(22),$=t(9),_=F.a.div(l||(l=Object(B.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),ee=F.a.div(r||(r=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),ne=F.a.div(o||(o=Object(B.a)(["\n  display: flex;\n"]))),te=F.a.div(s||(s=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-block-start: 20px;\n  gap: 25px;\n  max-width: 650px;\n  width: 100%;\n"]))),ae=function(){var e,n,t=Q(),a=t.form,i=t.handleChange,c=Y(null===(e=a.data)||void 0===e?void 0:e.value),l=c.hash,r=c.setHash,o=c.calculateHash;return Object(H.useEffect)((function(){var e,n;(null===(e=a.data)||void 0===e?void 0:e.value)&&r(o(null===(n=a.data)||void 0===n?void 0:n.value))}),[null===(n=a.data)||void 0===n?void 0:n.value]),Object(q.jsx)(_,{children:Object(q.jsxs)(ee,{children:[Object(q.jsx)(ne,{children:Object(q.jsx)(M.a,{size:"64px",bold:!0,children:"Hash"})}),Object(q.jsxs)(te,{children:[Object(q.jsx)(Z.a,Object(J.a)({fieldName:"data",variant:$.e.outlined,onChange:i,label:"Data",multiline:!0,rows:12},a.data)),Object(q.jsx)(Z.a,{fieldName:"hash",variant:$.e.outlined,onChange:i,label:"Hash",disabled:!0,value:l})]})]})})},ie=t(45),ce=F.a.div(d||(d=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-block-start: 20px;\n  gap: 10px;\n  max-width: ",";\n  min-width: 250px;\n  width: 100%;\n"])),(function(e){return e.width})),le=function(e){var n,t,a,i,c=e.previousHash,l=e.width,r=void 0===l?"650px":l,o=e.dataRows,s=void 0===o?12:o,d=e.onHash,u=e.index,b=void 0===u?0:u,j=e.isDirty,v=e.setIsDirty,f=Object(H.useState)(!1),x=Object(G.a)(f,2),h=x[0],O=x[1],g=Q(),p=g.form,m=g.handleChange,y=g.handleNumberFieldChange,C=g.editEntry,k=Y("".concat(null===(n=p.block)||void 0===n?void 0:n.value).concat(null===(t=p.nonce)||void 0===t?void 0:t.value).concat(null===(a=p.data)||void 0===a?void 0:a.value).concat(c)),w=k.hash,S=k.calculateHash,K=k.setHash;Object(H.useEffect)((function(){d&&d(w.toString(),b),N()}),[w]),Object(H.useEffect)((function(){var e,n,t;c&&K(S("".concat(null===(e=p.block)||void 0===e?void 0:e.value).concat(null===(n=p.nonce)||void 0===n?void 0:n.value).concat(null===(t=p.data)||void 0===t?void 0:t.value).concat(c)))}),[c]);var N=function(){w.substring(0,$.b.difficulty)!==Array($.b.difficulty+1).join(0)?O(!1):O(!0)};return Object(q.jsxs)(ce,{width:r,children:[Object(q.jsx)(Z.a,{fieldName:"block",variant:$.e.outlined,onChange:function(e){var n,t,a=e.value;isNaN(a)||(K(S("".concat(a).concat(null===(n=p.nonce)||void 0===n?void 0:n.value).concat(null===(t=p.data)||void 0===t?void 0:t.value).concat(c))),y(e))},label:"Block",value:(null===(i=p.block)||void 0===i?void 0:i.value)||b+1,isValid:h,isDirty:j}),Object(q.jsx)(Z.a,Object(J.a)(Object(J.a)({fieldName:"nonce",variant:$.e.outlined,onChange:function(e){var n,t,a=e.value;K(S("".concat(null===(n=p.block)||void 0===n?void 0:n.value).concat(a).concat(null===(t=p.data)||void 0===t?void 0:t.value).concat(c))),m(e)},label:"Nonce"},p.nonce),{},{isValid:h,isDirty:j})),Object(q.jsx)(Z.a,Object(J.a)(Object(J.a)({fieldName:"data",variant:$.e.outlined,onChange:function(e){var n,t,a=e.value;K(S("".concat(null===(n=p.block)||void 0===n?void 0:n.value).concat(null===(t=p.nonce)||void 0===t?void 0:t.value).concat(a).concat(c))),m(e)},label:"Data",multiline:!0,rows:s},p.data),{},{isValid:h,isDirty:j})),c&&Object(q.jsx)(Z.a,{variant:$.e.outlined,onChange:m,label:"Previous",disabled:!0,value:c,isValid:h,isDirty:j}),Object(q.jsx)(Z.a,{variant:$.e.outlined,onChange:m,label:"Hash",disabled:!0,value:w,isValid:h,isDirty:j}),Object(q.jsx)(ie.a,{label:"Mine",onClick:function(){var e=w;if(e.substring(0,$.b.difficulty)!==Array($.b.difficulty+1).join(0)){for(var n=0;e.substring(0,$.b.difficulty)!==Array($.b.difficulty+1).join(0)&&n<$.b.maxNonce;){var t;n++,e=S("".concat((null===(t=p.block)||void 0===t?void 0:t.value)||b+1).concat(c).concat(p.data.value).concat(n).concat(c))}v(!0),C("nonce",n),K(e)}},color:"primary",variant:"outlined"})]})},re=F.a.div(u||(u=Object(B.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),oe=F.a.div(b||(b=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),se=F.a.div(j||(j=Object(B.a)(["\n  display: flex;\n"]))),de=function(){var e=Object(H.useState)(!1),n=Object(G.a)(e,2),t=n[0],a=n[1];return Object(q.jsx)(re,{children:Object(q.jsxs)(oe,{children:[Object(q.jsx)(se,{children:Object(q.jsx)(M.a,{size:"64px",bold:!0,children:"Block"})}),Object(q.jsx)(le,{isDirty:t,setIsDirty:a})]})})},ue=t(188),be=F.a.div(v||(v=Object(B.a)(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 50px;\n  width: calc(100vw - 400px);\n  padding: 0px 25px 25px;\n  overflow-x: auto;\n  box-sizing: border-box;\n"]))),je=[{previousHash:"0000000000000000000000000000000000000000000000000000000000000000"},{previousHash:" "},{previousHash:" "},{previousHash:" "},{previousHash:" "}],ve=function(e){var n=e.dataRows,t=Object(H.useState)(!1),a=Object(G.a)(t,2),i=a[0],c=a[1],l=Object(H.useState)(je),r=Object(G.a)(l,2),o=r[0],s=r[1],d=Object(H.useCallback)((function(e,n){n!=o.length-1&&s((function(t){var a=Object(ue.a)(t);return a[n+1]={previousHash:e},a}))}),[]);return Object(q.jsx)(be,{children:o.map((function(e,t){var a=e.previousHash;return Object(q.jsx)(le,{previousHash:a,onHash:d,index:t,width:"325px",dataRows:n,isDirty:i,setIsDirty:c},t)}))})},fe=F.a.div(f||(f=Object(B.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),xe=F.a.div(x||(x=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),he=F.a.div(h||(h=Object(B.a)(["\n  display: flex;\n"]))),Oe=function(){return Object(q.jsx)(fe,{children:Object(q.jsxs)(xe,{children:[Object(q.jsx)(he,{children:Object(q.jsx)(M.a,{size:"64px",bold:!0,children:"Blockchain"})}),Object(q.jsx)(ve,{dataRows:12})]})})},ge=F.a.div(O||(O=Object(B.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),pe=F.a.div(g||(g=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),me=F.a.div(p||(p=Object(B.a)(["\n  display: flex;\n"]))),ye=(F.a.div(m||(m=Object(B.a)(["\n  display: flex;\n  justify-content: flex-start;\n  gap: 50px;\n  width: calc(100vw - 400px);\n  padding: 0px 25px 25px;\n  overflow-x: auto;\n  box-sizing: border-box;\n"]))),F.a.div(y||(y=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"])))),Ce=function(){return Object(q.jsx)(ge,{children:Object(q.jsxs)(pe,{children:[Object(q.jsx)(me,{children:Object(q.jsx)(M.a,{size:"64px",bold:!0,children:"Distributed"})}),Object(q.jsxs)(ye,{children:[Object(q.jsx)(ve,{dataRows:5}),Object(q.jsx)(ve,{dataRows:5}),Object(q.jsx)(ve,{dataRows:5})]})]})})},ke=F.a.div(C||(C=Object(B.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),we=F.a.div(k||(k=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),Se=F.a.div(w||(w=Object(B.a)(["\n  display: flex;\n"]))),Ke=F.a.div(S||(S=Object(B.a)(["\n  display: flex;\n  margin-block-start: 50px;\n  flex-direction: column;\n  gap: 15px;\n  width: 600px;\n"]))),Ne=F.a.div(K||(K=Object(B.a)(["\n  display: flex;\n  gap: 10px;\n"]))),He=F.a.div(N||(N=Object(B.a)([""]))),Pe=function(){var e=Object(H.useContext)(R.a),n=e.privateKey,t=e.publicKey,a=e.handleRandomClick,i=e.handlePrivateKeyChange;return Object(q.jsx)(ke,{children:Object(q.jsxs)(we,{children:[Object(q.jsx)(Se,{children:Object(q.jsx)(M.a,{size:"64px",bold:!0,children:"Public / Private Key Pairs"})}),Object(q.jsxs)(Ke,{children:[Object(q.jsxs)(Ne,{children:[Object(q.jsx)(Z.a,{fieldName:"privateKey",variant:$.e.outlined,onChange:i,label:"Private Key",value:n}),Object(q.jsx)(ie.a,{label:"Random",onClick:a,color:"primary",variant:"outlined"})]}),Object(q.jsx)(He,{children:Object(q.jsx)(Z.a,{fieldName:"publicKey",variant:$.e.outlined,onChange:function(){},label:"Public Key",value:t,disabled:!0})})]})]})})},ze=t(175),De=t(187),Ve=t(367),Ee=t(368),Re=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},a=P.a.useMemo((function(){return Object(De.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(q.jsxs)(Ve.a,{theme:a,children:[Object(q.jsx)(Ee.a,{}),n]})},Me=t(369),Be=t(371),Fe=t(366),Te=["Home","Hash","Block","Blockchain","Distributed","Tokens","Coinbase","Keys","Signatures","Transaction"],Ae=function(){var e=Object(E.f)(),n=Object(H.useState)(0),t=Object(G.a)(n,2),a=t[0],i=t[1],c=Object(E.g)("/:page");Object(H.useEffect)((function(){l()}),[c]);var l=function(){if(c){var e=c.params.page,n=Te.findIndex((function(n){return(null===n||void 0===n?void 0:n.toLowerCase())===(null===e||void 0===e?void 0:e.toLowerCase())}));i(n||0)}};return Object(q.jsx)(Me.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(q.jsx)(Be.a,{value:a,onChange:function(n,t){var a,c,l=null===(a=n.target)||void 0===a||null===(c=a.textContent)||void 0===c?void 0:c.toLowerCase();e.push($.c[l]),i(t)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:Te.map((function(e,n){return Object(q.jsx)(Fe.a,{label:e,index:n},n)}))})})},Ie=function(){return Object(q.jsx)(Re,{children:Object(q.jsxs)(V.a,{children:[Object(q.jsx)(Ae,{}),Object(q.jsx)(E.c,{children:Object(q.jsxs)(R.b,{children:[Object(q.jsx)(E.a,{exact:!0,path:$.c.home,component:L}),Object(q.jsx)(E.a,{exact:!0,path:$.c.hash,component:ae}),Object(q.jsx)(E.a,{exact:!0,path:$.c.block,component:de}),Object(q.jsx)(E.a,{exact:!0,path:$.c.distributed,component:Ce}),Object(q.jsx)(E.a,{exact:!0,path:$.c.keys,component:Pe}),Object(q.jsx)(E.a,{exact:!0,path:$.c.signatures,component:ze.a}),Object(q.jsx)(E.a,{exact:!0,path:$.c.blockchain,component:Oe})]})})]})})};D.a.render(Object(q.jsx)(Ie,{}),document.querySelector("#root"))},37:function(e,n,t){"use strict";t.d(n,"f",(function(){return b})),t.d(n,"a",(function(){return j})),t.d(n,"b",(function(){return v})),t.d(n,"e",(function(){return f})),t.d(n,"c",(function(){return x})),t.d(n,"d",(function(){return h})),t.d(n,"g",(function(){return O}));var a,i,c,l,r,o,s,d=t(7),u=t(8),b=u.a.div(a||(a=Object(d.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),j=u.a.div(i||(i=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),v=u.a.div(c||(c=Object(d.a)(["\n  display: flex;\n"]))),f=u.a.div(l||(l=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-block-start: 25px;\n  width: 600px;\n"]))),x=u.a.div(r||(r=Object(d.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]))),h=u.a.div(o||(o=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-block-start: 20px;\n  gap: 10px;\n"]))),O=u.a.div(s||(s=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-block-start: 20px;\n  gap: 10px;\n"])))},45:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));t(0);var a=t(365),i=t(9),c=t(2),l=function(e){var n=e.label,t=e.color,l=void 0===t?i.a.default:t,r=e.disabled,o=e.size,s=void 0===o?i.d.medium:o,d=e.variant,u=void 0===d?i.e.standard:d,b=e.onClick;return Object(c.jsx)(a.a,{onClick:b,color:l,disabled:r,size:s,variant:u,children:n})}},59:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return s}));var a=t(19),i=t(0),c=t(73),l=t.n(c),r=t(2),o=function(e){var n=e.children,t=Object(i.useRef)(new l.a.ec("secp256k1")),c=Object(i.useState)(""),o=Object(a.a)(c,2),d=o[0],u=o[1],b=Object(i.useState)(""),j=Object(a.a)(b,2),v=j[0],f=j[1];return Object(r.jsx)(s.Provider,{value:{ec:t.current,privateKey:d,publicKey:v,handleRandomClick:function(){var e=t.current.genKeyPair();u(e.getPrivate("hex")),f(e.getPublic("hex"))},handlePrivateKeyChange:function(e){var n=e.value;if(n){var a,i=null===(a=t.current.keyFromPrivate(n))||void 0===a?void 0:a.getPublic("hex");u(n),f(i)}else u(""),f("")},handlePublicKeyChange:function(e){var n=e.value;f(n)}},children:n})},s=Object(i.createContext)({privateKey:"",publicKey:""})},9:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"e",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return r}));var a={small:"small",medium:"medium",large:"large"},i={text:"text",filled:"filled",outlined:"outlined",standard:"standard",contained:"contained"},c={default:"default",inherit:"inherit",primary:"primary",secondary:"secondary"},l={home:"/",hash:"/hash",block:"/block",blockchain:"/blockchain",distributed:"/distributed",keys:"/keys",signatures:"/signatures"},r={difficulty:4,maxNonce:5e5}}},[[323,1,2]]]);
//# sourceMappingURL=main.e75bdbec.chunk.js.map