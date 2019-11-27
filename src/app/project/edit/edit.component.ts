import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectService } from '../../_services/project.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 @Input() editId: any = 'test'


 newProjectName = new FormControl('')
 newDescription = new FormControl('')
 newLocation = new FormControl('')
 newBadge = new FormControl('')

 name: string;
 description: string;
 location: string;
 badge: string;

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    history.pushState({data: history.state}, '', '');

    this.name = history.state.data.name;
    this.description = history.state.data.description;
    this.location = history.state.data.location;
    this.badge = history.state.data.badge;
  }

  updateProject(editId){
    // history.pushState({data: history.state}, '', '');
    this.editId = history.state.data.id
  
    // console.log('ID: ', history.state.data.id, "Name: ", history.state.data.name, "Description: ", history.state.data.description, "Location: ", history.state.data.location, "Badge: ", history.state.data.badge)
    this.projectService.editProject(history.state.data.id, this.newProjectName.value, this.newDescription.value, this.newLocation.value, this.newBadge.value)
    .subscribe()
    alert(`${this.newProjectName.value} was updated!`)
    window.location.href = '/projects' 
  }

}
