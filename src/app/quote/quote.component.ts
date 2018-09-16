import { Component, OnInit,OnDestroy} from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  private duration: number;
  quotes = [
    new Quote("Hard Times","Sam Holland","When hard times come,the tough get going",0,0,0),
    new Quote("Enjoyment","Ezio Hammarn","Joie de vivre",2,1,0),
  ]
  increaseRating(isRating,index){
    if(isRating){
      this.quotes[index].like +=1;
    }else{
      this.quotes[index].dislike +=1;
    }
  }

  get addNewQuoteFunc(){
    return this.addNewQuote.bind(this);
  }

  deleteQuote(isDelete,index){
    if(isDelete){
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(title:string,author:string,entry:string,time:number){
    let quote:Quote=new Quote(title,author,entry,0,0,0)
    this.duration = setInterval(()=>{
       quote.time += 1;
    },1000);
    this.quotes.push(quote);

  }

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    clearInterval(this.duration);
  }

}
