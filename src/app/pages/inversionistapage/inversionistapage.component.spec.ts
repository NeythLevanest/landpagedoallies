import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionistapageComponent } from './inversionistapage.component';

describe('InversionistapageComponent', () => {
  let component: InversionistapageComponent;
  let fixture: ComponentFixture<InversionistapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversionistapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InversionistapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
