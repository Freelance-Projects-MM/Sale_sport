import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authentifictionGroup!:FormGroup;

  constructor(private formBuilder: FormBuilder,private route:Router,private authentificationService:AuthentificationService) { }
  get email(){
    return this.authentifictionGroup.get('email');
  }
  get password(){
    return this.authentifictionGroup.get('password');
  }

  ngOnInit(): void {
    this.authentifictionGroup = this.formBuilder.group({
      email : [null,Validators.required],
      password:[null,Validators.required]
    })
  }
  connection(){
    console.log(this.authentifictionGroup);
    const data = {
      email: this.authentifictionGroup.value.email,
      password : this.authentifictionGroup.value.password
    }
    this.authentificationService.login(data).subscribe(res =>{
      console.log(res);
      if(res.status === 'true'){
        sessionStorage.setItem("token",res.access_Token);
        this.route.navigateByUrl('/dashboard');
      }
    })

  }

}
