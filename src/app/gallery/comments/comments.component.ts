import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  name: any;
  projectId: any;
  comments: any = [];
  newComment: string;

  constructor(public projectsService: ProjectService) { }

  ngOnInit() {
    history.pushState({data: history.state}, '', '');
    console.log(history.state.data.name)
    console.log(history.state.data.comments)

    this.name = history.state.data.name;
    this.comments = history.state.data.comments
    this.projectId = history.state.data.id
  }

  getComments(id: string) {
    this.projectsService.getComments(id).subscribe(
      (res) => this.comments = res.comments
    );
  }

  deleteComment(id: string){
    this.projectsService.deleteComment(id).subscribe();
  };

  addComment(comment: string, id: string){
    this.projectsService.addComment(comment, id).subscribe()
  };

}
