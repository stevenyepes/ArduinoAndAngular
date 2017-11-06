import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstacionService {


  lecturaEstacion: Promise<Estacion>;

  constructor(private _http: HttpClient) { }

   leerEstacion = async () => {
    return await this.obtenerLecturaEstacion();
  }

  obtenerLecturaEstacion = async () => {
    return this._http.get('http://192.168.1.125:3000/');
  }

}

export interface Estacion {
  temperatura: Number;
  humedad: Number;
  incidencia: String;
}
