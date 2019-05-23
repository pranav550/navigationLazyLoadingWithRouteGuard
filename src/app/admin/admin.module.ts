import { LoginComponent } from './../login/login.component';
import { ProjectCreateComponent } from './../project-create/project-create.component';
import { ProjectUpdateComponent } from './../project-update/project-update.component';
import { ProjectListComponent } from './../project-list/project-list.component';
import { ProjectComponent } from './../project/project.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    ProjectComponent,
    ProjectCreateComponent,
    ProjectListComponent,
    ProjectUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
