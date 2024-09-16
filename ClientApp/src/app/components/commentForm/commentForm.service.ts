import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'redux';
import { environment } from '../../../environments/environment';
import { UserComment } from './Comment';


@Injectable({
  providedIn: 'root'
})

export class CommentFormService {



  constructor(private http: HttpClient,) {

  }
  getComments(userId: number) {
    return this.http.get<UserComment[]>(environment.apiUrl + `/Comment/GetComments?userId=${userId}`).toPromise();
  }
  saveComment(comment: UserComment) {
    console.log(comment)
    return this.http.post(environment.apiUrl + '/Comment/SaveUserComment', comment).toPromise();


  }

}
