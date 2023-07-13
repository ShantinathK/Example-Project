import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example1';
  serveName = '';
  serverElements= [{type: 'server', name: 'Server Test', content: 'Using Input() decorative'}];
  



  onInput(event:any){
    this.serveName = (<HTMLInputElement>event.target).value;
  }

  onServerAdded(serverData: {servername: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.servername,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {servername: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.servername,
      content: blueprintData.serverContent
    });
    
  }
  onDestroy(){
    this.serverElements.splice(0, 1);
  };



}
