import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './home-page/sign-in/signin.component';
import { RegisterComponent } from './user/register/register.component';
import { RewardComponent } from './home-page/reward/reward.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { MenuComponent } from './admin/menu/menu.component';
import { RewardSettingComponent } from './admin/reward-setting/reward-setting.component';
import { LuckyDrawComponent } from './admin/lucky-draw/lucky-draw.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';
import { RewardCompleteUserComponent } from './user/reward-complete-user/reward-complete-user.component';
import { ListRewardComponent } from './home-page/list-reward/list-reward.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'prefix' },
  //-----------------------user------------------------
  { path: 'user', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'reward-complete-user', component: RewardCompleteUserComponent },

  //---------------------------admin----------------------
  // { path: 'admin', component: AdminComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reward-setting', component: RewardSettingComponent },
  { path: 'lucky-draw', component: LuckyDrawComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  //-----------------------------home---------------------------
  { path: 'home-page', component: HomePageComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'reward', component: RewardComponent },
  { path: 'list-reward', component: ListRewardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
