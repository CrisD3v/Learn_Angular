import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../Models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  constructor() {
    this.destinos = [];
   }

  ngOnInit(): void {
  }

  guardar(Nombre:string,Url:string):boolean{
    this.destinos.push(new DestinoViaje(Nombre,Url))
    return false;
  }

  elegido(d:DestinoViaje){
    this.destinos.forEach(function (x) {x.setSelected(false);});
    return d.setSelected(true);
  }

}
