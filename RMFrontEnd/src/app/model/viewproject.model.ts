export class Project{
    Module_name:string;
    Module_description:string;
    Module_status:string;
    Fromdate:Date;
    Todate:Date;
    constructor(mname?,mdesc?,mstatus?,mfrom?,mto?)
    {
        this.Module_name=mname;
        this.Module_description=mdesc;
        this.Module_status=mstatus;
        this.Fromdate=mfrom;
        this.Todate=mto;
    }
}