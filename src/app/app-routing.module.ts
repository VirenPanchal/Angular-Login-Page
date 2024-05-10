import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanvirenAdmissionFormComponent } from './panviren-admission-form/panviren-admission-form.component';
import { PanvirenFilledInfoComponent } from './panviren-filled-info/panviren-filled-info.component';
const approutes: Routes = [
  {path:'',component:PanvirenAdmissionFormComponent},
  {path:'submit',component:PanvirenFilledInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
