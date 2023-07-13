import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighligth]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef){

    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.color = 'green';
    }
}