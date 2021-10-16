import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDareTypeTableComponent } from './show-dare-type-table.component';

describe('ShowDareTypeTableComponent', () => {
  let component: ShowDareTypeTableComponent;
  let fixture: ComponentFixture<ShowDareTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDareTypeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDareTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
