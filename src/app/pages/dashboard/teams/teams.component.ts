import { Component,CUSTOM_ELEMENTS_SCHEMA,inject, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Flowbite } from '../../../shared/flowbite.decorator';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { CommonModule } from '@angular/common';
import { usersRules } from '../../../shared/models/userRules';


@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
@Flowbite()
export class TeamsComponent {
    panelShown:boolean=false;
    modalService = inject(ModalService);

    users:usersRules[] = [
      {username:'علی' , rule:'admin',imgUrl:''},
      {username:'مهدی' , rule:'senior technician',imgUrl:''},
      {username:'حسین' , rule:'null',imgUrl:''},
      {username:'کامبیز' , rule:'null',imgUrl:''},
      {username:'سیشلی' , rule:'null',imgUrl:''},
      {username:'سید ناصر' , rule:'null',imgUrl:''},
    ]

    constructor(){
      
    }

    @ViewChild('viewL', { static: true, read: ViewContainerRef })
    vcr!: ViewContainerRef;
    @ViewChild('viewL')view:TemplateRef<Element> | any;
    
    addTeamWithModal(e?:any) {

      // alert('hi')
  
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

    teamMembervalue:string='';
    filteredTeamMembers(): any {
      return this.users.filter((value:usersRules) =>value.username.includes(this.result));
    }

    teamFromArray:usersRules[]=[]
    result:string=''
    changeValueTeamsMember(e:any):any{
      console.log(e);
      
      const index = this.teamFromArray.indexOf(e);
      if (index !== -1) {
        this.teamFromArray.splice(index, 1);
      }else{
        this.teamFromArray.push(e)
      }
      this.result = this.teamFromArray.join(", ");
  
      return this.result;
    }

}
