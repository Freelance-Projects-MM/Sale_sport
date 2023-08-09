import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTierComponent } from './add-edit-tier.component';

describe('AddEditTierComponent', () => {
  let component: AddEditTierComponent;
  let fixture: ComponentFixture<AddEditTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
