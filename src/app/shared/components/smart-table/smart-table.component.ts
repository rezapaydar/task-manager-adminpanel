// smart-table.component.ts
import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { technicin } from '../../models/technicin';
@Component({
  
  selector: 'app-smart-table',
  template: `
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr class="text-right">
            <th scope="col" class="px-4 py-3" *ngFor="let column of columns">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700" ngIf='loading' *ngFor="let row of dataShow; let i = index">
          <td class="w-4 px-4 py-3" >
            {{ row.id }}
          </td>
          <td class="w-4 px-4 py-3" >
            {{ row.update }}
          </td>
          <td class="w-4 px-4 py-3" >
            {{ row.email }}
          </td>
          <td class="w-4 px-4 py-3" >
            {{ row.status }}
          </td>
          <td class="w-4 px-4 py-3" >
            {{ row.lastLogin }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="w-96 px-4 py-3" *ngIf="data.length === 0">
      هیچ داده ای وجود ندارد
    </div>
    <div class="w-96 px-4 py-3" *ngIf="loading">
      <span>لطفا صبر کنید<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_S1WN{animation:spinner_MGfb .8s linear infinite;animation-delay:-.8s}.spinner_Km9P{animation-delay:-.65s}.spinner_JApP{animation-delay:-.5s}@keyframes spinner_MGfb{93.75%,100%{opacity:.2}}</style><circle class="spinner_S1WN" cx="4" cy="12" r="3"/><circle class="spinner_S1WN spinner_Km9P" cx="12" cy="12" r="3"/><circle class="spinner_S1WN spinner_JApP" cx="20" cy="12" r="3"/></svg></span>
    </div>
  `,
})
export class SmartTableComponent {
  @Input() data: any[] | technicin[] | any  = [];
  dataShow : technicin[]  = []
  @Input() columns: any[] = [];
  @Input() loading: boolean = false;
  @Output() rowClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    
  }

  showData(data:technicin){
    this.showData = this.data;
  }

  onRowClick(row: any): void {
    this.rowClicked.emit(row);
  }
}