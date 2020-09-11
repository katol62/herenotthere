import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPage } from './edit.page';
import {usersEditPath} from "../../../shared/misc/constants";

const routes: Routes = [
    {
        path: '',
        component: EditPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EditPageRoutingModule {}
