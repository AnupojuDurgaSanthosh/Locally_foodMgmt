import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSayComponent } from './customer-say.component';

describe('CustomerSayComponent', () => {
  let component: CustomerSayComponent;
  let fixture: ComponentFixture<CustomerSayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSayComponent]
    });
    fixture = TestBed.createComponent(CustomerSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
