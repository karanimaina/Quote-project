import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes:Quote[] = [
    {id:1, author:'Khalifatul Masih III',description:"Love For All, Hatred For None."},
    {id:2, author:'Amy Poehler',description:"Every moment is a fresh beginning."},
    {id:3, author:'T.S Eliot',description:"Die with memories, not dreams. "},
    {id:4, author:'Mark Twain',description:"Never regret anything that made you smile."},
    {id:5, author:'Pablo Picasso',description:"Everything you can imagine is real. "},
    {id:6, author:' Leonardo da Vinci',description:"Simplicity is the ultimate sophistication"},

  ]
}