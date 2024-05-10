import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanvirenAdmissionFormComponent } from './panviren-admission-form.component';

describe('PanvirenAdmissionFormComponent', () => {
  let component: PanvirenAdmissionFormComponent;
  let fixture: ComponentFixture<PanvirenAdmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanvirenAdmissionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanvirenAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
