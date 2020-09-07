import {Component, OnDestroy, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {IMenuItems, PopoverMenuComponent} from '../../components/popover-menu/popover-menu.component';
import {Router} from '@angular/router';
import {IAuthResponse} from '../../shared/http-data';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit, OnDestroy {

  public authInfo: IAuthResponse;
  private authSubscriber: Subscription;

  private menu: IMenuItems[] = [
    {title: 'Profile', path: '/profile'},
    {title: 'Logout', action: 'logout'}
  ];

  constructor(private popoverController: PopoverController,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

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
          if (data.data.action === 'logout') {
            this.authService.onLogout();
            this.router.navigate(['/']);
          }
        }
      }
    });

    return await popover.present();
  }

  ngOnDestroy(): void {
    this.authSubscriber.unsubscribe();
    this.authSubscriber = null;
  }

}
