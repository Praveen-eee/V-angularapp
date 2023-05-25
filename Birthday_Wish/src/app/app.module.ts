import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './user/navbar-user/navbar-user.component';
import { AddmenuComponent } from './admin/addmenu/addmenu.component';
import { AddonComponent } from './admin/addon/addon.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LogComponent } from './log/log.component';
import { UpdateaddonsComponent } from './admin/addon/updateaddons/updateaddons.component';
import { AddaddonsComponent } from './admin/addon/addaddons/addaddons.component';
import { AddonHomeComponent } from './admin/addon/addon-home/addon-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddaddmenuComponent } from './admin/addmenu/addaddmenu/addaddmenu.component';
import { UpdateaddmenuComponent } from './admin/addmenu/updateaddmenu/updateaddmenu.component';
import { AddmenuHomeComponent } from './admin/addmenu/addmenu-home/addmenu-home.component';
import { AddThemeComponent } from './admin/addtheme/addtheme.component';
import { NewThemeComponent } from './admin/addtheme/new-theme/new-theme.component';
import { ThemeHomeComponent } from './admin/addtheme/theme-home/theme-home.component';
import { UpdatethemeComponent } from './admin/addtheme/updatetheme/updatetheme.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BookingComponent } from './user/booking/booking.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    AddThemeComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    AddmenuComponent,
    AddonComponent,
    DashboardComponent,
    UpdateaddonsComponent,
    AddaddonsComponent,
    LogComponent,
    AddonHomeComponent,
    AddaddmenuComponent,
    UpdateaddmenuComponent,
    AddmenuHomeComponent,
    NewThemeComponent,
    ThemeHomeComponent,
    UpdatethemeComponent,
    UserHomepageComponent,
    BookingComponent,
    ViewbookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
    ]),
    FontAwesomeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
