import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateSuggestionComponent } from './validate-suggestion.component';

describe('ValidateSuggestionComponent', () => {
  let component: ValidateSuggestionComponent;
  let fixture: ComponentFixture<ValidateSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
