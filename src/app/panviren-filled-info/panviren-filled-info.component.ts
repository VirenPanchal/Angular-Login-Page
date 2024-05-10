import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panviren-filled-info',
  templateUrl: './panviren-filled-info.component.html',
  styleUrl: './panviren-filled-info.component.css'
})
export class PanvirenFilledInfoComponent implements OnInit  {
  formData!:any;

  constructor(){}

  ngOnInit(): void {
    const storedData =localStorage.getItem('admissionFormData');
    if (storedData)
      {
        this.formData = JSON.parse(storedData);
      }
  }

}
