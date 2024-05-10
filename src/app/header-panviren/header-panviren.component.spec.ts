import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPanvirenComponent } from './header-panviren.component';

describe('HeaderPanvirenComponent', () => {
  let component: HeaderPanvirenComponent;
  let fixture: ComponentFixture<HeaderPanvirenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPanvirenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPanvirenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
