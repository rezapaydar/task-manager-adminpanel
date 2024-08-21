import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RulerFactoryOption} from "./enum/ruler-factory-option.enum";
import {NgForOf, NgIf} from "@angular/common";
import {Pagination} from "../../models/Pagination";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{
  @Input()maxPages: number = 0;

  @Input() index: number | any = 1;
  @Input() totalCount: number =50 ;
  @Input() pageSize: number = 20;
  @Input() rulerLength: number = 5;


  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.maxPages = Math.ceil(this.totalCount / this.pageSize);
    // this.page.subscribe((value=>{
    //   console.log("value is : "+value)
    //   console.log(this.page);
    //   console.log(this.totalCount);
    //   console.log(this.maxPages);
    //   console.log(this.rulerLength)
    // }))
  }

  ngOnInit() {

  }

 get  pagination(): Pagination {
    const {index, maxPages, rulerLength} = this;
    const pages = ruler(index, maxPages, rulerLength);
    return {index, maxPages, pages} as Pagination;
  }

  navigateToPage(pageNumber: number): void {
    this.maxPages=this.totalCount //Limitation Pages
    if (allowNavigation(pageNumber, this.index, this.maxPages)) {
      this.index = pageNumber;
      this.page.emit(this.index);
    }
  }

  trackByFn(index: number): number {
    return index;
  }
}

const ruler = (
  currentIndex: number,
  maxPages: number,
  rulerLength: number
): number[] => {
  const array = new Array(rulerLength).fill(null);
  const min = Math.floor(rulerLength / 2);

  return array.map((_, index) =>
    rulerFactory(currentIndex, index, min, maxPages, rulerLength)
  );
};

const rulerOption = (
  currentIndex: number,
  min: number,
  maxPages: number
): RulerFactoryOption => {
  return currentIndex <= min
    ? RulerFactoryOption.Start
    : currentIndex >= maxPages - min
    ? RulerFactoryOption.End
    : RulerFactoryOption.Default;
};

const rulerFactory = (
  currentIndex: number,
  index: number,
  min: number,
  maxPages: number,
  rulerLength: number
): number => {
  const factory = {
    [RulerFactoryOption.Start]: () => index + 1,
    [RulerFactoryOption.End]: () => maxPages - rulerLength + index + 1,
    [RulerFactoryOption.Default]: () => currentIndex + index - min,
  };

  return factory[rulerOption(currentIndex, min, maxPages)]();
};

const allowNavigation = (
  pageNumber: number,
  index: number,
  maxPages: number
): boolean => {
  return pageNumber !== index && pageNumber > 0 && pageNumber <= maxPages;
};

