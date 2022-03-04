import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
userDetails:FormGroup
  constructor(public fb:FormBuilder,public router:Router) { }
ngOnInit(): void {
  this.userDetails=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
}
 
 //getter method
 get username(){
   return this.userDetails.get("username")
 }
 get password(){
    return this.userDetails.get("password")
 }
 formSubmit(){
    console.log(this.userDetails.value)
 }
 goToSignUp(){
this.router.navigateByUrl('signup')
 }


}
