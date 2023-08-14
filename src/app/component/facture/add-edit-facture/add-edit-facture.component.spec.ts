import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFactureComponent } from './add-edit-facture.component';

describe('AddEditFactureComponent', () => {
  let component: AddEditFactureComponent;
  let fixture: ComponentFixture<AddEditFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
