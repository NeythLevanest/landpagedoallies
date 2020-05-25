import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprendedorpageComponent } from './emprendedorpage.component';

describe('EmprendedorpageComponent', () => {
  let component: EmprendedorpageComponent;
  let fixture: ComponentFixture<EmprendedorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprendedorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprendedorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
