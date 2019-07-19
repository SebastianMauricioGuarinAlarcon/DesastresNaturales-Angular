import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIzquierdoComponent } from './menu-izquierdo.component';

describe('MenuIzquierdoComponent', () => {
  let component: MenuIzquierdoComponent;
  let fixture: ComponentFixture<MenuIzquierdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIzquierdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
