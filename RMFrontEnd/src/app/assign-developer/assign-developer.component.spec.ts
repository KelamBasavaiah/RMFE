import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDeveloperComponent } from './assign-developer.component';

describe('AssignDeveloperComponent', () => {
  let component: AssignDeveloperComponent;
  let fixture: ComponentFixture<AssignDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
