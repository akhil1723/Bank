import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user=""

  userdn = ""
  userdp = ""
  userda = ""
  usern = ""
  userp = ""
  usera = ""

  constructor(private ds: DataService) {
    this.user=this.ds.currentUser
   }

  ngOnInit(): void {
  }
  deposit() {
    var usern = this.usern
    var userp = this.userp
    var usera = this.usera
    const resulta = this.ds.deposit(usern, userp, usera)
    if (resulta) {
      alert(`${usera} is Credited ,new Balance is ${resulta}`)
    }

  }
  withdraw() {
    var userdn = this.userdn
    var userdp = this.userdp
    var userda = this.userda
    const resultb = this.ds.withdraw(userdn, userdp, userda)
    if (resultb) {
      alert(`${userda} is Credited ,new Balance is ${resultb}`)
    }

  }
}