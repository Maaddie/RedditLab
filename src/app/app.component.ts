import { Component } from '@angular/core';
import { Convert, Reddit } from './Reddit';
import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RedditService]
})
export class AppComponent {
  title = 'RedditLab';
  reddit?: Reddit;
  

  constructor(private redditAPI:RedditService){}
  GetReddit() {
    let title: string = (<HTMLInputElement>document.getElementById("Title")).value;
    this.redditAPI.SearchPostByTitle(title).subscribe(
      (result: any) => {
        console.log(result);
        let json:string = Convert.redditToJson(result);
        let reddit: Reddit = Convert.toReddit(json);
        console.log(reddit);
        this.reddit = reddit;
      }        
    );
 }
}
