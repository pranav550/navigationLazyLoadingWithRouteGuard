import { LoginComponent } from './../login/login.component';
import { ProjectUpdateComponent } from './../project-update/project-update.component';
import { ProjectCreateComponent } from './../project-create/project-create.component';
import { ProjectListComponent } from './../project-list/project-list.component';
import { AdminGuard } from './admin.guard';
import { NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
    {
    path: 'list',
            component: ProjectListComponent},
    
        {
            path: 'create',
            component: ProjectCreateComponent,
            canActivate: [AdminGuard]
        },
        {
            path: 'update',
            component: ProjectUpdateComponent,
            canActivate: [AdminGuard]
        },
        { 
            path: 'login', 
            component: LoginComponent 
        }
    ]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }