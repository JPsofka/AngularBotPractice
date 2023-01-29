import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private afs:AngularFirestore) { }

  getAll():Observable<Pokemon[]> {
    return this.afs.collection<Pokemon>('pokemons').valueChanges();
  }

  get(id:number):Observable<Pokemon|undefined> {
    return this.afs.collection<Pokemon|undefined>('pokemons').doc(`${id}`).valueChanges();
  }

  updateQuantity(id:number, amount:number):Promise<void>{
    return this.afs.collection('pokemons').doc(`${id}`).update({quantity:amount})
  }

}
