import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-aprofile',
  templateUrl: './aprofile.component.html',
  styleUrls: ['./aprofile.component.css']
})
export class AprofileComponent implements OnInit {


  user: any;
  constructor(private loginService : LoginService ) { }

  ngOnInit(): void {

    this.loginService.getCurrentUser().subscribe((currentUser: any) => {

      console.log(currentUser);
      this.user = currentUser;

        },
      (error) => {
        console.log(error);
      }
    )


  }

}