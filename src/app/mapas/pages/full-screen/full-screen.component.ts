import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'







@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #mapa{
      height: 100%;
      width: 100%
    }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

       
    var map = new mapboxgl.Map({
    container: 'mapa', //id en el html
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ -68.52981937385819 , -31.53845214276301] ,                                             //primero longitud y desp latitud, al reves que google maps
    zoom: 16
  });

  }

}
