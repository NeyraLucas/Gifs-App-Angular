import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  //agregamos al constructor el Servicio de gifs
  constructor(private gifsService: GifsService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    //no incluir enter sin valores
    if(valor.trim().length ===0){
      return;
    }

    //le pasamos el valor del gif a buscar que viene del servicio
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = "";
    
  }
}
