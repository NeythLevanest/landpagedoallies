import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientopageComponent } from './lanzamientopage.component';

describe('LanzamientopageComponent', () => {
  let component: LanzamientopageComponent;
  let fixture: ComponentFixture<LanzamientopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanzamientopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanzamientopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
