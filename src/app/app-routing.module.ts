import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './admin/add-role/add-role.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { EditRoleComponent } from './admin/edit-role/edit-role.component';

import { ListRoleComponent } from './admin/list-role/list-role.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ListStockComponent } from './vendor/list-stock/list-stock.component';
import { VendorDashboardComponent } from './vendor/vendor-dashboard/vendor-dashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"",component:LoginComponent},
  {path:"addrole",component:AddRoleComponent},
  {path:"listrole",component:ListRoleComponent},
  {path:"editrole/:roleId",component:EditRoleComponent},
  {path:"adduser",component:AddUserComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"vendor-dashboard",component:VendorDashboardComponent},
  {path:"liststock",component:ListStockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
