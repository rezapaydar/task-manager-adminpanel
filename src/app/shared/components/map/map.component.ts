import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as L from 'leaflet';
import { map } from 'leaflet';





@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  map: any;
  token:any=`sk.eyJ1IjoibWFtYXJlemFqIiwiYSI6ImNsenk2aDV5MTB6a3kya3M4OGxhMW9hdWIifQ.l2hEdqdGbn1OXtCVhKxwVg`

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

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.getCurrentPosition();

  }

  private getCurrentPosition(): any {
    this.map = map('map').setView([34.79922, 48.51456], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 16,
      id: 'mapbox/streets-v11',
      tileSize: 1367,
      zoomOffset: -1,
      latLng:[34.79922, 48.51456],
      accessToken: this.token,
    }).addTo(this.map);

      this.loadMap()
  }

  private loadMap(): void {

    
    const icon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/images/marker-shadow.png',

      iconSize: [41, 41], // size of the icon
      shadowSize: [41, 41], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

  this.markerLocations.forEach(t => {
    L.marker([t.lat, t.lng], { icon })
        .addTo(this.map)
        .bindPopup('Hi!!');
  })
  }

  fullScreen(){
    this.map.toggleFullscreen();
  }

  addMarker(e:any){
    // Add marker to map at click location; add popup window
    var newMarker = new L.marker(e.latlng).addTo(this.map);
}
  
}
