import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: 'formulario', component: FormularioComponent},
  { path: 'reporte', component: ReporteComponent },
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '/personas' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
