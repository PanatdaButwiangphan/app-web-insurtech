import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--------------------------------------primeng---------------------------------------
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordModule } from 'primeng/password';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorModule } from 'primeng/paginator';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AccordionModule } from 'primeng/accordion';
import { GalleriaModule } from 'primeng/galleria';
import { TreeSelectModule } from 'primeng/treeselect';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { ScrollerModule } from 'primeng/scroller';
import { MultiSelectModule } from 'primeng/multiselect';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { MatButtonModule } from '@angular/material/button'; // นำเข้า MatButtonModule
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';



//--------------------------------------user---------------------------------------
import { UserComponent } from './user/user.component';

import { ChangePasswordComponent } from './user/change-password/change-password.component';

//-----------------------------------admin------------------------------------
import { MenuComponent } from './admin/menu/menu.component';
import { RewardSettingComponent } from './admin/reward-setting/reward-setting.component';
import { LuckyDrawComponent } from './admin/lucky-draw/lucky-draw.component';
import { ResetPasswordComponent } from './admin/reset-password/reset-password.component';

//-------------------------------------home------------------------------------------
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './home-page/sign-in/signin.component';
import { RewardComponent } from './home-page/reward/reward.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentComponent } from './component/content/content.component';
import { DialogRewardComponent } from './dialog-reward/dialog-reward.component';


import { DialogModule } from 'primeng/dialog';
import { RegisterComponent } from './user/register/register.component';
import { CompletComponent } from './user/complet/complet.component';
import { NavbarCompletComponent } from './component/navbar-complet/navbar-complet.component';
import { RewardCompleteUserComponent } from './user/reward-complete-user/reward-complete-user.component';
import { DialogSignInComponent } from './dialog-sign-in/dialog-sign-in.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListRewardComponent } from './home-page/list-reward/list-reward.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomePageComponent,
    SigninComponent,
    RewardComponent,
    ChangePasswordComponent,
    MenuComponent,
    RewardSettingComponent,
    LuckyDrawComponent,
    ResetPasswordComponent,
    NavbarComponent,
    ContentComponent,
    DialogRewardComponent,
    RegisterComponent,
    CompletComponent,
    NavbarCompletComponent,
    RewardCompleteUserComponent,
    DialogSignInComponent,
    ListRewardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
    RippleModule,
    CardModule,
    CarouselModule,
    FormsModule,
    CalendarModule,
    AutoCompleteModule,
    DropdownModule,
    InputTextModule,
    ConfirmDialogModule,
    PasswordModule,
    MatCardModule,
    MatIconModule,
    PaginatorModule,
    DialogModule,
    KeyFilterModule,
    AccordionModule,
    GalleriaModule,
    TreeSelectModule,
    SplitButtonModule,
    ToastModule,
    ListboxModule,
    ScrollerModule,
    MultiSelectModule,
    ConfirmPopupModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    ProgressSpinnerModule,
    MatDialogModule,
    TableModule,
  ],

  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
