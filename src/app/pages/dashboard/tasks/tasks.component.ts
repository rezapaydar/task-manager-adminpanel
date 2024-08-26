import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgZone, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SwiperContainer } from 'swiper/element';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { technicin } from '../../../shared/models/technicin';
import { ExportExcellService } from '../../../shared/services/export-excell.service';
import { TimeService } from '../../../shared/services/time.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  loadingTable:boolean=false;
  columns:Array<any>=['ردیف','عنوان','تکنسین ارشد ','ادمین','درصد انجام','مختصات','وضعیت','','']
  data:Array<technicin>=[
    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: true,
      email: '',
      lastLogin: new Date
    },
    {
      id: '1', username: 'لورم', role: "manager", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },
    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },    {
      id: '1', username: 'لورم', role: "technicin", firstName: 'ادمین', created: new Date, update: new Date, personnelCode: '565645', lastName: 'مختصات', phoneNumber: '09186565984', status: false,
      email: '',
      lastLogin: new Date
    },
  ]
  viewData!:technicin;
  constructor(public modalService: ModalService,private exportExcellService:ExportExcellService,public timeService: TimeService,private cd: ChangeDetectorRef, private ngZone: NgZone){

  }

  @ViewChild('view', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;

  

  openModalTemplate(view: TemplateRef<Element>,item?:any) {
    this.viewData = item ;
    
    this.modalService.open(this.vcr, view, {
      animations: {
        modal: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '24rem',
      },
    });
  }

  swiperContainerId = 'why-us-swiper';
  index = 0;
  slidePerView = 1;

  @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  initialized = false;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.totalPages=Math.ceil(this.data.length / 10);     
    this.chunkedPageArray = this.data;
    this.data=this.chunkArray(this.chunkedPageArray,10)[this.page-1].items;



  }

  changeSlide(prevOrNext: number): void {
    
    
    if (prevOrNext === -1) {
      this.swiperRef.nativeElement.swiper.slidePrev();
    } else {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }

  exportToExcell(){
    this.exportExcellService.exportToExcel('shoplist')
  }

  createTechnicin(){
    this.modalService.close()

  }


  


  //* slice response array
  chunkArray(array: any[], chunkSize: number): any[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push({ items: chunk });
    }
    return result;
  }

    rulerLengthPage: number = 2;
    totalPages = 1;
    page:number=1;
    chunkedPageArray:any;
    //* offline pagination sale list
    getNextPageList(page:number){
      this.page = page;
      this.data=this.chunkArray(this.chunkedPageArray,10)[page-1].items;
        if (this.totalPages <= 5) {
          this.rulerLengthPage = this.totalPages;
        }
    }


}
