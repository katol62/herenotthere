!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{SoHB:function(t,i,e){"use strict";e.r(i),e.d(i,"LoginPageModule",(function(){return h}));var r,a,b,u=e("ofXK"),s=e("3Pt+"),l=e("TEn/"),c=e("tyNb"),f=e("fXoL"),m=e("IYfF"),p=function(){return["/"]},g=[{path:"",component:(r=function(){function t(o,i,e){n(this,t),this.formBuilder=o,this.router=i,this.authService=e,this.loginForm=this.formBuilder.group({email:["",[s.j.required,s.j.email]],password:["",[s.j.required]]})}var i,e,r;return i=t,(e=[{key:"ngOnInit",value:function(){}},{key:"logForm",value:function(){var n=this;console.log(this.loginForm.value);var o={email:this.loginForm.get("email").value,password:this.loginForm.get("password").value};this.authService.login(o).subscribe({next:function(o){n.afterSignIn()},error:function(n){console.log(n)}})}},{key:"afterSignIn",value:function(){this.router.navigate(["/notifications"])}}])&&o(i.prototype,e),r&&o(i,r),t}(),r.\u0275fac=function(n){return new(n||r)(f.Hb(s.a),f.Hb(c.g),f.Hb(m.a))},r.\u0275cmp=f.Bb({type:r,selectors:[["app-login"]],decls:22,vars:4,consts:[["slot","start"],["id","home",3,"routerLink"],["size","large","slot","start","name","home-outline"],[1,""],[3,"formGroup","ngSubmit"],["type","text","formControlName","email"],["type","password","formControlName","password"],["ion-button","","type","submit",3,"disabled"]],template:function(n,o){1&n&&(f.Kb(0,"ion-header"),f.Kb(1,"ion-toolbar"),f.Kb(2,"ion-buttons",0),f.Kb(3,"ion-button",1),f.Ib(4,"ion-icon",2),f.Jb(),f.Jb(),f.Kb(5,"ion-title"),f.ec(6," Login "),f.Jb(),f.Jb(),f.Jb(),f.Kb(7,"ion-content"),f.Kb(8,"div",3),f.Kb(9,"ion-card"),f.Kb(10,"ion-card-content"),f.Kb(11,"form",4),f.Sb("ngSubmit",(function(){return o.logForm()})),f.Kb(12,"ion-item"),f.Kb(13,"ion-label"),f.ec(14,"Email"),f.Jb(),f.Ib(15,"ion-input",5),f.Jb(),f.Kb(16,"ion-item"),f.Kb(17,"ion-label"),f.ec(18,"Password"),f.Jb(),f.Ib(19,"ion-input",6),f.Jb(),f.Kb(20,"button",7),f.ec(21,"Submit"),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb(),f.Jb()),2&n&&(f.xb(3),f.Xb("routerLink",f.Yb(3,p)),f.xb(8),f.Xb("formGroup",o.loginForm),f.xb(9),f.Xb("disabled",!o.loginForm.valid))},directives:[l.h,l.p,l.d,l.c,l.v,c.h,l.i,l.o,l.g,l.e,l.f,s.k,s.h,s.c,l.k,l.l,l.j,l.w,s.g,s.b],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}"]}),r)}],d=((b=function o(){n(this,o)}).\u0275mod=f.Fb({type:b}),b.\u0275inj=f.Eb({factory:function(n){return new(n||b)},imports:[[c.i.forChild(g)],c.i]}),b),h=((a=function o(){n(this,o)}).\u0275mod=f.Fb({type:a}),a.\u0275inj=f.Eb({factory:function(n){return new(n||a)},imports:[[u.b,s.d,l.q,d,s.i]]}),a)}}])}();