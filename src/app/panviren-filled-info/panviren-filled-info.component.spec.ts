import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanvirenFilledInfoComponent } from './panviren-filled-info.component';

describe('PanvirenFilledInfoComponent', () => {
  let component: PanvirenFilledInfoComponent;
  let fixture: ComponentFixture<PanvirenFilledInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanvirenFilledInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanvirenFilledInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
