(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{UuuG:function(t,o,n){"use strict";n.r(o),n.d(o,"ProfilePageModule",(function(){return d}));var e=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),u=n("jp1X"),c=n("477c"),b=n("tA0o"),a=n("fXoL"),l=n("IYfF");const h=function(){return["/"]},p=[{path:"",component:(()=>{class t extends b.a{constructor(t,o){super(t),this.injector=t,this.authService=o,this.menu=[{title:"Notifications",path:c.c},{title:"Logout",action:u.a.LOGOUT}]}ngOnInit(){this.authSubscriber=this.authService.authInfo.subscribe(t=>{this.authInfo=t})}logout(){this.authService.onLogout(),this.router.navigate(["/"])}ngOnDestroy(){this.authSubscriber.unsubscribe(),this.authSubscriber=null}processAction(t){t===u.a.LOGOUT&&(this.authService.onLogout(),this.router.navigate(["/"]))}}return t.\u0275fac=function(o){return new(o||t)(a.Hb(a.r),a.Hb(l.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-profile"]],features:[a.ub],decls:11,vars:2,consts:[["slot","start"],["id","home",3,"routerLink"],["size","large","slot","start","name","home-outline"],["slot","end"],["id","popover",3,"click"],["size","large","slot","start","name","ellipsis-horizontal-outline"]],template:function(t,o){1&t&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Kb(3,"ion-button",1),a.Ib(4,"ion-icon",2),a.Jb(),a.Jb(),a.Kb(5,"ion-title"),a.ec(6," Profile "),a.Jb(),a.Kb(7,"ion-buttons",3),a.Kb(8,"ion-button",4),a.Sb("click",(function(t){return o.openPopover(t)})),a.Ib(9,"ion-icon",5),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Ib(10,"ion-content")),2&t&&(a.xb(3),a.Xb("routerLink",a.Yb(1,h)))},directives:[r.l,r.t,r.f,r.e,r.z,s.h,r.m,r.s,r.i],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(o){return new(o||t)},imports:[[s.i.forChild(p)],s.i]}),t})(),d=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(o){return new(o||t)},imports:[[e.b,i.d,r.u,f]]}),t})()}}]);