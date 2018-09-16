import { Directive, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {

  constructor(private elem: ElementRef) {}

  @HostListener("click") onClicks(){
  this.textDeco("yellow")
}
@HostListener("dblclick") onDoubleClicks(){
  this.textDeco("red")
}
// $scope.max = Math.max.apply(Math,$scope.data.map(function(quote){
//   return quote.like;
// }));
  // Math.max(quotes.like){
  //   this.textDeco("line-through")
  // }
  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor = action;

   }
}
