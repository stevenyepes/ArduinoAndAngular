import { Estacion, EstacionService } from '../estacion.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent implements OnInit, OnDestroy {

  lecturaEstacion: Estacion = {
    'temperatura' : 0,
    'humedad': 0,
    'incidencia' : '',
  };

  intervalId;

  constructor(private _estacionService: EstacionService) {
    this.intervalId = this.iniciarInterval();
  }

  iniciarInterval() {
    return setInterval(this.suscripcionEventos.bind(this), 3000);
  }

  suscripcionEventos() {
    this._estacionService.leerEstacion().then(data => {
      data.subscribe(lectura => {
        console.log(lectura);
        this.lecturaEstacion = <Estacion>lectura;
      });
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}



