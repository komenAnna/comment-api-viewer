import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'comment-api-viewer';
}
