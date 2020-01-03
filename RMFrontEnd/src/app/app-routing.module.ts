import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignedModulesComponent } from './assigned-modules/assigned-modules.component';
import { TesterListComponent } from './tester-list/tester-list.component';
import { CompletedModulesComponent } from './completed-modules/completed-modules.component';
import { AssignDeveloperComponent } from './assign-developer/assign-developer.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ModulesForDeveloperComponent } from './modules-for-developer/modules-for-developer.component';
import { ModulesForTesterComponent } from './modules-for-tester/modules-for-tester.component';
import { ProjectsForDeveloperComponent } from './projects-for-developer/projects-for-developer.component';
import { ProjectsForTesterComponent } from './projects-for-tester/projects-for-tester.component';
import { ModuleStatusToDeveloperFromManagerComponent } from './module-status-to-developer-from-manager/module-status-to-developer-from-manager.component';
import { UpdateModuleStatusfromTestertoManagerComponent } from './update-module-statusfrom-testerto-manager/update-module-statusfrom-testerto-manager.component';
import { DeveloperLayoutComponent } from './developer-layout/developer-layout.component';
import { BugDetailsForDeveloperComponent } from './bug-details-for-developer/bug-details-for-developer.component';
import { BugModulesForDeveloperComponent } from './bug-modules-for-developer/bug-modules-for-developer.component';
import { UpdateBugStatusToTesterFromDeveloperComponent } from './update-bug-status-to-tester-from-developer/update-bug-status-to-tester-from-developer.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { GetBugFixedModulesComponent } from './get-bug-fixed-modules/get-bug-fixed-modules.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import { CreateProjectForManagerComponent } from './create-project-for-manager/create-project-for-manager.component';
import { GetModuleForManagerComponent } from './get-module-for-manager/get-module-for-manager.component';
import { ContactComponent } from './contact/contact.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CreateModulesComponent } from './create-modules/create-modules.component';
import { GetprojectForManagerComponent } from './get-project-for-manager/get-project-for-manager.component';
import { TesterLayoutComponent } from './tester-layout/tester-layout.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: 'login-page',
    component:LoginPageComponent
  },
  {
    path: 'adminlogin',
    component :AdminloginComponent
  },
  {
    path: 'userlogin',
    component: UserloginComponent
  },
 {
   path:'about',component:AboutComponent
 },
  
  {
    path:'adminLayout',component:AdminLayoutComponent,children:[
      { path: '', component: HomeComponent, pathMatch: 'full'},
      {path:'home',component:HomeComponent},
      {path:'InsertEmployee',component:InsertEmployeeComponent},
      {path:'ManageEmployee',component:GetAllEmployeesComponent},
      {path:'contact',component:ContactComponent}
    ]
  },

   {
     path:'managerLayout',component:ManagerLayoutComponent,
     children:[ 
      { path: '', component: HomeComponent, pathMatch: 'full'},
      {path:'home',component:HomeComponent},
      { path:'add-project',component:CreateProjectForManagerComponent,canActivate:[AuthGuard] }, 
      {path:'viewProjects',component:GetprojectForManagerComponent,canActivate:[AuthGuard]},    
      { path:'assigned-modules',component:AssignedModulesComponent,canActivate:[AuthGuard]},
      { path:'completed-modules', component:CompletedModulesComponent,canActivate:[AuthGuard]},
      { path:'completed-projects', component:CompletedProjectsComponent,canActivate:[AuthGuard]},      
      {path:'contact',component:ContactComponent,canActivate:[AuthGuard] }],canActivate:[AuthGuard]
  },
  {path:'add-modules/:projName',component:CreateModulesComponent,canActivate:[AuthGuard]},
  { path:'assign-tester/:ModuleName',component:TesterListComponent,canActivate:[AuthGuard] },  
     { path:'viewmodules/:ProjectName', component:GetModuleForManagerComponent,canActivate:[AuthGuard]},
     {path:'viewmodules',component:GetModuleForManagerComponent,canActivate:[AuthGuard]},
     {  path:'assign-developer/:ModuleName',component:AssignDeveloperComponent,canActivate:[AuthGuard]},

  {
    path:'',redirectTo : '/login-page',pathMatch: 'full'
  },
 

  {
    path:'developerLayout',component:DeveloperLayoutComponent,children:[     
       { path: '', component: HomeComponent, pathMatch: 'full'},
       {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
    {
      path:'contact',component:ContactComponent,canActivate:[AuthGuard]
    }, {
      path:'project-for-developer',component:ProjectsForDeveloperComponent,canActivate:[AuthGuard]
    }, {
      path:'bugdetailsForDeveloper',component:BugDetailsForDeveloperComponent,canActivate:[AuthGuard]
    },],canActivate:[AuthGuard]
 },
  
 {
   path:'testerLayout',component:TesterLayoutComponent,children:[  
     {path:'project-for-tester',component:ProjectsForTesterComponent,canActivate:[AuthGuard]},
       {path:'bugFixedModule',component:GetBugFixedModulesComponent,canActivate:[AuthGuard]},
        { path: '', component: HomeComponent, pathMatch: 'full'},
       {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
    {
      path:'contact',component:ContactComponent,canActivate:[AuthGuard]
    }],
       canActivate:[AuthGuard]
 },
  
 
 

  {
    path:'modules-for-developer',component:ModulesForDeveloperComponent,canActivate:[AuthGuard]

  },
  {
    path:'modules-for-developer/:projectname',component:ModulesForDeveloperComponent,canActivate:[AuthGuard]
  },
  {
    path:'modules-for-tester/:projectname',component:ModulesForTesterComponent,canActivate:[AuthGuard]
  },
  {
    path:'modules-for-tester',component:ModulesForTesterComponent,canActivate:[AuthGuard]
  },
  {
    path:'module-status',component:ModuleStatusToDeveloperFromManagerComponent,canActivate:[AuthGuard]
  },
  {
    path:'testerModuleStatus',component:UpdateModuleStatusfromTestertoManagerComponent,canActivate:[AuthGuard]
  },
    
  {
    path:'bugModulesForDeveloper/:module',component:BugModulesForDeveloperComponent,canActivate:[AuthGuard]
  },
  {
    path:'bugStatus/:module',component:UpdateBugStatusToTesterFromDeveloperComponent,canActivate:[AuthGuard]
  },
  {
    path:'createBug/:moduleName',component:CreateBugComponent,canActivate:[AuthGuard]
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
