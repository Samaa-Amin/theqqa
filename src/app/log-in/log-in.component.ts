import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userservice } from '../services/userservice.service';
import { data } from '../Model/ResponseData';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  myForm: FormGroup;
  userInfo;
  result:data;
  constructor(private fb: FormBuilder ,  private router: Router,private userservice:userservice) { }

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
    this.userservice.login(this.userInfo).subscribe(res=>  
      {  
        if(res.message=="invalid user infomation")
        {
          //this.dislogin=true;
        }
       if(res!=null)
       { 
        this.result= res.data;
         console.log('login successfully',res);
         localStorage.setItem('userToken',this.result.access_token);
         window.location.replace(''); 
         }
       else
       {
        //alert("login is unsuccessfully !! && password or username is incorect ") ;
       }
      })  
      ,err=>  
      {  
        console.log("Error Occured " + err);  
      } 


    // console.log('Valid?', form.valid); // true or false
    // console.log('Email', form.value.email);
    // console.log('password', form.value.password);

  }
}
