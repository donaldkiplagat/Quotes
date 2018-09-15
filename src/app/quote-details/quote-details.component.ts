import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  @Output() isRating = new EventEmitter<boolean>();

  increaseRating(rating:boolean) {
    this.isRating.emit(rating);
  }

  deleteQuote(complete:boolean){
    this.isDelete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
