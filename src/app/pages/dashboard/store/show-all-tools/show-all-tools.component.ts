import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { inject } from '@angular/core';
import { Tools } from '../../../../shared/models/tools';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-show-all-tools',
  standalone: true,
  imports: [SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './show-all-tools.component.html',
  styleUrl: './show-all-tools.component.scss'
})
export class ShowAllToolsComponent {
  AR = inject(ActivatedRoute);
  itemActive!:Tools;
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
    {imgUrl:'',category:'one',isExistinStore:false,propertyNum:'312456789',toolName:'کابل فیبر نوری'},
    {imgUrl:'',category:'two',isExistinStore:false,propertyNum:'312456789',toolName:'اچار فرانسه'},
    {imgUrl:'',category:'one',isExistinStore:false,propertyNum:'212121',toolName:'کواکسیال'},
    {imgUrl:'',category:'one',isExistinStore:false,propertyNum:'312456789',toolName:'هاب 6 پورت'},
    {imgUrl:'',category:'two',isExistinStore:false,propertyNum:'54545454',toolName:'سویچ'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'78945663',toolName:'داکت'},
    {imgUrl:'',category:'three',isExistinStore:false,propertyNum:'312456789',toolName:'کابل فیبر نوری'},
    {imgUrl:'',category:'four',isExistinStore:true,propertyNum:'312456789',toolName:'ترانک'},
    {imgUrl:'',category:'six',isExistinStore:true,propertyNum:'312456789',toolName:'آچار پیچ گوشتی'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'دریل شارژی'},
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
    {imgUrl:'',category:'six',isExistinStore:true,propertyNum:'312456789',toolName:'آچار پیچ گوشتی'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'دریل شارژی'},
    {imgUrl:'',category:'one',isExistinStore:false,propertyNum:'312456789',toolName:'کابل فیبر نوری'},
    {imgUrl:'',category:'two',isExistinStore:false,propertyNum:'312456789',toolName:'اچار فرانسه'},
    {imgUrl:'',category:'one',isExistinStore:false,propertyNum:'212121',toolName:'کواکسیال'},
    {imgUrl:'',category:'one',isExistinStore:false,propertyNum:'312456789',toolName:'هاب 6 پورت'},
    {imgUrl:'',category:'two',isExistinStore:false,propertyNum:'54545454',toolName:'سویچ'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'78945663',toolName:'داکت'},
    {imgUrl:'',category:'three',isExistinStore:false,propertyNum:'312456789',toolName:'کابل فیبر نوری'},
    {imgUrl:'',category:'four',isExistinStore:true,propertyNum:'312456789',toolName:'ترانک'},
    {imgUrl:'',category:'six',isExistinStore:true,propertyNum:'312456789',toolName:'آچار پیچ گوشتی'},
    {imgUrl:'',category:'one',isExistinStore:true,propertyNum:'312456789',toolName:'دریل شارژی'},
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



  categoryTools = ['پسیو','اکتیو'];

  modalService = inject(ModalService);
  catname:string = '';


  @ViewChild('viewLT', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  @ViewChild('viewLT')view:TemplateRef<Element> | any;

  async openModalTemplate(item:Tools){

    await this.modalService.open(this.vcr,this.view,{
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


  @ViewChild('viewL')viewL:TemplateRef<Element> | any;
  editToolModal(){
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

  constructor() {

    this.totalPages=Math.ceil(this.storeTools.length / 12); 
    this.rulerLengthPage = this.totalPages ;    
    this.chunkedPageArray = this.storeTools;
    this.storeTools=this.chunkArray(this.chunkedPageArray,12)[this.page-1].items;

    this.AR.queryParams.subscribe((value:any)=>{
      console.log(value);
      this.catname = value.catName;
    })

    this.editToolForm = this.fb.group({
      imgUrl: ['', Validators.required],
      propertyNum: ['', Validators.required],
      toolName: ['', Validators.required],
      category: ['', Validators.required],
      isExistinStore: ['', Validators.required],
    })

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
        this.storeTools=this.chunkArray(this.chunkedPageArray,12)[page-1].items;
          if (this.totalPages <= 5) {
            this.rulerLengthPage = this.totalPages;
          }
      }

      editToolForm : FormGroup;
      fb = inject(FormBuilder)
      changeCatVal(n:any){
        this.editToolForm.patchValue({
          category: n
        })
      }

}
