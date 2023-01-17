import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesEntregaTerrestreComponent } from './planes-entrega-terrestre.component';

describe('PlanesEntregaTerrestreComponent', () => {
  let component: PlanesEntregaTerrestreComponent;
  let fixture: ComponentFixture<PlanesEntregaTerrestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesEntregaTerrestreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesEntregaTerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
