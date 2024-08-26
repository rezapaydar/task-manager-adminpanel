import { Component } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { responseLogin } from '../../models/loginresponse';

@Component({
  selector: 'header-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.scss']
})
export class NavbarDashboardComponent {
userinfo!:responseLogin;
constructor(private auth:AuthServiceService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.userinfo = JSON.parse(this.auth.getUserInfo());
}

}
