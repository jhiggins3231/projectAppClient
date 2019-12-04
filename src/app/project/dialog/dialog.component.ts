import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectService } from '../../_services/project.service';
import { MAT_DIALOG_DATA } from '@angular/material';

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
  @Input() title: string;
 

  constructor(public projectService: ProjectService, @Inject(MAT_DIALOG_DATA)public data: any) { }
  ngOnInit() {
    console.log(this.data)
  }

deleteProject(deleteId: string){
  console.log(this.data)
  deleteId = this.data.passedId
  console.log(deleteId)
  this.projectService.deleteProject(deleteId).subscribe()
};

updateProject(deleteId: string) {
  deleteId = this.data.passedId
  this.projectService.editProject(deleteId, this.projectName.value, this.description.value, this.location.value, this.badge.value).subscribe()
};
}


