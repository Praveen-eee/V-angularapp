import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonComponent } from './admin/addon/addon.component';
import { AdminComponent } from './admin/admin.component';
import { FoodComponent } from './admin/food/food.component';
import { ThemeComponent } from './admin/theme/theme.component';
import { UpdateaddonsComponent } from './admin/addon/updateaddons/updateaddons.component';
import { AddaddonsComponent } from './admin/addon/addaddons/addaddons.component';

const routes: Routes = [
  {path : "", component:AdminComponent},
  {path: "addTheme" , component: ThemeComponent},
  {path : "addFood", component:FoodComponent},
  {path : "addAddons", component:AddonComponent},
  {path : "addAddon",component:AddaddonsComponent},
  {path : "updateaddons/:addOnid", component:UpdateaddonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
