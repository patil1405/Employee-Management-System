import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEMployeeComponent } from './update-employee.component';

describe('UpdateEMployeeComponent', () => {
  let component: UpdateEMployeeComponent;
  let fixture: ComponentFixture<UpdateEMployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEMployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEMployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
