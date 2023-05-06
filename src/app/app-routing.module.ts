import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes: Routes = [
  {
    path: 'HomePage',
    component: HomeComponent
  },
  {
    path:'Agregar',
    component: AgregarComponent
  },
  {
    path:'**',
    redirectTo: 'HomePage'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
