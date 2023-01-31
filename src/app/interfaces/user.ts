import { Pokemon } from "./pokemon";

export interface User {
    uid: string|undefined|null,
    email: string | null | undefined,
    photoURL?: string|null,
    displayName?: string|null,
    pokemons?:Pokemon[],
    cash:number
  }
  