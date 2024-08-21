import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-aside',
  templateUrl: './dashboard-aside.component.html',
  styleUrls: ['./dashboard-aside.component.scss']
})
export class DashboardAsideComponent implements OnInit{

  constructor(protected router:Router){}
  ngOnInit(): void {
  }

  getRouter(): Router {

    return this.router;

  }

  exitPanel(){}

}
