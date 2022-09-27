import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname=""
  acntn=""
  pswd=""

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  } 

  register(){
    var uname=this.uname
    var acntn=this.acntn
    var pswd=this.pswd
    const result=this.ds.register(acntn,uname,pswd)
    if(result){
      alert("Registered")
      this.router.navigateByUrl('')
    }
    else{
      alert('User already exist')
    }
  }

}
