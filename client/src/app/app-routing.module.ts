import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/guards/auth.guard";
import {RoleGuard} from "./shared/guards/role.guard";
import {homePath, loginPath, notificationPath, profilePath, usersCreatePath, usersEditPath, usersListPath, usersPath} from "./shared/misc/constants";

const routes: Routes = [
    {
        path: homePath,
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
        path: loginPath,
        loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
    },
    {
        path: profilePath,
        canActivate: [AuthGuard],
        loadChildren: () => import('./admin/profile/profile.module').then( m => m.ProfilePageModule)
    },
    {
        path: notificationPath,
        canActivate: [AuthGuard],
        loadChildren: () => import('./admin/notification/notification.module').then( m => m.NotificationPageModule)
    },
    {
        path: usersPath,
        canActivate: [AuthGuard, RoleGuard], data: {roles: ['admin']},
        loadChildren: () => import('./admin/users/users.module').then( m => m.UsersPageModule)
    },
    {
        path: '',
        redirectTo: homePath,
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
