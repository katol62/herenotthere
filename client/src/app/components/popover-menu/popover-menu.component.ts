import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';

export interface IMenuItems {
  title: string;
  path?: string;
  action?: string;
}

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {

  public menuItems: IMenuItems[] = [];

  constructor(private navParams: NavParams,
              private popoverController: PopoverController) {
  }
  ngOnInit() {
    console.log(this.navParams.data);
    this.menuItems = this.navParams.get('menu');
  }

  async onClick(data: IMenuItems): Promise<any> {
    await this.popoverController.dismiss(data);
  }

}
