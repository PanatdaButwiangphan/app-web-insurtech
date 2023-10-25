import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class adminRewardSettingService {
  constructor(private http: HttpClient) { }

  addReward(reward: any) {
    return this.http
      .post<any>('http://94.74.114.51:7080/insurtech/api/v1/reward', reward)
      .pipe((res: any) => res);
  }
  showReward() {
    return this.http
      .get<any>('http://94.74.114.51:7080/insurtech/api/v1/rewards')
      .pipe((res: any) => res);
  }

  deleteReward(rewardIds: any) {
    const url = 'http://94.74.114.51:7080/insurtech/api/v1/rewards';
    return this.http
      .delete<any>(url, { body: rewardIds })
      .pipe((res: any) => res);
  }
}
