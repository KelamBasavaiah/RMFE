import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetModuleForManagerComponent } from './get-module-for-manager.component';

describe('GetModuleForManagerComponent', () => {
  let component: GetModuleForManagerComponent;
  let fixture: ComponentFixture<GetModuleForManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetModuleForManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetModuleForManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
