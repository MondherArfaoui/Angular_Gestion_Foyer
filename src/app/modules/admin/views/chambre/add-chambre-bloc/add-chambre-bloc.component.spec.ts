import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChambreBlocComponent } from './add-chambre-bloc.component';

describe('AddChambreBlocComponent', () => {
  let component: AddChambreBlocComponent;
  let fixture: ComponentFixture<AddChambreBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChambreBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChambreBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
