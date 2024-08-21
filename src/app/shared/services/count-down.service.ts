import { ElementRef, Injectable, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CountDownService {
  // Observable string sources
  public componentButtonSetter = new Subject<any>();
  // Observable string streams
  componentButtonGetter$ = this.componentButtonSetter.asObservable();

  // Observable string sources
  public componentParagraphSetter = new Subject<any>();
  // Observable string streams
  componentParagraphGetter$ = this.componentParagraphSetter.asObservable();

  // Observable string sources
  public rendererSetter = new Subject<Renderer2>();
  // Observable string streams
  rendererGetter$ = this.rendererSetter.asObservable();
  



  regexPhoneNumber:RegExp=/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
  title = 'dashboard-test';
  show = true;
  offOn = false;
  submitButtonText = "دریافت کد"
  subTextIfYouDontSubmit=`عضو نشده اید؟
  <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">شروع رایگان برای 10 روز</a>`;
  phoneNumber='';
  timesecond: number = 60;
  timeminute:number=2;
  interval:any;
  spinnertag:any=`
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_S1WN{animation:spinner_MGfb .8s linear infinite;animation-delay:-.8s}.spinner_Km9P{animation-delay:-.65s}.spinner_JApP{animation-delay:-.5s}@keyframes spinner_MGfb{93.75%,100%{opacity:.2}}</style>
  <circle class="spinner_S1WN" cx="4" cy="12" r="3"/>
  <circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3"/>
  <circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3"/>
  </svg>`;
  onlyNumberRegex=/^[0-9]*$/
  codeArray:Array<any>=['','','','','',''];




  constructor(private router:Router) { }

  public renderer: Renderer2 | undefined;
  public button: HTMLElement|undefined|Node;
  public hint:any;
  
  init(renderer:Renderer2, button: HTMLElement){

    this.renderer = renderer;
    this.button = button;



  }
  
  async startTimer(){
      
    this.timesecond--;
    this.timeminute--;

    this.offOn = true;
    this.submitButtonText = `    لطفا کمی صبر کنید ${this.spinnertag}`;

    if (this.regexPhoneNumber.test(this.phoneNumber)) {
    
      this.offOn =false;
      
      setTimeout(()=>{

        this.show = false ;
          this.offOn = false;
          this.submitButtonText = `ورود`; 
    
        },2000)

      this.interval = setInterval(async ()=>{
        this.subTextIfYouDontSubmit =`زمان باقی مانده تا درخواست کد جدید<p class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 inline"> ${this.timesecond} : ${this.timeminute} </p>  `
        if (this.timeminute >= 0) {
          this.timesecond--;
          if(this.timesecond<=0){
            this.timeminute--;
            if(this.timeminute==0) this.timesecond=60;
          }
        
          
        } else {
          this.subTextIfYouDontSubmit =`کد دریافت نکردید؟ `;
          this.componentButtonGetter$.subscribe((value)=>{
            this.button = value;
          });
          this.rendererGetter$.subscribe((value)=>{
            this.renderer = value;
            console.log(this.renderer);        
          })
          this.componentParagraphGetter$.subscribe(async (value:any)=>{            
            this.hint = value;
            setTimeout(()=>{
              this.renderer?.appendChild(value,this.button) 
            },1000)     
          })
          
          
          
        // this.subTextIfYouDontSubmit =`کد دریافت نکردید؟<p class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 inline" (click)="sendNewCode()"> درخواست کد جدید </p>  `
          this.timeminute = 1;
          this.timesecond = 60;
          this.pauseTimer();
        }

      },1000)
        
        
      
    }else{
      this.subTextIfYouDontSubmit = `عضو نشده اید؟
  <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">شروع رایگان برای 10 روز</a>`;
      this.offOn =false;
      Swal.fire({
        title: 'خطا!',
        text: 'فرمت وارد شده شماره تلفن اشتباه است',
        icon: 'error',
        confirmButtonText: 'متوجه شدم'
      })

      this.submitButtonText = `دریافت کد`;

    }


  }

  sendNewCode(){

    this.timesecond=60;
    this.timeminute=1;

    this.interval = setInterval(()=>{
      this.subTextIfYouDontSubmit =`زمان باقی مانده تا درخواست کد جدید<p class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 inline"> ${this.timesecond} : ${this.timeminute} </p>  `
      if (this.timeminute > 0) {
        this.timesecond--;
        if(this.timesecond<=0){
          this.timeminute--;
          if(this.timeminute<=0){
            this.timesecond=59;
            // this.subTextIfYouDontSubmit =`کد دریافت نکردید؟<p class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 inline" (click)="sendNewCode()"> درخواست کد جدید </p>  `
          }
        }
      }else {
      this.subTextIfYouDontSubmit =`کد دریافت نکردید؟  `
      setTimeout(()=>{
        this.renderer?.appendChild(this.hint,this.button) 
      },1000)
        this.timeminute = 1;
        this.timesecond = 60;
        this.pauseTimer();
      }

    },1000)

  }

  submitCode(){
    localStorage.setItem('isAuthenticated','yes');
    if (this.validationCode()) {
      this.router.navigate(['dashboard']);
    }else{
      return;
    }

    

  }

  pauseTimer(){

    // this.renderer?.appendChild(document.body,this.button);
    clearInterval(this.interval);
  }

  validationCode(){

        // Concatenate the array elements into a single string
        let concatenatedString = this.codeArray.join('');

        // Convert the concatenated string to a number
        let result = Number(concatenatedString);
        if (this.onlyNumberRegex.test(`${result}`)) {
          this.submitButtonText = `    لطفا کمی صبر کنید ${this.spinnertag}`;
    
          setTimeout(()=>{
      
              this.show = false ;
              this.offOn = false;
              this.submitButtonText = `ورود`; 
        
          },1000) 

            return true;
          
        }else{
    
          Swal.fire({
            title: 'خطا!',
            text: 'فرمت وارد شده شماره تلفن اشتباه است',
            icon: 'error',
            confirmButtonText: 'متوجه شدم'
          })

          return false;

    
        }

  }

}
