import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsForTesterComponent } from './projects-for-tester.component';

describe('ProjectsForTesterComponent', () => {
  let component: ProjectsForTesterComponent;
  let fixture: ComponentFixture<ProjectsForTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsForTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsForTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
