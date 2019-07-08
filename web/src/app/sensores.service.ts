import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensoresService {

  constructor(private firestore: AngularFireDatabase) { }

  getSensors() {
    return this.firestore.list('sensores').snapshotChanges();
  }
}
