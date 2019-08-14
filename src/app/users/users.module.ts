import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule  } from '@angular/material'; 

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [ListComponent]
})
export class UsersModule { }
