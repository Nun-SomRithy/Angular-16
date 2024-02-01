import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // template: '<app-server></app-server><app-server></app-server>',
  // styles: [`
  //   p {
  //     color: red;
  //     text-align: center;
  //     border: 1px;
  //     border-style: solid;
  //   }
  // `]
})
export class ServersComponent {
  allowNewServer: boolean =false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  serverCreated: boolean = false;
  servers: Array<any> = ['Test', 'Test2'];

  // constructor() {
  //   if (this.serverName === '') {
  //     this.allowNewServer = true;
  //   }
  // }
  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreated= true;
    this.serverCreationStatus = 'Server was created! The Name is ' + this.serverName;
    console.log("server that you created is " + this.serverName);
  }

  onClearText() {
    this.serverName = '';
    this.serverCreationStatus = 'No server was created!';
  }
  onUpdateServerName(event:Event) {
    // console.log(event);
  this.serverName = (<HTMLInputElement>event.target).value;
  }
}
