import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BusinessComponent } from './business.component';



export const routes = [ 
  { 
    path: '', 
    component:BusinessComponent , children: [
      { path: 'testing', loadChildren: () => import('./tesing/tesing.module').then(m => m.TesingModule) }, 
    ]
    }
  ]
@NgModule({
  declarations: [
  BusinessComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BusinessModule { }
