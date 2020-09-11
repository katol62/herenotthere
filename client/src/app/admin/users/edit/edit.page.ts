import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAuthResponse, IBaseRequest, IBaseResponse, IUser} from "../../../shared/http-data";
import {Subscription} from "rxjs";
import {AuthService} from "../../../shared/services/auth.service";
import {RestService} from "../../../shared/services/rest.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationService} from "../../../shared/services/validation.service";
import {IMessageItem, NotificationMessageType, NotificationService} from "../../../shared/services/notification.service";
import {usersCreatePath, usersListPath} from "../../../shared/misc/constants";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.page.html',
    styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit, OnDestroy {

    public form: FormGroup;
    public id: number;
    public validId: boolean;

    public authInfo: IAuthResponse;
    private authSubscriber: Subscription;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private notificationService: NotificationService,
                private restService: RestService) { }

    ngOnInit() {
        this.authSubscriber = this.authService.authInfo
            .subscribe((info: IAuthResponse) => {
                this.authInfo = info;
            });

        this.form = this.formBuilder.group({
            id: [null],
            first_name: ['', Validators.compose([Validators.required])],
            last_name: ['', Validators.compose([Validators.required])],
            phone: [''],
            role: [''],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            newPassword: [''],
            confirmPassword: [''],
        });

        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.validId = (id && id !== usersCreatePath);
        if (this.validId) {
            this.id = Number(id);
            this.getAdmin(this.id);
            this.form.get('newPassword').setErrors(null);
            this.form.get('confirmPassword').setErrors(null);
            this.form.get('newPassword').setValidators(null);
            this.form.get('confirmPassword').setValidators(null);
        } else {
            this.form.get('newPassword').setValidators([Validators.required, Validators.minLength(3)]);
            this.form.get('confirmPassword').setValidators([Validators.required, Validators.minLength(3), ValidationService.compare('newPassword')]);
        }

        this.form.get('newPassword').valueChanges.subscribe((change) => {
            if (this.id) {
                if (this.form.get('newPassword').value !== '') {
                    this.form.get('newPassword').setValidators([Validators.required, Validators.minLength(3)]);
                    this.form.get('confirmPassword').setValidators([Validators.required, Validators.minLength(3), ValidationService.compare('newPassword')]);
                } else {
                    this.form.get('newPassword').setErrors(null);
                    this.form.get('confirmPassword').setErrors(null);
                    this.form.get('newPassword').setValidators(null);
                    this.form.get('confirmPassword').setValidators(null);
                }
            }
        });

    }

    ngOnDestroy(): void {
        this.authSubscriber.unsubscribe();
        this.authSubscriber = null;
    }

    getAdmin(id: number): void {
        this.restService.get('users/' + id.toString()).subscribe({
                next: (value: IBaseResponse) => {
                    const user = {...value.data, newPassword: ''};
                    this.form.patchValue(user);
                }
            }
        );
    }

    save(user: IUser): void {
        const adm = {...user, password: user.newPassword}
        const adminRequest: IBaseRequest = {data: adm};
        if (user.id) {
            this.restService.put('users/' + String(user.id), adminRequest)
                .subscribe({
                    next: (value: IBaseResponse) => {
                        const mess: IMessageItem = {
                            message: value.message,
                            type: NotificationMessageType.success};
                        this.notificationService.show(mess);
                    }
                });
        } else {
            this.restService.post('users/create', adminRequest)
                .subscribe({
                    next: (value: IBaseResponse) => {
                        const mess: IMessageItem = {
                            message: value.message,
                            type: NotificationMessageType.success};
                        this.notificationService.show(mess);
                    }
                });
        }
    }

    onSubmit(): void {
        if (this.form.invalid) {
            return;
        }
        if (!this.form.touched) {
            this.notificationService.show({message: 'Nothing changed',
                type: NotificationMessageType.warning});
            return;
        }
        this.save(this.form.value);
    }

    public errorHandling = (control: string, error: string) => {
        return this.form.controls[control].hasError(error);
    }

    back(): void {
        this.router.navigate([usersListPath]);
    }


}
