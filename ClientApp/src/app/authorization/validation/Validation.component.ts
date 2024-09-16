import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../User.service';




@Component({
  selector: 'app-Validate',
  templateUrl: './Validation.component.html',
  styleUrls: ['./Validation.component.css']
})
export class ValidationComponent implements OnInit {

  public validationForm!: FormGroup;
  public code!:string;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }




  ngOnInit() {
    this.validationForm = this.createValidationForm();
  }


  submitForm() {
    if (this.validationForm.value.code == this.code) {

    }
  }
  

  createValidationForm(): FormGroup {
    return this.formBuilder.group({
      code: this.formBuilder.control(null, [Validators.required]),
      //fullName: this.formBuilder.control(null, [Validators.required,
      //Validators.email]),
    })
  }
}
