import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleManagementComponent } from './scale-management.component';

describe('ScaleManagementComponent', () => {
  let component: ScaleManagementComponent;
  let fixture: ComponentFixture<ScaleManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaleManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
