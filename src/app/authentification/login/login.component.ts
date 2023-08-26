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
  showAlert=false;
  alertMessag={
    message:'',
    classAlert:'alert alert-'
  }
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
        this.alertMessag.classAlert = 'alert alert-success';
        this.alertMessag.message = 'Connexion avec succes';
        this.showAlert = true
        sessionStorage.setItem("token",res.access_Token);
        this.route.navigateByUrl('/dashboard');
      }else{
        this.showAlert = true
        this.alertMessag.classAlert = 'alert alert-danger';
        this.alertMessag.message = res.message;
      }
    })

  }

}
