import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {MessageComponent} from "./components/message/message.component";
import {PopoverMenuComponent} from "./components/popover-menu/popover-menu.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FcmComponent} from "./components/fcm/fcm.component";
import {AuthInterceptor} from "./shared/guards/auth.interceptor";

@NgModule({
    declarations: [AppComponent, MessageComponent, PopoverMenuComponent, FcmComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
