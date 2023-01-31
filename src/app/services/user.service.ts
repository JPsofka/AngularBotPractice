import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs:AngularFirestore) { }

  getAll():Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  get(id:string):Observable<User|undefined> {
    return this.afs.collection<User|undefined>('users').doc(`${id}`).valueChanges();
  }

  save(user:User):Promise<void> {
    return this.afs.collection<User>(`users`).doc(`${user.uid}`).set(user)
  }

  updateUser(id:string, user:User):Promise<void>{
    return this.afs.collection('users').doc(`${id}`).update(user)
  }
}
