import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import { map } from 'leaflet';
import 'leaflet.fullscreen';
import { MapService } from './map.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Output() isAccept?: EventEmitter<any> = new EventEmitter<any>();

  @Output() map: any;

  markerLocations = [
    {
      
      lat: 34.79922,
      lng: 48.51456
    },
     {
       lat: 2,
       lng: 2
     }
  ]

  constructor(private mapService: MapService) {
  }

  public ngAfterViewInit(): void {
    this.getCurrentPosition();

  }

  private getCurrentPosition(): any {
    var container = L.DomUtil.get('map');
    if (container._leaflet_id) {
        container._leaflet_id = null;
    }   
    this.map = map('map',{
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topleft'
      }
    }).setView([34.79922, 48.51456], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

      //this.map.on('click', this.isAccept?.bind(this));
      this.map.on('contextmenu', this.onMapClick.bind(this));
    

      this.loadMap()
  }

  
  private onMapClick(e: any): void {
    
    this.mapService.addMarker(e.latlng.lat, e.latlng.lng,this.map);
    
  }

  private loadMap(): void {

    
    const icon = L.icon({
      iconUrl: 'img/loc.png',
  
      iconSize: [31, 31], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    this.markerLocations.forEach(t => {
      L.marker([34.79922, 48.51456], { icon })
          .addTo(this.map)
          .bindPopup('تیم 1');
    })

  }

  fullScreen(){
    this.map.toggleFullscreen();
  }

  addMarker(e:any){
    // Add marker to map at click location; add popup window
    var newMarker = new L.marker(e.target.latlng).addTo(this.map);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.map.remove();
  }

  
}
