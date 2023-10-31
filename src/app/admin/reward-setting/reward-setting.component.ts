import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Data } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { adminRewardSettingService } from 'src/app/Service/Admin/admin-reward-setting.service';

@Component({
  selector: 'app-reward-setting',
  templateUrl: './reward-setting.component.html',
  styleUrls: ['./reward-setting.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class RewardSettingComponent {
  space: string = ' ';

  showTable: boolean = true;
  date: string = '';
  time: string = '';
  rewardno: string = '';
  rewardamount?: number;
  reward: string = '';
  // table: any[] = [];
  selectedData!: any[];
  showDeleteConfirmation = false;

  table!: Data[];

  clonedDatas: { [s: string]: Data } = {};
  rewards: any[] = [
    { name: 'รางวัลที่ 1', value: 1 },
    { name: 'รางวัลที่ 2', value: 2 },
    { name: 'รางวัลที่ 3', value: 3 },
  ];

  
  constructor(
    private adminRewardService: adminRewardSettingService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private http: HttpClient,

  ) {
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
      let dateFormat = this.date.split('-');

      const rewardSetting = {
        rewardDate: `${dateFormat[1]}-${dateFormat[0]}-${dateFormat[2]}`,
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
    if (this.selectedData.length > 0) {
      this.confirmationService.confirm({
        message: 'ต้องการลบใช่หรือไม่?',
        header: 'ยืนยันการลบ',
        icon: 'pi pi-info-circle',
        accept: () => {
          const rewardIds = this.selectedData.map(
            (item) => item.rewardId as number
          );

          this.adminRewardService.deleteReward(rewardIds).subscribe(
            () => {
              console.log('Rewards deleted from the database:', rewardIds);
              this.deleteRewardsLocally(rewardIds);
            },
            (error) => {
              console.error('Error deleting rewards:', error);
            }
          );
          this.deleteRewardsLocally(
            this.selectedData.map((item) => item.rewardId)
          );
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'ลบรายการสำเร็จ',
          });
        },
        reject: (type: ConfirmEventType) => {
          switch (type) {
            case ConfirmEventType.REJECT:
              this.messageService.add({
                severity: 'error',
                summary: 'ยกเลิก',
                detail: 'ทำการยกเลิกสำเร็จ',
              });
              break;
            case ConfirmEventType.CANCEL:
              this.messageService.add({
                severity: 'warn',
                summary: 'Cancelled',
                detail: 'You have cancelled',
              });
              break;
          }
        },
      });
    } else {
      console.log('Please select items to delete');
    }
  }

  private deleteRewardsLocally(rewardIds: number[]) {
    this.table = this.table.filter(
      (item) => !rewardIds.includes(item['rewardId'])
    );
    console.log('Rewards deleted locally:', rewardIds);
  }

  onRowEditInit(data: Data) {
    this.clonedDatas[data['id'] as string] = { ...data };
  }

 onRowEditSave(data: Data) {
  if (data['rewardQuantity'] > 0) {
    const data = this.selectedData.map(
      (item) => item.data as string
    );
    this.adminRewardService.updateData(data)
      .subscribe(
        (response) => {
          console.log("update success");
          
        },
        (error) => {
          console.error('Error saving/updating data:', error);
          // ดำเนินการเมื่อเกิดข้อผิดพลาด
        }
      );
  } else {
    // ข้อมูลไม่ถูกต้อง
  }
}
  



  onRowEditCancel(data: Data, index: number) {
    this.table[index] = this.clonedDatas[data['id'] as string];
    delete this.clonedDatas[data['id'] as string];
  }
  
}
