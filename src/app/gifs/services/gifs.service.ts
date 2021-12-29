import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //Api key
  private apikey : string = 'TTOrYTa4LXLWJsjsmgbkGtFwnrxelL3D';
  //url
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  //arr para la data de la peticion
  public resultados: Gif[] = [];

  //arr para almacenar data
  private _historial: string[] = [];

  //obtiene el historial de arr
  get historial(){
    return [...this._historial];
  }

  //constructor y http
  constructor(private http: HttpClient){

    //cargar localStorage al principio
    //Opcion 1
    /* if(localStorage.getItem('item')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    } */
    //Opcion 2
    this._historial =  JSON.parse(localStorage.getItem('historial')!) || [];
    
    //almacenar la ultima busqueda
    this.resultados =  JSON.parse(localStorage.getItem('resultados')!) || [];
    

  }

  buscarGifs( query: string ){
    
    query = query.trim().toLocaleLowerCase();

    //no duplicar
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      //definimos el tamaño a 10
      this._historial = this._historial.slice(0,10);

      //localStorage - guardamos en el
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    //parametros http
    const params = new HttpParams().set('api_key',this.apikey)
    .set('limit',10)
    .set('q',query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
    .subscribe((resp) =>{
      console.log(resp.data);
      this.resultados = resp.data;
      //alamcenar resultados en local storage
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
      
    })

  }
  
}
