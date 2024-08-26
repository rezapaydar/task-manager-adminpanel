import { Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CountDownService } from '../../shared/services/count-down.service';
import Swal from 'sweetalert2';
import { SharedModule } from '../../shared/shared.module';
import { LoginApiService } from './api/login-api.service';
import { AuthServiceService } from '../../shared/services/auth-service.service';
import { responseLogin } from '../../shared/models/loginresponse';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  isAuthenticated:any;
  button:any;
  loginData={
    username:'',
    password:'',
  }

  constructor(private authservice:AuthServiceService,private loginapi:LoginApiService,public countDown:CountDownService,private elementRef: ElementRef<HTMLElement>,private renderer: Renderer2,private router: Router){}
  ngOnInit(): void {
    // this.isAuthenticated = localStorage.getItem('isAuthenticated');
    this.authservice.removeToken()
    if (this.authservice.getToken()) {
     this.router.navigate(['/dashboard'])
    }else{
     this.router.navigate(['/login'])

    }

  }

  @ViewChild("password") password!: NgForm;
  @ViewChild("username") username!: NgForm;

  sendForm(){
    // console.log(this.loginapi.login(this.loginData));
    if (this.username.valid||this.password.valid) {
      this.loginapi.login(this.loginData).subscribe(
        (res:responseLogin)=>{
          this.authservice.saveToken(res.token);
          this.authservice.saveUserInfo(res);
          this.router.navigate(['/dashboard'])
  
        },
        (err:Error)=>{
          
          console.error(err);
          return false;
        }
      );
    } else {
      
    }    

  }

  ngAfterViewInit() {

    this.buttonCreator();
    this.elementRef.nativeElement.querySelectorAll('[data-focus-input-init]').forEach((element:any) => {

      element.addEventListener('keyup', (event:any) => {


        const prevId = element.getAttribute('data-focus-input-prev');

        const nextId = element.getAttribute('data-focus-input-next');

        this.focusNextInput(element, prevId, nextId);

        if (event.key === "Backspace" || event.code === "Backspace" || event.keyCode === 8) {

          this.focusPrevInput(element,prevId,nextId);

        }

      });



    });

  }

  focusPrevInput(el: HTMLElement, prevId: string, nextId: string){

    if (prevId) {

      document.getElementById(prevId)!.focus();

    }

  }

  focusNextInput(el: HTMLElement, prevId: string, nextId: string) {

    if (el.nodeValue?.length === 0) {

      if (prevId) {

        document.getElementById(prevId)!.focus();

      }

    } else {

      if (nextId) {

        document.getElementById(nextId)!.focus();

      }

    }

  }



  startTimer() {
    
    this.countDown.startTimer();
    setTimeout(()=>{
      this.ngAfterViewInit();
    },2000)
    // this.buttonCreator();

  }

  buttonCreator(){

    this.button = this.renderer.createElement('button');
    this.renderer.addClass(this.button, "font-semibold");
    this.renderer.addClass(this.button, "leading-6");
    this.renderer.addClass(this.button, "text-indigo-600");
    this.renderer.addClass(this.button, "hover:text-indigo-500");
    this.renderer.addClass(this.button, "inline");
    this.renderer.setProperty(this.button, 'innerHTML', 'درخواست کد جدید');
    this.renderer.listen(this.button, 'click',()=>{
        this.countDown.sendNewCode();
    });
    this.countDown.componentButtonSetter.next(this.button);
    const element=document.getElementById('hint-form');
    this.countDown.componentParagraphSetter.next(element);
    this.countDown.rendererSetter.next(this.renderer);
    
    

  }

  pauseTimer(){
    this.countDown.pauseTimer();
  }

  submitCode(){
    this.countDown.submitCode()
  }

}
