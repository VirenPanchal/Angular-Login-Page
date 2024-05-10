import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPanvirenComponent } from './footer-panviren.component';

describe('FooterPanvirenComponent', () => {
  let component: FooterPanvirenComponent;
  let fixture: ComponentFixture<FooterPanvirenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterPanvirenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPanvirenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
