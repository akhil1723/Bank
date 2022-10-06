import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser=""
  currentAcntno=""
  userDetails: any = {
    1000: { acno: 1000, username: "Akhil", password: 123, Balance: 20000,transaction:[] },
    1001: { acno: 1001, username: "Amal", password: 123, Balance: 50000,transaction:[] },
    1002: { acno: 1002, username: "Tans", password: 123, Balance: 70000,transaction:[] },
    1003: { acno: 1003, username: "Chris", password: 123, Balance: 80000,transaction:[] }
  }
  constructor() { }
  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { acno, username, password, Balance: 0 }
      console.log(userDetails);

      return true
    }
  }
  login(acnum: any, psw: any) {
    let userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]['password']) {
        this.currentUser=userDetails[acnum]['username']
        this.currentAcntno=acnum
        return true
      }
      else {
        alert('Incorrect Password')
        return false
      }
    }
    else {
      alert("Invalid User Account Number")
      return false
    }
  }
  deposit(usern:any,userp:any,usera:any) {
    let userDetails = this.userDetails
    var amount = parseInt(usera)
    if (usern in userDetails) {
      if (userp==userDetails[usern]['password']) {
        userDetails[usern]['Balance'] += amount
        userDetails[usern]['transaction'].push({type:'CREDIT',amount})

        return userDetails[usern]['Balance']

      }
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("Invalid User")
      return false
    }
  }
  withdraw(userdn:any,userdp:any,userda:any){
    
    let userDetails = this.userDetails
    var amount = parseInt(userda)
    if (userdn in userDetails) {
      if (userdp==userDetails[userdn]['password']) {
        if(amount<userDetails[userdn]['Balance']){
        userDetails[userdn]['Balance']= userDetails[userdn]['Balance']-amount
        userDetails[userdn]['transaction'].push({type:'DEBIT',amount})
        return userDetails[userdn]['Balance']
        }
        else{
          alert("Insufficient Fund")
        }
      }            
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("Invalid User")
      return false
    }
  }
  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']
  }

}

