import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  age = 25;
  person = {
    name: 'Bulcsú',
    age: 25
  }

  getName () {
    return 'Bulcsú';
  }
}
