import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-reward',
  templateUrl: './list-reward.component.html',
  styleUrls: ['./list-reward.component.css'],
})
export class ListRewardComponent implements OnInit {
  results: any[] = [];
  showMenuButton: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.showMenuButton = params['showMenuButton'] === 'true';
    });
  }

  ngOnInit(): void {
    this.http.get<any>('API_ENDPOINT').subscribe((data) => {
      this.results = data; // แนะนำให้ data เป็นอาร์เรย์ของวันที่และเวลาที่มาจาก API
    });
  }

  showRewardDetail(date: string, time: string) {
    this.router.navigate(['/reward'], {
      queryParams: { date, time },
    });
  }
}
