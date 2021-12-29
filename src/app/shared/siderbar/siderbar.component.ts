import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styles: [
  ]
})
export class SiderbarComponent {

  //con este metodo pasamos los datos a sidebar html
  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) { }

  buscar(termino:string){
    this.gifsService.buscarGifs(termino);
    console.log(termino);
    
  }



}
