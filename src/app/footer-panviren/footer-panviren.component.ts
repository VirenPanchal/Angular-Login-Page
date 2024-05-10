import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-panviren',
  templateUrl: './footer-panviren.component.html',
  styleUrl: './footer-panviren.component.css'
})
export class FooterPanvirenComponent {
  @Input() panvirenMyData:any;

}
