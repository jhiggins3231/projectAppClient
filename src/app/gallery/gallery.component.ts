import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../_services/project.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryProjects: any = [];

  constructor(public projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(
      (results) => this.galleryProjects = results
    )
  }

}
