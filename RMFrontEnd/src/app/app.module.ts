import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StorageServiceModule } from 'angular-webstorage-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignedModulesComponent } from './assigned-modules/assigned-modules.component';
import { TesterListComponent } from './tester-list/tester-list.component';
import { ModuleService } from './service/assignedModules.service';
import { TesterService } from './service/tester-list.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompletedModulesComponent } from './completed-modules/completed-modules.component';
import { CompletedModuleService } from './service/completedModule.service';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { MatTableModule, MatBadgeModule } from '@angular/material';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AssignDeveloperComponent } from './assign-developer/assign-developer.component';
import { DeveloperService } from './service/assignDeveloper.service';
import { Userloginservice } from './service/user.service';
import { Adminloginservice } from './service/admin.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProjectsForDeveloperComponent } from './projects-for-developer/projects-for-developer.component';
import { ModulesForDeveloperComponent } from './modules-for-developer/modules-for-developer.component';
import { ModuleStatusToDeveloperFromManagerComponent } from './module-status-to-developer-from-manager/module-status-to-developer-from-manager.component';
import { DeveloperLayoutComponent } from './developer-layout/developer-layout.component';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProjectsForDeveloperService } from './service/projectForDeveloper.service';
import { ModulesForDeveloperService } from './service/modulesForDeveloper.service';
import { ModuleStatusFromDeveloperToTesterService } from './service/moduleStatusFromDeveloperToManager.service';
import { BugDetailsForDeveloperComponent } from './bug-details-for-developer/bug-details-for-developer.component';
import { BugModulesForDeveloperComponent } from './bug-modules-for-developer/bug-modules-for-developer.component';
import { UpdateBugStatusToTesterFromDeveloperComponent } from './update-bug-status-to-tester-from-developer/update-bug-status-to-tester-from-developer.component';
import { ProjectsForTesterComponent } from './projects-for-tester/projects-for-tester.component';
import { ModulesForTesterComponent } from './modules-for-tester/modules-for-tester.component';
import { UpdateModuleStatusfromTestertoManagerComponent } from './update-module-statusfrom-testerto-manager/update-module-statusfrom-testerto-manager.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { GetBugFixedModulesComponent } from './get-bug-fixed-modules/get-bug-fixed-modules.component';
import { TesterLayoutComponent } from './tester-layout/tester-layout.component';
import { BugService } from './service/bugDetailsForDeveloper.service';
import { BugStatusService } from './service/updateBugStatusToTester.service';
import { TesterProjectService } from './service/projectForTester.service';
import { TesterViewModuleService } from './service/modulesForTester.service';
import { TesterCreateBugService } from './service/createBug.service';
import { TesterBugDetailService } from './service/bugFixedDetails.service';
import { TesterModuleStatusService } from './service/updateStatusToManagerFromTester.service';
import { ViewModuleService } from './service/BugModulesForDeveloper.service';
import { BasicAuthInterceptor } from './basic-auth.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { CreateProjectForManagerComponent } from './create-project-for-manager/create-project-for-manager.component';
import { CreateModulesComponent } from './create-modules/create-modules.component';
import { GetModuleForManagerComponent } from './get-module-for-manager/get-module-for-manager.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { Route, Router,RouterModule } from '@angular/router';
import { GetprojectForManagerComponent } from './get-project-for-manager/get-project-for-manager.component';
import { CompletedProjectService } from './service/compltedProject.service';
import { CreateService } from './service/createproject.service';
import { viewprojectsService } from './service/viewproject.service';
import { viewmoduleService } from './service/viewmodule.service';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { AddModule } from './service/addmodule.service';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { AdminValueService } from './service/adminlogin.service';
import{ ToastrModule} from'ngx-toastr';
  import { from } from 'rxjs';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const myRoutes:Route[]=[{path:'about',component:AboutComponent},
 {path:'home',component:HomeComponent},
 {path:'contact',component:ContactComponent},
// {path:'createProject',component:CreateProjectForManagerComponent},
// {path:'GetProjectForManager',component:GetprojectForManagerComponent},
// {path:'AssignedModules',component:AssignedModulesComponent},
// {path:'completedModules',component:CompletedModulesComponent},
// {path:'completedProject',component:CompletedProjectsComponent},
// {path:'projectForDeveloper',component:ProjectsForDeveloperComponent},
// {path:'BugDetailsForDeveloper',component:BugDetailsForDeveloperComponent},
// {path:'projectsForTester',component:ProjectsForTesterComponent},
// {path:'BugDetailsForTester',component:GetBugFixedModulesComponent}
]
const material = [MatTableModule];

@NgModule({
  declarations: [
    AppComponent,
    AssignedModulesComponent,
    TesterListComponent,
    CompletedModulesComponent,
    CompletedProjectsComponent,
    AssignDeveloperComponent,
    AdminloginComponent,
    UserloginComponent,
    LoginPageComponent,
    AdminLayoutComponent,
    ProjectsForDeveloperComponent,
    ModulesForDeveloperComponent,
    ModuleStatusToDeveloperFromManagerComponent,
    DeveloperLayoutComponent,
    BugDetailsForDeveloperComponent,
    BugModulesForDeveloperComponent,
    UpdateBugStatusToTesterFromDeveloperComponent,
    ProjectsForTesterComponent,
    ModulesForTesterComponent,
    UpdateModuleStatusfromTestertoManagerComponent,
    CreateBugComponent,
    GetBugFixedModulesComponent,
    TesterLayoutComponent,
    CreateProjectForManagerComponent,
    CreateModulesComponent,
    GetModuleForManagerComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ManagerLayoutComponent,
    GetprojectForManagerComponent,
    LayoutHeaderComponent,
    InsertEmployeeComponent,
    GetAllEmployeesComponent,
    UpdateEmployeeComponent
    
  ],
  imports: [
    //RouterModule.forRoot(myRoutes),
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,HttpClientModule,
    MatButtonModule,
    MatBadgeModule,
    ToastrModule.forRoot()
    
  ],
  providers: 
  [        { provide: HTTP_INTERCEPTORS, useClass:BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi: true },


    ModuleService,CompletedProjectService,BugStatusService, AddModule,AdminValueService,Adminloginservice,   viewprojectsService,viewmoduleService, TesterService,CreateService, CompletedModuleService, DeveloperService, Userloginservice, Adminloginservice,
  ProjectsForDeveloperService,ModulesForDeveloperService,ModuleStatusFromDeveloperToTesterService,BugService,TesterProjectService,
TesterViewModuleService,TesterCreateBugService,TesterBugDetailService,TesterModuleStatusService,ViewModuleService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
