import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ControlService {

   private socket;

   constructor(private router: Router) {
   }

   conectar(ip) {
      this.socket = io(ip + ':8000');
   }
   
   enviarMensaje(message) {
      this.socket.emit('message', message);
   }
}