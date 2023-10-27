import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisterService } from 'src/app/Service/User/user-register.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSignInComponent } from 'src/app/dialog-sign-in/dialog-sign-in.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: any;
  password: any;

  constructor(
    private router: Router,
    private userRegisterService: UserRegisterService,
    private dialog: MatDialog
  ) {}

  login() {
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      if (this.email === 'ad2566' && this.password === 'ad6652') {
        this.router.navigate(['/menu']);
      } else {
        this.router.navigate(['/user']);
      }
    }
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      this.userRegisterService.userSignIn(this.email, this.password).subscribe(
        (response) => {
          if ((response as any).userEmail === this.email) {
            if (this.email === 'ad2566' && this.password === 'ad6652') {
              const username = (response as any).userUsername;
              // ตั้งค่า username ใน UserRegisterService
              this.userRegisterService.setUsername(username);
              this.router.navigate(['/menu']);
            } else {
            // ดึงค่า username ออกมาจาก response
            const username = (response as any).userUsername;
            // ตั้งค่า username ใน UserRegisterService
            this.userRegisterService.setUsername(username);
            this.router.navigate(['/user']);

            }
          } else {
            this.openDialog('อีเมลผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
          }
        },
        (error) => {
          console.error('เกิดข้อผิดพลาดในการตรวจสอบบัญชีผู้ใช้', error);
          this.openDialog('เกิดข้อผิดพลาดในการตรวจสอบบัญชีผู้ใช้');
        }
      );
    } else {
      this.openDialog('กรุณากรอกอีเมลผู้ใช้และรหัสผ่าน');
    }
  console.log('Email:', this.email);
  console.log('Password:', this.password);
  
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  
  
  

  openDialog(message: string) {
    this.dialog.open(DialogSignInComponent, {
      data: { message },
    });
  }
}
