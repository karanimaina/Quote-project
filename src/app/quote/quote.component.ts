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
   new Quote(1, 'Khalifatul Masih III',"Love For All, Hatred For None.","cornelsen",new Date(2009,3,14)),
   new Quote(2, 'Amy Poehler',"Every moment is a fresh beginning.","Cengage",new Date(2020,3,14)),
   new Quote(3, 'T.S Eliot',"Die with memories, not dreams. ","bonnier", new Date(2020,3,14)),
   new Quote(4, 'Mark Twain',"Never regret anything that made you smile.","shuster", new Date(2020,3,14)),
   new Quote(5, 'Pablo Picasso',"Everything you can imagine is real. ","Penguin", new Date(2020,3,14)),
   new Quote(6, ' Leonardo da Vinci',"Simplicity is the ultimate sophistication","Macmilla", new Date(2013,3,14)),

  ]
  addNewQuote(quote: any){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
    
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
}
