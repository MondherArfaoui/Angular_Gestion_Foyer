import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterChambresBlocComponent } from './affecter-chambres-bloc.component';

describe('AffecterChambresBlocComponent', () => {
  let component: AffecterChambresBlocComponent;
  let fixture: ComponentFixture<AffecterChambresBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterChambresBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterChambresBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
