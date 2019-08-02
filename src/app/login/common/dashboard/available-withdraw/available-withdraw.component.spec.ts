import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableWithdrawComponent } from './available-withdraw.component';

describe('AvailableWithdrawComponent', () => {
  let component: AvailableWithdrawComponent;
  let fixture: ComponentFixture<AvailableWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
