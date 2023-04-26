import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioAlumnosComponent } from './formulario-alumnos/formulario-alumnos.component';

const routes: Routes = [
  {path:"",component:FormularioAlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
