import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PersonasComponent } from './personas/personas.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { UserComponent } from './user/user.component';
import { ReporteComponent } from './reporte/reporte.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

import { MatToolbarModule, MatSidenavModule, MatIconModule,
         MatListModule, MatFormFieldModule, MatInputModule, MatRippleModule,
         MatCardModule, MatCheckboxModule, MatButtonModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PersonasComponent,
    FormularioComponent,
    UserComponent,
    ReporteComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
