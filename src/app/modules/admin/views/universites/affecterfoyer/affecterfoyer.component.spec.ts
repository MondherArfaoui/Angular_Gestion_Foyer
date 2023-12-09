import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterfoyerComponent } from './affecterfoyer.component';

describe('AffecterfoyerComponent', () => {
  let component: AffecterfoyerComponent;
  let fixture: ComponentFixture<AffecterfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterfoyerComponent]
    });
    fixture = TestBed.createComponent(AffecterfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
