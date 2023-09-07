import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegisterService } from 'src/app/Service/User/user-sign-in.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogSignInComponent } from 'src/app/dialog-sign-in/dialog-sign-in.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userRegisterService: UserRegisterService,
    private dialog: MatDialog
  ) {}

  login() {
    if (this.email.trim() !== '' && this.password.trim() !== '') {
      this.userRegisterService.userSignIn(this.email, this.password).subscribe(
        (response) => {
          if ((response as any).userEmail === this.email) {
            if (this.email === 'ad2566' && this.password === 'ad6652') {
              this.router.navigate(['/menu']);
            } else {
              this.router.navigate(['/user']);
            }
          } else {
            this.openDialog('เกิดข้อผิดพลาดในการตรวจสอบบัญชีผู้ใช้');
          }
        },
        (error) => {
          //console.error('เกิดข้อผิดพลาดในการตรวจสอบบัญชีผู้ใช้', error);
          this.openDialog('อีเมลผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        }
      );
    } else {
      this.openDialog('กรุณากรอกอีเมลผู้ใช้และรหัสผ่าน');
    }
  }

  openDialog(message: string) {
    this.dialog.open(DialogSignInComponent, {
      data: { message },
    });
  }
}
