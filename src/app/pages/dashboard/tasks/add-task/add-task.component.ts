import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, NgZone, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { ExportExcellService } from '../../../../shared/services/export-excell.service';
import { TimeService } from '../../../../shared/services/time.service';
import { MapService } from '../../../../shared/components/map/map.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Flowbite } from '../../../../shared/flowbite.decorator';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [SharedModule],
  providers: [ToastrService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
@Flowbite()
export class AddTaskComponent {

  constructor(private toastService: ToastrService,public modalService: ModalService,private map:MapService,private exportExcellService:ExportExcellService,public timeService: TimeService,private cd: ChangeDetectorRef, private ngZone: NgZone){
  }

  @ViewChild('view', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;


  ngOnInit(): void {

    this.toastService.info('برای انتخاب یک مکان کلیک راست کنید','توجه!')

  }

  @ViewChild('view')view:TemplateRef<Element> | any;
  @HostListener('contextmenu',['$event'])
  openModalTemplate(e:any) {
    e.preventDefault();
    
    
    
    this.modalService.open(this.vcr,this.view,{
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
    })
    
  }

  createTask(){
    this.map.addToMap()
    this.modalService.close()
  }

}
