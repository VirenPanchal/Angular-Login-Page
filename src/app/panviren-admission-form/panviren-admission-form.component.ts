import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-panviren-admission-form',
  templateUrl: './panviren-admission-form.component.html',
  styleUrls: ['./panviren-admission-form.component.css']
})
export class PanvirenAdmissionFormComponent implements OnInit {
  admissionForm!: FormGroup;

  campusList: string[] = ['Davis','Trasfalgar','HMC'];
  departmentList: string[] = [
    'Faculty of Animation, Arts & Design (FAAD)',
    'Faculty of Applied Health and Community Studies (FAHCS)',
    'Faculty of Applied Science and technology (FAST)',
    'Faculty of Hummanities and Social Science (FHASS)',
    'Pilon Scholl of Business (PSB) ',
  ];

  constructor(private fb: FormBuilder, private validationService: ValidationService, private router:Router) { }

  ngOnInit(): void {
    this.admissionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', [Validators.required, this.dateValidator.bind(this)]],
      email:['',[Validators.required,this.emailValidator.bind(this)]],
      departmentList: ['', Validators.required],

    });
  }

  dateValidator(control: any): { [key: string]: boolean } | null {
    const isValid = this.validationService.validateDate(control.value);
    return isValid ? null : { 'invalidDate': true };
  }

  emailValidator(control: any): { [key: string]: boolean } | null {
    const isValid = this.validationService.validateEmail(control.value);
    return isValid ? null : { 'invalidEmail': true };
  }

  onSubmit() {
    if (this.admissionForm.invalid) {
      return;
    }

    localStorage.setItem('admissionFormData',JSON.stringify(this.admissionForm.value));
    this.router.navigateByUrl('/submit');
  }
}
