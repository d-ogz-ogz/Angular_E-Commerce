import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../User.service';




@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }




  ngOnInit() {
    this.loginForm = this.createLoginForm();
  }


  submitForm() {


    var login = this.userService.login({ email: this.loginForm.value.email, password: this.loginForm.value.password });
    console.log(login)
  }

  createLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: this.formBuilder.control(null, [Validators.required,
        Validators.email]),
      //fullName: this.formBuilder.control(null, [Validators.required,
      //Validators.email]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(6),])
    })
  }
}
