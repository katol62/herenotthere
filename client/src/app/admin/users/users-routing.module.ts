import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';
import {usersCreatePath, usersEditPath, usersListPath} from "../../shared/misc/constants";

const routes: Routes = [
    {
        path: '',
        component: UsersPage,
        children: [
            {
                path: '',
                redirectTo: usersListPath
            },
            {
                path: usersListPath,
                loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
            },
            {
                path: ':id',
                loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
            },
            {
                path: usersCreatePath,
                loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersPageRoutingModule {}
