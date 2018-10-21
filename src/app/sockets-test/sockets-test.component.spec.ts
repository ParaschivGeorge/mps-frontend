import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketsTestComponent } from './sockets-test.component';

describe('SocketsTestComponent', () => {
  let component: SocketsTestComponent;
  let fixture: ComponentFixture<SocketsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
