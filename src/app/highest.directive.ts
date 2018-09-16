import { Directive, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {

  constructor(private elem: ElementRef) {}

//   @HostListener("click") onClicks(){
//   this.textDeco("yellow")
// }
// @HostListener("dblclick") onDoubleClicks(){
//   this.textDeco("red")
// }
// $scope.max = Math.max.apply(Math,$scope.data.map(function(quote){
//   return quote.like;
// }));
  // Math.max(quotes.like){
  //   this.textDeco("line-through")
  // }

  // 
  //   @HostListener() highestLike(){
  //     let max:number;
  //     max= 5;
  //     if(this.quote.like>max){
  //       this.textDeco("yellow")
  //     }
  // }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor = action;

   }
}
