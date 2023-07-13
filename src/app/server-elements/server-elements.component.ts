import { Component, Input, OnInit,OnChanges, SimpleChanges, ViewEncapsulation, AfterContentInit, AfterViewInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom  // can use None or ShadowDom in place of Emulated
  encapsulation : ViewEncapsulation.Emulated
})
export class ServerElementsComponent implements OnInit, OnChanges, AfterContentInit,AfterViewInit {
@Input() 
element: {type: string, name: string, content: string}
@ViewChild('heading', {static: true}) header : ElementRef;
@ContentChild('contentChild',{static : true}) paragraph : ElementRef;

constructor(){
  
}
ngOnInit(): void {
  console.log("OnInit called");
  //try by uncommenting to see what is the difference compare with ngAfterViewInit
  // console.log("Template element accessed after LifeHook ngAfterViewInit() "+this.header.nativeElement.textContent);

  //try by uncommenting to see what is the difference compare with ngAfterContentInit
  console.log("Template element accessed after LifeHook ngAfterContentInit() "+this.paragraph.nativeElement.textContent);
}
ngOnChanges(changes :SimpleChanges){
  console.log("OnChange called");
  console.log(changes);
  
}
ngAfterContentInit(): void {
  console.log("AfterContentInit");
//   //try by uncommenting to see what is the difference compare with ngAfterViewInit
//   // console.log("Template element accessed after LifeHook ngAfterViewInit() "+this.header.nativeElement.textContent);  
     console.log("Template content accessed after LifeHook ngAfterContentInit() "+this.paragraph.nativeElement.textContent);
  
}
ngAfterViewInit(): void {
  console.log("AfterViewInit called");
  console.log("Template element accessed after LifeHook ngAfterViewInit() "+this.header.nativeElement.textContent);

  
}

}
