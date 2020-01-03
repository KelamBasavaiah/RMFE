import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';



@Injectable({
  providedIn: 'root'
})
export class TesterModuleStatusService {

  constructor(public dialog: MatDialog ){
  }
 
}
  
