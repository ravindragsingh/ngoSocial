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
  responseProject2: any;
  donorProfile: any;
  responseDonor: any;
  responseDonor2 : any;
  userId : string;
  private sub: any; 

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " from Dashboard Component");
            });
    let responseProject = this.http.get('http://smtb.mybluemix.net/get-project-info?projectId=project006');
    
    responseProject.subscribe(
      (retValProj) => {
        this.responseProject = retValProj;
        console.log(retValProj)
      }
     );
     let responseProject2 = this.http.get('http://smtb.mybluemix.net/get-project-info?projectId=project005');
    
    responseProject2.subscribe(
      (retValProj2) => {
        this.responseProject2 = retValProj2;
        console.log(retValProj2)
      }
     );

     let donorProfile = this.http.get('http://smtb.mybluemix.net/get-user?userId='+ this.userId +'&userType=donor');
    
     donorProfile.subscribe(
       (donorProf) => {
         this.donorProfile = donorProf;
        // console.log(donorProf)
       }
      );
      let responseDonor = this.http.get('http://smtb.mybluemix.net/get-project-donor?projectId=project006&donorId=' + this.userId);
    
     responseDonor.subscribe(
       (retValDonor) => {
         this.responseDonor = retValDonor;
         console.log(retValDonor)
       }
      );

      let responseDonor2 = this.http.get('http://smtb.mybluemix.net/get-project-donor?projectId=project005&donorId=' + this.userId);
    
     responseDonor2.subscribe(
       (retValDonor2) => {
         this.responseDonor2 = retValDonor2;
         console.log(retValDonor2)
       }
      );

  } 
  //ngonInit End 

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
