(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{139:function(e,t,a){e.exports=a(209)},206:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=a(9),i=a(40),s=a(111),u=a(248),d=a(34),m=a(16),p=a(11),f=a(38),v=a(256),g=a(247),b=a(237),E=a(6),h=a.n(E),O=a(12),j="LOGOUT",y=a(112),x=a.n(y).a.create({baseURL:"https://kamonrarara.herokuapp.com"});x.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var S=function(e){return x.patch("/posts/".concat(e,"/likePost"))},w=function(e,t){return x.patch("/posts/".concat(e),t)},N=function(e){return x.delete("/posts/".concat(e))},_=function(e){return x.post("/users/signin",e)},C=function(e){return x.post("/users/signup",e)},T=function(e,t){return x.patch("/users/profile/".concat(e),t)},k=function(e){return x.get("/chat/conversations/".concat(e))},I=function(e){return x.get("/chat/messages/".concat(e))},A=function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o=e,x.post("/posts",o);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var o}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},R=function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(n){var r,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w(e,t);case 3:r=a.sent,o=r.data,n({type:"UPDATE",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},D=a(246),F=a(241),M=a(242),L=a(130),P=a(243),U=a(244),W=a(245),H=a(117),V=a.n(H),B=a(119),J=a.n(B),z=a(118),G=a.n(z),K=a(79),X=a.n(K),q=a(113),Y=a.n(q),Q=Object(b.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Z=function(e){var t,a,o,c,i,s=e.post,u=e.setCurrentId;console.log("[POST] ",s);var d=Object(l.b)(),m=Q(),f=JSON.parse(localStorage.getItem("profile")),v=Object(n.useState)(!1),g=Object(p.a)(v,2),b=(g[0],g[1],function(){var e;return(null===s||void 0===s||null===(e=s.likes)||void 0===e?void 0:e.length)>0?s.likes.find((function(e){var t,a;return e===((null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.googleId)||(null===f||void 0===f||null===(a=f.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{fontSize:"small"}),"\xa0",s.likes.length>2?"You and ".concat(s.likes.length-1," others"):"".concat(s.likes.length," like").concat(s.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{fontSize:"small"}),"\xa0",s.likes.length," ",1===s.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{fontSize:"small"}),"\xa0Like")});return r.a.createElement(F.a,{className:m.card},r.a.createElement(M.a,{className:m.media,image:s.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:s.title}),r.a.createElement("div",{className:m.overlay},r.a.createElement(L.a,{variant:"h6"},s.owner),r.a.createElement(L.a,{variant:"body2"},Y()(s.createdAt).fromNow())),((null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===f||void 0===f||null===(a=f.result)||void 0===a?void 0:a._id)===(null===s||void 0===s?void 0:s.creator))&&r.a.createElement("div",{className:m.overlay2},r.a.createElement(P.a,{onClick:function(){return u(s._id)},style:{color:"white"},size:"small"},r.a.createElement(G.a,{fontSize:"default"}))),r.a.createElement("div",{className:m.details},r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"h2"},null===s||void 0===s||null===(o=s.tags)||void 0===o?void 0:o.map((function(e){return"#".concat(e," ")})))),r.a.createElement(L.a,{className:m.title,gutterBottom:!0,variant:"h5",component:"h2"},s.title),r.a.createElement(U.a,null,r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"p"},s.message)),r.a.createElement(W.a,{className:m.cardActions},r.a.createElement(P.a,{size:"small",color:"primary",disabled:!(null===f||void 0===f?void 0:f.result),onClick:function(){var e;d((e=s._id,function(){var t=Object(O.a)(h.a.mark((function t(a){var n,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,S(e,null===n||void 0===n||n.token);case 4:r=t.sent,o=r.data,a({type:"LIKE",payload:o}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()))}},r.a.createElement(b,null)),((null===f||void 0===f||null===(c=f.result)||void 0===c?void 0:c.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===f||void 0===f||null===(i=f.result)||void 0===i?void 0:i._id)===(null===s||void 0===s?void 0:s.creator))&&r.a.createElement(P.a,{size:"small",color:"secondary",onClick:function(){return d((e=s._id,function(){var t=Object(O.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(J.a,{fontSize:"small"})," Delete")))},$=Object(b.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ee=function(e){var t=e.setCurrentId,a=$(),n=Object(l.c)((function(e){return e.posts}));return console.log("[POSTS] useSelector posts: ",n),n.length?r.a.createElement(g.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3},n.map((function(e){return r.a.createElement(g.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(Z,{post:e,setCurrentId:t}))}))):r.a.createElement(D.a,null)},te=a(7),ae=a(129),ne=a(255),re=a(120),oe=a.n(re),ce=Object(b.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),le=function(e){var t,a=e.currentId,o=e.setCurrentId,c=Object(n.useState)({title:"",owner:"",message:"",tags:"",selectedFile:""}),i=Object(p.a)(c,2),s=i[0],u=i[1],d=Object(l.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),m=Object(l.b)(),f=ce(),v=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){d&&u(d)}),[d]);var g=function(){o(0),u({title:"",owner:"",message:"",tags:"",selectedFile:""})},b=function(){var e=Object(O.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(m(A(Object(te.a)(Object(te.a)({},s),{},{owner:null===v||void 0===v||null===(n=v.result)||void 0===n?void 0:n.firstname}))),g()):(m(R(a,Object(te.a)(Object(te.a)({},s),{},{owner:null===v||void 0===v||null===(r=v.result)||void 0===r?void 0:r.firstname}))),g());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===v||void 0===v||null===(t=v.result)||void 0===t?void 0:t._id)?r.a.createElement(ae.a,{className:f.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:b},r.a.createElement(L.a,{variant:"h6"},a?'Editing "'.concat(d.title,'"'):"Creating a Memory"),r.a.createElement(ne.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(te.a)(Object(te.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ne.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(te.a)(Object(te.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(ne.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(te.a)(Object(te.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:f.fileInput},r.a.createElement(oe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(te.a)(Object(te.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(P.a,{className:f.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(P.a,{variant:"contained",color:"secondary",size:"small",onClick:g,fullWidth:!0},"Clear"))):r.a.createElement(ae.a,{className:f.paper},r.a.createElement(L.a,{variant:"h6",align:"center"},"Please Sign In to create your own memories and like other's memories."))},ie=Object(b.a)((function(e){return Object(f.a)({},e.breakpoints.down("md"),{mainContainer:{flexDirection:"column-reverse"}})})),se=function(){var e=ie(),t=Object(n.useState)(0),a=Object(p.a)(t,2),o=a[0],c=a[1],i=Object(l.b)();return Object(n.useEffect)((function(){i(function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_POSTS",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("client>src>action>posts>getPosts: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o,i]),r.a.createElement(v.a,{in:!0},r.a.createElement(u.a,null,r.a.createElement(g.a,{container:!0,className:e.mainContainer,justify:"space-between",alignItems:"stretch"},r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12,lg:7},r.a.createElement(ee,{setCurrentId:c})),r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12,lg:4},r.a.createElement(le,{currentId:o,setCurrentId:c})))))},ue=a(250),de=a(251),me=a(257),pe=a(121),fe=a(249),ve=Object(b.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between"},leftDiv:{display:"flex",alignItems:"center",paddingLeft:"33px"},rightDiv:{display:"flex",flexDirection:"row",paddingRight:"33px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none",fontSize:"16px"},image:{marginLeft:"15px"},profile:{display:"flex"},userName:{display:"flex",alignItems:"center",padding:"11px 11px 11px 11px"},avatar:{padding:"11px 11px 11px 11px",color:e.palette.getContrastText(fe.a[500]),backgroundColor:fe.a[500]}}})),ge=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(l.b)(),i=Object(m.g)(),s=Object(m.f)(),u=ve(),f=function(){c({type:j}),s.push("/auth"),o(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(pe.a)(e).exp<(new Date).getTime()&&f());o(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(ue.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:u.leftDiv},r.a.createElement(L.a,{component:d.b,to:"/",className:u.heading,variant:"h2",align:"center"},"Home")," \xa0",(null===a||void 0===a?void 0:a.result)&&r.a.createElement("div",null,r.a.createElement(L.a,{component:d.b,to:"/user/profile",className:u.heading,variant:"h2",align:"center"},"Profile"),"\xa0",r.a.createElement(L.a,{component:d.b,to:"/chat",className:u.heading,variant:"h2",align:"center"},"Messenger"))),r.a.createElement("div",{className:u.rightDiv},r.a.createElement(de.a,null,(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(me.a,{className:u.avatar,alt:null===a||void 0===a?void 0:a.result.firstname,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.firstname.charAt(0)),r.a.createElement(L.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.firstname),r.a.createElement(P.a,{variant:"contained",color:"secondary",onClick:f},"Logout")):r.a.createElement(P.a,{component:d.b,to:"/auth",variant:"contained",color:"primary"},"Sign In"))))},be=(a(172),a(124)),Ee=a.n(be),he=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Oe=a(252),je=a(253),ye=a(122),xe=a.n(ye),Se=a(123),we=a.n(Se),Ne=function(e){var t=e.name,a=e.handleChange,n=e.label,o=e.half,c=e.autoFocus,l=e.type,i=e.handleShowPassword;return r.a.createElement(g.a,{item:!0,xs:12,sm:o?6:12},r.a.createElement(ne.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:l,InputProps:"password"===t?{endAdornment:r.a.createElement(Oe.a,{position:"end"},r.a.createElement(je.a,{onClick:i},"password"===l?r.a.createElement(xe.a,null):r.a.createElement(we.a,null)))}:null}))},_e={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ce=function(){var e=Object(n.useState)(_e),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(p.a)(c,2),s=i[0],d=i[1],v=Object(l.b)(),b=Object(m.f)(),E=he(),j=Object(n.useState)(!1),y=Object(p.a)(j,2),x=y[0],S=y[1],w=function(e){return o(Object(te.a)(Object(te.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement(u.a,{component:"main",maxWidth:"xs"},r.a.createElement(ae.a,{className:E.paper,elevation:3},r.a.createElement(me.a,{className:E.avatar},r.a.createElement(Ee.a,null)),r.a.createElement(L.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:E.form,onSubmit:function(e){var t,n;e.preventDefault(),v(s?(t=a,n=b,function(){var e=Object(O.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:r=e.sent,o=r.data,a({type:"AUTH",data:o}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(n){var r,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_(e);case 3:r=a.sent,o=r.data,n({type:"AUTH",data:o}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,b))}},r.a.createElement(g.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{name:"firstName",label:"Firstname",handleChange:w,autoFocus:!0,half:!0}),r.a.createElement(Ne,{name:"lastName",label:"Lastname",handleChange:w,half:!0})),r.a.createElement(Ne,{name:"email",label:"Email Address",handleChange:w,type:"email"}),r.a.createElement(Ne,{name:"password",label:"Password",handleChange:w,type:x?"text":"password",handleShowPassword:function(){return S(!x)}}),s&&r.a.createElement(Ne,{name:"confirmPassword",label:"Repeat Password",handleChange:w,type:"password"})),r.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:E.submit},s?"Sign Up":"Sign In"),r.a.createElement(g.a,{container:!0,justify:"flex-end"},r.a.createElement(g.a,{item:!0},r.a.createElement(P.a,{onClick:function(){o(_e),d((function(e){return!e})),S(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},Te=function(e,t){return function(){var a=Object(O.a)(h.a.mark((function a(n){var r,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T(e,t);case 3:r=a.sent,o=r.data,n({type:"UPDATE",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},ke=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,1,2),float:"right"},googleButton:{marginBottom:e.spacing(2)}}})),Ie=function(e){var t=e.name,a=e.onChange,n=e.label,o=e.half,c=e.autoFocus,l=e.type,i=e.value;return r.a.createElement(g.a,{item:!0,xs:12,sm:o?6:12},r.a.createElement(ne.a,{type:l,name:t,defaultValue:i,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c}))},Ae={firstname:"",lastname:"",email:""},Re=function(){var e,t,a,o,c=Object(n.useState)(Ae),i=Object(p.a)(c,2),s=i[0],d=i[1],b=Object(l.b)(),E=(Object(m.f)(),ke()),j=JSON.parse(localStorage.getItem("profile")),y=null===j||void 0===j||null===(e=j.result)||void 0===e?void 0:e._id,x=null===j||void 0===j||null===(t=j.result)||void 0===t?void 0:t.email,S=null===j||void 0===j||null===(a=j.result)||void 0===a?void 0:a.firstname,w=null===j||void 0===j||null===(o=j.result)||void 0===o?void 0:o.lastname;console.log("[PROFILE] currentUserId: ",y),console.log("[PROFILE] handleSubmit/localStorage-email: ",x),console.log("[PROFILE] handleSubmit/localStorage-firstname: ",S),console.log("[PROFILE] handleSubmit/localStorage-lastname: ",w);var N=function(e){return d(Object(te.a)(Object(te.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))},_=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),b(Te(y,s));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{in:!0},r.a.createElement(u.a,{component:"main",maxWidth:"xs"},r.a.createElement(ae.a,{className:E.paper,elevation:3},r.a.createElement(L.a,{component:"h1",variant:"h5"}," Update Profile "),r.a.createElement("form",{className:E.form,onSubmit:_},r.a.createElement(g.a,{container:!0,spacing:2},r.a.createElement(Ie,{name:"firstname",label:"Firstname",value:S,onChange:N,half:!0}),r.a.createElement(Ie,{name:"lastname",label:"Lastname",value:w,onChange:N,half:!0}),r.a.createElement(Ie,{name:"email",label:"Email Address",value:x,onChange:N,type:"email"})),r.a.createElement(P.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:E.submit},"UPDATE")))))},De=a(254),Fe=function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:n=t.sent,r=n.data,a({type:"FETCH_MESSAGES",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("[ERROR]-redux-action-chat-message: ",t.t0.name);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Me=function(e){return function(){var t=Object(O.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:n=t.sent,r=n.data,a({type:"FETCH_CONVERSATION",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("[ERROR][REDUX-ACTION-GET-CONVERSATION]",t.t0.name);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Le=function(e){return{type:"SET_CONVERSATION_WITH",payload:e}},Pe=a(52),Ue=a.n(Pe),We=a(125),He=a.n(We),Ve=Ue()("localhost:5555"),Be=Object(b.a)({mainContainer:{overflowY:"auto",backgroundColor:"#fda01d"},purple:{backgroundColor:fe.a[500]},Label:{fontWeight:"bold",display:"flex"}}),Je=function(){var e,t=Be(),a=Object(l.b)(),o=Object(l.c)((function(e){return e.conversations})),c=Object(l.c)((function(e){return e.conversation_data})),i=JSON.parse(localStorage.getItem("profile")),s=null===i||void 0===i||null===(e=i.result)||void 0===e?void 0:e._id,u=(null===c||void 0===c||c.conversation_id,Object(n.useState)({conversation_id:"",conversation_name:""})),d=Object(p.a)(u,2),m=d[0],f=d[1];Object(n.useEffect)((function(){0===m.conversation_id&&0===m.conversation_id.length&&void 0===m.conversation_id||(a(Fe(m.conversation_id)),a({type:"SET_CONVERSATION",payload:{conversation_id:m.conversation_id,conversation_name:m.conversation_name}}),a(Le(o.name)))}),[m]);var v=Object(n.useState)(0),b=Object(p.a)(v,2),E=b[0],h=b[1];Object(n.useEffect)((function(){0!==E&&(Ve.on("updateMessage",(function(e){h(e.updatingFlag)})),Ve.on("updateConversation",(function(e){h(e.updatingFlag)}))),a(Me(s)),a(Fe(m.conversation_id))}),[E]);return(null===o||void 0===o?void 0:o.length)?r.a.createElement(g.a,{container:!0,className:t.mainContainer,component:ae.a},r.a.createElement(L.a,{className:t.Label}," My Inbox "),o.map((function(e){return r.a.createElement(g.a,{container:!0,item:!0,lg:12,md:12,sm:12},r.a.createElement(He.a,null),r.a.createElement(De.a,{component:"button",onClick:function(){return t={conversation_id:e._id,conversation_name:e.name},void(0===m.conversation_id&&0===m.conversation_id.length&&void 0===m.conversation_id||f(Object(te.a)(Object(te.a)({},m),t)));var t}},r.a.createElement(L.a,null," ",e.name)))}))):r.a.createElement(D.a,null)},ze=(a(206),function(e){var t,a=e.message,o=Object(n.useState)(""),c=Object(p.a)(o,2),l=c[0],i=c[1],s=Object(n.useState)({color:""}),u=Object(p.a)(s,2),d=u[0],m=u[1],f=JSON.parse(localStorage.getItem("profile")),v=null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t._id;return Object(n.useEffect)((function(){a.owner===v?(i("flex-start"),m(Object(te.a)(Object(te.a)({},d),{},{color:"#2534da"}))):(i("flex-end"),m(Object(te.a)(Object(te.a)({},d),{},{color:"#61658f"})))}),[a]),r.a.createElement(g.a,{style:{display:"flex",justifyContent:l},item:!0,xs:12,sm:12,md:12},r.a.createElement(L.a,{className:"messageBox",style:{background:d.color}},a.content))}),Ge=a(126),Ke=Object(b.a)({scrollFeed:{height:200,backgroundColor:"#e0e0e0"},Label:{fontWeight:"bold",display:"flex",padding:"11px 11px 11px 11px"}}),Xe=Ue()("localhost:5555"),qe=function(){var e,t,a,o=Ke(),c=Object(l.b)(),i=Object(l.c)((function(e){return e.messages})),s=Object(l.c)((function(e){return e.conversation_data}));Object(n.useEffect)((function(){void 0!==s.conversation_id&&c(Fe(s.conversation_id))}),[]);var u=Object(n.useState)(),d=Object(p.a)(u,2),m=d[0],f=d[1];Object(n.useEffect)((function(){Xe.on("typing-activated",(function(e){f(e),console.log("[MESSAGE] socket.on.typing-activated-data: ",e)}))}),[m]);var v=Object(n.useState)(0),b=Object(p.a)(v,2),E=b[0],h=b[1];return Object(n.useEffect)((function(){void 0!==s.conversation_id&&c(Fe(s.conversation_id)),Xe.on("updateMessage",(function(e){console.log("[MESSAGE]: socket-on-updateMessage ",e),h(e)}))}),[E]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{className:o.Label},"CONVERSATION WITH : \xa0\xa0",(null===s||void 0===s||null===(e=s.conversation_with)||void 0===e||null===(t=e.name)||void 0===t?void 0:t.length)?null===s||void 0===s||null===(a=s.conversation_with)||void 0===a?void 0:a.name:s.conversation_name),(null===i||void 0===i?void 0:i.length)?r.a.createElement(Ge.a,{className:o.scrollFeed},i.map((function(e){return r.a.createElement(g.a,{key:e._id,container:!0,item:!0,xs:12,sm:12,md:12},r.a.createElement(ze,{message:e}))}))):r.a.createElement(D.a,null))},Ye=Object(b.a)({mainContainer:{display:"flex",flexDirection:"column",overflowY:"auto",backgroundColor:"#fda01d",padding:"11px 11px 11px 11px"},userLink:{display:"flex"},Label:{display:"flex",fontWeight:"bold"}}),Qe=function(){var e=Ye(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.users}));Object(l.c)((function(e){return e.conversation_data}));Object(n.useEffect)((function(){t(function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("/users");case 3:a=e.sent,n=a.data,t({type:"FETCH_USERS",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var o=Object(n.useState)({name:"",id:""}),c=Object(p.a)(o,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){0===i.length&&void 0===i||(t(function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"RESET_CONVERSATION_DATA"})}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(Le(i)),t(function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"RESET_MESSAGES"})}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[i]),(null===a||void 0===a?void 0:a.length)?r.a.createElement(g.a,{container:!0,className:e.mainContainer,component:ae.a},r.a.createElement(L.a,{className:e.Label},"List of users"),a.map((function(t){return r.a.createElement(De.a,{className:e.userLink,component:"button",onClick:function(){return s({name:t.firstname,id:t._id})}},r.a.createElement(L.a,null," ",t.firstname,"  "))}))):r.a.createElement(D.a,null)},Ze=Ue()("localhost:5555"),$e=Object(b.a)({sendButton:{display:"flex",justifyContent:"flex-end"},messageTextfield:{margin:"22px 11px 11px 11px"}}),et=function(){var e,t=$e(),a=Object(l.b)(),o=JSON.parse(localStorage.getItem("profile")),c=null===o||void 0===o||null===(e=o.result)||void 0===e?void 0:e._id,i=Object(l.c)((function(e){return e.conversation_data}));console.log("conversation_data: ",i);var s=Object(n.useState)({owner:"",conversationId:"",content:""}),u=Object(p.a)(s,2),d=u[0],m=u[1],f=Object(n.useState)(0),v=Object(p.a)(f,2),g=v[0],b=v[1],E=Object(n.useState)({conversation:{participants:[],name:"",lastMessageId:333},messages:{owner:"",conversationId:"",content:""}}),j=Object(p.a)(E,1)[0],y=Object(n.useState)(""),S=Object(p.a)(y,2),w=S[0],N=S[1],_=null===i||void 0===i?void 0:i.conversation_id,C=function(){var e=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0===i.conversation_with?(m(Object(te.a)(Object(te.a)({},d),{},{content:t})),N((function(e){return t})),console.log("myMessagemyMessagemyMessage ",w)):N(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){if(e.preventDefault(),N(""),void 0===(null===i||void 0===i?void 0:i.conversation_with))a((o=Object(te.a)(Object(te.a)({},d),{},{owner:c,conversationId:null===i||void 0===i?void 0:i.conversation_id}),function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r=o,x.post("/chat/messages",r);case 3:a=e.sent,n=a.data,t({type:"CREATE_MESSAGE",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("action-createMessage error: ",e.t0);case 11:case"end":return e.stop()}var r}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),Ze.emit("sendMessage",{type:"message"},(function(){console.log("[CHAT]: socket.io. emit/sendMessage")}));else if(void 0!==(null===i||void 0===i?void 0:i.conversation_with)){var t,n;a((r=Object(te.a)(Object(te.a)({},j),{},{conversation:{participants:[c,null===i||void 0===i||null===(t=i.conversation_with)||void 0===t?void 0:t.id],name:"".concat(null===i||void 0===i||null===(n=i.conversation_with)||void 0===n?void 0:n.name)},messages:{owner:c,content:w}}),function(){var e=Object(O.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("conversationAndMessageeee: ",r),e.prev=1,e.next=4,o=r,x.post("/chat/conversations",o);case 4:a=e.sent,n=a.data,t({type:"CREATE_CONVERSATION_AND_MESSAGE",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("[ERROR][REDUX-ACTION-CREATE-CONVERSATION-AND-MESSAGE]",e.t0.name);case 12:case"end":return e.stop()}var o}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),Ze.emit("sendMessage",{type:"conversation-message"})}else console.log("[CHAT]: do nothing...");var r,o}},r.a.createElement(ne.a,{className:t.messageTextfield,name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:2,onChange:function(e){return C(e.target.value)},onKeyPress:function(){b((function(e){return e+1})),console.log("[INPUT] handleKeyPress: ",g),Ze.emit("typing",{userId:c,conversationId:_}),Ze.on("typing-activated",(function(e){console.log("server response: ",e)}))},value:w}),r.a.createElement(P.a,{type:"submit",className:t.sendButton,color:"primary",variant:"contained"}," Send "))},tt=Object(b.a)({messageBody:{padding:10},controller:{padding:10},messageTextfield:{margin:"22px 11px 11px 11px"},messagePaper:{paddingTop:30},container:{display:"flex",flexDirection:"row"}}),at=function(){var e,t=tt(),a=JSON.parse(localStorage.getItem("profile")),o=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e._id,c=Object(l.b)(),i=Object(l.c)((function(e){return e.conversations}));return Object(n.useEffect)((function(){c(Me(o))}),[]),r.a.createElement(v.a,{in:!0},r.a.createElement(u.a,null,r.a.createElement(g.a,{className:t.container,container:!0},r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12,lg:4,className:t.userList},r.a.createElement(Qe,null)),r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12,lg:4,className:t.userList},r.a.createElement(Je,null)),r.a.createElement(g.a,{item:!0,xs:12,sm:12,md:12,lg:4,className:t.controller},null!==i?r.a.createElement(qe,null):null,r.a.createElement(et,null)))))},nt=function(){return r.a.createElement(d.a,null,r.a.createElement(u.a,{maxWidth:"lg"},r.a.createElement(ge,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:se}),r.a.createElement(m.a,{path:"/chat",exact:!0,component:at}),r.a.createElement(m.a,{path:"/auth",exact:!0,component:Ce}),r.a.createElement(m.a,{path:"/user/profile",exact:!0,component:Re}))))},rt=(a(207),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(te.a)({},null===t||void 0===t?void 0:t.data))),Object(te.a)(Object(te.a)({},e),{},{authData:t.data,loading:!1,errors:null});case j:return localStorage.clear(),Object(te.a)(Object(te.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}}),ot=a(127),ct=(a(208),Object(i.c)({auth:rt,conversations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONVERSATION":return t.payload;case j:return[];default:return e}},conversation_data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONVERSATION":return t.payload;case"SET_CONVERSATION_WITH":return console.log("SET_CONVERSATION_WITH::::::: ",e,"   ",t),Object(te.a)(Object(te.a)({},e),{},{conversation_with:t.payload});case"RESET_CONVERSATION_DATA":return console.log("RESET_CONVERSATION_DATA::::::: ",e,"   ",t),[];case j:return[];default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MESSAGES":return t.payload;case"RESET_MESSAGES":case j:return[];default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(ot.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));case j:return[];default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS":return t.payload;case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}}})),lt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,it=Object(i.e)(ct,lt(Object(i.a)(s.a)));c.a.render(r.a.createElement(l.a,{store:it},r.a.createElement(nt,null)),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.0b9ff1b4.chunk.js.map