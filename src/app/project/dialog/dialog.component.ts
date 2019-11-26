import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectService } from '../../_services/project.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  projectName = new FormControl('')
  description = new FormControl('')
  location = new FormControl('')
  badge = new FormControl('')
  projectId: any;
 

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
  }

deleteProject(projectId: string){
  console.log()
  this.projectService.deleteProject(projectId).subscribe()
    };
}


