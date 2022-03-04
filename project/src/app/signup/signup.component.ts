import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userDetails:FormGroup

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.userDetails=this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      city:['',[Validators.required,Validators.minLength(5)]],
      age:['',[Validators.required,Validators.min(18)]]
    })
  }
  //getter method
  get username(){
    return this.userDetails.get("username")
  }
  get password(){
    return this.userDetails.get("password")
  }
  get email(){
    return this.userDetails.get("email")
  }
  get city(){
    return this.userDetails.get("city")
  }
  get age(){
    return this.userDetails.get("age")
  }
  formSubmit(){
    console.log(this.userDetails.value);
    
  }

}
