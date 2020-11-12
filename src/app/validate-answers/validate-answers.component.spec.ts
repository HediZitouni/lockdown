import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateAnswersComponent } from './validate-answers.component';

describe('ValidateAnswersComponent', () => {
  let component: ValidateAnswersComponent;
  let fixture: ComponentFixture<ValidateAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
