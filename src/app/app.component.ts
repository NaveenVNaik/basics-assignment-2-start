import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = '';
  userNameStatus: boolean = false;

  getUserNameStatus = () => {
    if(this.userName.length === 0)
      return false;
    return true;
  }
  
}
