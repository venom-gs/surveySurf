import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AboutsurveydataService } from 'src/Services/aboutsurveydata.service';
import { AboutsurveyquestiondataService } from 'src/Services/aboutsurveyquestiondata.service';

@Component({
  selector: 'app-questionsdata',
  templateUrl: './questionsdata.component.html',
  styleUrls: ['./questionsdata.component.css']
})
  export class QuestionsdataComponent implements OnInit {
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