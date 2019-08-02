import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureDetailsComponent } from './expenditure-details.component';

describe('ExpenditureDetailsComponent', () => {
  let component: ExpenditureDetailsComponent;
  let fixture: ComponentFixture<ExpenditureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenditureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenditureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
