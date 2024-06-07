import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { Comment } from '../comments';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent {
// a property called comments of type Comment[] (array of Comment objects), 
// which is initialized as an empty array.
  comments: Comment[] = []

  // inject the CommentService instance into the component using Angular's dependency injection system.
  constructor(private commentService:CommentService){}

  // lifecycle hook: OnInit: 
  // 1. The ngOnInit() method is called when the component is initialized.
  // 2. the getComments() method of the CommentService is called to retrieve the list of comments
  // 3. getComments() method returns an observable, which is subscribed to using the subscribe() method.
  // 4. The subscribe() method takes a callback function as an argument.
  // 5. When the comments are received from the service, the comments property of the component is updated with the received comments.
  ngOnInit(): void {
    this.commentService.getComments().subscribe((comments)=>{
      this.comments = comments
      console.log(comments)
    })
  }
}
