import { Component, ViewChild } from '@angular/core';
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
        'Enhance security for Cloud, Data Center, devices and users across the organization. With a full range of solutions and services from Yip In Tsoi.',
      pdfUrl: 'https://www.africau.edu/images/default/sample.pdf',
    },
    {
      icon: 'pi pi-lock',
      header: 'Cyber Security',
      content:
        'Enhance security for Cloud, Data Center, devices and users across the organization. With a full range of solutions and services from Yip In Tsoi.',
    },
    {
      icon: 'pi pi-briefcase',
      header: 'Digital Business Solutions',
      content:
        'Adjust the business to Digital Business, moving forward with the Digital Transformation strategy Confidently with Yip In Tsoi',
    },
    {
      icon: 'pi pi-database',
      header: 'Data & Analytic Solutions',
      content:
        'Turn business data into value laying the foundation for data management to create new innovations for sustainable business growth',
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
