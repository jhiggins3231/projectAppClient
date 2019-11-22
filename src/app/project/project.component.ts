import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../_services/project.service';
import { FormControl } from '@angular/forms';
// import { PerfectScrollbarConfigInterface,
//   PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit{
  displayedColumns: string[]=
      ['Project Name', 'Description', 'Location', 'Badge'];
  projectName = new FormControl('')
  description = new FormControl('')
  location = new FormControl('')
  badge = new FormControl('')
  byBadge = new FormControl('')
  token = sessionStorage.getItem('token')
  dataSource: any = [];
  public type: string = 'component';

  public disabled: boolean = false;

  // public config: PerfectScrollbarConfigInterface = {};

  // @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;
  // @ViewChild(PerfectScrollbarDirective, { static: false }) directiveRef?: PerfectScrollbarDirective;

constructor(public projectService: ProjectService) {}

ngOnInit() {
  
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
}
