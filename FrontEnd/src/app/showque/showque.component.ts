import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AboutsurveyquestiondataService } from 'src/Services/aboutsurveyquestiondata.service';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-showque',
  templateUrl: './showque.component.html',
  styleUrls: ['./showque.component.css']
})
export class ShowqueComponent implements OnInit {

  //counting Result
  countResultAgree =0;
  countResultDisagree =0;


  isDisabled : any;
  id: any;
  userEmail:string;
  surveyQuestion: any;
public surveyResponseData = {
  questionId:'',
  surveyResponse:'',
  userEmail:''
};
  gotSurveyId : string;
  constructor(private loginServivce: LoginService, private activatedRoute: ActivatedRoute, private snack: MatSnackBar, private aboutSurveyQuestionDataService: AboutsurveyquestiondataService) {
this.isDisabled = [];
    this.userEmail='';
    this.surveyQuestion = [];
    this.id = '';
    this.gotSurveyId = '';
  }


  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['surveyId'];

    this.aboutSurveyQuestionDataService.getAboutSurveyQuestionById(this.id).subscribe((data: any) => {
      this.surveyQuestion = data;
      console.log(this.surveyQuestion);



    },
      (error) => {
        console.log(error);
      }
    )
  }
  
//submitting user response for particular question
  submitQuestion(questionId:any, surveyResponse:any, i : number) {

    //getting current user
    this.loginServivce.getCurrentUser().subscribe((currentUser: any) => {

      // console.log(currentUser);

      // console.log(questionId);
      this.userEmail=currentUser.email;


      this.surveyResponseData.userEmail = currentUser.email;
      this.surveyResponseData.questionId = questionId;
      this.surveyResponseData.surveyResponse = surveyResponse;
      
      // this.surveyResponseData = [questionId,this.userEmail, surveyResponse];

//posting user response to the database
      // if(surveyQuestionResponse == 0 || surveyQuestionResponse == 1){
      //   this.surveyResponseData.push(surveyQuestionResponse)
      
      // }
      
      // console.log(this.surveyResponseData);

          
          this.aboutSurveyQuestionDataService.setUserResopnseForSurveyQuestion(this.surveyResponseData).subscribe((userResponse: any) => {
            
            

            console.log("Disagree -> ",this.countResultDisagree,"Agree ->", this.countResultAgree)
    
      
      this.isDisabled[i] = true;

      //       console.log(userResponse.questionId.length);
      // for(var j = 0; j < 4; j++)
      // {
      //   console.log("for loop mai aa gya");
      //     if(userResponse[j].questionId == this.surveyResponseData.questionId && userResponse[j].surveyResponse == 0)
      //     {
      //       this.countResultDisagree += 1;
      //       console.log("gotuserRespnse", userResponse[j].questionId);
      //     }
      //     else if(userResponse[j].questionId == this.surveyResponseData.questionId && userResponse[j].surveyResponse == 1)
      //     {
      //       console.log("gotuserRespnse", userResponse[j].questionId);

      //       this.countResultAgree += 1;
      //     }
      // }
              
              },
            (error) => {
              console.log(error);
            }
          )
        },
      (error) => {
        console.log(error);
      }
    )


    //constains the body for question response
    

  }

}
