import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModuleStatusfromTestertoManagerComponent } from './update-module-statusfrom-testerto-manager.component';

describe('UpdateModuleStatusfromTestertoManagerComponent', () => {
  let component: UpdateModuleStatusfromTestertoManagerComponent;
  let fixture: ComponentFixture<UpdateModuleStatusfromTestertoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateModuleStatusfromTestertoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateModuleStatusfromTestertoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
