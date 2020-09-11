import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {IAuthResponse} from '../../shared/http-data';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';
import {EMenuAction, IMenuItems, PopoverMenuComponent} from '../../components/popover-menu/popover-menu.component';
import {notificationPath} from "../../shared/misc/constants";
import {BasePopoverComponent} from "../../components/base-popover/base-popover.component";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends BasePopoverComponent implements OnInit, OnDestroy {

    public authInfo: IAuthResponse;
    private authSubscriber: Subscription;

    protected menu: IMenuItems[] = [
        {title: 'Notifications', path: notificationPath},
        {title: 'Logout', action: EMenuAction.LOGOUT}
    ];

    constructor(protected injector: Injector,
                private authService: AuthService) {
        super(injector);
    }

    ngOnInit(): void {
        this.authSubscriber = this.authService.authInfo
            .subscribe((info: IAuthResponse) => {
                this.authInfo = info;
            });
    }

    logout(): void {
        this.authService.onLogout();
        this.router.navigate(['/']);
    }

    ngOnDestroy(): void {
        this.authSubscriber.unsubscribe();
        this.authSubscriber = null;
    }

    protected processAction(action: EMenuAction): void {
        if (action === EMenuAction.LOGOUT) {
            this.authService.onLogout();
            this.router.navigate(['/']);
        }
    }


}
