import {Component, Injector, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";

export enum EConfirmAction {
    DELETE= 'delete'
}

export interface ConfirmData {
    action: EConfirmAction;
    data?: any;
}

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export abstract class AlertComponent implements OnInit {

    protected alertController: AlertController;

    protected constructor(protected injector: Injector) {
        this.alertController = injector.get(AlertController);
    }

    ngOnInit() {}

    async presentAlertConfirm(title: string, message: string, data?: ConfirmData): Promise<any> {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: () => {
                        console.log('Confirm Ok');
                        if (data) {
                            this.processOkHandler(data);
                        }
                    }
                }
            ]
        });

        await alert.present();
    }

    async presentAlert(title: string, message: string): Promise<any> {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            message: message,
            buttons: ['OK']
        });

        await alert.present();
    }

    protected abstract processOkHandler(data: any): void


}
