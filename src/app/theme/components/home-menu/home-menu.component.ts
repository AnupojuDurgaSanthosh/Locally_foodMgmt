import { Component,ViewChild  } from '@angular/core';
import { LoginSigninComponent } from '../login-signin/login-signin.component';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { MatSidenav } from '@angular/material/sidenav';
import { AddRestaurentComponent } from '../add-restaurent/add-restaurent.component';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent {
  menu: any;
  @ViewChild('sidenav') sidenav: MatSidenav;
 constructor( public dialog: MatDialog) { }

  ngOnInit() { }

  openMegaMenu(){
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el: any) {
        if(el.children.length > 0){
          if(el.children[0].classList.contains('mega-menu')){
            el.classList.add('mega-menu-pane');
          }
        }        
    });
  }
  public login(){
    const dialogRef = this.dialog.open(LoginSigninComponent, {
      panelClass: ['theme-dialog'],
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(State => { 
    console.log("closes")         
      })
  }
  public createacc(){
    const dialogRef = this.dialog.open(SigninComponent, {
      panelClass: ['theme-dialog'],
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(State => { 
    console.log("closes")         
      })
  }
  public addrestaurent(){
    const dialogRef = this.dialog.open(AddRestaurentComponent, {
      panelClass: ['theme-dialog'],
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(State => { 
    console.log("closes")         
      })
  }
  scrollToAbout() {
    const aboutUsSection = document.getElementById('about-us-section');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
