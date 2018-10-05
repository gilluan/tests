import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent  {

   @Input() config;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
