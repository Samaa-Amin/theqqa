import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  myForm: FormGroup;
  userInfo;

  constructor(private fb: FormBuilder ,  private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z]\w{1,}@[a-z]{1,}.com$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$/)]], 
    });
  }

  onSubmit(form: FormGroup) {
    this.userInfo = {
      "email": form.value.email,
      "password": form.value.password,
    }
    console.log(this.userInfo)
    this.router.navigate(["/"])

    // console.log('Valid?', form.valid); // true or false
    // console.log('Email', form.value.email);
    // console.log('password', form.value.password);

  }
}
