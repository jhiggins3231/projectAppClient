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
  @Input () public projectId: any;
 

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    history.pushState({data: history.state}, '', '');
    console.log(history.state.data)
    console.log(this.projectId)
  }

deleteProject(projectId: string){
  this.projectId = projectId
  console.log(history.state.data.id)
  console.log(projectId)

  this.projectService.deleteProject(projectId).subscribe()
    };
}


