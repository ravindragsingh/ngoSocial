import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyToWithdrawComponent } from './money-to-withdraw.component';

describe('MoneyToWithdrawComponent', () => {
  let component: MoneyToWithdrawComponent;
  let fixture: ComponentFixture<MoneyToWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyToWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyToWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
