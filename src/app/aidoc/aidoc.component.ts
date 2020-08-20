import {Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './aidoc.component.html',
  styleUrls: ['./aidoc.component.css']
})

export class AidocComponent {
  question = '';
  answer = '';
  URL = ;
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  sendRequest() {
    // tslint:disable-next-line:triple-equals
    if (this.question === '') {
      this.answer = 'Please Enter a question';
    } else {
      this.answer = 'Processing ....';
      const data = {inputs: ['ask_doc: g_t M a_t 23 q_t ' + this.question, 'ask_doc: g_t M a_t 23 q_t ' + this.question]};
      console.log('Sending Request......');
      console.log(data);
      this.http.post(this.URL, data, {headers: {'Content-Type': 'application/json'}})
        .subscribe(
          (resp: any) => {
            console.log('Response Received');
            this.answer = resp.output;
          },
          (error: any) => {
            console.log('Response Received with error ');
            this.answer = 'Something went wrong. Please, try Again.';
          }
        );
    }
  }
}

