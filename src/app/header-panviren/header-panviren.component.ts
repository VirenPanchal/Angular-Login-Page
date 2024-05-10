import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-panviren',
  templateUrl: './header-panviren.component.html',
  styleUrl: './header-panviren.component.css'
})
export class HeaderPanvirenComponent {
  @Input() panvirenMyData:any;


}
