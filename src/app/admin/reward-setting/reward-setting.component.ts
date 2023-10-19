import { Component } from '@angular/core';

@Component({
  selector: 'app-reward-setting',
  templateUrl: './reward-setting.component.html',
  styleUrls: ['./reward-setting.component.css'],
})
export class RewardSettingComponent {
  showTable: boolean = true;
  date: string = '';
  time: string = '';
  rewardno: string = '';
  rewardamount: string = '';
  reward: string = '';

  add() {
    this.showTable = true;
  }
  clear() {
    this.showTable = true;
    this.date = "";
    this.time = "";
    this.rewardno = "";
    this.rewardamount = "";
    this.reward = "";
  }
}
