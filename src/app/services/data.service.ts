import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails: any = {
    1000: { acno: 1000, username: "Akhil", password: 123, Balance: 20000 },
    1001: { acno: 1001, username: "Amal", password: 123, Balance: 50000 },
    1002: { acno: 1002, username: "Tans", password: 123, Balance: 70000 },
    1003: { acno: 1003, username: "Chris", password: 123, Balance: 80000 }
  }
  constructor() { }
    register(acno:any,username:any,password:any)
    {
      let userDetails=this.userDetails
      if(acno in userDetails){
        return false
      }
      else{
        userDetails[acno]={acno,username,password,Balance:0}
        return true
      }
    }
  

}
