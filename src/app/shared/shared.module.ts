import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { SafehtmlPipe } from './pipes/safehtml.pipe';
import { OnlyNumbersDirectiveDirective } from './directives/only-numbers-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardAsideComponent } from './components/dashboard-aside/dashboard-aside.component';
import { NavbarDashboardComponent } from './components/dashboard-header/navbar-dashboard.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { RouterModule } from '@angular/router';
// import { SpreadSheetsModule } from "@mescius/spread-sheets-angular";
import { ExportExcellService } from './services/export-excell.service';
import { AddtoastService } from './services/addtoast.service';
import { MapComponent } from './components/map/map.component';
import { ModalComponent } from './components/modal/modal.component';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { TimeService } from './services/time.service';
import { StatusreturnPipe } from './pipes/statusreturn.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ClickedOutsideDirective } from './directives/clickoutside.directive';


@NgModule({
  declarations: [
    PaginationComponent,
    StatusreturnPipe,
    NavbarDashboardComponent,
    ThemeTogglerComponent,
    DashboardAsideComponent,
    SafehtmlPipe,
    OnlyNumbersDirectiveDirective,
    DashboardAsideComponent,
    ProfileCardComponent,
    MapComponent,
    ModalComponent,
    SmartTableComponent,
    ClickedOutsideDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports:[
    ClickedOutsideDirective,
    PaginationComponent,
    StatusreturnPipe,
    SmartTableComponent,
    ModalComponent,
    MapComponent,

    // SpreadSheetsModule,
    RouterModule,
    ProfileCardComponent,
    NavbarDashboardComponent,
    DashboardAsideComponent,
    // NgApexchartsModule,
    ThemeTogglerComponent,
    SafehtmlPipe,
    OnlyNumbersDirectiveDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],providers:[
    ExportExcellService,
    AddtoastService,
    TimeService
  ]
})
export class SharedModule { }
