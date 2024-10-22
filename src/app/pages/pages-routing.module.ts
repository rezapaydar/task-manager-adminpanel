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
  {path:'dashboard',component:DashboardComponent,children:[

      {path:'overview',component:ChartsOverviewComponent},
      {path:'tecnicin/list',component:tecnicinListComponent},
      {path:'tecnicin/new',component:AddNewTechnicinComponent},
      {path:'admins/list',component:AdminsComponent},
      {path:'tasks/list',component:TasksComponent},
      {path:'tasks/add',component:AddTaskComponent},
      {path:'teams/list',component:TeamsComponent,children:[
        {path:'',component:TeamsPanelComponent},
        {path:'edit',component:EditTeamComponent},
      ]},
      {path:'store/panel',component:StoreComponent},
      {path:'store/panel/show-all',component:ShowAllToolsComponent},
      {path:'logs',component:LogsComponent},
  ]},
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
