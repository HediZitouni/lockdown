import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MancheComponent } from './manche.component';

describe('MancheComponent', () => {
  let component: MancheComponent;
  let fixture: ComponentFixture<MancheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MancheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
