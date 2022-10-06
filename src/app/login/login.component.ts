import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Perfect Banking Partner"
  acnt = "enter your ac number"
  acno = ''
  password = ''
  


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // login() {
  //   var acnum = this.acno
  //   var psw = this.password
  //   let userDetails = this.userDetails
  //   if (acnum in userDetails) {
  //     if (psw == userDetails[acnum]['password']) {
  //       alert("Login Success")
  //     }
  //     else {
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else {
  //     alert("Invalid User Account Number")
  //   }
  // }
//   login(a:any,b:any) {
    
    
    
//     var acnum = a.value
//     var psw = b.value
//     let userDetails = this.userDetails
//     if (acnum in userDetails) {
//       if (psw == userDetails[acnum]['password']) {
//         alert("Login Success")
//       }
//       else {
//         alert("Incorrect Password")
//       }
//     }
//     else {
//       alert("Invalid User Account Number")
//     }
//   }
// }
//   acntChange(event: any) {
//     this.acno = event.target.value;
//     console.log(event.target.value);


//   }
//   passwordChange(event: any) {
//     this.password = event.target.value
//     console.log(event.target.value);

//   }
// }
login() {
    var acnum = this.acno
    var psw = this.password
    const result=this.ds.login(acnum,psw)
    if(result){
      alert("Login Successfully")
      this.router.navigateByUrl('dashboard')
      
    }
    else{
      alert('Invalid')
    }
  //   let userDetails = this.userDetails
  //   if (acnum in userDetails) {
  //     if (psw == userDetails[acnum]['password']) {
  //       alert("Login Success")
  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else {
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else {
  //     alert("Invalid User Account Number")
  //   }
  // }
}
}
