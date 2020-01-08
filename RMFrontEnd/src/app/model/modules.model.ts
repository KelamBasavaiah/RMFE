import { ThrowStmt } from '@angular/compiler';

export class Modules{
DeveloperName:string;
EmpEndDate:Date; 
EmpStartDate:Date; 
EmployeeId: string;
EmployeeName:string; 
ModuleDescription:string;
ModuleEndDate:Date;
ModuleId: string;
ModuleName:string
ModuleStartDate: Date;
ModuleStatus:string;
ProjectDescription:string;
ProjectEndDate:Date; 
ProjectId:string;
ProjectName:string;
ProjectStartDate:Date;
Role:string;
TesterName:string;
ModuleCount:number;
TotalModules:number;
Username:string;
Password:string;
Bugname:string;
Bugstatus:string;
Bugid:string;
authdata?:string;
Employee_mail:string;
Employee_addr:string;
Employee_joinDate:Date;
Employee_dob:Date;
Employee_bgroup:string;


    constructor(emp_Id?,emp_Name?,proj_id?,proj_Name?,projdes?,mod_Id?,mod_Name?,
        mod_Des?,role?,m_status?,dev_Name?,tes_Name?,
        mod_date?,proj_date?,proj_date1?, mod_date1?,emp_date1?,emp_date2?,m_count?,t_count?,username?,password?,
        bugname?,bugid?,bugstatus?,auth?,mailid?,addr?,jdate?,dob?,bgrp?
        ){
        
        this.ProjectName=proj_Name;
        this.ModuleName=mod_Name;
        this.DeveloperName=dev_Name;
        this.EmpEndDate=emp_date1;
        this.EmpStartDate=emp_date2;
        this.EmployeeId=emp_Id;
        this.EmployeeName=emp_Name;
        this.ModuleDescription=mod_Des;
        this.ModuleEndDate=mod_date;
        this.ModuleId=mod_Id;
        this.ModuleName=mod_Name;
        this.ModuleStartDate=mod_date1;       
        this.ModuleStatus=m_status;
        this.ProjectDescription=projdes;
        this.ProjectEndDate=proj_date;
        this.ProjectId=proj_id;      
        this.ProjectStartDate=proj_date1;
        this.Role=role;
        this.TesterName=tes_Name;
        this.ModuleCount=m_count;
        this.TotalModules=t_count;
        this.Username=username;
        this.Password=password;
        this.Bugname=bugname;
        this.Bugstatus=bugstatus;
        this.Bugid=bugid;
        this.authdata=auth;
        this.Employee_mail=mailid;
        this.Employee_addr=addr;
        this.Employee_joinDate=jdate;
        this.Employee_dob=dob;
        this.Employee_bgroup=bgrp;

    }
}