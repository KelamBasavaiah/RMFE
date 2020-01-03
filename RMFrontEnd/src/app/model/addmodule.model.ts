
export class Add{
    Module_name:string;
    Module_description:string;
    Fromdate:Date;
    Todate:Date;
    projectname:string;
    constructor(mname?,mdesc?,mfrom?,mto?,pname?){
        this.Module_name=mname;
        this.Module_description=mdesc;
        this.Fromdate=mfrom;
        this.Todate=mto;
        this.projectname=pname;
    }
}