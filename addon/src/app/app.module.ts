import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddonComponent } from './admin/addon/addon.component';
import { HeaderComponent } from './admin/header/header.component';
import { ThemeComponent } from './admin/theme/theme.component';
import { FoodComponent } from './admin/food/food.component';
import { FormsModule } from '@angular/forms';
import { UpdateaddonsComponent } from './admin/addon/updateaddons/updateaddons.component';
import { AddaddonsComponent } from './admin/addon/addaddons/addaddons.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddonComponent,
    HeaderComponent,
    ThemeComponent,
    FoodComponent,
    UpdateaddonsComponent,
    AddaddonsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
