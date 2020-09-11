import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {IAuthResponse, IBaseResponse, IUser} from "../../../shared/http-data";
import {Subscription} from "rxjs";
import {AuthService} from "../../../shared/services/auth.service";
import {RestService} from "../../../shared/services/rest.service";
import {Router} from "@angular/router";
import {usersCreatePath, usersPath} from "../../../shared/misc/constants";
import {AlertComponent, ConfirmData, EConfirmAction} from "../../../components/alert/alert.component";
import {IMessageItem, NotificationMessageType, NotificationService} from "../../../shared/services/notification.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage extends AlertComponent implements OnInit, OnDestroy {

    public authInfo: IAuthResponse;
    private authSubscriber: Subscription;

    public users: IUser[] = [];
    public hostId: number;

    constructor(protected injector: Injector,
                private authService: AuthService,
                private router: Router,
                private notificationService: NotificationService,
                private restService: RestService) {
        super(injector);
    }

    ngOnInit() {
        this.authSubscriber = this.authService.authInfo
            .subscribe((info: IAuthResponse) => {
                this.authInfo = info;
                this.hostId = this.authService.userId;
            });
    }

    ionViewWillEnter() {
        this.getUsers();
    }

    ngOnDestroy(): void {
        this.authSubscriber.unsubscribe();
        this.authSubscriber = null;
    }

    /**
     * Rest actions
     * @private
     */
    private getUsers(): void {
        const filter = {};
        const params = {...filter};
        this.restService.get('users', params)
            .subscribe({
                next: (value: IBaseResponse) => {
                    this.users = value.data;
                }, error: err => {}
            })

    }
    private processDelete(user: IUser): void {
        this.restService.delete(`/users/${String(user.id)}`)
            .subscribe( {
                next: (value: IBaseResponse) => {
                    const mess: IMessageItem = {
                        message: value.message,
                        type: NotificationMessageType.success};
                    this.notificationService.show(mess);
                    this.getUsers();
                }, error: err => {}
            })
    }

    edit(user: IUser): void {
        this.router.navigate([usersPath, user.id]);
    }

    create(): void {
        this.router.navigate([usersPath, usersCreatePath]);
    }

    delete(user: IUser): void {
        const data: ConfirmData = {action: EConfirmAction.DELETE, data: user};
        this.presentAlertConfirm('Confirm', `Delete user ${user.first_name} ${user.last_name}?`, data).then(r => console.log(r));
    }


    protected processOkHandler( data: ConfirmData ): void {
        console.log(data);
        if (data.action === EConfirmAction.DELETE && data.data && data.data.id) {
            this.processDelete(data.data);
        }
    }

}
