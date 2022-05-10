import { Component, OnInit } from '@angular/core';
import { AboutsurveydataService } from 'src/Services/aboutsurveydata.service';

@Component({
  selector: 'app-showqresult',
  templateUrl: './showqresult.component.html',
  styleUrls: ['./showqresult.component.css']
})
export class ShowqresultComponent implements OnInit {

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