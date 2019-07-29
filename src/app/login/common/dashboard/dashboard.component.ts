import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  responseProject: any;
  donorProfile: any;
  responseDonor: any;
  userId : string;
  private sub: any; 

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " from Dashboard Component");
            });
    let responseProject = this.http.get('http://smtb.mybluemix.net/get-project-info?projectId=project004');
    
    responseProject.subscribe(
      (retValProj) => {
        this.responseProject = retValProj;
        console.log(retValProj)
      }
     );

     let donorProfile = this.http.get('http://smtb.mybluemix.net/get-user?userId='+ this.userId +'&userType=donor');
    
     donorProfile.subscribe(
       (donorProf) => {
         this.donorProfile = donorProf;
        // console.log(donorProf)
       }
      );
      let responseDonor = this.http.get('http://smtb.mybluemix.net/get-project-donor?projectId=project001&donorId=' + this.userId);
    
     responseDonor.subscribe(
       (retValDonor) => {
         this.responseDonor = retValDonor;
         console.log(retValDonor)
       }
      );

  }

  projDet() {
    let responseProject = this.http.get('http://smtb.mybluemix.net/get-project-info?projectId=project001');
    
    responseProject.subscribe(
      (retValProj) => {
        this.responseProject = retValProj;
        console.log(retValProj)
      }
     );


  }
  financeDet() {
    let donorProfile = this.http.get('http://smtb.mybluemix.net/get-user?userId='+ this.userId + '&userType=donor');
    
     donorProfile.subscribe(
       (donorProf) => {
         this.donorProfile = donorProf;
         //console.log(donorProf)
       }
      );

  }
  moneDonated() {
    let responseDonor = this.http.get('http://smtb.mybluemix.net/get-project-donor?projectId=project001&donorId=' + this.userId);
    
     responseDonor.subscribe(
       (retValDonor) => {
         this.responseDonor = retValDonor;
         console.log(retValDonor)
       }
      );
  }

}
