import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<% selector %>',
  template: `
    <h1>Test schematics</h1>
    <h2>dasherize(name) funcionando!</h2>
  `,
  styles: []
})
export class <%= classify(name) %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
