import { Component, OnInit } from '@angular/core';
import { Quote }from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, author:'Khalifatul Masih III',description:"Love For All, Hatred For None.",publisher:"cornelsen"},
    {id:2, author:'Amy Poehler',description:"Every moment is a fresh beginning.",publisher:"Cengage"},
    {id:3, author:'T.S Eliot',description:"Die with memories, not dreams. ",publisher:"bonnier"},
    {id:4, author:'Mark Twain',description:"Never regret anything that made you smile.",publisher:"shuster"},
    {id:5, author:'Pablo Picasso',description:"Everything you can imagine is real. ",publisher:"Penguin"},
    {id:6, author:' Leonardo da Vinci',description:"Simplicity is the ultimate sophistication",publisher:"Macmilla"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
