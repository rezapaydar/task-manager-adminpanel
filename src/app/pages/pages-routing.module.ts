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
import { TeamsComponent } from './dashboard/teams/teams.component';
import { EditTeamComponent } from '../shared/components/teams/components/edit-team/edit-team.component';
import { TeamsPanelComponent } from '../shared/components/teams/components/teams-panel/teams-panel.component';
import { StoreComponent } from './dashboard/store/store.component';
import { ShowAllToolsComponent } from './dashboard/store/show-all-tools/show-all-tools.component';
import { LogsComponent } from './dashboard/logs/logs.component';

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
      {path:'teams/list',component:TeamsComponent,canActivate:[DashboardAuthGuard],children:[
        {path:'',component:TeamsPanelComponent,canActivate:[DashboardAuthGuard]},
        {path:'edit',component:EditTeamComponent,canActivate:[DashboardAuthGuard]},
      ]},
      {path:'store/panel',component:StoreComponent,canActivate:[DashboardAuthGuard]},
      {path:'store/panel/show-all',component:ShowAllToolsComponent,canActivate:[DashboardAuthGuard]},
      {path:'logs',component:LogsComponent,canActivate:[DashboardAuthGuard]},
  ]},
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
