import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
      color: white;
  }`]
})
export class ServerComponent {
  serverID = 10;
  serverStatus: string = 'offline';
  title: any = 'ekel';

  getServerStatus() {
    return this.serverStatus;
  }
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
}
