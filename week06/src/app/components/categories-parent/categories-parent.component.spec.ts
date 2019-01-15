import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesParentComponent } from './categories-parent.component';

describe('CategoriesParentComponent', () => {
  let component: CategoriesParentComponent;
  let fixture: ComponentFixture<CategoriesParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
