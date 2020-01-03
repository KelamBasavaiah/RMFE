import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBugStatusToTesterFromDeveloperComponent } from './update-bug-status-to-tester-from-developer.component';

describe('UpdateBugStatusToTesterFromDeveloperComponent', () => {
  let component: UpdateBugStatusToTesterFromDeveloperComponent;
  let fixture: ComponentFixture<UpdateBugStatusToTesterFromDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBugStatusToTesterFromDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBugStatusToTesterFromDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
