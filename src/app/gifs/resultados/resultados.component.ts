import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  //obtener la data de la peticion del servicio 
  get resultado(){
    return this.gifsService.resultados;
  }


  constructor(private gifsService: GifsService) { }


}
