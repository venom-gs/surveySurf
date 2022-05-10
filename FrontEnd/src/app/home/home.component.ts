import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutformService } from 'src/Services/aboutform.service';
import { AboutsurveydataService } from 'src/Services/aboutsurveydata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutSurveys: any;
  constructor(private aboutSurveyService: AboutsurveydataService) {
    this.aboutSurveys =  [];
  }

  ngOnInit(): void {
      this.aboutSurveyService.getAboutSurveyAll().subscribe((data:any)=>{
        // console.log(data);
        this.aboutSurveys=data;
      },
        (error)=>{console.log(error);}
      )
  }

}