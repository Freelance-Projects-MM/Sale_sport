import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepotComponent } from './add-edit-depot.component';

describe('AddEditDepotComponent', () => {
  let component: AddEditDepotComponent;
  let fixture: ComponentFixture<AddEditDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
