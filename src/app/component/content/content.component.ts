import { Component, ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  solutions: any[] = [];

  images: string[] = [
    'assets/images/giveaway winner.png',
    'assets/images/event.png',
  ];

  // สร้างอ้างอิงไปยัง Carousel โดยใช้ ViewChild
  @ViewChild('carousel') carousel!: Carousel;
  responsiveOptions: any[] | undefined;
  isUserPage: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.url.subscribe((urlSegments) => {
      // ตรวจสอบว่าผู้ใช้เข้าสู่หน้า "user" หรือไม่
      this.isUserPage =
        urlSegments.length > 0 && urlSegments[0].path === 'user';
    });
    // Make an HTTP GET request to your API
    this.http.get<any[]>('http://94.74.114.51:7080/insurtech/api/v1/solutionProducts').subscribe((data) => {
      // Assign the fetched data to your solutions array
      this.solutions = data;
    });
  }
}
