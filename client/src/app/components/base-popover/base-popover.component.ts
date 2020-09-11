import {Component, Injector, OnInit} from '@angular/core';
import {PopoverController} from "@ionic/angular";
import {EMenuAction, IMenuItems, PopoverMenuComponent} from "../popover-menu/popover-menu.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-base-popover',
    templateUrl: './base-popover.component.html',
    styleUrls: ['./base-popover.component.scss'],
})
export abstract class BasePopoverComponent implements OnInit {

    protected popoverController: PopoverController;
    protected router: Router;

    protected menu: IMenuItems[] = [];

    protected constructor(protected injector: Injector) {
        this.popoverController = injector.get(PopoverController);
        this.router = injector.get(Router);
    }

    ngOnInit() {}

    async openPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverMenuComponent,
            cssClass: 'my-custom-class',
            event: ev,
            componentProps: {menu: this.menu},
            translucent: true
        });

        popover.onDidDismiss().then((data: any) => {
            if (data && data.data) {
                console.log(data.data);
                if (data.data.path) {
                    this.router.navigate([data.data.path]);
                } else if (data.data.action) {
                    this.processAction(data.data.action)
                }
            }
        });

        return await popover.present();
    }

    protected abstract processAction(action: EMenuAction): void;

}
