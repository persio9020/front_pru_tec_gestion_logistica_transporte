import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBasicosClienteComponent } from './datos-basicos-cliente.component';

describe('DatosBasicosClienteComponent', () => {
  let component: DatosBasicosClienteComponent;
  let fixture: ComponentFixture<DatosBasicosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosBasicosClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosBasicosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
