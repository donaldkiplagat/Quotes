import { Component, OnInit,OnDestroy} from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  private duration: number;
  private id:number =0;
  quotes = [
  ]
  increaseRating(isRating,index){
    if(isRating){
      this.quotes[index].like +=1;
      this.getHighest();
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

  addNewQuote(id: number,title:string,author:string,entry:string,time:number){
    let quote:Quote=new Quote(id,title,author,entry,0,0,0,false)
    this.id += 1;
    quote.id = this.id;
    this.duration = setInterval(()=>{
       quote.time += 1;
    },1000);
    this.quotes.push(quote);

  }
  getHighest(){
    let highest = 0;
    let highestQuote: Quote;
    for(let quote of this.quotes){
      if(quote.like>highest){
        highest=quote.like;
        highestQuote=quote;
      }
    }
    console.log(highestQuote);
    this.getId(highestQuote);
  }

  getId(change:Quote){
    for(let quote of this.quotes){
      if(quote.id == change.id){
        quote.highest=true;
      }
      else{
        quote.highest=false;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy(){
    clearInterval(this.duration);
  }

}
