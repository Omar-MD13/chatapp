(this.webpackJsonpwhatsapp_clone=this.webpackJsonpwhatsapp_clone||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(27),r=a.n(n),i=(a(67),a(7)),l=a(28),o=a(11),j=(a(68),a(102)),d=a(47),u=a.n(d),b=a(100),m=a(57),O=a.n(m),h=a(22),p=function(e){return{type:"SET_CURRENT_USER",userID:e.userID,email:e.email,username:e.username,avatarURL:e.avatarURL,loggedIn:e.isLoggedIn}},g=a(23),x=g.a.initializeApp({apiKey:"AIzaSyAyDiV8QGzUjik-YK1LEmcGjYLxuCtDX7M",authDomain:"whatsappomar-clone.firebaseapp.com",projectId:"whatsappomar-clone",storageBucket:"whatsappomar-clone.appspot.com",messagingSenderId:"43192057898",appId:"1:43192057898:web:430e495509d1cbfc6a4353"}).firestore(),v=g.a.auth(),f=new g.a.auth.GoogleAuthProvider,_=g.a.storage(),N=x,I=a(3);var w=function(){var e=Object(h.c)((function(e){return e})).currentUserInfo,t=Object(h.b)(),a=Object(c.useState)([]),s=Object(i.a)(a,2),n=s[0],r=s[1],o=Object(c.useState)(""),d=Object(i.a)(o,2),m=d[0],g=d[1],x=Object(c.useState)(!1),v=Object(i.a)(x,2),f=v[0],_=v[1],w=Object(c.useState)(!1),D=Object(i.a)(w,2),S=D[0],L=D[1],y=Object(c.useState)(!1),C=Object(i.a)(y,2);return C[0],C[1],Object(c.useEffect)((function(){N.collection("allUsers").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(c.useEffect)((function(){return window.addEventListener("click",(function(){_(!1)})),function(){window.removeEventListener("click",(function(){_(!1)}))}})),Object(I.jsxs)("div",{className:"userList",children:[Object(I.jsxs)("div",{className:"userList__header",children:[Object(I.jsxs)("div",{className:"header__avatar-name",children:[Object(I.jsx)("span",{className:"avatar-name__avatar",children:Object(I.jsx)(j.a,{type:"button",alt:e.username,src:e.avatar?e.avatar:"/static/images/avatar/2.jpg"})}),Object(I.jsx)("span",{className:"avatar-name__name",children:S?Object(I.jsxs)("form",{action:"",className:"chngUser",children:[Object(I.jsx)("input",{type:"text",onChange:function(e){return g(e.target.value)},value:m}),Object(I.jsx)("button",{type:"submit",onClick:function(a){a.preventDefault(),m.length>0&&(N.collection("allUsers").doc(e.userID).update({username:m}),t(p({userID:e.userID,email:e.email,username:m,avatarURL:e.avatar,isLoggedIn:e.loggedIn})),g(""),L(!1))},hidden:!0}),Object(I.jsx)("span",{className:"chngUser__closeIcon cursor-p text-danger",onClick:function(){return L(!1)},children:Object(I.jsx)(O.a,{})})]}):e.username})]}),Object(I.jsx)("div",{className:"header__optionIcon cursor-p",onClick:function(e){e.stopPropagation(),_(!f)},children:Object(I.jsx)(b.a,{children:Object(I.jsx)(u.a,{})})})]}),Object(I.jsxs)("div",{className:"userList__list",children:[Object(I.jsx)("div",{className:f?"userList__optionDropDown open":"userList__optionDropDown close",children:Object(I.jsxs)("ul",{className:"optionDropDown__ul",children:[Object(I.jsx)("li",{onClick:function(){return L(!0)},children:"Change Username"}),Object(I.jsx)("li",{onClick:function(){t(p({userID:null,username:"unknown",email:"",avatar:"",loggedIn:!1}))},children:"Log Out"})]})}),Object(I.jsx)("ul",{className:"allList",children:n.map((function(t){return t.id===e.userID||t.data.email===e.email?null:Object(I.jsx)("li",{children:Object(I.jsx)(l.b,{to:"/conv/".concat(t.id),children:Object(I.jsxs)("div",{className:"allList__singleList",children:[Object(I.jsx)("span",{className:"singleList__avatar",children:Object(I.jsx)(j.a,{alt:t.data.username,src:t.data.avatarURL?t.data.avatarURL:"/static/images/avatar/2.jpg"})}),Object(I.jsx)("div",{className:"singleList__name-and-lastMsg",children:Object(I.jsx)("strong",{className:"name",children:t.data.username})})]})})},t.id)}))})]}),Object(I.jsx)("div",{className:"userList__creatorName text-center",children:Object(I.jsxs)("p",{children:["Created By ",Object(I.jsx)("strong",{children:"MD Omar"})]})})]})},D=a(59),S=a.n(D),L=a(58),y=a.n(L);var C=function(){var e=Object(h.c)((function(e){return e})).currentUserInfo,t=Object(c.useState)(null),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),d=l[0],m=l[1],O=Object(c.useState)(0),p=Object(i.a)(O,2),x=p[0],v=p[1],f=Object(c.useState)(""),w=Object(i.a)(f,2),D=w[0],L=w[1],C=Object(c.useState)(null),U=Object(i.a)(C,2),E=U[0],k=U[1],B=Object(c.useState)([]),R=Object(i.a)(B,2),F=R[0],T=R[1],M=Object(c.useState)([]),A=Object(i.a)(M,2),P=A[0],W=A[1],z=Object(c.useState)(null),G=Object(i.a)(z,2),V=G[0],Y=G[1],J=Object(c.useRef)(null),K=Object(o.g)().selUserID;return Object(c.useEffect)((function(){var t=K+e.userID,a=e.userID+K;if(D.length>0){var c=0;P.forEach((function(e){e!==t&&e!==a||(Y(e),c+=1)})),c<1&&N.collection("convs").doc(a).set({convNameByUsers:"".concat(e.username," & ").concat(D),convCreationTime:g.a.firestore.FieldValue.serverTimestamp()})}}),[P,D]),Object(c.useEffect)((function(){if(s){var t=_.ref("files/".concat(s.name)).put(s);V?t.on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);v(t)}),(function(e){alert(e.message)}),(function(){_.ref("files").child(s.name).getDownloadURL().then((function(t){N.collection("convs").doc(V).collection("messages").add({photo:t,recieverID:K,senderID:e.userID,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),n(null),v(0)}))})):console.log("select a conversation first!")}}),[s]),Object(c.useEffect)((function(){return K&&(N.collection("allUsers").doc(K).onSnapshot((function(e){L(e.data().username),k(e.data().avatarURL)})),V&&N.collection("convs").doc(V).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){T(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))),N.collection("convs").onSnapshot((function(e){W(e.docs.map((function(e){return e.id})))})),function(){T([])}}),[K,V]),Object(I.jsxs)("div",{className:"messageBox",children:[Object(I.jsxs)("div",{className:"messageBox__header",children:[Object(I.jsxs)("div",{className:"header__avatarAndName",children:[Object(I.jsx)("span",{className:"avatar",children:Object(I.jsx)(j.a,{type:"button",alt:D,src:E||"/static/images/avatar/2.jpg"})}),Object(I.jsx)("span",{className:"name",children:Object(I.jsx)("strong",{children:D})})]}),Object(I.jsx)("div",{className:"header__optionIcon cursor-p",children:Object(I.jsx)(b.a,{children:Object(I.jsx)(u.a,{})})})]}),Object(I.jsx)("div",{className:"messageBox__body",style:{backgroundImage:"url(".concat("/chatapp","/whatsapp_bg.jpg)")},children:Object(I.jsx)("ul",{children:F.map((function(t){return t.data.photo?Object(I.jsx)("li",{className:t.data.senderID===e.userID?"reciever_photo":"sender_photo",children:Object(I.jsx)("div",{className:"wrapper__image",children:Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:t.data.photo,alt:"Failed to load picture",className:"img-fluid text-white"}),Object(I.jsx)("div",{className:"wrapper__time",children:t.data.timestamp?new Date(t.data.timestamp.toDate()).toLocaleTimeString():null})]})})},t.id):Object(I.jsx)("li",{className:t.data.senderID===e.userID?"reciever":"sender",children:Object(I.jsxs)("div",{className:"li__wrapper",children:[Object(I.jsx)("div",{className:"wrapper__message",children:t.data.message}),Object(I.jsx)("div",{className:"wrapper__time",children:t.data.timestamp?new Date(t.data.timestamp.toDate()).toLocaleTimeString():null})]})},t.id)}))})}),Object(I.jsxs)("div",{className:"messageBox__inputField",children:[x>0?Object(I.jsx)("div",{className:"inputField__progressBar",children:Object(I.jsx)("progress",{value:x,max:"100"})}):null,Object(I.jsxs)("div",{className:"inputField__chooseFile",children:[Object(I.jsx)("input",{disabled:x>0,type:"file",accept:"image/jpg, image/png, image/jpeg, image/gif",className:"file",ref:J,onChange:function(e){return n(e.target.files[0])}}),Object(I.jsx)("label",{htmlFor:"file",onClick:function(){return J.current.click()},children:Object(I.jsx)(y.a,{})})]}),Object(I.jsxs)("form",{className:"inputField__inputBox",children:[Object(I.jsx)("div",{className:"inputBox",children:Object(I.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},value:d})}),Object(I.jsx)("button",{type:"submit",className:d?"inputBox__sendBtn text-danger cursor-p":"inputBox__sendBtn cursor-p",onClick:function(t){t.preventDefault(),V?N.collection("convs").doc(V).collection("messages").add({message:d,recieverID:K,senderID:e.userID,timestamp:g.a.firestore.FieldValue.serverTimestamp()}):console.log("select a conversation first!!"),m("")},disabled:!d,children:Object(I.jsx)(S.a,{})})]})]})]})},U=a(101),E=a(60),k=a.n(E),B=function(){var e=Object(h.b)(),t=Object(c.useState)([]),a=Object(i.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),d=o[0],u=o[1],m=Object(c.useState)(!1),O=Object(i.a)(m,2),x=O[0],_=O[1],w=Object(c.useState)(""),D=Object(i.a)(w,2),S=D[0],L=D[1],y=Object(c.useState)(""),C=Object(i.a)(y,2),E=C[0],B=C[1],R=Object(c.useState)(""),F=Object(i.a)(R,2),T=F[0],M=F[1],A=Object(c.useState)(""),P=Object(i.a)(A,2),W=P[0],z=P[1],G=Object(c.useState)(""),V=Object(i.a)(G,2),Y=V[0],J=V[1],K=Object(c.useState)(""),Q=Object(i.a)(K,2),X=Q[0],q=Q[1],H=Object(c.useState)([]),Z=Object(i.a)(H,2),$=Z[0],ee=Z[1],te=Object(c.useRef)(null),ae=Object(c.useRef)(null),ce=Object(c.useRef)(null);Object(c.useEffect)((function(){N.collection("allUsers").onSnapshot((function(e){ee(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(c.useEffect)((function(){setTimeout((function(){if(Y.length>0){var t=0;$.forEach((function(a){a.data.googleEmail===Y&&(t+=1,e(p({userID:a.id,email:a.data.googleEmail,username:a.data.username,avatarURL:a.data.avatarURL,isLoggedIn:!0})))})),z(t<1?"No account signed up using this gmail.\n Please signup first!":""),J("")}}),500)}),[Y,$]),Object(c.useEffect)((function(){if(X.length>0){var e=0;$.forEach((function(t){t.data.googleEmail===X&&(e+=1)})),e>0?alert("Account already exist"):(N.collection("allUsers").add({username:S,googleEmail:X,avatarURL:d||"",timestamp:g.a.firestore.FieldValue.serverTimestamp()}),J(X)),q("")}}),[X]),Object(c.useEffect)((function(){if(_(!1),E){for(var e=[],t=0;t<10;t++){var a=5e3*Math.random()+(S||null);e.push("https://avatars.dicebear.com/api/".concat(E,"/").concat(a,".svg"))}n(e)}}),[E,x]);var se=function(e){var t=e.target.value;"none"===t?(B(""),n([]),u("")):B(t)};return Object(I.jsx)("div",{className:"signup_login row",children:Object(I.jsxs)("div",{className:"signup_login__wrapper col-lg-8 col-md-10 col-10",children:[Object(I.jsxs)("div",{className:"wrapper__userInfo-googleSignup",children:[Object(I.jsx)("strong",{className:"userInfo__title",children:"Signup:"}),Object(I.jsx)("div",{className:"userInfo__errorMsg text-danger",children:Object(I.jsx)("p",{children:T})}),Object(I.jsxs)("div",{className:"userInfo__username",children:[Object(I.jsx)("div",{className:"username__avatar",children:Object(I.jsx)(j.a,{src:d||"/static/images/avatar/1.jpg",alt:S})}),Object(I.jsx)("div",{className:"username__input",children:Object(I.jsx)(U.a,{type:"text",placeholder:"Username",onChange:function(e){return L(e.target.value)},value:S})})]}),Object(I.jsxs)("div",{className:"userInfo__gender",children:[Object(I.jsxs)("div",{className:"gender__male",children:[Object(I.jsx)("input",{type:"radio",value:"male",name:"gender",onChange:se,ref:te}),Object(I.jsx)("span",{children:"Male"})]}),Object(I.jsxs)("div",{className:"gender__female",children:[Object(I.jsx)("input",{type:"radio",value:"female",name:"gender",onChange:se,ref:ae}),Object(I.jsx)("span",{children:"Female"})]}),Object(I.jsxs)("div",{className:"gender__none",children:[Object(I.jsx)("input",{type:"radio",value:"none",name:"gender",onChange:se,ref:ce}),Object(I.jsx)("span",{children:"None"})]})]}),Object(I.jsx)("div",{className:s.length>0?"row":null,children:Object(I.jsxs)("div",{className:s.length>0?"userInfo__avatar col-lg-6 col-10 col-md-8":null,children:[Object(I.jsxs)("div",{className:s.length>0?"avatar__reload":"avatar__reload d-none",children:[Object(I.jsx)("strong",{children:"Choose Avatar:"}),Object(I.jsx)(b.a,{onClick:function(){return _(!0)},children:Object(I.jsx)(k.a,{})})]}),s?s.map((function(e,t){return Object(I.jsx)(b.a,{onClick:function(){return u(e)},children:Object(I.jsx)(j.a,{type:"button",src:e})},t)})):null]})}),Object(I.jsx)("div",{className:"row",children:Object(I.jsxs)(l.b,{to:"/chatapp",className:"googleSignup cursor-p col-12",onClick:function(){var e=!1;S.length<1?(e=!1,M("Please provide an username")):(e=!0,M("")),e&&v.signInWithPopup(f).then((function(e){q(e.user.email),L(""),d.length>0&&(te.current.checked&&(te.current.checked=!1),ae.current.checked&&(ae.current.checked=!1),ce.current.checked&&(ce.current.checked=!1),B(""),n([]),u(""))})).catch((function(e){return alert(e.message)}))},children:[Object(I.jsx)("div",{className:"googleSingup__avatar",children:Object(I.jsx)(j.a,{className:"avatar",src:"".concat("/chatapp","/google_icon.png")})}),Object(I.jsx)("div",{className:"googleSignup__text",children:Object(I.jsx)("strong",{children:"Signup With Google"})})]})})]}),Object(I.jsxs)("div",{className:"wrapper__or",children:[Object(I.jsx)("div",{className:"orDiv1"}),Object(I.jsx)("span",{children:"OR"}),Object(I.jsx)("div",{className:"orDiv2"})]}),Object(I.jsx)("div",{className:"googleLogin__errorMsg text-danger text-center",children:Object(I.jsx)("p",{children:W})}),Object(I.jsxs)(l.b,{to:"/chatapp",className:"wrapper__googleLogin cursor-p",onClick:function(){v.signInWithPopup(f).then((function(e){J(e.user.email)})).catch((function(e){return alert(e.message)}))},children:[Object(I.jsx)("div",{className:"googleLogin__avatar",children:Object(I.jsx)(j.a,{className:"avatar",src:"".concat("/chatapp","/google_icon.png")})}),Object(I.jsx)("div",{className:"googleLogin__text",children:Object(I.jsx)("strong",{children:"Login With Google"})})]})]})})};var R=function(){var e=Object(h.c)((function(e){return e})).currentUserInfo,t=Object(c.useState)(window.innerWidth),a=Object(i.a)(t,2),s=a[0],n=a[1];return Object(c.useEffect)((function(){return window.addEventListener("resize",(function(){return n(window.innerWidth)})),console.log(s),function(){window.removeEventListener("resize",(function(){return n(window.innerWidth)}))}})),Object(I.jsx)(l.a,{children:Object(I.jsx)("div",{className:"app container-fluid",children:e.loggedIn?Object(I.jsxs)(o.d,{children:[Object(I.jsx)(o.b,{exact:!0,path:"/chatapp",children:s>500?Object(I.jsxs)("div",{className:"app__body row",children:[Object(I.jsx)("div",{className:"body__userList col-lg-4 col-md-4 col-12",children:Object(I.jsx)(w,{})}),Object(I.jsx)("div",{className:"body__messageBox col-lg-8 col-md-8 col-12",children:Object(I.jsx)("div",{className:"startConvMsg",children:Object(I.jsxs)("div",{className:"startConvMsg__msg",children:[Object(I.jsx)("h2",{children:"Welcome to Chat App"}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h4",{className:"text-success",children:"You have logged in successfully !"}),Object(I.jsx)("h6",{children:"Let's Start a Conversation !"})]}),Object(I.jsxs)("p",{children:["Created By ",Object(I.jsx)("strong",{children:"MD Omar"})]})]})})})]}):Object(I.jsx)("div",{className:"app__body row",children:Object(I.jsx)("div",{className:"body__userList col-lg-4 col-md-4 col-12",children:Object(I.jsx)(w,{})})})}),Object(I.jsx)(o.b,{exact:!0,path:"/chatapp/conv/:selUserID",children:s>500?Object(I.jsxs)("div",{className:"app__body row",children:[Object(I.jsx)("div",{className:"body__userList col-lg-4 col-md-4 col-12",children:Object(I.jsx)(w,{})}),Object(I.jsx)("div",{className:"body__messageBox col-lg-8 col-md-8 col-12",children:Object(I.jsx)(C,{})})]}):Object(I.jsx)("div",{className:"app__body row",children:Object(I.jsx)("div",{className:"body__messageBox col-lg-8 col-md-8 col-12",children:Object(I.jsx)(C,{})})})}),Object(I.jsx)(o.a,{to:"/chatapp"})]}):Object(I.jsx)(B,{})})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))},T=a(48),M={userID:null,username:"unknown",email:"",avatar:"",loggedIn:!1},A=Object(T.a)({currentUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return{userID:t.userID,username:t.username,email:t.email,avatar:t.avatarURL,loggedIn:t.loggedIn};default:return e}}}),P=Object(T.b)(A);r.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(h.a,{store:P,children:Object(I.jsx)(R,{})})}),document.getElementById("root")),F()}},[[83,1,2]]]);
//# sourceMappingURL=main.b80f95d7.chunk.js.map