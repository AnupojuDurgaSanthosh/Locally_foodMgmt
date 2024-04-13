import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';

export const routes: Routes = [ 
  { path: 'practice', component: PracticeComponent},

];

@NgModule({
  declarations: [
    PracticeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TesingModule { }
