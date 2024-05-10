import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateDate(selectedDate: any ) : boolean {
    if (!selectedDate){
      return false;
    }
     const date= new Date(selectedDate);
     if (isNaN(date.getTime())){
      return false;
     }

     const currentDate = new Date();
     if(date >= currentDate){
      return false;
     }
     return true;
  }

  validateEmail(email:any): boolean{
    if (!email){
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}





