import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  faGooglePlusG = faGooglePlusG
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
