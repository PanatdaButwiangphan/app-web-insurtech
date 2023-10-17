// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  username: string | null = null; // เริ่มต้นด้วยค่า null

  constructor(private router: Router) {}
  ngOnInit() {}
  login() {
    this.router.navigate(['/sign-in']);
  }
  regis(){
    this.router.navigate(['/register']);
  }
}
