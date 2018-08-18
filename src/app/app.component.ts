import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {MessagingService} from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  message;

  constructor(private messagingService: MessagingService) {}


  ngOnInit() {
    /*
    this.msgService.getPermission();
    this.msgService.receiveMessage();
    this.message = this.msgService.currentMessage;
    */

    // const userId = 'user001';
    const userId = 'Zd3HmJCFz7fdeWamtkd9d4XULfJ2';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;

  }

}
