import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import{Router,ActivatedRoute} from '@angular/router';
import{Modules} from '../model/modules.model';
import{TesterCreateBugService} from '../service/createBug.service'

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit {

  createBug:Modules;


bugDetail = new FormControl('', [
  Validators.required]);
  bugDetails = new FormControl('', [
    Validators.required]);
 
    public ownerForm: FormGroup;

constructor(private createBugService:TesterCreateBugService,private myRoute:Router,private _snackBar: MatSnackBar,private myactivate:ActivatedRoute) { 
  this.createBug= new Modules();
  this.myactivate.params.subscribe((p)=>{
    this.createBug.ModuleId=p["moduleName"]
  })
}

ngOnInit() {
  this.ownerForm = new FormGroup({
    fBugName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    fBugStatus: new FormControl('', [Validators.required])
    
  })
  
}
createBugs(){
 // console.log(this.createBug);
  this.createBugService.addBugs(this.createBug).subscribe((res=>{
    if(res==true){
      this._snackBar.open('Created Successfully',null,{duration:2500} )
    }
    else{
      this._snackBar.open('Not created',null,{duration:2500} )

    }
  }))

  this.bugDetail.reset();
  this.bugDetails.reset();
 

}
viewModule(){
  this.myRoute.navigate(["/project-for-tester"])
}


}
