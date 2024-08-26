import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DashboardAuthGuard  } from '../shared/guard/dashboardauth.guard';
import { LoginAuthGuard } from '../shared/guard/loginauth.guard';
import { ChartsOverviewComponent } from './dashboard/dashboard-overview/charts-overview.component';
import { tecnicinListComponent } from './dashboard/techinicin/tecnicin-list.component';
import { AddNewTechnicinComponent } from './dashboard/techinicin/tecnicin-add/add-new-techinicin.component';
import { AdminsComponent } from './dashboard/admins/admins.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { AddTaskComponent } from './dashboard/tasks/add-task/add-task.component';

const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[DashboardAuthGuard],children:[
      {path:'overview',component:ChartsOverviewComponent,canActivate:[DashboardAuthGuard]},
      {path:'tecnicin/list',component:tecnicinListComponent,canActivate:[DashboardAuthGuard]},
      {path:'tecnicin/new',component:AddNewTechnicinComponent,canActivate:[DashboardAuthGuard]},
      {path:'admins/list',component:AdminsComponent,canActivate:[DashboardAuthGuard]},
      {path:'tasks/list',component:TasksComponent,canActivate:[DashboardAuthGuard]},
      {path:'tasks/add',component:AddTaskComponent,canActivate:[DashboardAuthGuard]},
  ]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
