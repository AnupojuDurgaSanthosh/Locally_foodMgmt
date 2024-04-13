import { Component , OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { LoginSigninComponent } from '../login-signin/login-signin.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit  {
  constructor(public dialogRef: MatDialogRef<SigninComponent>,public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  public login(){
    this.dialogRef.close();
    const dialogRef = this.dialog.open(LoginSigninComponent, {
      panelClass: ['theme-dialog'],
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(State => { 
    console.log("closes")         
      })
  }
}
