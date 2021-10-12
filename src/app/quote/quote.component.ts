import { Component, OnInit } from '@angular/core';
import { Quote }from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quotes:Quote[] = [
   new Quote(1, 'Khalifatul Masih III',"Love For All, Hatred For None.","cornelsen"),
   new Quote(2, 'Amy Poehler',"Every moment is a fresh beginning.","Cengage"),
   new Quote(3, 'T.S Eliot',"Die with memories, not dreams. ","bonnier"),
   new Quote(4, 'Mark Twain',"Never regret anything that made you smile.","shuster"),
   new Quote(5, 'Pablo Picasso',"Everything you can imagine is real. ","Penguin"),
   new Quote(6, ' Leonardo da Vinci',"Simplicity is the ultimate sophistication","Macmilla"),

  ]

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
    
  }}
