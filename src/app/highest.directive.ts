import { Directive, ElementRef,Input,HostListener,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighest]'
})
export class HighestDirective implements OnInit {
  @Input("appHighest") highest: boolean;

  constructor(private elem: ElementRef) {}

  @HostListener("change") ngOnChanges(){
    if(this.highest){
      this.elem.nativeElement.style.backgroundColor= 'yellow';
      console.log("Done In")
    }else{
      this.elem.nativeElement.style.backgroundColor= 'black';
      console.log("Done")
    }
  }
  ngOnInit(){

  }

}
