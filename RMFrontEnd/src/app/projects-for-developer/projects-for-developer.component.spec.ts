import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsForDeveloperComponent } from './projects-for-developer.component';

describe('ProjectsForDeveloperComponent', () => {
  let component: ProjectsForDeveloperComponent;
  let fixture: ComponentFixture<ProjectsForDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsForDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsForDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
