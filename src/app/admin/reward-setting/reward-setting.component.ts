import { Component } from '@angular/core';

@Component({
  selector: 'app-reward-setting',
  templateUrl: './reward-setting.component.html',
  styleUrls: ['./reward-setting.component.css'],
})
export class RewardSettingComponent {
  showTable: boolean = false;

  add() {
    this.showTable = true;
  }
  clear() {
    this.showTable = false;
  }
}
