import { Pokemon } from "./pokemon";

export interface User {
    uid: string
    email: string
    photoURL?: string,
    displayName?: string,
    pokemons?:Pokemon[],
    cash:number
    dateOfLastDeposit?:number
  }
  