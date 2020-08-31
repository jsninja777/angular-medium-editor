import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core'
import { Router } from "@angular/router"
import { faEdit, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from "../../shared/services/auth.service"
import { ContentService } from "../../shared/services/content.service"
import { User } from "../../shared/services/user"
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  textVar:string = ""
  faEdit = faEdit
  currentUser: User
  faSignOutAlt = faSignOutAlt
  BUTTONS = [
    'bold'
    ,'italic'
    ,'underline'
    
    ,'subscript'
    ,'superscript'
    ,'anchor'
    ,'quote'
    ,'pre'
    ,'orderedlist'
    ,'unorderedlist'
    ,'indent' 
    ,'justifyLeft'
    ,'justifyCenter'
    ,'justifyRight'
    ,'justifyFull'
    ,'h1'
    ,'h2'
    ,'h3'
    ,'h4'
    ,'h5'
    ,'h6'
  ]

  constructor(
    public authService: AuthService,
    private contentApi: ContentService,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.authService.userData.pipe(
      take(2)
    ).subscribe((data) => {
      this.currentUser = data
      if (this.currentUser.uid != "") {
        this.contentApi.GetContent(this.currentUser.uid).valueChanges().pipe(take(2))
        .subscribe(data => {
          if (data) {
            this.textVar = data.text
          }
        })
      }
    })
  }

  ngOnInit(): void {
    
  }
  changeEditor(): void {
    const userId = this.currentUser.uid
    this.contentApi.UpdateContent({$key: userId, text: this.textVar})
  }
}
