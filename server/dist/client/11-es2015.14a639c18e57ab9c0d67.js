(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{SoHB:function(o,t,n){"use strict";n.r(t),n.d(t,"LoginPageModule",(function(){return p}));var i=n("ofXK"),e=n("3Pt+"),r=n("TEn/"),b=n("tyNb"),s=n("477c"),a=n("fXoL"),l=n("IYfF");const u=function(){return["/"]},c=[{path:"",component:(()=>{class o{constructor(o,t,n){this.formBuilder=o,this.router=t,this.authService=n,this.loginForm=this.formBuilder.group({email:["",[e.j.required,e.j.email]],password:["",[e.j.required]]})}ngOnInit(){}logForm(){console.log(this.loginForm.value);const o={email:this.loginForm.get("email").value,password:this.loginForm.get("password").value};this.authService.login(o).subscribe({next:o=>{this.afterSignIn()},error:o=>{console.log(o)}})}afterSignIn(){this.router.navigate([s.c])}}return o.\u0275fac=function(t){return new(t||o)(a.Hb(e.a),a.Hb(b.g),a.Hb(l.a))},o.\u0275cmp=a.Bb({type:o,selectors:[["app-login"]],decls:23,vars:4,consts:[["slot","start"],["id","home",3,"routerLink"],["size","large","slot","start","name","home-outline"],[1,""],[3,"formGroup","ngSubmit"],["type","text","formControlName","email"],["type","password","formControlName","password"],["size","small","color","primary","type","submit",3,"disabled"]],template:function(o,t){1&o&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Kb(3,"ion-button",1),a.Ib(4,"ion-icon",2),a.Jb(),a.Jb(),a.Kb(5,"ion-title"),a.ec(6," Login "),a.Jb(),a.Jb(),a.Jb(),a.Kb(7,"ion-content"),a.Kb(8,"div",3),a.Kb(9,"ion-card"),a.Kb(10,"ion-card-content"),a.Kb(11,"form",4),a.Sb("ngSubmit",(function(){return t.logForm()})),a.Kb(12,"ion-item"),a.Kb(13,"ion-label"),a.ec(14,"Email"),a.Jb(),a.Ib(15,"ion-input",5),a.Jb(),a.Kb(16,"ion-item"),a.Kb(17,"ion-label"),a.ec(18,"Password"),a.Jb(),a.Ib(19,"ion-input",6),a.Jb(),a.Kb(20,"ion-item"),a.Kb(21,"ion-button",7),a.ec(22,"Submit"),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&o&&(a.xb(3),a.Xb("routerLink",a.Yb(3,u)),a.xb(8),a.Xb("formGroup",t.loginForm),a.xb(10),a.Xb("disabled",!t.loginForm.valid))},directives:[r.l,r.t,r.f,r.e,r.z,b.h,r.m,r.s,r.i,r.g,r.h,e.k,e.h,e.c,r.o,r.p,r.n,r.A,e.g,e.b],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}"]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=a.Fb({type:o}),o.\u0275inj=a.Eb({factory:function(t){return new(t||o)},imports:[[b.i.forChild(c)],b.i]}),o})(),p=(()=>{class o{}return o.\u0275mod=a.Fb({type:o}),o.\u0275inj=a.Eb({factory:function(t){return new(t||o)},imports:[[i.b,e.d,r.u,m,e.i]]}),o})()}}]);