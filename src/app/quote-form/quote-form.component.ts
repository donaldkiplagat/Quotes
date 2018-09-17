import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","","",0,0,0,false);
  @Output() addQuote= new EventEmitter<Quote>();
  @Input() addNewQuote: Function;

  submitQuote(){
    this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit() {
  }
}
