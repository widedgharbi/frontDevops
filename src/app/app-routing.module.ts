import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { LoginComponent } from './login/login.component';

import { PisteComponent } from './Piste/piste.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
{ path: 'piste', component: PisteComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
