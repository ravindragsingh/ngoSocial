import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  donorProfile: any;
  responseDonor: any;
  userId : string;
  donorProf: any ;
  private sub: any; 

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
   
  }



}
