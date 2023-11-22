import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBlocComponent } from './ajouter-bloc.component';

describe('AjouterBlocComponent', () => {
  let component: AjouterBlocComponent;
  let fixture: ComponentFixture<AjouterBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
