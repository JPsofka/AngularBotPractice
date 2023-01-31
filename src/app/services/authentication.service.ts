import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat/app';
import { Observable, of, switchMap } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: Observable<User | undefined | null>;

  constructor(private angularFireAuth: AngularFireAuth, private angularFirestore: AngularFirestore,
    private userService: UserService, private router: Router) {
    this.user = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.userService.get(user.uid)
        } else {
          return of(null)
        }
      })
    )
  }
  async googleSignin() {
    const provider = new firebase.default.auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.signInWithPopup(provider);
    
    if (credential.user !== null) {
      // let user = this.userService.get(credential.user.uid).subscribe((data)=>data)
      // if (condition) {
        
      // }
      let userToSave: User = {
        uid: credential.user.uid,
        email: credential.user.email,
        displayName: credential.user.displayName,
        photoURL: credential.user.photoURL,
        cash: 0
      }
      this.userService.save(userToSave)
    }
  }

  async signOut() {
    await this.angularFireAuth.signOut();
    this.router.navigate(['/']);
  }

}
