import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderPanvirenComponent } from './header-panviren/header-panviren.component';
import { FooterPanvirenComponent } from './footer-panviren/footer-panviren.component';
import { PanvirenAdmissionFormComponent } from './panviren-admission-form/panviren-admission-form.component';
import { PanvirenFilledInfoComponent } from './panviren-filled-info/panviren-filled-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './modules/material-ui.module';

const approutes: Routes = [
  {path:'',component:PanvirenAdmissionFormComponent},
  {path:'submit',component:PanvirenFilledInfoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderPanvirenComponent,
    FooterPanvirenComponent,
    PanvirenAdmissionFormComponent,
    PanvirenFilledInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(approutes),

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
