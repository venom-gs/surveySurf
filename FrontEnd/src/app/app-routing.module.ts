import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/Services/admin.guard';
import { NormalGuard } from 'src/Services/normal.guard';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AhomeComponent } from './ahome/ahome.component';
import { AprofileComponent } from './aprofile/aprofile.component';
import { CreateaboutsurveyComponent } from './createaboutsurvey/createaboutsurvey.component';
import { CreatesurveyquestionComponent } from './createsurveyquestion/createsurveyquestion.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionsdataComponent } from './questionsdata/questionsdata.component';
import { ResultComponent } from './result/result.component';
import { ShowqresultComponent } from './showqresult/showqresult.component';
import { ShowqueComponent } from './showque/showque.component';
import { SignupComponent } from './signup/signup.component';
import { SurveydataComponent } from './surveydata/surveydata.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AhomeComponent,
      },
      {
        path:'aprofile',
        component:AprofileComponent
      },
      {
      path: 'createsurveyquestion',
      component: CreatesurveyquestionComponent,
    },
    {
      path: 'questionsdata',
      component: ShowqresultComponent,
    },
    {
      path: 'surveyresult/:surveyId',
      component:ResultComponent
      
    },
    {
        path:'surveyquestions/:surveyId',
        component:ShowqueComponent
    },
    {
      path: 'createsurvey',
      // component:CreateaboutsurveyComponent,

      children:
        [
          {
            path: '',
            component: CreateaboutsurveyComponent,
          },

          {
            path: 'createsurveyquestion/:surveyId',
            component: CreatesurveyquestionComponent,
          },


        ]

    },


  ]
},


  {
    path: 'user',
    // component:HomeComponent,
    canActivate: [NormalGuard],
    children:
      [
        {
          path: '',
          component: HomepageComponent,
        },

        {
          path:'profile',
          component:ProfileComponent
        },

        {
          path: 'createsurveyquestion',
          component: CreatesurveyquestionComponent,
        },
        {
          path: 'questionsdata',
          component: QuestionsdataComponent,
        },
        {
            path:'surveyquestions/:surveyId',
            component:ShowqueComponent
        },
        {
          path: 'createsurvey',
          // component:CreateaboutsurveyComponent,

          children:
            [
              {
                path: '',
                component: CreateaboutsurveyComponent,
              },

              {
                path: 'createsurveyquestion/:surveyId',
                component: CreatesurveyquestionComponent,
              },


            ]

        },


      ]
  },

  // {
  //         path:'createsurvey',
  //         component:CreateaboutsurveyComponent,
  //       },

  //       {
  //         path:'createsurveyquestion',
  //         component:CreatesurveyquestionComponent,
  //       },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
