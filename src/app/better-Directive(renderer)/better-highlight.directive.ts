import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor = "transparent";
  @Input() highlightColor = "blue";
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding ('style.backgroundColor')backgroundColor: String;
  ngOnInit(){

    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');   //Just use of renderer2
    this.backgroundColor = this.defaultColor; // using dynamic data bindung
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue'); // using hostListner - onhover.
    // this.backgroundColor = "blue" //using Hostbinding
    this.backgroundColor = this.highlightColor; // using dynamic data bindung
    
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red'); // using hostListner - onleave.
    this.backgroundColor = "red" //using Hostbinding
    this.backgroundColor = this.defaultColor;
  }

}
