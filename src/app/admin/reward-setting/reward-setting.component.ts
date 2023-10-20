import { Component } from '@angular/core';
import { adminRewardSettingService } from 'src/app/Service/Admin/admin-reward-setting.service';

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
  rewardamount?: number;
  reward: string = '';
  table: any[] = [];
  selectedData!: any[];
  constructor(private adminRewardService: adminRewardSettingService) {
    this.adminRewardService.showReward().subscribe(
      (response) => {
        this.table = response as any[];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  add() {
    if (
      this.date != '' &&
      this.time != '' &&
      this.reward != '' &&
      this.rewardamount != 0
    ) {
      const rewardSetting = {
        rewardDate: this.date,
        rewardTitle: this.reward,
        rewardQuantity: this.rewardamount,
        rewardTime: this.time,
      };
      this.adminRewardService.addReward(rewardSetting).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.adminRewardService.showReward().subscribe(
      (response) => {
        this.table = response as any[];
      },
      (error) => {
        console.log(error);
      }
    );
    this.showTable = true;
  }
  clear() {
    this.showTable = true;
    this.date = '';
    this.time = '';
    this.rewardno = '';
    this.rewardamount = 0;
    this.reward = '';
  }
  delete() {
    console.log(this.selectedData[0].rewardId);
  }
}
