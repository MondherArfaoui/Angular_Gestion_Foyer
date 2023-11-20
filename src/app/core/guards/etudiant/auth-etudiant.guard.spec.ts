import { TestBed } from '@angular/core/testing';

import { AuthEtudiantGuard } from './auth-etudiant.guard';

describe('AuthEtudiantGuard', () => {
  let guard: AuthEtudiantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthEtudiantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
