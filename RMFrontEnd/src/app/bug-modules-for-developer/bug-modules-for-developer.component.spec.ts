import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugModulesForDeveloperComponent } from './bug-modules-for-developer.component';

describe('BugModulesForDeveloperComponent', () => {
  let component: BugModulesForDeveloperComponent;
  let fixture: ComponentFixture<BugModulesForDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugModulesForDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugModulesForDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
