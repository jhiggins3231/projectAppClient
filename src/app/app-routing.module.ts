import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CommentsComponent } from './gallery/comments/comments.component'
import { DialogComponent } from './project/dialog/dialog.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './_services/admin.guard';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'projects', component: ProjectComponent},
  { path: 'gallery', pathMatch: 'full', component: GalleryComponent},
  { path: 'comments',  pathMatch: 'full', component: CommentsComponent },
  { path: '', component : LoginComponent},
  { path: 'projects/dialog', component: DialogComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
