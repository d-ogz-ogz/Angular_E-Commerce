import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './User';
import { UserService } from '../User.service';




@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  spinner: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.createRegisterForm();
  }

  createRegisterForm(): FormGroup {
    return this.formBuilder.group({
      customer_allow: this.formBuilder.control(true, [Validators.required]),
      customer_inform: this.formBuilder.control(true,),
      firstName: this.formBuilder.control(null, [Validators.required]),
      lastName: this.formBuilder.control(null, [Validators.required]),
      userName: this.formBuilder.control(null, [Validators.required, Validators.minLength(4)]),
      gender: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
      userEmail: this.formBuilder.control(null, [Validators.required, Validators.email]),
    })

  }
  submitForm() {
    this.userService.saveUser({ email: this.registerForm.value.userEmail, password: this.registerForm.value.password, userName: this.registerForm.value.userName, lastName: this.registerForm.value.lastName, firstName: this.registerForm.value.firstName, customer_inform: this.registerForm.value.customer_inform, customer_allow: this.registerForm.value.customer_allow, gender: this.registerForm.value.gender } as any);
    this.sendValidationMail(String(this.registerForm.value.userEmail));
    setTimeout(() => {
      this.spinner = true;
      this.router.navigate(['/validation']);
    }, 5000);
  }

  BackToHome() {
    this.router.navigate(["/home"]);
  }

  onSubmit() {
    alert("register works")
  }
  resetForm() {
    this.registerForm.reset();
  }
  sendValidationMail(mailUser: string,) {
    if (mailUser != "" && mailUser.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      this.userService.sendMail(mailUser)
    } else {
      alert("Invalid Email")
    }

  }
}
