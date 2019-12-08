import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  name: any;
  projectId: any;
  comments: any = [];
  commentsResponse: any;
  newComment: string;

  updateId: string;
  updateContent: string;
  updatedComment: string;

  public config: PerfectScrollbarConfigInterface = {};
  
  @ViewChild(PerfectScrollbarComponent, { static: false }) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: false }) directiveRef?: PerfectScrollbarDirective;
  dialogRef: any;

  constructor(public projectsService: ProjectService) { }

  ngOnInit() {
    history.pushState({data: history.state}, '', '');
    console.log(history.state.data.name)
    console.log(history.state.data.comments)

    this.name = history.state.data.name;
    this.comments = history.state.data.comments
    this.projectId = history.state.data.id

    this.getComments(this.projectId)
  }

  getComments(id: string) {
    this.projectsService.getComments(id).subscribe((res) => {
      this.commentsResponse = res
      this.comments = this.commentsResponse.comments
    });
  }

  viewComments(id){
    this.projectsService.getComments(id).subscribe()
  }

  deleteComment(id: string){
    this.projectsService.deleteComment(id).subscribe(
      (res) => this.getComments(this.projectId)
    );
  };

  addComment(comment: string, id: string){
    this.projectsService.addComment(comment, id).subscribe()
  };

  setUpdateValue(updateContent: string, updateId: string){
    this.updateContent = updateContent
    this.updateId = updateId
  }

  updateComment(updateId: string, updatedComment: string){
    updatedComment = this.updateContent
    this.projectsService.updateComment(updateId, updatedComment).subscribe(
      (res) => this.getComments(this.projectId)
    )
  }
}
