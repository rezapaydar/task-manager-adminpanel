import { Injectable, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as L from 'leaflet';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private markerSubject = new Subject<{ lat: number, lng: number }>();
  marker$ = this.markerSubject.asObservable();
  map:any;
  icon:any;
  addMarker(lat: number, lng: number,map:any) {
    this.map = map


    this.markerSubject.next({ lat, lng });

  }

  constructor(public modalService: ModalService){}

  @ViewChild('view', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  addToMap(){
    const icon = L.icon({
      iconUrl: 'img/loc.png',
  
      iconSize: [31, 31], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });


    this.marker$.subscribe((val)=>{
      const marker = L.marker([val.lat, val.lng],{icon});
      marker.addTo(this.map)
  })


  }
}