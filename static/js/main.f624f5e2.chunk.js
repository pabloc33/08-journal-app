(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{152:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),u=a(4),i=a(5),l=a.n(i),s=a(7),m=a(13),p=a(14),d=a(6),f=a(22),b=a.n(f);a(69),a(73);b.a.initializeApp({apiKey:"AIzaSyDKEl-oQ0OcbkS9-3UDbhWqkjZryZvsYLU",authDomain:"react-app-cursos-98331.firebaseapp.com",databaseURL:"https://react-app-cursos-98331.firebaseio.com",projectId:"react-app-cursos-98331",storageBucket:"react-app-cursos-98331.appspot.com",messagingSenderId:"841371962740",appId:"1:841371962740:web:3ff2ee5582c11498a13021"});var h=b.a.firestore(),E=new b.a.auth.GoogleAuthProvider,v=a(2),g=a(15),j=a.n(g),_=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dicig6m75/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dicig6m75/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(v.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O="[Auth] Login",N="[Auth] Logout",w="[UI] Set Error",x="[UI] Remove Error",k="[UI] Start loading",C="[UI] Finish loading",S="[Notes] New note",I="[Notes] Set active note",A="[Notes] Load note",L="[Notes] Update note",D="[Notes] Delete note",P="[Notes] Logout Cleaning",U=function(e,t){return{type:I,payload:Object(v.a)({id:e},t)}},R=function(e,t){return{type:S,payload:Object(v.a)({id:e},t)}},W=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:n=t.sent,a(F(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(e){return{type:A,payload:e}},T=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(v.a)({},e)).id,t.next=6,h.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(q(e.id,c)),j.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},q=function(e,t){return{type:L,payload:{id:e,note:Object(v.a)({id:e},t)}}},z=function(e){return{type:D,payload:e}},B=a(28),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},u=function(e){var t=e.target;c(Object(v.a)(Object(v.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,u,o]},J=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("samp",null,"24 de septiembre de 2020"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,j.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){j.a.showLoading()}}),t.next=4,_(e);case 4:c=t.sent,r.url=c,a(T(r)),j.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){e(T(t))}},"Save")))},K=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.notes})).active,a=G(t),c=Object(m.a)(a,3),o=c[0],i=c[1],p=c[2],d=o.body,f=o.title,b=o.id,E=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==E.current&&(p(t),E.current=t.id)}),[t,p]),Object(n.useEffect)((function(){e(U(o.id,Object(v.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(J,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:f,onChange:i}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:d,onChange:i}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"imagen"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,h.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(z(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(b))}},"Delete"))},X=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Selected something",r.a.createElement("br",null),"pr create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},Z=function(e){return{type:w,payload:e}},H=function(){return{type:C}},M=function(e,t){return function(a){a({type:k}),b.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(Q(t.uid,t.displayName)),a(H())})).catch((function(e){console.log(e),a(H()),j.a.fire("Error",e.message,"error")}))}},Q=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},V=function(){return{type:N}},Y=a(56),$=a.n(Y),ee=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,i=$()(a),l=Object(u.b)();return r.a.createElement("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){l(U(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,i.format("dddd")),r.a.createElement("h4",null,i.format("Do"))))},te=function(){var e=Object(u.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(ee,Object.assign({key:e.id},e))})))},ae=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null,t)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().signOut();case 2:t(V()),t({type:P});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,h.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(U(c.id,r)),t(R(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(te,null))},ne=function(){var e=Object(u.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement(ae,null),r.a.createElement("main",null,e?r.a.createElement(K,null):r.a.createElement(X,null)))},re=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.ui})).loading,a=G({email:"nando@gmail.com",password:"123456"}),n=Object(m.a)(a,2),c=n[0],o=n[1],i=c.email,l=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(M(i,l))},className:"animate__animated animate__fadeIn animate__faster"},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){b.a.auth().signInWithPopup(E).then((function(t){var a=t.user;e(Q(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(p.b,{to:"/auth/register",className:"link"},"Create new account")))},ce=a(57),oe=a.n(ce),ue=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.ui})).msgError,a=G({name:"Hernando",email:"nando@gmail.com",password:"123456",password2:"123456"}),n=Object(m.a)(a,2),c=n[0],o=n[1],i=c.name,d=c.email,f=c.password,h=c.password2,E=function(){return 0===i.trim().length?(e(Z("Name is required")),!1):oe.a.isEmail(d)?f!==h||f.length<5?(e(Z("Password should be at least 6 characters and match each other")),!1):(e({type:x}),!0):(e(Z("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),E()&&e(function(e,t,a){return function(n){b.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(Q(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),j.a.fire("Error",e.message,"error")}))}}(d,f,i))},className:"animate__animated animate__fadeIn animate__faster"},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:f,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm",name:"password2",className:"auth__input",value:h,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(p.b,{to:"/auth/login",className:"link mt-5"},"Already registered?")))},ie=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/auth/login",component:re}),r.a.createElement(d.b,{exact:!0,path:"/auth/register",component:ue}),r.a.createElement(d.a,{to:"/auth/login"}))))},le=a(29),se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(d.a,{to:"/auth/login"})}}))},me=function(e){var t=e.isAuthenticated,a=e.component,n=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(d.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(d.a,{to:"/"}):r.a.createElement(a,e)}}))},pe=function(){var e=Object(u.b)(),t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),f=Object(m.a)(i,2),h=f[0],E=f[1];return Object(n.useEffect)((function(){b.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(Q(a.uid,a.displayName)),E(!0),e(W(a.uid))):E(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,E]),c?r.a.createElement("h1",null,"Wait..."):r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(me,{path:"/auth",component:ie,isAuthenticated:h}),r.a.createElement(se,{exact:!0,isAuthenticated:h,path:"/",component:ne}),r.a.createElement(d.a,{to:"/auth/login"}))))},de=a(16),fe=a(58),be={loading:!1,msgError:null},he=a(39),Ee={notes:[],active:null},ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,ge=Object(de.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case N:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(v.a)(Object(v.a)({},e),{},{msgError:t.payload});case x:return Object(v.a)(Object(v.a)({},e),{},{msgError:null});case k:return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case C:return Object(v.a)(Object(v.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(v.a)(Object(v.a)({},e),{},{active:Object(v.a)({},t.payload)});case S:return Object(v.a)(Object(v.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case A:return Object(v.a)(Object(v.a)({},e),{},{notes:Object(he.a)(t.payload)});case L:return Object(v.a)(Object(v.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case D:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case P:return Object(v.a)(Object(v.a)({},e),{},{active:null,notes:[]});default:return e}}}),je=Object(de.e)(ge,ve(Object(de.a)(fe.a))),_e=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{store:je},r.a.createElement(pe,null)))};a(152);o.a.render(r.a.createElement(_e,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(153)}},[[59,1,2]]]);
//# sourceMappingURL=main.f624f5e2.chunk.js.map