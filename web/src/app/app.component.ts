import { Component } from '@angular/core';
import { SensoresService } from './sensores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web';
  estadosLed = [];
  estadosRelay = [];
  estadosSensorMovimiento = [];
  constructor(private sensoresDataService: SensoresService) {
    this.sensoresDataService.getSensors().subscribe(item => {
      this.estadosLed = [];
      this.estadosRelay = [];
      this.estadosSensorMovimiento = [];
      item.forEach(element => {
        const toPush: any = element.payload.toJSON();
        if (typeof toPush.led !== 'undefined'){
          this.estadosLed.push(toPush);
        }
        if (typeof toPush.relay !== 'undefined'){
          this.estadosRelay.push(toPush);
        }
        if (typeof toPush.sensor_movimiento !== 'undefined'){
          this.estadosSensorMovimiento.push(toPush);
        }
      });
    });
  }
}
