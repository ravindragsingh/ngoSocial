import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ExpenditureDetailsComponent } from './expenditure-details/expenditure-details.component';
import { AvailableWithdrawComponent } from './available-withdraw/available-withdraw.component';
import { Router,ActivatedRoute  } from '@angular/router';

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
  donMon : any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " from Dashboard Component");
            });
    let responseProject = this.http.get('https://smtb.mybluemix.net/get-project-info?projectId=project008');
    
    responseProject.subscribe(
      (retValProj) => {
        this.responseProject = retValProj;
        console.log(retValProj)
      }
     );
     let responseProject2 = this.http.get('https://smtb.mybluemix.net/get-project-info?projectId=project007');
    
    responseProject2.subscribe(
      (retValProj2) => {
        this.responseProject2 = retValProj2;
        console.log(retValProj2)
      }
     );

     let donorProfile = this.http.get('https://smtb.mybluemix.net/get-user?userId='+ this.userId +'&userType=donor');
    
     donorProfile.subscribe(
       (donorProf) => {
         this.donorProfile = donorProf;
        // console.log(donorProf)
       }
      );
      let responseDonor = this.http.get('https://smtb.mybluemix.net/get-project-donor?projectId=project008&donorId=' + this.userId);
    
     responseDonor.subscribe(
       (retValDonor) => {
         this.responseDonor = retValDonor;
         console.log(retValDonor)
       }
      );

      let responseDonor2 = this.http.get('https://smtb.mybluemix.net/get-project-donor?projectId=project007&donorId=' + this.userId);
    
     responseDonor2.subscribe(
       (retValDonor2) => {
         this.responseDonor2 = retValDonor2;
         console.log(retValDonor2)
       }
      );

  } 
  //ngonInit End 

  projDet() {
    let responseProject = this.http.get('https://smtb.mybluemix.net/get-project-info?projectId=project001');
    
    responseProject.subscribe(
      (retValProj) => {
        this.responseProject = retValProj;
        console.log(retValProj)
      }
     );
  }

  


  financeDet() {
    let donorProfile = this.http.get('https://smtb.mybluemix.net/get-user?userId='+ this.userId + '&userType=donor');
    
     donorProfile.subscribe(
       (donorProf) => {
         this.donorProfile = donorProf;
         //console.log(donorProf)
       }
      );

  }
  moneDonated() {
    let responseDonor = this.http.get('https://smtb.mybluemix.net/get-project-donor?projectId=project008&donorId=' + this.userId);
    
     responseDonor.subscribe(
       (retValDonor) => {
         this.responseDonor = retValDonor;
         console.log(retValDonor)
       }
      );
  }

  donateMoney() {
    // const bodyData = {
    //   "projectId":"project006",
    //   "donorId":"surendra",
    //   "moneyToDonate": "20"
    // };

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    // };
    
    const body = new HttpParams()
    .set('projectId', "project008")
    .set('donorId', "surendra")
    .set('moneyToDonate', "20");


    this.http.post('https://smtb.mybluemix.net/donate-money',body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })    
     .subscribe(
       (retValDonote) => {
         this.donMon = retValDonote;
         console.log('POST DATA=' +retValDonote)
       }
      );
  }

}
