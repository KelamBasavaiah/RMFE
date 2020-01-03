import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {GetprojectForManagerComponent } from './get-project-for-manager.component';

describe('GetProjectForManagerComponent', () => {
  let component: GetprojectForManagerComponent;
  let fixture: ComponentFixture<GetprojectForManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetprojectForManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetprojectForManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
