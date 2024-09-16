import { Directive,ElementRef,Input } from '@angular/core';


//@Directive({
//  selector: "[myDirective]"
//})
export class MyDirective {
  //ElementRef= html'deki nesneye ulaşmamıza sağlar.
  constructor(private elementref: ElementRef) {
    this.elementref.nativeElement.style.backgroundcolor="color"

  }
  @Input() set backgroundColor(color: string) {
    this.elementref.nativeElement.style.backgroundcolor = color;
  }

}

