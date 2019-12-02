import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { FormControl } from '@angular/forms';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatTable} from "@angular/material";
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})




export class ProjectComponent implements OnInit{
  displayedColumns: string[]=
      ['Project Name', 'Description', 'Location', 'Badge', 'ID'];
  projectName = new FormControl('')
  description = new FormControl('')
  location = new FormControl('')
  badge = new FormControl('')
  byBadge = new FormControl('')
  updateBadge = new FormControl('');
  token = sessionStorage.getItem('token')
  dataSource: any = [];
  closeResult: string;
 
  
  
  public disabled: boolean = false;
  responseProjects: any = [];
  
  
  public config: PerfectScrollbarConfigInterface = {};
  
  @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: false }) directiveRef?: PerfectScrollbarDirective;
  dialogRef: any;
  
  constructor(public projectService: ProjectService, private router: Router, private dialog: MatDialog) {}
  ngOnInit() {
  }
  
  openDialog(id: string) {
    let projectId:string = id
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  this.dialog.open(DialogComponent, {
    data: {
      passedId: projectId
    }});
  console.log(projectId)
}

addProjects(projectName: string, description: string, location: string, badge: string, owner: string) {

    this.projectService.add
    (this.projectName.value, this.description.value, this.location.value, this.badge.value)
    .subscribe()
    alert(`${this.projectName.value} was added to the database!`) 
    }

    
getByBadge(byBadge: string) {
  this.projectService.getByBadge(this.byBadge.value).subscribe(res => 
    {
      this.dataSource = res;
      console.log(this.dataSource)
    })
}
getByBadge1(badge: string) {
  this.projectService.getByBadge(this.badge.value).subscribe(res => 
    {
      this.dataSource = res;
      console.log(this.dataSource)
    })
}

deleteProject(projectId: string){
  console.log(projectId)
  this.projectService.deleteProject(projectId).subscribe()
};
}
