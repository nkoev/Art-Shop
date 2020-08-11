import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn$: Observable<boolean> = this.afAuth.authState.pipe(
    map((loggedUser) => (loggedUser ? true : false))
  );

  constructor(private afAuth: AngularFireAuth) {}

  login(username: string, pass: string) {
    return this.afAuth.signInWithEmailAndPassword(
      `${username}@ptpetrov.com`,
      pass
    );
  }

  logout() {
    this.afAuth.signOut();
  }
}
