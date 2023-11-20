import { TestBed } from '@angular/core/testing';

import { ChambreService } from './chambre.service';

describe('ChambreService', () => {
  let service: ChambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
