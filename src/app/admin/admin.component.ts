import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../_services/project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminResults: any = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(
      (response) => this.adminResults = response
    )
  }

  removeProject(id: string){
    console.log(id)
    this.projectService.removeProject(id).subscribe(
      (response) => window.location.href = '/admin'
    );
  }

  removeComment(id: string){
    console.log(id)
    this.projectService.removeComment(id).subscribe(
      (response) => window.location.href = '/admin'
    )
  }

}
