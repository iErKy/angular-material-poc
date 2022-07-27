import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupsComponent } from './product-groups.component';

describe('ProductGroupsComponent', () => {
  let component: ProductGroupsComponent;
  let fixture: ComponentFixture<ProductGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
