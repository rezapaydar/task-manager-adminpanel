import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardAuthGuard } from '../shared/guard/dashboardauth.guard';
import { LoginAuthGuard } from '../shared/guard/loginauth.guard';
import { ChartsOverviewComponent } from './dashboard/dashboard-overview/charts-overview.component';
import { tecnicinListComponent } from './dashboard/techinicin/tecnicin-list.component';
import { ExportExcellService } from '../shared/services/export-excell.service';
import { AddNewTechnicinComponent } from './dashboard/techinicin/tecnicin-add/add-new-techinicin.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { AdminsComponent } from './dashboard/admins/admins.component';
import { AddTaskComponent } from './dashboard/tasks/add-task/add-task.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';


registerSwiperElements();

@NgModule({
  declarations: [DashboardComponent, LoginComponent,ChartsOverviewComponent,AddNewTechnicinComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],providers:[
    ExportExcellService,
    DashboardAuthGuard,
    LoginAuthGuard,
    provideAnimations(), // required animations providers
    provideToastr()
  ]
})
export class PagesModule { }
