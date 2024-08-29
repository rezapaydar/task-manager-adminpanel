import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, NgZone, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { ExportExcellService } from '../../../../shared/services/export-excell.service';
import { TimeService } from '../../../../shared/services/time.service';
import { MapService } from '../../../../shared/components/map/map.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Flowbite } from '../../../../shared/flowbite.decorator';
import { initDropdowns, initFlowbite, Modal } from 'flowbite';


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
  teams:string[]=['تیم 1 ','تیم 2','تیم 3'];
  teamMembers=[
    {imgurl:'img/member.png',name:'عضو 1'},
    {imgurl:'img/member.png',name:'عضو 2'},
    {imgurl:'img/member.png',name:'عضو 3'},
  ];
  
  levelsToDoArray:string[]=[];
  badgeDefault = ``;

  badgeArray:string[]=[];
  badgeInput: string = '';


  teamInputvalue:string='';
  teamMembervalue:string='';
  teamMemberَArray:string[]=[];
  constructor(private renderer: Renderer2,private toastService: ToastrService,public modalService: ModalService,private map:MapService,private exportExcellService:ExportExcellService,public timeService: TimeService,private cd: ChangeDetectorRef, private ngZone: NgZone){
  }

  badgeResult:string = '';
  onEnter(){
    if (this.badgeInput.trim()) {
      this.badgeArray.push(this.badgeInput);
      this.badgeInput = '';
    }

  }

  removeBadge(index: number): void {
    this.badgeArray.splice(index, 1);
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
    initDropdowns();

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

  changeValueTeams(e:string){
    this.teamInputvalue = e;
  }

  result:string=''
  changeValueTeamsMember(e:any):any{
    const index = this.teamMemberَArray.indexOf(e);
    if (index !== -1) {
      this.teamMemberَArray.splice(index, 1);
    }else{
      this.teamMemberَArray.push(e)
    }
    this.result = this.teamMemberَArray.join(", ");

    return this.result;
  }

  filteredItems(): string[] {
    return this.teams.filter(item => item.toLowerCase().includes(this.teamInputvalue.toLowerCase()));
  }

  filteredTeamMembers(): any {
    return this.teamMembers.filter(value =>value.name.includes(this.teamMembervalue));
  }

  @ViewChild('viewLT')viewlt:TemplateRef<Element> | any;
  toLevelTwoAddTask(){

    this.modalService.open(this.vcr,this.viewlt,{
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

  submitTask(){
    this.toastService.success('تسک اضافه شد','موفق!')
    this.modalService.close()
  }

}
