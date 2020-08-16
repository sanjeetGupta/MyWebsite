import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';
  intro = 'I am a Natural Language Processing Engineer with a passion for Automation.';
  page = 'home';

  // tslint:disable-next-line:typedef
  openPage( pageName ) {
    this.page = pageName;
  }
}
