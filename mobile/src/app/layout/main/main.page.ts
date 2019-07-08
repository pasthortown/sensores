import { ControlService } from './../../services/negocio/control.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  appName = environment.app_name;
  ip_raspberry = '';
  conectado = false;
  encendido_led = false;
  encendido_relay = false;

  constructor(private screenOrientation: ScreenOrientation,
              private controlDataService: ControlService) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY);
  }

  ngOnInit() {
    
  }

  sendMessages(message: String) {
    this.controlDataService.enviarMensaje(message);
  }

  conectar() {
    this.controlDataService.conectar(this.ip_raspberry);
    this.conectado = true;
  }

  led() {
    if (this.encendido_led) {
      this.encendido_led = false;
      this.sendMessages('led_off');
    } else {
      this.encendido_led = true;
      this.sendMessages('led_on');
    }
  }

  relay() {
    if (this.encendido_relay) {
      this.encendido_relay = false;
      this.sendMessages('relay_off');
    } else {
      this.encendido_relay = true;
      this.sendMessages('relay_on');
    }
  }
}
