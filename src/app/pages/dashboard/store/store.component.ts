import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { SwiperContainer } from 'swiper/element';
import { Tools } from '../../../shared/models/tools';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

  constructor(){
    this.editToolForm = this.fb.group({
      imgUrl: ['', Validators.required],
      propertyNum: ['', Validators.required],
      toolName: ['', Validators.required],
      category: ['', Validators.required],
      isExistinStore: ['', Validators.required],
    })
  }

  storeTools:Tools[]=[
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'کابل فیبر نوری'},
    {imgUrl:'',category:'two',isExistinStore:false,propertyNum:'312456789',toolName:'اچار فرانسه'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'کواکسیال'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'هاب 6 پورت'},
    {imgUrl:'',category:'two',isExistinStore:false,propertyNum:'312456789',toolName:'سویچ'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'داکت'},
    {imgUrl:'',category:'three',isExistinStore:false,propertyNum:'312456789',toolName:'کابل فیبر نوری'},
    {imgUrl:'',category:'four',isExistinStore:true,propertyNum:'312456789',toolName:'ترانک'},
    {imgUrl:'',category:'six',isExistinStore:true,propertyNum:'312456789',toolName:'آچار پیچ گوشتی'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'دریل شارژی'},
  ]

  modalService=inject(ModalService)
  createFeature(){

  }

  itemActive!:Tools;
  @ViewChild('view', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  @ViewChild('viewLT')view:TemplateRef<Element> | any;
  openModalTemplate(item:Tools){

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

    console.log(item);
    this.itemActive = item ;

    this.editToolForm.patchValue({
      imgUrl:item.imgUrl,
      propertyNum:item.propertyNum,
      toolName:item.toolName,
      category:item.category,
      isExistinStore:item.isExistinStore,
    })

  }

  openModalTemplateAdd(){

  }

  changeSlide(prevOrNext: number,swiper:ElementRef<SwiperContainer>|any): void {
    
    
    if (prevOrNext === -1) {
      swiper.nativeElement.swiper.slidePrev();
    } else {
      swiper.nativeElement.swiper.slideNext();
    }
  }

  
  categoryTools = ['پسیو','اکتیو'];
  editToolForm : FormGroup;
  fb = inject(FormBuilder)
  changeCatVal(n:any){
    this.editToolForm.patchValue({
      category: n
    })
  }

}
