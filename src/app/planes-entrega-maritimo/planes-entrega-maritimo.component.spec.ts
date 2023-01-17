import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesEntregaMaritimoComponent } from './planes-entrega-maritimo.component';

describe('PlanesEntregaMaritimoComponent', () => {
  let component: PlanesEntregaMaritimoComponent;
  let fixture: ComponentFixture<PlanesEntregaMaritimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesEntregaMaritimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesEntregaMaritimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
