import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
allowNewServer: boolean = false;
serverCreationStatus = 'No server was Created';
serverName = 'TestServer';
userName = '';
serverCreated = false;
servers=  ['TestServer','TestServer2']
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created. Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
}


  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  deleteUserName() {
    this.userName = '';
  }
}
