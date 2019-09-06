import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: '-8w',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'realtime-blood-donation';

  constructor() {
    firebase.initializeApp(config);
  }

}
