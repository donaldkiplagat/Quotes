import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote("Hard Times","Sam Holland","When hard times come,the tough get going",0,0,0),
    new Quote("Enjoyment","Ezio Hammarn","Joie de vivre",2,1,0),
  ]

}
