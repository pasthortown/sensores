import { Component } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  encendido_led = false;
  encendido_relay = false;
  ip_raspberry = '';
  conectado = false;
  private socket;

  constructor() {
    
  }

  conectar() {
    this.socket = io(this.ip_raspberry + ':8000');
    this.conectado = true;
  }

  led() {
    if (this.encendido_led) {
      this.encendido_led = false;
      this.enviarMensaje('led_off');
    } else {
      this.encendido_led = true;
      this.enviarMensaje('led_on');
    }
  }

  relay() {
    if (this.encendido_relay) {
      this.encendido_relay = false;
      this.enviarMensaje('relay_off');
    } else {
      this.encendido_relay = true;
      this.enviarMensaje('relay_on');
    }
  }

  enviarMensaje(message) {
    this.socket.emit('message', message);
  }
}
