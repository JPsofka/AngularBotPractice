import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([''])
const redirectLoggedInToProfile = () => redirectLoggedInTo(['/profile'])

const routes: Routes = [
  {
    path: '', component: PokemonsPageComponent, 
    },
  {
    path: 'profile', component: ProfilePageComponent,
    canActivate : [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
