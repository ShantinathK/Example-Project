import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output()
  serverCreated = new EventEmitter<{servername: string, serverContent: string}>()
  @Output()
  blueprintCreated = new EventEmitter<{servername: string, serverContent: string}>()

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverNameInput', {static: true}) serverNameInput :ElementRef;
  @ViewChild('serverContentInput', {static: true}) serverContentInput :ElementRef;
  
  // Using 2 way binding 
  // onAddServer(){
  //   this.serverCreated.emit({
  //     servername: this.newServerName, 
  //     serverContent: this.newServerContent})
  // }
  // ------------------------------------------------------

  // Using Local refernce 
  // onAddServer(nameInput: HTMLInputElement){
  //   this.serverCreated.emit({
  //     servername: nameInput.value, 
  //     serverContent: this.newServerContent})
  // }
  //------------------------------------------------------


  // Using @ViewChild() for only servercontent
  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({
      // servername: nameInput.value,    // using local reference 
      servername: this.serverNameInput.nativeElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  // onAddBluePrint(){
  //   this.blueprintCreated.emit({
  //     servername: this.newServerName, 
  //     serverContent: this.newServerContent})
  // }

  // USing Local template
//   onAddBluePrint(nameInput: HTMLInputElement){
//     this.blueprintCreated.emit({
//       servername: nameInput.value, 
//       serverContent: this.newServerContent})
//   }
// }


// @ViewChild()
onAddBluePrint(nameInput: HTMLInputElement){
  this.blueprintCreated.emit({
    servername: nameInput.value, 
    // servername: this.serverNameInput.nativeElement.value,
    serverContent: this.serverContentInput.nativeElement.value
  });
}
}
