(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{135:function(e,t,a){e.exports=a(204)},202:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(9),i=a(36),s=a(112),u=a(245),d=a(34),m=a(16),p=a(14),v=a(252),f=a(244),g=a(6),h=a.n(g),b=a(11),E="LOGOUT",O=a(113),y=a.n(O).a.create({baseURL:"https://kamonrarara.herokuapp.com"});y.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var S=function(e){return y.patch("/posts/".concat(e,"/likePost"))},j=function(e,t){return y.patch("/posts/".concat(e),t)},x=function(e){return y.delete("/posts/".concat(e))},w=function(e){return y.post("/users/signin",e)},C=function(e){return y.post("/users/signup",e)},N=function(e,t){return y.patch("/users/profile/".concat(e),t)},_=function(e){return y.get("/chat/conversations/".concat(e))},k=function(e){return y.get("/chat/messages/".concat(e))},I=function(e){return function(){var t=Object(b.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o=e,y.post("/posts",o);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var o}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var a=Object(b.a)(h.a.mark((function a(n){var r,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j(e,t);case 3:r=a.sent,o=r.data,n({type:"UPDATE",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},R=a(243),A=a(238),F=a(239),D=a(206),L=a(240),M=a(241),P=a(242),H=a(118),U=a.n(H),B=a(120),W=a.n(B),V=a(119),G=a.n(V),J=a(79),z=a.n(J),Y=a(114),X=a.n(Y),q=a(234),K=Object(q.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Q=a(41),Z=a.n(Q),$=function(e){var t,a,o,c,i,s=e.post,u=e.setCurrentId;console.log("[POST] ",s);var d=Object(l.b)(),m=K(),v=JSON.parse(localStorage.getItem("profile")),f=Object(n.useState)(!1),g=Object(p.a)(f,2),E=(g[0],g[1],function(){var e;return(null===s||void 0===s||null===(e=s.likes)||void 0===e?void 0:e.length)>0?s.likes.find((function(e){var t,a;return e===((null===v||void 0===v||null===(t=v.result)||void 0===t?void 0:t.googleId)||(null===v||void 0===v||null===(a=v.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{fontSize:"small"}),"\xa0",s.likes.length>2?"You and ".concat(s.likes.length-1," others"):"".concat(s.likes.length," like").concat(s.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{fontSize:"small"}),"\xa0",s.likes.length," ",1===s.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{fontSize:"small"}),"\xa0Like")});return r.a.createElement(A.a,{className:m.card},r.a.createElement(F.a,{className:m.media,image:s.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:s.title}),r.a.createElement("div",{className:m.overlay},r.a.createElement(D.a,{variant:"h6"},s.owner),r.a.createElement(D.a,{variant:"body2"},X()(s.createdAt).fromNow())),((null===v||void 0===v||null===(t=v.result)||void 0===t?void 0:t.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===v||void 0===v||null===(a=v.result)||void 0===a?void 0:a._id)===(null===s||void 0===s?void 0:s.creator))&&r.a.createElement("div",{className:m.overlay2},r.a.createElement(L.a,{onClick:function(){return u(s._id)},style:{color:"white"},size:"small"},r.a.createElement(G.a,{fontSize:"default"}))),r.a.createElement("div",{className:m.details},r.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"h2"},null===s||void 0===s||null===(o=s.tags)||void 0===o?void 0:o.map((function(e){return"#".concat(e," ")})))),r.a.createElement(D.a,{className:m.title,gutterBottom:!0,variant:"h5",component:"h2"},s.title),r.a.createElement(M.a,null,r.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},s.message)),r.a.createElement(P.a,{className:m.cardActions},r.a.createElement(L.a,{size:"small",color:"primary",disabled:!(null===v||void 0===v?void 0:v.result),onClick:function(){var e;d((e=s._id,function(){var t=Object(b.a)(h.a.mark((function t(a){var n,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,S(e,null===n||void 0===n||n.token);case 4:r=t.sent,o=r.data,a({type:"LIKE",payload:o}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()))}},r.a.createElement(E,null)),((null===v||void 0===v||null===(c=v.result)||void 0===c?void 0:c.googleId)===(null===s||void 0===s?void 0:s.creator)||(null===v||void 0===v||null===(i=v.result)||void 0===i?void 0:i._id)===(null===s||void 0===s?void 0:s.creator))&&r.a.createElement(L.a,{size:"small",color:"secondary",onClick:function(){return d((e=s._id,function(){var t=Object(b.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(W.a,{fontSize:"small"})," Delete")))},ee=Object(q.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),te=function(e){var t=e.setCurrentId,a=ee(),n=Object(l.c)((function(e){return e.posts}));return console.log("[POSTS] useSelector posts: ",n),n.length?r.a.createElement(f.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3},n.map((function(e){return r.a.createElement(f.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement($,{post:e,setCurrentId:t}))}))):r.a.createElement(R.a,null)},ae=a(8),ne=a(128),re=a(251),oe=a(121),ce=a.n(oe),le=Object(q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ie=function(e){var t,a=e.currentId,o=e.setCurrentId,c=Object(n.useState)({title:"",owner:"",message:"",tags:"",selectedFile:""}),i=Object(p.a)(c,2),s=i[0],u=i[1],d=Object(l.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),m=Object(l.b)(),v=le(),f=JSON.parse(localStorage.getItem("profile"));console.log("[FORM]"),console.log("-[FORM]/post/useSelector-redux: ",d),console.log("-[FORM]/postData/useState: ",s),Object(n.useEffect)((function(){d&&u(d)}),[d]);var g=function(){o(0),u({title:"",owner:"",message:"",tags:"",selectedFile:""})},E=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(m(I(Object(ae.a)(Object(ae.a)({},s),{},{owner:null===f||void 0===f||null===(n=f.result)||void 0===n?void 0:n.firstname}))),g()):(m(T(a,Object(ae.a)(Object(ae.a)({},s),{},{owner:null===f||void 0===f||null===(r=f.result)||void 0===r?void 0:r.firstname}))),g());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t._id)?r.a.createElement(ne.a,{className:v.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(v.root," ").concat(v.form),onSubmit:E},r.a.createElement(D.a,{variant:"h6"},a?'Editing "'.concat(d.title,'"'):"Creating a Memory"),r.a.createElement(re.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(ae.a)(Object(ae.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(re.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(ae.a)(Object(ae.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(re.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(ae.a)(Object(ae.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:v.fileInput},r.a.createElement(ce.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(ae.a)(Object(ae.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(L.a,{className:v.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(L.a,{variant:"contained",color:"secondary",size:"small",onClick:g,fullWidth:!0},"Clear"))):r.a.createElement(ne.a,{className:v.paper},r.a.createElement(D.a,{variant:"h6",align:"center"},"Please Sign In to create your own memories and like other's memories."))},se=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(l.b)();console.log("[HOME]: I will return the [POSTS] and [FORM] as jsx"),console.log("-[HOME]: useState | setCurrentId: ",a);Object(l.c)((function(e){return e.posts}));return Object(n.useEffect)((function(){c(function(){var e=Object(b.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_POSTS",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("client>src>action>posts>getPosts: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),console.log("[HOME]: useEffect | getPosts/fetchAPI | setCurrentId: ",a)}),[a,c]),r.a.createElement(v.a,{in:!0},r.a.createElement(u.a,null,r.a.createElement(f.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:0},r.a.createElement(f.a,{item:!0,xs:12,sm:7},r.a.createElement(te,{setCurrentId:o})),r.a.createElement(f.a,{item:!0,xs:12,sm:4},r.a.createElement(ie,{currentId:a,setCurrentId:o})))))},ue=a(247),de=a(248),me=a(253),pe=a(122),ve=a(246),fe=Object(q.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none",fontSize:"16px"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(ve.a[500]),backgroundColor:ve.a[500]}}})),ge=a(21);console.log("HISTORY JS");Object(ge.a)();var he=function(e){return function(){var t=Object(b.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:n=t.sent,r=n.data,a({type:"FETCH_MESSAGES",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("ERROR: ",t.t0.name);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},be=function(e){return function(){var t=Object(b.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o=e,y.post("/chat/messages",o);case 3:n=t.sent,r=n.data,a({type:"CREATE_MESSAGE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("action-createMessage error: ",t.t0);case 11:case"end":return t.stop()}var o}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Ee=function(e){return function(){var t=Object(b.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("conversationAndMessageeee: ",e),t.prev=1,t.next=4,o=e,y.post("/chat/conversations",o);case 4:n=t.sent,r=n.data,a({type:"CREATE_CONVERSATION_AND_MESSAGE",payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("[ERROR][REDUX-ACTION-CREATE-CONVERSATION-AND-MESSAGE]",t.t0.name);case 12:case"end":return t.stop()}var o}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},Oe=function(e){return{type:"SET_CONVERSATION_WITH",payload:e}};Z()("localhost:5555");var ye,Se=Object(q.a)({table:{minWidth:650},chatSection:{width:"100%",height:"70vh"},headBG:{backgroundColor:"#e0e0e0"},borderLeft500:{borderLeft:"1px solid #e0e0e0"},borderRight500:{borderRight:"1px solid #e0e0e0"},messageArea:{height:"70vh",overflowY:"auto"},gridList:{width:300,height:450},mainContainer:{overflowY:"auto",backgroundColor:"#fda01d"},purple:{backgroundColor:ve.a[500]}}),je=function(){var e=Se(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.conversations}));JSON.parse(localStorage.getItem("profile"));console.log("[CONVERSATION] conversation:",a);var o=Object(n.useState)({conversation_id:"",conversation_name:""}),c=Object(p.a)(o,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){0===i.conversation_id&&0===i.conversation_id.length&&void 0===i.conversation_id||(t(he(i.conversation_id)),t({type:"SET_CONVERSATION",payload:{conversation_id:i.conversation_id,conversation_name:i.conversation_name}}),t(Oe(a.name)))}),[i]),(null===a||void 0===a?void 0:a.length)?r.a.createElement(v.a,{in:!0},r.a.createElement(u.a,null,r.a.createElement(f.a,{container:!0,className:e.mainContainer,component:ne.a},r.a.createElement(D.a,null," INBOX  "),a.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{variant:"contained",color:"primary",onClick:function(){return s({conversation_id:e._id,conversation_name:e.name})}},r.a.createElement(D.a,null," ",e.name,"  ")))}))))):r.a.createElement(R.a,null)},xe=Object(q.a)({table:{minWidth:650},chatSection:{width:"100%",height:"70vh"},headBG:{backgroundColor:"#e0e0e0"},borderLeft500:{borderLeft:"1px solid #e0e0e0"},borderRight500:{borderRight:"1px solid #e0e0e0"},messageArea:{height:"70vh",overflowY:"auto"},gridList:{width:300,height:450},mainContainer:{display:"flex",height:"53vh",overflowY:"auto",backgroundColor:"#fda01d"},purple:{backgroundColor:ve.a[500]},messsages:{height:600,width:400}}),we=function(){var e,t,a,o=xe(),c=Object(l.b)(),i=Object(l.c)((function(e){return e.messages})),s=Object(l.c)((function(e){return e.conversation_data}));console.log("[MESSAGES]: conversation_id",s.conversation_id),Object(n.useEffect)((function(){console.log("[MESSAGES]: useEffect 1",s.conversation_id,"\n",s.conversation_name),void 0===s.conversation_id||0===s.conversation_id.length||(c(he(s.conversation_id)),h())}),[]);var u=Object(n.useState)(0),d=Object(p.a)(u,2),m=d[0],v=d[1];Z()("localhost:5555").on("updateMessage",(function(e){v(e.kamon)})),Object(n.useEffect)((function(){void 0===s.conversation_id||0===s.conversation_id.length||(c(he(s.conversation_id)),h())}),[m]);var g=Object(n.useRef)(null),h=function(){g.current.scrollIntoView({behavior:"smooth"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,null,"CONVERSATION WITH : \xa0\xa0 ",(null===s||void 0===s||null===(e=s.conversation_with)||void 0===e||null===(t=e.name)||void 0===t?void 0:t.length)?null===s||void 0===s||null===(a=s.conversation_with)||void 0===a?void 0:a.name:s.conversation_name),(null===i||void 0===i?void 0:i.length)?r.a.createElement(f.a,{container:!0,className:o.mainContainer,component:ne.a},i.map((function(e){return r.a.createElement(f.a,{className:o.borderRight500,key:e._id,container:!0,item:!0,xs:12,sm:12,md:12},"\xa0\xa0",r.a.createElement(D.a,null,e.content))})),r.a.createElement("div",{ref:g})):r.a.createElement(R.a,null))},Ce=function(e,t){return function(){var a=Object(b.a)(h.a.mark((function a(n){var r,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N(e,t);case 3:r=a.sent,o=r.data,n({type:"UPDATE",payload:o}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},Ne=Object(q.a)({mainContainer:{overflowY:"auto",backgroundColor:"#fda01d",align:"left"}}),_e=function(){var e=Ne(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.users}));Object(n.useEffect)((function(){t(function(){var e=Object(b.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("/users");case 3:a=e.sent,n=a.data,t({type:"FETCH_USERS",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var o=Object(n.useState)({name:"",id:""}),c=Object(p.a)(o,2),i=c[0],s=c[1];return console.log("[USERLIST] participants: ",i),console.log("[USERLIST] userlist: ",a),Object(n.useEffect)((function(){0===i.length&&void 0===i||(t(Oe(i)),t(function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"RESET_MESSAGES"})}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[i]),(null===a||void 0===a?void 0:a.length)?r.a.createElement(f.a,{container:!0,className:e.mainContainer,component:ne.a},r.a.createElement(D.a,null," USER LIST  "),a.map((function(e){return r.a.createElement(f.a,{item:!0,lg:12,md:12,sm:12},r.a.createElement(L.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){return s({name:e.firstname,id:e._id})}},r.a.createElement(D.a,null," ",e.firstname,"  ")))}))):r.a.createElement(R.a,null)};ye=Z()("localhost:5555");var ke=Object(q.a)({table:{minWidth:650},chatSection:{width:"100%",height:"70vh"},headBG:{backgroundColor:"#e0e0e0"},borderLeft500:{borderLeft:"1px solid #e0e0e0"},borderRight500:{borderRight:"1px solid #e0e0e0"},messageArea:{height:"70vh",overflowY:"auto"},gridList:{width:300,height:450},sendButton:{display:"flex",justifyContent:"flex-end"},messageBody:{padding:10,height:666},userList:{padding:10,height:666,alignItems:"right"},messageTextfield:{paddingBottom:10},messagePaper:{paddingTop:30}}),Ie=function(){var e,t=ke(),a=JSON.parse(localStorage.getItem("profile")),o=null===a||void 0===a||null===(e=a.result)||void 0===e?void 0:e._id,c=Object(l.b)(),i=Object(l.c)((function(e){return e.conversations})),s=Object(l.c)((function(e){return e.conversation_data})),d=Object(n.useState)({owner:"",conversationId:"",content:""}),m=Object(p.a)(d,2),g=m[0],E=m[1],O=Object(n.useState)({conversation:{participants:[],name:"",lastMessageId:333},messages:{owner:"",conversationId:"",content:""}}),y=Object(p.a)(O,2),S=y[0],j=(y[1],Object(n.useState)("")),x=Object(p.a)(j,2),w=x[0],C=x[1];console.log("[CHAT] conversation/participants: ",i),Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(b.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:n=t.sent,r=n.data,a({type:"FETCH_CONVERSATION",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("[ERROR][REDUX-ACTION-GET-CONVERSATION]",t.t0.name);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(o))}),[]);var N=function(){var e=Object(b.a)(h.a.mark((function e(t){var n,r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),void 0!==(null===s||void 0===s?void 0:s.conversation_with)){e.next=7;break}return c(be(Object(ae.a)(Object(ae.a)({},g),{},{owner:o,conversationId:null===s||void 0===s?void 0:s.conversation_id}))),e.next=5,ye.emit("sendMessage",{conversationId:s.conversation_id},(function(){console.log("[CHAT]: socket.io. emit/sendMessage")}));case 5:e.next=8;break;case 7:void 0!==(null===s||void 0===s?void 0:s.conversation_with)?c(Ee(Object(ae.a)(Object(ae.a)({},S),{},{conversation:{participants:[o,null===s||void 0===s||null===(n=s.conversation_with)||void 0===n?void 0:n._id],name:"".concat(null===a||void 0===a||null===(r=a.result)||void 0===r?void 0:r.firstname," / ").concat(null===s||void 0===s||null===(l=s.conversation_with)||void 0===l?void 0:l.name)},messages:{owner:o,content:w}}))):console.log("[CHAT]: do nothing...");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{in:!0},r.a.createElement(u.a,null,r.a.createElement(f.a,{container:!0,justify:"space-between",alignItems:"stretch"},r.a.createElement(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,component:ne.a,className:t.messageBody},r.a.createElement(_e,null)),r.a.createElement(f.a,{item:!0,xs:3,sm:3,md:3,lg:3,component:ne.a,className:t.userList},r.a.createElement(je,null)),r.a.createElement(f.a,{item:!0,xs:6,sm:6,md:6,lg:6,component:ne.a,className:t.messageBody},null!==i?r.a.createElement(we,null):null,r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(t.root," ").concat(t.form),onSubmit:N},r.a.createElement(re.a,{className:t.messageTextfield,name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:2,onChange:function(e){return t=e.target.value,void(void 0===s.conversation_with?(E(Object(ae.a)(Object(ae.a)({},g),{},{content:t})),console.log("messsageData: ",g)):C(t));var t}}),r.a.createElement(L.a,{type:"submit",className:t.sendButton,color:"primary",variant:"contained"}," Send "))))))},Te=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(l.b)(),i=Object(m.g)(),s=Object(m.f)(),u=fe(),v=function(){c({type:E}),s.push("/auth"),o(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(pe.a)(e).exp<(new Date).getTime()&&v());o(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(ue.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:u.brandContainer},r.a.createElement(D.a,{component:d.b,to:"/",className:u.heading,variant:"h2",align:"center"},"Home")," \xa0",(null===a||void 0===a?void 0:a.result)&&r.a.createElement("div",null,r.a.createElement(D.a,{component:d.b,to:"/user/profile",className:u.heading,variant:"h2",align:"center"},"Profile"),"\xa0",r.a.createElement(D.a,{component:d.b,to:"/chat",className:u.heading,variant:"h2",align:"center"},"Messenger"))),r.a.createElement(de.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(me.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.firstname,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.firstname.charAt(0)),r.a.createElement(D.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.firstname),r.a.createElement(L.a,{variant:"contained",className:u.logout,color:"secondary",onClick:v},"Logout")):r.a.createElement(L.a,{component:d.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},Re=a(50),Ae=(a(201),a(125)),Fe=a.n(Ae),De=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Le=a(249),Me=a(250),Pe=a(123),He=a.n(Pe),Ue=a(124),Be=a.n(Ue),We=function(e){var t=e.name,a=e.handleChange,n=e.label,o=e.half,c=e.autoFocus,l=e.type,i=e.handleShowPassword;return r.a.createElement(f.a,{item:!0,xs:12,sm:o?6:12},r.a.createElement(re.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:l,InputProps:"password"===t?{endAdornment:r.a.createElement(Le.a,{position:"end"},r.a.createElement(Me.a,{onClick:i},"password"===l?r.a.createElement(He.a,null):r.a.createElement(Be.a,null)))}:null}))},Ve={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ge=function(){var e=Object(n.useState)(Ve),t=Object(p.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(p.a)(c,2),s=i[0],d=i[1],v=Object(l.b)(),g=Object(m.f)(),E=De(),O=Object(n.useState)(!1),y=Object(p.a)(O,2),S=y[0],j=y[1],x=function(e){return o(Object(ae.a)(Object(ae.a)({},a),{},Object(Re.a)({},e.target.name,e.target.value)))};return r.a.createElement(u.a,{component:"main",maxWidth:"xs"},r.a.createElement(ne.a,{className:E.paper,elevation:3},r.a.createElement(me.a,{className:E.avatar},r.a.createElement(Fe.a,null)),r.a.createElement(D.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:E.form,onSubmit:function(e){var t,n;e.preventDefault(),v(s?(t=a,n=g,function(){var e=Object(b.a)(h.a.mark((function e(a){var r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:r=e.sent,o=r.data,a({type:"AUTH",data:o}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(b.a)(h.a.mark((function a(n){var r,o;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w(e);case 3:r=a.sent,o=r.data,n({type:"AUTH",data:o}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,g))}},r.a.createElement(f.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(We,{name:"firstName",label:"Firstname",handleChange:x,autoFocus:!0,half:!0}),r.a.createElement(We,{name:"lastName",label:"Lastname",handleChange:x,half:!0})),r.a.createElement(We,{name:"email",label:"Email Address",handleChange:x,type:"email"}),r.a.createElement(We,{name:"password",label:"Password",handleChange:x,type:S?"text":"password",handleShowPassword:function(){return j(!S)}}),s&&r.a.createElement(We,{name:"confirmPassword",label:"Repeat Password",handleChange:x,type:"password"})),r.a.createElement(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:E.submit},s?"Sign Up":"Sign In"),r.a.createElement(f.a,{container:!0,justify:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(L.a,{onClick:function(){o(Ve),d((function(e){return!e})),j(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},Je=Object(q.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,1,2),float:"right"},googleButton:{marginBottom:e.spacing(2)}}})),ze=function(e){var t=e.name,a=e.onChange,n=e.label,o=e.half,c=e.autoFocus,l=e.type,i=e.value;return r.a.createElement(f.a,{item:!0,xs:12,sm:o?6:12},r.a.createElement(re.a,{type:l,name:t,defaultValue:i,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c}))},Ye={firstname:"",lastname:"",email:""},Xe=function(){var e,t,a,o,c=Object(n.useState)(Ye),i=Object(p.a)(c,2),s=i[0],d=i[1],g=Object(l.b)(),E=(Object(m.f)(),Je()),O=JSON.parse(localStorage.getItem("profile")),y=null===O||void 0===O||null===(e=O.result)||void 0===e?void 0:e._id,S=null===O||void 0===O||null===(t=O.result)||void 0===t?void 0:t.email,j=null===O||void 0===O||null===(a=O.result)||void 0===a?void 0:a.firstname,x=null===O||void 0===O||null===(o=O.result)||void 0===o?void 0:o.lastname;console.log("[PROFILE] currentUserId: ",y),console.log("[PROFILE] handleSubmit/localStorage-email: ",S),console.log("[PROFILE] handleSubmit/localStorage-firstname: ",j),console.log("[PROFILE] handleSubmit/localStorage-lastname: ",x);var w=function(e){return d(Object(ae.a)(Object(ae.a)({},s),{},Object(Re.a)({},e.target.name,e.target.value)))},C=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g(Ce(y,s));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.a,{in:!0},r.a.createElement(u.a,{component:"main",maxWidth:"xs"},r.a.createElement(ne.a,{className:E.paper,elevation:3},r.a.createElement(D.a,{component:"h1",variant:"h5"}," Update Profile "),r.a.createElement("form",{className:E.form,onSubmit:C},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(ze,{name:"firstname",label:"Firstname",value:j,onChange:w,half:!0}),r.a.createElement(ze,{name:"lastname",label:"Lastname",value:x,onChange:w,half:!0}),r.a.createElement(ze,{name:"email",label:"Email Address",value:S,onChange:w,type:"email"})),r.a.createElement(L.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:E.submit},"UPDATE")))))},qe=function(){return r.a.createElement(d.a,null,r.a.createElement(u.a,{maxWidth:"lg"},r.a.createElement(Te,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:se}),r.a.createElement(m.a,{path:"/chat",exact:!0,component:Ie}),r.a.createElement(m.a,{path:"/auth",exact:!0,component:Ge}),r.a.createElement(m.a,{path:"/user/profile",exact:!0,component:Xe}))))},Ke=(a(202),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(ae.a)({},null===t||void 0===t?void 0:t.data))),Object(ae.a)(Object(ae.a)({},e),{},{authData:t.data,loading:!1,errors:null});case E:return localStorage.clear(),Object(ae.a)(Object(ae.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}}),Qe=a(126),Ze=(a(203),Object(i.c)({auth:Ke,conversations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONVERSATION":return t.payload;case E:return[];default:return e}},conversation_data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONVERSATION":return t.payload;case"SET_CONVERSATION_WITH":return Object(ae.a)(Object(ae.a)({},e),{},{conversation_with:t.payload});case E:return[];default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MESSAGES":return t.payload;case"RESET_MESSAGES":case E:return[];default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(Qe.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));case E:return[];default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS":return t.payload;case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}}})),$e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,et=Object(i.e)(Ze,$e(Object(i.a)(s.a)));c.a.render(r.a.createElement(l.a,{store:et},r.a.createElement(qe,null)),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.68ced66b.chunk.js.map