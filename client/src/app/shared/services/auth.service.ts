import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(username: string, pass: string) {
    return this.afAuth.signInWithEmailAndPassword(
      `${username}@ptpetrov.com`,
      pass
    );
  }
}
