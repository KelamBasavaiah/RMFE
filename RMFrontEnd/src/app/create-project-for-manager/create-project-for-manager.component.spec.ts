import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectForManagerComponent } from './create-project-for-manager.component';

describe('CreateProjectForManagerComponent', () => {
  let component: CreateProjectForManagerComponent;
  let fixture: ComponentFixture<CreateProjectForManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectForManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectForManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
