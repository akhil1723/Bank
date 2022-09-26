import { Component, OnInit } from '@angular/core';

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
  userDetails: any = {
    1000: { acno: 1000, username: "Akhil", password: 123, Balance: 20000 },
    1001: { acno: 1001, username: "Amal", password: 123, Balance: 50000 },
    1002: { acno: 1002, username: "Tans", password: 123, Balance: 70000 },
    1003: { acno: 1003, username: "Chris", password: 123, Balance: 80000 }
  }

  constructor() { }

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
  login(a:any,b:any) {
    
    
    
    var acnum = a.value
    var psw = b.value
    let userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['password']) {
        alert("Login Success")
      }
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("Invalid User Account Number")
    }
  }
}
//   acntChange(event: any) {
//     this.acno = event.target.value;
//     console.log(event.target.value);


//   }
//   passwordChange(event: any) {
//     this.password = event.target.value
//     console.log(event.target.value);

//   }
// }
