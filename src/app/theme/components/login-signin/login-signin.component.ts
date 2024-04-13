import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SigninComponent } from '../signin/signin.component';

@Component({
  selector: 'app-login-signin',
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.scss']
})
export class LoginSigninComponent implements OnInit {
  public form: UntypedFormGroup;
  options = ['+91 India','+61 Australia'];
  selectedOption = '+91 India';  

  constructor(public dialogRef: MatDialogRef<LoginSigninComponent>,public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      phoneNumber: [null, Validators.required],
      countryCode: [null, Validators.required]
    })
  }

  public onSubmit(){
    // console.log("dialog:",this.form.value);
    // if(this.form.valid){
    //   this.dialogRef.close(this.form.value);
    // }
    this.dialogRef.close();

  }

  public createacc(){
    this.dialogRef.close();
    const dialogRef = this.dialog.open(SigninComponent, {
      panelClass: ['theme-dialog'],
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(State => { 
    console.log("closes")         
      })
  }

}
