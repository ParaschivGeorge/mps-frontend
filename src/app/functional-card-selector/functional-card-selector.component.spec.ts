import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalCardSelectorComponent } from './functional-card-selector.component';

describe('FunctionalCardSelectorComponent', () => {
  let component: FunctionalCardSelectorComponent;
  let fixture: ComponentFixture<FunctionalCardSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalCardSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalCardSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
