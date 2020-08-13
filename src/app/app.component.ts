import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-lisne: component-selector
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stepacard';
}
