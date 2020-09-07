import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Subscription} from 'rxjs';
import {IMessageItem, NotificationMessageType, NotificationService} from '../../shared/services/notification.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(public alertController: AlertController,
              private zone: NgZone,
              private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.notification$.subscribe((message: IMessageItem) => {
      this.zone.run( () => {
            this.openMessage(message);
          }
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async openMessage(message: IMessageItem): Promise<any> {
    const initObject = {
      header: message.type === NotificationMessageType.error ? 'Error' : (message.type === NotificationMessageType.warning ? 'Warning' : 'Info'),
      message: message.message,
      buttons: ['OK']
    };

    const alert = await this.alertController.create(initObject);
    await alert.present();
  }

}
