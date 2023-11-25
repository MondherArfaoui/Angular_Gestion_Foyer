import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterBlocFoyerComponent } from './affecter-bloc-foyer.component';

describe('AffecterBlocFoyerComponent', () => {
  let component: AffecterBlocFoyerComponent;
  let fixture: ComponentFixture<AffecterBlocFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterBlocFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterBlocFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
