import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectName = new FormControl('')
  description = new FormControl('')
  location = new FormControl('')
  badge = new FormControl('')
  token = sessionStorage.getItem('token')

  constructor(public projectService: ProjectService) {}

  ngOnInit() {
  }

  addProjects(projectName: string, description: string, location: string, badge: string, owner: string) {

    this.projectService.add
    (this.projectName.value, this.description.value, this.location.value, this.badge.value)
    .subscribe()
    alert(`${this.projectName} was added to the database!`) 
    }
  }
