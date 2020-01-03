
export class Create{
    projectname:string;
    description:string;
    fromdate:Date;
    todate:Date;
    constructor(pn?,desc?,from?,to?){
        this.projectname=pn;
        this.description=desc;
       this.fromdate=from;
       this.todate=to;
    }

}