import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardAuthGuard } from '../shared/guard/dashboardauth.guard';
import { LoginAuthGuard } from '../shared/guard/loginauth.guard';
import { ChartsOverviewComponent } from './dashboard/charts-overview/charts-overview.component';
import { tecnicinListComponent } from './dashboard/shops-list/tecnicin-list.component';
import { ExportExcellService } from '../shared/services/export-excell.service';
import { AddNewShopComponent } from './dashboard/shops-list/tecnicin-add/add-new-shop.component';
import { AddtoastService } from '../shared/services/addtoast.service';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();

@NgModule({
  declarations: [DashboardComponent, LoginComponent,ChartsOverviewComponent,AddNewShopComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],providers:[
    ExportExcellService,
    DashboardAuthGuard,
    LoginAuthGuard,
    AddtoastService
  ]
})
export class PagesModule { }
