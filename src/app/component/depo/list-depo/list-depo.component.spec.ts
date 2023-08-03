import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepoComponent } from './list-depo.component';

describe('ListDepoComponent', () => {
  let component: ListDepoComponent;
  let fixture: ComponentFixture<ListDepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
