import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBlocComponent } from './liste-bloc.component';

describe('ListeBlocComponent', () => {
  let component: ListeBlocComponent;
  let fixture: ComponentFixture<ListeBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
