(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{147:function(e,a,t){},148:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),o=t(7),i=t(12),s=t(11),u=t(3),m=t(18),p=t.n(m);t(64),t(68);p.a.initializeApp({apiKey:"AIzaSyDKEl-oQ0OcbkS9-3UDbhWqkjZryZvsYLU",authDomain:"react-app-cursos-98331.firebaseapp.com",databaseURL:"https://react-app-cursos-98331.firebaseio.com",projectId:"react-app-cursos-98331",storageBucket:"react-app-cursos-98331.appspot.com",messagingSenderId:"841371962740",appId:"1:841371962740:web:3ff2ee5582c11498a13021"});p.a.firestore();var d=new p.a.auth.GoogleAuthProvider,E=function(){return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("samp",null,"24 de septiembre de 2020"),r.a.createElement("div",null,r.a.createElement("button",{className:"btn"},"Picture")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn"},"Save")))},h=function(){return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(E,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off"}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__textarea"}),r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcq99vXBrf_-HmmITpxpDQJCKbMPMUwDrY8A&usqp=CAU",alt:"imagen"}))))},b=t(19),f=t.n(b),g=t(33),_=t(34),v=t.n(_),N="[Auth] Login",y="[Auth] Logout",j="[UI] Set Error",w="[UI] Remove Error",O="[UI] Start loading",k="[UI] Finish loading",x=function(e){return{type:j,payload:e}},A=function(){return{type:k}},C=function(e,a){return function(t){t({type:O}),p.a.auth().signInWithEmailAndPassword(e,a).then((function(e){var a=e.user;t(S(a.uid,a.displayName)),t(A())})).catch((function(e){console.log(e),t(A()),v.a.fire("Error",e.message,"error")}))}},S=function(e,a){return{type:N,payload:{uid:e,displayName:a}}},I=function(){return{type:y}},L=function(){return r.a.createElement("div",{className:"journal__entry pointer"},r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg)"}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},"Un nuevo mundo"),r.a.createElement("p",{className:"journal__entry-content"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit.")),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,"Monday"),r.a.createElement("h4",null,"28")))},U=function(){return r.a.createElement("div",{className:"journal__entries"},[1,2,3,4,5].map((function(e){return r.a.createElement(L,{key:e})})))},P=function(){var e=Object(o.b)();return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," Lavonne!!")),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:a(I());case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}},"Logout")),r.a.createElement("div",{className:"journal__new-entry"},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(U,null))},D=function(){return r.a.createElement("div",{className:"journal__main-content"},r.a.createElement(P,null),r.a.createElement("main",null,r.a.createElement(h,null)))},q=t(24),R=t(8),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],c=t[1],l=function(){c(e)},o=function(e){var a=e.target;c(Object(R.a)(Object(R.a)({},r),{},Object(q.a)({},a.name,a.value)))};return[r,o,l]},F=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.ui})).loading,t=W({email:"nando@gmail.com",password:"123456"}),n=Object(i.a)(t,2),c=n[0],l=n[1],u=c.email,m=c.password;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e(C(u,m))}},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:l}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:m,onChange:l}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",disabled:a},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){p.a.auth().signInWithPopup(d).then((function(a){var t=a.user;e(S(t.uid,t.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(s.b,{to:"/auth/register",className:"link"},"Create new account")))},G=t(53),M=t.n(G),z=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.ui})).msgError,t=W({name:"Hernando",email:"nando@gmail.com",password:"123456",password2:"123456"}),n=Object(i.a)(t,2),c=n[0],l=n[1],u=c.name,m=c.email,d=c.password,E=c.password2,h=function(){return 0===u.trim().length?(e(x("Name is required")),!1):M.a.isEmail(m)?d!==E||d.length<5?(e(x("Password should be at least 6 characters and match each other")),!1):(e({type:w}),!0):(e(x("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),h()&&e(function(e,a,t){return function(n){p.a.auth().createUserWithEmailAndPassword(e,a).then(function(){var e=Object(g.a)(f.a.mark((function e(a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.user,e.next=3,r.updateProfile({displayName:t});case 3:n(S(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),v.a.fire("Error",e.message,"error")}))}}(m,d,u))}},a&&r.a.createElement("div",{className:"auth__alert-error"},a),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:l}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:m,onChange:l}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:l}),r.a.createElement("input",{type:"password",placeholder:"Confirm",name:"password2",className:"auth__input",value:E,onChange:l}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(s.b,{to:"/auth/login",className:"link mt-5"},"Already registered?")))},B=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/auth/login",component:F}),r.a.createElement(u.b,{exact:!0,path:"/auth/register",component:z}),r.a.createElement(u.a,{to:"/auth/login"}))))},J=t(25),K=function(e){var a=e.isAuthenticated,t=e.component,n=Object(J.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/auth/login"})}}))},Q=function(e){var a=e.isAuthenticated,t=e.component,n=Object(J.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return a?r.a.createElement(u.a,{to:"/"}):r.a.createElement(t,e)}}))},T=function(){var e=Object(o.b)(),a=Object(n.useState)(!0),t=Object(i.a)(a,2),c=t[0],l=t[1],m=Object(n.useState)(!1),d=Object(i.a)(m,2),E=d[0],h=d[1];return Object(n.useEffect)((function(){p.a.auth().onAuthStateChanged((function(a){(null===a||void 0===a?void 0:a.uid)?(e(S(a.uid,a.displayName)),h(!0)):h(!1),l(!1)}))}),[e,l,h]),c?r.a.createElement("h1",null,"Espere..."):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(Q,{path:"/auth",component:B,isAuthenticated:E}),r.a.createElement(K,{exact:!0,isAuthenticated:E,path:"/",component:D}),r.a.createElement(u.a,{to:"/auth/login"}))))},X=t(13),H=t(54),Y={loading:!1,msgError:null},Z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d,V=Object(X.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case N:return{uid:a.payload.uid,name:a.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case j:return Object(R.a)(Object(R.a)({},e),{},{msgError:a.payload});case w:return Object(R.a)(Object(R.a)({},e),{},{msgError:null});case O:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case k:return Object(R.a)(Object(R.a)({},e),{},{loading:!1});default:return e}}}),$=Object(X.e)(V,Z(Object(X.a)(H.a))),ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{store:$},r.a.createElement(T,null)))};t(147);l.a.render(r.a.createElement(ee,null),document.getElementById("root"))},55:function(e,a,t){e.exports=t(148)}},[[55,1,2]]]);
//# sourceMappingURL=main.70bae1fb.chunk.js.map