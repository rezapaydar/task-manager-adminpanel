import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { CountDownService } from '../../shared/services/count-down.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAuthenticated:any;
  button:any;
  constructor(public countDown:CountDownService,private elementRef: ElementRef<HTMLElement>,private renderer: Renderer2,private router: Router){}
  ngOnInit(): void {
    this.isAuthenticated = localStorage.getItem('isAuthenticated');
    if (this.isAuthenticated!='' || this.isAuthenticated!=null || this.isAuthenticated!=undefined || this.isAuthenticated =="yes") {
     this.router.navigate(['/dashboard'])
    //  Swal.fire({
    //   title: 'خطا!',
    //   text: 'لطفا اول از سیستم خارج شوید',
    //   icon: 'error',
    //   confirmButtonText: 'متوجه شدم'
    // })    
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
