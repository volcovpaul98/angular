import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExerciceComponent } from './form-exercice.component';

describe('FormExerciceComponent', () => {
  let component: FormExerciceComponent;
  let fixture: ComponentFixture<FormExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
