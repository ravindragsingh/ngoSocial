import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName1 : string = "";

  constructor (private http: HttpClient, private route : Router){

  }
  

  ngOnInit() {
  }
  login() {
       
    this.route.navigate(['/common/dashboard', { userId :this.userName1}]);
   
  }

}
