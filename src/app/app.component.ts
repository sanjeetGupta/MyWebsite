import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';
  page = 'home';

  // tslint:disable-next-line:typedef
  openPage( pageName ) {
    this.page = pageName;
  }
}
