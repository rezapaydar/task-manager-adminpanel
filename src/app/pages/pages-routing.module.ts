import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardAuthGuard  } from '../shared/guard/dashboardauth.guard';
import { LoginAuthGuard } from '../shared/guard/loginauth.guard';
import { ChartsOverviewComponent } from './dashboard/charts-overview/charts-overview.component';
import { tecnicinListComponent } from './dashboard/shops-list/tecnicin-list.component';
import { AddNewShopComponent } from './dashboard/shops-list/tecnicin-add/add-new-shop.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[DashboardAuthGuard],children:[
      {path:'overview',component:ChartsOverviewComponent,canActivate:[DashboardAuthGuard]},
      {path:'tecnicin/list',component:tecnicinListComponent,canActivate:[DashboardAuthGuard]},
      {path:'tecnicin/new',component:AddNewShopComponent,canActivate:[DashboardAuthGuard]},
  ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
