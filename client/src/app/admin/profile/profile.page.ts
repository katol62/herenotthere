import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAuthResponse} from '../../shared/http-data';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {PopoverController} from '@ionic/angular';
import {IMenuItems, PopoverMenuComponent} from '../../components/popover-menu/popover-menu.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

  public authInfo: IAuthResponse;
  private authSubscriber: Subscription;

  private menu: IMenuItems[] = [
    {title: 'Notifications', path: '/notifications'},
    {title: 'Logout', action: 'logout'}
  ];

  constructor(private popoverController: PopoverController,
              private authService: AuthService,
              private router: Router) { }

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
