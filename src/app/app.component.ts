import { Component } from '@angular/core';
import { FinalExam } from './classes/panvirenClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'panvirenFinalExam';
  
  panvirenPersonal: FinalExam={
    LASTpanviren: "Panchal",
    FIRSTpanviren: 'Viren',
    EMAILpanviren: 'panviren@sheridancollege.ca',
    PROGRAMNAMEpanviren: 'Computer System Technician- Software Engineering',
    LOGINpanviren: 'panviren'
  }
}

