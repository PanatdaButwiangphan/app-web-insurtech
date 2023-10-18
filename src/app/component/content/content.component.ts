import { Component,ViewChild } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  solutions = [
    {
      icon: 'pi pi-cloud',
      header: 'Cloud and Infrastructure Modernization',
      content:
        'ยกระดับระบบโครงสร้างพื้นฐานทางด้าน IT ของธุรกิจ ผสานรวมระบบ Cloud และ On-Premises สู่ Hybrid Multi-Cloud',
      pdfUrl: 'https://www.africau.edu/images/default/sample.pdf', // URL ของ PDF สำหรับ Solution 1
    },
    {
      icon: 'pi pi-cloud',
      header: 'Solution2',
      content: 'Detail2',
    },
    {
      icon: 'pi pi-cloud',
      header: 'Solution3',
      content: 'Detail3',
    },
    {
      icon: 'pi pi-cloud',
      header: 'Solution4',
      content: 'Detail4',
    },
  ];

  images: string[] = [
    'assets/images/giveaway winner.png',
    'assets/images/event.png',
  ];

  // สร้างอ้างอิงไปยัง Carousel โดยใช้ ViewChild
  @ViewChild('carousel') carousel!: Carousel;
  responsiveOptions: any[] | undefined;
  isUserPage: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((urlSegments) => {
      // ตรวจสอบว่าผู้ใช้เข้าสู่หน้า "user" หรือไม่
      this.isUserPage =
        urlSegments.length > 0 && urlSegments[0].path === 'user';
    });
  }
}
