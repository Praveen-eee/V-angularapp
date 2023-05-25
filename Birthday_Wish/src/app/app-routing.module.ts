import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddThemeComponent } from './admin/addtheme/addtheme.component';
import { AddonComponent } from './admin/addon/addon.component';
import { AddmenuComponent } from './admin/addmenu/addmenu.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LogComponent } from './log/log.component';
import { AddaddonsComponent } from './admin/addon/addaddons/addaddons.component';
import { UpdateaddonsComponent } from './admin/addon/updateaddons/updateaddons.component';
import { AddonHomeComponent } from './admin/addon/addon-home/addon-home.component';
import { AddaddmenuComponent } from './admin/addmenu/addaddmenu/addaddmenu.component';
import { UpdateaddmenuComponent } from './admin/addmenu/updateaddmenu/updateaddmenu.component';
import { AddmenuHomeComponent } from './admin/addmenu/addmenu-home/addmenu-home.component';
import { NewThemeComponent } from './admin/addtheme/new-theme/new-theme.component';
import { ThemeHomeComponent } from './admin/addtheme/theme-home/theme-home.component';
import { UpdatethemeComponent } from './admin/addtheme/updatetheme/updatetheme.component';
import { UserHomepageComponent } from './user/user-homepage/user-homepage.component';
import { BookingComponent } from './user/booking/booking.component';
import { ViewbookingComponent } from './user/viewbooking/viewbooking.component';
const routes: Routes = [
      { path: '', component: LoginComponent},
      { path: 'admin', component: AdminComponent,
        children:[
          {path:"themeHome",component:DashboardComponent},
          {path:"",component:DashboardComponent},
          { path: 'addtheme', component: AddThemeComponent,
          children:[
            {path: "",component:NewThemeComponent},            
            {path: "updatetheme/:themeId", component: UpdatethemeComponent}
          ]
        },
          { path: "addmenu", component: AddmenuComponent,
          children:[
            {path: "",component:AddmenuHomeComponent},
            {path:"Addaddmenu", component: AddaddmenuComponent},
            {path: "Updateaddmenu/:foodMenuID", component: UpdateaddmenuComponent}
          ]
        },
          { path: 'addon', component: AddonComponent,
          children:[
            {path : "", component:AddonHomeComponent},
            {path : "addAddon",component:AddaddonsComponent},
            {path : "updateaddons/:addOnid", component:UpdateaddonsComponent}
        ]
        }
      ]},
      { path: 'user', component: UserComponent,
      children:[
        { path: '', component: UserHomepageComponent},
        { path: 'userhome', component: UserHomepageComponent},
        { path: 'bookevent', component:BookingComponent},
        { path: 'viewbookevent', component:ViewbookingComponent}
      ]
    },
      { path: 'home', component: HomeComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'login', component: LoginComponent},


      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
