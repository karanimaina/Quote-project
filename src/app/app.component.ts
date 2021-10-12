import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes!:string[];

constructor(){
  this.quotes =[ "Change the world by being yourself.","Every moment is a fresh beginning.","Never regret anything that made you smile","Love For All, Hatred For None. "] 
}
}