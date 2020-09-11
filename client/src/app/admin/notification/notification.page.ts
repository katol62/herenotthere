import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {EMenuAction, IMenuItems, PopoverMenuComponent} from '../../components/popover-menu/popover-menu.component';
import {IAuthResponse} from '../../shared/http-data';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';
import {profilePath, usersPath} from "../../shared/misc/constants";
import {BasePopoverComponent} from "../../components/base-popover/base-popover.component";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.page.html',
    styleUrls: ['./notification.page.scss'],
})
export class NotificationPage extends BasePopoverComponent implements OnInit, OnDestroy {

    public authInfo: IAuthResponse;
    private authSubscriber: Subscription;

    protected menu: IMenuItems[] = [
        {title: 'Profile', path: profilePath},
        {title: 'Users', path: usersPath},
        {title: 'Logout', action: EMenuAction.LOGOUT}
    ];

    constructor(protected injector: Injector,
                private authService: AuthService) {
        super(injector);
    }

    ngOnInit() {
        this.authSubscriber = this.authService.authInfo
            .subscribe((info: IAuthResponse) => {
                this.authInfo = info;
            });
    }

    protected processAction(action: EMenuAction): void {
        if (action === EMenuAction.LOGOUT) {
            this.authService.onLogout();
            this.router.navigate(['/']);
        }
    }

    ngOnDestroy(): void {
        this.authSubscriber.unsubscribe();
        this.authSubscriber = null;
    }

}
