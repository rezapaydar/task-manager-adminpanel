import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../../../services/toast.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ModalService } from '../../../modal/modal.service';
import { initDropdowns } from 'flowbite';
import { SharedModule } from '../../../../shared.module';
import { ChangeRulePipe } from '../../../../pipes/change-rule.pipe';
import { Flowbite } from '../../../../flowbite.decorator';
import { usersRules } from '../../../../models/userRules';




@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrl: './edit-team.component.scss',
  standalone:true,
  imports:[SharedModule,ChangeRulePipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
@Flowbite()
export class EditTeamComponent {
  routerlink= inject(Router);
  toast= inject(ToastService);
  clipboard=inject(ClipboardModule);
  modalService = inject(ModalService);

  users:usersRules[] = [
    {username:'نام کاربری 1 ' , rule:'admin',imgUrl:''},
    {username:'نام کاربری 2 ' , rule:'senior technician',imgUrl:''},
    {username:'نام کاربری 3 ' , rule:'null',imgUrl:''},
    {username:'نام کاربری 4 ' , rule:'null',imgUrl:''},
    {username:'نام کاربری 5 ' , rule:'null',imgUrl:''},
    {username:'نام کاربری 6 ' , rule:'null',imgUrl:''},
  ]

  link='lkjljflkjfoijfowefjodijfidjcf / /fwerfrewf///fwrefr'
  copyAnimation(){
    this.toast.showSuccess('با موفقیت کپی شد','کپی شد');
  }

  @ViewChild('view', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  @ViewChild('view')view:TemplateRef<Element> | any;
  
  openModalTemplate(e?:any) {

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

}
