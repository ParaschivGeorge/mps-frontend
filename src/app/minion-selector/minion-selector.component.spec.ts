import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinionSelectorComponent } from './minion-selector.component';

describe('MinionSelectorComponent', () => {
  let component: MinionSelectorComponent;
  let fixture: ComponentFixture<MinionSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinionSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
