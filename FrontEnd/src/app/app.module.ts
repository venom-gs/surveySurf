import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { CreatesurveyquestionComponent } from './createsurveyquestion/createsurveyquestion.component';
import { authInterceptorProviders } from 'src/Services/auth.intercepter';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { CreateaboutsurveyComponent } from './createaboutsurvey/createaboutsurvey.component';
import { QuestionsdataComponent } from './questionsdata/questionsdata.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowqueComponent } from './showque/showque.component';
import { ProfileComponent } from './profile/profile.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { AhomeComponent } from './ahome/ahome.component';
import { AprofileComponent } from './aprofile/aprofile.component';
import { SurveydataComponent } from './surveydata/surveydata.component';
import { ResultComponent } from './result/result.component';
import { ShowqresultComponent } from './showqresult/showqresult.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    CreateaboutsurveyComponent,
    CreatesurveyquestionComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    QuestionsdataComponent,
    HomepageComponent,
    SidebarComponent,
    ShowqueComponent,
    ProfileComponent,
    AsidebarComponent,
    AhomeComponent,
    AprofileComponent,
    SurveydataComponent,
    ResultComponent,
    ShowqresultComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
