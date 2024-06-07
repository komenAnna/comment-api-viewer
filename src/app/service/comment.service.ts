import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../comments';

@Injectable({
  providedIn: 'root'
})

//we’re importing the Comment interface and specifying that the getComments method returns an Observable of an array of 
// Comment objects.
export class CommentService {
  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseURL}/comments`);
  }
}

// Explanation of the getComments()
// -- this line of code uses Angulae HTTP CLIENT to make a GET request to the specified URL
// 1. this.http: is the Http client service provided by Angular. It makes Http requests to the server.
// 2. get: this is the method being called on the Http client to make a GET request to the specified URL
// 3. <Comment[]>: a type annotation that specifies the type of data that the response from the server will be, here an array of Comment
// 4. `${this.baseURL}/comments`: url that the request will be made to

