import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inner-hello',
  templateUrl: './inner-hello.component.html',
  styleUrls: ['./inner-hello.component.css']
})
export class InnerHelloComponent  {

  @Input() name: string;

  get runChangeDetection() {
    console.log('Inner hello view: Change Detection');
    return true;
  }

}
