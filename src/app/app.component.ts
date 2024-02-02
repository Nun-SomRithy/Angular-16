import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  logs = [];
  name = 'angular-v16';

  onToggleDetails() {
    this.showSecret= !this.showSecret;
    // @ts-ignore
    this.logs.push(this.logs.length + 1);
  }

}
