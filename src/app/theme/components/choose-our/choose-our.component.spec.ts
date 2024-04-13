import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOurComponent } from './choose-our.component';

describe('ChooseOurComponent', () => {
  let component: ChooseOurComponent;
  let fixture: ComponentFixture<ChooseOurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseOurComponent]
    });
    fixture = TestBed.createComponent(ChooseOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
