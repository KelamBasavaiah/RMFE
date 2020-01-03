import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleStatusToDeveloperFromManagerComponent } from './module-status-to-developer-from-manager.component';

describe('ModuleStatusToDeveloperFromManagerComponent', () => {
  let component: ModuleStatusToDeveloperFromManagerComponent;
  let fixture: ComponentFixture<ModuleStatusToDeveloperFromManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleStatusToDeveloperFromManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleStatusToDeveloperFromManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
