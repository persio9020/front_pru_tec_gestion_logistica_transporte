import { TestBed } from '@angular/core/testing';

import { TipoProductoSelectService } from './tipo-producto-select.service';

describe('TipoProductoSelectService', () => {
  let service: TipoProductoSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoProductoSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
