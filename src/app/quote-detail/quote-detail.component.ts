import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  numberOfLikes : number = 0;
  numberOfDislikes: number = 0;
 

  likeButtonClick() {
    this.numberOfLikes++;
    if(this.numberOfLikes>20){
      alert("Excellent quote")
    }
  }
  dislikeButtonClick(){
    this.numberOfDislikes++;
    if(this.numberOfDislikes<-5){
      alert("oops! bad quote")
    } 
   
  }
  ;
  quoteSeen(seen:boolean){
    this.isComplete.emit(seen);
  };
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
