import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";

// import { AuthService } from "./auth.service";
  
@Injectable()
export class LoginAuthGuard implements CanActivate {
    gotoPath:any='';
    yOrN:boolean | Promise<boolean>=false;
    isAuthenticated:any ;
    constructor(
        private router : Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        // this.globalvar.loginprops = localStorage.getItem('username');        
        this.isAuthenticated = localStorage.getItem('isAuthenticated');

        if (this.isAuthenticated!='' || this.isAuthenticated!=null || this.isAuthenticated!=undefined) {
            this.router.navigate(['dashboard']);
            // this.gotoPath = 'login';
            
            this.yOrN = false;
        }
        else{
            this.router.navigate(['login']);
            // this.router.navigate(['profile']);
            this.yOrN = true;

        }
        return this.yOrN;

    }

    pather(){
            this.router.navigate([this.gotoPath]);
    }



}