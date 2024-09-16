import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserComment } from './Comment';
import { CommentFormService } from './commentForm.service';
import * as alertifyjs from 'alertifyjs';




@Component({
  selector: 'app-CommentForm',
  templateUrl: './CommentForm.component.html',
  styleUrls: ['./CommentForm.component.css'],

})
export class CommentFormComponent implements OnInit {
  public commentForm!: FormGroup;
  commentFormService: any;
  Comments!: UserComment[];
  public ContactModel!: UserComment;

  constructor(private router: Router, private formBuilder: FormBuilder, private commentService: CommentFormService
  ) {

  }

  ngOnInit(): void {
    this.commentForm = this.createCommentForm();

  }


 submitForm() {
    if (this.commentForm.valid) {
      var order = this.commentService.saveComment({ senderName: this.commentForm.value.senderName, email: this.commentForm.value.email, content: this.commentForm.value.content, contentHeader: this.commentForm.value.contentHeader } as any);
      alertifyjs.success("Your Comment Was Sended")
      this.router.navigate(["/payment"]);

    }
  }


  createCommentForm(): FormGroup {

    return this.formBuilder.group({
      senderName: this.formBuilder.control(null, [Validators.required]),
      contentHeader: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.required, Validators.email]),
      content: this.formBuilder.control(null, [Validators.required, Validators.minLength(5),
      Validators.maxLength(150)]),
    })
  }

  resetForm() {
    this.commentForm.reset();
  }

  getComment(userId: number) {
    this.commentService.getComments(userId).then(c => { this.Comments = c as UserComment[] })
  }
  BackToHome() {
    this.router.navigate(["/home"]);
  }


}







