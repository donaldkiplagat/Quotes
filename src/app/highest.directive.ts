import { Directive, ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective {

  constructor(private elem: ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDeco("red")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("black")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor = action;

   }
}
